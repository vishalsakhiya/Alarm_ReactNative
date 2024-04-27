import axios from "axios";

export async function makeRequest({ url, method = 'get', accessToken, header = {}, data = {} }) {
    accessToken;

    let headers = {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        header
    }

    console.log(method + " API : " + url);

    //Make API request based on method
    console.log(header, url);
    if (method === "get") {
        return axios({
            method: 'get',
            url: url,
            headers: headers
        })
            .then((response) => {
                return Promise.resolve(response)
            }).catch((err) => {
                return Promise.reject(err)
            })
    }
}