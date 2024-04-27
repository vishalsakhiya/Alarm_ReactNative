import { makeRequest } from "../../api/apiCall";
import { GET_TIME_ZONE_LIST } from "../../api/apiContants";

// Make API Request for time zone data
export const getTimeZoneListApiCall = async (obj) => {
    try {
        return makeRequest({ url: GET_TIME_ZONE_LIST, method: 'get', }).then(response => {
            return response?.data;
        }).catch(err => {
            return err;
        })
    } catch (error) {
        return error
    }
};
