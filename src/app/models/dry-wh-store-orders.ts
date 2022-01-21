export class DryWhStoreOrders {

  

    primary_id:number;
    is_approved_prepa_date:string;
    store_name:string;
    route:string;
    area:string;
    category:string;
    is_active:string;
    is_for_validation:string;
    is_approved:string;
    is_prepared:string;
    force_prepared_status: string;
    fox: number;
    item_code: string;
    description: string;
    uom: string;
    total_state_repack: string;
    qty: string;
    prepared_allocated_qty: string;
    is_wh_approved: string;
    is_wh_approved_by: string;
    is_wh_approved_date: Date;
    is_wh_checker_cancel_reason: string;
    is_wh_checker_cancel_by: string;
    is_wh_checker_cancel_date: Date;
    is_wh_checker_cancel: string;

    constructor()
    {
        this.primary_id = null;
        this.is_approved_prepa_date = null;
        this.store_name = null;
        this.route = null;
        this.area = null;
        this.category = null;
        this.is_active = null;
        this.is_for_validation = null;
        this.is_approved = null;
        this.is_prepared = null;
        this.force_prepared_status = null;
        this.fox = null;
        this.item_code = null;
        this.description = null;
        this.uom =null;
        this.total_state_repack = null;
        this.qty = null;
        this.prepared_allocated_qty = null;
        this.is_wh_approved = null;
        this.is_wh_approved_by = null;
        this.is_wh_approved_date = null;
        this.is_wh_checker_cancel_reason = null;
        this.is_wh_checker_cancel_reason = null;
        this.is_wh_checker_cancel = null;
        this.is_wh_checker_cancel_by = null;
        this.is_wh_checker_cancel_date = null;
    }

}
