import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get('/',PageController.home );
router.get('/dogs',PageController.dogs);
router.get('/cats',PageController.cats);
router.get('/fishes',PageController.fishes);
router.get('/search',SearchController.search);

export default router;
/* site inicial
  rotas para filtrar : dog, cat, fish e a busca
  paginas iguais o conteudo é que muda
  criar 2 controles filtro e busca
  */