export class TblDryPartialReceivingRejection {
    id:number;
    index_id:number;
    po_number:number;
    qty_reject:number;
    reject_remarks:string;
    added_by:string;
    is_pending:string;
    constructor()
    {
        this.id = null
        this.index_id= null;
        this.po_number = null;
        this.qty_reject = null;
        this.reject_remarks = null;
        this.added_by = null;
        this.is_pending = null;
    }

}
