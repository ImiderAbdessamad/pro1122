package  ma.zs.zyn.ws.facade.collaborator.payement;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import java.util.Arrays;
import java.util.ArrayList;

import ma.zs.zyn.bean.core.payement.PaimentCollaborator;
import ma.zs.zyn.dao.criteria.core.payement.PaimentCollaboratorCriteria;
import ma.zs.zyn.service.facade.collaborator.payement.PaimentCollaboratorCollaboratorService;
import ma.zs.zyn.ws.converter.payement.PaimentCollaboratorConverter;
import ma.zs.zyn.ws.dto.payement.PaimentCollaboratorDto;
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
@RequestMapping("/api/collaborator/paimentCollaborator/")
public class PaimentCollaboratorRestCollaborator {




    @Operation(summary = "Finds a list of all paimentCollaborators")
    @GetMapping("")
    public ResponseEntity<List<PaimentCollaboratorDto>> findAll() throws Exception {
        ResponseEntity<List<PaimentCollaboratorDto>> res = null;
        List<PaimentCollaborator> list = service.findAll();
        HttpStatus status = HttpStatus.NO_CONTENT;
            converter.initObject(true);
        List<PaimentCollaboratorDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds an optimized list of all paimentCollaborators")
    @GetMapping("optimized")
    public ResponseEntity<List<PaimentCollaboratorDto>> findAllOptimized() throws Exception {
        ResponseEntity<List<PaimentCollaboratorDto>> res = null;
        List<PaimentCollaborator> list = service.findAllOptimized();
        HttpStatus status = HttpStatus.NO_CONTENT;
        converter.initObject(true);
        List<PaimentCollaboratorDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds a paimentCollaborator by id")
    @GetMapping("id/{id}")
    public ResponseEntity<PaimentCollaboratorDto> findById(@PathVariable Long id) {
        PaimentCollaborator t = service.findById(id);
        if (t != null) {
            converter.init(true);
            PaimentCollaboratorDto dto = converter.toDto(t);
            return getDtoResponseEntity(dto);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @Operation(summary = "Finds a paimentCollaborator by cardNumber")
    @GetMapping("cardNumber/{cardNumber}")
    public ResponseEntity<PaimentCollaboratorDto> findByCardNumber(@PathVariable String cardNumber) {
	    PaimentCollaborator t = service.findByReferenceEntity(new PaimentCollaborator(cardNumber));
        if (t != null) {
            converter.init(true);
            PaimentCollaboratorDto dto = converter.toDto(t);
            return getDtoResponseEntity(dto);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @Operation(summary = "Saves the specified  paimentCollaborator")
    @PostMapping("")
    public ResponseEntity<PaimentCollaboratorDto> save(@RequestBody PaimentCollaboratorDto dto) throws Exception {
        if(dto!=null){
            converter.init(true);
            PaimentCollaborator myT = converter.toItem(dto);
            PaimentCollaborator t = service.create(myT);
            if (t == null) {
                return new ResponseEntity<>(null, HttpStatus.IM_USED);
            }else{
                PaimentCollaboratorDto myDto = converter.toDto(t);
                return new ResponseEntity<>(myDto, HttpStatus.CREATED);
            }
        }else {
            return new ResponseEntity<>(dto, HttpStatus.NO_CONTENT);
        }
    }

    @Operation(summary = "Updates the specified  paimentCollaborator")
    @PutMapping("")
    public ResponseEntity<PaimentCollaboratorDto> update(@RequestBody PaimentCollaboratorDto dto) throws Exception {
        ResponseEntity<PaimentCollaboratorDto> res ;
        if (dto.getId() == null || service.findById(dto.getId()) == null)
            res = new ResponseEntity<>(HttpStatus.CONFLICT);
        else {
            PaimentCollaborator t = service.findById(dto.getId());
            converter.copy(dto,t);
            PaimentCollaborator updated = service.update(t);
            PaimentCollaboratorDto myDto = converter.toDto(updated);
            res = new ResponseEntity<>(myDto, HttpStatus.OK);
        }
        return res;
    }

    @Operation(summary = "Delete list of paimentCollaborator")
    @PostMapping("multiple")
    public ResponseEntity<List<PaimentCollaboratorDto>> delete(@RequestBody List<PaimentCollaboratorDto> dtos) throws Exception {
        ResponseEntity<List<PaimentCollaboratorDto>> res ;
        HttpStatus status = HttpStatus.CONFLICT;
        if (dtos != null && !dtos.isEmpty()) {
            converter.init(false);
            List<PaimentCollaborator> ts = converter.toItem(dtos);
            service.delete(ts);
            status = HttpStatus.OK;
        }
        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Delete the specified paimentCollaborator")
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

    @Operation(summary = "find by city id")
    @GetMapping("city/id/{id}")
    public List<PaimentCollaboratorDto> findByCityId(@PathVariable Long id){
        return findDtos(service.findByCityId(id));
    }
    @Operation(summary = "delete by city id")
    @DeleteMapping("city/id/{id}")
    public int deleteByCityId(@PathVariable Long id){
        return service.deleteByCityId(id);
    }
    @Operation(summary = "find by paimentCollaboratorState code")
    @GetMapping("paimentCollaboratorState/code/{code}")
    public List<PaimentCollaboratorDto> findByPaimentCollaboratorStateCode(@PathVariable String code){
        return findDtos(service.findByPaimentCollaboratorStateCode(code));
    }
    @Operation(summary = "delete by paimentCollaboratorState code")
    @DeleteMapping("paimentCollaboratorState/code/{code}")
    public int deleteByPaimentCollaboratorStateCode(@PathVariable String code){
        return service.deleteByPaimentCollaboratorStateCode(code);
    }
    @Operation(summary = "find by offreCloudProvider id")
    @GetMapping("offreCloudProvider/id/{id}")
    public List<PaimentCollaboratorDto> findByOffreCloudProviderId(@PathVariable Long id){
        return findDtos(service.findByOffreCloudProviderId(id));
    }
    @Operation(summary = "delete by offreCloudProvider id")
    @DeleteMapping("offreCloudProvider/id/{id}")
    public int deleteByOffreCloudProviderId(@PathVariable Long id){
        return service.deleteByOffreCloudProviderId(id);
    }

    @Operation(summary = "Finds a paimentCollaborator and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<PaimentCollaboratorDto> findWithAssociatedLists(@PathVariable Long id) {
        PaimentCollaborator loaded =  service.findWithAssociatedLists(id);
        converter.init(true);
        PaimentCollaboratorDto dto = converter.toDto(loaded);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @Operation(summary = "Finds paimentCollaborators by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<PaimentCollaboratorDto>> findByCriteria(@RequestBody PaimentCollaboratorCriteria criteria) throws Exception {
        ResponseEntity<List<PaimentCollaboratorDto>> res = null;
        List<PaimentCollaborator> list = service.findByCriteria(criteria);
        HttpStatus status = HttpStatus.NO_CONTENT;
        converter.initObject(true);
        List<PaimentCollaboratorDto> dtos  = converter.toDto(list);
        if (dtos != null && !dtos.isEmpty())
            status = HttpStatus.OK;

        res = new ResponseEntity<>(dtos, status);
        return res;
    }

    @Operation(summary = "Finds paginated paimentCollaborators by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody PaimentCollaboratorCriteria criteria) throws Exception {
        List<PaimentCollaborator> list = service.findPaginatedByCriteria(criteria, criteria.getPage(), criteria.getMaxResults(), criteria.getSortOrder(), criteria.getSortField());
        converter.initObject(true);
        List<PaimentCollaboratorDto> dtos = converter.toDto(list);
        PaginatedList paginatedList = new PaginatedList();
        paginatedList.setList(dtos);
        if (dtos != null && !dtos.isEmpty()) {
            int dateSize = service.getDataSize(criteria);
            paginatedList.setDataSize(dateSize);
        }
        return new ResponseEntity<>(paginatedList, HttpStatus.OK);
    }

    @Operation(summary = "Gets paimentCollaborator data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody PaimentCollaboratorCriteria criteria) throws Exception {
        int count = service.getDataSize(criteria);
        return new ResponseEntity<Integer>(count, HttpStatus.OK);
    }
	
	public List<PaimentCollaboratorDto> findDtos(List<PaimentCollaborator> list){
        converter.initObject(true);
        List<PaimentCollaboratorDto> dtos = converter.toDto(list);
        return dtos;
    }

    private ResponseEntity<PaimentCollaboratorDto> getDtoResponseEntity(PaimentCollaboratorDto dto) {
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }




   public PaimentCollaboratorRestCollaborator(PaimentCollaboratorCollaboratorService service, PaimentCollaboratorConverter converter){
        this.service = service;
        this.converter = converter;
    }

    private final PaimentCollaboratorCollaboratorService service;
    private final PaimentCollaboratorConverter converter;





}
