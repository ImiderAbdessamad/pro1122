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

import ma.zs.zyn.bean.core.packaging.PackagingDetail;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailCriteria;
import ma.zs.zyn.service.facade.admin.packaging.PackagingDetailAdminService;
import ma.zs.zyn.ws.converter.packaging.PackagingDetailConverter;
import ma.zs.zyn.ws.dto.packaging.PackagingDetailDto;
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
@RequestMapping("/api/admin/packagingDetail/")
public class PackagingDetailRestAdmin {




    @Operation(summary = "Finds a list of all packagingDetails")
    @GetMapping("")
    public ResponseEntity<List<PackagingDetailDto>> findAll() throws Exception {
        ResponseEntity<List<PackagingDetailDto>> res = null;
        List<PackagingDetail> list = service.findAll();
        HttpStatus status = HttpStatus.NO_CONTENT;
            converter.initObject(true);
        List<PackagingDetailDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;
        res = new ResponseEntity<>(dtos, status);
        return res;
    }


    @Operation(summary = "Finds a packagingDetail by id")
    @GetMapping("id/{id}")
    public ResponseEntity<PackagingDetailDto> findById(@PathVariable Long id) {
        PackagingDetail t = service.findById(id);
        if (t != null) {
            converter.init(true);
            PackagingDetailDto dto = converter.toDto(t);
            return getDtoResponseEntity(dto);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }


    @Operation(summary = "Saves the specified  packagingDetail")
    @PostMapping("")
    public ResponseEntity<PackagingDetailDto> save(@RequestBody PackagingDetailDto dto) throws Exception {
        if(dto!=null){
            converter.init(true);
            PackagingDetail myT = converter.toItem(dto);
            PackagingDetail t = service.create(myT);
            if (t == null) {
                return new ResponseEntity<>(null, HttpStatus.IM_USED);
            }else{
                PackagingDetailDto myDto = converter.toDto(t);
                return new ResponseEntity<>(myDto, HttpStatus.CREATED);
            }
        }else {
            return new ResponseEntity<>(dto, HttpStatus.NO_CONTENT);
        }
    }

    @Operation(summary = "Updates the specified  packagingDetail")
    @PutMapping("")
    public ResponseEntity<PackagingDetailDto> update(@RequestBody PackagingDetailDto dto) throws Exception {
        ResponseEntity<PackagingDetailDto> res ;
        if (dto.getId() == null || service.findById(dto.getId()) == null)
            res = new ResponseEntity<>(HttpStatus.CONFLICT);
        else {
            PackagingDetail t = service.findById(dto.getId());
            converter.copy(dto,t);
            PackagingDetail updated = service.update(t);
            PackagingDetailDto myDto = converter.toDto(updated);
            res = new ResponseEntity<>(myDto, HttpStatus.OK);
        }
        return res;
    }

    @Operation(summary = "Delete list of packagingDetail")
    @PostMapping("multiple")
    public ResponseEntity<List<PackagingDetailDto>> delete(@RequestBody List<PackagingDetailDto> dtos) throws Exception {
        ResponseEntity<List<PackagingDetailDto>> res ;
        HttpStatus status = HttpStatus.CONFLICT;
        if (dtos != null && !dtos.isEmpty()) {
            converter.init(false);
            List<PackagingDetail> ts = converter.toItem(dtos);
            service.delete(ts);
            status = HttpStatus.OK;
        }
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Delete the specified packagingDetail")
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

    @Operation(summary = "find by packaging id")
    @GetMapping("packaging/id/{id}")
    public List<PackagingDetailDto> findByPackagingId(@PathVariable Long id){
        return findDtos(service.findByPackagingId(id));
    }
    @Operation(summary = "delete by packaging id")
    @DeleteMapping("packaging/id/{id}")
    public int deleteByPackagingId(@PathVariable Long id){
        return service.deleteByPackagingId(id);
    }
    @Operation(summary = "find by packagingDetailGroup id")
    @GetMapping("packagingDetailGroup/id/{id}")
    public List<PackagingDetailDto> findByPackagingDetailGroupId(@PathVariable Long id){
        return findDtos(service.findByPackagingDetailGroupId(id));
    }
    @Operation(summary = "delete by packagingDetailGroup id")
    @DeleteMapping("packagingDetailGroup/id/{id}")
    public int deleteByPackagingDetailGroupId(@PathVariable Long id){
        return service.deleteByPackagingDetailGroupId(id);
    }

    @Operation(summary = "Finds a packagingDetail and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<PackagingDetailDto> findWithAssociatedLists(@PathVariable Long id) {
        PackagingDetail loaded =  service.findWithAssociatedLists(id);
        converter.init(true);
        PackagingDetailDto dto = converter.toDto(loaded);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @Operation(summary = "Finds packagingDetails by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<PackagingDetailDto>> findByCriteria(@RequestBody PackagingDetailCriteria criteria) throws Exception {
        ResponseEntity<List<PackagingDetailDto>> res = null;
        List<PackagingDetail> list = service.findByCriteria(criteria);
        HttpStatus status = HttpStatus.NO_CONTENT;
        converter.initObject(true);
        List<PackagingDetailDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;

        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds paginated packagingDetails by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody PackagingDetailCriteria criteria) throws Exception {
        List<PackagingDetail> list = service.findPaginatedByCriteria(criteria, criteria.getPage(), criteria.getMaxResults(), criteria.getSortOrder(), criteria.getSortField());
        converter.initObject(true);
        List<PackagingDetailDto> dtos = converter.toDto(list);
        PaginatedList paginatedList = new PaginatedList();
        paginatedList.setList(dtos);
        if (dtos != null && !dtos.isEmpty()) {
            int dateSize = service.getDataSize(criteria);
            paginatedList.setDataSize(dateSize);
        }
        return new ResponseEntity<>(paginatedList, HttpStatus.OK);
    }

    @Operation(summary = "Gets packagingDetail data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody PackagingDetailCriteria criteria) throws Exception {
        int count = service.getDataSize(criteria);
        return new ResponseEntity<Integer>(count, HttpStatus.OK);
    }
	
	public List<PackagingDetailDto> findDtos(List<PackagingDetail> list){
        converter.initObject(true);
        List<PackagingDetailDto> dtos = converter.toDto(list);
        return dtos;
    }

    private ResponseEntity<PackagingDetailDto> getDtoResponseEntity(PackagingDetailDto dto) {
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }




   public PackagingDetailRestAdmin(PackagingDetailAdminService service, PackagingDetailConverter converter){
        this.service = service;
        this.converter = converter;
    }

    private final PackagingDetailAdminService service;
    private final PackagingDetailConverter converter;





}
