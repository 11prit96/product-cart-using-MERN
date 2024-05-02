import { Router } from "express";
import { addItemToCart, cartItemCustomQuantity, decreaseQuantityByOne, getACartItem, getAllCartItems, increaseQuantityByOne, removeItemFromCart } from "../controllers/cart_controller.js";

const router = Router()

router.route('/')
    .get(getAllCartItems)
    .post(addItemToCart)

router.route('/:id')
    .get(getACartItem)
    .delete(removeItemFromCart)
    .patch(cartItemCustomQuantity)

router.route('/:id/increaseQuantity').patch(increaseQuantityByOne)
router.route('/:id/decreaseQuantity').patch(decreaseQuantityByOne)

export default router