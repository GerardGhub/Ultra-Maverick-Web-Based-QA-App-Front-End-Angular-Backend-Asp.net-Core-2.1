(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "3RKl":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/client-locations/client-locations.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClientLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationsComponent", function() { return ClientLocationsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_client_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/client-location */ "avw3");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/client-locations.service */ "4D4e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");












const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function ClientLocationsComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function ClientLocationsComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "clientLocationName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_31_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const clientLocation_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, clientLocation_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_31_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const clientLocation_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, clientLocation_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](clientLocation_r17.clientLocationName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function ClientLocationsComponent_ng_container_40_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_40_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function ClientLocationsComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClientLocationsComponent_ng_container_40_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function ClientLocationsComponent_ng_container_41_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_ng_container_41_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function ClientLocationsComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ClientLocationsComponent_ng_container_41_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ClientLocationsComponent_ng_container_41_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function ClientLocationsComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class ClientLocationsComponent {
    //Constructor
    constructor(clientLocationsService, formBuilder) {
        this.clientLocationsService = clientLocationsService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.clientLocations = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteClientLocation = new src_app_models_client_location__WEBPACK_IMPORTED_MODULE_1__["ClientLocation"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "clientLocationName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "clientLocationName";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.clientLocationsService.getClientLocations().subscribe((response) => {
            this.clientLocations = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            clientLocationID: this.formBuilder.control(null),
            clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            clientLocationID: this.formBuilder.control(null),
            clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ clientLocationID: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.clientLocationsService.insertClientLocation(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_client_location__WEBPACK_IMPORTED_MODULE_1__["ClientLocation"]();
                p.clientLocationID = response.clientLocationID;
                p.clientLocationName = response.clientLocationName;
                this.clientLocations.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newClientLocationFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, clientLocation) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(clientLocation);
            this.editIndex = this.clientLocations.indexOf(clientLocation);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.clientLocationsService.updateClientLocation(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.clientLocations[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editClientLocationFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, clientLocation) {
        //Set data into deleteClientLocation
        this.deleteClientLocation.clientLocationID = clientLocation.clientLocationID;
        this.deleteClientLocation.clientLocationName = clientLocation.clientLocationName;
        this.deleteIndex = this.clientLocations.indexOf(clientLocation);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.clientLocationsService.deleteClientLocation(this.deleteClientLocation.clientLocationID).subscribe((response) => {
            //Delete object in Grid
            this.clientLocations.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteClientLocation.clientLocationID = null;
            this.deleteClientLocation.clientLocationName = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
ClientLocationsComponent.ɵfac = function ClientLocationsComponent_Factory(t) { return new (t || ClientLocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_5__["ClientLocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ClientLocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ClientLocationsComponent, selectors: [["app-client-locations"]], viewQuery: function ClientLocationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 114, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newClientLocationModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "clientLocationName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table", "table-bordered"], [1, "table-light", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editClientLocationModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function ClientLocationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClientLocationsComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_select_ngModelChange_11_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Client Location Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchText = $event; })("keyup", function ClientLocationsComponent_Template_input_keyup_18_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ClientLocationsComponent_i_26_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ClientLocationsComponent_i_27_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ClientLocationsComponent_i_28_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ClientLocationsComponent_tr_31_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_37_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ClientLocationsComponent_ng_container_40_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ClientLocationsComponent_ng_container_41_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "New Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Client Location Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, ClientLocationsComponent_span_62_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_66_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Edit Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Client Location Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, ClientLocationsComponent_span_85_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_89_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Delete Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Are you sure to delete this Client Location?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Client Location Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_108_listener($event) { return ctx.deleteClientLocation.clientLocationName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_112_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "clientLocationName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](32, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](33, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 24, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.valid), ctx.newForm.get("clientLocationName").valid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.valid) && (ctx.newForm.get("clientLocationName").errors == null ? null : ctx.newForm.get("clientLocationName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.valid), ctx.editForm.get("clientLocationName").valid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.valid) && (ctx.editForm.get("clientLocationName").errors == null ? null : ctx.editForm.get("clientLocationName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteClientLocation.clientLocationName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "8dlv":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/task-priorities/task-priorities.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TaskPrioritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPrioritiesComponent", function() { return TaskPrioritiesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/task-priority */ "cluD");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task-priorities.service */ "6bg8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");












const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function TaskPrioritiesComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function TaskPrioritiesComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "taskPriorityName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_32_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskPriority_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, taskPriority_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_32_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskPriority_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, taskPriority_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taskPriority_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taskPriority_r17.taskPriorityName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function TaskPrioritiesComponent_ng_container_41_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_41_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function TaskPrioritiesComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskPrioritiesComponent_ng_container_41_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function TaskPrioritiesComponent_ng_container_42_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_ng_container_42_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function TaskPrioritiesComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TaskPrioritiesComponent_ng_container_42_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TaskPrioritiesComponent_ng_container_42_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function TaskPrioritiesComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_span_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class TaskPrioritiesComponent {
    //Constructor
    constructor(taskPrioritiesService, formBuilder) {
        this.taskPrioritiesService = taskPrioritiesService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.taskPriorities = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteTaskPriority = new src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_1__["TaskPriority"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "taskPriorityName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "taskPriorityName";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.taskPrioritiesService.getTaskPriorities().subscribe((response) => {
            this.taskPriorities = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            taskPriorityID: this.formBuilder.control(null),
            taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            taskPriorityID: this.formBuilder.control(null),
            taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.taskPriorities, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ taskPriorityID: 0 });
        setTimeout(() => {
            //Focus the TaskPriority textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.taskPrioritiesService.insertTaskPriority(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_1__["TaskPriority"]();
                p.taskPriorityID = response.taskPriorityID;
                p.taskPriorityName = response.taskPriorityName;
                this.taskPriorities.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newTaskPriorityFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, taskPriority) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(taskPriority);
            this.editIndex = this.taskPriorities.indexOf(taskPriority);
            //Focus the TaskPriority textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.taskPrioritiesService.updateTaskPriority(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.taskPriorities[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editTaskPriorityFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, taskPriority) {
        //Set data into deleteTaskPriority
        this.deleteTaskPriority.taskPriorityID = taskPriority.taskPriorityID;
        this.deleteTaskPriority.taskPriorityName = taskPriority.taskPriorityName;
        this.deleteIndex = this.taskPriorities.indexOf(taskPriority);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.taskPrioritiesService.deleteTaskPriority(this.deleteTaskPriority.taskPriorityID).subscribe((response) => {
            //Delete object in Grid
            this.taskPriorities.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteTaskPriority.taskPriorityID = null;
            this.deleteTaskPriority.taskPriorityName = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
TaskPrioritiesComponent.ɵfac = function TaskPrioritiesComponent_Factory(t) { return new (t || TaskPrioritiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_5__["TaskPrioritiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
TaskPrioritiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TaskPrioritiesComponent, selectors: [["app-task-priorities"]], viewQuery: function TaskPrioritiesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 115, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newTaskPriorityModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskPriorityName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskPriorityModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskPriorityName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskPriorityModal", 1, "modal"], ["for", "txtEditTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editTaskPriorityModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function TaskPrioritiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Task Priorities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TaskPrioritiesComponent_i_2_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_7_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Create Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_select_ngModelChange_12_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Task Priority Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchText = $event; })("keyup", function TaskPrioritiesComponent_Template_input_keyup_19_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Task Priority Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, TaskPrioritiesComponent_i_27_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TaskPrioritiesComponent_i_28_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TaskPrioritiesComponent_i_29_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, TaskPrioritiesComponent_tr_32_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_38_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, TaskPrioritiesComponent_ng_container_41_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, TaskPrioritiesComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_43_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "New Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Task Priority Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, TaskPrioritiesComponent_span_63_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_67_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Edit Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Task Priority Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, TaskPrioritiesComponent_span_86_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_90_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Delete Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Are you sure to delete this Task Priority?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Task Priority Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_109_listener($event) { return ctx.deleteTaskPriority.taskPriorityName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_113_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskPriorityName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](33, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](35, 24, ctx.taskPriorities, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.valid), ctx.newForm.get("taskPriorityName").valid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.valid) && (ctx.newForm.get("taskPriorityName").errors == null ? null : ctx.newForm.get("taskPriorityName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.valid), ctx.editForm.get("taskPriorityName").valid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.valid) && (ctx.editForm.get("taskPriorityName").errors == null ? null : ctx.editForm.get("taskPriorityName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteTaskPriority.taskPriorityName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLXByaW9yaXRpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "9kti":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/countries/countries.component.ts ***!
  \*******************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/country */ "pgfe");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/countries.service */ "1XgV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");












const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function CountriesComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function CountriesComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "countryName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_tr_31_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const country_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, country_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_tr_31_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const country_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, country_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](country_r17.countryName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function CountriesComponent_ng_container_40_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_40_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function CountriesComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CountriesComponent_ng_container_40_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function CountriesComponent_ng_container_41_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_ng_container_41_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function CountriesComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CountriesComponent_ng_container_41_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CountriesComponent_ng_container_41_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function CountriesComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class CountriesComponent {
    //Constructor
    constructor(countriesService, formBuilder) {
        this.countriesService = countriesService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.countries = [];
        this.showLoading = false;
        //Objects for Delete
        this.deleteCountry = new src_app_models_country__WEBPACK_IMPORTED_MODULE_1__["Country"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "countryName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Sorting
        this.sortBy = "countryName";
        this.sortOrder = "ASC"; //ASC | DESC
    }
    ngOnInit() {
        //Get data from database
        this.countriesService.getCountries().subscribe((response) => {
            this.countries = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            countryID: this.formBuilder.control(null),
            countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            countryID: this.formBuilder.control(null),
            countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.countries, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ countryID: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.countriesService.insertCountry(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_country__WEBPACK_IMPORTED_MODULE_1__["Country"]();
                p.countryID = response.countryID;
                p.countryName = response.countryName;
                this.countries.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newCountryFormCancel").trigger("click");
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, country) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(country);
            this.editIndex = this.countries.indexOf(country);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.countriesService.updateCountry(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.countries[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editCountryFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, country) {
        //Set data into deleteCountry
        this.deleteCountry.countryID = country.countryID;
        this.deleteCountry.countryName = country.countryName;
        this.deleteIndex = this.countries.indexOf(country);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.countriesService.deleteCountry(this.deleteCountry.countryID).subscribe((response) => {
            //Delete object in Grid
            this.countries.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteCountry.countryID = null;
            this.deleteCountry.countryName = null;
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        //Recall the calculateNoOfPages
        this.calculateNoOfPages();
    }
}
CountriesComponent.ɵfac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CountriesComponent, selectors: [["app-countries"]], viewQuery: function CountriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 114, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newCountryModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "countryName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newCountryModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewCountryName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editCountryModal", 1, "modal"], ["for", "txtEditCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteCountryModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteCountryName", "placeholder", "Country Name", "name", "CountryName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editCountryModal", "data-backdrop", "false", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteCountryModal", "data-backdrop", "false", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CountriesComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_select_ngModelChange_11_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Country Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchText = $event; })("keyup", function CountriesComponent_Template_input_keyup_18_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Country Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CountriesComponent_i_26_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CountriesComponent_i_27_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CountriesComponent_i_28_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, CountriesComponent_tr_31_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_37_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, CountriesComponent_ng_container_40_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, CountriesComponent_ng_container_41_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "New Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Country Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, CountriesComponent_span_62_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_66_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Edit Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Country Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, CountriesComponent_span_85_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_89_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Delete Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Are you sure to delete this Country?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Country Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_input_ngModelChange_108_listener($event) { return ctx.deleteCountry.countryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_112_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "countryName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](32, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](33, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 24, ctx.countries, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.valid), ctx.newForm.get("countryName").valid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.valid) && (ctx.newForm.get("countryName").errors == null ? null : ctx.newForm.get("countryName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.valid), ctx.editForm.get("countryName").valid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.valid) && (ctx.editForm.get("countryName").errors == null ? null : ctx.editForm.get("countryName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteCountry.countryName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JxWU":
/*!***************************************!*\
  !*** ./src/app/models/task-status.ts ***!
  \***************************************/
/*! exports provided: TaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
class TaskStatus {
    constructor() {
        this.taskStatusID = null;
        this.taskStatusName = null;
    }
}


/***/ }),

/***/ "OdQg":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/components/cancelled-potransaction-status/cancelled-potransaction-status.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CancelledPOTransactionStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelledPOTransactionStatusComponent", function() { return CancelledPOTransactionStatusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_cancelled_potransaction_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/cancelled-potransaction-status */ "zo1J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cancelled-potransaction-status.service */ "r8+Z");
/* harmony import */ var src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/system-capability-status.service */ "lJP4");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");



















const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["RejectStatusDescription"];
const _c3 = ["DeleteRejectStatusDescription"];
const _c4 = ["UpdateRejectStatusDescription"];
function CancelledPOTransactionStatusComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 59);
} }
function CancelledPOTransactionStatusComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r19.sortBy = "reject_status_name"; return ctx_r19.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_tr_36_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const clientLocation_r25 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.onEditClick($event, clientLocation_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_tr_36_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const clientLocation_r25 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.onDeleteClick($event, clientLocation_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r25.status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r25.is_active);
} }
const _c5 = function (a0) { return { "active": a0 }; };
function CancelledPOTransactionStatusComponent_ng_container_45_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_45_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const page_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r32.onPageIndexClicked(page_r31.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, page_r31.pageIndex == ctx_r30.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r31.pageIndex + 1);
} }
function CancelledPOTransactionStatusComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CancelledPOTransactionStatusComponent_ng_container_45_li_1_Template, 3, 4, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function CancelledPOTransactionStatusComponent_ng_container_46_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_ng_container_46_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r36.onPageIndexClicked(ctx_r36.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r35.currentPageIndex + 1);
} }
function CancelledPOTransactionStatusComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r40.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CancelledPOTransactionStatusComponent_ng_container_46_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CancelledPOTransactionStatusComponent_ng_container_46_li_8_Template, 3, 2, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.onPageIndexClicked(ctx_r41.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.onPageIndexClicked(ctx_r42.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c5, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c5, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c5, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c5, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function CancelledPOTransactionStatusComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r43.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r43.current_system_status, " ");
} }
function CancelledPOTransactionStatusComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_option_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r44.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r44.current_system_status, " ");
} }
function CancelledPOTransactionStatusComponent_span_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c6 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class CancelledPOTransactionStatusComponent {
    constructor(cancelledPOTransactionStatusService, formBuilder, systemCapabilityStatusService, toastr) {
        this.cancelledPOTransactionStatusService = cancelledPOTransactionStatusService;
        this.formBuilder = formBuilder;
        this.systemCapabilityStatusService = systemCapabilityStatusService;
        this.toastr = toastr;
        //Objects for Holding Model Data
        this.clientLocations = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteRejectStatus = new src_app_models_cancelled_potransaction_status__WEBPACK_IMPORTED_MODULE_3__["CancelledPOTransactionStatus"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "reject_status_name";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "reject_status_name";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.cancelledPOTransactionStatusService.getListOfStatusOfData().subscribe((response) => {
            this.clientLocations = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        // Here 
        this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ id: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Start
            var StatusofReject = this.RejectStatusDescription.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to append new status?',
                text: StatusofReject,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    //Invoke the REST-API call
                    this.cancelledPOTransactionStatusService.insertDataStatus(this.newForm.value).subscribe((response) => {
                        //Add Response to Grid
                        var p = new src_app_models_cancelled_potransaction_status__WEBPACK_IMPORTED_MODULE_3__["CancelledPOTransactionStatus"]();
                        p.id = response.id;
                        p.status_name = response.status_name;
                        p.is_active = response.is_active;
                        this.clientLocations.push(p);
                        //Reset the newForm
                        this.newForm.reset();
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#newClientLocationFormCancel").trigger("click");
                        this.calculateNoOfPages();
                    }, (error) => {
                        console.log(error);
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Append!', 'Your data is updated on production', 'success');
                }
            });
            //End
        }
        else {
            this.FieldOutRequiredField();
        }
    }
    FieldOutRequiredField() {
        this.toastr.warning('Field out the required fields!', 'Notifications');
    }
    onEditClick(event, RejectedStatusParam) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(RejectedStatusParam);
            this.editIndex = this.clientLocations.indexOf(RejectedStatusParam);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            var Status = this.UpdateRejectStatusDescription.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to modify the status?',
                text: Status,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    //Invoke the REST-API call
                    this.cancelledPOTransactionStatusService.updateDataStatus(this.editForm.value).subscribe((response) => {
                        //Update the response in Grid
                        this.clientLocations[this.editIndex] = response;
                        //Reset the editForm
                        this.editForm.reset();
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#editClientLocationFormCancel").trigger("click");
                    }, (error) => {
                        console.log(error);
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Updated!', 'your data on production has been modified', 'success');
                }
            });
        }
    }
    onDeleteClick(event, CancelledPOTransactionStatus) {
        //Set data into deleteClientLocation
        this.deleteRejectStatus.id = CancelledPOTransactionStatus.id;
        this.deleteRejectStatus.status_name = CancelledPOTransactionStatus.status_name;
        this.deleteIndex = this.clientLocations.indexOf(CancelledPOTransactionStatus);
    }
    onDeleteConfirmClick() {
        var StatusofRm = this.DeleteRejectStatusDescription.nativeElement.value;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure that you want to delete the status?',
            text: StatusofRm,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                //Invoke the REST-API call
                this.cancelledPOTransactionStatusService.deleteDataStatus(this.deleteRejectStatus.id).subscribe((response) => {
                    //Delete object in Grid
                    this.clientLocations.splice(this.deleteIndex, 1);
                    //Clear deleteCountry
                    this.deleteRejectStatus.id = null;
                    this.deleteRejectStatus.status_name = null;
                    this.deleteRejectStatus.is_active = null;
                    //Recall the calculateNoOfPages
                    this.calculateNoOfPages();
                }, (error) => {
                    console.log(error);
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'data has been removed on production.', 'success');
            }
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
CancelledPOTransactionStatusComponent.ɵfac = function CancelledPOTransactionStatusComponent_Factory(t) { return new (t || CancelledPOTransactionStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_6__["CancelledPOTransactionStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__["SystemCapabilityStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
CancelledPOTransactionStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CancelledPOTransactionStatusComponent, selectors: [["app-cancelled-potransaction-status"]], viewQuery: function CancelledPOTransactionStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectStatusDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.DeleteRejectStatusDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.UpdateRejectStatusDescription = _t.first);
    } }, decls: 138, vars: 49, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#newClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "status_name"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table", "table-striped", "table-bordered", "nowrap", "table-responsive-xl", 2, "width", "100%"], [1, "text-light", "header-bg-color-um", "system-name"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "mr-1"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "ml-1"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewstatus_name", "placeholder", "Status", "name", "status_name", "formControlName", "status_name", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", "", "RejectStatusDescription", ""], ["class", "text-danger", 4, "ngIf"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "txtNewis_active", "name", "is_active", "formControlName", "is_active", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditstatus_name", "placeholder", "Status", "name", "status_name", "formControlName", "status_name", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["defaultTextBox_New", "", "UpdateRejectStatusDescription", ""], ["role", "dialog", "id", "deleteModal", 1, "modal"], ["floatLabel", "auto", "appearance", "standard", "color", "primary", 1, "w-100"], ["type", "text", "matInput", "", "id", "txtStatusName", "placeholder", "Status", "name", "status_name", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["DeleteRejectStatusDescription", ""], ["matPrefix", ""], [1, "material-icons-outlined"], ["mat-stroked-button", "", "color", "warn", "data-dismiss", "modal", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#editClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["mat-stroked-button", "", "color", "warn", "data-toggle", "modal", "data-target", "#deleteModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"], [3, "value"]], template: function CancelledPOTransactionStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CancelledPOTransactionStatusComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CancelledPOTransactionStatusComponent_Template_select_ngModelChange_13_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CancelledPOTransactionStatusComponent_Template_input_ngModelChange_21_listener($event) { return ctx.searchText = $event; })("keyup", function CancelledPOTransactionStatusComponent_Template_input_keyup_21_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CancelledPOTransactionStatusComponent_i_29_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CancelledPOTransactionStatusComponent_i_30_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CancelledPOTransactionStatusComponent_i_31_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CancelledPOTransactionStatusComponent_tr_36_Template, 11, 2, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CancelledPOTransactionStatusComponent_ng_container_45_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CancelledPOTransactionStatusComponent_ng_container_46_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_li_click_47_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Append RM Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, CancelledPOTransactionStatusComponent_span_68_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "select", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, CancelledPOTransactionStatusComponent_option_77_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_80_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Edit Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, CancelledPOTransactionStatusComponent_span_99_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "select", 41, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, CancelledPOTransactionStatusComponent_option_109_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](110, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, CancelledPOTransactionStatusComponent_span_111_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_113_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Delete Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "mat-form-field", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CancelledPOTransactionStatusComponent_Template_input_ngModelChange_128_listener($event) { return ctx.deleteRejectStatus.status_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "mat-icon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_136_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "reject_status_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](37, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](38, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](39, 29, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](37, _c6, ctx.newForm.get("status_name").invalid && (ctx.newForm.get("status_name").dirty || ctx.newForm.get("status_name").touched || ctx.newForm.valid), ctx.newForm.get("status_name").valid && (ctx.newForm.get("status_name").dirty || ctx.newForm.get("status_name").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("status_name").invalid && (ctx.newForm.get("status_name").dirty || ctx.newForm.get("status_name").touched || ctx.newForm.valid) && (ctx.newForm.get("status_name").errors == null ? null : ctx.newForm.get("status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](40, _c6, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 33, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](43, _c6, ctx.editForm.get("status_name").invalid && (ctx.editForm.get("status_name").dirty || ctx.editForm.get("status_name").touched || ctx.editForm.valid), ctx.editForm.get("status_name").valid && (ctx.editForm.get("status_name").dirty || ctx.editForm.get("status_name").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("status_name").invalid && (ctx.editForm.get("status_name").dirty || ctx.editForm.get("status_name").touched || ctx.editForm.valid) && (ctx.editForm.get("status_name").errors == null ? null : ctx.editForm.get("status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](46, _c6, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](110, 35, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("is_active").invalid && (ctx.editForm.get("is_active").dirty || ctx.editForm.get("is_active").touched || ctx.editForm.valid) && (ctx.editForm.get("is_active").errors == null ? null : ctx.editForm.get("is_active").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteRejectStatus.status_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_15__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_16__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWxsZWQtcG90cmFuc2FjdGlvbi1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ROVb":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/rejected-status/rejected-status.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RejectedStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedStatusComponent", function() { return RejectedStatusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/rejected-status */ "kHQe");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rejected-status.service */ "EVuK");
/* harmony import */ var src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/system-capability-status.service */ "lJP4");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");

















const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["RejectStatusDescription"];
const _c3 = ["RejectStatusUpdate"];
function RejectedStatusComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 56);
} }
function RejectedStatusComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r18.sortBy = "reject_status_name"; return ctx_r18.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_tr_36_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const clientLocation_r24 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.onEditClick($event, clientLocation_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r24.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r24.is_active);
} }
const _c4 = function (a0) { return { "active": a0 }; };
function RejectedStatusComponent_ng_container_45_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_45_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const page_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r30.onPageIndexClicked(page_r29.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c4, page_r29.pageIndex == ctx_r28.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r29.pageIndex + 1);
} }
function RejectedStatusComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RejectedStatusComponent_ng_container_45_li_1_Template, 3, 4, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function RejectedStatusComponent_ng_container_46_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_ng_container_46_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.onPageIndexClicked(ctx_r34.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r33.currentPageIndex + 1);
} }
function RejectedStatusComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RejectedStatusComponent_ng_container_46_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RejectedStatusComponent_ng_container_46_li_8_Template, 3, 2, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.onPageIndexClicked(ctx_r39.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r40.onPageIndexClicked(ctx_r40.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c4, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c4, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c4, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c4, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function RejectedStatusComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status of Reject can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r41.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r41.current_system_status, " ");
} }
function RejectedStatusComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status of Reject can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_option_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r42.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r42.current_system_status, " ");
} }
function RejectedStatusComponent_span_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c5 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class RejectedStatusComponent {
    constructor(rejectedStatusService, formBuilder, systemCapabilityStatusService, toastr) {
        this.rejectedStatusService = rejectedStatusService;
        this.formBuilder = formBuilder;
        this.systemCapabilityStatusService = systemCapabilityStatusService;
        this.toastr = toastr;
        //Objects for Holding Model Data
        this.clientLocations = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteRejectStatus = new src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__["RejectedStatus"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "reject_status_name";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "reject_status_name";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.rejectedStatusService.getListOfStatusOfReject().subscribe((response) => {
            this.clientLocations = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            reject_status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            reject_status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        // Here 
        this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ id: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            var Status = this.RejectStatusDescription.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to append new status?',
                text: Status,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Append!', 'Your data is updated on production', 'success');
                }
            });
            //Invoke the REST-API call
            this.rejectedStatusService.insertRejectStatus(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__["RejectedStatus"]();
                p.id = response.id;
                p.reject_status_name = response.reject_status_name;
                p.is_active = response.is_active;
                this.clientLocations.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newClientLocationFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.FieldOutRequiredField();
        }
    }
    FieldOutRequiredField() {
        this.toastr.warning('Field out the required fields!', 'Notifications');
    }
    onEditClick(event, RejectedStatusParam) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(RejectedStatusParam);
            this.editIndex = this.clientLocations.indexOf(RejectedStatusParam);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            var Status = this.RejectStatusUpdate.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to modify the status?',
                text: Status,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    //Invoke the REST-API call
                    this.rejectedStatusService.updateRejectedStatus(this.editForm.value).subscribe((response) => {
                        //Update the response in Grid
                        this.clientLocations[this.editIndex] = response;
                        //Reset the editForm
                        this.editForm.reset();
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#editClientLocationFormCancel").trigger("click");
                    }, (error) => {
                        console.log(error);
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Updated!', 'your data on production has been modified', 'success');
                }
            });
        }
    }
    onDeleteClick(event, RejectedStatus) {
        //Set data into deleteClientLocation
        this.deleteRejectStatus.id = RejectedStatus.id;
        this.deleteRejectStatus.reject_status_name = RejectedStatus.reject_status_name;
        this.deleteIndex = this.clientLocations.indexOf(RejectedStatus);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.rejectedStatusService.deleteRejectedStatus(this.deleteRejectStatus.id).subscribe((response) => {
            //Delete object in Grid
            this.clientLocations.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteRejectStatus.id = null;
            this.deleteRejectStatus.reject_status_name = null;
            this.deleteRejectStatus.is_active = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
RejectedStatusComponent.ɵfac = function RejectedStatusComponent_Factory(t) { return new (t || RejectedStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_6__["RejectedStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__["SystemCapabilityStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
RejectedStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RejectedStatusComponent, selectors: [["app-rejected-status"]], viewQuery: function RejectedStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectStatusDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectStatusUpdate = _t.first);
    } }, decls: 134, vars: 49, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#newClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "reject_status_name"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table", "table-striped", "table-bordered", "nowrap", "table-responsive-xl", 2, "width", "100%"], [1, "text-light", "header-bg-color-um", "system-name"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "mr-1"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "ml-1"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewreject_status_name", "placeholder", "Reject Status", "name", "reject_status_name", "formControlName", "reject_status_name", "autocomplete", "off", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", "", "RejectStatusDescription", ""], ["class", "text-danger", 4, "ngIf"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "txtNewis_active", "name", "is_active", "formControlName", "is_active", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditreject_status_name", "placeholder", "Reject Status", "name", "reject_status_name", "autocomplete", "off", "formControlName", "reject_status_name", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", "", "RejectStatusUpdate", ""], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["role", "dialog", "id", "deleteModal", 1, "modal"], ["for", "txtDeleteClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "data-dismiss", "modal", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#editClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"], [3, "value"]], template: function RejectedStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RejectedStatusComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RejectedStatusComponent_Template_select_ngModelChange_13_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RejectedStatusComponent_Template_input_ngModelChange_21_listener($event) { return ctx.searchText = $event; })("keyup", function RejectedStatusComponent_Template_input_keyup_21_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RejectedStatusComponent_i_29_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RejectedStatusComponent_i_30_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, RejectedStatusComponent_i_31_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, RejectedStatusComponent_tr_36_Template, 9, 2, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, RejectedStatusComponent_ng_container_45_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, RejectedStatusComponent_ng_container_46_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_li_click_47_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Append Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, RejectedStatusComponent_span_68_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "select", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, RejectedStatusComponent_option_77_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_80_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Edit Reject Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, RejectedStatusComponent_span_100_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "select", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, RejectedStatusComponent_option_109_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](110, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, RejectedStatusComponent_span_111_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_113_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Delete Rejection Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Client Location Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RejectedStatusComponent_Template_input_ngModelChange_130_listener($event) { return ctx.deleteRejectStatus.reject_status_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_132_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "reject_status_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](37, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](38, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](39, 29, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](37, _c5, ctx.newForm.get("reject_status_name").invalid && (ctx.newForm.get("reject_status_name").dirty || ctx.newForm.get("reject_status_name").touched || ctx.newForm.valid), ctx.newForm.get("reject_status_name").valid && (ctx.newForm.get("reject_status_name").dirty || ctx.newForm.get("reject_status_name").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("reject_status_name").invalid && (ctx.newForm.get("reject_status_name").dirty || ctx.newForm.get("reject_status_name").touched || ctx.newForm.valid) && (ctx.newForm.get("reject_status_name").errors == null ? null : ctx.newForm.get("reject_status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](40, _c5, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 33, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](43, _c5, ctx.editForm.get("reject_status_name").invalid && (ctx.editForm.get("reject_status_name").dirty || ctx.editForm.get("reject_status_name").touched || ctx.editForm.valid), ctx.editForm.get("reject_status_name").valid && (ctx.editForm.get("reject_status_name").dirty || ctx.editForm.get("reject_status_name").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("reject_status_name").invalid && (ctx.editForm.get("reject_status_name").dirty || ctx.editForm.get("reject_status_name").touched || ctx.editForm.valid) && (ctx.editForm.get("reject_status_name").errors == null ? null : ctx.editForm.get("reject_status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](46, _c5, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](110, 35, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("is_active").invalid && (ctx.editForm.get("is_active").dirty || ctx.editForm.get("is_active").touched || ctx.editForm.valid) && (ctx.editForm.get("is_active").errors == null ? null : ctx.editForm.get("is_active").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteRejectStatus.reject_status_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_13__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWplY3RlZC1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Tt1n":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/project/project.component.ts ***!
  \***************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects.service */ "CoJz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["selectionBox"];
const _c1 = ["tbl"];
const _c2 = function (a3) { return ["/admin", "projects", "view", a3]; };
const _c3 = ["*"];
class ProjectComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideDetails = false;
    }
    ngOnChanges(simpleChanges) {
        console.info("--------------ngOnChanges called");
        for (let propName in simpleChanges) {
            let chng = simpleChanges[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
        if (simpleChanges["project"]) {
            //this.project.teamSize += 1;
        }
    }
    ngOnInit() {
        console.info("--------------ngOnInit called");
        this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
            this.hideDetails = hide;
        });
    }
    ngDoCheck() {
        console.info("--------------ngDoCheck called");
    }
    ngAfterContentInit() {
        console.info("--------------ngAfterContentInit called");
        console.log(this.selectionBoxes.toArray());
    }
    ngAfterContentChecked() {
        console.info("--------------ngAfterContentChecked called");
    }
    ngAfterViewInit() {
        console.info("--------------ngAfterViewInit called");
        console.log(this.tbl);
    }
    ngAfterViewChecked() {
        console.info("--------------ngAfterViewChecked called");
    }
    onEditClick(event, i) {
        this.editClick.emit({ event, i });
    }
    onDeleteClick(event, i) {
        this.deleteClick.emit({ event, i });
    }
    ngOnDestroy() {
        console.info("--------------ngOnDestroy called");
        this.MySubscription.unsubscribe();
    }
    isAllCheckedChange(b) {
        let selectionBox = this.selectionBoxes.toArray();
        if (b) {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].check();
            }
        }
        else {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].unCheck();
            }
        }
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], contentQueries: function ProjectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectionBoxes = _t);
    } }, viewQuery: function ProjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tbl = _t.first);
    } }, inputs: { project: ["currentProject", "project"], i: ["recordIndex", "i"] }, outputs: { editClick: "editClick", deleteClick: "deleteClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c3, decls: 91, vars: 16, consts: [[1, "card", "card-primary"], [1, "card-header", "bg-cards"], [1, "row"], [1, "col-11"], [1, "flex"], [1, "box-1"], ["floatLabel", "auto", "appearance", "standard", "color", "primary"], ["type", "text", "matInput", "", "disabled", "disabled", 3, "value"], ["matPrefix", ""], [1, "material-icons-outlined"], [1, "box-2"], [1, "col-1"], [1, "card-body", "bg-cards", "padding-my-table"], [1, "table", "table-borderless", "table-sm", 3, "hidden"], ["tbl", ""], ["colspan", "2"], [1, "card-footer", "bg-cards"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#editModal", 3, "click"], ["mat-stroked-button", "", "color", "warn", "data-toggle", "modal", "data-target", "#deleteModal", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "routerLink"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transaction # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "qr_code_scanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PO Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "PR No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PR Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Qty. Ordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "UOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Date Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_72_listener($event) { return ctx.onEditClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_77_listener($event) { return ctx.onDeleteClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Cancel PO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "remove_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_82_listener($event) { return ctx.onDeleteClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.project.item_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.po_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.po_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.pr_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.pr_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.qty_order, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.qty_uom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.project.projectID));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".bg-cards[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFBO0FBQUoiLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jYXJkc1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "UZCw":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/masters/masters.component.ts ***!
  \***************************************************************/
/*! exports provided: MastersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastersComponent", function() { return MastersComponent; });
/* harmony import */ var src_app_allowable_percentage_allowable_percentage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/allowable-percentage/allowable-percentage.component */ "kMAa");
/* harmony import */ var src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/directives/component-loader.directive */ "OsQp");
/* harmony import */ var src_app_returned_potransaction_status_returned_potransaction_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/returned-potransaction-status/returned-potransaction-status.component */ "P5ZJ");
/* harmony import */ var _asp_net_roles_asp_net_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asp-net-roles/asp-net-roles.component */ "yFWS");
/* harmony import */ var _cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cancelled-potransaction-status/cancelled-potransaction-status.component */ "OdQg");
/* harmony import */ var _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-locations/client-locations.component */ "3RKl");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../countries/countries.component */ "9kti");
/* harmony import */ var _rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rejected-status/rejected-status.component */ "ROVb");
/* harmony import */ var _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../task-priorities/task-priorities.component */ "8dlv");
/* harmony import */ var _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../task-status/task-status.component */ "XoK7");
/* harmony import */ var _tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tbl-nearly-expiry-mgmt/tbl-nearly-expiry-mgmt.component */ "hxFl");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-account/user-account.component */ "8oVE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");


















const _c0 = function (a0) { return { "active": a0 }; };
function MastersComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MastersComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const masterMenuItem_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r4.menuItemClick(masterMenuItem_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const masterMenuItem_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, ctx_r0.activeItem == masterMenuItem_r3.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", masterMenuItem_r3.displayName, " ");
} }
function MastersComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MastersComponent_li_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const tab_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.activeItem = tab_r6.itemName; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MastersComponent_li_9_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const tab_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r9.onCloseClick(tab_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", "#" + tab_r6.itemName, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](3, _c0, ctx_r1.activeItem == tab_r6.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", tab_r6.displayName, " ");
} }
function MastersComponent_div_12_ng_template_2_Template(rf, ctx) { }
function MastersComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MastersComponent_div_12_ng_template_2_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", tab_r10.itemName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, ctx_r2.activeItem == tab_r10.itemName));
} }
class MastersComponent {
    constructor(componentFactoryResolver, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        this.RouteNames = "";
        this.masterMenuItems = [];
        this.tabs = [];
    }
    ngOnInit() {
        console.log(this.router.url); //  /routename
        this.RouteNames = this.router.url;
        if (this.RouteNames == "/admin/masters") {
            this.masterMenuItems = [
                { itemName: "Countries", displayName: "Location", component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_6__["CountriesComponent"] },
                { itemName: "ClientLocations", displayName: "Department", component: _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_5__["ClientLocationsComponent"] },
                { itemName: "TaskPriorities", displayName: "Task Priorities", component: _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_8__["TaskPrioritiesComponent"] },
                { itemName: "TaskStatus", displayName: "Task Status", component: _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_9__["TaskStatusComponent"] },
                { itemName: "RejectedStatus", displayName: "RM Rejected Status", component: _rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_7__["RejectedStatusComponent"] },
                { itemName: "CancelledPOTransactionStatus", displayName: "RM Reject Status of QC", component: _cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_4__["CancelledPOTransactionStatusComponent"] },
                { itemName: "ReturnedPOTransactionStatus", displayName: "RM Cancelled PO Status", component: src_app_returned_potransaction_status_returned_potransaction_status_component__WEBPACK_IMPORTED_MODULE_2__["ReturnedPOTransactionStatusComponent"] },
                { itemName: "AccountManagement", displayName: "Account Management", component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__["UserAccountComponent"] },
                { itemName: "AllowablePercentage", displayName: "Allowable Percentage", component: src_app_allowable_percentage_allowable_percentage_component__WEBPACK_IMPORTED_MODULE_0__["AllowablePercentageComponent"] },
                { itemName: "ExpirationDaysManagement", displayName: "Expiration Days", component: _tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["TblNearlyExpiryMgmtComponent"] },
                { itemName: "User Roles", displayName: "User Roles", component: _asp_net_roles_asp_net_roles_component__WEBPACK_IMPORTED_MODULE_3__["AspNetRolesComponent"] },
            ];
        }
        if (this.RouteNames == "/admin/masters/user") {
            this.masterMenuItems = [
                { itemName: "AccountManagement", displayName: "Account Management", component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__["UserAccountComponent"] },
                { itemName: "User Roles", displayName: "User Roles", component: _asp_net_roles_asp_net_roles_component__WEBPACK_IMPORTED_MODULE_3__["AspNetRolesComponent"] },
            ];
        }
        if (this.RouteNames == "/admin/masters/rmclassification") {
            this.masterMenuItems = [
                { itemName: "AllowablePercentage", displayName: "Allowable Percentage", component: src_app_allowable_percentage_allowable_percentage_component__WEBPACK_IMPORTED_MODULE_0__["AllowablePercentageComponent"] },
                { itemName: "ExpirationDaysManagement", displayName: "Expiration Days", component: _tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["TblNearlyExpiryMgmtComponent"] },
            ];
        }
        if (this.RouteNames == "/admin/masters/rmcancelandreturn") {
            this.masterMenuItems = [
                { itemName: "RejectedStatus", displayName: "RM Rejected Status", component: _rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_7__["RejectedStatusComponent"] },
                { itemName: "CancelledPOTransactionStatus", displayName: "RM Reject Status of QC", component: _cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_4__["CancelledPOTransactionStatusComponent"] },
                { itemName: "ReturnedPOTransactionStatus", displayName: "RM Cancelled PO Status", component: src_app_returned_potransaction_status_returned_potransaction_status_component__WEBPACK_IMPORTED_MODULE_2__["ReturnedPOTransactionStatusComponent"] },
            ];
        }
    }
    menuItemClick(clickedMasterMenuItem) {
        //console.log(clickedMasterMenuItem);
        this.activeItem = clickedMasterMenuItem.itemName;
        let matchingTabs = this.tabs.filter((tab) => {
            return tab.itemName == clickedMasterMenuItem.itemName;
        });
        if (matchingTabs.length == 0) {
            this.tabs.push({
                tabIndex: this.tabs.length,
                itemName: clickedMasterMenuItem.itemName,
                displayName: clickedMasterMenuItem.displayName
            });
            setTimeout(() => {
                var componentLoadersArray = this.componentLoaders.toArray();
                var componentFactory = this.componentFactoryResolver.resolveComponentFactory(clickedMasterMenuItem.component);
                var viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
                var componentRef = viewContainterRef.createComponent(componentFactory);
                this.tabs[this.tabs.length - 1].viewContainerRef = viewContainterRef;
                if (clickedMasterMenuItem.component.name == "CountriesComponent") {
                    var componentInstance = componentRef.instance;
                    // componentInstance.message = "Hello to Countries";
                }
            }, 100);
        }
    }
    onCloseClick(clickedTab) {
        clickedTab.viewContainerRef.remove();
        this.tabs.splice(this.tabs.indexOf(clickedTab), 1);
        if (this.tabs.length > 0) {
            this.activeItem = this.tabs[0].itemName;
        }
    }
}
MastersComponent.ɵfac = function MastersComponent_Factory(t) { return new (t || MastersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
MastersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: MastersComponent, selectors: [["app-masters"]], viewQuery: function MastersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.componentLoaders = _t);
    } }, decls: 13, vars: 3, consts: [[1, "col-md-10", "system-name", 2, "width", "100%"], [1, "row"], [1, "col-md-2"], [1, "list-group"], ["href", "#", "class", "list-group-item list-group-item-action", "onclick", "return false", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8"], ["role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-pane fade show", "role", "tabpanel", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "onclick", "return false", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", 1, "nav-link", 3, "href", "ngClass", "click"], [1, "fa", "fa-window-close", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "fade", "show", 3, "id", "ngClass"], [1, "pl-md-3", "pr-md-3", "mx-auto"], ["appComponentLoader", ""]], template: function MastersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "MASTER LIST SET-UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MastersComponent_a_6_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, MastersComponent_li_9_Template, 4, 5, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, MastersComponent_div_12_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.masterMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"], src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "VTHj":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-routing/admin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/can-activate-guard.service */ "Ib1u");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "eEfz");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projects/projects.component */ "stSC");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project-details/project-details.component */ "VTZD");
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/masters/masters.component */ "UZCw");
/* harmony import */ var _components_projects_cancelled_po_projects_cancelled_po_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/projects-cancelled-po/projects-cancelled-po.component */ "cNT6");
/* harmony import */ var _components_projects_partial_po_projects_partial_po_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/projects-partial-po/projects-partial-po.component */ "k8Sd");
/* harmony import */ var _components_projet_ponearly_expiry_approval_projet_ponearly_expiry_approval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/projet-ponearly-expiry-approval/projet-ponearly-expiry-approval.component */ "gzVQ");
/* harmony import */ var _components_tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tbl-nearly-expiry-mgmt/tbl-nearly-expiry-mgmt.component */ "hxFl");
/* harmony import */ var _components_wh_rejection_approval_wh_rejection_approval_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/wh-rejection-approval/wh-rejection-approval.component */ "v8sE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    { path: "", canActivate: [_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateGuardService"]], data: { expectedRole: "Admin" }, children: [
            { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], data: { linkIndex: 0 } },
            { path: "projects", component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], data: { linkIndex: 2 } },
            { path: "projects/view/:projectid", component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailsComponent"], data: { linkIndex: 3 } },
            { path: "masters", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 4 } },
            { path: "projectscancel", component: _components_projects_cancelled_po_projects_cancelled_po_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsCancelledPoComponent"], data: { linkIndex: 5 } },
            { path: "projectspartialpo", component: _components_projects_partial_po_projects_partial_po_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsPartialPoComponent"], data: { linkIndex: 6 } },
            { path: "projectsnearlyxpiryapproval", component: _components_projet_ponearly_expiry_approval_projet_ponearly_expiry_approval_component__WEBPACK_IMPORTED_MODULE_8__["ProjetPONearlyExpiryApprovalComponent"], data: { linkIndex: 7 } },
            { path: "expirydaymgmt", component: _components_tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_9__["TblNearlyExpiryMgmtComponent"], data: { linkIndex: 8 } },
            { path: "masters/user", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 9 } },
            { path: "masters/rmclassification", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 10 } },
            { path: "masters/rmcancelandreturn", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 11 } },
            { path: "whrejectionapproval", component: _components_wh_rejection_approval_wh_rejection_approval_component__WEBPACK_IMPORTED_MODULE_10__["WhRejectionApprovalComponent"], data: { linkIndex: 12 } },
        ] },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "VTZD":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/project-details/project-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var src_app_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/project */ "AuN9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/number-to-words.pipe */ "giDM");







const _c0 = function () { return ["/admin", "projects"]; };
class ProjectDetailsComponent {
    constructor(activatedRoute, projectsService) {
        this.activatedRoute = activatedRoute;
        this.projectsService = projectsService;
        this.project = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
    }
    ngOnInit() {
        this.routeParamasSubscription = this.activatedRoute.params.subscribe((params) => {
            let pid = params["projectid"];
            this.projectsService.getProjectByProjectID(pid).subscribe((proj) => {
                this.project = proj;
            });
        });
    }
    ngOnDestroy() {
        this.routeParamasSubscription.unsubscribe();
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"])); };
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 39, vars: 11, consts: [[1, "row"], [1, "col-md-8", "col-lg-6", "col-xl-5", "mx-auto"], [1, "card", "card-primary", "mb-1"], [1, "card-header"], [1, "card-body"], [1, "table", "table-borderless", "table-sm"], [1, "text-info"], [1, "card-footer"], ["mat-stroked-button", "", "color", "accent", 3, "routerLink"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "numberToWords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.project.projectID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.teamSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 8, ctx.project.teamSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], pipes: [_pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_6__["NumberToWordsPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XoK7":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/task-status/task-status.component.ts ***!
  \***********************************************************************/
/*! exports provided: TaskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusComponent", function() { return TaskStatusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_task_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/task-status */ "JxWU");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task-statuses.service */ "GqYe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");














const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function TaskStatusComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function TaskStatusComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "taskStatusName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_tr_33_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskStatus_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, taskStatus_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_tr_33_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskStatus_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, taskStatus_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taskStatus_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taskStatus_r17.taskStatusName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function TaskStatusComponent_ng_container_42_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_42_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function TaskStatusComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskStatusComponent_ng_container_42_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function TaskStatusComponent_ng_container_43_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_ng_container_43_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function TaskStatusComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TaskStatusComponent_ng_container_43_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TaskStatusComponent_ng_container_43_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function TaskStatusComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class TaskStatusComponent {
    //Constructor
    constructor(taskStatusesService, formBuilder) {
        this.taskStatusesService = taskStatusesService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.taskStatuses = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteTaskStatus = new src_app_models_task_status__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "taskStatusName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "taskStatusName";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.taskStatusesService.getTaskStatuses().subscribe((response) => {
            this.taskStatuses = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            taskStatusID: this.formBuilder.control(null),
            taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            taskStatusID: this.formBuilder.control(null),
            taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.taskStatuses, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ taskStatusID: 0 });
        setTimeout(() => {
            //Focus the TaskStatus textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.taskStatusesService.insertTaskStatus(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_task_status__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"]();
                p.taskStatusID = response.taskStatusID;
                p.taskStatusName = response.taskStatusName;
                this.taskStatuses.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newTaskStatusFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, taskStatus) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            this.editForm.patchValue(taskStatus);
            this.editIndex = this.taskStatuses.indexOf(taskStatus);
            //Focus the TaskStatus textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.taskStatusesService.updateTaskStatus(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.taskStatuses[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editTaskStatusFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, taskStatus) {
        //Set data into deleteTaskStatus
        this.deleteTaskStatus.taskStatusID = taskStatus.taskStatusID;
        this.deleteTaskStatus.taskStatusName = taskStatus.taskStatusName;
        this.deleteIndex = this.taskStatuses.indexOf(taskStatus);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.taskStatusesService.deleteTaskStatus(this.deleteTaskStatus.taskStatusID).subscribe((response) => {
            //Delete object in Grid
            this.taskStatuses.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteTaskStatus.taskStatusID = null;
            this.deleteTaskStatus.taskStatusName = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
TaskStatusComponent.ɵfac = function TaskStatusComponent_Factory(t) { return new (t || TaskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_5__["TaskStatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
TaskStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TaskStatusComponent, selectors: [["app-task-status"]], viewQuery: function TaskStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 116, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#newTaskStatusModal", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskStatusName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskStatusModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskStatusName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskStatusModal", 1, "modal"], ["for", "txtEditTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editTaskStatusModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function TaskStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskStatusComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_select_ngModelChange_13_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Task Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_20_listener($event) { return ctx.searchText = $event; })("keyup", function TaskStatusComponent_Template_input_keyup_20_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Task Status Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TaskStatusComponent_i_28_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TaskStatusComponent_i_29_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TaskStatusComponent_i_30_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, TaskStatusComponent_tr_33_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_39_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, TaskStatusComponent_ng_container_42_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, TaskStatusComponent_ng_container_43_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_44_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "New Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Task Status Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, TaskStatusComponent_span_64_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_68_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Edit Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Task Status Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, TaskStatusComponent_span_87_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_91_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Delete Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Are you sure to delete this Task Status?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Task Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_110_listener($event) { return ctx.deleteTaskStatus.taskStatusName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_114_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskStatusName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](35, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](36, 24, ctx.taskStatuses, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.valid), ctx.newForm.get("taskStatusName").valid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.valid) && (ctx.newForm.get("taskStatusName").errors == null ? null : ctx.newForm.get("taskStatusName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.valid), ctx.editForm.get("taskStatusName").valid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.valid) && (ctx.editForm.get("taskStatusName").errors == null ? null : ctx.editForm.get("taskStatusName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteTaskStatus.taskStatusName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_10__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_11__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "cluD":
/*!*****************************************!*\
  !*** ./src/app/models/task-priority.ts ***!
  \*****************************************/
/*! exports provided: TaskPriority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPriority", function() { return TaskPriority; });
class TaskPriority {
    constructor() {
        this.taskPriorityID = null;
        this.taskPriorityName = null;
    }
}


/***/ }),

/***/ "doYw":
/*!****************************************!*\
  !*** ./src/app/charts/column-chart.ts ***!
  \****************************************/
/*! exports provided: columnChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnChartOptions", function() { return columnChartOptions; });
const columnChartOptions = {
    chart: {
        type: "column"
    },
    title: {
        text: "Monthly Revenue"
    },
    subtitle: {
        text: "QC Checklist (in thousands)"
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: { text: 'Revenue (millions)' }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
        }
    },
    series: [{
            name: 'Revenue',
            data: [49.9, 71.5, 106.4, 129.2, 140.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
};


/***/ }),

/***/ "eEfz":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var src_app_charts_column_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/charts/column-chart */ "doYw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");

















function DashboardComponent_mat_progress_bar_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 21);
} }
const _c0 = function () { return ["/admin", "projectspartialpo"]; };
function DashboardComponent_mat_expansion_panel_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-expansion-panel-header", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-panel-title", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "playlist_remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-panel-description", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "PO Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Item Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Qty. Order:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Qty. Actual Delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Unit Of Measure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Qty. Reject:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Qty. Received:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Received By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-action-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "pageview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\u00A0Browse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const WhReject_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.item_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Return Date: ", WhReject_r2.is_wh_received_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.po_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.qty_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.actual_delivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.qty_uom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.is_wh_reject);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", WhReject_r2.actual_delivery - WhReject_r2.is_wh_reject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r2.is_wh_received_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
} }
class DashboardComponent {
    constructor(dashboardService, loginService, mediaObserver) {
        this.dashboardService = dashboardService;
        this.loginService = loginService;
        this.mediaObserver = mediaObserver;
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
        //properties
        this.dashboardGridCols = 4;
        this.cardColspan = 2;
        this.bookings = [];
        this.WhRejects = [];
        this.columnChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["Chart"](src_app_charts_column_chart__WEBPACK_IMPORTED_MODULE_1__["columnChartOptions"]);
        this.bookingsLoadingStarted = false;
        this.projects = [];
        this.totalPoRowCount = null;
        this.totalPoRowCountCancelled = null;
        this.totalPoPartialReceiving = null;
        this.totalPoPartialRejectatWH = null;
        this.totalPartialPoReceivingRejectRowCount = null;
    }
    ngOnInit() {
        //responsive dashbaord
        this.mediaObserver.asObservable().subscribe((media) => {
            if (media.some(mediaChange => mediaChange.mqAlias == "lt-sm")) {
                this.dashboardGridCols = 1;
                this.cardColspan = 1;
            }
            else if (media.some(mediaChange => mediaChange.mqAlias == "lt-md")) {
                this.dashboardGridCols = 2;
                this.cardColspan = 2;
            }
            else {
                this.dashboardGridCols = 4;
                this.cardColspan = 2;
            }
        });
        //
        //bookings
        // this.bookingsLoadingStarted = true;
        // this.dashboardService.getBookings().subscribe(
        //   (response: any) =>
        //   {
        //     this.bookings = response;
        //     this.bookingsLoadingStarted = false;
        //     this.totalPartialPoReceivingRejectRowCount = response.length;
        //   },
        //   (error) =>
        //   {
        //     console.log(error);
        //     this.bookingsLoadingStarted = false;
        //   }
        // );
        this.loginService.detectIfAlreadyLoggedIn();
        this.Designation = "Team Leader";
        // this.Username = "Gerard Singian";
        this.NoOfTeamMembers = 67;
        this.TotalCostOfAllProjects = 240;
        this.PendingTasks = 15;
        this.UpComingProjects = 0.2;
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52536;
        this.ToDay = new Date();
        this.Clients = [
            "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
        ];
        this.Projects = [
            "Project A", "Project B", "Project C", "Project D"
        ];
        for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
        }
        this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
        this.TeamMembers = [
            {
                Region: "East", Members: [
                    { ID: 1, Name: "Ford", Status: "Available" },
                    { ID: 2, Name: "Miller", Status: "Available" },
                    { ID: 3, Name: "Jones", Status: "Busy" },
                    { ID: 4, Name: "James", Status: "Busy" }
                ]
            },
            {
                Region: "West", Members: [
                    { ID: 5, Name: "Anna", Status: "Available" },
                    { ID: 6, Name: "Arun", Status: "Available" },
                    { ID: 7, Name: "Varun", Status: "Busy" },
                    { ID: 8, Name: "Jasmine", Status: "Busy" }
                ]
            },
            {
                Region: "South", Members: [
                    { ID: 9, Name: "Krishna", Status: "Available" },
                    { ID: 10, Name: "Mohan", Status: "Available" },
                    { ID: 11, Name: "Raju", Status: "Busy" },
                    { ID: 12, Name: "Farooq", Status: "Busy" }
                ]
            },
            {
                Region: "North", Members: [
                    { ID: 13, Name: "Jacob", Status: "Available" },
                    { ID: 14, Name: "Smith", Status: "Available" },
                    { ID: 15, Name: "Jones", Status: "Busy" },
                    { ID: 16, Name: "James", Status: "Busy" }
                ]
            }
        ];
        this.DashboardPoSummary();
        this.DashboardPoSummaryCancelled();
        this.DashboardPoSummaryPartialReceiving();
        this.DashboardPoSummaryPartialReceivingRejectonWH();
        this.IntervalPageforRefresh();
    }
    IntervalPageforRefresh() {
        // this.updateSubscription = interval(1000).subscribe(
        //   (val) => { this.DashboardPoSummary()
        // }
        // );
        //in 10 seconds do something
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000).subscribe(x => {
            this.DashboardPoSummary();
        });
    }
    DashboardPoSummary() {
        this.dashboardService.getAllProjects()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.totalPoRowCount = response.length;
        });
    }
    DashboardPoSummaryCancelled() {
        this.dashboardService.getAllProjectsCancelledTransaction()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.totalPoRowCountCancelled = response.length;
        });
    }
    DashboardPoSummaryPartialReceiving() {
        this.dashboardService.getAllProjectsPartialPoService()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.totalPoPartialReceiving = response.length;
        });
    }
    DashboardPoSummaryPartialReceivingRejectonWH() {
        this.dashboardService.getAllProjectsPartialReceivingReject()
            .subscribe((response) => {
            // debugger;
            this.WhRejects = response;
            this.totalPoPartialRejectatWH = response.length;
        });
    }
    onProjectChange($event) {
        if ($event.target.innerHTML == "Project A") {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
        }
        else if ($event.target.innerHTML == "Project B") {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
        }
        else if ($event.target.innerHTML == "Project C") {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
        }
        else if ($event.target.innerHTML == "Project D") {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 55, vars: 19, consts: [["gutterSize", "20px", "rowHeight", "100px", 1, "dashboard-grid-list", 3, "cols"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Total PO all time", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxFlex", "1 1 25%", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "1 1 75%", "fxLayout", "column", "fxLayoutAlign", "center start", 1, "h-100", "text-right"], [1, "dashboard-tile-heading"], [1, "dashboard-tile-sub-heading"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Receiving available now", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Rejected raw materials based on quality", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Total cancelled Po all time", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxFlex", " 1 1 25%", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "h-100"], ["rowspan", "4", 1, "dashboard-tile", "dashboard-tile-5", "scroll", 3, "colspan"], ["fxFlex", "1 1 100%", "fxLayout", "column"], ["fxFlex", "1 1 100%", "fxLayout", "row", "fxLayoutAlign", "start stretch"], ["fxFlex", "1 1 50%", 1, "p-10", "font-weight-bold", "system-name", "text-large"], ["fxFlex", "1 1 50%", 1, "text-right", "p-10"], ["matRipple", "", 1, "hand-icon"], ["value", "60", "mode", "indeterminate", 4, "ngIf"], ["fxFlex", "1 1 100%", 1, "p-5"], [4, "ngFor", "ngForOf"], ["rowspan", "4", 1, "dashboard-tile", "dashboard-tile-6", 3, "colspan"], [1, "w-100", 3, "chart"], ["value", "60", "mode", "indeterminate"], ["matRipple", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayout.lt-md", "column", 1, "w-100"], ["fxFlex", "1 1 60%", "fxFlex", "1 1 100%", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "text-large"], [1, "text-black", "ml"], ["fxFlex", "1 1 40%", "fxFlex", "1 1 100%"], [1, "text-right", "w-100"], [1, "w-100"], [1, "w-25"], [1, "font-weight-bold", "p"], ["fxLayoutAlign", "space-between start"], ["mat-button", "", "color", "primary", 1, "mr", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "mark_email_unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "RM PO Receiving");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Warehouse Receiving");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-grid-tile", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "thumb_down_off_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Raw Material Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-grid-tile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "cancel_schedule_send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Cancelled PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-grid-tile", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, DashboardComponent_mat_progress_bar_49_Template, 1, 0, "mat-progress-bar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, DashboardComponent_mat_expansion_panel_52_Template, 58, 12, "mat-expansion-panel", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-grid-tile", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", ctx.dashboardGridCols);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 11, ctx.totalPoRowCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 13, ctx.totalPoPartialReceiving));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 15, ctx.totalPoPartialRejectatWH));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 17, ctx.totalPoRowCountCancelled));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", ctx.cardColspan);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Return Item : ", ctx.totalPoPartialRejectatWH, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bookingsLoadingStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.WhRejects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", ctx.cardColspan);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.columnChart);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["ChartDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]], styles: [".dashboard-tile-50[_ngcontent-%COMP%] {\n  background-color: #36474f;\n  box-shadow: 0px 0px 7px 0px #000000;\n}\n\n.hideObject[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUtBO0VBRUksa0JBQUE7QUFISiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLXRpbGUtNTBcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDc0ZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICMwMDAwMDA7XG4gIC8vIHotaW5kZXg6IDk5O1xuICAvLyBtYXJnaW4tYm90dG9tOiAycHg7XG4gIC8vIG1pbi13aWR0aDogMzYwcHg7XG59XG4uaGlkZU9iamVjdFxue1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */"] });


/***/ }),

/***/ "eRHK":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/check-box-printer/check-box-printer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CheckBoxPrinterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxPrinterComponent", function() { return CheckBoxPrinterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class CheckBoxPrinterComponent {
    constructor() {
        this.isChecked = false;
    }
    ngOnInit() {
    }
    check() {
        this.isChecked = true;
    }
    unCheck() {
        this.isChecked = false;
    }
}
CheckBoxPrinterComponent.ɵfac = function CheckBoxPrinterComponent_Factory(t) { return new (t || CheckBoxPrinterComponent)(); };
CheckBoxPrinterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBoxPrinterComponent, selectors: [["app-check-box-printer"]], decls: 2, vars: 1, consts: [["type", "checkbox", "value", "true", "name", "isChecked", "id", "isChecked", 3, "ngModel", "ngModelChange"]], template: function CheckBoxPrinterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckBoxPrinterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3gtcHJpbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "oVSu");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "eEfz");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects.component */ "stSC");
/* harmony import */ var _components_check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/check-box-printer/check-box-printer.component */ "eRHK");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "VTZD");
/* harmony import */ var _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing/admin-routing.module */ "VTHj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project/project.component */ "Tt1n");
/* harmony import */ var _models_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/shared/shared.module */ "8lv1");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/countries/countries.component */ "9kti");
/* harmony import */ var _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/client-locations/client-locations.component */ "3RKl");
/* harmony import */ var _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/task-status/task-status.component */ "XoK7");
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/masters/masters.component */ "UZCw");
/* harmony import */ var _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task-priorities/task-priorities.component */ "8dlv");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _components_rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/rejected-status/rejected-status.component */ "ROVb");
/* harmony import */ var _components_cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cancelled-potransaction-status/cancelled-potransaction-status.component */ "OdQg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]], imports: [[_models_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_16__["ChartModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_0__["MyProfileComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
        _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
        _components_check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_4__["CheckBoxPrinterComponent"],
        _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"],
        _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__["CountriesComponent"],
        _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_11__["ClientLocationsComponent"],
        _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_14__["TaskPrioritiesComponent"],
        _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_12__["TaskStatusComponent"],
        _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_13__["MastersComponent"],
        _components_rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_18__["RejectedStatusComponent"],
        _components_cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_19__["CancelledPOTransactionStatusComponent"]], imports: [_models_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_16__["ChartModule"]], exports: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_0__["MyProfileComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"]] }); })();


/***/ }),

/***/ "oVSu":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/my-profile/my-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "pgfe":
/*!***********************************!*\
  !*** ./src/app/models/country.ts ***!
  \***********************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
class Country {
    constructor() {
        this.countryID = null;
        this.countryName = null;
    }
}


/***/ }),

/***/ "stSC":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/projects/projects.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var src_app_models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/project */ "AuN9");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/projects.service */ "CoJz");
/* harmony import */ var _services_client_locations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/client-locations.service */ "4D4e");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/rejected-status.service */ "EVuK");
/* harmony import */ var src_app_services_allowable_percentage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/allowable-percentage.service */ "oVX2");
/* harmony import */ var src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/cancelled-potransaction-status.service */ "r8+Z");
/* harmony import */ var src_app_services_projects_partial_po_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/projects-partial-po.service */ "H9Nn");
/* harmony import */ var src_app_services_tbl_nearly_expiry_mgmt_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/tbl-nearly-expiry-mgmt.service */ "wRT8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../directives/client-location-status-validator.directive */ "4QNZ");
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../directives/project-idunique-validator.directive */ "73VF");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var src_app_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/directives/team-size-validator.directive */ "KnUO");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");


































const _c0 = ["newForm"];
const _c1 = ["editForm"];
const _c2 = ["prjID"];
const _c3 = ["IsActivated"];
const _c4 = ["received_by"];
const _c5 = ["rejectNo1"];
const _c6 = ["rejectNo2"];
const _c7 = ["rejectNo3"];
const _c8 = ["confirmReject"];
const _c9 = ["rejectIsnotMactchSpanTag"];
const _c10 = ["totalofReject"];
const _c11 = ["rejectedStatusElementNo3"];
const _c12 = ["ActiveAllowablePercentage"];
const _c13 = ["TotalAllowablePercentage"];
const _c14 = ["ExpectedDeliveryActual"];
const _c15 = ["ExpiryDateChild"];
const _c16 = ["ActualDeliveryChild"];
const _c17 = ["RejectedStatus1"];
const _c18 = ["RejectedStatus2"];
const _c19 = ["RejectedStatus3"];
const _c20 = ["ActualRemainingReceiving"];
const _c21 = ["QtyOrdered"];
const _c22 = ["ActiveNearlyExpirySetpoint"];
const _c23 = ["ItemDescription"];
const _c24 = ["PONumber"];
const _c25 = ["ActivePartialReceiving"];
const _c26 = ["remarksSectionA1"];
const _c27 = ["remarksSectionA2"];
const _c28 = ["remarksSectionA3"];
const _c29 = ["remarksSectionA4"];
const _c30 = ["remarksSectionA5"];
const _c31 = ["remarksSectionB1"];
const _c32 = ["remarksSectionB2"];
const _c33 = ["remarksSectionB3"];
const _c34 = ["remarksSectionB4"];
const _c35 = ["remarksSectionB5"];
const _c36 = ["remarksSectionB6"];
const _c37 = ["remarksSectionC1"];
const _c38 = ["remarksSectionC2"];
const _c39 = ["remarksSectionC3"];
const _c40 = ["remarksSectionC4"];
const _c41 = ["remarksSectionD1"];
const _c42 = ["remarksSectionD2"];
const _c43 = ["remarksSectionD3"];
const _c44 = ["remarksSectionD4"];
const _c45 = ["remarksSectionE1"];
const _c46 = ["remarksSectionE2"];
const _c47 = ["remarksSectionE3"];
const _c48 = ["remarksSectionE4"];
const _c49 = ["remarksSectionE5"];
const _c50 = ["remarksSectionE6"];
const _c51 = ["remarksSectionE7"];
const _c52 = ["remarksSectionE8"];
const _c53 = ["prj"];
function ProjectsComponent_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 335);
} }
function ProjectsComponent_tr_59_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_tr_59_ng_container_20_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r275); const i_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r273.onCancelClick($event, i_r271); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "toggle_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function ProjectsComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    const _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_tr_59_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r277); const i_r271 = ctx.index; const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r276.onEditClick($event, i_r271); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProjectsComponent_tr_59_ng_container_20_Template, 5, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r270 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r270.po_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r270.item_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r270.item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r270.supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](11, 7, project_r270.qty_order, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](14, 11, project_r270.actual_remaining_receiving, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.loginService.currentUserName != null && ctx_r1.loginService.currentUserRoleSession == "Admin");
} }
const _c54 = function (a0) { return { "link-active-paging": a0 }; };
function ProjectsComponent_ng_container_67_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_67_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r281); const page_r279 = ctx.$implicit; const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r280.onPageIndexClicked(page_r279.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r279 = ctx.$implicit;
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c54, page_r279.pageIndex == ctx_r278.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r279.pageIndex + 1);
} }
function ProjectsComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProjectsComponent_ng_container_67_li_1_Template, 3, 4, "li", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.pages);
} }
function ProjectsComponent_ng_container_68_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_ng_container_68_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r285); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r284.onPageIndexClicked(ctx_r284.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "link-active-paging");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r283.currentPageIndex + 1);
} }
function ProjectsComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r287); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r286.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r287); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r288.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProjectsComponent_ng_container_68_li_7_Template, 2, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProjectsComponent_ng_container_68_li_8_Template, 3, 2, "li", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r287); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r289.onPageIndexClicked(ctx_r289.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r287); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r290.onPageIndexClicked(ctx_r290.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c54, ctx_r3.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c54, ctx_r3.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.currentPageIndex > 1 && ctx_r3.currentPageIndex < ctx_r3.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.currentPageIndex > 1 && ctx_r3.currentPageIndex < ctx_r3.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c54, ctx_r3.currentPageIndex == ctx_r3.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c54, ctx_r3.currentPageIndex == ctx_r3.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.pages.length);
} }
function ProjectsComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_option_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r291 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", clientLocation_r291.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", clientLocation_r291.clientLocationName, " ");
} }
function ProjectsComponent_span_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Code can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Code can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Code should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Description can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Description can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Description should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_282_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Expected Delivery can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_283_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Expected Delivery should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_p_293_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 344, 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r292 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r292.p_allowable_percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", status_r292.p_allowable_percentage);
} }
function ProjectsComponent_p_303_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 344, 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nearlyexpiry_r294 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", nearlyexpiry_r294.p_nearly_expiry_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", nearlyexpiry_r294.p_nearly_expiry_desc);
} }
function ProjectsComponent_span_311_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_334_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_351_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "UOM can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_352_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "UOM can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_353_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "UOM should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_hint_360_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nearlyexpiry_r296 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", nearlyexpiry_r296.p_nearly_expiry_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", nearlyexpiry_r296.p_nearly_expiry_desc, " days before to expired");
} }
function ProjectsComponent_mat_hint_373_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r297 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r297.p_allowable_percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", status_r297.p_allowable_percentage, " % Allowable");
} }
function ProjectsComponent_span_375_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Qty Actual Delivery can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_376_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Qty Actual Delivery should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_391_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_392_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_option_401_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r298 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", clientLocation_r298.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", clientLocation_r298.clientLocationName, "\n");
} }
function ProjectsComponent_span_403_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_404_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_option_419_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 343, 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r299 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r299.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r299.reject_status_name, " ");
} }
function ProjectsComponent_mat_option_428_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r301 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r301.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r301.reject_status_name, " ");
} }
function ProjectsComponent_mat_option_437_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 343, 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r302 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r302.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r302.reject_status_name, " ");
} }
function ProjectsComponent_span_457_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Number of Rejection can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_515_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_521_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_538_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_544_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_560_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_566_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_583_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_589_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_606_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_612_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_643_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_649_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_666_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_672_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_689_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_695_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_712_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_718_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_735_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_741_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_758_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_764_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_795_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_801_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_818_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_824_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_841_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_846_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_863_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_869_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_900_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_905_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_921_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_926_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_943_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_949_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_966_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_972_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1003_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1008_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1024_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1030_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1047_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1053_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1070_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1076_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1093_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1099_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_option_1242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r304 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r304.status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r304.status_name, " ");
} }
function ProjectsComponent_p_1244_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "emp", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 350, 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Item Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Receiving Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r305 = ctx.$implicit;
    const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r305.actual_delivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("List of Item for Receiving ", ctx_r269.totalPartialReceivingCancel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", status_r305.actual_delivery);
} }
const _c55 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class ProjectsComponent {
    constructor(projectsService, clientLocationsService, toastr, loginService, rejectedStatusService, allowablePercentageService, cancelledPOTransactionStatusService, projectsPartialPoService, tblNearlyExpiryMgmtService, formBuilder) {
        this.projectsService = projectsService;
        this.clientLocationsService = clientLocationsService;
        this.toastr = toastr;
        this.loginService = loginService;
        this.rejectedStatusService = rejectedStatusService;
        this.allowablePercentageService = allowablePercentageService;
        this.cancelledPOTransactionStatusService = cancelledPOTransactionStatusService;
        this.projectsPartialPoService = projectsPartialPoService;
        this.tblNearlyExpiryMgmtService = tblNearlyExpiryMgmtService;
        this.formBuilder = formBuilder;
        this.projects = [];
        this.showLoading = true;
        this.allowableqty = null;
        this.actualqty = null;
        this.expirable_material = null;
        this.newProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.editProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.editIndex = null;
        this.deleteProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.deleteIndex = null;
        this.searchBy = "po_number";
        this.searchText = "";
        this.activeUser = "";
        this.PartialEntry = "";
        this.PartialComment = "";
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        this.totalPoRowCount = null;
        this.totalPartial = null;
        this.totalPartialReceivingCancel = null;
        this.PoNumberBinding = "";
        //sample
        this.msgrejectremarksno1 = 0;
        this.msgrejectremarksno2 = 0;
        this.msgrejectremarksno3 = 0;
        //Calculator for Reject
        this.secondInput = 10;
        this.Deactivator = "0";
        this.StringNone = "None";
        this.Activator = "1";
        this.ActualRemaining = 0;
        this.totalPoPartialReceiving = 0;
        this.RandomNumber = 0;
        //FormGroup
        // ReceivijkForm: FormGroup;
        //date-picker
        // minDate: Date = new Date("2021-05-01");
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
        // maxDate: Date = new Date("2010-12-31");
        this.dateHint = "Choose date of birth";
        this.startDate = new Date("2002-01-01");
        //Sorting
        this.sortBy = "po_number";
        this.sortOrder = "ASC"; //ASC | DESC
        this.isAllChecked = false;
    }
    dateFilter(date) {
        return date && date.getDay() !== 0 && date.getDay() !== 6;
    }
    onDateChange() {
        // if (this.formGroup.value.dateOfBirth)
        // {
        //   let date = new Date(this.formGroup.value.dateOfBirth);
        //   this.dateHint = `You born on ${date.toString().substr(0, date.toString().indexOf(" "))}`;
        // }
        // else
        // {
        //   this.dateHint = "Choose date of birth";
        // }
    }
    ngOnInit() {
        this.loginService.detectIfAlreadyLoggedIn(); //detect already Login
        this.ToDay = new Date();
        this.activeUser = this.loginService.currentUserName;
        // debugger;
        this.projectsService.getAllProjects()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.showLoading = false;
            this.calculateNoOfPages();
            this.totalPoRowCount = response.length;
        });
        this.clientLocations = this.clientLocationsService.getClientLocations();
        //
        // Here 
        this.RejectStatuses = this.rejectedStatusService.getListOfStatusOfReject();
        // Here 
        this.CancelPoSummary = this.cancelledPOTransactionStatusService.getListOfStatusOfData();
        //
        this.HideRejectRowUsingJquery();
        //Call the PercentaGE aLLOWABLE
        this.AllowablePercentages = this.allowablePercentageService.getAllAlowablePercentage();
        //Call The active Allowable Percentage Dynamic Entry
        this.AllowableNearlyExpiryDays = this.tblNearlyExpiryMgmtService.getAllExpiryDaysData();
    }
    jqueryClearanceTextBox() {
        jquery__WEBPACK_IMPORTED_MODULE_0__("rejectRow1").val("");
        jquery__WEBPACK_IMPORTED_MODULE_0__("rejectRow2").val("");
        jquery__WEBPACK_IMPORTED_MODULE_0__("rejectRow3").val("");
    }
    HideRejectRowUsingJquery() {
        //Number 1
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow12").hide();
        // Number 2
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow22").hide();
        //Number 3
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow32").hide();
        //Button for Removing a Remarks
        jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").hide();
        //total reject & confirmation of reject
        jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").hide();
    }
    showLimitonAddingRejection() {
        this.toastr.info('You already reached the limit!', 'Notifications');
    }
    showUpdatingSuccess() {
        this.toastr.success('Successfully Updated!', 'Notifications');
    }
    showReceivedSuccess() {
        this.toastr.success('Successfully Receive!', 'Notifications');
    }
    FieldOutRequiredField() {
        this.toastr.warning('Field out the required fields!', 'Notifications');
    }
    PartialReceivingCheckingonCancellation() {
        this.toastr.warning('You have a pending partial receiving!', 'Notifications');
    }
    totalRejectConfirmationField() {
        this.toastr.warning('Confirm the total number of reject!', 'Notifications');
    }
    showDeletedSuccess() {
        this.toastr.success('Successfully Deleted!', 'Notifications');
    }
    showCancelledPOSuccess() {
        this.toastr.success('Cancelled Successfully!', 'Notifications');
    }
    AllowablePercentageExceed() {
        this.toastr.warning('Allowable Percentage Exceed!', 'Notifications');
    }
    MultipleSelectionOfRejectionStatus() {
        this.toastr.warning('Allowable Rejection Status Exceed!', 'Notifications');
    }
    RejectionGreaterThanReceiving() {
        this.toastr.warning('Rejection Qty Greather than Actual Receiving!', 'Notifications');
    }
    GreatherThanTheOrder() {
        this.toastr.warning('Greather than Qty Order!', 'Notifications');
    }
    Alerto() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]();
        var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
        var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
        // var noOfPages = Math.ceil(filterPipe.transform(this.projects, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate Pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    isAllCheckedChange(event) {
        let proj = this.projs.toArray();
        for (let i = 0; i < proj.length; i++) {
            proj[i].isAllCheckedChange(this.isAllChecked);
        }
    }
    onNewClick(event) {
        this.newForm.resetForm();
        setTimeout(() => {
            this.received_by.nativeElement.value = this.loginService.currentUserName;
            this.IsActivated.nativeElement.value = "1";
            this.IsActivated.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            this.newProject.clientLocation.clientLocationID = 0;
            this.newProject.is_activated = "1";
            this.projectsService.insertProject(this.newProject).subscribe((response) => {
                //Add Project to Grid
                var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                p.is_activated = response.is_activated;
                p.supplier = response.supplier;
                p.item_code = response.item_code;
                p.po_number = response.po_number;
                p.po_date = response.po_date;
                p.pr_number = response.pr_number;
                p.pr_date = response.pr_date;
                p.qty_order = response.qty_order;
                p.qty_uom = response.qty_uom;
                p.mfg_date = response.mfg_date;
                p.expiration_date = response.expiration_date;
                p.expected_delivery = response.expected_delivery;
                p.actual_delivery = response.actual_delivery;
                p.actual_remaining_receiving = response.actual_remaining_receiving;
                p.received_by_QA = response.received_by_QA;
                p.status_of_reject_one = response.status_of_reject_one;
                p.status_of_reject_two = response.status_of_reject_two;
                p.status_of_reject_three = response.status_of_reject_three;
                p.count_of_reject_one = response.count_of_reject_one;
                p.count_of_reject_two = response.count_of_reject_two;
                p.count_of_reject_three = response.count_of_reject_three;
                p.total_of_reject_mat = response.total_of_reject_mat;
                p.a_compliance = response.a_compliance;
                p.a_remarks = response.a_remarks;
                this.projects.push(p);
                //Clear New Project Dialog - TextBoxes
                this.newProject.projectName = null;
                this.newProject.dateOfStart = null;
                this.newProject.teamSize = null;
                this.newProject.active = false;
                this.newProject.clientLocationID = null;
                this.newProject.status = null;
                this.newProject.is_activated = null;
                this.newProject.supplier = null;
                this.newProject.item_code = null;
                this.newProject.po_number = null;
                this.newProject.po_date = null;
                this.newProject.pr_number = null;
                this.newProject.pr_date = null;
                this.newProject.qty_uom = null;
                this.newProject.qty_order = null;
                this.newProject.mfg_date = null;
                this.newProject.expiration_date = null;
                this.newProject.expected_delivery = null;
                this.newProject.actual_delivery = null;
                this.newProject.actual_remaining_receiving = null;
                this.newProject.received_by_QA = null;
                this.newProject.status_of_reject_one = null;
                this.newProject.status_of_reject_two = null;
                this.newProject.status_of_reject_three = null;
                this.newProject.count_of_reject_one = null;
                this.newProject.count_of_reject_two = null;
                this.newProject.count_of_reject_three = null;
                this.newProject.total_of_reject_mat = null;
                this.newProject.a_compliance = null;
                this.newProject.a_remarks = null;
                jquery__WEBPACK_IMPORTED_MODULE_0__("#newFormCancel").trigger("click");
                // this.ngOnInit();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    resetValueS() {
        this.rejectNo1.nativeElement.value = "0";
        this.rejectNo2.nativeElement.value = "0";
        this.rejectNo3.nativeElement.value = "0";
        this.confirmReject.nativeElement.value = "0";
        this.totalofReject.nativeElement.value = "0";
        this.jqueryClearanceTextBox();
    }
    onEditClick(event, index) {
        //Additional Binding of Searching
        if (jquery__WEBPACK_IMPORTED_MODULE_0__('#txtSearchText').is(":visible")) {
            //Show Visibilit
            this.projectsService.SearchProjects("Po_number", this.searchText)
                .subscribe((response) => {
                // debugger;
                this.projects = response;
                this.showLoading = false;
                this.calculateNoOfPages();
                this.totalPoRowCount = response.length;
            });
        }
        else {
            this.projectsService.getAllProjects()
                .subscribe((response) => {
                // debugger;
                this.projects = response;
            });
            if (this.currentPageIndex == 1) {
                if (index == 0) {
                    index = 7;
                }
                if (index == 1) {
                    index = 8;
                }
                if (index == 2) {
                    index = 9;
                }
                if (index == 3) {
                    index = 10;
                }
                if (index == 4) {
                    index = 11;
                }
                if (index == 5) {
                    index = 12;
                }
                if (index == 6) {
                    index = 13;
                }
            }
            else if (this.currentPageIndex == 2) {
                if (index == 0) {
                    index = 14;
                }
                if (index == 1) {
                    index = 15;
                }
                if (index == 2) {
                    index = 16;
                }
                if (index == 3) {
                    index = 17;
                }
                if (index == 4) {
                    index = 18;
                }
                if (index == 5) {
                    index = 19;
                }
                if (index == 6) {
                    index = 20;
                }
            }
            else if (this.currentPageIndex == 3) {
                if (index == 0) {
                    index = 21;
                }
                if (index == 1) {
                    index = 22;
                }
                if (index == 2) {
                    index = 23;
                }
                if (index == 3) {
                    index = 24;
                }
                if (index == 4) {
                    index = 25;
                }
                if (index == 5) {
                    index = 26;
                }
                if (index == 6) {
                    index = 27;
                }
            }
            else if (this.currentPageIndex == 4) {
                if (index == 0) {
                    index = 28;
                }
                if (index == 1) {
                    index = 29;
                }
                if (index == 2) {
                    index = 30;
                }
                if (index == 3) {
                    index = 31;
                }
                if (index == 4) {
                    index = 32;
                }
                if (index == 5) {
                    index = 33;
                }
                if (index == 6) {
                    index = 34;
                }
            }
            else {
            }
        }
        this.editForm.resetForm();
        this.received_by.nativeElement.value = this.loginService.currentUserName;
        this.resetValueS();
        //first
        this.RandomNumber = Math.floor((Math.random() * 1000000) + 1);
        // this.projectsService.getAllProjects()
        // .subscribe(
        //   (response: Project[]) =>
        //   {
        //     // debugger;
        //     // this.totalPoPartialReceiving = response.length;
        //     this.projects = response;
        //   }
        // );
        //Last
        setTimeout(() => {
            this.editProject.projectID = this.projects[index].projectID;
            // this.editProject.projectID = Math.floor((Math.random() * 1000000) + 1);
            this.editProject.projectName = this.projects[index].projectName;
            this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
            this.editProject.teamSize = 40;
            this.editProject.active = this.projects[index].active;
            this.editProject.clientLocationID = this.projects[index].clientLocationID;
            this.editProject.clientLocation = this.projects[index].clientLocation;
            this.editProject.status = "In Force";
            this.editProject.supplier = this.projects[index].supplier;
            this.editProject.item_code = this.projects[index].item_code;
            this.editProject.item_class = this.projects[index].item_class;
            this.editProject.item_type = this.projects[index].item_type;
            this.editProject.major_category = this.projects[index].major_category;
            this.editProject.sub_category = this.projects[index].sub_category;
            this.editProject.is_expirable = this.projects[index].is_expirable;
            this.expirable_material = this.projects[index].is_expirable;
            this.editProject.item_description = this.projects[index].item_description;
            this.editProject.po_number = this.projects[index].po_number;
            this.editProject.po_date = this.projects[index].po_date;
            this.editProject.pr_number = this.projects[index].pr_number;
            this.editProject.pr_date = this.projects[index].pr_date;
            this.editProject.qty_order = this.projects[index].qty_order;
            this.editProject.qty_uom = this.projects[index].qty_uom;
            this.editProject.is_activated = this.Activator;
            // this.editProject.mfg_date = this.projects[index].mfg_date;
            // this.editProject.expiration_date = this.projects[index].expiration_date;
            // this.editProject.expected_delivery = this.projects[index].expected_delivery;
            // this.editProject.actual_delivery = this.projects[index].actual_delivery;
            // this.editProject.actual_remaining_receiving = this.ActualRemaining;
            this.editProject.actual_remaining_receiving = this.projects[index].actual_remaining_receiving;
            this.editProject.received_by_QA = this.activeUser;
            // this.editProject.total_of_reject_mat = this.totalofReject.nativeElement.
            this.editProject.qcReceivingDate = this.ToDay;
            // this.editProject.received_by_QA = this.projects[index].received_by_QA;
            // this.editProject.status_of_reject_one = this.projects[index].status_of_reject_one;
            // this.editProject.status_of_reject_two = this.projects[index].status_of_reject_two;
            // this.editProject.status_of_reject_three = this.projects[index].status_of_reject_three;
            this.editProject.status_of_reject_one = this.StringNone;
            this.editProject.status_of_reject_two = this.StringNone;
            this.editProject.status_of_reject_three = this.StringNone;
            this.editProject.count_of_reject_one = this.Deactivator;
            this.editProject.count_of_reject_two = this.Deactivator;
            this.editProject.count_of_reject_three = this.Deactivator;
            this.editProject.total_of_reject_mat = this.Deactivator;
            //Section 1
            //A
            this.editProject.a_delivery_van_desc = this.projects[index].a_delivery_van_desc;
            // this.editProject.a_compliance = this.projects[index].a_compliance;
            // this.editProject.a_remarks = this.projects[index].a_remarks;
            //B
            this.editProject.b_cooling_system_desc = this.projects[index].b_cooling_system_desc;
            // this.editProject.b_compliance = this.projects[index].b_compliance;
            // this.editProject.b_remarks = this.projects[index].b_remarks;
            //C
            this.editProject.c_inner_walls_desc = this.projects[index].c_inner_walls_desc;
            // this.editProject.c_compliance = this.projects[index].c_compliance;
            // this.editProject.c_remarks = this.projects[index].c_remarks;
            //D
            this.editProject.d_plastic_curtains_desc = this.projects[index].d_plastic_curtains_desc;
            // this.editProject.d_compliance = this.projects[index].d_compliance;
            // this.editProject.d_remarks = this.projects[index].d_remarks;
            //E
            this.editProject.e_thereno_pest_desc = this.projects[index].e_thereno_pest_desc;
            // this.editProject.e_compliance = this.projects[index].e_compliance;
            // this.editProject.e_remarks = this.projects[index].e_remarks;
            //Section 2
            //A
            this.editProject.a_clean_company_dos = this.projects[index].a_clean_company_dos;
            // this.editProject.a_compliance_dos = this.projects[index].a_compliance_dos;
            // this.editProject.a_remarks_dos = this.projects[index].a_remarks_dos;
            //B
            this.editProject.b_delivery_staff_symptoms_dos = this.projects[index].b_delivery_staff_symptoms_dos;
            // this.editProject.b_compliance_dos = this.projects[index].b_compliance_dos;
            // this.editProject.b_remarks_dos = this.projects[index].b_remarks_dos;
            //C
            this.editProject.c_inner_walls_clean_dos = this.projects[index].c_inner_walls_clean_dos;
            // this.editProject.c_compliance_dos = this.projects[index].c_compliance_dos;
            // this.editProject.c_remarks_dos = this.projects[index].c_remarks_dos;
            //D
            this.editProject.d_plastic_curtains_dos = this.projects[index].d_plastic_curtains_dos;
            // this.editProject.d_compliance_dos = this.projects[index].d_compliance_dos;
            // this.editProject.d_remarks_dos = this.projects[index].d_remarks_dos;
            //E
            this.editProject.e_no_accessories_dos = this.projects[index].e_no_accessories_dos;
            // this.editProject.e_compliance_dos = this.projects[index].e_compliance_dos;
            // this.editProject.e_remarks_dos = this.projects[index].e_remarks_dos;
            //F
            this.editProject.f_no_pests_sightings_dos = this.projects[index].f_no_pests_sightings_dos;
            // this.editProject.f_compliance_dos = this.projects[index].f_compliance_dos;
            // this.editProject.f_remarks_dos = this.projects[index].f_remarks_dos;
            //Section 3
            //A
            this.editProject.a_pallet_crates_tres = this.projects[index].a_pallet_crates_tres;
            // this.editProject.a_compliance_tres = this.projects[index].a_compliance_tres;
            // this.editProject.a_remarks_tres = this.projects[index].a_remarks_tres;
            //B
            this.editProject.b_product_contamination_tres = this.projects[index].b_product_contamination_tres;
            // this.editProject.b_compliance_tres = this.projects[index].b_compliance_tres;
            // this.editProject.b_remarks_tres = this.projects[index].b_remarks_tres;
            //C
            this.editProject.c_uncessary_items_tres = this.projects[index].c_uncessary_items_tres;
            // this.editProject.c_compliance_tres = this.projects[index].c_compliance_tres;
            // this.editProject.c_remarks_tres = this.projects[index].c_remarks_tres;
            //D
            this.editProject.d_products_cover_tres = this.projects[index].d_products_cover_tres;
            // this.editProject.d_compliance_tres = this.projects[index].d_compliance_tres;
            // this.editProject.d_remarks_tres = this.projects[index].d_remarks_tres;
            //Serction 4
            //A
            this.editProject.a_certificate_coa_kwatro_desc = this.projects[index].a_certificate_coa_kwatro_desc;
            // this.editProject.a_compliance_kwatro = this.projects[index].a_compliance_kwatro;
            // this.editProject.a_remarks_kwatro = this.projects[index].a_remarks_kwatro;
            //B
            this.editProject.b_po_kwatro_desc = this.projects[index].b_po_kwatro_desc;
            // this.editProject.b_compliance_kwatro = this.projects[index].b_compliance_kwatro;
            // this.editProject.b_remarks_kwatro= this.projects[index].b_remarks_kwatro;
            //C
            this.editProject.c_msds_kwatro_desc = this.projects[index].c_msds_kwatro_desc;
            // this.editProject.c_compliance_kwatro = this.projects[index].c_compliance_kwatro;
            // this.editProject.c_remarks_kwatro= this.projects[index].c_remarks_kwatro;
            //D
            this.editProject.d_food_grade_desc = this.projects[index].d_food_grade_desc;
            // this.editProject.d_compliance_kwatro = this.projects[index].d_compliance_kwatro;
            // this.editProject.d_remarks_kwatro = this.projects[index].d_remarks_kwatro;
            //Section 5
            //A
            this.editProject.a_qty_received_singko_singko = this.projects[index].a_qty_received_singko_singko;
            // this.editProject.a_compliance_singko = this.projects[index].a_compliance_singko;
            // this.editProject.a_remarks_singko = this.projects[index].a_remarks_singko;
            //B
            this.editProject.b_mfg_date_desc_singko = this.projects[index].b_mfg_date_desc_singko;
            // this.editProject.b_compliance_singko = this.projects[index].b_compliance_singko;
            // this.editProject.b_remarks_singko = this.projects[index].b_remarks_singko;
            //C
            this.editProject.c_expirydate_desc_singko = this.projects[index].c_expirydate_desc_singko;
            // this.editProject.c_compliance_singko = this.projects[index].c_compliance_singko;
            // this.editProject.c_remarks_singko = this.projects[index].c_remarks_singko;
            //D
            this.editProject.d_packaging_desc_singko = this.projects[index].d_packaging_desc_singko;
            //  this.editProject.d_compliance_singko = this.projects[index].d_compliance_singko;
            //  this.editProject.d_remarks_singko = this.projects[index].d_remarks_singko;
            //E
            this.editProject.e_no_contaminants_desc_singko = this.projects[index].e_no_contaminants_desc_singko;
            //  this.editProject.e_compliance_singko = this.projects[index].e_compliance_singko;
            //  this.editProject.e_remarks_singko = this.projects[index].e_remarks_singko;
            //F
            this.editProject.f_qtyrejected_desc_singko = this.projects[index].f_qtyrejected_desc_singko;
            //  this.editProject.f_compliance_singko = this.projects[index].f_compliance_singko;
            //  this.editProject.f_remarks_singko = this.projects[index].f_remarks_singko;
            //G
            this.editProject.g_rejected_reason_desc_singko = this.projects[index].g_rejected_reason_desc_singko;
            //  this.editProject.g_compliance_singko = this.projects[index].g_compliance_singko;
            //  this.editProject.g_remarks_singko = this.projects[index].g_remarks_singko;
            //H
            this.editProject.h_lab_sample_desc_singko = this.projects[index].h_lab_sample_desc_singko;
            //  this.editProject.h_compliance_singko = this.projects[index].h_compliance_singko;
            //  this.editProject.h_remarks_singko = this.projects[index].h_remarks_singko;
            jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
            //Validation of EXPIRATION MATERIALS  
            if (this.expirable_material == "0") {
                this.ExpiryDateChild.nativeElement.value = moment__WEBPACK_IMPORTED_MODULE_4__().format('MM/D/YYYY');
                jquery__WEBPACK_IMPORTED_MODULE_0__("#select_expiry").hide();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#txtEditexpiration_date").hide();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_0__("#select_expiry").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#txtEditexpiration_date").show();
            }
            this.editIndex = index;
        }, 100);
    }
    NearlyExpiryValidation() {
        // JavaScript program to illustrate 
        // calculation of no. of days between two date 
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //To display the final no. of days (result)
        document.write("Total number of days between dates  <br>"
            + date1 + "<br> and <br>"
            + date2 + " is: <br> "
            + Difference_In_Days);
        return;
    }
    onUpdateClick() {
        //Computation Start Simang
        this.allowableqty = this.TotalAllowablePercentage.nativeElement.value;
        this.actualqty = this.ActualDeliveryChild.nativeElement.value;
        const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        var aplenght = jquery__WEBPACK_IMPORTED_MODULE_0__('#Allowable_Percentage_id').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(aplenght);
        var adlength = jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(adlength);
        //  alert(aplenght);
        //   alert(adlength);
        if (aplenght > adlength) {
            // alert("MAXs ");
            ///This is the minimun qty set pin for 10, 100, 999
            if (TotalAllowablePercentage >= ActualDelivered) {
                // alert($('#Allowable_Percentage_id').val());
            }
            else {
                this.AllowablePercentageExceed();
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val("");
            }
        }
        else {
            // alert("MINs ");
            //This is for large scale validation for thousand's qty 
            if (this.allowableqty < this.actualqty) {
                this.AllowablePercentageExceed();
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val(""); //Additional Data on 12/6/2021
                return;
            }
        }
        // return;
        //End of Computation Summary
        // JavaScript program to illustrate 
        // calculation of no. of days between two date 
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //To display the final no. of days (result)
        // document.write("Total number of days between dates  <br>"
        //                + date1 + "<br> and <br>" 
        //                + date2 + " is: <br> " 
        //                + Difference_In_Days);
        var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        //Laarnie
        if (this.totalofReject.nativeElement.value == this.confirmReject.nativeElement.value) {
        }
        else {
            this.totalRejectConfirmationField();
            this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "No. of reject is not match";
            this.confirmReject.nativeElement.focus();
            return;
        }
        var ItemDesc = this.ItemDescription.nativeElement.value;
        // totalRejectConfirmationField();
        if (this.editForm.valid) {
            //Start of Questioning in Non Expirable Raw Mater Validation with Else
            if (this.expirable_material == "0") {
                //Start
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Are you sure you want to received the item ?',
                    text: ItemDesc,
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (this.editForm.valid) {
                            this.UpdateClickDetails();
                        }
                        else {
                            this.FieldOutRequiredField();
                        }
                    }
                });
                //End 
            }
            else {
                if (Difference_In_Days < ExpiryDaysActivated) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Are you sure you want to received the item expiry ' + Difference_In_Days + ' Days?',
                        text: ItemDesc,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            if (this.editForm.valid) {
                                this.UpdateClickDetails();
                            }
                            else {
                                this.FieldOutRequiredField();
                            }
                        }
                    });
                }
                else {
                    //Addition of  60 === 60 tickett
                    if (Difference_In_Days == ExpiryDaysActivated) {
                        // alert("ssasa kaba Hahha");
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Are you sure you want to received the item expiry  ' + Difference_In_Days + ' Days?',
                            text: ItemDesc,
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                if (this.editForm.valid) {
                                    this.UpdateClickDetails();
                                }
                                else {
                                    this.FieldOutRequiredField();
                                }
                            }
                        });
                    }
                    else {
                        //Start
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Are you sure you want to received the item ?',
                            text: ItemDesc,
                            icon: 'info',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                if (this.editForm.valid) {
                                    this.UpdateClickDetails();
                                }
                                else {
                                    this.FieldOutRequiredField();
                                }
                            }
                        });
                        //End 
                    }
                    //End Supporting top
                }
                //Expiry Validaation
            }
        }
        else {
            this.FieldOutRequiredField();
        }
    }
    //Singian
    //Computaion 
    ComputeRemainingQty() {
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const QtyOrder = this.QtyOrdered.nativeElement.value;
        const ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;
        const totalRejection = this.confirmReject.nativeElement.value;
        if (QtyOrder == ActualRemainingReceiving) {
            // this.ActualRemaining = QtyOrder - ActualDelivered;
            // this.ActualRemaining = ActualRemainingReceiving - totalRejection;
            this.ActualRemaining = ActualDelivered - totalRejection;
            this.ActualRemaining = ActualRemainingReceiving - this.ActualRemaining;
        }
        else {
            // this.ActualRemaining = ActualRemainingReceiving - ActualDelivered;
            // this.ActualRemaining = ActualRemainingReceiving - totalRejection;
            this.ActualRemaining = ActualDelivered - totalRejection;
            this.ActualRemaining = ActualRemainingReceiving - this.ActualRemaining;
        }
    }
    UpdateClickDetails() {
        if (this.editForm.valid) {
            //Additional Parse Data Master
            // this.ActualRemaining = 450;
            this.ComputeRemainingQty();
            this.editProject.actual_remaining_receiving = this.ActualRemaining;
            //Variable
            var totalRejection = this.confirmReject.nativeElement.value;
            var ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
            if (totalRejection == 0) {
            }
            else {
                totalRejection = ActualDelivered - totalRejection;
                this.editProject.actual_delivery = totalRejection;
            }
            //End of Variable
            this.projectsService.updateProject(this.editProject).subscribe((response) => {
                var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                p.supplier = response.supplier;
                p.item_code = response.item_code;
                p.item_description = response.item_description;
                p.po_number = response.po_number;
                p.po_date = response.po_date;
                p.pr_number = response.pr_number;
                p.pr_date = response.pr_date;
                p.qty_order = response.qty_order;
                p.qty_uom = response.qty_uom;
                p.mfg_date = response.mfg_date;
                p.expiration_date = response.expiration_date;
                p.expected_delivery = response.expected_delivery;
                p.actual_delivery = response.actual_delivery;
                p.expected_delivery = response.expected_delivery;
                // this.ActualRemaining = response.actual_remaining_receiving;
                // p.received_by_QA = response.received_by_QA;
                // // this.activeUser = response.received_by_QA;
                p.status_of_reject_one = response.status_of_reject_one;
                p.status_of_reject_two = response.status_of_reject_two;
                p.status_of_reject_three = response.status_of_reject_three;
                p.count_of_reject_one = response.count_of_reject_one;
                p.count_of_reject_two = response.count_of_reject_two;
                p.count_of_reject_three = response.count_of_reject_three;
                p.total_of_reject_mat = response.total_of_reject_mat;
                //Section 1
                //A
                p.a_delivery_van_desc = response.a_delivery_van_desc;
                p.a_compliance = response.a_compliance;
                p.a_remarks = response.a_remarks;
                //B
                p.b_cooling_system_desc = response.b_cooling_system_desc;
                p.b_compliance = response.b_compliance;
                p.b_remarks = response.b_remarks;
                //C
                p.c_inner_walls_desc = response.c_inner_walls_desc;
                p.c_compliance = response.c_compliance;
                p.c_remarks = response.c_remarks;
                //D
                p.d_plastic_curtains_desc = response.d_plastic_curtains_desc;
                p.d_compliance = response.d_compliance;
                p.d_remarks = response.d_remarks;
                //E
                p.e_thereno_pest_desc = response.e_thereno_pest_desc;
                p.e_compliance = response.e_compliance;
                p.e_remarks = response.e_remarks;
                //Section 2
                //A
                p.a_clean_company_dos = response.a_clean_company_dos;
                p.a_compliance_dos = response.a_compliance_dos;
                p.a_remarks_dos = response.a_remarks_dos;
                //B
                p.b_delivery_staff_symptoms_dos = response.b_delivery_staff_symptoms_dos;
                p.b_compliance_dos = response.b_compliance_dos;
                p.b_remarks_dos = response.b_remarks_dos;
                //C
                p.c_inner_walls_clean_dos = response.c_inner_walls_clean_dos;
                p.c_compliance_dos = response.c_compliance_dos;
                p.c_remarks_dos = response.c_remarks_dos;
                //D
                p.d_plastic_curtains_dos = response.d_plastic_curtains_dos;
                p.d_compliance_dos = response.d_compliance_dos;
                p.d_remarks_dos = response.d_remarks_dos;
                //E
                p.e_no_accessories_dos = response.e_no_accessories_dos;
                p.e_compliance_dos = response.e_compliance_dos;
                p.e_remarks_dos = response.e_remarks_dos;
                //F
                p.f_compliance_dos = response.f_compliance_dos;
                p.f_no_pests_sightings_dos = response.f_no_pests_sightings_dos;
                p.f_remarks_dos = response.f_remarks_dos;
                //Section 3 
                //A
                p.a_pallet_crates_tres = response.a_pallet_crates_tres;
                p.a_compliance_tres = response.a_compliance_tres;
                p.a_remarks_tres = response.a_remarks_tres;
                //B
                p.b_product_contamination_tres = response.b_product_contamination_tres;
                p.b_compliance_tres = response.b_compliance_tres;
                p.b_remarks_tres = response.b_remarks_tres;
                //C
                p.c_uncessary_items_tres = response.c_uncessary_items_tres;
                p.c_compliance_tres = response.c_compliance_tres;
                p.c_remarks_tres = response.c_remarks_tres;
                //D
                p.d_products_cover_tres = response.d_products_cover_tres;
                p.d_compliance_tres = response.d_compliance_tres;
                p.d_remarks_tres = response.d_remarks_tres;
                //Section 4
                //A
                p.a_certificate_coa_kwatro_desc = response.a_certificate_coa_kwatro_desc;
                p.a_compliance_kwatro = response.a_compliance_kwatro;
                p.a_remarks_kwatro = response.a_remarks_kwatro;
                //B
                p.b_po_kwatro_desc = response.b_po_kwatro_desc;
                p.b_compliance_kwatro = response.b_compliance_kwatro;
                p.b_remarks_kwatro = response.b_remarks_kwatro;
                //C
                p.c_msds_kwatro_desc = response.c_msds_kwatro_desc;
                p.c_compliance_kwatro = response.c_compliance_kwatro;
                p.c_remarks_kwatro = response.c_remarks_kwatro;
                //D
                p.d_food_grade_desc = response.d_food_grade_desc;
                p.d_compliance_kwatro = response.d_compliance_kwatro;
                p.d_remarks_kwatro = response.d_remarks_kwatro;
                //Section 5
                //A
                p.a_qty_received_singko_singko = response.a_qty_received_singko_singko;
                p.a_compliance_singko = response.a_compliance_singko;
                p.a_remarks_singko = response.a_remarks_singko;
                //B
                p.b_mfg_date_desc_singko = response.b_mfg_date_desc_singko;
                p.b_compliance_singko = response.b_compliance_singko;
                p.b_remarks_singko = response.b_remarks_singko;
                //C
                p.c_expirydate_desc_singko = response.c_expirydate_desc_singko;
                p.c_compliance_singko = response.c_compliance_singko;
                p.c_remarks_singko = response.c_remarks_singko;
                //D
                p.d_packaging_desc_singko = response.d_packaging_desc_singko;
                p.d_compliance_singko = response.d_compliance_singko;
                p.d_remarks_singko = response.d_remarks_singko;
                //E
                p.e_no_contaminants_desc_singko = response.e_no_contaminants_desc_singko;
                p.e_compliance_singko = response.e_compliance_singko;
                p.e_remarks_singko = response.e_remarks_singko;
                //F
                p.f_qtyrejected_desc_singko = response.f_qtyrejected_desc_singko;
                p.f_compliance_singko = response.f_compliance_singko;
                p.f_remarks_singko = response.f_remarks_singko;
                //G
                p.g_rejected_reason_desc_singko = response.g_rejected_reason_desc_singko;
                p.g_compliance_singko = response.g_compliance_singko;
                p.g_remarks_singko = response.g_remarks_singko;
                //H
                p.h_lab_sample_desc_singko = response.h_lab_sample_desc_singko;
                p.h_compliance_singko = response.h_compliance_singko;
                p.h_remarks_singko = response.h_remarks_singko;
                // this.received_by.nativeElement.value = this.loginService.currentUserName;
                this.projects[this.editIndex] = p;
                this.InsertANewPartialReceiving();
                this.InsertPartialDatainMasterTable();
                this.editProject.projectID = null;
                this.editProject.projectName = null;
                this.editProject.dateOfStart = null;
                this.editProject.teamSize = null;
                this.editProject.supplier = null;
                this.editProject.active = false;
                this.editProject.clientLocationID = null;
                this.editProject.status = null;
                this.editProject.item_code = null;
                this.editProject.item_description = null;
                this.editProject.po_number = null;
                this.editProject.po_date = null;
                this.editProject.pr_number = null;
                this.editProject.pr_date = null;
                this.editProject.qty_order = null;
                this.editProject.qty_uom = null;
                this.editProject.mfg_date = null;
                this.editProject.expiration_date = null;
                this.editProject.expected_delivery = null;
                this.editProject.actual_delivery = null;
                this.editProject.actual_remaining_receiving = null;
                this.editProject.received_by_QA = null;
                this.editProject.status_of_reject_one = null;
                this.editProject.status_of_reject_two = null;
                this.editProject.status_of_reject_three = null;
                this.editProject.count_of_reject_one = null;
                this.editProject.count_of_reject_two = null;
                this.editProject.count_of_reject_three = null;
                this.editProject.total_of_reject_mat = null;
                //Section A
                //A
                this.editProject.a_delivery_van_desc = null;
                this.editProject.a_compliance = null;
                this.editProject.a_remarks = null;
                //B
                this.editProject.b_cooling_system_desc = null;
                this.editProject.b_compliance = null;
                this.editProject.b_remarks = null;
                //C
                this.editProject.c_inner_walls_desc = null;
                this.editProject.c_compliance = null;
                this.editProject.c_remarks = null;
                //D
                this.editProject.d_plastic_curtains_desc = null;
                this.editProject.d_compliance = null;
                this.editProject.d_remarks = null;
                //E
                this.editProject.e_thereno_pest_desc = null;
                this.editProject.e_compliance = null;
                this.editProject.e_remarks = null;
                //Section 2
                //A
                this.editProject.a_clean_company_dos = null;
                this.editProject.a_compliance_dos = null;
                this.editProject.a_remarks_dos = null;
                //B
                this.editProject.b_delivery_staff_symptoms_dos = null;
                this.editProject.b_compliance_dos = null;
                this.editProject.b_remarks_dos = null;
                //C
                this.editProject.c_inner_walls_clean_dos = null;
                this.editProject.c_compliance_dos = null;
                this.editProject.c_remarks_dos = null;
                //D
                this.editProject.d_plastic_curtains_dos = null;
                this.editProject.d_compliance_dos = null;
                this.editProject.d_remarks_dos = null;
                //E
                this.editProject.e_no_accessories_dos = null;
                this.editProject.e_compliance_dos = null;
                this.editProject.e_remarks_dos = null;
                //F
                this.editProject.f_compliance_dos = null;
                this.editProject.f_no_pests_sightings_dos = null;
                this.editProject.f_remarks_dos = null;
                //Section 3
                //A
                this.editProject.a_pallet_crates_tres = null;
                this.editProject.a_compliance_tres = null;
                this.editProject.a_remarks_tres = null;
                //B
                this.editProject.b_product_contamination_tres = null;
                this.editProject.b_compliance_tres = null;
                this.editProject.b_remarks_tres = null;
                //C
                this.editProject.c_uncessary_items_tres = null;
                this.editProject.c_compliance_tres = null;
                this.editProject.c_remarks_tres = null;
                //D
                this.editProject.d_products_cover_tres = null;
                this.editProject.d_compliance_tres = null;
                this.editProject.d_remarks_tres = null;
                //Section 4
                //A
                this.editProject.a_certificate_coa_kwatro_desc = null;
                this.editProject.a_compliance_kwatro = null;
                this.editProject.a_remarks_kwatro = null;
                //B
                this.editProject.b_po_kwatro_desc = null;
                this.editProject.b_compliance_kwatro = null;
                this.editProject.b_remarks_kwatro = null;
                //C
                this.editProject.c_msds_kwatro_desc = null;
                this.editProject.c_compliance_kwatro = null;
                this.editProject.c_remarks_kwatro = null;
                //D
                this.editProject.d_food_grade_desc = null;
                this.editProject.d_compliance_kwatro = null;
                this.editProject.d_remarks_kwatro = null;
                //Section 5
                //A
                this.editProject.a_qty_received_singko_singko = null;
                this.editProject.a_compliance_singko = null;
                this.editProject.a_remarks_singko = null;
                //B
                this.editProject.b_mfg_date_desc_singko = null;
                this.editProject.b_compliance_singko = null;
                this.editProject.b_remarks_singko = null;
                //C
                this.editProject.c_expirydate_desc_singko = null;
                this.editProject.c_compliance_singko = null;
                this.editProject.c_remarks_singko = null;
                //D
                this.editProject.d_packaging_desc_singko = null;
                this.editProject.d_compliance_singko = null;
                this.editProject.d_remarks_singko = null;
                //E
                this.editProject.e_no_contaminants_desc_singko = null;
                this.editProject.e_compliance_singko = null;
                this.editProject.e_remarks_singko = null;
                //F
                this.editProject.f_qtyrejected_desc_singko = null;
                this.editProject.f_compliance_singko = null;
                this.editProject.f_remarks_singko = null;
                //G
                this.editProject.g_rejected_reason_desc_singko = null;
                this.editProject.g_compliance_singko = null;
                this.editProject.g_remarks_singko = null;
                //H
                this.editProject.h_lab_sample_desc_singko = null;
                this.editProject.h_compliance_singko = null;
                this.editProject.h_remarks_singko = null;
                //  this.InsertANewPartialReceiving();
                // this.showUpdatingSuccess();
                this.showReceivedSuccess();
                this.ngOnInit();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#editFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    InsertPartialDatainMasterTable() {
        this.editProject.is_activated = this.PartialEntry;
        this.projectsService.insertProject(this.editProject).subscribe((response) => {
            //Add Project to Grid
            var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            p.clientLocation = response.clientLocation;
            p.active = response.active;
            p.clientLocationID = response.clientLocationID;
            p.status = response.status;
            p.is_activated = response.is_activated;
            p.supplier = response.supplier;
            p.item_code = response.item_code;
            p.po_number = response.po_number;
            p.po_date = response.po_date;
            p.pr_number = response.pr_number;
            p.pr_date = response.pr_date;
            p.qty_order = response.qty_order;
            p.qty_uom = response.qty_uom;
            p.mfg_date = response.mfg_date;
            p.expiration_date = response.expiration_date;
            p.expected_delivery = response.expected_delivery;
            p.actual_delivery = response.actual_delivery;
            p.actual_remaining_receiving = response.actual_remaining_receiving;
            p.received_by_QA = response.received_by_QA;
            this.projects.push(p);
            //Clear New Project Dialog - TextBoxes
        }, (error) => {
            console.log(error);
        });
    }
    //Insert as Partial
    InsertANewPartialReceiving() {
        this.editProject.qcReceivingDate = this.ToDay; //for Secured Data  Flow
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        if (this.expirable_material == "0") {
            this.editProject.is_expired = '0';
        }
        else {
            //Start
            if (Difference_In_Days == ExpiryDaysActivated) {
                this.editProject.is_expired = '1';
            }
            else {
                if (Difference_In_Days < ExpiryDaysActivated) {
                    this.editProject.is_expired = '1';
                }
                else {
                    this.editProject.is_expired = '0';
                }
            }
            //End
        }
        //Declaration for Partial Entry have a Dynamic Set-point
        var ExpiryDays = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        this.editProject.days_expiry_setup = ExpiryDays;
        // //var Graph Singian
        // var RejectCount  = this.totalofReject.nativeElement.value;
        // var ActualDeliverd = this.ActualDeliveryChild.nativeElement.value;
        // var ComputationReject = ActualDeliverd - RejectCount;
        // this.editProject.actual_delivery = ComputationReject.toString();
        if (this.editForm.valid) {
            this.editProject.projectID = Math.floor((Math.random() * 1000000) + 1);
            this.projectsPartialPoService.insertProject2(this.editProject).subscribe((response) => {
                var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
                p.PrimaryID = response.PrimaryID;
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                p.supplier = response.supplier;
                p.item_code = response.item_code;
                p.item_description = response.item_description;
                p.po_number = response.po_number;
                p.po_date = response.po_date;
                p.pr_number = response.pr_number;
                p.pr_date = response.pr_date;
                p.qty_order = response.qty_order;
                p.qty_uom = response.qty_uom;
                p.mfg_date = response.mfg_date;
                p.expiration_date = response.expiration_date;
                p.expected_delivery = response.expected_delivery;
                p.actual_delivery = response.actual_delivery;
                p.expected_delivery = response.expected_delivery;
                //  p.actual_remaining_receiving = response.actual_remaining_receiving;
                // p.received_by_QA = response.received_by_QA;
                // // this.activeUser = response.received_by_QA;
                p.status_of_reject_one = response.status_of_reject_one;
                p.status_of_reject_two = response.status_of_reject_two;
                p.status_of_reject_three = response.status_of_reject_three;
                p.count_of_reject_one = response.count_of_reject_one;
                p.count_of_reject_two = response.count_of_reject_two;
                p.count_of_reject_three = response.count_of_reject_three;
                p.total_of_reject_mat = response.total_of_reject_mat;
                //Section 1
                //A
                p.a_delivery_van_desc = response.a_delivery_van_desc;
                p.a_compliance = response.a_compliance;
                p.a_remarks = response.a_remarks;
                //B
                p.b_cooling_system_desc = response.b_cooling_system_desc;
                p.b_compliance = response.b_compliance;
                p.b_remarks = response.b_remarks;
                //C
                p.c_inner_walls_desc = response.c_inner_walls_desc;
                p.c_compliance = response.c_compliance;
                p.c_remarks = response.c_remarks;
                //D
                p.d_plastic_curtains_desc = response.d_plastic_curtains_desc;
                p.d_compliance = response.d_compliance;
                p.d_remarks = response.d_remarks;
                //E
                p.e_thereno_pest_desc = response.e_thereno_pest_desc;
                p.e_compliance = response.e_compliance;
                p.e_remarks = response.e_remarks;
                //Section 2
                //A
                p.a_clean_company_dos = response.a_clean_company_dos;
                p.a_compliance_dos = response.a_compliance_dos;
                p.a_remarks_dos = response.a_remarks_dos;
                //B
                p.b_delivery_staff_symptoms_dos = response.b_delivery_staff_symptoms_dos;
                p.b_compliance_dos = response.b_compliance_dos;
                p.b_remarks_dos = response.b_remarks_dos;
                //C
                p.c_inner_walls_clean_dos = response.c_inner_walls_clean_dos;
                p.c_compliance_dos = response.c_compliance_dos;
                p.c_remarks_dos = response.c_remarks_dos;
                //D
                p.d_plastic_curtains_dos = response.d_plastic_curtains_dos;
                p.d_compliance_dos = response.d_compliance_dos;
                p.d_remarks_dos = response.d_remarks_dos;
                //E
                p.e_no_accessories_dos = response.e_no_accessories_dos;
                p.e_compliance_dos = response.e_compliance_dos;
                p.e_remarks_dos = response.e_remarks_dos;
                //F
                p.f_compliance_dos = response.f_compliance_dos;
                p.f_no_pests_sightings_dos = response.f_no_pests_sightings_dos;
                p.f_remarks_dos = response.f_remarks_dos;
                //Section 3 
                //A
                p.a_pallet_crates_tres = response.a_pallet_crates_tres;
                p.a_compliance_tres = response.a_compliance_tres;
                p.a_remarks_tres = response.a_remarks_tres;
                //B
                p.b_product_contamination_tres = response.b_product_contamination_tres;
                p.b_compliance_tres = response.b_compliance_tres;
                p.b_remarks_tres = response.b_remarks_tres;
                //C
                p.c_uncessary_items_tres = response.c_uncessary_items_tres;
                p.c_compliance_tres = response.c_compliance_tres;
                p.c_remarks_tres = response.c_remarks_tres;
                //D
                p.d_products_cover_tres = response.d_products_cover_tres;
                p.d_compliance_tres = response.d_compliance_tres;
                p.d_remarks_tres = response.d_remarks_tres;
                //Section 4
                //A
                p.a_certificate_coa_kwatro_desc = response.a_certificate_coa_kwatro_desc;
                p.a_compliance_kwatro = response.a_compliance_kwatro;
                p.a_remarks_kwatro = response.a_remarks_kwatro;
                //B
                p.b_po_kwatro_desc = response.b_po_kwatro_desc;
                p.b_compliance_kwatro = response.b_compliance_kwatro;
                p.b_remarks_kwatro = response.b_remarks_kwatro;
                //C
                p.c_msds_kwatro_desc = response.c_msds_kwatro_desc;
                p.c_compliance_kwatro = response.c_compliance_kwatro;
                p.c_remarks_kwatro = response.c_remarks_kwatro;
                //D
                p.d_food_grade_desc = response.d_food_grade_desc;
                p.d_compliance_kwatro = response.d_compliance_kwatro;
                p.d_remarks_kwatro = response.d_remarks_kwatro;
                //Section 5
                //A
                p.a_qty_received_singko_singko = response.a_qty_received_singko_singko;
                p.a_compliance_singko = response.a_compliance_singko;
                p.a_remarks_singko = response.a_remarks_singko;
                //B
                p.b_mfg_date_desc_singko = response.b_mfg_date_desc_singko;
                p.b_compliance_singko = response.b_compliance_singko;
                p.b_remarks_singko = response.b_remarks_singko;
                //C
                p.c_expirydate_desc_singko = response.c_expirydate_desc_singko;
                p.c_compliance_singko = response.c_compliance_singko;
                p.c_remarks_singko = response.c_remarks_singko;
                //D
                p.d_packaging_desc_singko = response.d_packaging_desc_singko;
                p.d_compliance_singko = response.d_compliance_singko;
                p.d_remarks_singko = response.d_remarks_singko;
                //E
                p.e_no_contaminants_desc_singko = response.e_no_contaminants_desc_singko;
                p.e_compliance_singko = response.e_compliance_singko;
                p.e_remarks_singko = response.e_remarks_singko;
                //F
                p.f_qtyrejected_desc_singko = response.f_qtyrejected_desc_singko;
                p.f_compliance_singko = response.f_compliance_singko;
                p.f_remarks_singko = response.f_remarks_singko;
                //G
                p.g_rejected_reason_desc_singko = response.g_rejected_reason_desc_singko;
                p.g_compliance_singko = response.g_compliance_singko;
                p.g_remarks_singko = response.g_remarks_singko;
                //H
                p.h_lab_sample_desc_singko = response.h_lab_sample_desc_singko;
                p.h_compliance_singko = response.h_compliance_singko;
                p.h_remarks_singko = response.h_remarks_singko;
                p.days_expiry_setup = response.days_expiry_setup;
                p.is_expired = response.is_expired;
                // this.received_by.nativeElement.value = this.loginService.currentUserName;
                //  this.projects[this.editIndex] = p;
                this.projects.push(p);
            }, (error) => {
                console.log(error);
            });
        }
    }
    UpdateSweetAlertMessage() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Updated!', 'Your data has been updated.', 'success');
    }
    ComplianceSectionA1() {
        this.editProject.a_remarks = " ";
        this.remarksSectionA1.nativeElement.disabled = true;
        this.remarksSectionA1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA1() {
        this.editProject.a_remarks = "";
        this.remarksSectionA1.nativeElement.disabled = false;
        this.remarksSectionA1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA2() {
        this.editProject.b_remarks = " ";
        this.remarksSectionA2.nativeElement.disabled = true;
        this.remarksSectionA2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA2() {
        this.editProject.b_remarks = "";
        this.remarksSectionA2.nativeElement.disabled = false;
        this.remarksSectionA2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA3() {
        this.editProject.c_remarks = " ";
        this.remarksSectionA3.nativeElement.disabled = true;
        this.remarksSectionA3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA3() {
        this.editProject.c_remarks = "";
        this.remarksSectionA3.nativeElement.disabled = false;
        this.remarksSectionA3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA4() {
        this.editProject.d_remarks = " ";
        this.remarksSectionA4.nativeElement.disabled = true;
        this.remarksSectionA4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA4() {
        this.editProject.d_remarks = "";
        this.remarksSectionA4.nativeElement.disabled = false;
        this.remarksSectionA4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA5() {
        this.editProject.e_remarks = " ";
        this.remarksSectionA5.nativeElement.disabled = true;
        this.remarksSectionA5.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA5() {
        this.editProject.e_remarks = "";
        this.remarksSectionA5.nativeElement.disabled = false;
        this.remarksSectionA5.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Section 2
    ComplianceSectionB1() {
        this.editProject.a_remarks_dos = " ";
        this.remarksSectionB1.nativeElement.disabled = true;
        this.remarksSectionB1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB1() {
        this.editProject.a_remarks_dos = "";
        this.remarksSectionB1.nativeElement.disabled = false;
        this.remarksSectionB1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB2() {
        this.editProject.b_remarks_dos = " ";
        this.remarksSectionB2.nativeElement.disabled = true;
        this.remarksSectionB2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB2() {
        this.editProject.b_remarks_dos = "";
        this.remarksSectionB2.nativeElement.disabled = false;
        this.remarksSectionB2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB3() {
        this.editProject.c_remarks_dos = " ";
        this.remarksSectionB3.nativeElement.disabled = true;
        this.remarksSectionB3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB3() {
        this.editProject.c_remarks_dos = "";
        this.remarksSectionB3.nativeElement.disabled = false;
        this.remarksSectionB3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB4() {
        this.editProject.d_remarks_dos = " ";
        this.remarksSectionB4.nativeElement.disabled = true;
        this.remarksSectionB4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB4() {
        this.editProject.d_remarks_dos = "";
        this.remarksSectionB4.nativeElement.disabled = false;
        this.remarksSectionB4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB5() {
        this.editProject.e_remarks_dos = " ";
        this.remarksSectionB5.nativeElement.disabled = true;
        this.remarksSectionB5.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB5() {
        this.editProject.e_remarks_dos = "";
        this.remarksSectionB5.nativeElement.disabled = false;
        this.remarksSectionB5.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB6() {
        this.editProject.f_remarks_dos = " ";
        this.remarksSectionB6.nativeElement.disabled = true;
        this.remarksSectionB6.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB6() {
        this.editProject.f_remarks_dos = "";
        this.remarksSectionB6.nativeElement.disabled = false;
        this.remarksSectionB6.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC1() {
        this.editProject.a_remarks_tres = " ";
        this.remarksSectionC1.nativeElement.disabled = true;
        this.remarksSectionC1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC1() {
        this.editProject.a_remarks_tres = "";
        this.remarksSectionC1.nativeElement.disabled = false;
        this.remarksSectionC1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC2() {
        this.editProject.b_remarks_tres = " ";
        this.remarksSectionC2.nativeElement.disabled = true;
        this.remarksSectionC2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC2() {
        this.editProject.b_remarks_tres = "";
        this.remarksSectionC2.nativeElement.disabled = false;
        this.remarksSectionC2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC3() {
        this.editProject.c_remarks_tres = " ";
        this.remarksSectionC3.nativeElement.disabled = true;
        this.remarksSectionC3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC3() {
        this.editProject.c_remarks_tres = "";
        this.remarksSectionC3.nativeElement.disabled = false;
        this.remarksSectionC3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC4() {
        this.editProject.d_remarks_tres = " ";
        this.remarksSectionC4.nativeElement.disabled = true;
        this.remarksSectionC4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC4() {
        this.editProject.d_remarks_tres = "";
        this.remarksSectionC4.nativeElement.disabled = false;
        this.remarksSectionC4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line for Part 4
    //Break Line
    ComplianceSectionD1() {
        this.editProject.a_remarks_kwatro = " ";
        this.remarksSectionD1.nativeElement.disabled = true;
        this.remarksSectionD1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD1() {
        this.editProject.a_remarks_kwatro = "";
        this.remarksSectionD1.nativeElement.disabled = false;
        this.remarksSectionD1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionD2() {
        this.editProject.b_remarks_kwatro = " ";
        this.remarksSectionD2.nativeElement.disabled = true;
        this.remarksSectionD2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD2() {
        this.editProject.b_remarks_kwatro = "";
        this.remarksSectionD2.nativeElement.disabled = false;
        this.remarksSectionD2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionD3() {
        this.editProject.c_remarks_kwatro = " ";
        this.remarksSectionD3.nativeElement.disabled = true;
        this.remarksSectionD3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD3() {
        this.editProject.c_remarks_kwatro = "";
        this.remarksSectionD3.nativeElement.disabled = false;
        this.remarksSectionD3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionD4() {
        this.editProject.d_remarks_kwatro = " ";
        this.remarksSectionD4.nativeElement.disabled = true;
        this.remarksSectionD4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD4() {
        this.editProject.d_remarks_kwatro = "";
        this.remarksSectionD4.nativeElement.disabled = false;
        this.remarksSectionD4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Final BreakLine
    ComplianceSectionE1() {
        this.editProject.a_remarks_singko = " ";
        this.remarksSectionE1.nativeElement.disabled = true;
        this.remarksSectionE1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE1() {
        this.editProject.a_remarks_singko = "";
        this.remarksSectionE1.nativeElement.disabled = false;
        this.remarksSectionE1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 2
    ComplianceSectionE2() {
        this.editProject.b_remarks_singko = " ";
        this.remarksSectionE2.nativeElement.disabled = true;
        this.remarksSectionE2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE2() {
        this.editProject.b_remarks_singko = "";
        this.remarksSectionE2.nativeElement.disabled = false;
        this.remarksSectionE2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 3
    ComplianceSectionE3() {
        this.editProject.c_remarks_singko = " ";
        this.remarksSectionE3.nativeElement.disabled = true;
        this.remarksSectionE3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE3() {
        this.editProject.c_remarks_singko = "";
        this.remarksSectionE3.nativeElement.disabled = false;
        this.remarksSectionE3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 4
    ComplianceSectionE4() {
        this.editProject.d_remarks_singko = " ";
        this.remarksSectionE4.nativeElement.disabled = true;
        this.remarksSectionE4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE4() {
        this.editProject.d_remarks_singko = "";
        this.remarksSectionE4.nativeElement.disabled = false;
        this.remarksSectionE4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 5
    ComplianceSectionE5() {
        this.editProject.e_remarks_singko = " ";
        this.remarksSectionE5.nativeElement.disabled = true;
        this.remarksSectionE5.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE5() {
        this.editProject.e_remarks_singko = "";
        this.remarksSectionE5.nativeElement.disabled = false;
        this.remarksSectionE5.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 6
    ComplianceSectionE6() {
        this.editProject.f_remarks_singko = " ";
        this.remarksSectionE6.nativeElement.disabled = true;
        this.remarksSectionE6.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE6() {
        this.editProject.f_remarks_singko = "";
        this.remarksSectionE6.nativeElement.disabled = false;
        this.remarksSectionE6.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 7
    ComplianceSectionE7() {
        this.editProject.g_remarks_singko = " ";
        this.remarksSectionE7.nativeElement.disabled = true;
        this.remarksSectionE7.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE7() {
        this.editProject.g_remarks_singko = "";
        this.remarksSectionE7.nativeElement.disabled = false;
        this.remarksSectionE7.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 7
    ComplianceSectionE8() {
        this.editProject.h_remarks_singko = " ";
        this.remarksSectionE8.nativeElement.disabled = true;
        this.remarksSectionE8.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE8() {
        this.editProject.h_remarks_singko = "";
        this.remarksSectionE8.nativeElement.disabled = false;
        this.remarksSectionE8.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Singian Clan
    onDeleteClick(event, index) {
        this.deleteIndex = index;
        this.deleteProject.projectID = this.projects[index].projectID;
        this.deleteProject.projectName = this.projects[index].projectName;
        this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
        this.deleteProject.teamSize = this.projects[index].teamSize;
        this.deleteProject.supplier = this.projects[index].supplier;
        this.deleteProject.item_code = this.projects[index].item_code;
        this.deleteProject.item_description = this.projects[index].item_description;
        this.deleteProject.po_number = this.projects[index].po_number;
        this.deleteProject.po_date = this.projects[index].po_date;
        this.deleteProject.pr_number = this.projects[index].pr_number;
        this.deleteProject.pr_date = this.projects[index].pr_date;
        this.deleteProject.qty_uom = this.projects[index].qty_uom;
        this.deleteProject.qty_order = this.projects[index].qty_order;
        this.deleteProject.mfg_date = this.projects[index].mfg_date;
        this.deleteProject.expiration_date = this.projects[index].expiration_date;
        this.deleteProject.expected_delivery = this.projects[index].expected_delivery;
        this.deleteProject.actual_delivery = this.projects[index].actual_delivery;
        this.deleteProject.actual_remaining_receiving = this.projects[index].actual_remaining_receiving;
        this.deleteProject.received_by_QA = this.projects[index].received_by_QA;
        this.deleteProject.status_of_reject_one = this.projects[index].status_of_reject_one;
        this.deleteProject.status_of_reject_two = this.projects[index].status_of_reject_two;
        this.deleteProject.status_of_reject_three = this.projects[index].status_of_reject_three;
        this.deleteProject.count_of_reject_one = this.projects[index].count_of_reject_one;
        this.deleteProject.count_of_reject_two = this.projects[index].count_of_reject_two;
        this.deleteProject.count_of_reject_three = this.projects[index].count_of_reject_three;
        this.deleteProject.total_of_reject_mat = this.projects[index].total_of_reject_mat;
        //SECTION 1
        //A
        this.deleteProject.a_delivery_van_desc = this.projects[index].a_delivery_van_desc;
        this.deleteProject.a_compliance = this.projects[index].a_compliance;
        this.deleteProject.a_remarks = this.projects[index].a_remarks;
        //B
        this.deleteProject.b_cooling_system_desc = this.projects[index].b_cooling_system_desc;
        this.deleteProject.b_compliance = this.projects[index].b_compliance;
        this.deleteProject.b_remarks = this.projects[index].b_remarks;
        //C
        this.deleteProject.c_inner_walls_desc = this.projects[index].c_inner_walls_desc;
        this.deleteProject.c_compliance = this.projects[index].c_compliance;
        this.deleteProject.c_remarks = this.projects[index].c_remarks;
        //D
        this.deleteProject.d_plastic_curtains_desc = this.projects[index].d_plastic_curtains_desc;
        this.deleteProject.d_compliance = this.projects[index].d_compliance;
        this.deleteProject.d_remarks = this.projects[index].d_remarks;
        //E
        this.deleteProject.e_thereno_pest_desc = this.projects[index].e_thereno_pest_desc;
        this.deleteProject.e_compliance = this.projects[index].e_compliance;
        this.deleteProject.e_remarks = this.projects[index].e_remarks;
        //Section2
        //A
        this.deleteProject.a_clean_company_dos = this.projects[index].a_clean_company_dos;
        this.deleteProject.a_compliance_dos = this.projects[index].a_compliance_dos;
        this.deleteProject.a_remarks_dos = this.projects[index].a_remarks_dos;
        //B
        this.deleteProject.b_delivery_staff_symptoms_dos = this.projects[index].b_delivery_staff_symptoms_dos;
        this.deleteProject.b_compliance_dos = this.projects[index].b_compliance_dos;
        this.deleteProject.b_remarks_dos = this.projects[index].b_remarks_dos;
        //C
        this.deleteProject.c_inner_walls_clean_dos = this.projects[index].c_inner_walls_clean_dos;
        this.deleteProject.c_compliance_dos = this.projects[index].c_compliance_dos;
        this.deleteProject.c_remarks_dos = this.projects[index].c_remarks_dos;
        //D
        this.deleteProject.d_plastic_curtains_dos = this.projects[index].d_plastic_curtains_dos;
        this.deleteProject.d_compliance_dos = this.projects[index].d_compliance_dos;
        this.deleteProject.d_remarks_dos = this.projects[index].d_remarks_dos;
        //E
        this.deleteProject.e_no_accessories_dos = this.projects[index].e_no_accessories_dos;
        this.deleteProject.e_compliance_dos = this.projects[index].e_compliance_dos;
        this.deleteProject.e_remarks_dos = this.projects[index].e_remarks_dos;
        //Section 4
        //A
        this.deleteProject.a_certificate_coa_kwatro_desc = this.projects[index].a_certificate_coa_kwatro_desc;
        this.deleteProject.a_compliance_kwatro = this.projects[index].a_compliance_kwatro;
        this.deleteProject.a_remarks_kwatro = this.projects[index].a_remarks_kwatro;
        //B
        this.deleteProject.b_po_kwatro_desc = this.projects[index].b_po_kwatro_desc;
        this.deleteProject.b_compliance_kwatro = this.projects[index].b_compliance_kwatro;
        this.deleteProject.b_remarks_kwatro = this.projects[index].b_remarks_kwatro;
        //C
        this.deleteProject.c_msds_kwatro_desc = this.projects[index].c_msds_kwatro_desc;
        this.deleteProject.c_compliance_kwatro = this.projects[index].c_compliance_kwatro;
        this.deleteProject.c_remarks_kwatro = this.projects[index].c_remarks_kwatro;
        //D
        this.deleteProject.d_food_grade_desc = this.projects[index].d_food_grade_desc;
        this.deleteProject.d_compliance_kwatro = this.projects[index].d_compliance_kwatro;
        this.deleteProject.d_remarks_kwatro = this.projects[index].d_remarks_kwatro;
        //Section 5
        //A
        this.deleteProject.a_qty_received_singko_singko = this.projects[index].a_qty_received_singko_singko;
        this.deleteProject.a_compliance_singko = this.projects[index].a_compliance_singko;
        this.deleteProject.a_remarks_singko = this.projects[index].a_remarks_singko;
        //B
        this.deleteProject.b_mfg_date_desc_singko = this.projects[index].b_mfg_date_desc_singko;
        this.deleteProject.b_compliance_singko = this.projects[index].b_compliance_singko;
        this.deleteProject.b_remarks_singko = this.projects[index].b_remarks_singko;
        //C
        this.deleteProject.c_expirydate_desc_singko = this.projects[index].c_expirydate_desc_singko;
        this.deleteProject.c_compliance_singko = this.projects[index].c_compliance_singko;
        this.deleteProject.c_remarks_singko = this.projects[index].c_remarks_singko;
        //D
        this.deleteProject.d_packaging_desc_singko = this.projects[index].d_packaging_desc_singko;
        this.deleteProject.d_compliance_singko = this.projects[index].d_compliance_singko;
        this.deleteProject.d_remarks_singko = this.projects[index].d_remarks_singko;
        //E
        this.deleteProject.e_no_contaminants_desc_singko = this.projects[index].e_no_contaminants_desc_singko;
        this.deleteProject.e_compliance_singko = this.projects[index].e_compliance_singko;
        this.deleteProject.e_remarks_singko = this.projects[index].e_remarks_singko;
        //F
        this.deleteProject.f_qtyrejected_desc_singko = this.projects[index].f_qtyrejected_desc_singko;
        this.deleteProject.f_compliance_singko = this.projects[index].f_compliance_singko;
        this.deleteProject.f_remarks_singko = this.projects[index].f_remarks_singko;
        //G
        this.deleteProject.g_rejected_reason_desc_singko = this.projects[index].g_rejected_reason_desc_singko;
        this.deleteProject.g_compliance_singko = this.projects[index].g_compliance_singko;
        this.deleteProject.g_remarks_singko = this.projects[index].g_remarks_singko;
        //H
        this.deleteProject.h_lab_sample_desc_singko = this.projects[index].h_lab_sample_desc_singko;
        this.deleteProject.h_compliance_singko = this.projects[index].h_compliance_singko;
        this.deleteProject.h_remarks_singko = this.projects[index].h_remarks_singko;
    }
    onDeleteConfirmClick() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure the you to delete the selected data?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.OnDeleteDetails();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
                this.showDeletedSuccess();
            }
        });
    }
    CancelledPoDetails() {
        var Item = this.ItemDescription.nativeElement.value;
        var PoNumero = this.PONumber.nativeElement.value;
        // if($("#SelectedReason").length === 0)
        // {
        // alert("Showy a");
        // return;
        // }
        // else
        // {
        // alert("MEaning");
        // return;
        // }
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#ActivePartialReceiving").is(":visible")) {
            // alert("1");
            // return;
            this.PartialReceivingCheckingonCancellation();
            return;
        }
        else {
        }
        // var PartialReceiving = this.ActivePartialReceiving.nativeElement.value;
        // if (PartialReceiving !== null) 
        // {
        // }
        // else
        // {
        //   PartialReceiving = this.Deactivator;
        // }
        // if (this.ActivePartialReceiving.nativeElement.value == this.Deactivator) 
        // {
        //   alert("Baba");
        //   return;
        // }
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure that you want to cancel the PO Number ' + PoNumero + '?',
            text: Item,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                this.UpdateDeactivatedTransactions();
            }
        });
    }
    onCancelClick(event, index) {
        // if($('#txtSearchText').is(":visible"))
        // {
        // alert("1");
        // }
        // else
        // {
        //   alert("2");
        // }
        // alert(index);
        // alert(this.currentPageIndex);
        this.editForm.resetForm();
        this.received_by.nativeElement.value = this.loginService.currentUserName;
        this.resetValueS();
        //first
        if (jquery__WEBPACK_IMPORTED_MODULE_0__('#txtSearchText').is(":visible")) {
            this.projectsService.SearchProjects("Po_number", this.searchText)
                .subscribe((response) => {
                // debugger;
                this.projects = response;
                this.showLoading = false;
                this.calculateNoOfPages();
                this.totalPoRowCount = response.length;
            });
        }
        else {
            this.projectsService.getAllProjects()
                .subscribe((response) => {
                // debugger;
                this.projects = response;
            });
            if (this.currentPageIndex == 1) {
                if (index == 0) {
                    index = 7;
                }
                if (index == 1) {
                    index = 8;
                }
                if (index == 2) {
                    index = 9;
                }
                if (index == 3) {
                    index = 10;
                }
                if (index == 4) {
                    index = 11;
                }
                if (index == 5) {
                    index = 12;
                }
                if (index == 6) {
                    index = 13;
                }
            }
            else if (this.currentPageIndex == 2) {
                if (index == 0) {
                    index = 14;
                }
                if (index == 1) {
                    index = 15;
                }
                if (index == 2) {
                    index = 16;
                }
                if (index == 3) {
                    index = 17;
                }
                if (index == 4) {
                    index = 18;
                }
                if (index == 5) {
                    index = 19;
                }
                if (index == 6) {
                    index = 20;
                }
            }
            else if (this.currentPageIndex == 3) {
                if (index == 0) {
                    index = 21;
                }
                if (index == 1) {
                    index = 22;
                }
                if (index == 2) {
                    index = 23;
                }
                if (index == 3) {
                    index = 24;
                }
                if (index == 4) {
                    index = 25;
                }
                if (index == 5) {
                    index = 26;
                }
                if (index == 6) {
                    index = 27;
                }
            }
            else if (this.currentPageIndex == 4) {
                if (index == 0) {
                    index = 28;
                }
                if (index == 1) {
                    index = 29;
                }
                if (index == 2) {
                    index = 30;
                }
                if (index == 3) {
                    index = 31;
                }
                if (index == 4) {
                    index = 32;
                }
                if (index == 5) {
                    index = 33;
                }
                if (index == 6) {
                    index = 34;
                }
            }
            else {
            }
        }
        //Last
        setTimeout(() => {
            this.editProject.projectID = this.projects[index].projectID;
            this.editProject.projectName = this.projects[index].projectName;
            this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
            this.editProject.teamSize = this.projects[index].teamSize;
            this.editProject.active = this.projects[index].active;
            this.editProject.clientLocationID = this.projects[index].clientLocationID;
            this.editProject.clientLocation = this.projects[index].clientLocation;
            this.editProject.status = this.projects[index].status;
            this.editProject.supplier = this.projects[index].supplier;
            this.editProject.item_code = this.projects[index].item_code;
            this.editProject.item_description = this.projects[index].item_description;
            this.editProject.po_number = this.projects[index].po_number;
            this.editProject.po_date = this.projects[index].po_date;
            this.editProject.pr_number = this.projects[index].pr_number;
            this.editProject.pr_date = this.projects[index].pr_date;
            this.editProject.qty_order = this.projects[index].qty_order;
            this.editProject.qty_uom = this.projects[index].qty_uom;
            this.editProject.mfg_date = this.projects[index].mfg_date;
            this.editProject.expiration_date = this.projects[index].expiration_date;
            this.editProject.expected_delivery = this.projects[index].expected_delivery;
            this.editProject.actual_delivery = this.projects[index].actual_delivery;
            this.editProject.actual_remaining_receiving = this.projects[index].actual_remaining_receiving;
            // this.editProject.received_by_QA = this.activeUser;
            this.editProject.is_activated = this.Deactivator;
            this.editProject.cancelled_date = this.ToDay;
            this.editProject.canceled_by = this.activeUser;
            this.editProject.received_by_QA = this.projects[index].received_by_QA;
            this.editProject.status_of_reject_one = this.projects[index].status_of_reject_one;
            this.editProject.status_of_reject_two = this.projects[index].status_of_reject_two;
            this.editProject.status_of_reject_three = this.projects[index].status_of_reject_three;
            this.editProject.count_of_reject_one = this.projects[index].count_of_reject_one;
            this.editProject.count_of_reject_two = this.projects[index].count_of_reject_two;
            this.editProject.count_of_reject_three = this.projects[index].count_of_reject_three;
            this.editProject.total_of_reject_mat = this.projects[index].total_of_reject_mat;
            //Section 1
            //A
            this.editProject.a_delivery_van_desc = this.projects[index].a_delivery_van_desc;
            this.editProject.a_compliance = this.projects[index].a_compliance;
            this.editProject.a_remarks = this.projects[index].a_remarks;
            //B
            this.editProject.b_cooling_system_desc = this.projects[index].b_cooling_system_desc;
            this.editProject.b_compliance = this.projects[index].b_compliance;
            this.editProject.b_remarks = this.projects[index].b_remarks;
            //C
            this.editProject.c_inner_walls_desc = this.projects[index].c_inner_walls_desc;
            this.editProject.c_compliance = this.projects[index].c_compliance;
            this.editProject.c_remarks = this.projects[index].c_remarks;
            //D
            this.editProject.d_plastic_curtains_desc = this.projects[index].d_plastic_curtains_desc;
            this.editProject.d_compliance = this.projects[index].d_compliance;
            this.editProject.d_remarks = this.projects[index].d_remarks;
            //E
            this.editProject.e_thereno_pest_desc = this.projects[index].e_thereno_pest_desc;
            this.editProject.e_compliance = this.projects[index].e_compliance;
            this.editProject.e_remarks = this.projects[index].e_remarks;
            //Section 2
            //A
            this.editProject.a_clean_company_dos = this.projects[index].a_clean_company_dos;
            this.editProject.a_compliance_dos = this.projects[index].a_compliance_dos;
            this.editProject.a_remarks_dos = this.projects[index].a_remarks_dos;
            //B
            this.editProject.b_delivery_staff_symptoms_dos = this.projects[index].b_delivery_staff_symptoms_dos;
            this.editProject.b_compliance_dos = this.projects[index].b_compliance_dos;
            this.editProject.b_remarks_dos = this.projects[index].b_remarks_dos;
            //C
            this.editProject.c_inner_walls_clean_dos = this.projects[index].c_inner_walls_clean_dos;
            this.editProject.c_compliance_dos = this.projects[index].c_compliance_dos;
            this.editProject.c_remarks_dos = this.projects[index].c_remarks_dos;
            //D
            this.editProject.d_plastic_curtains_dos = this.projects[index].d_plastic_curtains_dos;
            this.editProject.d_compliance_dos = this.projects[index].d_compliance_dos;
            this.editProject.d_remarks_dos = this.projects[index].d_remarks_dos;
            //E
            this.editProject.e_no_accessories_dos = this.projects[index].e_no_accessories_dos;
            this.editProject.e_compliance_dos = this.projects[index].e_compliance_dos;
            this.editProject.e_remarks_dos = this.projects[index].e_remarks_dos;
            //F
            this.editProject.f_no_pests_sightings_dos = this.projects[index].f_no_pests_sightings_dos;
            this.editProject.f_compliance_dos = this.projects[index].f_compliance_dos;
            this.editProject.f_remarks_dos = this.projects[index].f_remarks_dos;
            //Section 3
            //A
            this.editProject.a_pallet_crates_tres = this.projects[index].a_pallet_crates_tres;
            this.editProject.a_compliance_tres = this.projects[index].a_compliance_tres;
            this.editProject.a_remarks_tres = this.projects[index].a_remarks_tres;
            //B
            this.editProject.b_product_contamination_tres = this.projects[index].b_product_contamination_tres;
            this.editProject.b_compliance_tres = this.projects[index].b_compliance_tres;
            this.editProject.b_remarks_tres = this.projects[index].b_remarks_tres;
            //C
            this.editProject.c_uncessary_items_tres = this.projects[index].c_uncessary_items_tres;
            this.editProject.c_compliance_tres = this.projects[index].c_compliance_tres;
            this.editProject.c_remarks_tres = this.projects[index].c_remarks_tres;
            //D
            this.editProject.d_products_cover_tres = this.projects[index].d_products_cover_tres;
            this.editProject.d_compliance_tres = this.projects[index].d_compliance_tres;
            this.editProject.d_remarks_tres = this.projects[index].d_remarks_tres;
            //Serction 4
            //A
            this.editProject.a_certificate_coa_kwatro_desc = this.projects[index].a_certificate_coa_kwatro_desc;
            this.editProject.a_compliance_kwatro = this.projects[index].a_compliance_kwatro;
            this.editProject.a_remarks_kwatro = this.projects[index].a_remarks_kwatro;
            //B
            this.editProject.b_po_kwatro_desc = this.projects[index].b_po_kwatro_desc;
            this.editProject.b_compliance_kwatro = this.projects[index].b_compliance_kwatro;
            this.editProject.b_remarks_kwatro = this.projects[index].b_remarks_kwatro;
            //C
            this.editProject.c_msds_kwatro_desc = this.projects[index].c_msds_kwatro_desc;
            this.editProject.c_compliance_kwatro = this.projects[index].c_compliance_kwatro;
            this.editProject.c_remarks_kwatro = this.projects[index].c_remarks_kwatro;
            //D
            this.editProject.d_food_grade_desc = this.projects[index].d_food_grade_desc;
            this.editProject.d_compliance_kwatro = this.projects[index].d_compliance_kwatro;
            this.editProject.d_remarks_kwatro = this.projects[index].d_remarks_kwatro;
            //Section 5
            //A
            this.editProject.a_qty_received_singko_singko = this.projects[index].a_qty_received_singko_singko;
            this.editProject.a_compliance_singko = this.projects[index].a_compliance_singko;
            this.editProject.a_remarks_singko = this.projects[index].a_remarks_singko;
            //B
            this.editProject.b_mfg_date_desc_singko = this.projects[index].b_mfg_date_desc_singko;
            this.editProject.b_compliance_singko = this.projects[index].b_compliance_singko;
            this.editProject.b_remarks_singko = this.projects[index].b_remarks_singko;
            //C
            this.editProject.c_expirydate_desc_singko = this.projects[index].c_expirydate_desc_singko;
            this.editProject.c_compliance_singko = this.projects[index].c_compliance_singko;
            this.editProject.c_remarks_singko = this.projects[index].c_remarks_singko;
            //D
            this.editProject.d_packaging_desc_singko = this.projects[index].d_packaging_desc_singko;
            this.editProject.d_compliance_singko = this.projects[index].d_compliance_singko;
            this.editProject.d_remarks_singko = this.projects[index].d_remarks_singko;
            //E
            this.editProject.e_no_contaminants_desc_singko = this.projects[index].e_no_contaminants_desc_singko;
            this.editProject.e_compliance_singko = this.projects[index].e_compliance_singko;
            this.editProject.e_remarks_singko = this.projects[index].e_remarks_singko;
            //F
            this.editProject.f_qtyrejected_desc_singko = this.projects[index].f_qtyrejected_desc_singko;
            this.editProject.f_compliance_singko = this.projects[index].f_compliance_singko;
            this.editProject.f_remarks_singko = this.projects[index].f_remarks_singko;
            //G
            this.editProject.g_rejected_reason_desc_singko = this.projects[index].g_rejected_reason_desc_singko;
            this.editProject.g_compliance_singko = this.projects[index].g_compliance_singko;
            this.editProject.g_remarks_singko = this.projects[index].g_remarks_singko;
            //H
            this.editProject.h_lab_sample_desc_singko = this.projects[index].h_lab_sample_desc_singko;
            this.editProject.h_compliance_singko = this.projects[index].h_compliance_singko;
            this.editProject.h_remarks_singko = this.projects[index].h_remarks_singko;
            jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
            //Addition Set Point for Validation of Partial Data
            // this.ActivePartialReceiving.nativeElement.value = "0"; 
            this.PoNumberBinding = this.projects[index].po_number;
            // this.PoNumberChild.nativeElement.value;
            this.ProjectsAllowableQty = this.projectsPartialPoService.SearchProjects("Po_number", this.PoNumberBinding);
            this.ProjectsAllowableQty.subscribe.toString;
            this.editIndex = index;
            setTimeout(() => {
                if (jquery__WEBPACK_IMPORTED_MODULE_0__("#ActivePartialReceiving").is(":visible")) {
                    // alert("A1");
                    this.PartialComment = "haddata";
                }
                else {
                    // alert("B1");
                    this.PartialComment = "unsetdata";
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#CancelPO").show();
                }
            }, 170);
        }, 100);
    }
    UpdateDeactivatedTransactions() {
        this.projectsService.updateProject(this.editProject).subscribe((response) => {
            var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            p.clientLocation = response.clientLocation;
            p.active = response.active;
            // p.is_activated = response.is_activated;
            p.clientLocationID = response.clientLocationID;
            p.status = response.status;
            p.supplier = response.supplier;
            p.item_code = response.item_code;
            p.item_description = response.item_description;
            p.po_number = response.po_number;
            p.po_date = response.po_date;
            p.pr_number = response.pr_number;
            p.pr_date = response.pr_date;
            p.qty_order = response.qty_order;
            p.qty_uom = response.qty_uom;
            p.mfg_date = response.mfg_date;
            p.expiration_date = response.expiration_date;
            p.expected_delivery = response.expected_delivery;
            p.actual_delivery = response.actual_delivery;
            p.expected_delivery = response.expected_delivery;
            p.actual_remaining_receiving = response.actual_remaining_receiving;
            // p.received_by_QA = response.received_by_QA;
            // // this.activeUser = response.received_by_QA;
            p.status_of_reject_one = response.status_of_reject_one;
            p.status_of_reject_two = response.status_of_reject_two;
            p.status_of_reject_three = response.status_of_reject_three;
            p.count_of_reject_one = response.count_of_reject_one;
            p.count_of_reject_two = response.count_of_reject_two;
            p.count_of_reject_three = response.count_of_reject_three;
            p.total_of_reject_mat = response.total_of_reject_mat;
            //Section 1
            // this.received_by.nativeElement.value = this.loginService.currentUserName;
            this.projects[this.editIndex] = p;
            this.editProject.projectID = null;
            this.editProject.projectName = null;
            this.editProject.dateOfStart = null;
            this.editProject.teamSize = null;
            this.editProject.supplier = null;
            this.editProject.active = false;
            this.editProject.clientLocationID = null;
            this.editProject.status = null;
            this.editProject.item_code = null;
            this.editProject.item_description = null;
            this.editProject.po_number = null;
            this.editProject.po_date = null;
            this.editProject.pr_number = null;
            this.editProject.pr_date = null;
            this.editProject.qty_order = null;
            this.editProject.qty_uom = null;
            this.editProject.mfg_date = null;
            this.editProject.expiration_date = null;
            this.editProject.expected_delivery = null;
            this.editProject.actual_delivery = null;
            this.editProject.actual_remaining_receiving = null;
            this.editProject.received_by_QA = null;
            this.editProject.is_activated = null;
            this.editProject.status_of_reject_one = null;
            this.editProject.status_of_reject_two = null;
            this.editProject.status_of_reject_three = null;
            this.editProject.count_of_reject_one = null;
            this.editProject.count_of_reject_two = null;
            this.editProject.count_of_reject_three = null;
            this.editProject.total_of_reject_mat = null;
            this.showCancelledPOSuccess();
            this.ngOnInit();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#editFormCancel").trigger("click");
        }, (error) => {
            console.log(error);
        });
    }
    OnDeleteDetails() {
        this.projectsService.deleteProject(this.deleteProject.projectID).subscribe((response) => {
            this.projects.splice(this.deleteIndex, 1);
            this.deleteProject.projectID = null;
            this.deleteProject.projectName = null;
            this.deleteProject.teamSize = null;
            this.deleteProject.dateOfStart = null;
            this.deleteProject.supplier = null;
            this.deleteProject.item_code = null;
            this.deleteProject.item_description = null;
            this.deleteProject.po_number = null;
            this.deleteProject.po_date = null;
            this.deleteProject.pr_number = null;
            this.deleteProject.pr_date = null;
            this.deleteProject.qty_order = null;
            this.deleteProject.qty_uom = null;
            this.deleteProject.mfg_date = null;
            this.deleteProject.expiration_date = null;
            this.deleteProject.expected_delivery = null;
            this.deleteProject.actual_delivery = null;
            this.deleteProject.actual_remaining_receiving = null;
            this.deleteProject.received_by_QA = null;
            this.deleteProject.c_inner_walls_desc = null;
            this.deleteProject.c_compliance = null;
            this.deleteProject.c_remarks = null;
            this.deleteProject.d_plastic_curtains_desc = null;
            this.deleteProject.d_compliance = null;
            this.deleteProject.d_remarks = null;
            this.deleteProject.e_thereno_pest_desc = null;
            this.deleteProject.e_compliance = null;
            this.deleteProject.e_remarks = null;
            //Section 2
            //A
            this.deleteProject.a_clean_company_dos = null;
            this.deleteProject.a_compliance_dos = null;
            this.deleteProject.a_remarks_dos = null;
            //B
            this.deleteProject.b_delivery_staff_symptoms_dos = null;
            this.deleteProject.b_compliance_dos = null;
            this.deleteProject.b_remarks_dos = null;
            //C
            this.deleteProject.c_inner_walls_clean_dos = null;
            this.deleteProject.c_compliance_dos = null;
            this.deleteProject.c_remarks_dos = null;
            //D
            this.deleteProject.d_plastic_curtains_dos = null;
            this.deleteProject.d_compliance_dos = null;
            this.deleteProject.d_remarks_dos = null;
            //E
            this.deleteProject.e_no_accessories_dos = null;
            this.deleteProject.e_compliance_dos = null;
            this.deleteProject.e_remarks_dos = null;
            //F
            this.deleteProject.f_compliance_dos = null;
            this.deleteProject.f_no_pests_sightings_dos = null;
            this.deleteProject.f_remarks_dos = null;
            //Section 3
            //A
            this.deleteProject.a_pallet_crates_tres = null;
            this.deleteProject.a_compliance_tres = null;
            this.deleteProject.a_remarks_tres = null;
            //B
            this.deleteProject.b_product_contamination_tres = null;
            this.deleteProject.b_compliance_tres = null;
            this.deleteProject.b_remarks_tres = null;
            //C
            this.deleteProject.c_uncessary_items_tres = null;
            this.deleteProject.c_compliance_tres = null;
            this.deleteProject.c_remarks_tres = null;
            //D
            this.deleteProject.d_products_cover_tres = null;
            this.deleteProject.d_compliance_tres = null;
            this.deleteProject.d_remarks_tres = null;
            //Section 4
            //A
            this.deleteProject.a_certificate_coa_kwatro_desc = null;
            this.deleteProject.a_compliance_kwatro = null;
            this.deleteProject.a_remarks_kwatro = null;
            //B
            this.deleteProject.b_po_kwatro_desc = null;
            this.deleteProject.b_compliance_kwatro = null;
            this.deleteProject.b_remarks_kwatro = null;
            //C
            this.deleteProject.c_msds_kwatro_desc = null;
            this.deleteProject.c_compliance_kwatro = null;
            this.deleteProject.c_remarks_kwatro = null;
            //D
            this.deleteProject.d_food_grade_desc = null;
            this.deleteProject.d_compliance_kwatro = null;
            this.deleteProject.d_remarks_kwatro = null;
            //Section 5
            //A
            this.deleteProject.a_qty_received_singko_singko = null;
            this.deleteProject.a_compliance_singko = null;
            this.deleteProject.a_remarks_singko = null;
            //B
            this.deleteProject.b_mfg_date_desc_singko = null;
            this.deleteProject.b_compliance_singko = null;
            this.deleteProject.b_remarks_singko = null;
            //C
            this.deleteProject.c_expirydate_desc_singko = null;
            this.deleteProject.c_compliance_singko = null;
            this.deleteProject.c_remarks_singko = null;
            ;
            //D
            this.deleteProject.d_packaging_desc_singko = null;
            this.deleteProject.d_compliance_singko = null;
            this.deleteProject.d_remarks_singko = null;
            //E
            this.deleteProject.e_no_contaminants_desc_singko = null;
            this.deleteProject.e_compliance_singko = null;
            this.deleteProject.e_remarks_singko = null;
            //F
            this.deleteProject.f_qtyrejected_desc_singko = null;
            this.deleteProject.f_compliance_singko = null;
            this.deleteProject.f_remarks_singko = null;
            //G
            this.deleteProject.g_rejected_reason_desc_singko = null;
            this.deleteProject.g_compliance_singko = null;
            this.deleteProject.g_remarks_singko = null;
            //H
            this.deleteProject.h_lab_sample_desc_singko = null;
            this.deleteProject.h_compliance_singko = null;
            this.deleteProject.h_remarks_singko = null;
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchClick() {
        // this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(
        //   (response: Project[]) =>
        //   {
        //     this.projects = response;
        //   },
        //   (error) => 
        //   {
        //     console.log(error);
        //   });
    }
    onSearchTextKeyup(event) {
        // this.editForm.resetForm();
        //Recall the calculateNoOfPages
        if (jquery__WEBPACK_IMPORTED_MODULE_0__('#txtSearchText').is(":empty")) {
            // this.ngOnInit();
        }
        this.calculateNoOfPages();
    }
    onHideShowDetails(event) {
        this.projectsService.toggleDetails();
    }
    onPageIndexClicked(pageIndex) {
        // this.currentPageIndex = pageIndex;
        //Set currentPageIndex
        if (pageIndex >= 0 && pageIndex < this.pages.length) {
            this.currentPageIndex = pageIndex;
        }
    }
    //Start of Looping in Rejected Items
    // onAddSkill()
    // {
    //   var formGroup = new FormGroup({
    //     skillName: new FormControl(null, [Validators.required]),
    //     skillLevel: new FormControl(null, [Validators.required])
    //   });
    //   (<FormArray>this.signUpForm.get("skills")).push(formGroup);
    // }
    // onRemoveClick(index: number)
    // {
    //   (<FormArray>this.signUpForm.get("skills")).removeAt(index);
    // }
    // getControls() {
    //   return (this.signUpForm.get('skills') as FormArray).controls;
    // }
    onAddAdditionalRejectRow(event) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").is(":visible")) {
            // alert("The paragraph  is visible.");
            if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").is(":visible")) {
                // alert("The paragraph  is visible.");
                if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").is(":visible")) {
                    // alert("The paragraph  is visible.");
                    // alert("Limit  is exceed!");
                    this.showLimitonAddingRejection();
                }
                else {
                    // alert("The paragraph  is hidden.");
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow32").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#AddRejectBtn").hide();
                }
            }
            else {
                // alert("The paragraph  is hidden.");
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow22").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").show();
            }
        }
        else {
            // alert("The paragraph  is hidden.");
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow12").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").show();
        }
        // $("#rejectionrow2").show();
        // $("#rejectionrow22").show();
        // $("#rejectionrow3").show();
        // $("#rejectionrow32").show();
        // alert("sds");
    }
    onRemoveAdditionalRejectRow(event) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").is(":visible")) {
            // alert("The paragraph  is visible.");
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").hide();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow32").hide();
        }
        else {
            // alert("The paragraph  is hidden.");
            if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").is(":visible")) {
                // alert("The paragraph  is visible.");
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").hide();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow22").hide();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").show();
            }
            else {
                // alert("The paragraph  is hidden.");
                if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").is(":visible")) {
                    // alert("The paragraph  is visible.");
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow12").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").hide();
                }
                else {
                    // alert("The paragraph  is hidden.");
                }
            }
        }
        //Reloading Add Button
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#AddRejectBtn").is(":visible")) {
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__("#AddRejectBtn").show();
        }
    }
    onChangeEventReject1(event) {
        if (this.rejectNo1.nativeElement.value == "") {
            this.rejectNo1.nativeElement.value = "0";
            // console.warn("Empty Quantity in the textInput! ")
        }
        console.log(event.target.value);
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value; 
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        // console.log(summary);
        this.totalofReject.nativeElement.value = summary;
        // alert("You change a value 1");
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
        if (ActualDelivered > TotalReject) {
            // alert("A");
        }
        else {
            this.RejectionGreaterThanReceiving();
        }
    }
    onChangeEventReject2(event) {
        if (this.rejectNo2.nativeElement.value == "") {
            this.rejectNo2.nativeElement.value = "0";
            console.warn("Empty Quantity in the textInput! ");
        }
        console.log(event.target.value);
        // this.totalofReject.nativeElement.value = this.rejectNo2.nativeElement.value + this.totalofReject.nativeElement.value; 
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        console.log(summary);
        this.totalofReject.nativeElement.value = summary;
        // alert("You change a value 2");
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
        if (ActualDelivered > TotalReject) {
            // alert("A");
        }
        else {
            this.RejectionGreaterThanReceiving();
        }
    }
    selectExpiryDate(event) {
        // JavaScript program to illustrate 
        // calculation of no. of days between two date 
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //To display the final no. of days (result)
        // document.write("Total number of days between dates  <br>"
        //                + date1 + "<br> and <br>" 
        //                + date2 + " is: <br> " 
        //                + Difference_In_Days);
        var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        var ItemDesc = this.ItemDescription.nativeElement.value;
        if (Difference_In_Days == ExpiryDaysActivated) {
            // alert("ssasa kaba Hahha");
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Below Standard Expiration ' + Difference_In_Days + ' Days?',
                text: ItemDesc,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                }
            });
        }
        else {
            this.ExpiryDateChild.nativeElement.value = ' ';
            this.ExpiryDateChild.nativeElement.focus();
        }
        if (Difference_In_Days < ExpiryDaysActivated) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Below Standards Expiration Days  ' + Difference_In_Days + ' Days?',
                text: ItemDesc,
                showConfirmButton: false,
                timer: 3500
            });
            // Swal.fire({
            //   title: 'Below Standardss Expiration Days  '+ Difference_In_Days +' Days?',
            //   text: ItemDesc,
            //   icon: 'warning',
            //   showCancelButton: true,
            //   confirmButtonColor: '#3085d6',
            //   cancelButtonColor: '#d33',
            //   confirmButtonText: 'Yes'
            // }).then((result) => {
            //   if (result.isConfirmed) {
            //   }
            // })
        }
        else {
            this.ExpiryDateChild.nativeElement.value = ' ';
            this.ExpiryDateChild.nativeElement.focus();
        }
    }
    onChangeEventReject3(event) {
        if (this.rejectNo3.nativeElement.value == "") {
            this.rejectNo3.nativeElement.value = "0";
            console.warn("Empty Quantity in the textInput! ");
        }
        console.log(event.target.value);
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        console.log(summary);
        this.totalofReject.nativeElement.value = summary;
        // alert("You change a value 3");
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
        if (ActualDelivered > TotalReject) {
            // alert("A");
        }
        else {
            this.RejectionGreaterThanReceiving();
        }
    }
    validateNumber(e) {
        let input = String.fromCharCode(e.charCode);
        const reg = /^\d*(?:[.,]\d{1,2})?$/;
        if (!reg.test(input)) {
            e.preventDefault();
        }
    }
    decimalFilter(event) {
        const reg = /^-?\d*(\.\d{0,2})?$/;
        let input = event.target.value + String.fromCharCode(event.charCode);
        if (!reg.test(input)) {
            event.preventDefault();
        }
    }
    HideSearchBtn(event) {
        jquery__WEBPACK_IMPORTED_MODULE_0__("#SearchBtnDetailed").show();
    }
    validateRejectedStatus(event) {
        // const Reject1 = this.RejectedStatus1.nativeElement.value;
        // const Reject2 = this.RejectedStatus2.nativeElement.value;
        // const Reject3 = this.RejectedStatus3.nativeElement.value;
        // if(Reject1 == Reject2)
        // {
        //   this.MultipleSelectionOfRejectionStatus();
        // }
    }
    ActualDeliveryComputation(event) {
        // Allowable Percentage Computation
        const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const QtyOrder = this.QtyOrdered.nativeElement.value;
        const ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;
        this.ActualRemaining = QtyOrder - ActualDelivered;
        //Add Ons
        //Allowable Percentage
        var aplenght = jquery__WEBPACK_IMPORTED_MODULE_0__('#Allowable_Percentage_id').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(aplenght);
        //Actual Delivery Functionalioty
        var adlength = jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(adlength);
        if (aplenght > adlength) {
            //Do Something programmble
            if (TotalAllowablePercentage >= ActualDelivered) {
                // alert($('#Allowable_Percentage_id').val());
            }
            else {
                this.AllowablePercentageExceed();
                // this.ActualDeliveryChild.nativeElement.value('');
                // alert("UNO");
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val("");
            }
        }
        else {
            if (TotalAllowablePercentage >= ActualDelivered) {
                // alert($('#Allowable_Percentage_id').val());
                // alert("hahaha");
            }
            else {
                // alert("FEMALE");
                this.AllowablePercentageExceed();
                // alert("DOS");
                // ActualDelivered.val('');
                // this.ActualDeliveryChild.nativeElement.value('');
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val("");
            }
        } //End Point add Ons
    }
    AllowablePercentageComputation(event) {
        // Allowable Percentage Computation
        const ExpectedDelivery = this.ExpectedDeliveryActual.nativeElement.value;
        const ActivatedAllowablePercentage = this.ActiveAllowablePercentage.nativeElement.value;
        // const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const QtyOrder = this.QtyOrdered.nativeElement.value;
        const ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;
        // const summary = ExpectedDelivery * ActivatedAllowablePercentage;
        // console.log(summary);
        //Allowable Percentage Computation
        const summary = ActivatedAllowablePercentage / 100;
        const summaryadd1 = summary + 1;
        const finalcomputation = ActualRemainingReceiving * summaryadd1;
        this.TotalAllowablePercentage.nativeElement.value = finalcomputation;
        //End of Computation
        if (QtyOrder == ActualRemainingReceiving) {
            // if(ExpectedDelivery > QtyOrder)
            if (ExpectedDelivery == TotalAllowablePercentage) {
            }
            else {
                if (TotalAllowablePercentage >= ExpectedDelivery) {
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
                    jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").focus();
                    // this.GreatherThanTheOrder(); //Be Carefull
                }
            }
        }
        else {
            if (TotalAllowablePercentage >= ExpectedDelivery) {
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
                jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").focus();
                // this.GreatherThanTheOrder(); //Be Carefull
            }
        }
        //Gerard Singian
    }
    InitialComputation() {
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        this.totalofReject.nativeElement.value = summary;
    }
    ConfirmNoofReject(event) {
        // alert("You Press a key in the Keyboard");
        this.InitialComputation();
        if (this.confirmReject.nativeElement.value == "") {
            this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "";
        }
        else {
            if (this.totalofReject.nativeElement.value == this.confirmReject.nativeElement.value) {
                // this.rejectNo3.nativeElement.value="0";
                // console.warn("Empty Quantity in the textInput! ")
                // this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "Pexa Marian";
                this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "";
            }
            else {
                this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "No. of total reject is not match";
            }
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_client_locations_service__WEBPACK_IMPORTED_MODULE_7__["ClientLocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_10__["RejectedStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_allowable_percentage_service__WEBPACK_IMPORTED_MODULE_11__["AllowablePercentageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_12__["CancelledPOTransactionStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_projects_partial_po_service__WEBPACK_IMPORTED_MODULE_13__["ProjectsPartialPoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_tbl_nearly_expiry_mgmt_service__WEBPACK_IMPORTED_MODULE_14__["TblNearlyExpiryMgmtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c11, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c12, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c13, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c15, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c16, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c17, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c18, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c19, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c20, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c21, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c22, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c23, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c24, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c25, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c26, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c27, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c28, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c29, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c30, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c31, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c32, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c33, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c34, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c35, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c36, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c37, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c38, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c39, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c40, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c41, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c42, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c43, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c44, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c45, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c46, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c47, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c48, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c49, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c50, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c51, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c52, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c53, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.prjID = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.IsActivated = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.received_by = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectNo1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectNo2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectNo3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.confirmReject = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectIsnotMactchSpanTag = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.totalofReject = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectedStatusElementNo3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActiveAllowablePercentage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.TotalAllowablePercentage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ExpectedDeliveryActual = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ExpiryDateChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActualDeliveryChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectedStatus1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectedStatus2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectedStatus3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActualRemainingReceiving = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.QtyOrdered = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActiveNearlyExpirySetpoint = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ItemDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.PONumber = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActivePartialReceiving = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB6 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE6 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE7 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE8 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.projs = _t);
    } }, decls: 1251, vars: 588, consts: [[1, "row"], [1, "col-xl-12"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "form-group", "form-row"], [1, "col-12"], [1, "system-name"], ["matBadgeColor", "primary", 3, "matBadge"], ["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:34px", 4, "ngIf"], [1, "col-xl-12", "mx-auto"], ["system-name", "", 1, "col-6", "mb-4"], ["floatLabel", "auto", "appearance", "standard", "color", "primary"], ["id", "drpSearchBy", "name", "SearchBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "item_code"], ["value", "item_description"], ["value", "po_number"], ["align", "end"], ["matPrefix", ""], [1, "col-3", "float-right", "hideObject", "system-name"], ["type", "text", "matInput", "", "placeholder", "Enter Some Data", "id", "txtSearchText", "name", "SearchText", 3, "ngModel", "ngModelChange", "keyup"], [1, "table", "table-striped", "table-bordered", "nowrap", "table-responsive-xl", 2, "width", "100%"], [1, "text-light", "header-bg-color-um", "system-name"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "mr-1", "font-color-black"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "ml-1", "font-color-black"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "auto"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "name", "ProjectID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectID", "ngModel", "prjID", ""], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "is_activated", "value", "1", 1, "form-control", 2, "width", "auto", 3, "ngModel", "ngModelChange"], ["newis_activated", "ngModel", "IsActivated", ""], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], ["for", "col-sm-4 col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocationID", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newFormCancel", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["editForm", "ngForm"], ["role", "dialog", "id", "editModal", "data-backdrop", "static", "data-keyboard", "false", 1, "modal"], [1, "modal-header", "bg-all"], [1, "modal-title", "white-color"], [1, "flex"], [1, "box-1"], ["type", "text", "matInput", "", "id", "txtEditProjectID", "placeholder", "Checklist ID", "name", "ProjectID", "disabled", "disabled", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectID", "ngModel"], ["type", "text", "matInput", "", "id", "txtEdititem_code", "placeholder", "Item Code", "name", "item_code", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["edititem_code", "ngModel"], ["type", "text", "matInput", "", "id", "txtEdititem_class", "placeholder", "Item Class", "disabled", "disabled", "name", "item_class", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["edititem_class", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditmajor_category", "placeholder", "Major Category", "disabled", "disabled", "name", "major_category", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["editmajor_category", "ngModel"], [1, "box-2"], ["type", "text", "matInput", "", "id", "txtEditReceivingDate", "disabled", "disabled", "placeholder", "Receiving Date", 3, "value"], [1, "material-icons-outlined"], ["type", "text", "matInput", "", "id", "txtitem_description", "placeholder", "Description", "name", "item_descriptuion", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["edititem_description", "ngModel", "ItemDescription", ""], ["type", "text", "matInput", "", "id", "txtEdititem_type", "placeholder", "Item Type", "disabled", "disabled", "name", "item_type", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["edititem_type", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditsub_category", "placeholder", "Sub Category", "disabled", "disabled", "name", "sub_category", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["editsub_category", "ngModel"], ["floatLabel", "auto", "appearance", "standard", "color", "primary", 1, "w-100"], ["type", "text", "matInput", "", "id", "txtEditSupplier", "placeholder", "supplier", "name", "supplier", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editSupplier", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditpo_number", "placeholder", "PO Number", "name", "po_number", "minlength", "3", "maxlength", "30", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpo_number", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditpr_number", "placeholder", "PR Number", "name", "pr_number", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpr_number", "ngModel"], ["type", "text", "matInput", "", "id", "txtqty_order", "placeholder", "Quantity Ordered", "name", "qty_order", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editqty_order", "ngModel", "QtyOrdered", ""], ["type", "text", "matInput", "", "id", "txtEditmfg_date", "readonly", "", "name", "mfg_date", "readonly", "readonly", 3, "matDatepicker", "max", "ngModel", "ngClass", "ngModelChange"], ["editmfg_date", "ngModel"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["startView", "month"], ["dobDatepicker_mfg", ""], ["type", "text", "matInput", "", "id", "txtexpected_delivery", "placeholder", "Expected Delivery", "name", "expected_delivery", "required", "required", "maxlength", "9", "c", "", 3, "ngModel", "ngClass", "ngModelChange", "keypress", "keyup"], ["editexpected_delivery", "ngModel", "ExpectedDeliveryActual", ""], ["type", "text", "matInput", "", "id", "txtactual_remaining_receiving", "name", "actual_remaining_receiving", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editactual_remaining_receiving", "ngModel", "ActualRemainingReceiving", ""], [1, "hideObject"], ["type", "text", "id", "Allowable_Percentage_id"], ["TotalAllowablePercentage", ""], [1, "form-group", "row", "hideObject"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], [1, "col-sm-4"], ["type", "checkbox", "id", "chkEditActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline", "hideObject"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["type", "text", "matInput", "", "id", "txtpo_date", "placeholder", "PO Date", "name", "po_date", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpo_date", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditipr_date", "placeholder", "PR Date", "name", "pr_date", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpr_date", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditqty_uom", "placeholder", "Unit Of Measure", "name", "qty_uom", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editqty_uom", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditexpiration_date", "readonly", "", "name", "expiration_date", 3, "matDatepicker", "min", "ngModel", "ngClass", "ngModelChange", "dateChange"], ["editexpiration_date", "ngModel", "ExpiryDateChild", ""], ["align", "end", 3, "value", 4, "ngFor", "ngForOf"], ["matDatepickerToggleIcon", "", "id", "select_expiry"], ["dobDatepicker", ""], ["type", "text", "matInput", "", "id", "actual_delivery_output", "placeholder", "Quantity Actual Delivered", "required", "required", "name", "actual_delivery", "maxlength", "9", "autocomplete", "off", 3, "ngModel", "ngClass", "ngModelChange", "keypress", "keyup"], ["editactual_delivery", "ngModel", "ActualDeliveryChild", ""], ["type", "text", "matInput", "", "id", "txtEditreceived_by_QA", "disabled", "disabled", 3, "value"], ["received_by", ""], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocationID", "ngModel"], ["mat-fab", "", "color", "warn", "id", "AddRejectBtn", 3, "click"], ["mat-fab", "", "color", "primary", "id", "remove-remarks-button", 1, "ml-80", 3, "click"], ["id", "rejectionrow1", 1, "form-group", "row"], ["appearance", "fill"], ["name", "status_of_reject_one", "id", "drpEditRejectStatusOne", 3, "ngModel", "selectionChange", "ngModelChange"], ["id", "rejectionrow2", 1, "form-group", "row"], ["name", "status_of_reject_two", "id", "drpEditRejectStatusTwo", 3, "ngModel", "ngModelChange", "selectionChange"], ["RejectedStatus2", ""], ["id", "rejectionrow32", 1, "form-group", "row"], ["rejectedStatusElementNo3", ""], ["name", "status_of_reject_three", "id", "drpEditRejectStatusThree", 3, "ngModel", "ngModelChange", "selectionChange"], ["id", "total-reject", 1, "form-group", "row"], ["type", "text", "matInput", "", "name", "total_of_reject_mat", "readonly", "readonly", 3, "ngModel", "ngModelChange"], ["totalofReject", ""], ["id", "rejectionrow12", 1, "form-group", "row"], ["type", "text", "name", "count_of_reject_one", "matInput", "", "maxlength", "9", "id", "rejectRow1", 3, "ngModel", "ngClass", "keyup", "ngModelChange", "keypress"], ["rejectNo1", "", "editcount_of_reject_one", "ngModel"], ["id", "rejectionrow22", 1, "form-group", "row"], ["type", "text", "name", "count_of_reject_two", "matInput", "", "maxlength", "9", "id", "rejectRow2", 3, "ngModel", "ngClass", "keyup", "ngModelChange", "keypress"], ["rejectNo2", "", "editcount_of_reject_two", "ngModel"], ["id", "rejectionrow3", 1, "form-group", "row"], ["type", "text", "name", "count_of_reject_three", "matInput", "", "maxlength", "9", "id", "rejectRow3", 3, "ngModel", "ngClass", "keyup", "ngModelChange", "keypress"], ["rejectNo3", "", "editcount_of_reject_three", "ngModel"], ["id", "total-confirm-reject", 1, "form-group", "row"], ["type", "text", "matInput", "", "name", "total_of_reject_mat", 3, "ngModel", "ngModelChange", "keyup", "keypress"], ["confirmReject", ""], [1, "text-danger", "rejectIsnotMactchSpanTagclass"], ["rejectIsnotMactchSpanTag", ""], [1, "table", "table-bordered"], ["scope", "col"], ["scope", "row"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_delivery_van_desc", "required", "", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_delivery_van_desc", "ngModel"], ["name", "a_compliance", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["editCompliance", "ngModel"], ["value", "Compliance", 3, "click"], ["value", "Non-Compliance", 3, "click"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks", "ngModel", "remarksSectionA1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_cooling_system_desc", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_cooling_system_desc", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks", "ngModel", "remarksSectionA2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_inner_walls_desc", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_inner_walls_desc", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks", "ngModel", "remarksSectionA3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_plastic_curtains_desc", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_plastic_curtains_desc", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks", "ngModel", "remarksSectionA4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_thereno_pest_desc", "readonly", "", 1, "text-area-main5", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_thereno_pest_desc", "ngModel"], ["id", "rbEditCompliance", "name", "e_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_remarks", "ngModel", "remarksSectionA5", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_clean_company_dos", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_clean_company_dos", "ngModel"], ["id", "rbEditCompliance", "name", "a_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_dos", "ngModel", "remarksSectionB1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_delivery_staff_symptoms_dos", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_delivery_staff_symptoms_dos", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_dos", "ngModel", "remarksSectionB2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_inner_walls_clean_dos", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_inner_walls_clean_dos", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_dos", "ngModel", "remarksSectionB3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_plastic_curtains_dos", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_plastic_curtains_dos", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_dos", "ngModel", "remarksSectionB4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_no_accessories_dos", "readonly", "", 1, "text-area-main5", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_no_accessories_dos", "ngModel"], ["id", "rbEditCompliance", "name", "e_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_remarks_dos", "ngModel", "remarksSectionB5", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_no_pests_sightings_dos", "readonly", "", 1, "text-area-main5", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_no_pests_sightings_dos", "ngModel"], ["id", "rbEditCompliance", "name", "f_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_remarks_dos", "ngModel", "remarksSectionB6", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_pallet_crates_tres", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_pallet_crates_tres", "ngModel"], ["name", "a_compliance_tres", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_tres", "ngModel", "remarksSectionC1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_product_contamination_tres", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_product_contamination_tres", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_tres", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_tres", "ngModel", "remarksSectionC2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_uncessary_items_tres", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_uncessary_items_tres", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_tres", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_tres", "ngModel", "remarksSectionC3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_products_cover_tres", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_products_cover_tres", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_tres", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_tres", "ngModel", "remarksSectionC4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_certificate_coa_kwatro_desc", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_certificate_coa_kwatro_desc", "ngModel"], ["name", "a_compliance_kwatro", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_kwatro", "ngModel", "remarksSectionD1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_po_kwatro_desc", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_po_kwatro_desc", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_kwatro", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_kwatro", "ngModel", "remarksSectionD2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_msds_kwatro_desc", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_msds_kwatro_desc", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_kwatro", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_kwatro", "ngModel", "remarksSectionD3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_food_grade_desc", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_food_grade_desc", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_kwatro", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_kwatro", "ngModel", "remarksSectionD4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_qty_received_singko_singko", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_qty_received_singko_singko", "ngModel"], ["name", "a_compliance_singko", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_singko", "ngModel", "remarksSectionE1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_mfg_date_desc_singko", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_mfg_date_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_singko", "ngModel", "remarksSectionE2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_expirydate_desc_singko", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_expirydate_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_singko", "ngModel", "remarksSectionE3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_packaging_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_packaging_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_singko", "ngModel", "remarksSectionE4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_no_contaminants_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_no_contaminants_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "e_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_remarks_singko", "ngModel", "remarksSectionE5", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_qtyrejected_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_qtyrejected_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "f_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_remarks_singko", "ngModel", "remarksSectionE6", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "g_rejected_reason_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editg_rejected_reason_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "g_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "g_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editg_remarks_singko", "ngModel", "remarksSectionE7", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "h_lab_sample_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["edith_lab_sample_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "h_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "h_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edith_remarks_singko", "ngModel", "remarksSectionE8", ""], ["mat-stroked-button", "", "color", "primary", 1, "mr-2", 3, "click"], ["mat-stroked-button", "", "color", "warn", "data-dismiss", "modal", "id", "editFormCancel"], ["role", "dialog", "id", "deleteModal", 1, "modal"], ["type", "text", "matInput", "", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "id", "txtDeleteProjectName", "placeholder", "Description", "name", "item_description", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "accent", "data-dismiss", "modal", 1, "mr-2"], ["mat-stroked-button", "", "color", "warn", "data-dismiss", "modal", 3, "click"], ["role", "dialog", "id", "CancelledTransactionModal", 1, "modal"], ["PONumber", ""], ["appearance", "fill", 1, "w-100"], ["name", "cancelled_reason", "required", "", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], ["mat-icon-button", "", "color", "black", "data-toggle", "modal", "data-target", "#editModal", "data-backdrop", "false", "title", "Edit", "data-keyboard", "false", 3, "click"], ["mat-icon-button", "", "color", "warn", "data-toggle", "modal", "data-target", "#CancelledTransactionModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"], [3, "value"], ["type", "text", 3, "value"], ["ActiveAllowablePercentage", ""], ["ActiveNearlyExpirySetpoint", ""], ["align", "end", 3, "value"], ["RejectedStatus1", ""], ["RejectedStatus3", ""], ["type", "text", "matInput", "", "id", "ActivePartialReceiving", "disabled", "disabled", 3, "value"], ["ActivePartialReceiving", ""]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "QC RM PO RECEIVING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProjectsComponent_i_12_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.searchBy = $event; })("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_19_listener($event) { return ctx.HideSearchBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "PO Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Search by");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Choose a Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.searchText = $event; })("keyup", function ProjectsComponent_Template_input_keyup_34_listener($event) { return ctx.onSearchTextKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Search description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "PO\u00A0No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Item\u00A0Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Supplier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Qty.\u00A0Ordered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Remaining ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, ProjectsComponent_tr_59_Template, 21, 15, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](60, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_64_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, ProjectsComponent_ng_container_67_Template, 2, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ProjectsComponent_ng_container_68_Template, 17, 16, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_69_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "form", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "New Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_88_listener($event) { return ctx.newProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, ProjectsComponent_span_91_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, ProjectsComponent_span_92_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, ProjectsComponent_span_93_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Is Activated");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_98_listener($event) { return ctx.newProject.is_activated = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_105_listener($event) { return ctx.newProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](107, ProjectsComponent_span_107_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, ProjectsComponent_span_108_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, ProjectsComponent_span_109_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Date of Starts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_114_listener($event) { return ctx.newProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](116, ProjectsComponent_span_116_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "input", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_121_listener($event) { return ctx.newProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, ProjectsComponent_span_123_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, ProjectsComponent_span_124_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_130_listener($event) { return ctx.newProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "input", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_138_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "input", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_143_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, ProjectsComponent_span_147_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "select", 67, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_152_listener($event) { return ctx.newProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, ProjectsComponent_option_156_Template, 2, 2, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](157, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](158, ProjectsComponent_span_158_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](159, ProjectsComponent_span_159_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_163_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "form", 28, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "RECEIVING CHECKLIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "RAW MATERIAL INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "input", 80, 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_182_listener($event) { return ctx.editProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "Transaction ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, "format_list_numbered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](188, ProjectsComponent_span_188_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](189, ProjectsComponent_span_189_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](190, ProjectsComponent_span_190_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "input", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_192_listener($event) { return ctx.editProject.item_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](196, ProjectsComponent_span_196_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](197, ProjectsComponent_span_197_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](198, ProjectsComponent_span_198_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "input", 84, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_200_listener($event) { return ctx.editProject.item_class = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](203, "Item Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "input", 86, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_205_listener($event) { return ctx.editProject.major_category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208, "Major Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](211, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](212, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, "Receiving Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](216, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](217, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "input", 91, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_219_listener($event) { return ctx.editProject.item_description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](224, ProjectsComponent_span_224_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](225, ProjectsComponent_span_225_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](226, ProjectsComponent_span_226_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](228, "input", 93, 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_228_listener($event) { return ctx.editProject.item_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](231, "Item Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](232, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "input", 95, 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_233_listener($event) { return ctx.editProject.sub_category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](236, "Sub Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](238, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](240, "input", 98, 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_240_listener($event) { return ctx.editProject.supplier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](243, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](244, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](245, "RECEIVING INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](246, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](249, "input", 100, 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_249_listener($event) { return ctx.editProject.po_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](252, "Po Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "input", 102, 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_254_listener($event) { return ctx.editProject.pr_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](257, "PR Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](259, "input", 104, 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_259_listener($event) { return ctx.editProject.qty_order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](263, "Quantity Ordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](264, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](266, "MFTG. Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](267, "input", 106, 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_267_listener($event) { return ctx.editProject.mfg_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](269, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](270, "Product Mftg Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](271, "mat-datepicker-toggle", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](272, "mat-icon", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](273, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](274, "mat-datepicker", 110, 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](277, "input", 112, 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_277_listener($event) { return ctx.editProject.expected_delivery = $event; })("keypress", function ProjectsComponent_Template_input_keypress_277_listener($event) { return ctx.decimalFilter($event); })("keyup", function ProjectsComponent_Template_input_keyup_277_listener($event) { return ctx.AllowablePercentageComputation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](280, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](281, "Expected Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](282, ProjectsComponent_span_282_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](283, ProjectsComponent_span_283_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](284, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](285, "input", 114, 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_285_listener($event) { return ctx.editProject.actual_remaining_receiving = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](288, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](289, "Remaining Needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](290, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](291, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](292, " Note :Active Allowable Percentage BUJE Singian");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](293, ProjectsComponent_p_293_Template, 3, 2, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](294, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](295, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](297, "GrandTotal of Allowable Percentage Haha");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](298, "input", 117, 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](300, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](301, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](302, "Note : Active Expiration Days Set Point Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](303, ProjectsComponent_p_303_Template, 3, 2, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](304, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](305, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](306, "label", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](307, "Date of Start exx");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](308, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](309, "input", 121, 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_309_listener($event) { return ctx.editProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](311, ProjectsComponent_span_311_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](312, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](313, "label", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](314, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](315, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](316, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](317, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_317_listener($event) { return ctx.editProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "label", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](319, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](320, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](321, "label", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](322, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](323, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](324, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](325, "input", 128, 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_325_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](327, "label", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](328, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](329, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](330, "input", 131, 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_330_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](332, "label", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](333, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](334, ProjectsComponent_span_334_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](335, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](336, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](337, "input", 134, 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_337_listener($event) { return ctx.editProject.po_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](339, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](340, "Po Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](341, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](342, "input", 136, 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_342_listener($event) { return ctx.editProject.pr_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](344, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](345, "PR Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](346, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](347, "input", 138, 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_347_listener($event) { return ctx.editProject.qty_uom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](349, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](350, "Unit Of Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](351, ProjectsComponent_span_351_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](352, ProjectsComponent_span_352_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](353, ProjectsComponent_span_353_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](354, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](355, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](356, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](357, "input", 140, 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_357_listener($event) { return ctx.editProject.expiration_date = $event; })("dateChange", function ProjectsComponent_Template_input_dateChange_357_listener($event) { return ctx.selectExpiryDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](360, ProjectsComponent_mat_hint_360_Template, 2, 2, "mat-hint", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](361, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](362, "mat-datepicker-toggle", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](363, "mat-icon", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](364, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](365, "mat-datepicker", 110, 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](367, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](368, "input", 145, 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_368_listener($event) { return ctx.editProject.actual_delivery = $event; })("keypress", function ProjectsComponent_Template_input_keypress_368_listener($event) { return ctx.decimalFilter($event); })("keyup", function ProjectsComponent_Template_input_keyup_368_listener($event) { return ctx.ActualDeliveryComputation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](371, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](372, "QTY. Actual Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](373, ProjectsComponent_mat_hint_373_Template, 2, 2, "mat-hint", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](374, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](375, ProjectsComponent_span_375_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](376, ProjectsComponent_span_376_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](377, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](378, "input", 147, 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](380, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](381, "Assigned Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](382, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](383, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](384, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](385, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](386, "label", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](387, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](388, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](389, "input", 150, 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_389_listener($event) { return ctx.editProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](391, ProjectsComponent_span_391_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](392, ProjectsComponent_span_392_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](393, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](394, "label", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](395, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](396, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](397, "select", 153, 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_397_listener($event) { return ctx.editProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](399, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](400, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](401, ProjectsComponent_option_401_Template, 2, 2, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](402, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](403, ProjectsComponent_span_403_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](404, ProjectsComponent_span_404_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](405, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](406, "REJECTION INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](407, "button", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_407_listener($event) { return ctx.onAddAdditionalRejectRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](408, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](409, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_409_listener($event) { return ctx.onRemoveAdditionalRejectRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](410, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](411, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](412, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](413, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](414, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](415, "mat-form-field", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](416, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](417, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](418, "mat-select", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_418_listener($event) { return ctx.validateRejectedStatus($event); })("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_418_listener($event) { return ctx.editProject.status_of_reject_one = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](419, ProjectsComponent_mat_option_419_Template, 3, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](420, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](421, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](422, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](423, "mat-form-field", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](424, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](425, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](426, "mat-select", 161, 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_426_listener($event) { return ctx.editProject.status_of_reject_two = $event; })("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_426_listener($event) { return ctx.validateRejectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](428, ProjectsComponent_mat_option_428_Template, 2, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](429, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](430, "div", 163, 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](432, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](433, "mat-form-field", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](434, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](435, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](436, "mat-select", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_436_listener($event) { return ctx.editProject.status_of_reject_three = $event; })("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_436_listener($event) { return ctx.validateRejectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](437, ProjectsComponent_mat_option_437_Template, 3, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](438, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](439, "div", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](440, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](441, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](442, "input", 167, 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_442_listener($event) { return ctx.editProject.total_of_reject_mat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](444, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](445, "Total No. of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](446, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](447, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](448, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](449, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](450, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](451, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](452, "input", 170, 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ProjectsComponent_Template_input_keyup_452_listener($event) { return ctx.onChangeEventReject1($event); })("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_452_listener($event) { return ctx.editProject.count_of_reject_one = $event; })("keypress", function ProjectsComponent_Template_input_keypress_452_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](455, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](456, "No.of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](457, ProjectsComponent_span_457_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](458, "div", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](459, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](460, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](461, "input", 173, 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ProjectsComponent_Template_input_keyup_461_listener($event) { return ctx.onChangeEventReject2($event); })("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_461_listener($event) { return ctx.editProject.count_of_reject_two = $event; })("keypress", function ProjectsComponent_Template_input_keypress_461_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](464, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](465, "No.of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](466, "div", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](467, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](468, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](469, "input", 176, 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ProjectsComponent_Template_input_keyup_469_listener($event) { return ctx.onChangeEventReject3($event); })("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_469_listener($event) { return ctx.editProject.count_of_reject_three = $event; })("keypress", function ProjectsComponent_Template_input_keypress_469_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](472, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](473, "No.of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](474, "div", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](475, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](476, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](477, "input", 179, 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_477_listener($event) { return ctx.editProject.total_of_reject_mat = $event; })("keyup", function ProjectsComponent_Template_input_keyup_477_listener($event) { return ctx.ConfirmNoofReject($event); })("keypress", function ProjectsComponent_Template_input_keypress_477_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](479, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](480, "Confirm No. of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](481, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](482, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](483, "span", 181, 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](485, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](486, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](487, "table", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](488, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](489, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](490, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](491, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](492, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](493, "Delivery Van Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](494, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](495, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](496, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](497, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](498, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](499, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](500, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](501, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](503, "textarea", 186, 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_503_listener($event) { return ctx.editProject.a_delivery_van_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](505, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](507, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](508, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](509, "mat-radio-group", 188, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_509_listener($event) { return ctx.editProject.a_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](511, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_511_listener() { return ctx.ComplianceSectionA1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](512, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](513, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_513_listener() { return ctx.NoneComplianceSectionA1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](514, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](515, ProjectsComponent_span_515_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](516, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](517, "textarea", 192, 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_517_listener($event) { return ctx.editProject.a_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](520, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](521, ProjectsComponent_span_521_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](522, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](523, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](524, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](526, "textarea", 194, 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_526_listener($event) { return ctx.editProject.b_cooling_system_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](528, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](530, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](531, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](532, "mat-radio-group", 196, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_532_listener($event) { return ctx.editProject.b_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](534, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_534_listener() { return ctx.ComplianceSectionA2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](535, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](536, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_536_listener() { return ctx.NoneComplianceSectionA2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](537, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](538, ProjectsComponent_span_538_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](540, "textarea", 197, 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_540_listener($event) { return ctx.editProject.b_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](543, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](544, ProjectsComponent_span_544_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](545, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](546, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](547, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](549, "textarea", 199, 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_549_listener($event) { return ctx.editProject.c_inner_walls_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](552, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](553, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](554, "mat-radio-group", 201, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_554_listener($event) { return ctx.editProject.c_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](556, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_556_listener() { return ctx.ComplianceSectionA3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](557, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](558, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_558_listener() { return ctx.NoneComplianceSectionA3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](559, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](560, ProjectsComponent_span_560_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](562, "textarea", 202, 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_562_listener($event) { return ctx.editProject.c_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](565, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](566, ProjectsComponent_span_566_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](567, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](568, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](569, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](571, "textarea", 204, 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_571_listener($event) { return ctx.editProject.d_plastic_curtains_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](573, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](575, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](576, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](577, "mat-radio-group", 206, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_577_listener($event) { return ctx.editProject.d_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](579, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_579_listener() { return ctx.ComplianceSectionA4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](580, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](581, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_581_listener() { return ctx.NoneComplianceSectionA4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](582, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](583, ProjectsComponent_span_583_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](585, "textarea", 207, 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_585_listener($event) { return ctx.editProject.d_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](588, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](589, ProjectsComponent_span_589_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](590, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](591, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](592, "e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](593, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](594, "textarea", 209, 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_594_listener($event) { return ctx.editProject.e_thereno_pest_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](596, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](598, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](599, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](600, "mat-radio-group", 211, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_600_listener($event) { return ctx.editProject.e_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](602, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_602_listener() { return ctx.ComplianceSectionA5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](603, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](604, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_604_listener() { return ctx.NoneComplianceSectionA5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](605, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](606, ProjectsComponent_span_606_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](607, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](608, "textarea", 212, 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_608_listener($event) { return ctx.editProject.e_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](611, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](612, ProjectsComponent_span_612_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](613, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](614, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](615, "table", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](616, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](617, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](618, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](619, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](620, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](621, "||. Hygine Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](622, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](623, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](624, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](625, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](626, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](627, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](628, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](629, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](630, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](631, "textarea", 214, 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_631_listener($event) { return ctx.editProject.a_clean_company_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](633, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](634, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](635, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](636, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](637, "mat-radio-group", 216, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_637_listener($event) { return ctx.editProject.a_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](639, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_639_listener() { return ctx.ComplianceSectionB1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](640, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](641, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_641_listener() { return ctx.NoneComplianceSectionB1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](642, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](643, ProjectsComponent_span_643_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](645, "textarea", 217, 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_645_listener($event) { return ctx.editProject.a_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](648, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](649, ProjectsComponent_span_649_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](650, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](651, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](652, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](653, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](654, "textarea", 219, 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_654_listener($event) { return ctx.editProject.b_delivery_staff_symptoms_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](656, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](657, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](658, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](659, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](660, "mat-radio-group", 221, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_660_listener($event) { return ctx.editProject.b_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](662, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_662_listener() { return ctx.ComplianceSectionB2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](663, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](664, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_664_listener() { return ctx.NoneComplianceSectionB2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](665, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](666, ProjectsComponent_span_666_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](667, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](668, "textarea", 222, 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_668_listener($event) { return ctx.editProject.b_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](671, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](672, ProjectsComponent_span_672_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](673, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](674, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](675, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](677, "textarea", 224, 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_677_listener($event) { return ctx.editProject.c_inner_walls_clean_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](679, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](680, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](681, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](682, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](683, "mat-radio-group", 226, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_683_listener($event) { return ctx.editProject.c_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](685, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_685_listener() { return ctx.ComplianceSectionB3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](686, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](687, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_687_listener() { return ctx.NoneComplianceSectionB3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](688, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](689, ProjectsComponent_span_689_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](690, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](691, "textarea", 227, 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_691_listener($event) { return ctx.editProject.c_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](694, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](695, ProjectsComponent_span_695_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](696, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](697, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](698, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](700, "textarea", 229, 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_700_listener($event) { return ctx.editProject.d_plastic_curtains_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](702, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](704, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](705, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](706, "mat-radio-group", 231, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_706_listener($event) { return ctx.editProject.d_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](708, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_708_listener() { return ctx.ComplianceSectionB4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](709, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](710, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_710_listener() { return ctx.NoneComplianceSectionB4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](711, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](712, ProjectsComponent_span_712_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](713, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](714, "textarea", 232, 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_714_listener($event) { return ctx.editProject.d_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](717, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](718, ProjectsComponent_span_718_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](719, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](720, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](721, "e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](722, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](723, "textarea", 234, 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_723_listener($event) { return ctx.editProject.e_no_accessories_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](725, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](726, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](727, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](728, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](729, "mat-radio-group", 236, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_729_listener($event) { return ctx.editProject.e_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](731, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_731_listener() { return ctx.ComplianceSectionB5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](732, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](733, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_733_listener() { return ctx.NoneComplianceSectionB5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](734, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](735, ProjectsComponent_span_735_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](736, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](737, "textarea", 237, 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_737_listener($event) { return ctx.editProject.e_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](740, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](741, ProjectsComponent_span_741_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](742, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](743, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](744, "f.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](745, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](746, "textarea", 239, 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_746_listener($event) { return ctx.editProject.f_no_pests_sightings_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](748, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](749, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](750, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](751, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](752, "mat-radio-group", 241, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_752_listener($event) { return ctx.editProject.f_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](754, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_754_listener() { return ctx.ComplianceSectionB6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](755, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](756, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_756_listener() { return ctx.NoneComplianceSectionB6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](757, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](758, ProjectsComponent_span_758_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](759, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](760, "textarea", 242, 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_760_listener($event) { return ctx.editProject.f_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](763, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](764, ProjectsComponent_span_764_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](765, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](766, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](767, "table", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](768, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](769, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](770, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](771, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](772, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](773, "|||. Food Handling");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](774, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](775, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](776, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](777, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](778, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](779, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](780, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](781, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](782, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](783, "textarea", 244, 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_783_listener($event) { return ctx.editProject.a_pallet_crates_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](785, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](786, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](787, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](788, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](789, "mat-radio-group", 246, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_789_listener($event) { return ctx.editProject.a_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](791, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_791_listener() { return ctx.ComplianceSectionC1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](792, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](793, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_793_listener() { return ctx.NoneComplianceSectionC1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](794, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](795, ProjectsComponent_span_795_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](796, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](797, "textarea", 247, 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_797_listener($event) { return ctx.editProject.a_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](800, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](801, ProjectsComponent_span_801_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](802, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](803, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](804, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](806, "textarea", 249, 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_806_listener($event) { return ctx.editProject.b_product_contamination_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](808, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](809, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](810, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](811, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](812, "mat-radio-group", 251, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_812_listener($event) { return ctx.editProject.b_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](814, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_814_listener() { return ctx.ComplianceSectionC2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](815, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](816, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_816_listener() { return ctx.NoneComplianceSectionC2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](817, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](818, ProjectsComponent_span_818_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](820, "textarea", 252, 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_820_listener($event) { return ctx.editProject.b_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](823, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](824, ProjectsComponent_span_824_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](825, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](826, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](827, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](828, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](829, "textarea", 254, 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_829_listener($event) { return ctx.editProject.c_uncessary_items_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](831, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](832, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](833, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](834, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](835, "mat-radio-group", 256, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_835_listener($event) { return ctx.editProject.c_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](837, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_837_listener() { return ctx.ComplianceSectionC3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](838, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](839, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_839_listener() { return ctx.NoneComplianceSectionC3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](840, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](841, ProjectsComponent_span_841_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](842, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](843, "textarea", 257, 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_843_listener($event) { return ctx.editProject.c_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](846, ProjectsComponent_span_846_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](847, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](848, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](849, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](850, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](851, "textarea", 259, 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_851_listener($event) { return ctx.editProject.d_products_cover_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](853, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](854, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](855, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](856, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](857, "mat-radio-group", 261, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_857_listener($event) { return ctx.editProject.d_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](859, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_859_listener() { return ctx.ComplianceSectionC4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](860, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](861, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_861_listener() { return ctx.NoneComplianceSectionC4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](862, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](863, ProjectsComponent_span_863_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](864, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](865, "textarea", 262, 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_865_listener($event) { return ctx.editProject.d_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](868, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](869, ProjectsComponent_span_869_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](870, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](871, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](872, "table", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](873, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](874, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](875, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](876, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](877, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](878, "|V. DOCUMENTATION REQUIREMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](879, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](880, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](881, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](882, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](883, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](884, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](885, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](886, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](887, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](888, "textarea", 264, 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_888_listener($event) { return ctx.editProject.a_certificate_coa_kwatro_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](890, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](891, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](892, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](893, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](894, "mat-radio-group", 266, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_894_listener($event) { return ctx.editProject.a_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](896, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_896_listener() { return ctx.ComplianceSectionD1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](897, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](898, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_898_listener() { return ctx.NoneComplianceSectionD1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](899, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](900, ProjectsComponent_span_900_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](901, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](902, "textarea", 267, 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_902_listener($event) { return ctx.editProject.a_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](905, ProjectsComponent_span_905_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](906, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](907, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](908, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](909, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](910, "textarea", 269, 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_910_listener($event) { return ctx.editProject.b_po_kwatro_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](912, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](913, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](914, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](915, "mat-radio-group", 271, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_915_listener($event) { return ctx.editProject.b_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](917, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_917_listener() { return ctx.ComplianceSectionD2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](918, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](919, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_919_listener() { return ctx.NoneComplianceSectionD2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](920, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](921, ProjectsComponent_span_921_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](922, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](923, "textarea", 272, 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_923_listener($event) { return ctx.editProject.b_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](926, ProjectsComponent_span_926_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](927, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](928, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](929, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](930, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](931, "textarea", 274, 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_931_listener($event) { return ctx.editProject.c_msds_kwatro_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](933, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](934, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](935, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](936, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](937, "mat-radio-group", 276, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_937_listener($event) { return ctx.editProject.c_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](939, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_939_listener() { return ctx.ComplianceSectionD3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](940, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](941, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_941_listener() { return ctx.NoneComplianceSectionD3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](942, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](943, ProjectsComponent_span_943_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](944, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](945, "textarea", 277, 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_945_listener($event) { return ctx.editProject.c_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](948, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](949, ProjectsComponent_span_949_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](950, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](951, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](952, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](953, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](954, "textarea", 279, 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_954_listener($event) { return ctx.editProject.d_food_grade_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](956, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](957, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](958, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](959, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](960, "mat-radio-group", 281, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_960_listener($event) { return ctx.editProject.d_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](962, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_962_listener() { return ctx.ComplianceSectionD4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](963, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](964, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_964_listener() { return ctx.NoneComplianceSectionD4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](965, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](966, ProjectsComponent_span_966_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](967, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](968, "textarea", 282, 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_968_listener($event) { return ctx.editProject.d_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](971, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](972, ProjectsComponent_span_972_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](973, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](974, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](975, "table", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](976, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](977, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](978, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](979, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](980, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](981, "V. DELIVERY PERSONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](982, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](983, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](984, "th", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](985, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](986, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](987, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](988, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](989, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](990, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](991, "textarea", 284, 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_991_listener($event) { return ctx.editProject.a_qty_received_singko_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](993, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](994, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](995, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](996, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](997, "mat-radio-group", 286, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_997_listener($event) { return ctx.editProject.a_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](999, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_999_listener() { return ctx.ComplianceSectionE1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1000, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1001, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1001_listener() { return ctx.NoneComplianceSectionE1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1002, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1003, ProjectsComponent_span_1003_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1004, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1005, "textarea", 287, 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1005_listener($event) { return ctx.editProject.a_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1008, ProjectsComponent_span_1008_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1009, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1010, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1011, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1012, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1013, "textarea", 289, 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1013_listener($event) { return ctx.editProject.b_mfg_date_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1015, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1016, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1017, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1018, "mat-radio-group", 291, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1018_listener($event) { return ctx.editProject.b_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1020, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1020_listener() { return ctx.ComplianceSectionE2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1021, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1022, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1022_listener() { return ctx.NoneComplianceSectionE2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1023, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1024, ProjectsComponent_span_1024_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1025, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1026, "textarea", 292, 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1026_listener($event) { return ctx.editProject.b_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1029, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1030, ProjectsComponent_span_1030_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1031, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1032, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1033, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1034, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1035, "textarea", 294, 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1035_listener($event) { return ctx.editProject.c_expirydate_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1037, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1038, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1039, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1040, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1041, "mat-radio-group", 296, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1041_listener($event) { return ctx.editProject.c_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1043, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1043_listener() { return ctx.ComplianceSectionE3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1044, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1045, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1045_listener() { return ctx.NoneComplianceSectionE3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1046, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1047, ProjectsComponent_span_1047_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1048, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1049, "textarea", 297, 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1049_listener($event) { return ctx.editProject.c_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1052, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1053, ProjectsComponent_span_1053_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1054, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1055, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1056, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1057, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1058, "textarea", 299, 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1058_listener($event) { return ctx.editProject.d_packaging_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1060, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1061, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1062, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1063, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1064, "mat-radio-group", 301, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1064_listener($event) { return ctx.editProject.d_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1066, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1066_listener() { return ctx.ComplianceSectionE4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1067, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1068, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1068_listener() { return ctx.NoneComplianceSectionE4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1069, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1070, ProjectsComponent_span_1070_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1071, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1072, "textarea", 302, 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1072_listener($event) { return ctx.editProject.d_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1075, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1076, ProjectsComponent_span_1076_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1077, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1078, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1079, "e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1080, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1081, "textarea", 304, 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1081_listener($event) { return ctx.editProject.e_no_contaminants_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1083, "  \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1084, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1085, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1086, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1087, "mat-radio-group", 306, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1087_listener($event) { return ctx.editProject.e_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1089, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1089_listener() { return ctx.ComplianceSectionE5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1090, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1091, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1091_listener() { return ctx.NoneComplianceSectionE5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1092, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1093, ProjectsComponent_span_1093_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1094, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1095, "textarea", 307, 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1095_listener($event) { return ctx.editProject.e_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1098, "  \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1099, ProjectsComponent_span_1099_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1101, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1102, "f.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1104, "textarea", 309, 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1104_listener($event) { return ctx.editProject.f_qtyrejected_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1106, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1108, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1110, "mat-radio-group", 311, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1110_listener($event) { return ctx.editProject.f_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1112, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1112_listener() { return ctx.ComplianceSectionE6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1113, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1114, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1114_listener() { return ctx.NoneComplianceSectionE6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1115, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1116, ProjectsComponent_span_1116_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1118, "textarea", 312, 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1118_listener($event) { return ctx.editProject.f_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1121, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1122, ProjectsComponent_span_1122_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1123, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1124, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1125, "g.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1127, "textarea", 314, 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1127_listener($event) { return ctx.editProject.g_rejected_reason_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1129, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1131, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1132, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1133, "mat-radio-group", 316, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1133_listener($event) { return ctx.editProject.g_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1135, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1135_listener() { return ctx.ComplianceSectionE7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1136, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1137, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1137_listener() { return ctx.NoneComplianceSectionE7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1138, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1139, ProjectsComponent_span_1139_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1141, "textarea", 317, 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1141_listener($event) { return ctx.editProject.g_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1144, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1145, ProjectsComponent_span_1145_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1147, "th", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1148, "h.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1150, "textarea", 319, 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1150_listener($event) { return ctx.editProject.h_lab_sample_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1152, "      \n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1154, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1155, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1156, "mat-radio-group", 321, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1156_listener($event) { return ctx.editProject.h_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1158, "mat-radio-button", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1158_listener() { return ctx.ComplianceSectionE8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1159, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1160, "mat-radio-button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1160_listener() { return ctx.NoneComplianceSectionE8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1161, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1162, ProjectsComponent_span_1162_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1164, "textarea", 322, 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1164_listener($event) { return ctx.editProject.h_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1167, "      \n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1168, ProjectsComponent_span_1168_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1169);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1170, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1171, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1172, "button", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_1172_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1173, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1174, "button", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1175, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1176, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1177, "div", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1178, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1179, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1180, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1181, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1182, "Delete PO Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1183, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1184, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1185, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1186, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1187, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1188, "input", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1188_listener($event) { return ctx.deleteProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1189, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1190, "Transaction ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1191, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1192, "Main id of the Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1193, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1194, "format_list_numbered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1195, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1196, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1197, "input", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1197_listener($event) { return ctx.deleteProject.item_description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1198, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1199, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1200, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1201, "The subject of the transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1202, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1203, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1204, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1205, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1206, "button", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1207, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1208, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1209, "keyboard_return");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1210, "button", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_1210_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1211, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1212, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1213, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1214, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1215, "div", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1216, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1217, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1218, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1219, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1220, "Cancelled PO Receiving");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1221, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1223, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1224, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1225, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1226, "input", 327, 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1226_listener($event) { return ctx.editProject.po_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1228, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1229, "PO Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1230, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1231, "input", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1231_listener($event) { return ctx.editProject.item_description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1232, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1233, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1234, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1235, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1236, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1237, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1238, "mat-form-field", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1239, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1240, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1241, "mat-select", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_1241_listener($event) { return ctx.editProject.cancelled_reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1242, ProjectsComponent_mat_option_1242_Template, 2, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1243, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1244, ProjectsComponent_p_1244_Template, 13, 3, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1245, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1246, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1247, "button", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_1247_listener() { return ctx.CancelledPoDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1248, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1249, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1250, "toggle_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](73);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](89);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](99);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](106);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](115);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](122);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](139);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](153);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](166);
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](183);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](193);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](220);
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](241);
        const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](260);
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](268);
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](275);
        const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](278);
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](286);
        const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](310);
        const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](326);
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](348);
        const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](358);
        const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](366);
        const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](369);
        const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](390);
        const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](398);
        const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](454);
        const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](463);
        const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](471);
        const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](504);
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](510);
        const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](518);
        const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](527);
        const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](541);
        const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](550);
        const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](563);
        const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](572);
        const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](586);
        const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](595);
        const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](609);
        const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](632);
        const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](646);
        const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](655);
        const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](669);
        const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](678);
        const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](692);
        const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](701);
        const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](715);
        const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](724);
        const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](738);
        const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](747);
        const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](761);
        const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](784);
        const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](798);
        const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](807);
        const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](821);
        const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](830);
        const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](844);
        const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](852);
        const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](866);
        const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](889);
        const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](903);
        const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](911);
        const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](924);
        const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](932);
        const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](946);
        const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](955);
        const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](969);
        const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](992);
        const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1006);
        const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1014);
        const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1027);
        const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1036);
        const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1050);
        const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1059);
        const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1073);
        const _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1082);
        const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1096);
        const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1105);
        const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1119);
        const _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1128);
        const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1142);
        const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1151);
        const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1165);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 323, ctx.totalPoRowCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](60, 325, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](61, 329, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](360, _c55, _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted), _r5.valid && (_r5.dirty || _r5.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted) && (_r5.errors == null ? null : _r5.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted) && (_r5.errors == null ? null : _r5.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted) && (_r5.errors == null ? null : _r5.errors.uniqueProjectID));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.is_activated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](363, _c55, _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted), _r12.valid && (_r10.dirty || _r12.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted) && (_r12.errors == null ? null : _r12.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted) && (_r12.errors == null ? null : _r12.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted) && (_r12.errors == null ? null : _r12.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](366, _c55, _r16.invalid && (_r16.dirty || _r16.touched || _r4.submitted), _r16.valid && (_r16.dirty || _r16.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r16.invalid && (_r16.dirty || _r16.touched || _r4.submitted) && (_r16.errors == null ? null : _r16.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](369, _c55, _r18.invalid && (_r18.dirty || _r18.touched || _r4.submitted), _r18.valid && (_r18.dirty || _r18.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r18.invalid && (_r18.dirty || _r18.touched || _r4.submitted) && (_r18.errors == null ? null : _r18.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r18.invalid && (_r18.dirty || _r18.touched || _r4.submitted) && (_r18.errors == null ? null : _r18.errors.divisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r21.invalid && (_r21.dirty || _r21.touched || _r4.submitted) && (_r21.errors == null ? null : _r21.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](372, _c55, _r24.invalid && (_r24.dirty || _r24.touched || _r4.submitted), _r24.valid && (_r24.dirty || _r24.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](157, 333, ctx.clientLocations));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r24.invalid && (_r24.dirty || _r24.touched || _r4.submitted) && (_r24.errors == null ? null : _r24.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r4.submitted) && (_r4.errors == null ? null : _r4.errors.clientLocationStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](375, _c55, _r29.invalid && (_r29.dirty || _r29.touched || _r4.submitted), _r29.valid && (_r29.dirty || _r29.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r28.submitted) && (_r29.errors == null ? null : _r29.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r28.submitted) && (_r29.errors == null ? null : _r29.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r28.submitted) && (_r29.errors == null ? null : _r29.errors.uniqueProjectID));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_code)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](378, _c55, _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted), _r33.valid && (_r33.dirty || _r33.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted) && (_r33.errors == null ? null : _r33.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted) && (_r33.errors == null ? null : _r33.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted) && (_r33.errors == null ? null : _r33.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.major_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](212, 335, ctx.ToDay, "M/d/y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_description)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](381, _c55, _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted), _r39.valid && (_r39.dirty || _r39.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted) && (_r39.errors == null ? null : _r39.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted) && (_r39.errors == null ? null : _r39.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted) && (_r39.errors == null ? null : _r39.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.sub_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.supplier)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](384, _c55, _r46.invalid && (_r46.dirty || _r46.touched || _r28.submitted), _r46.valid && (_r46.dirty || _r46.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.po_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.pr_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.qty_order)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](387, _c55, _r49.invalid && (_r49.dirty || _r49.touched || _r28.submitted), _r49.valid && (_r49.dirty || _r49.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r52)("max", ctx.maxDate)("ngModel", ctx.editProject.mfg_date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](390, _c55, _r51.invalid && (_r51.dirty || _r51.touched || _r28.submitted), _r51.valid && (_r51.dirty || _r51.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.expected_delivery)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](393, _c55, _r53.invalid && (_r53.dirty || _r53.touched || _r28.submitted), _r53.valid && (_r53 || _r53.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r53.invalid && (_r53.dirty || _r53.touched || _r28.submitted) && (_r53.errors == null ? null : _r53.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r53.invalid && (_r53.dirty || _r53.touched || _r28.submitted) && (_r53.errors == null ? null : _r53.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.actual_remaining_receiving)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](396, _c55, _r57.invalid && (_r57.dirty || _r57.touched || _r28.submitted), _r57.valid && (_r57.dirty || _r57.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](294, 338, ctx.AllowablePercentages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](304, 340, ctx.AllowableNearlyExpiryDays));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](399, _c55, _r62.invalid && (_r62.dirty || _r62.touched || _r28.submitted), _r62.valid && (_r62.dirty || _r62.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r62.invalid && _r28.submitted && (_r62.errors == null ? null : _r62.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r64.invalid && (_r64.dirty || _r64.touched || _r28.submitted) && (_r64.errors == null ? null : _r64.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.po_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.pr_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.qty_uom)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](402, _c55, _r69.invalid && (_r69.dirty || _r69.touched || _r28.submitted), _r69.valid && (_r69.dirty || _r69.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r69.invalid && (_r69.dirty || _r69.touched || _r28.submitted) && (_r69.errors == null ? null : _r69.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r69.invalid && (_r69.dirty || _r69.touched || _r28.submitted) && (_r69.errors == null ? null : _r69.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r69.invalid && (_r69.dirty || _r69.touched || _r28.submitted) && (_r69.errors == null ? null : _r69.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r76)("min", ctx.minDate)("ngModel", ctx.editProject.expiration_date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](405, _c55, _r73.invalid && (_r73.dirty || _r73.touched || _r28.submitted), _r73.valid && (_r73.dirty || _r73.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](361, 342, ctx.AllowableNearlyExpiryDays));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.actual_delivery)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](408, _c55, _r77.invalid && (_r77.dirty || _r77.touched || _r28.submitted), _r77.valid && (_r77.dirty || _r77.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](374, 344, ctx.AllowablePercentages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r77.invalid && (_r77.dirty || _r77.touched || _r28.submitted) && (_r77.errors == null ? null : _r77.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r77.invalid && (_r77.dirty || _r77.touched || _r28.submitted) && (_r77.errors == null ? null : _r77.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("value", " ", ctx.loginService.currentUserName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](411, _c55, _r83.invalid && (_r83.dirty || _r83.touched || _r28.submitted), _r83.valid && (_r83.dirty || _r83.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r83.invalid && (_r83.dirty || _r83.touched || _r28.submitted) && (_r83.errors == null ? null : _r83.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r83.invalid && (_r83.dirty || _r83.touched || _r28.submitted) && (_r83.errors == null ? null : _r83.errors.divisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](414, _c55, _r86.invalid && (_r86.dirty || _r86.touched || _r28.submitted), _r86.valid && (_r86.dirty || _r86.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](402, 346, ctx.clientLocations));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r86.invalid && (_r86.dirty || _r86.touched || _r28.submitted) && (_r86.errors == null ? null : _r86.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r28.invalid && (_r28.dirty || _r28.touched || _r28.submitted) && (_r28.errors == null ? null : _r28.errors.clientLocationStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status_of_reject_one);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](420, 348, ctx.RejectStatuses));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status_of_reject_two);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](429, 350, ctx.RejectStatuses));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status_of_reject_three);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](438, 352, ctx.RejectStatuses));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.total_of_reject_mat);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.count_of_reject_one)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](417, _c55, _r97.invalid && (_r97.dirty || _r97.touched || _r28.submitted), _r97.valid && (_r97.dirty || _r97.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r97.invalid && (_r97.dirty || _r97.touched || _r28.submitted) && (_r97.errors == null ? null : _r97.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.count_of_reject_two)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](420, _c55, _r100.invalid && (_r100.dirty || _r100.touched || _r28.submitted), _r100.valid && (_r100.dirty || _r100.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.count_of_reject_three)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](423, _c55, _r102.invalid && (_r102.dirty || _r102.touched || _r28.submitted), _r102.valid && (_r102.dirty || _r102.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.total_of_reject_mat);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_delivery_van_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](426, _c55, _r105.invalid && (_r105.dirty || _r105.touched || _r28.submitted), _r105.valid && (_r105.dirty || _r105.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](429, _c55, _r108.invalid && (_r108.dirty || _r108.touched || _r28.submitted), _r108.valid && (_r108.dirty || _r108.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r108.invalid && (_r108.dirty || _r108.touched || _r28.submitted) && (_r108.errors == null ? null : _r108.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_cooling_system_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](432, _c55, _r111.invalid && (_r111.dirty || _r111.touched || _r28.submitted), _r111.valid && (_r111.dirty || _r111.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](435, _c55, _r114.invalid && (_r114.dirty || _r114.touched || _r28.submitted), _r114.valid && (_r114.dirty || _r114.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r114.invalid && (_r114.dirty || _r114.touched || _r28.submitted) && (_r114.errors == null ? null : _r114.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_inner_walls_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](438, _c55, _r117.invalid && (_r117.dirty || _r117.touched || _r28.submitted), _r117.valid && (_r117.dirty || _r117.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](441, _c55, _r120.invalid && (_r120.dirty || _r120.touched || _r28.submitted), _r120.valid && (_r120.dirty || _r120.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r120.invalid && (_r120.dirty || _r120.touched || _r28.submitted) && (_r120.errors == null ? null : _r120.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_plastic_curtains_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](444, _c55, _r123.invalid && (_r123.dirty || _r123.touched || _r28.submitted), _r123.valid && (_r123.dirty || _r123.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](447, _c55, _r126.invalid && (_r126.dirty || _r126.touched || _r28.submitted), _r126.valid && (_r126.dirty || _r126.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r126.invalid && (_r126.dirty || _r126.touched || _r28.submitted) && (_r126.errors == null ? null : _r126.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_thereno_pest_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](450, _c55, _r129.invalid && (_r129.dirty || _r129.touched || _r28.submitted), _r129.valid && (_r129.dirty || _r129.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](453, _c55, _r132.invalid && (_r132.dirty || _r132.touched || _r28.submitted), _r132.valid && (_r132.dirty || _r132.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r132.invalid && (_r132.dirty || _r132.touched || _r28.submitted) && (_r132.errors == null ? null : _r132.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_clean_company_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](456, _c55, _r135.invalid && (_r135.dirty || _r135.touched || _r28.submitted), _r135.valid && (_r135.dirty || _r135.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](459, _c55, _r138.invalid && (_r138.dirty || _r138.touched || _r28.submitted), _r138.valid && (_r138.dirty || _r138.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r138.invalid && (_r138.dirty || _r138.touched || _r28.submitted) && (_r138.errors == null ? null : _r138.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_delivery_staff_symptoms_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](462, _c55, _r141.invalid && (_r141.dirty || _r141.touched || _r28.submitted), _r141.valid && (_r141.dirty || _r141.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](465, _c55, _r144.invalid && (_r144.dirty || _r144.touched || _r28.submitted), _r144.valid && (_r144.dirty || _r144.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r144.invalid && (_r144.dirty || _r144.touched || _r28.submitted) && (_r144.errors == null ? null : _r144.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_inner_walls_clean_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](468, _c55, _r147.invalid && (_r147.dirty || _r147.touched || _r28.submitted), _r147.valid && (_r147.dirty || _r147.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](471, _c55, _r150.invalid && (_r150.dirty || _r150.touched || _r28.submitted), _r150.valid && (_r150.dirty || _r150.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r150.invalid && (_r150.dirty || _r150.touched || _r28.submitted) && (_r150.errors == null ? null : _r150.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_plastic_curtains_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](474, _c55, _r153.invalid && (_r153.dirty || _r153.touched || _r28.submitted), _r153.valid && (_r153.dirty || _r153.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](477, _c55, _r156.invalid && (_r156.dirty || _r156.touched || _r28.submitted), _r156.valid && (_r156.dirty || _r156.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r156.invalid && (_r156.dirty || _r156.touched || _r28.submitted) && (_r156.errors == null ? null : _r156.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_no_accessories_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](480, _c55, _r159.invalid && (_r159.dirty || _r159.touched || _r28.submitted), _r159.valid && (_r159.dirty || _r159.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](483, _c55, _r162.invalid && (_r162.dirty || _r162.touched || _r28.submitted), _r162.valid && (_r162.dirty || _r162.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r162.invalid && (_r162.dirty || _r162.touched || _r28.submitted) && (_r162.errors == null ? null : _r162.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_no_pests_sightings_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](486, _c55, _r165.invalid && (_r165.dirty || _r165.touched || _r28.submitted), _r165.valid && (_r165.dirty || _r165.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](489, _c55, _r168.invalid && (_r168.dirty || _r168.touched || _r28.submitted), _r168.valid && (_r168.dirty || _r168.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r168.invalid && (_r168.dirty || _r168.touched || _r28.submitted) && (_r168.errors == null ? null : _r168.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_pallet_crates_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](492, _c55, _r171.invalid && (_r171.dirty || _r171.touched || _r28.submitted), _r171.valid && (_r171.dirty || _r171.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](495, _c55, _r174.invalid && (_r174.dirty || _r174.touched || _r28.submitted), _r174.valid && (_r174.dirty || _r174.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r174.invalid && (_r174.dirty || _r174.touched || _r28.submitted) && (_r174.errors == null ? null : _r174.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_product_contamination_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](498, _c55, _r177.invalid && (_r177.dirty || _r177.touched || _r28.submitted), _r177.valid && (_r177.dirty || _r177.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](501, _c55, _r180.invalid && (_r180.dirty || _r180.touched || _r28.submitted), _r180.valid && (_r180.dirty || _r180.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r180.invalid && (_r180.dirty || _r180.touched || _r28.submitted) && (_r180.errors == null ? null : _r180.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_uncessary_items_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](504, _c55, _r183.invalid && (_r183.dirty || _r183.touched || _r28.submitted), _r183.valid && (_r183.dirty || _r183.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](507, _c55, _r186.invalid && (_r186.dirty || _r186.touched || _r28.submitted), _r186.valid && (_r186.dirty || _r186.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r186.invalid && (_r186.dirty || _r186.touched || _r28.submitted) && (_r186.errors == null ? null : _r186.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_products_cover_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](510, _c55, _r189.invalid && (_r189.dirty || _r189.touched || _r28.submitted), _r189.valid && (_r189.dirty || _r189.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](513, _c55, _r192.invalid && (_r192.dirty || _r192.touched || _r28.submitted), _r192.valid && (_r192.dirty || _r192.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r192.invalid && (_r192.dirty || _r192.touched || _r28.submitted) && (_r192.errors == null ? null : _r192.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_certificate_coa_kwatro_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](516, _c55, _r195.invalid && (_r195.dirty || _r195.touched || _r28.submitted), _r195.valid && (_r195.dirty || _r195.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](519, _c55, _r198.invalid && (_r198.dirty || _r198.touched || _r28.submitted), _r198.valid && (_r198.dirty || _r198.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r198.invalid && (_r198.dirty || _r198.touched || _r28.submitted) && (_r198.errors == null ? null : _r198.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_po_kwatro_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](522, _c55, _r201.invalid && (_r201.dirty || _r201.touched || _r28.submitted), _r201.valid && (_r201.dirty || _r201.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](525, _c55, _r204.invalid && (_r204.dirty || _r204.touched || _r28.submitted), _r204.valid && (_r204.dirty || _r204.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r204.invalid && (_r204.dirty || _r204.touched || _r28.submitted) && (_r204.errors == null ? null : _r204.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_msds_kwatro_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](528, _c55, _r207.invalid && (_r207.dirty || _r207.touched || _r28.submitted), _r207.valid && (_r207.dirty || _r207.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](531, _c55, _r210.invalid && (_r210.dirty || _r210.touched || _r28.submitted), _r210.valid && (_r210.dirty || _r210.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r210.invalid && (_r210.dirty || _r210.touched || _r28.submitted) && (_r210.errors == null ? null : _r210.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_food_grade_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](534, _c55, _r213.invalid && (_r213.dirty || _r213.touched || _r28.submitted), _r213.valid && (_r213.dirty || _r213.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](537, _c55, _r216.invalid && (_r216.dirty || _r216.touched || _r28.submitted), _r216.valid && (_r216.dirty || _r216.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r216.invalid && (_r216.dirty || _r216.touched || _r28.submitted) && (_r216.errors == null ? null : _r216.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_qty_received_singko_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](540, _c55, _r219.invalid && (_r219.dirty || _r219.touched || _r28.submitted), _r219.valid && (_r219.dirty || _r219.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](543, _c55, _r222.invalid && (_r222.dirty || _r222.touched || _r28.submitted), _r222.valid && (_r222.dirty || _r222.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r222.invalid && (_r222.dirty || _r222.touched || _r28.submitted) && (_r222.errors == null ? null : _r222.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_mfg_date_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](546, _c55, _r225.invalid && (_r225.dirty || _r225.touched || _r28.submitted), _r225.valid && (_r225.dirty || _r225.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](549, _c55, _r228.invalid && (_r228.dirty || _r228.touched || _r28.submitted), _r228.valid && (_r228.dirty || _r228.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r228.invalid && (_r228.dirty || _r228.touched || _r28.submitted) && (_r228.errors == null ? null : _r228.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_expirydate_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](552, _c55, _r231.invalid && (_r231.dirty || _r231.touched || _r28.submitted), _r231.valid && (_r231.dirty || _r231.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](555, _c55, _r234.invalid && (_r234.dirty || _r234.touched || _r28.submitted), _r234.valid && (_r234.dirty || _r234.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r234.invalid && (_r234.dirty || _r234.touched || _r28.submitted) && (_r234.errors == null ? null : _r234.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_packaging_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](558, _c55, _r237.invalid && (_r237.dirty || _r237.touched || _r28.submitted), _r237.valid && (_r237.dirty || _r237.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](561, _c55, _r240.invalid && (_r240.dirty || _r240.touched || _r28.submitted), _r240.valid && (_r240.dirty || _r240.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r240.invalid && (_r240.dirty || _r240.touched || _r28.submitted) && (_r240.errors == null ? null : _r240.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_no_contaminants_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](564, _c55, _r243.invalid && (_r243.dirty || _r243.touched || _r28.submitted), _r243.valid && (_r243.dirty || _r243.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](567, _c55, _r246.invalid && (_r246.dirty || _r246.touched || _r28.submitted), _r246.valid && (_r246.dirty || _r246.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r246.invalid && (_r246.dirty || _r246.touched || _r28.submitted) && (_r246.errors == null ? null : _r246.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_qtyrejected_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](570, _c55, _r249.invalid && (_r249.dirty || _r249.touched || _r28.submitted), _r249.valid && (_r249.dirty || _r249.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](573, _c55, _r252.invalid && (_r252.dirty || _r252.touched || _r28.submitted), _r252.valid && (_r252.dirty || _r252.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r252.invalid && (_r252.dirty || _r252.touched || _r28.submitted) && (_r252.errors == null ? null : _r252.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.g_rejected_reason_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](576, _c55, _r255.invalid && (_r255.dirty || _r255.touched || _r28.submitted), _r255.valid && (_r255.dirty || _r255.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.g_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.g_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](579, _c55, _r258.invalid && (_r258.dirty || _r258.touched || _r28.submitted), _r258.valid && (_r258.dirty || _r258.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r258.invalid && (_r258.dirty || _r258.touched || _r28.submitted) && (_r258.errors == null ? null : _r258.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.h_lab_sample_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](582, _c55, _r261.invalid && (_r261.dirty || _r261.touched || _r28.submitted), _r261.valid && (_r261.dirty || _r261.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.h_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted) && (_r106.errors == null ? null : _r106.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.h_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](585, _c55, _r264.invalid && (_r264.dirty || _r264.touched || _r28.submitted), _r264.valid && (_r264.dirty || _r264.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r264.invalid && (_r264.dirty || _r264.touched || _r28.submitted) && (_r264.errors == null ? null : _r264.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1170, 354, _r28.value), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteProject.item_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.po_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.cancelled_reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1243, 356, ctx.CancelPoSummary));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1245, 358, ctx.ProjectsAllowableQty));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.PartialComment);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_25__["ClientLocationStatusValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["PatternValidator"], _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_26__["ProjectIDUniqueValidatorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["MaxLengthValidator"], src_app_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_28__["TeamSizeValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_z"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkTextareaAutosize"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_32__["PagingPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["JsonPipe"]], styles: [".projectcard[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n  .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n  .mat-form-field-empty.mat-form-field-label {\n  color: #eeee08;\n}\n\n.rejectIsnotMactchSpanTagclass[_ngcontent-%COMP%] {\n  display: noness;\n}\n\n.removal-remarks[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.input[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.text-area-main[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.text-area-main2[_ngcontent-%COMP%] {\n  height: 130px;\n}\n\n.text-area-main3[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.text-area-main4[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.text-area-main5[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\nb[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.hideObject[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.haddata[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unsetdata[_ngcontent-%COMP%] {\n  display: unset;\n}\n\n.mat-drawer-shown[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.zerobadge0[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.bg-color-yellow-textarea[_ngcontent-%COMP%] {\n  outline: none !important;\n  border: 1px solid yellow;\n  box-shadow: 0 0 10px #719ece;\n  border-radius: 10px;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #165c7d !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: #165c7d !important;\n  z-index: 3;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #165c7d !important;\n  z-index: 3;\n}\n\n .mat-radio-outer-circle {\n  outline: none !important;\n  box-shadow: 0 0 10px #719ece;\n  border-color: yellow !important;\n  \n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: black !important;\n  \n}\n\n.font-color-black[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFBQTtFQUNFLHlDQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSw2QkFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtBQU1GOztBQUhBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUNFLG9DQUFBO0FBT0Y7O0FBSkE7RUFDRSxvQ0FBQTtFQUNBLFVBQUE7QUFPRjs7QUFKQTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUpBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQWlDLDBCQUFBO0FBUW5DOztBQUxBO0VBRUUsOEJBQUE7RUFBZ0MsMEJBQUE7QUFRbEM7O0FBTEE7RUFDRSxZQUFBO0FBUUYiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdGNhcmQge1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcbn1cblxuLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuLy8gICAgIGNvbG9yOiB5ZWxsb3c7XG4vLyB9XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiKDIzOCwgMjM4LCA4KTtcbn1cblxuLnJlamVjdElzbm90TWFjdGNoU3BhblRhZ2NsYXNzIHtcbiAgZGlzcGxheTogbm9uZXNzO1xufVxuLnJlbW92YWwtcmVtYXJrcyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmlucHV0IHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRleHQtYXJlYS1tYWluIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLnRleHQtYXJlYS1tYWluMiB7XG4gIGhlaWdodDogMTMwcHg7XG59XG4udGV4dC1hcmVhLW1haW4zIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi50ZXh0LWFyZWEtbWFpbjQge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLnRleHQtYXJlYS1tYWluNSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmIge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmhpZGVPYmplY3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhhZGRhdGEge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVuc2V0ZGF0YSB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuLm1hdC1kcmF3ZXItc2hvd24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnplcm9iYWRnZTAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmctY29sb3IteWVsbG93LXRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM3MTllY2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDkyLCAxMjUpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDkyLCAxMjUpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjIsIDkyLCAxMjUpICFpbXBvcnRhbnQ7IC8vIE92ZXJyaWRlIG1hdGVyaWFsXG4gIHotaW5kZXg6IDM7XG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNzE5ZWNlO1xuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50OyAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZFxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbi5mb250LWNvbG9yLWJsYWNre1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map