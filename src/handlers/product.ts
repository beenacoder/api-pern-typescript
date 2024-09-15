import { Request, Response } from "express";
import Product from "../models/Product.model";

//------------------------POST /product
export const createProduct = async (req: Request, res: Response) => {
    try {
        // const product = new Product(req.body);
        // const savedProduct = await product.save();
        const product = await Product.create(req.body);
        res.json({ data: product });
    }
    catch (error) {
        console.log(error);
    }
}

//-----------------------------GET /product
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'DESC']
            ],
            attributes: {
                // exclude: ['createdAt', 'updatedAt', 'availability']
                exclude: ['createdAt', 'updatedAt']
            }
        });
        if (!products) { res.status(404).send({ data: "No products found" }); }
        res.json({ data: products });
    } catch (error) {
        console.log(error);
    }
}


//-------------------------------GET /product/:id
export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const productById = await Product.findByPk(id);
        if (!productById) { res.status(404).send({ error: "No product found" }); }
        res.json({ data: productById });
    } catch (error) {
        console.log(error);
    }
}

//-------------------------------PUT/UPDATE /product
//PUT reemplaza/actualiza completamente el registro con lo que le pasemos, es decir si solo le pasamos un solo campo lo demas los pasa en vacío pero cambian todos los datos.
//Por eso usamos product.update para protegernos y que se llenen todos los campos.
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) { res.status(404).send({ error: "No product found" }); }
        await product.update(req.body);
        const updatedProduct = await product.save();
        res.json({ data: updatedProduct });
    } catch (error) {
        console.log(error);
    }
}

//-------------------------------PATCH /product
//PATCH unicamente modifica/actualiza parcialmente, es decir solo cambia el campo en cuestion
export const updateAvailability = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) { res.status(404).send({ error: "No product found" }); }
        product.availability = !product.dataValues.availability;
        await product.save();
        res.json({ data: product });
    } catch (error) {
        console.log(error);
    }
}

//-------------------------------DELETE /product
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) { res.status(404).send({ error: "No product found" }); }
        await product.destroy();
        res.json({ data: "Product deleted" });
    } catch (error) {
        console.log(error);
    }
}