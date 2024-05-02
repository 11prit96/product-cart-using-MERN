import { Form } from "react-router-dom";
import '../assets/formPage.css'

const AddProductForm = () => {
    return (
        <div className="container">
            <Form method="post" className="form">
                <label htmlFor="name" className="form-label">Product Name</label>
                <input type="text" id="name" name="name" className="form-input" />
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" id="price" name="price" className="form-input" />
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="number" id="quantity" name="quantity" className="form-input" />
                <button type="submit" className="btn">Submit</button>
            </Form>
        </div>
    )
}

export default AddProductForm
