import notifee, { AndroidImportance, AndroidNotificationSetting, TriggerType } from '@notifee/react-native'
import { Platform } from 'react-native';

export async function createTriggerNotification(time, id) {
    const date = time.setSeconds(0);
    const localTime = time.toLocaleTimeString();
    // request permisson for ios 
    await notifee.requestPermission();

    // Create a time-based trigger
    const settings = notifee.getNotificationSettings();
    var trigger = {}


    if (Platform.OS == "android") {
        // Check notification setting for android
        if ((await settings).android.alarm == AndroidNotificationSetting.ENABLED) {
            trigger = {
                type: TriggerType.TIMESTAMP,
                alarmManager: true,
                timestamp: date,
            }
        } else {
            await notifee.openAlarmPermissionSettings();
        }

    } else {
        trigger = {
            type: TriggerType.TIMESTAMP,
            alarmManager: true,
            timestamp: date,
        };
    }

    // // Create a trigger notification
    await notifee.createTriggerNotification(
        {
            title: 'Alarm',
            body: `Time : ${localTime}`,
            android: {
                sound: 'defult',
                vibrationPattern: [10000, 200],
                channelId: "NotificationChannel",
                importance: AndroidImportance.HIGH,
                smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
                pressAction: {
                    id: 'default',
                },
            },
            id: id
        },
        trigger,
    ).catch((error) => {
        console.log("🚀 ~ file: notificationMethos.js ~ createTriggerNotification ~ error:", error)
    })
}

// Cancel Upcomming Alerm Notification
export function cancelNotificationMethod(alarmId) {
    try {
        // cancelNotification base on Id
        notifee.cancelNotification(alarmId)
    } catch (error) {
        console.log("🚀 ~ file: notificationMethos.js ~ cancelNotificationMethod ~ error:", error)
    }
}
