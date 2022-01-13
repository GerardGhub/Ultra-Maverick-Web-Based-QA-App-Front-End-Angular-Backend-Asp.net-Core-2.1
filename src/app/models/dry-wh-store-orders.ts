export class DryWhStoreOrders {

  

    primary_id:number;
    is_approved_prepa_date:string;
    store_name:string;
    store_route:string;
    store_area:string;
    category:string;
    is_active:string;
    is_for_validation:string;
    is_approved:string;
    is_prepared:string;
    force_prepared_status: string;

    constructor()
    {
        this.primary_id = null;
        this.is_approved_prepa_date = null;
        this.store_name = null;
        this.store_route = null;
        this.store_area = null;
        this.category = null;
        this.is_active = null;
        this.is_for_validation = null;
        this.is_approved = null;
        this.is_prepared = null;
        this.force_prepared_status = null;
    }

}
