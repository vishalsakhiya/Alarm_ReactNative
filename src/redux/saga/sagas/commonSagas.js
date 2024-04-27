import { call, put } from 'redux-saga/effects'
import { receiveAddAlarm, receiveGetTimeZone, receiveRemoveAlarm, receiveSetUserData } from '../../actions/actionCreators/commonActionCreator'
import { getTimeZoneListApiCall } from '../api/commonApi'

// export function to get time zone data
export function* getTimeZoneData(action) {

    try {
        // call Time-Zone API
        const data = yield call(getTimeZoneListApiCall, action.obj);

        // dispatch success action
        yield put(receiveGetTimeZone(data));
    } catch (error) {
        // dispatch error acton
        yield put(receiveGetTimeZone(error))
    }
};

// export function to set user Info
export function* setUserInfo(action) {
    try {
         // Get data from action
        const data = action?.obj

        // dispatch set user info action
        yield put(receiveSetUserData(data));
    } catch (error) {
        // dispatch empty user info action
        yield put(receiveSetUserData({}))
    }
}

export function* addAlarmItem(action) {
    try {
         // Get data from action
        const data = action?.obj
        
        //Dispatch add alarm
        yield put(receiveAddAlarm(data))
    } catch (error) {

    }
}

export function* removeAlarmItem(action) {
    try {
        // Get data from action
        const data = action?.obj;

        // Dispatch removeAlarm action
        yield put(receiveRemoveAlarm(data));
    } catch (error) {

    }
}
