export class AspNetRoles {

    Id:string;
    name:string;
    normalizedname:string;
    concurrencystamp:string;
    discriminator:string;

    constructor()
    {
        this.Id = null;
        this.name = null;
        this.normalizedname = null;
        this.concurrencystamp = null;
        this.discriminator = null;
    }
}
