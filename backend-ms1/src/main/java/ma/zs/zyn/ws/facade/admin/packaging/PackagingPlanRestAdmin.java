package  ma.zs.zyn.ws.facade.admin.packaging;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import java.util.Arrays;
import java.util.ArrayList;

import ma.zs.zyn.bean.core.packaging.PackagingPlan;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingPlanCriteria;
import ma.zs.zyn.service.facade.admin.packaging.PackagingPlanAdminService;
import ma.zs.zyn.ws.converter.packaging.PackagingPlanConverter;
import ma.zs.zyn.ws.dto.packaging.PackagingPlanDto;
import ma.zs.zyn.zynerator.controller.AbstractController;
import ma.zs.zyn.zynerator.dto.AuditEntityDto;
import ma.zs.zyn.zynerator.util.PaginatedList;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zs.zyn.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.zs.zyn.zynerator.dto.FileTempDto;

@RestController
@RequestMapping("/api/admin/packagingPlan/")
public class PackagingPlanRestAdmin {




    @Operation(summary = "Finds a list of all packagingPlans")
    @GetMapping("")
    public ResponseEntity<List<PackagingPlanDto>> findAll() throws Exception {
        ResponseEntity<List<PackagingPlanDto>> res = null;
        List<PackagingPlan> list = service.findAll();
        HttpStatus status = HttpStatus.NO_CONTENT;
            converter.initObject(true);
        List<PackagingPlanDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds an optimized list of all packagingPlans")
    @GetMapping("optimized")
    public ResponseEntity<List<PackagingPlanDto>> findAllOptimized() throws Exception {
        ResponseEntity<List<PackagingPlanDto>> res = null;
        List<PackagingPlan> list = service.findAllOptimized();
        HttpStatus status = HttpStatus.NO_CONTENT;
        converter.initObject(true);
        List<PackagingPlanDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds a packagingPlan by id")
    @GetMapping("id/{id}")
    public ResponseEntity<PackagingPlanDto> findById(@PathVariable Long id) {
        PackagingPlan t = service.findById(id);
        if (t != null) {
            converter.init(true);
            PackagingPlanDto dto = converter.toDto(t);
            return getDtoResponseEntity(dto);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @Operation(summary = "Finds a packagingPlan by code")
    @GetMapping("code/{code}")
    public ResponseEntity<PackagingPlanDto> findByCode(@PathVariable String code) {
	    PackagingPlan t = service.findByReferenceEntity(new PackagingPlan(code));
        if (t != null) {
            converter.init(true);
            PackagingPlanDto dto = converter.toDto(t);
            return getDtoResponseEntity(dto);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @Operation(summary = "Saves the specified  packagingPlan")
    @PostMapping("")
    public ResponseEntity<PackagingPlanDto> save(@RequestBody PackagingPlanDto dto) throws Exception {
        if(dto!=null){
            converter.init(true);
            PackagingPlan myT = converter.toItem(dto);
            PackagingPlan t = service.create(myT);
            if (t == null) {
                return new ResponseEntity<>(null, HttpStatus.IM_USED);
            }else{
                PackagingPlanDto myDto = converter.toDto(t);
                return new ResponseEntity<>(myDto, HttpStatus.CREATED);
            }
        }else {
            return new ResponseEntity<>(dto, HttpStatus.NO_CONTENT);
        }
    }

    @Operation(summary = "Updates the specified  packagingPlan")
    @PutMapping("")
    public ResponseEntity<PackagingPlanDto> update(@RequestBody PackagingPlanDto dto) throws Exception {
        ResponseEntity<PackagingPlanDto> res ;
        if (dto.getId() == null || service.findById(dto.getId()) == null)
            res = new ResponseEntity<>(HttpStatus.CONFLICT);
        else {
            PackagingPlan t = service.findById(dto.getId());
            converter.copy(dto,t);
            PackagingPlan updated = service.update(t);
            PackagingPlanDto myDto = converter.toDto(updated);
            res = new ResponseEntity<>(myDto, HttpStatus.OK);
        }
        return res;
    }

    @Operation(summary = "Delete list of packagingPlan")
    @PostMapping("multiple")
    public ResponseEntity<List<PackagingPlanDto>> delete(@RequestBody List<PackagingPlanDto> dtos) throws Exception {
        ResponseEntity<List<PackagingPlanDto>> res ;
        HttpStatus status = HttpStatus.CONFLICT;
        if (dtos != null && !dtos.isEmpty()) {
            converter.init(false);
            List<PackagingPlan> ts = converter.toItem(dtos);
            service.delete(ts);
            status = HttpStatus.OK;
        }
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Delete the specified packagingPlan")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        ResponseEntity<Long> res;
        HttpStatus status = HttpStatus.PRECONDITION_FAILED;
        if (id != null) {
            boolean resultDelete = service.deleteById(id);
            if (resultDelete) {
                status = HttpStatus.OK;
            }
        }
        res = new ResponseEntity<>(id, status);
        return res;
    }


    @Operation(summary = "Finds a packagingPlan and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<PackagingPlanDto> findWithAssociatedLists(@PathVariable Long id) {
        PackagingPlan loaded =  service.findWithAssociatedLists(id);
        converter.init(true);
        PackagingPlanDto dto = converter.toDto(loaded);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @Operation(summary = "Finds packagingPlans by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<PackagingPlanDto>> findByCriteria(@RequestBody PackagingPlanCriteria criteria) throws Exception {
        ResponseEntity<List<PackagingPlanDto>> res = null;
        List<PackagingPlan> list = service.findByCriteria(criteria);
        HttpStatus status = HttpStatus.NO_CONTENT;
        converter.initObject(true);
        List<PackagingPlanDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;

        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds paginated packagingPlans by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody PackagingPlanCriteria criteria) throws Exception {
        List<PackagingPlan> list = service.findPaginatedByCriteria(criteria, criteria.getPage(), criteria.getMaxResults(), criteria.getSortOrder(), criteria.getSortField());
        converter.initObject(true);
        List<PackagingPlanDto> dtos = converter.toDto(list);
        PaginatedList paginatedList = new PaginatedList();
        paginatedList.setList(dtos);
        if (dtos != null && !dtos.isEmpty()) {
            int dateSize = service.getDataSize(criteria);
            paginatedList.setDataSize(dateSize);
        }
        return new ResponseEntity<>(paginatedList, HttpStatus.OK);
    }

    @Operation(summary = "Gets packagingPlan data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody PackagingPlanCriteria criteria) throws Exception {
        int count = service.getDataSize(criteria);
        return new ResponseEntity<Integer>(count, HttpStatus.OK);
    }
	
	public List<PackagingPlanDto> findDtos(List<PackagingPlan> list){
        converter.initObject(true);
        List<PackagingPlanDto> dtos = converter.toDto(list);
        return dtos;
    }

    private ResponseEntity<PackagingPlanDto> getDtoResponseEntity(PackagingPlanDto dto) {
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }




   public PackagingPlanRestAdmin(PackagingPlanAdminService service, PackagingPlanConverter converter){
        this.service = service;
        this.converter = converter;
    }

    private final PackagingPlanAdminService service;
    private final PackagingPlanConverter converter;





}
