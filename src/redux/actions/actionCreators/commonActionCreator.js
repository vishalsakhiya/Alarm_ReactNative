import {
    REQUEST_GET_TIMEZONE, RECEIVE_GET_TIMEZONE,
    REQUEST_SET_USER_DATA, RECEIVE_SET_USER_DATA, REQUEST_ADD_ALARM, RECEIVE_ADD_ALARM, REQUEST_REMOVE_ALARM, RECEIVE_REMOVE_ALARM
} from '../actionTypes/commonActionType'

// Define Common Action Creates
// Get time zone list action creator
export const requestGetTimeZone = (obj) => ({ type: REQUEST_GET_TIMEZONE, obj });
export const receiveGetTimeZone = (data) => ({ type: RECEIVE_GET_TIMEZONE, data });

// Set User Info 
export const reqeustSetUserData = (obj) => ({ type: REQUEST_SET_USER_DATA, obj });
export const receiveSetUserData = (data) => ({ type: RECEIVE_SET_USER_DATA, data });

// Add Alarm
export const reqeustAddAlarm = (obj) => ({ type: REQUEST_ADD_ALARM, obj });
export const receiveAddAlarm = (data) => ({ type: RECEIVE_ADD_ALARM, data });

// Remove Alarm
export const reqeustRemoveAlarm = (obj) => ({ type: REQUEST_REMOVE_ALARM, obj });
export const receiveRemoveAlarm = (data) => ({ type: RECEIVE_REMOVE_ALARM, data });
