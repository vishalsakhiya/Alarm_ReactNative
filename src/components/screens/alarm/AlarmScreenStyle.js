import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLACK_40,
        paddingHorizontal: 10,
        paddingTop: 30
    },
    addBtn: {
        backgroundColor: Colors.SECONDARY_YELLOW,
        height: 50,
        width: 50,
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center"
    },
    slidercontienr: {
        width: 60,
        backgroundColor: Colors.GRAY_TRANSPARENT,
        height: 30,
        marginVertical: 10,
        borderRadius: 20,
        padding: 5
    },
    slidBtn: {
        width: 20,
        flex: 1,
        borderRadius: 20,
    },
    itmeContiner: {
        width: "100%",
        backgroundColor: Colors.BLACK_30,
        borderRadius: 15,
        marginTop: 10,
        padding: 5
    },
    itmeChildContiner: {
        paddingLeft: 10,
        flexDirection: "row",
        paddingHorizontal: 10
    },
    iosTimePickerContiner: {
        flex: 1,
        backgroundColor: Colors.TRANSPARENT_BLACK,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerParent: {
        borderColor: Colors.PRIMARY_YELLOW,
        borderWidth: 1,
        borderRadius: 50,
        overflow: "hidden",
        height: 50,
        backgroundColor: Colors.GRAY,
        justifyContent: 'center'
    },
    pickerStyle: {
        backgroundColor: Colors.GRAY,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
        height: 400,
        width: 100,
    },
    closeIcon: {
        left: 10,
        alignSelf: "flex-end",
        color: Colors.WHITE
    },
    repetText: {
        fontSize: 16,
        color: Colors.GRAY,
        flex: 1
    },
    deleteIconStyle: {
        color: Colors.GRAY_TRANSPARENT,
        top: 10
    },
    timeText: {
        fontSize: 45,
        color: Colors.GRAY,
        flex: 1
    },
    emptyText: {
        fontSize: 25,
        color: Colors.GRAY,
        alignSelf: 'center',
        marginTop: 50
    },
    customCancelButtonIOS: {
        width: '100%',
        height: 55,
        backgroundColor: Colors.BLACK_20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    customCancelButtonTextIOS: {
        fontSize: 20,
        color: "#1574ff"
    }
});

export default styles;
