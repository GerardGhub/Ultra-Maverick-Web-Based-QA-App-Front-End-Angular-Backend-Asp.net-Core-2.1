import { Task } from "./task";

export class GroupedTask 
{
    tastStatusName: number;
    tasks: Task[];

    constructor()
    {
        this.tastStatusName = null;
        this.tasks = null;
    }
}
