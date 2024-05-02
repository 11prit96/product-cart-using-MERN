import useFetch from '../hooks/useFetch'

const Error = () => {
    const { serverError } = useFetch('/api/cart')
    return (
        <div>
            {serverError && <p>{serverError}</p>}
        </div>
    )
}

export default Error
