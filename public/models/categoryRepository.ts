import { Category } from "./category";

export class CategoryRepository {
    private categories : Category[];

    constructor() {
this.categories = [{id:1,name:"macere"},
    {id:2,name:"bilim kurgu"},
    {id:3,name:"romantik"},
    {id:4,name:"komedi"}];
    }

    getCategories() : Category[] {
        return this.categories;
    }
}