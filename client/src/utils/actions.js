import axios from "axios"
import { redirect } from "react-router-dom"


export const formAction = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        await axios.post('/api/cart', data)
        return redirect('/')
    } catch (error) {
        return error
    }
}

export const increaseQuantityAction = async ({ params }) => {
    try {
        await axios.patch(`/api/cart/${params.id}/increaseQuantity`)
    } catch (error) {
        return error
    }
}

export const decreaseQuantityAction = async ({ params }) => {
    try {
        await axios.patch(`/api/cart/${params.id}/decreaseQuantity`)
    } catch (error) {
        return error
    }
}