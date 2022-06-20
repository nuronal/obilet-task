import axios from "axios"

export const setHeader = () => {

    axios.interceptors.request.use(
        config => {
            config.headers.Authorization = "Basic JEcYcEMyantZV095WVc3G2JtVjNZbWx1"
            return config
        },
        err => Promise.reject(err)
    )
}