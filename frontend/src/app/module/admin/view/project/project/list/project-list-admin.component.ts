import {Component, OnInit} from '@angular/core';
import {ProjectAdminService} from 'src/app/shared/service/admin/project/ProjectAdmin.service';
import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCriteria} from 'src/app/shared/criteria/project/ProjectCriteria.model';


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


import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorAdminService} from 'src/app/shared/service/admin/collaborator/CollaboratorAdmin.service';
import {ProjectTechnologyDto} from 'src/app/shared/model/project/ProjectTechnology.model';
import {ProjectTechnologyAdminService} from 'src/app/shared/service/admin/project/ProjectTechnologyAdmin.service';
import {RemoteRepoInfoDto} from 'src/app/shared/model/project/RemoteRepoInfo.model';
import {RemoteRepoInfoAdminService} from 'src/app/shared/service/admin/project/RemoteRepoInfoAdmin.service';
import {ConversationDto} from 'src/app/shared/model/project/Conversation.model';
import {ConversationAdminService} from 'src/app/shared/service/admin/project/ConversationAdmin.service';
import {ProjectTechnologyProfileDto} from 'src/app/shared/model/project/ProjectTechnologyProfile.model';
import {ProjectTechnologyProfileAdminService} from 'src/app/shared/service/admin/project/ProjectTechnologyProfileAdmin.service';
import {ProjectDetailDto} from 'src/app/shared/model/project/ProjectDetail.model';
import {ProjectDetailAdminService} from 'src/app/shared/service/admin/project/ProjectDetailAdmin.service';


@Component({
  selector: 'app-project-list-admin',
  templateUrl: './project-list-admin.component.html'
})
export class ProjectListAdminComponent implements OnInit {

    protected fileName = 'Project';

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


     yesOrNoMicroService: any[] = [];
     yesOrNoMicroFront: any[] = [];
    collaborators: Array<CollaboratorDto>;
    remoteRepoInfos: Array<RemoteRepoInfoDto>;


    constructor( private service: ProjectAdminService  , private collaboratorService: CollaboratorAdminService, private projectTechnologyService: ProjectTechnologyAdminService, private remoteRepoInfoService: RemoteRepoInfoAdminService, private conversationService: ConversationAdminService, private projectTechnologyProfileService: ProjectTechnologyProfileAdminService, private projectDetailService: ProjectDetailAdminService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadCollaborator();
        this.loadRemoteRepoInfo();
        this.yesOrNoMicroService =  [{label: 'MicroService', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
        this.yesOrNoMicroFront =  [{label: 'MicroFront', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];

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
            this.selections = new Array<ProjectDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: ProjectDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: ProjectDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new ProjectDto();
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
                    this.selections = new Array<ProjectDto>();
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


    public async delete(dto: ProjectDto) {

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

    public async duplicate(dto: ProjectDto) {
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

    public exportPdf(dto: ProjectDto): void {
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
            this.item = new ProjectDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new ProjectDto();
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
            {field: 'titleChat', header: 'Title chat'},
            {field: 'collaborator?.id', header: 'Collaborator'},
            {field: 'generatedDate', header: 'Generated date'},
            {field: 'remoteRepoInfo?.title', header: 'Remote repo info'},
            {field: 'chatDateStart', header: 'Chat date start'},
            {field: 'microService', header: 'Micro service'},
            {field: 'microFront', header: 'Micro front'},
        ];
    }


    public async loadCollaborator(){
        this.collaboratorService.findAll().subscribe(collaborators => this.collaborators = collaborators, error => console.log(error))
    }
    public async loadRemoteRepoInfo(){
        this.remoteRepoInfoService.findAllOptimized().subscribe(remoteRepoInfos => this.remoteRepoInfos = remoteRepoInfos, error => console.log(error))
    }


	public initDuplicate(res: ProjectDto) {
        if (res.conversations != null) {
             res.conversations.forEach(d => { d.project = null; d.id = null; });
        }
        if (res.projectDetails != null) {
             res.projectDetails.forEach(d => { d.project = null; d.id = null; });
        }
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Title': e.title ,
                 'Title chat': e.titleChat ,
                'Collaborator': e.collaborator?.id ,
                'Generated date': this.datePipe.transform(e.generatedDate , 'dd/MM/yyyy hh:mm'),
                'Remote repo info': e.remoteRepoInfo?.title ,
                'Chat date start': this.datePipe.transform(e.chatDateStart , 'dd/MM/yyyy hh:mm'),
                'Micro service': e.microService? 'Vrai' : 'Faux' ,
                'Micro front': e.microFront? 'Vrai' : 'Faux' ,
            }
        });

        this.criteriaData = [{
            'Title': this.criteria.title ? this.criteria.title : environment.emptyForExport ,
            'Title chat': this.criteria.titleChat ? this.criteria.titleChat : environment.emptyForExport ,
        //'Collaborator': this.criteria.collaborator?.id ? this.criteria.collaborator?.id : environment.emptyForExport ,
            'Generated date Min': this.criteria.generatedDateFrom ? this.datePipe.transform(this.criteria.generatedDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Generated date Max': this.criteria.generatedDateTo ? this.datePipe.transform(this.criteria.generatedDateTo , this.dateFormat) : environment.emptyForExport ,
        //'Remote repo info': this.criteria.remoteRepoInfo?.title ? this.criteria.remoteRepoInfo?.title : environment.emptyForExport ,
            'Chat date start Min': this.criteria.chatDateStartFrom ? this.datePipe.transform(this.criteria.chatDateStartFrom , this.dateFormat) : environment.emptyForExport ,
            'Chat date start Max': this.criteria.chatDateStartTo ? this.datePipe.transform(this.criteria.chatDateStartTo , this.dateFormat) : environment.emptyForExport ,
            'Micro service': this.criteria.microService ? (this.criteria.microService ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Micro front': this.criteria.microFront ? (this.criteria.microFront ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        }];
      }



    get items(): Array<ProjectDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectDto>) {
        this.service.items = value;
    }

    get selections(): Array<ProjectDto> {
        return this.service.selections;
    }

    set selections(value: Array<ProjectDto>) {
        this.service.selections = value;
    }

    get item(): ProjectDto {
        return this.service.item;
    }

    set item(value: ProjectDto) {
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

    get criteria(): ProjectCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectCriteria) {
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
