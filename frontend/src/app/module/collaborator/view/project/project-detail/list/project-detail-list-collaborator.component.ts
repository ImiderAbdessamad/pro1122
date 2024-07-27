import {Component, OnInit} from '@angular/core';
import {ProjectDetailCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectDetailCollaborator.service';
import {ProjectDetailDto} from 'src/app/shared/model/project/ProjectDetail.model';
import {ProjectDetailCriteria} from 'src/app/shared/criteria/project/ProjectDetailCriteria.model';


import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';

import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {ExportService} from 'src/app/zynerator/util/Export.service';


import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectCollaborator.service';
import {ProjectTechnologyDto} from 'src/app/shared/model/project/ProjectTechnology.model';
import {ProjectTechnologyCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyCollaborator.service';
import {ProjectTechnologyProfileDto} from 'src/app/shared/model/project/ProjectTechnologyProfile.model';
import {ProjectTechnologyProfileCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectTechnologyProfileCollaborator.service';


@Component({
  selector: 'app-project-detail-list-collaborator',
  templateUrl: './project-detail-list-collaborator.component.html'
})
export class ProjectDetailListCollaboratorComponent implements OnInit {

    protected fileName = 'ProjectDetail';

    protected findByCriteriaShow = false;
    protected cols: any[] = [];
    protected excelPdfButons: MenuItem[];
    protected exportData: any[] = [];
    protected criteriaData: any[] = [];
    protected _totalRecords = 0;
    private _pdfName: string;


    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    protected authService: AuthService;
    protected exportService: ExportService;
    protected excelFile: File | undefined;
    protected enableSecurity = false;


     yesOrNoEnabled: any[] = [];
    projectTechnologys: Array<ProjectTechnologyDto>;
    projects: Array<ProjectDto>;
    projectTechnologyProfiles: Array<ProjectTechnologyProfileDto>;


    constructor( private service: ProjectDetailCollaboratorService  , private projectService: ProjectCollaboratorService, private projectTechnologyService: ProjectTechnologyCollaboratorService, private projectTechnologyProfileService: ProjectTechnologyProfileCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.authService = ServiceLocator.injector.get(AuthService);
        this.exportService = ServiceLocator.injector.get(ExportService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadProjectTechnology();
        this.loadProject();
        this.loadProjectTechnologyProfile();
        this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];

    }




    public onExcelFileSelected(event: any): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.excelFile = input.files[0];
        }
    }

    public importExcel(): void {
        if (this.excelFile) {
            this.service.importExcel(this.excelFile).subscribe(
                response => {
                    console.log('File uploaded successfully!', response);
                },
                error => {
                    console.error('Error uploading file:', error);
                }
            );
        }
    }

    public findPaginatedByCriteria() {
        this.service.findPaginatedByCriteria(this.criteria).subscribe(paginatedItems => {
            this.items = paginatedItems.list;
            this.totalRecords = paginatedItems.dataSize;
            this.selections = new Array<ProjectDetailDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: ProjectDetailDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: ProjectDetailDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new ProjectDetailDto();
        this.createDialog = true;
    }

    public async deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ces éléments ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultiple().subscribe(() => {
                    this.items = this.items.filter(item => !this.selections.includes(item));
                    this.selections = new Array<ProjectDetailDto>();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Les éléments sélectionnés ont été supprimés',
                        life: 3000
                    });

                }, error => console.log(error));
            }
        });
    }


    public isSelectionDisabled(): boolean {
        return this.selections == null || this.selections.length == 0;
    }


    public async delete(dto: ProjectDetailDto) {

        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer cet élément ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.delete(dto).subscribe(status => {
                    if (status > 0) {
                        const position = this.items.indexOf(dto);
                        position > -1 ? this.items.splice(position, 1) : false;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'Element Supprimé',
                            life: 3000
                        });
                    }

                }, error => console.log(error));
            }
        });

    }

    public async duplicate(dto: ProjectDetailDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(
            res => {
                this.initDuplicate(res);
                this.item = res;
                this.item.id = null;
                this.createDialog = true;
            });
    }

    // TODO : check if correct
    public initExport(): void {
        this.excelPdfButons = [
            {
                label: 'CSV', icon: 'pi pi-file', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterCSV(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'XLS', icon: 'pi pi-file-excel', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterExcel(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'PDF', icon: 'pi pi-file-pdf', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName);
                }
            }
        ];
    }

    public exportPdf(dto: ProjectDetailDto): void {
        this.service.exportPdf(dto).subscribe((data: ArrayBuffer) => {
            const blob = new Blob([data], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = this.pdfName;
            link.setAttribute('target', '_blank'); // open link in new tab
            link.click();
            window.URL.revokeObjectURL(url);
        }, (error) => {
            console.error(error); // handle any errors that occur
        });
    }

    public showSearch(): void {
        this.findByCriteriaShow = !this.findByCriteriaShow;
    }


    update() {
        this.service.edit().subscribe(data => {
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = data;
            this.editDialog = false;
            this.item = new ProjectDetailDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new ProjectDetailDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }
        }, error => {
            console.log(error);
        });
    }

// add


    public initCol() {
        this.cols = [
            {field: 'title', header: 'Title'},
            {field: 'projectTechnology?.libelle', header: 'Project technology'},
            {field: 'project?.titleChat', header: 'Project'},
            {field: 'projectTechnologyProfile?.libelle', header: 'Project technology profile'},
            {field: 'dbName', header: 'Db name'},
            {field: 'dbPassword', header: 'Db password'},
            {field: 'dbUserName', header: 'Db user name'},
            {field: 'basePackage', header: 'Base package'},
            {field: 'msName', header: 'Ms name'},
            {field: 'port', header: 'Port'},
            {field: 'portDev', header: 'Port dev'},
            {field: 'portTest', header: 'Port test'},
            {field: 'portProd', header: 'Port prod'},
            {field: 'enabled', header: 'Enabled'},
        ];
    }


    public async loadProjectTechnology(){
        this.projectTechnologyService.findAllOptimized().subscribe(projectTechnologys => this.projectTechnologys = projectTechnologys, error => console.log(error))
    }
    public async loadProject(){
        this.projectService.findAllOptimized().subscribe(projects => this.projects = projects, error => console.log(error))
    }
    public async loadProjectTechnologyProfile(){
        this.projectTechnologyProfileService.findAllOptimized().subscribe(projectTechnologyProfiles => this.projectTechnologyProfiles = projectTechnologyProfiles, error => console.log(error))
    }


	public initDuplicate(res: ProjectDetailDto) {
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Title': e.title ,
                'Project technology': e.projectTechnology?.libelle ,
                'Project': e.project?.titleChat ,
                'Project technology profile': e.projectTechnologyProfile?.libelle ,
                 'Db name': e.dbName ,
                 'Db password': e.dbPassword ,
                 'Db user name': e.dbUserName ,
                 'Base package': e.basePackage ,
                 'Ms name': e.msName ,
                 'Port': e.port ,
                 'Port dev': e.portDev ,
                 'Port test': e.portTest ,
                 'Port prod': e.portProd ,
                'Enabled': e.enabled? 'Vrai' : 'Faux' ,
            }
        });

        this.criteriaData = [{
            'Title': this.criteria.title ? this.criteria.title : environment.emptyForExport ,
        //'Project technology': this.criteria.projectTechnology?.libelle ? this.criteria.projectTechnology?.libelle : environment.emptyForExport ,
        //'Project': this.criteria.project?.titleChat ? this.criteria.project?.titleChat : environment.emptyForExport ,
        //'Project technology profile': this.criteria.projectTechnologyProfile?.libelle ? this.criteria.projectTechnologyProfile?.libelle : environment.emptyForExport ,
            'Db name': this.criteria.dbName ? this.criteria.dbName : environment.emptyForExport ,
            'Db password': this.criteria.dbPassword ? this.criteria.dbPassword : environment.emptyForExport ,
            'Db user name': this.criteria.dbUserName ? this.criteria.dbUserName : environment.emptyForExport ,
            'Base package': this.criteria.basePackage ? this.criteria.basePackage : environment.emptyForExport ,
            'Ms name': this.criteria.msName ? this.criteria.msName : environment.emptyForExport ,
            'Port': this.criteria.port ? this.criteria.port : environment.emptyForExport ,
            'Port dev': this.criteria.portDev ? this.criteria.portDev : environment.emptyForExport ,
            'Port test': this.criteria.portTest ? this.criteria.portTest : environment.emptyForExport ,
            'Port prod': this.criteria.portProd ? this.criteria.portProd : environment.emptyForExport ,
            'Enabled': this.criteria.enabled ? (this.criteria.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        }];
      }



    get items(): Array<ProjectDetailDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectDetailDto>) {
        this.service.items = value;
    }

    get selections(): Array<ProjectDetailDto> {
        return this.service.selections;
    }

    set selections(value: Array<ProjectDetailDto>) {
        this.service.selections = value;
    }

    get item(): ProjectDetailDto {
        return this.service.item;
    }

    set item(value: ProjectDetailDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ProjectDetailCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectDetailCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }


    get totalRecords(): number {
        return this._totalRecords;
    }

    set totalRecords(value: number) {
        this._totalRecords = value;
    }

    get pdfName(): string {
        return this._pdfName;
    }

    set pdfName(value: string) {
        this._pdfName = value;
    }

    get createActionIsValid(): boolean {
        return this.service.createActionIsValid;
    }

    set createActionIsValid(value: boolean) {
        this.service.createActionIsValid = value;
    }


    get editActionIsValid(): boolean {
        return this.service.editActionIsValid;
    }

    set editActionIsValid(value: boolean) {
        this.service.editActionIsValid = value;
    }

    get listActionIsValid(): boolean {
        return this.service.listActionIsValid;
    }

    set listActionIsValid(value: boolean) {
        this.service.listActionIsValid = value;
    }

    get deleteActionIsValid(): boolean {
        return this.service.deleteActionIsValid;
    }

    set deleteActionIsValid(value: boolean) {
        this.service.deleteActionIsValid = value;
    }


    get viewActionIsValid(): boolean {
        return this.service.viewActionIsValid;
    }

    set viewActionIsValid(value: boolean) {
        this.service.viewActionIsValid = value;
    }

    get duplicateActionIsValid(): boolean {
        return this.service.duplicateActionIsValid;
    }

    set duplicateActionIsValid(value: boolean) {
        this.service.duplicateActionIsValid = value;
    }

    get createAction(): string {
        return this.service.createAction;
    }

    set createAction(value: string) {
        this.service.createAction = value;
    }

    get listAction(): string {
        return this.service.listAction;
    }

    set listAction(value: string) {
        this.service.listAction = value;
    }

    get editAction(): string {
        return this.service.editAction;
    }

    set editAction(value: string) {
        this.service.editAction = value;
    }

    get deleteAction(): string {
        return this.service.deleteAction;
    }

    set deleteAction(value: string) {
        this.service.deleteAction = value;
    }

    get viewAction(): string {
        return this.service.viewAction;
    }

    set viewAction(value: string) {
        this.service.viewAction = value;
    }

    get duplicateAction(): string {
        return this.service.duplicateAction;
    }

    set duplicateAction(value: string) {
        this.service.duplicateAction = value;
    }

    get entityName(): string {
        return this.service.entityName;
    }

    set entityName(value: string) {
        this.service.entityName = value;
    }
}
