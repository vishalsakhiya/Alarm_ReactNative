
import { RECEIVE_ADD_ALARM, RECEIVE_GET_TIMEZONE, RECEIVE_REMOVE_ALARM, RECEIVE_SET_USER_DATA } from "../actions/actionTypes/commonActionType";
import uuid from 'react-native-uuid'

const setDate = (hour, min) => {
    const newDate = new Date(Date.now());
    newDate.setHours(hour)
    newDate.setMinutes(min)
    return newDate
}

// Define default state
const defaultState = {
    timeZoneListData: [],
    userInfo: {},

    alarmList: [
        {
            time: "9:00 AM",
            isActive: false,
            repetArray: [],
            date: setDate(9, 30),
            id: uuid.v4()

        },
        {
            time: "11:00 AM",
            isActive: false,
            repetArray: [],
            date: setDate(11, 0),
            id: uuid.v4()
        }
    ]
}
// Define reducer function
export default (state = defaultState, { type, data }) => {
    switch (type) {
        case RECEIVE_GET_TIMEZONE:
            // Update timeZoneListData with received data
            return {
                ...state,
                timeZoneListData: data
            }

        case RECEIVE_SET_USER_DATA:
            //Update user data with received data
            return {
                ...state,
                userInfo: data
            }
        case RECEIVE_ADD_ALARM:
            // temp = temp.concat(data.data)
            //Add alarmList item
            return {
                ...state,
                alarmList: data
            }
        case RECEIVE_REMOVE_ALARM:
            //Remove alarmLIst item by id
            return {
                ...state.alarmList.filter((item) => item.id !== data.id),
            }
        default:
            // Return current state if no matching action type
            return state
    }
}
