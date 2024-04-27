import { StyleSheet } from "react-native";
import Colors from '../../../constants/Colors'
const styles = StyleSheet.create({
    continer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.BLACK_44
    },
    logoContiner: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: 100
    },
    logoText: {
        fontSize: 25,
        color: Colors.WHITE
    },
    inputFieldForm: {
        flex: 1,
        alignItems: 'center',
        width: "100%"
    },
    textInputDdecoration: {
        borderWidth: 1,
        borderColor: Colors.PRIMARY_YELLOW,
        width: "90%",
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 10,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: Colors.BLACK_30,
        height: 50
    },
    dropDownParentContiner: {
        width: "90%",
        marginBottom: 50
    },
    dropDownContainerStyle: {
        borderColor: Colors.PRIMARY_YELLOW,
        borderWidth: 1,
        backgroundColor: Colors.BLACK_30,
    },
    dropDownTextStyle: {
        color: Colors.WHITE,
        fontSize: 16
    },
    dropDownStyle: {
        backgroundColor: Colors.BLACK_30,
        borderColor: Colors.PRIMARY_YELLOW
    },
    dropDownplaceHolderStyle: {
        color: Colors.GRAY_186,
        fontSize: 16
    },
    getStartContiner: {
        height: 51,
        width: 200,
        borderRadius: 20,
        backgroundColor: Colors.PRIMARY_YELLOW,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    startButtonText: {
        fontSize: 20,
        color: Colors.BLACK_44
    }

});

export default styles;
