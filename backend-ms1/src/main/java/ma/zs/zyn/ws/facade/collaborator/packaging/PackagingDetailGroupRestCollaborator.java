package  ma.zs.zyn.ws.facade.collaborator.packaging;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import java.util.Arrays;
import java.util.ArrayList;

import ma.zs.zyn.bean.core.packaging.PackagingDetailGroup;
import ma.zs.zyn.dao.criteria.core.packaging.PackagingDetailGroupCriteria;
import ma.zs.zyn.service.facade.collaborator.packaging.PackagingDetailGroupCollaboratorService;
import ma.zs.zyn.ws.converter.packaging.PackagingDetailGroupConverter;
import ma.zs.zyn.ws.dto.packaging.PackagingDetailGroupDto;
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
@RequestMapping("/api/collaborator/packagingDetailGroup/")
public class PackagingDetailGroupRestCollaborator {




    @Operation(summary = "Finds a list of all packagingDetailGroups")
    @GetMapping("")
    public ResponseEntity<List<PackagingDetailGroupDto>> findAll() throws Exception {
        ResponseEntity<List<PackagingDetailGroupDto>> res = null;
        List<PackagingDetailGroup> list = service.findAll();
        HttpStatus status = HttpStatus.NO_CONTENT;
        List<PackagingDetailGroupDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds an optimized list of all packagingDetailGroups")
    @GetMapping("optimized")
    public ResponseEntity<List<PackagingDetailGroupDto>> findAllOptimized() throws Exception {
        ResponseEntity<List<PackagingDetailGroupDto>> res = null;
        List<PackagingDetailGroup> list = service.findAllOptimized();
        HttpStatus status = HttpStatus.NO_CONTENT;
        List<PackagingDetailGroupDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds a packagingDetailGroup by id")
    @GetMapping("id/{id}")
    public ResponseEntity<PackagingDetailGroupDto> findById(@PathVariable Long id) {
        PackagingDetailGroup t = service.findById(id);
        if (t != null) {
            PackagingDetailGroupDto dto = converter.toDto(t);
            return getDtoResponseEntity(dto);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @Operation(summary = "Finds a packagingDetailGroup by libelle")
    @GetMapping("libelle/{libelle}")
    public ResponseEntity<PackagingDetailGroupDto> findByLibelle(@PathVariable String libelle) {
	    PackagingDetailGroup t = service.findByReferenceEntity(new PackagingDetailGroup(libelle));
        if (t != null) {
            PackagingDetailGroupDto dto = converter.toDto(t);
            return getDtoResponseEntity(dto);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @Operation(summary = "Saves the specified  packagingDetailGroup")
    @PostMapping("")
    public ResponseEntity<PackagingDetailGroupDto> save(@RequestBody PackagingDetailGroupDto dto) throws Exception {
        if(dto!=null){
            PackagingDetailGroup myT = converter.toItem(dto);
            PackagingDetailGroup t = service.create(myT);
            if (t == null) {
                return new ResponseEntity<>(null, HttpStatus.IM_USED);
            }else{
                PackagingDetailGroupDto myDto = converter.toDto(t);
                return new ResponseEntity<>(myDto, HttpStatus.CREATED);
            }
        }else {
            return new ResponseEntity<>(dto, HttpStatus.NO_CONTENT);
        }
    }

    @Operation(summary = "Updates the specified  packagingDetailGroup")
    @PutMapping("")
    public ResponseEntity<PackagingDetailGroupDto> update(@RequestBody PackagingDetailGroupDto dto) throws Exception {
        ResponseEntity<PackagingDetailGroupDto> res ;
        if (dto.getId() == null || service.findById(dto.getId()) == null)
            res = new ResponseEntity<>(HttpStatus.CONFLICT);
        else {
            PackagingDetailGroup t = service.findById(dto.getId());
            converter.copy(dto,t);
            PackagingDetailGroup updated = service.update(t);
            PackagingDetailGroupDto myDto = converter.toDto(updated);
            res = new ResponseEntity<>(myDto, HttpStatus.OK);
        }
        return res;
    }

    @Operation(summary = "Delete list of packagingDetailGroup")
    @PostMapping("multiple")
    public ResponseEntity<List<PackagingDetailGroupDto>> delete(@RequestBody List<PackagingDetailGroupDto> dtos) throws Exception {
        ResponseEntity<List<PackagingDetailGroupDto>> res ;
        HttpStatus status = HttpStatus.CONFLICT;
        if (dtos != null && !dtos.isEmpty()) {
            List<PackagingDetailGroup> ts = converter.toItem(dtos);
            service.delete(ts);
            status = HttpStatus.OK;
        }
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Delete the specified packagingDetailGroup")
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


    @Operation(summary = "Finds a packagingDetailGroup and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<PackagingDetailGroupDto> findWithAssociatedLists(@PathVariable Long id) {
        PackagingDetailGroup loaded =  service.findWithAssociatedLists(id);
        PackagingDetailGroupDto dto = converter.toDto(loaded);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @Operation(summary = "Finds packagingDetailGroups by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<PackagingDetailGroupDto>> findByCriteria(@RequestBody PackagingDetailGroupCriteria criteria) throws Exception {
        ResponseEntity<List<PackagingDetailGroupDto>> res = null;
        List<PackagingDetailGroup> list = service.findByCriteria(criteria);
        HttpStatus status = HttpStatus.NO_CONTENT;
        List<PackagingDetailGroupDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;

        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds paginated packagingDetailGroups by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody PackagingDetailGroupCriteria criteria) throws Exception {
        List<PackagingDetailGroup> list = service.findPaginatedByCriteria(criteria, criteria.getPage(), criteria.getMaxResults(), criteria.getSortOrder(), criteria.getSortField());
        List<PackagingDetailGroupDto> dtos = converter.toDto(list);
        PaginatedList paginatedList = new PaginatedList();
        paginatedList.setList(dtos);
        if (dtos != null && !dtos.isEmpty()) {
            int dateSize = service.getDataSize(criteria);
            paginatedList.setDataSize(dateSize);
        }
        return new ResponseEntity<>(paginatedList, HttpStatus.OK);
    }

    @Operation(summary = "Gets packagingDetailGroup data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody PackagingDetailGroupCriteria criteria) throws Exception {
        int count = service.getDataSize(criteria);
        return new ResponseEntity<Integer>(count, HttpStatus.OK);
    }
	
	public List<PackagingDetailGroupDto> findDtos(List<PackagingDetailGroup> list){
        List<PackagingDetailGroupDto> dtos = converter.toDto(list);
        return dtos;
    }

    private ResponseEntity<PackagingDetailGroupDto> getDtoResponseEntity(PackagingDetailGroupDto dto) {
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }




   public PackagingDetailGroupRestCollaborator(PackagingDetailGroupCollaboratorService service, PackagingDetailGroupConverter converter){
        this.service = service;
        this.converter = converter;
    }

    private final PackagingDetailGroupCollaboratorService service;
    private final PackagingDetailGroupConverter converter;





}
