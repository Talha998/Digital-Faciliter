import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [accessControlsDropdown, setAccessControlsDropdown] = useState(false);
  const [attendanceDropdown, setAttendanceDropdown] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ marginTop: -4 }}
      >
        <ImageBackground
          source={require('../../assets/images/drawer.png')}
          style={{ padding: 20, height: 200 }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            {t('Digital_Faciliter')}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            {t('Seamless_Solutions')}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontFamily: 'Roboto-Medium',
              marginBottom: 0,
              fontWeight: '800',
              marginTop: '20%',
            }}
          >
            System Admin
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <TouchableOpacity
            onPress={() => setAccessControlsDropdown(!accessControlsDropdown)}
            style={styles.drawerItem}
          >
            <Ionicons name="lock-closed-outline" size={22} color="#333" />
            <Text style={styles.drawerLabel}>Access Controls Insights</Text>
            <Ionicons
              name={accessControlsDropdown ? 'chevron-up' : 'chevron-down'}
              size={22}
              color="#333"
            />
          </TouchableOpacity>
          {accessControlsDropdown && (
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
  onPress={() => {
    navigation.navigate('DeniedByDeviceScreen'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}
  style={styles.dropdownItem}
>
  <FontAwesome5 name="times-circle" size={20} color="#333" />
  <Text style={styles.dropdownLabel}>Denied By Device</Text>
</TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('DeniedByCardholder'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}  >
                <FontAwesome5 name="user-times" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Denied By Cardholder</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('DoorAlarm'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }} >
                <FontAwesome5 name="bell" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Door Alarm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('DevicesActivity'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}  >
                <FontAwesome5 name="clipboard-list" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Devices Activity</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            onPress={() => setAttendanceDropdown(!attendanceDropdown)}
            style={styles.drawerItem}
          >
            <Ionicons name="calendar-outline" size={22} color="#333" />
            <Text style={styles.drawerLabel}>Attendance Analysis</Text>
            <Ionicons
              name={attendanceDropdown ? 'chevron-up' : 'chevron-down'}
              size={22}
              color="#333"
            />
          </TouchableOpacity>
          {attendanceDropdown && (
            <View style={styles.dropdownContainer}>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => {
    navigation.navigate('AttendanceAnalysis'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}   >
                <FontAwesome5 name="chart-line" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Attendance Analysis</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('AbsenteesPeople'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }} >
                <FontAwesome5 name="user-slash" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Absentees People</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="settings-outline" size={20} color="#333" />
            <Text style={styles.drawerLabel}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="information-circle-outline" size={20} color="#333" />
            <Text style={styles.drawerLabel}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#333" />
            <Text style={styles.drawerLabel}>Privacy Statement</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
      <TouchableOpacity
            onPress={() => setHelpDropdown(!helpDropdown)}
            style={styles.drawerItem_inner}
          >
            <Ionicons name="help-circle-outline" size={22} color="#333" />
            <Text style={styles.drawerLabel}>Help</Text>
            
            <Ionicons
              name={helpDropdown ? 'chevron-up' : 'chevron-down'}
              size={22}
              color="#333"
            />
          </TouchableOpacity>
          {helpDropdown && (
            <View style={styles.dropdownContainer}>
              <TouchableOpacity style={styles.dropdownItem}>
                <FontAwesome5 name="book" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>User Guide</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <FontAwesome5 name="comment-dots" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Feedback</Text>
              </TouchableOpacity>
            </View>
          )}
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="log-out-outline" size={22} />
            <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5 }}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Roboto-Medium',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          Version: 2.3.0
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  drawerItem_inner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 12,
  },
  drawerLabel: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 15,
    flex: 1,
  },
  dropdownContainer: {
    paddingLeft: 45,
    paddingBottom: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownLabel: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    marginLeft: 10,
  },
});

export default CustomDrawer;
