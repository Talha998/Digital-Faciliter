import React, { useState , useEffect , useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
  Image
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
  const [modalVisible, setModalVisible] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleYes = () => {
    // Handle Yes action here
    closeModal();
  };

  const handleNo = () => {
    closeModal();
  };

  const slideAnim = useRef(new Animated.Value(-500)).current; // Initial position off-screen

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible, slideAnim]);
  return (
    <View style={{ flex: 1 }}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContentf2, { transform: [{ translateY: slideAnim }] }]}>

            {/* Top Header */}
            <View style={styles.serverURLContainerf2}>
              <Text style={styles.serverURLf2}>Log Out</Text>
              <TouchableOpacity onPress={closeModal}>
                <Image source={require('../../assets/images/cancel-39-39.png')} style={styles.cancelIcon} />
              </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <View style={styles.contentContainer}>
          <Text style={styles.logoutText}>Are you sure you want to logout?</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNo}>
            <Ionicons name="close-circle" size={24} color="white" style={styles.icon} />
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleYes}>
            <Ionicons name="checkmark-circle" size={24} color="white" style={styles.icon} />
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          
          </View>
        </View>
          </Animated.View>
        </View>
      </Modal>
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
    navigation.navigate('Emergency Equation'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}
  style={styles.dropdownItem}
>
  <FontAwesome5 name="times-circle" size={20} color="#333" />
  <Text style={styles.dropdownLabel}>Emergency Equation</Text>
</TouchableOpacity>
              <TouchableOpacity
  onPress={() => {
    navigation.navigate('Denied By Device'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}
  style={styles.dropdownItem}
>
  <FontAwesome5 name="times-circle" size={20} color="#333" />
  <Text style={styles.dropdownLabel}>Denied By Device</Text>
</TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('Denied By Cardholder'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}  >
                <FontAwesome5 name="user-times" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Denied By Cardholder</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('Door Alarm'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }} >
                <FontAwesome5 name="bell" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Door Alarm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('Devices Activity'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}  >
                <FontAwesome5 name="clipboard-list" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Devices Activity</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('Door Management'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}  >
                <FontAwesome5 name="clipboard-list" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Door Management</Text>
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
    navigation.navigate('Attendance Analysis'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}   >
                <FontAwesome5 name="chart-line" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Attendance Analysis</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}  onPress={() => {
    navigation.navigate('Absentees People'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }} >
                <FontAwesome5 name="user-slash" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Absentees People</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.drawerItem} onPress={() => {
    navigation.navigate('Settings'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}>
          <Ionicons name="settings-outline" size={20} color="#333" />
            <Text style={styles.drawerLabel}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}  onPress={() => {
    navigation.navigate('About Screen'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}>
          <Ionicons name="information-circle-outline" size={20} color="#333" />
            <Text style={styles.drawerLabel}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={() => {
    navigation.navigate('Privacy Statments'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}>
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
              <TouchableOpacity style={styles.dropdownItem} onPress={() => {
    navigation.navigate('User Guide'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}>
                <FontAwesome5 name="book" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>User Guide</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => {
    navigation.navigate('Feed back'); // Replace 'DeniedByDeviceScreen' with the actual screen name you want to navigate to
  }}>
                <FontAwesome5 name="comment-dots" size={20} color="#333" />
                <Text style={styles.dropdownLabel}>Feedback</Text>
              </TouchableOpacity>
            </View>
          )}
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="log-out-outline" size={22} />
            <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5 }} onPress={openModal}  >
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center', // Center the modal vertically
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentf2: {
    width: '80%',
    height: 170,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  serverURLContainerf2: {
    backgroundColor: '#00544d',
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  serverURLf2: {
    color: 'white',
    // textAlign: 'center',
    fontWeight: "700",
    fontSize: 16,
    flex: 1,
    marginLeft: 0,
  },
  cancelIcon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    marginBottom: 20,
    marginTop:10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00544d',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color:'#fff'
  },
});

export default CustomDrawer;
