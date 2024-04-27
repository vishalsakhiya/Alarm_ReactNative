import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icons from 'react-native-vector-icons/dist/MaterialIcons'
import styles from "./HomeScreenStyle";
import Colors from "../../../constants/Colors";
import ClockView from "../../common/Clock";
import { makeRequest } from "../../../redux/api/apiCall";
import EditTextModal from "../../common/EditTextModal";
import { reqeustSetUserData } from '../../../redux/actions/actionCreators/commonActionCreator'

const HomeScreen = (props) => {
    const [userName, setUserName] = useState(null);
    const [timeZone, setTimeZone] = useState(null);
    const [zoneData, setZoneData] = useState(null)
    const [zoneList, setZoneList] = useState([])
    const [editModal, setEditModal] = useState(false)

    async function getZoneDate(zone) {
        try {
            makeRequest({ url: "https://worldtimeapi.org/api/timezone/" + zone, method: 'get', }).then(response => {
                setZoneData(response?.data);
            }).catch(err => {
                console.log("getZone Data Api Error", err);
            })
        } catch (err) {
            console.log("getZone Data catch Error", err);
        }
    }

    useEffect(() => {
        const zoneData = props.data.timeZoneListData;
        if (zoneData != undefined && zoneData?.length != 0) {
            var i = 0
            var tempZoneArray = []
            for (i; i < zoneData?.length; i++) {
                tempZoneArray[i] = { label: zoneData[i], value: zoneData[i], key: i }
            }
            setTimeout(() => {
                setZoneList(tempZoneArray)
            }, Platform.OS == "android" ? 0 : 200);
        }
    }, [props.data.timeZoneListData])

    useEffect(() => {
        const userData = props.data.userInfo;
        if (userData != undefined && Object.keys(userData).length != 0) {
            try {
                setUserName(userData.userName)
                setTimeZone(userData.timeZone)
                setZoneData(undefined)
                getZoneDate(userData.timeZone)
            } catch (error) {
            }
        }
    }, [props.data.userInfo])

    function editUser(name, zone) {
        setEditModal(false)
        setUserName(name)
        setTimeZone(zone)
        props.reqeustSetUserData({ userName: name, timeZone: zone });
    }

    return (
        <SafeAreaView style={styles.continer}>
            <View style={styles.headerParent}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.greetingsText}>Hello,</Text>
                    <View style={styles.nameContiner}>
                        <Text style={styles.userNameText}>{userName}</Text>
                        <TouchableOpacity onPress={() => setEditModal(true)}>
                            <Icons name={"mode"} size={20} color={Colors.PRIMARY_YELLOW} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: "center", flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => setEditModal(true)}>
                        <Icons name={"edit-location-alt"} size={20} color={Colors.PRIMARY_YELLOW} />
                    </TouchableOpacity>
                    <Text style={styles.timeZoneText}>{timeZone}</Text>
                </View>
            </View>
            {zoneData?.utc_offset && <ClockView
                style={{ marginTop: 80 }}
                zoneDetails={zoneData}
            />}
            {zoneList.length != 0 && <EditTextModal visible={editModal}
                list={zoneList}
                onPress={editUser}
                onClose={() => setEditModal(false)}
                name={userName} />}
        </SafeAreaView >
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    reqeustSetUserData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
