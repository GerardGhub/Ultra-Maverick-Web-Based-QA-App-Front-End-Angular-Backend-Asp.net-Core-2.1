export class StorePreparationLogs {

    prepa_id: number;
    prepa_source_key: string;
    prepa_approved_prepa_date: string;
    prepa_item_code: string;
    prepa_item_description: string;
    prepa_order_qty: string;
    prepa_allocated_qty: string;
    prepa_date_added: string;
    prepa_added_by: string;
    is_active: string;
    order_source_key: string;

    constructor() {
        this.prepa_id = null;
        this.prepa_source_key = null;
        this.prepa_approved_prepa_date = null;
        this.prepa_item_code = null;
        this.prepa_item_description = null;
        this.prepa_order_qty = null;
        this.prepa_allocated_qty = null;
        this.prepa_date_added = null;
        this.prepa_added_by = null;
        this.is_active = null;
        this.order_source_key = null;
    }


}
