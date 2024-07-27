import {Component, OnInit} from '@angular/core';
import {ForumCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumCollaborator.service';
import {ForumDto} from 'src/app/shared/model/forum/Forum.model';
import {ForumCriteria} from 'src/app/shared/criteria/forum/ForumCriteria.model';


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
import {CollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CollaboratorCollaborator.service';
import {ForumSubjectDto} from 'src/app/shared/model/forum/ForumSubject.model';
import {ForumSubjectCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumSubjectCollaborator.service';
import {ForumStateDto} from 'src/app/shared/model/forum/ForumState.model';
import {ForumStateCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumStateCollaborator.service';
import {ForumCommentDto} from 'src/app/shared/model/forum/ForumComment.model';
import {ForumCommentCollaboratorService} from 'src/app/shared/service/collaborator/forum/ForumCommentCollaborator.service';


@Component({
  selector: 'app-forum-list-collaborator',
  templateUrl: './forum-list-collaborator.component.html'
})
export class ForumListCollaboratorComponent implements OnInit {

    protected fileName = 'Forum';

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
    forumSubjects: Array<ForumSubjectDto>;
    forumStates: Array<ForumStateDto>;


    constructor( private service: ForumCollaboratorService  , private collaboratorService: CollaboratorCollaboratorService, private forumSubjectService: ForumSubjectCollaboratorService, private forumStateService: ForumStateCollaboratorService, private forumCommentService: ForumCommentCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadForumSubject();
        this.loadForumState();

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
            this.selections = new Array<ForumDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: ForumDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: ForumDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new ForumDto();
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
                    this.selections = new Array<ForumDto>();
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


    public async delete(dto: ForumDto) {

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

    public async duplicate(dto: ForumDto) {
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

    public exportPdf(dto: ForumDto): void {
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
            this.item = new ForumDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new ForumDto();
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
            {field: 'creationDate', header: 'Creation date'},
            {field: 'publicationDate', header: 'Publication date'},
            {field: 'title', header: 'Title'},
            {field: 'likes', header: 'Likes'},
            {field: 'comments', header: 'Comments'},
            {field: 'forumSubject?.libelle', header: 'Forum subject'},
            {field: 'forumState?.libelle', header: 'Forum state'},
        ];
    }


    public async loadCollaborator(){
        this.collaboratorService.findAll().subscribe(collaborators => this.collaborators = collaborators, error => console.log(error))
    }
    public async loadForumSubject(){
        this.forumSubjectService.findAllOptimized().subscribe(forumSubjects => this.forumSubjects = forumSubjects, error => console.log(error))
    }
    public async loadForumState(){
        this.forumStateService.findAllOptimized().subscribe(forumStates => this.forumStates = forumStates, error => console.log(error))
    }


	public initDuplicate(res: ForumDto) {
        if (res.forumComments != null) {
             res.forumComments.forEach(d => { d.forum = null; d.id = null; });
        }
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Content': e.content ,
                'Collaborator': e.collaborator?.id ,
                'Creation date': this.datePipe.transform(e.creationDate , 'dd/MM/yyyy hh:mm'),
                'Publication date': this.datePipe.transform(e.publicationDate , 'dd/MM/yyyy hh:mm'),
                 'Title': e.title ,
                 'Likes': e.likes ,
                 'Comments': e.comments ,
                 'Description': e.description ,
                'Forum subject': e.forumSubject?.libelle ,
                'Forum state': e.forumState?.libelle ,
            }
        });

        this.criteriaData = [{
            'Content': this.criteria.content ? this.criteria.content : environment.emptyForExport ,
        //'Collaborator': this.criteria.collaborator?.id ? this.criteria.collaborator?.id : environment.emptyForExport ,
            'Creation date Min': this.criteria.creationDateFrom ? this.datePipe.transform(this.criteria.creationDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Creation date Max': this.criteria.creationDateTo ? this.datePipe.transform(this.criteria.creationDateTo , this.dateFormat) : environment.emptyForExport ,
            'Publication date Min': this.criteria.publicationDateFrom ? this.datePipe.transform(this.criteria.publicationDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Publication date Max': this.criteria.publicationDateTo ? this.datePipe.transform(this.criteria.publicationDateTo , this.dateFormat) : environment.emptyForExport ,
            'Title': this.criteria.title ? this.criteria.title : environment.emptyForExport ,
            'Likes Min': this.criteria.likesMin ? this.criteria.likesMin : environment.emptyForExport ,
            'Likes Max': this.criteria.likesMax ? this.criteria.likesMax : environment.emptyForExport ,
            'Comments Min': this.criteria.commentsMin ? this.criteria.commentsMin : environment.emptyForExport ,
            'Comments Max': this.criteria.commentsMax ? this.criteria.commentsMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Forum subject': this.criteria.forumSubject?.libelle ? this.criteria.forumSubject?.libelle : environment.emptyForExport ,
        //'Forum state': this.criteria.forumState?.libelle ? this.criteria.forumState?.libelle : environment.emptyForExport ,
        }];
      }



    get items(): Array<ForumDto> {
        return this.service.items;
    }

    set items(value: Array<ForumDto>) {
        this.service.items = value;
    }

    get selections(): Array<ForumDto> {
        return this.service.selections;
    }

    set selections(value: Array<ForumDto>) {
        this.service.selections = value;
    }

    get item(): ForumDto {
        return this.service.item;
    }

    set item(value: ForumDto) {
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

    get criteria(): ForumCriteria {
        return this.service.criteria;
    }

    set criteria(value: ForumCriteria) {
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
