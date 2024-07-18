import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

router.get('/', (req, res) => {
    res.send('Get World');
});

router.post('/', createProduct);

router.put('/', (req, res) => {
    res.send('Put World');
});

router.patch('/', (req, res) => {
    res.send('PATCH World');
});

router.delete('/', (req, res) => {
    res.send('DELETE World');
});

export default router;