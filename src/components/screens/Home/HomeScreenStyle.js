import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";


const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: Colors.BLACK_40
    },
    headerParent: {
        width: "100%",
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    nameContiner: {
        alignItems: "flex-end",
        flexDirection: 'row'
    },
    userNameText: {
        fontSize: 30,
        textDecorationLine: 'underline',
        textDecorationStyle: "dashed",
        color: Colors.GRAY_186
    },
    timeZoneText: {
        fontSize: 20,
        textDecorationLine: 'underline',
        textDecorationStyle: "dashed",
        color: Colors.GRAY_186
    },
    greetingsText: {
        fontSize: 25,
        color: Colors.GRAY_186
    }
});

export default styles;
