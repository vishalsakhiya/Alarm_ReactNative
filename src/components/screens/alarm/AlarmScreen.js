import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import notifee from '@notifee/react-native';
import { bindActionCreators } from 'redux';
import Icons from 'react-native-vector-icons/dist/MaterialIcons';
import Colors from '../../../constants/Colors';
import { reqeustAddAlarm } from '../../../redux/actions/actionCreators/commonActionCreator';
import styles from './AlarmScreenStyle';
import moment from 'moment';
import uuid from 'react-native-uuid';
import {
  createTriggerNotification,
  cancelNotificationMethod,
} from '../../common/NotificationMethos';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AlarmScreen = props => {
  const [date, setDate] = useState(new Date());
  const [alarmList, setAlarmList] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = selectedDate => {
    var currentTime = Date.now();
    const id = uuid.v4();
    if (selectedDate.getTime() < currentTime) {
      Alert.alert('Please choose future time');
      return;
    }
    var alarmTempList = [...alarmList];
    createTriggerNotification(selectedDate, id);
    const data = {
      time: moment(selectedDate.toLocaleTimeString(), 'hh:mm:ss A').format(
        'hh:mm A',
      ),
      isActive: true,
      date: selectedDate,
      repetArray: [],
      id: id,
    };
    alarmTempList = alarmTempList.concat(data);
    props.reqeustAddAlarm(alarmTempList);
    setDate(selectedDate);
    hideDatePicker();
  };

  useEffect(() => {
    try {
      const list = props.data.alarmList;
      if (list != undefined) {
        setAlarmList(list);
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: AlarmScreen.js ~ props.data.alarmList useEffect ~ error:',
        error,
      );
    }
  }, [props.data.alarmList]);

  const slider = (isActive, id) => {
    function toggleActiveAlarm() {
      var alarmTempList = [...alarmList];
      const index = alarmList.findIndex(item => item.id == id);

      if (index > -1) {
        // only splice array when item is found
        if (alarmTempList[index]['isActive']) {
          cancelNotificationMethod(alarmTempList[index].id);
          alarmTempList[index]['isActive'] = !alarmTempList[index]['isActive'];
        } else {
          alarmTempList[index]['isActive'] = !alarmTempList[index]['isActive'];
          var currentTime = Date.now();
          const alarmDate = new Date(alarmTempList[index].date);
          const id = uuid.v4();
          if (alarmDate.getTime() < currentTime) {
            alarmDate.setDate(date.getDate() + 1);
          }
          createTriggerNotification(alarmDate, alarmTempList[index].id);
        }
      }
      props.reqeustAddAlarm(alarmTempList);
    }

    return (
      <TouchableOpacity
        onPress={() => {
          toggleActiveAlarm();
        }}
        style={styles.slidercontienr}>
        <View
          style={[
            styles.slidBtn,
            {
              backgroundColor: isActive ? Colors.PRIMARY_YELLOW : Colors.GRAY,
              alignSelf: isActive ? 'flex-end' : 'flex-start',
            },
          ]}
        />
      </TouchableOpacity>
    );
  };

  function deleteAlarm(id) {
    var alarmTempList = [...alarmList];
    const index = alarmTempList.findIndex(item => item.id == id);
    if (index > -1) {
      // only splice array when item is found
      notifee.getTriggerNotificationIds().then(ids => {
        const found = ids.find(itemid => itemid === id);
        if (found) {
          cancelNotificationMethod(id);
        }
      });
      if (alarmTempList.length == 1) {
        alarmTempList = [];
      } else if (alarmTempList.length > 1) {
        alarmTempList.splice(index, 1);
      }
      props.reqeustAddAlarm(alarmTempList);
    }
  }

  const renderListItem = ({ item, index }) => {
    return (
      <View key={item.id} style={styles.itmeContiner}>
        <View>
          <View style={styles.itmeChildContiner}>
            <Text style={styles.timeText}>
              {item.time.split(' ')[0]}
              <Text style={{ fontSize: 20 }}> {item.time.split(' ')[1]}</Text>
            </Text>

            <TouchableOpacity
              onPress={() => {
                deleteAlarm(item.id);
              }}>
              <Icons name={'delete'} size={25} style={styles.deleteIconStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.itmeChildContiner}>
            <Text style={styles.repetText}>Ring Once</Text>
            {slider(item?.isActive, item?.id)}
          </View>
        </View>
      </View>
    );
  };
  const CancelButtonIOS = () => {
    return (
      <TouchableOpacity
        onPress={hideDatePicker}
        activeOpacity={0.9}
        style={styles.customCancelButtonIOS}>
        <Text style={styles.customCancelButtonTextIOS}>Cancel</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.continer}>
      <FlatList
        data={alarmList}
        key={item => {
          item.id;
        }}
        renderItem={renderListItem}
        style={{ width: '100%', paddingHorizontal: 10 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No alarm found</Text>
        }
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          showDatePicker();
        }}>
        <Icons name={'add'} size={25} style={{ color: Colors.BLACK }} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        date={new Date()}
        mode="time"
        is24Hour={true}
        themeVariant="dark"
        onConfirm={(date) => {
          hideDatePicker()
          handleConfirm(date)
        }}
        onCancel={hideDatePicker}
        backdropStyleIOS={{ backgroundColor: Colors.BLACK_44 }}
        pickerContainerStyleIOS={{ backgroundColor: Colors.BLACK_20 }}
        customCancelButtonIOS={CancelButtonIOS}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    data: state.dataReducer,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      reqeustAddAlarm,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AlarmScreen);
