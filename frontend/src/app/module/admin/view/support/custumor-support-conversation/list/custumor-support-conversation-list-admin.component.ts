import {Component, OnInit} from '@angular/core';
import {CustumorSupportConversationAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationAdmin.service';
import {CustumorSupportConversationDto} from 'src/app/shared/model/support/CustumorSupportConversation.model';
import {CustumorSupportConversationCriteria} from 'src/app/shared/criteria/support/CustumorSupportConversationCriteria.model';


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
import {AgentDto} from 'src/app/shared/model/support/Agent.model';
import {AgentAdminService} from 'src/app/shared/service/admin/support/AgentAdmin.service';
import {CustumorSupportConversationCategoryDto} from 'src/app/shared/model/support/CustumorSupportConversationCategory.model';
import {CustumorSupportConversationCategoryAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationCategoryAdmin.service';
import {CustumorSupportConversationStateDto} from 'src/app/shared/model/support/CustumorSupportConversationState.model';
import {CustumorSupportConversationStateAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationStateAdmin.service';
import {CustumorSupportConversationMessageDto} from 'src/app/shared/model/support/CustumorSupportConversationMessage.model';
import {CustumorSupportConversationMessageAdminService} from 'src/app/shared/service/admin/support/CustumorSupportConversationMessageAdmin.service';


@Component({
  selector: 'app-custumor-support-conversation-list-admin',
  templateUrl: './custumor-support-conversation-list-admin.component.html'
})
export class CustumorSupportConversationListAdminComponent implements OnInit {

    protected fileName = 'CustumorSupportConversation';

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


    collaborators: Array<CollaboratorDto>;
    agents: Array<AgentDto>;
    custumorSupportConversationCategorys: Array<CustumorSupportConversationCategoryDto>;
    custumorSupportConversationStates: Array<CustumorSupportConversationStateDto>;


    constructor( private service: CustumorSupportConversationAdminService  , private collaboratorService: CollaboratorAdminService, private agentService: AgentAdminService, private custumorSupportConversationCategoryService: CustumorSupportConversationCategoryAdminService, private custumorSupportConversationStateService: CustumorSupportConversationStateAdminService, private custumorSupportConversationMessageService: CustumorSupportConversationMessageAdminService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadAgent();
        this.loadCustumorSupportConversationCategory();
        this.loadCustumorSupportConversationState();

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
            this.selections = new Array<CustumorSupportConversationDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: CustumorSupportConversationDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: CustumorSupportConversationDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new CustumorSupportConversationDto();
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
                    this.selections = new Array<CustumorSupportConversationDto>();
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


    public async delete(dto: CustumorSupportConversationDto) {

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

    public async duplicate(dto: CustumorSupportConversationDto) {
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

    public exportPdf(dto: CustumorSupportConversationDto): void {
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
            this.item = new CustumorSupportConversationDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new CustumorSupportConversationDto();
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
            {field: 'collaborator?.id', header: 'Collaborator'},
            {field: 'agent?.id', header: 'Agent'},
            {field: 'object', header: 'Object'},
            {field: 'ratting', header: 'Ratting'},
            {field: 'creationDate', header: 'Creation date'},
            {field: 'closingDate', header: 'Closing date'},
            {field: 'custumorSupportConversationCategory?.libelle', header: 'Custumor support conversation category'},
            {field: 'custumorSupportConversationState?.libelle', header: 'Custumor support conversation state'},
        ];
    }


    public async loadCollaborator(){
        this.collaboratorService.findAll().subscribe(collaborators => this.collaborators = collaborators, error => console.log(error))
    }
    public async loadAgent(){
        this.agentService.findAll().subscribe(agents => this.agents = agents, error => console.log(error))
    }
    public async loadCustumorSupportConversationCategory(){
        this.custumorSupportConversationCategoryService.findAllOptimized().subscribe(custumorSupportConversationCategorys => this.custumorSupportConversationCategorys = custumorSupportConversationCategorys, error => console.log(error))
    }
    public async loadCustumorSupportConversationState(){
        this.custumorSupportConversationStateService.findAllOptimized().subscribe(custumorSupportConversationStates => this.custumorSupportConversationStates = custumorSupportConversationStates, error => console.log(error))
    }


	public initDuplicate(res: CustumorSupportConversationDto) {
        if (res.custumorSupportConversationMessages != null) {
             res.custumorSupportConversationMessages.forEach(d => { d.custumorSupportConversation = null; d.id = null; });
        }
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Collaborator': e.collaborator?.id ,
                'Agent': e.agent?.id ,
                 'Object': e.object ,
                 'Ratting': e.ratting ,
                'Creation date': this.datePipe.transform(e.creationDate , 'dd/MM/yyyy hh:mm'),
                'Closing date': this.datePipe.transform(e.closingDate , 'dd/MM/yyyy hh:mm'),
                 'Description': e.description ,
                'Custumor support conversation category': e.custumorSupportConversationCategory?.libelle ,
                'Custumor support conversation state': e.custumorSupportConversationState?.libelle ,
            }
        });

        this.criteriaData = [{
        //'Collaborator': this.criteria.collaborator?.id ? this.criteria.collaborator?.id : environment.emptyForExport ,
        //'Agent': this.criteria.agent?.id ? this.criteria.agent?.id : environment.emptyForExport ,
            'Object': this.criteria.object ? this.criteria.object : environment.emptyForExport ,
            'Ratting Min': this.criteria.rattingMin ? this.criteria.rattingMin : environment.emptyForExport ,
            'Ratting Max': this.criteria.rattingMax ? this.criteria.rattingMax : environment.emptyForExport ,
            'Creation date Min': this.criteria.creationDateFrom ? this.datePipe.transform(this.criteria.creationDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Creation date Max': this.criteria.creationDateTo ? this.datePipe.transform(this.criteria.creationDateTo , this.dateFormat) : environment.emptyForExport ,
            'Closing date Min': this.criteria.closingDateFrom ? this.datePipe.transform(this.criteria.closingDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Closing date Max': this.criteria.closingDateTo ? this.datePipe.transform(this.criteria.closingDateTo , this.dateFormat) : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Custumor support conversation category': this.criteria.custumorSupportConversationCategory?.libelle ? this.criteria.custumorSupportConversationCategory?.libelle : environment.emptyForExport ,
        //'Custumor support conversation state': this.criteria.custumorSupportConversationState?.libelle ? this.criteria.custumorSupportConversationState?.libelle : environment.emptyForExport ,
        }];
      }



    get items(): Array<CustumorSupportConversationDto> {
        return this.service.items;
    }

    set items(value: Array<CustumorSupportConversationDto>) {
        this.service.items = value;
    }

    get selections(): Array<CustumorSupportConversationDto> {
        return this.service.selections;
    }

    set selections(value: Array<CustumorSupportConversationDto>) {
        this.service.selections = value;
    }

    get item(): CustumorSupportConversationDto {
        return this.service.item;
    }

    set item(value: CustumorSupportConversationDto) {
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

    get criteria(): CustumorSupportConversationCriteria {
        return this.service.criteria;
    }

    set criteria(value: CustumorSupportConversationCriteria) {
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
