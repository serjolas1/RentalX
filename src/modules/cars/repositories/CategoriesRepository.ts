import { Category } from "../models/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category(name, description, new Date());

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find((value) => value.name === name);
        return category;
    }
}

export { CategoriesRepository };