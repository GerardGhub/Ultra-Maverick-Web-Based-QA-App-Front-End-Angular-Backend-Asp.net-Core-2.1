import { ClientLocation } from "./client-location";


export class Project
{
    projectID: number;
    primaryID: number;
    projectName: string;
    dateOfStart: string;
    teamSize: number;
    active: boolean;
    status: string;
    is_activated: string;
    supplier: string;
    item_code: string;
    item_description: string;
    po_number: string;
    po_date: string;
    pr_date: string;
    pr_number: string;
    qty_order: string;
    qty_uom: string;
    mfg_date: string;
    expiration_date: string;
    expected_delivery: string;
    actual_delivery: string;
    actual_remaining_receiving: number;
    received_by_QA: string;
    clientLocationID: number;
    clientLocation: ClientLocation;
    status_of_reject_one: string;
    status_of_reject_two: string;
    status_of_reject_three: string;
    count_of_reject_one: string;
    count_of_reject_two: string;
    count_of_reject_three: string;
    total_of_reject_mat: string;
    //SECTION 1
    a_delivery_van_desc: string;
    a_compliance: string;
    a_remarks: string;

    b_cooling_system_desc: string;
    b_compliance: string;
    b_remarks: string;

    c_inner_walls_desc: string;
    c_compliance: string;
    c_remarks: string;

    d_plastic_curtains_desc: string;
    d_compliance: string;
    d_remarks: string;

    e_thereno_pest_desc: string;
    e_compliance: string;
    e_remarks: string;
    //Section 2
    //A
    a_clean_company_dos: string;
    a_compliance_dos: string;
    a_remarks_dos: string;
    //B
    b_delivery_staff_symptoms_dos: string;
    b_compliance_dos: string;
    b_remarks_dos: string;
    //C
    c_inner_walls_clean_dos: string;
    c_compliance_dos: string;
    c_remarks_dos: string;
    //D
    d_plastic_curtains_dos: string;
    d_compliance_dos: string;
    d_remarks_dos: string;
    //E
    e_no_accessories_dos: string;
    e_compliance_dos: string;
    e_remarks_dos: string;
    //F
    f_compliance_dos:string;
    f_no_pests_sightings_dos:string;
    f_remarks_dos: string;
    //Section 3
    //A
    a_pallet_crates_tres : string;
    a_compliance_tres: string;
    a_remarks_tres:string;
    //B
    b_product_contamination_tres:string;
    b_compliance_tres:string;
    b_remarks_tres:string;
    //C
    c_uncessary_items_tres:string;
    c_compliance_tres:string;
    c_remarks_tres:string;
    //D
    d_products_cover_tres:string;
    d_compliance_tres:string;
    d_remarks_tres:string;

//Section 4
//A
    a_certificate_coa_kwatro_desc:string;
    a_compliance_kwatro:string;
    a_remarks_kwatro:string;
//B
    b_po_kwatro_desc:string;
    b_compliance_kwatro:string;
    b_remarks_kwatro:string;
//C
    c_msds_kwatro_desc:string;
    c_compliance_kwatro:string;
    c_remarks_kwatro:string;
//D
    d_food_grade_desc:string;
    d_compliance_kwatro:string;
    d_remarks_kwatro:string;

    //Section 5
    //A
    a_qty_received_singko_singko:string;
    a_compliance_singko:string;
    a_remarks_singko:string;
    //B
    b_mfg_date_desc_singko:string;
    b_compliance_singko:string;
    b_remarks_singko:string;
    //C
    c_expirydate_desc_singko:string;
    c_compliance_singko:string;
    c_remarks_singko:string;
    //D
    d_packaging_desc_singko:string;
    d_compliance_singko:string;
    d_remarks_singko:string;
    //E
    e_no_contaminants_desc_singko:string;
    e_compliance_singko:string;
    e_remarks_singko:string;
    //F
    f_qtyrejected_desc_singko:string;
    f_compliance_singko:string;
    f_remarks_singko:string;
    //G
    g_rejected_reason_desc_singko:string;
    g_compliance_singko:string;
    g_remarks_singko:string;
    //H
    h_lab_sample_desc_singko:string;
    h_compliance_singko:string;
    h_remarks_singko:string;

    //Cancelled Reason transactional
    cancelled_date:Date;
    canceled_by:string;
    cancelled_reason:string;
    //Returnd Po
    returned_date:Date;
    returned_by:string;
    returned_reason:string;
    //QC Receiving Date
    qcReceivingDate:Date;
    //Expiry Days  Partial
    // daysBeforeExpired : number;
    days_expiry_setup : number;
    is_expired : string;
    //Approval
    is_approved_XP : string;
    is_approved_by : string;
    is_approved_date : Date;
    //RM Left Join
    item_class : string;
    item_type : string;
    major_category : string;
    sub_category : string;
    is_expirable : string;
    //Rejection Approval of QCV Supervisor
    is_wh_reject_approval : string;
    is_wh_reject_approval_by : string;
    is_wh_reject_approval_date : Date;
    //Rejection
    is_wh_reject : string;
    unit_price  : string;

// expiration_date_string : Date;
    constructor()
    {
        this.projectID = null;
        this.primaryID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.is_activated = null;
        this.supplier = null;
        this.item_code = null;
        this.item_description = null;
        this.po_number = null;
        this.po_date = null;
        this.pr_number = null;
        this.pr_date = null;
        this.qty_order = null;
        this.qty_uom = null;
        this.mfg_date = null;
        this.expiration_date = null;
        this.expected_delivery = null;
        this.actual_delivery = null;
        this.actual_remaining_receiving = null;
        this.received_by_QA = null;
        this.clientLocationID = null;
        this.clientLocation = new ClientLocation();
        this.status_of_reject_one = null;
        this.status_of_reject_two = null;
        this.status_of_reject_three = null;
        this.count_of_reject_one = null;
        this.count_of_reject_two = null;
        this.count_of_reject_three = null;
        this.total_of_reject_mat = null;
        //Section 11
        //A
        this.a_delivery_van_desc = null;
        this.a_compliance = null;
        this.a_remarks = null;
        //B
        this.b_cooling_system_desc = null;
        this.b_compliance = null;
        this.b_remarks = null;
        //C
        this.c_inner_walls_desc = null;
        this.c_compliance = null;
        this.c_remarks = null;
        //D
        this.d_plastic_curtains_desc = null;
        this.d_compliance = null;
        this.d_remarks = null;
        //E
        this.e_thereno_pest_desc = null;
        this.e_compliance = null;
        this.e_remarks = null;
        //SECTION 2
        //A
        this.a_clean_company_dos = null;
        this.a_compliance_dos = null;
        this.a_remarks_dos = null;
        //B
        this.b_delivery_staff_symptoms_dos = null;
        this.b_compliance_dos = null;
        this.b_remarks_dos = null;
        //C
        this.c_inner_walls_clean_dos = null;
        this.c_compliance_dos = null;
        this.c_remarks_dos = null;
        //D
        this.d_plastic_curtains_dos = null;
        this.d_compliance_dos = null;
        this.d_remarks_dos = null;
        //E
        this.e_no_accessories_dos = null;
        this.e_compliance_dos = null;
        this.e_remarks_dos = null;
        //F
        this.f_compliance_dos =null;
        this.f_no_pests_sightings_dos =null;
        this.f_remarks_dos = null;
        //SECTION 3
        //A
        this.a_pallet_crates_tres = null;
        this.a_compliance_tres= null;
        this.a_remarks_tres= null;
        //B
        this.b_product_contamination_tres= null;
        this.b_compliance_tres= null;
        this.b_remarks_tres= null;
        //C
        this.c_uncessary_items_tres = null;
        this.c_compliance_tres = null;
        this.c_remarks_tres = null;
        //D
        this.d_products_cover_tres = null;
        this.d_compliance_tres = null;
        this.d_remarks_tres = null;
        //Section 4
        //A
        this.a_certificate_coa_kwatro_desc=null;
        this.a_compliance_kwatro = null;
        this.a_remarks_kwatro = null;
        //B
        this.b_po_kwatro_desc = null;
        this.b_compliance_kwatro =null;
        this.b_remarks_kwatro = null;
        //C
        this.c_msds_kwatro_desc=null;
        this.c_compliance_kwatro = null;
        this.c_remarks_kwatro = null;
        //D
        this.d_food_grade_desc = null;
        this.d_compliance_kwatro = null;
        this.d_remarks_kwatro = null;
        //Section 5
        //A
        this.a_qty_received_singko_singko = null;
        this.a_compliance_singko = null;
        this.a_remarks_singko = null;
        //B
        this.b_mfg_date_desc_singko = null;
        this.b_compliance_singko = null;
        this.b_remarks_singko =null;
        //C
        this.c_expirydate_desc_singko = null;
        this.c_compliance_singko = null;
        this.c_remarks_singko =null;
        //D
        this.d_packaging_desc_singko = null;
        this.d_compliance_singko = null;
        this.d_remarks_singko = null;
        //E
        this.e_no_contaminants_desc_singko = null;
        this.e_compliance_singko =null;
        this.e_remarks_singko = null;
        //F
        this.f_qtyrejected_desc_singko = null;
        this.f_compliance_singko = null;
        this.f_remarks_singko = null;
        //G
        this.g_rejected_reason_desc_singko = null;
        this.g_compliance_singko
        this.g_remarks_singko

        //H
        this.h_lab_sample_desc_singko = null;
        this.h_compliance_singko = null;
        this.h_remarks_singko = null;
        //Cancelled
        this.cancelled_date  = null;
        this.canceled_by  = null;
        this.cancelled_reason = null;
        //Returned
        this.returned_date = null;
        this.returned_by = null;
        this.returned_reason = null;
        //Receiving Date
        this.qcReceivingDate = null;
        //Nearly Expiry
        // this.daysBeforeExpired = null;
        this.days_expiry_setup = null;
        this.is_expired = null;
        //Aproval
        this.is_approved_XP = null;
        this.is_approved_by = null;
        this.is_approved_date = null;
        //RM Left Join
        this.item_class = null;
        this.item_type = null;
        this.major_category = null;
        this.sub_category = null;
        this.is_expirable = null;
        //Rejection Approval of QCV Supervisor
        this.is_wh_reject_approval = null;
        this.is_wh_reject_approval_by = null;
        this.is_wh_reject_approval_date = null;
        //Addtitional reject
        this.is_wh_reject = null;

        this.unit_price = null;

    }
}
