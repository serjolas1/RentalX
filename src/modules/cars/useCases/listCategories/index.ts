import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listControllerUseCase = new ListCategoriesUseCase(
    CategoriesRepository.getInstance()
);
const listCategoriesController = new ListCategoriesController(
    listControllerUseCase
);

export { listCategoriesController };
