import React, { useState } from "react";
import { Modal, View, StyleSheet, TextInput, Text, TouchableOpacity, Alert, } from "react-native";
import Colors from "../../constants/Colors";
import DropDownPicker from "react-native-dropdown-picker";

const EditTextModal = ({ visible = false, onPress, onClose, name, list = [] }) => {
    const [textValue, setTextValue] = useState(name)
    const [isOpen, setOpen] = useState(false)
    const [value, setValue] = useState(null);
    return (
        <Modal visible={visible} style={{ flex: 1 }} transparent={true}>
            <View style={styles.continer}>
                <View style={[styles.modalContienr, { height: isOpen ? 400 : 260 }]}>
                    <Text style={styles.hederTextStyle}>Edit user</Text>
                    <TextInput
                        value={textValue}
                        style={styles.textInputDdecoration}
                        placeholder="Enter you name"
                        onChangeText={value => setTextValue(value)}
                    />
                    <View style={styles.dropDownParentContiner}>
                        {list.length != 0 && <DropDownPicker
                            items={list}
                            value={value}
                            open={isOpen}
                            setOpen={setOpen}
                            setValue={setValue}
                            placeholder={'Select a time-zone.'}
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

                    <View style={styles.bottomBottomView}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => textValue != null && value != null ? onPress(textValue, value) : Alert.alert('value of field is null')}>
                            <Text style={styles.editButton} > Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </Modal >
    )
}

export default EditTextModal;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: Colors.TRANSPARENT_BLACK,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputDdecoration: {
        borderBottomWidth: 1,
        borderColor: Colors.PRIMARY_YELLOW,
        width: "90%",
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 10,
        backgroundColor: Colors.BLACK_30,
        height: 50,
        marginBottom: 10
    },
    modalContienr: {
        width: "100%",
        alignItems: 'center',
        height: 400,
        borderWidth: 1,
        borderColor: Colors.PRIMARY_YELLOW,
        width: "90%",
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 10,
        backgroundColor: Colors.BLACK_30,
    },
    hederTextStyle: {
        fontSize: 20,
        color: Colors.WHITE,
        marginTop: 20,
        marginBottom: 10

    },
    bottomBottomView: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 20,
        flex: 1,
        alignItems: 'flex-end',
        paddingBottom: 20
    },
    dropDownParentContiner: {
        width: "90%",
        marginBottom: 50
    },
    dropDownContainerStyle: {
        borderColor: Colors.PRIMARY_YELLOW,
        borderWidth: 1,
        backgroundColor: Colors.BLACK_30,
        marginTop: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    dropDownTextStyle: {
        color: Colors.WHITE,
        fontSize: 16
    },
    dropDownStyle: {
        backgroundColor: Colors.BLACK_30,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.PRIMARY_YELLOW,
    },
    dropDownplaceHolderStyle: {
        color: Colors.GRAY_186,
        fontSize: 16
    },
    cancelButton: {
        fontSize: 16,
        fontWeight: "400",
        color: Colors.WHITE
    },
    editButton: {
        fontSize: 17,
        fontWeight: "600",
        color: Colors.WHITE,
        marginLeft: 10
    }
})
