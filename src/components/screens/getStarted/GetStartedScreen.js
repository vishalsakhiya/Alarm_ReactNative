import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, Platform } from "react-native";
import { bindActionCreators } from "redux";
import { requestGetTimeZone, reqeustSetUserData } from "../../../redux/actions/actionCreators/commonActionCreator";
import { connect } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import styles from "./GetStatedScreenStyle";
import Colors from "../../../constants/Colors";

const GetStartedScreen = (props) => {
    const [zoneList, setZoneList] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [userName, setUserName] = useState(null)
    const [value, setValue] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        props.requestGetTimeZone();
    }, [])

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

    return (
        <View style={styles.continer}>
            <View style={styles.logoContiner}>
                <Image style={styles.logo} source={{ uri: "clock_logo" }} />
                <Text style={styles.logoText}>Alarm App</Text>
            </View>

            <View style={styles.inputFieldForm}>
                <TextInput
                    value={userName}
                    style={styles.textInputDdecoration}
                    placeholder="Enter you name"
                    onChangeText={value => setUserName(value)}
                />
                <View style={styles.dropDownParentContiner}>
                    {zoneList.length != 0 && <DropDownPicker
                        items={zoneList}
                        value={value}
                        open={isOpen}
                        setOpen={setOpen}
                        setValue={setValue}
                        placeholder={'Choose a time-zone.'}
                        searchContainerStyle={{ borderWidth: 0 }}
                        searchTextInputStyle={{ borderColor: Colors.GRAY_TRANSPARENT }}
                        searchable={true}
                        dropDownContainerStyle={styles.dropDownContainerStyle}
                        textStyle={styles.dropDownTextStyle}
                        theme="DARK"
                        style={styles.dropDownStyle}
                        searchPlaceholder="Search your time-zone"
                        placeholderStyle={styles.dropDownplaceHolderStyle}
                    />}
                </View>
            </View>
            <View style={{ flex: 0.25 }}>
                <TouchableOpacity
                    disabled={userName == null || value == null}
                    onPress={() => {
                        props.reqeustSetUserData({ userName: userName, timeZone: value });
                        navigation.reset({
                            index: 0,
                            routes: [
                                { name: "BottomTab" }
                            ]
                        });

                    }}
                    style={[styles.getStartContiner, { opacity: (userName == null || value == null) ? 0.5 : 1 }]} >
                    <Text style={styles.startButtonText}>Get Stated {">"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        data: state.dataReducer
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    requestGetTimeZone, reqeustSetUserData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetStartedScreen);
