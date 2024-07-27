import {Component, OnInit} from '@angular/core';
import {PaimentCollaboratorAdminService} from 'src/app/shared/service/admin/payement/PaimentCollaboratorAdmin.service';
import {PaimentCollaboratorDto} from 'src/app/shared/model/payement/PaimentCollaborator.model';
import {PaimentCollaboratorCriteria} from 'src/app/shared/criteria/payement/PaimentCollaboratorCriteria.model';


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
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponAdminService} from 'src/app/shared/service/admin/coupon/CouponAdmin.service';
import {OffreCloudProviderDto} from 'src/app/shared/model/cloud/OffreCloudProvider.model';
import {OffreCloudProviderAdminService} from 'src/app/shared/service/admin/cloud/OffreCloudProviderAdmin.service';
import {PaimentCollaboratorStateDto} from 'src/app/shared/model/payement/PaimentCollaboratorState.model';
import {PaimentCollaboratorStateAdminService} from 'src/app/shared/service/admin/payement/PaimentCollaboratorStateAdmin.service';
import {PaimentCollaboratorTypeDto} from 'src/app/shared/model/payement/PaimentCollaboratorType.model';
import {PaimentCollaboratorTypeAdminService} from 'src/app/shared/service/admin/payement/PaimentCollaboratorTypeAdmin.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingAdminService} from 'src/app/shared/service/admin/packaging/PackagingAdmin.service';
import {CountryDto} from 'src/app/shared/model/collaborator/Country.model';
import {CountryAdminService} from 'src/app/shared/service/admin/collaborator/CountryAdmin.service';
import {CityDto} from 'src/app/shared/model/collaborator/City.model';
import {CityAdminService} from 'src/app/shared/service/admin/collaborator/CityAdmin.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorAdminService} from 'src/app/shared/service/admin/inscription/InscriptionCollaboratorAdmin.service';


@Component({
  selector: 'app-paiment-collaborator-list-admin',
  templateUrl: './paiment-collaborator-list-admin.component.html'
})
export class PaimentCollaboratorListAdminComponent implements OnInit {

    protected fileName = 'PaimentCollaborator';

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


     yesOrNoDeployAndTestOnLine: any[] = [];
    countrys: Array<CountryDto>;
    citys: Array<CityDto>;
    collaborators: Array<CollaboratorDto>;
    packagings: Array<PackagingDto>;
    paimentCollaboratorStates: Array<PaimentCollaboratorStateDto>;
    paimentCollaboratorTypes: Array<PaimentCollaboratorTypeDto>;
    inscriptionCollaborators: Array<InscriptionCollaboratorDto>;
    coupons: Array<CouponDto>;
    offreCloudProviders: Array<OffreCloudProviderDto>;


    constructor( private service: PaimentCollaboratorAdminService  , private collaboratorService: CollaboratorAdminService, private couponService: CouponAdminService, private offreCloudProviderService: OffreCloudProviderAdminService, private paimentCollaboratorStateService: PaimentCollaboratorStateAdminService, private paimentCollaboratorTypeService: PaimentCollaboratorTypeAdminService, private packagingService: PackagingAdminService, private countryService: CountryAdminService, private cityService: CityAdminService, private inscriptionCollaboratorService: InscriptionCollaboratorAdminService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadCountry();
        this.loadCity();
        this.loadCollaborator();
        this.loadPackaging();
        this.loadPaimentCollaboratorState();
        this.loadPaimentCollaboratorType();
        this.loadInscriptionCollaborator();
        this.loadCoupon();
        this.loadOffreCloudProvider();
        this.yesOrNoDeployAndTestOnLine =  [{label: 'DeployAndTestOnLine', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];

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
            this.selections = new Array<PaimentCollaboratorDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: PaimentCollaboratorDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: PaimentCollaboratorDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new PaimentCollaboratorDto();
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
                    this.selections = new Array<PaimentCollaboratorDto>();
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


    public async delete(dto: PaimentCollaboratorDto) {

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

    public async duplicate(dto: PaimentCollaboratorDto) {
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

    public exportPdf(dto: PaimentCollaboratorDto): void {
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
            this.item = new PaimentCollaboratorDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new PaimentCollaboratorDto();
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
            {field: 'cardHolder', header: 'Card holder'},
            {field: 'cardNumber', header: 'Card number'},
            {field: 'expirationDate', header: 'Expiration date'},
            {field: 'cvc', header: 'Cvc'},
            {field: 'country?.libelle', header: 'Country'},
            {field: 'postal', header: 'Postal'},
            {field: 'city?.libelle', header: 'City'},
            {field: 'amountToPaid', header: 'Amount to paid'},
            {field: 'startDate', header: 'Start date'},
            {field: 'endDate', header: 'End date'},
            {field: 'consumedEntity', header: 'Consumed entity'},
            {field: 'consumedProjet', header: 'Consumed projet'},
            {field: 'consumedAttribut', header: 'Consumed attribut'},
            {field: 'consumedTokenInput', header: 'Consumed token input'},
            {field: 'consumedTokenOutput', header: 'Consumed token output'},
            {field: 'total', header: 'Total'},
            {field: 'basic', header: 'Basic'},
            {field: 'discount', header: 'Discount'},
            {field: 'remaining', header: 'Remaining'},
            {field: 'priceCloud', header: 'Price cloud'},
            {field: 'paiementDate', header: 'Paiement date'},
            {field: 'collaborator?.id', header: 'Collaborator'},
            {field: 'packaging?.code', header: 'Packaging'},
            {field: 'paimentCollaboratorState?.libelle', header: 'Paiment collaborator state'},
            {field: 'paimentCollaboratorType?.libelle', header: 'Paiment collaborator type'},
            {field: 'inscriptionCollaborator?.id', header: 'Inscription collaborator'},
            {field: 'coupon?.libelle', header: 'Coupon'},
            {field: 'deployAndTestOnLine', header: 'Deploy and test on line'},
            {field: 'offreCloudProvider?.libelle', header: 'Offre cloud provider'},
        ];
    }


    public async loadCountry(){
        this.countryService.findAllOptimized().subscribe(countrys => this.countrys = countrys, error => console.log(error))
    }
    public async loadCity(){
        this.cityService.findAllOptimized().subscribe(citys => this.citys = citys, error => console.log(error))
    }
    public async loadCollaborator(){
        this.collaboratorService.findAll().subscribe(collaborators => this.collaborators = collaborators, error => console.log(error))
    }
    public async loadPackaging(){
        this.packagingService.findAllOptimized().subscribe(packagings => this.packagings = packagings, error => console.log(error))
    }
    public async loadPaimentCollaboratorState(){
        this.paimentCollaboratorStateService.findAllOptimized().subscribe(paimentCollaboratorStates => this.paimentCollaboratorStates = paimentCollaboratorStates, error => console.log(error))
    }
    public async loadPaimentCollaboratorType(){
        this.paimentCollaboratorTypeService.findAllOptimized().subscribe(paimentCollaboratorTypes => this.paimentCollaboratorTypes = paimentCollaboratorTypes, error => console.log(error))
    }
    public async loadInscriptionCollaborator(){
        this.inscriptionCollaboratorService.findAll().subscribe(inscriptionCollaborators => this.inscriptionCollaborators = inscriptionCollaborators, error => console.log(error))
    }
    public async loadCoupon(){
        this.couponService.findAllOptimized().subscribe(coupons => this.coupons = coupons, error => console.log(error))
    }
    public async loadOffreCloudProvider(){
        this.offreCloudProviderService.findAllOptimized().subscribe(offreCloudProviders => this.offreCloudProviders = offreCloudProviders, error => console.log(error))
    }


	public initDuplicate(res: PaimentCollaboratorDto) {
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Card holder': e.cardHolder ,
                 'Card number': e.cardNumber ,
                 'Expiration date': e.expirationDate ,
                 'Cvc': e.cvc ,
                'Country': e.country?.libelle ,
                 'Postal': e.postal ,
                'City': e.city?.libelle ,
                 'Description': e.description ,
                 'Amount to paid': e.amountToPaid ,
                'Start date': this.datePipe.transform(e.startDate , 'dd/MM/yyyy hh:mm'),
                'End date': this.datePipe.transform(e.endDate , 'dd/MM/yyyy hh:mm'),
                 'Consumed entity': e.consumedEntity ,
                 'Consumed projet': e.consumedProjet ,
                 'Consumed attribut': e.consumedAttribut ,
                 'Consumed token input': e.consumedTokenInput ,
                 'Consumed token output': e.consumedTokenOutput ,
                 'Total': e.total ,
                 'Basic': e.basic ,
                 'Discount': e.discount ,
                 'Remaining': e.remaining ,
                 'Price cloud': e.priceCloud ,
                'Paiement date': this.datePipe.transform(e.paiementDate , 'dd/MM/yyyy hh:mm'),
                'Collaborator': e.collaborator?.id ,
                'Packaging': e.packaging?.code ,
                'Paiment collaborator state': e.paimentCollaboratorState?.libelle ,
                'Paiment collaborator type': e.paimentCollaboratorType?.libelle ,
                'Inscription collaborator': e.inscriptionCollaborator?.id ,
                'Coupon': e.coupon?.libelle ,
                'Deploy and test on line': e.deployAndTestOnLine? 'Vrai' : 'Faux' ,
                'Offre cloud provider': e.offreCloudProvider?.libelle ,
            }
        });

        this.criteriaData = [{
            'Card holder': this.criteria.cardHolder ? this.criteria.cardHolder : environment.emptyForExport ,
            'Card number': this.criteria.cardNumber ? this.criteria.cardNumber : environment.emptyForExport ,
            'Expiration date': this.criteria.expirationDate ? this.criteria.expirationDate : environment.emptyForExport ,
            'Cvc': this.criteria.cvc ? this.criteria.cvc : environment.emptyForExport ,
        //'Country': this.criteria.country?.libelle ? this.criteria.country?.libelle : environment.emptyForExport ,
            'Postal': this.criteria.postal ? this.criteria.postal : environment.emptyForExport ,
        //'City': this.criteria.city?.libelle ? this.criteria.city?.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Amount to paid Min': this.criteria.amountToPaidMin ? this.criteria.amountToPaidMin : environment.emptyForExport ,
            'Amount to paid Max': this.criteria.amountToPaidMax ? this.criteria.amountToPaidMax : environment.emptyForExport ,
            'Start date Min': this.criteria.startDateFrom ? this.datePipe.transform(this.criteria.startDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Start date Max': this.criteria.startDateTo ? this.datePipe.transform(this.criteria.startDateTo , this.dateFormat) : environment.emptyForExport ,
            'End date Min': this.criteria.endDateFrom ? this.datePipe.transform(this.criteria.endDateFrom , this.dateFormat) : environment.emptyForExport ,
            'End date Max': this.criteria.endDateTo ? this.datePipe.transform(this.criteria.endDateTo , this.dateFormat) : environment.emptyForExport ,
            'Consumed entity Min': this.criteria.consumedEntityMin ? this.criteria.consumedEntityMin : environment.emptyForExport ,
            'Consumed entity Max': this.criteria.consumedEntityMax ? this.criteria.consumedEntityMax : environment.emptyForExport ,
            'Consumed projet Min': this.criteria.consumedProjetMin ? this.criteria.consumedProjetMin : environment.emptyForExport ,
            'Consumed projet Max': this.criteria.consumedProjetMax ? this.criteria.consumedProjetMax : environment.emptyForExport ,
            'Consumed attribut Min': this.criteria.consumedAttributMin ? this.criteria.consumedAttributMin : environment.emptyForExport ,
            'Consumed attribut Max': this.criteria.consumedAttributMax ? this.criteria.consumedAttributMax : environment.emptyForExport ,
            'Consumed token input Min': this.criteria.consumedTokenInputMin ? this.criteria.consumedTokenInputMin : environment.emptyForExport ,
            'Consumed token input Max': this.criteria.consumedTokenInputMax ? this.criteria.consumedTokenInputMax : environment.emptyForExport ,
            'Consumed token output Min': this.criteria.consumedTokenOutputMin ? this.criteria.consumedTokenOutputMin : environment.emptyForExport ,
            'Consumed token output Max': this.criteria.consumedTokenOutputMax ? this.criteria.consumedTokenOutputMax : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Basic Min': this.criteria.basicMin ? this.criteria.basicMin : environment.emptyForExport ,
            'Basic Max': this.criteria.basicMax ? this.criteria.basicMax : environment.emptyForExport ,
            'Discount Min': this.criteria.discountMin ? this.criteria.discountMin : environment.emptyForExport ,
            'Discount Max': this.criteria.discountMax ? this.criteria.discountMax : environment.emptyForExport ,
            'Remaining Min': this.criteria.remainingMin ? this.criteria.remainingMin : environment.emptyForExport ,
            'Remaining Max': this.criteria.remainingMax ? this.criteria.remainingMax : environment.emptyForExport ,
            'Price cloud Min': this.criteria.priceCloudMin ? this.criteria.priceCloudMin : environment.emptyForExport ,
            'Price cloud Max': this.criteria.priceCloudMax ? this.criteria.priceCloudMax : environment.emptyForExport ,
            'Paiement date Min': this.criteria.paiementDateFrom ? this.datePipe.transform(this.criteria.paiementDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Paiement date Max': this.criteria.paiementDateTo ? this.datePipe.transform(this.criteria.paiementDateTo , this.dateFormat) : environment.emptyForExport ,
        //'Collaborator': this.criteria.collaborator?.id ? this.criteria.collaborator?.id : environment.emptyForExport ,
        //'Packaging': this.criteria.packaging?.code ? this.criteria.packaging?.code : environment.emptyForExport ,
        //'Paiment collaborator state': this.criteria.paimentCollaboratorState?.libelle ? this.criteria.paimentCollaboratorState?.libelle : environment.emptyForExport ,
        //'Paiment collaborator type': this.criteria.paimentCollaboratorType?.libelle ? this.criteria.paimentCollaboratorType?.libelle : environment.emptyForExport ,
        //'Inscription collaborator': this.criteria.inscriptionCollaborator?.id ? this.criteria.inscriptionCollaborator?.id : environment.emptyForExport ,
        //'Coupon': this.criteria.coupon?.libelle ? this.criteria.coupon?.libelle : environment.emptyForExport ,
            'Deploy and test on line': this.criteria.deployAndTestOnLine ? (this.criteria.deployAndTestOnLine ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        //'Offre cloud provider': this.criteria.offreCloudProvider?.libelle ? this.criteria.offreCloudProvider?.libelle : environment.emptyForExport ,
        }];
      }



    get items(): Array<PaimentCollaboratorDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentCollaboratorDto>) {
        this.service.items = value;
    }

    get selections(): Array<PaimentCollaboratorDto> {
        return this.service.selections;
    }

    set selections(value: Array<PaimentCollaboratorDto>) {
        this.service.selections = value;
    }

    get item(): PaimentCollaboratorDto {
        return this.service.item;
    }

    set item(value: PaimentCollaboratorDto) {
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

    get criteria(): PaimentCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCollaboratorCriteria) {
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
