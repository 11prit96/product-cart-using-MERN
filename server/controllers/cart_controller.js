import { v4 as uuid } from "uuid"

let productCart =
    [
        { id: uuid(), name: "Samsung Galaxy S5", price: '50,000', quantity: 45 },
        { id: uuid(), name: "Motorola Game Series", price: '60,000', quantity: 10 },
        { id: uuid(), name: "Apple iPhone 13 Pro", price: '90,000', quantity: 59 },
        { id: uuid(), name: "Poco X6", price: '40,000', quantity: 87 }
    ]

export const getAllCartItems = (req, res) => {
    res.status(200).json({ productCart })
}

export const addItemToCart = (req, res) => {
    const id = uuid()
    const { name, price, quantity } = req.body
    const addedItem = { id, name, price, quantity }
    productCart.push(addedItem)
    res.status(201).json({ item: addedItem })
}

export const getACartItem = (req, res) => {
    const { id } = req.params
    const selectedItem = productCart.find((item) => item.id === id)
    res.status(200).json({ item: selectedItem })
}

export const removeItemFromCart = (req, res) => {
    const { id } = req.params
    const newCart = productCart.filter((item) => item.id !== id)
    productCart = newCart
    res.status(200).json(`Item with id ${id} is deleted`)
}

export const cartItemCustomQuantity = (req, res) => {
    const { id } = req.params
    const { quantity } = req.body
    const selectedItem = productCart.find((item) => item.id === id)
    selectedItem.quantity = quantity
    res.status(201).json({ selectedItem })
}

export const increaseQuantityByOne = (req, res) => {
    const { id } = req.params
    const selectedItem = productCart.find((item) => item.id === id)
    selectedItem.quantity += 1
    res.status(201).json({ selectedItem })
}

export const decreaseQuantityByOne = (req, res) => {
    const { id } = req.params
    const selectedItem = productCart.find((item) => item.id === id)
    selectedItem.quantity -= 1
    res.status(201).json({ selectedItem })
}