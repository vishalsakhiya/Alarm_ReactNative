import moment from "moment";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";

const ClockView = ({ style = {}, zoneDetails = {} }) => {

    const currentTime = moment().utcOffset(zoneDetails?.utc_offset ? zoneDetails?.utc_offset : 0).format("hh:mm:ss").split(":");
    const [hour, setHours] = useState(currentTime[0]);
    const [minute, setMinute] = useState(currentTime[1]);
    const [second, setSecond] = useState(currentTime[2])

    useEffect(() => {
        setInterval(() => {
            const currentTime = moment().utcOffset(zoneDetails?.utc_offset ? zoneDetails?.utc_offset : 0).format("hh:mm:ss").split(":");
            setHours(currentTime[0]);
            setMinute(currentTime[1]);
            setSecond(currentTime[2])
        }, 1000);
    }, [])

    return (<View style={[styles.continer, style]}>
        <View style={styles.clockContiner}>
            <Text style={styles.timeText}>{hour}<Text style={{ color: Colors.PRIMARY_YELLOW }}>:</Text></Text>
            <Text style={styles.timeText}>{minute}<Text style={{ color: Colors.PRIMARY_YELLOW }}>:</Text></Text>
            <Text style={styles.timeText}>{second}</Text>
        </View>
    </View>)
}

export default ClockView;

const styles = StyleSheet.create({
    continer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    timeText: {
        fontSize: 85,
        fontWeight: "700",
        color: Colors.GRAY_186
    },
    clockContiner: {
        height: 100,
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row'
    }
});
