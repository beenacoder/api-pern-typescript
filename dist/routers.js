import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middlewares/errors";
const router = Router();
router.post('/', 
//Validación
body('name')
    .notEmpty().withMessage('Debes ingresar un nombre para producto'), body('price')
    .isNumeric().withMessage("Debe ser un número")
    .notEmpty().withMessage('Debes ingresar un precio para el producto')
    .custom(val => val > 0).withMessage('El valor debe ser mayor que 0'), handleInputErrors, createProduct);
router.get('/', getProducts);
router.get('/:id', param('id').isInt().withMessage('El id debe ser un número'), handleInputErrors, getProductById);
router.put('/:id', param('id').isInt().withMessage('El id debe ser un número'), body('name')
    .notEmpty().withMessage('Debes ingresar un nombre para producto'), body('price')
    .isNumeric().withMessage("Debe ser un número")
    .notEmpty().withMessage('Debes ingresar un precio para el producto')
    .custom(val => val > 0).withMessage('El valor debe ser mayor que 0'), body('availability')
    .isBoolean().withMessage("Debe ser un valor booleano"), handleInputErrors, updateProduct);
router.patch('/:id', param('id').isInt().withMessage('El id debe ser un número'), handleInputErrors, updateAvailability);
router.delete('/:id', param('id').isInt().withMessage('El id debe ser un número'), handleInputErrors, deleteProduct);
export default router;
//# sourceMappingURL=routers.js.map