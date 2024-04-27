import { take, takeLatest } from 'redux-saga/effects'
import { REQUEST_ADD_ALARM, REQUEST_GET_TIMEZONE, REQUEST_REMOVE_ALARM, REQUEST_SET_USER_DATA } from '../actions/actionTypes/commonActionType'
import { addAlarmItem, getTimeZoneData, removeAlarmItem, setUserInfo } from './sagas/commonSagas'

// export default saga function
export default function* mySaga() {
    // listen for getTimeZone action
    yield takeLatest(REQUEST_GET_TIMEZONE, getTimeZoneData);

    // listen for setUserData action
    yield takeLatest(REQUEST_SET_USER_DATA, setUserInfo);

    // listen for addAlarm action
    yield takeLatest(REQUEST_ADD_ALARM, addAlarmItem);

    // listen for removeAlarm action
    yield takeLatest(REQUEST_REMOVE_ALARM, removeAlarmItem);
}
