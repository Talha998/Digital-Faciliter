import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, RefreshControl } from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceStatus from "./DeviceStatus";
import ActiveWorkforce from './ActiveWorkforce';
import AlarmPerChart from './AlarmPerChart';
import PeopleEntryPerHour from './PeopleEntryPerHour';
import PeopleExitPerHour from './PeopleExitPerHour';

const Dashboard = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshBackgroundColor, setRefreshBackgroundColor] = useState('#ffffff'); // State for background color
  const scrollViewRef = useRef(null); // Ref for ScrollView

  // Handle refresh action
  const handleRefresh = () => {
    // Set background color to indicate refresh
    setRefreshBackgroundColor('#f0f0f0');

    // Perform your refresh logic here
    // For example, resetting data or fetching new data

    // After refresh, scroll to top
    scrollViewRef.current.scrollTo({ y: 0, animated: true });

    // Reset background color after a short delay
    setTimeout(() => {
      setRefreshBackgroundColor('#ffffff'); // Reset to original background color
    }, 1000); // Adjust delay as needed
  };

  const handleConfirm = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const [openArea, setOpenArea] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [areas, setAreas] = useState([
    { label: 'Area 1', value: 'area1' },
    { label: 'Area 2', value: 'area2' },
    // Add more areas as needed
  ]);

  const [openBrand, setOpenBrand] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brands, setBrands] = useState([
    { label: 'Brand 1', value: 'brand1' },
    { label: 'Brand 2', value: 'brand2' },
    // Add more brands as needed
  ]);

  const CustomArrowUpIcon = () => (
    <Icon name="chevron-up" size={16} color="#fff" />
  );

  const CustomArrowDownIcon = () => (
    <Icon name="chevron-down" size={16} color="#fff" />
  );

  const handleOpenArea = (isOpen) => {
    setOpenArea(isOpen);
    if (isOpen) setOpenBrand(false); // Close Brand dropdown when Area dropdown is opened
  };

  const handleOpenBrand = (isOpen) => {
    setOpenBrand(isOpen);
    if (isOpen) setOpenArea(false); // Close Area dropdown when Brand dropdown is opened
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: refreshBackgroundColor }}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={handleRefresh} />
      }
  >
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <View>
        <View style={styles.dateContainer}>
          <Text style={styles.label_from}>From : </Text>
          <Text style={styles.dateText}>{`${fromDate.toLocaleDateString()} ${fromDate.toLocaleTimeString()}`}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.label_To}>To : </Text>
          <Text style={styles.dateText}>{`${toDate.toLocaleDateString()} ${toDate.toLocaleTimeString()}`}</Text>
        </View>
        </View>
          <View style={styles.right_icons}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.openModalButton}
        >
          <Icon name="calendar" size={28} color="#00544d" />
        </TouchableOpacity>
        
        <TouchableOpacity
          // onPress={handleRefresh}
          // style={styles.iconButton}
        >
          <Icon name="refresh" size={28} color="#00544d" />
        </TouchableOpacity>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.serverURLContainerf2}>
              <Text style={styles.modalTitle}>Select Dates</Text>
            </View>
            <View style={styles.datePickerContainer}>
              <Text style={styles.label_dash}>From: </Text>
              <DatePicker
                date={fromDate}
                onDateChange={setFromDate}
                mode="datetime"
                style={styles.datePicker}
                is24hourSource="locale"
              />
            </View>
            <View style={styles.datePickerContainer}>
              <Text style={styles.label_dash}>To: </Text>
              <DatePicker
                date={toDate}
                onDateChange={setToDate}
                mode="datetime"
                style={styles.datePicker}
                is24hourSource="locale"
              />
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={handleCancel}
                style={[styles.modalButton, styles.cancelButton]}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirm}
                style={[styles.modalButton, styles.confirmButton]}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={[styles.dropdownWrapper, openArea && { zIndex: 3000 }]}>
        <Icon name="globe" size={20} color="#fff" style={styles.icon} />
        <DropDownPicker
          open={openArea}
          value={selectedArea}
          items={areas}
          setOpen={handleOpenArea}
          setValue={setSelectedArea}
          setItems={setAreas}
          placeholder="Select Area"
          searchable={true}
          style={styles.picker}
          searchPlaceholderTextColor='#ffff'
          placeholderStyle={styles.placeholderStyle}
          ArrowUpIconComponent={CustomArrowUpIcon}
          ArrowDownIconComponent={CustomArrowDownIcon}
          labelStyle={styles.labelStyle}
          textStyle={styles.selectedTextStyle} 
          searchTextInputStyle={styles.searchTextInputStyle}
          // dropDownContainerStyle={styles.dropDownContainerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>

      <View style={[styles.dropdownWrapper, openBrand && { zIndex: 2000 }]}>
        <Icon name="tags" size={20} color="#ffff" style={styles.icon} />
        <DropDownPicker
           open={openBrand}
           value={selectedBrand}
           items={brands}
           setOpen={handleOpenBrand}
           setValue={setSelectedBrand}
           setItems={setBrands}
          placeholder="Select Brand"
          searchPlaceholderTextColor='#ffff'
          placeholderStyle={styles.placeholderStyle}
          searchable={true}
          style={styles.picker}
          ArrowUpIconComponent={CustomArrowUpIcon}
          ArrowDownIconComponent={CustomArrowDownIcon}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          searchTextInputStyle={styles.searchTextInputStyle}
          labelStyle={styles.labelStyle}
          textStyle={styles.selectedTextStyle}
          zIndex={2000}
          zIndexInverse={1000}
          
        />
      </View>
      <View style={styles.device_top}  >
    <DeviceStatus />
    </View>
    <View style={styles.maindash_firstchart} >
    <View style={styles.GraphDashboard}  >
    <ActiveWorkforce />
    </View>
    <View style={styles.GraphDashboard}  >
    <AlarmPerChart />
    </View>
    </View>
    <View style={styles.maindash_firstchart} >
    <View style={styles.GraphDashboard}  >
    <PeopleEntryPerHour />
    </View>
    <View style={styles.GraphDashboard}  >
    <PeopleExitPerHour />
    </View>
    </View>
    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 18,
  },
  topContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom: 0,
  },
  right_icons: {
    flexDirection:"row",
    marginTop:8
    
    // justifyContent:"space-between",
    // marginBottom: 20,
  },
  
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
     fontWeight: "700"
  },
  dateText: {
    fontSize: 15,
    color: '#00544d',
  },
  openModalButton: {
    paddingRight:15
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 0,
    alignItems: 'center',
  },
  serverURLContainerf2: {
    width: '100%',
    backgroundColor: '#00544d',
    paddingTop: 16,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#ffff",
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  label_dash: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: "700"
  },
  label_from: {
    fontSize: 14,
    marginRight: 5,
    fontWeight: "700",
    color:"#00544d"
  },
  label_To: {
    fontSize: 14,
    marginRight: 22,
    fontWeight: "700",
     color:"#00544d"
  },
  
  
  datePicker: {
    flex: 1,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
    
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: '#00544d',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    width: 120,
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: '#00544d',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    width: 120,
    textAlign: "center",
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#00544d',
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 0,
    // paddingVertical: 20,
    width: '100%',
    zIndex: 1, // Ensure initial zIndex is set
  },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 5000,
  },
  picker: {
    flex: 1,
    backgroundColor: '#00544d', // Background color of the dropdown
    color: '#fff',
    paddingLeft: 35, // Add padding to avoid overlap with the icon
  },
  dropDownContainerStyle: {
    backgroundColor: '#00544d',
     // Background color of the dropdown container
  },
  dropDownContainerOpen: {
    backgroundColor: 'lightgreen', // Background color when dropdown is open
  },
  placeholderStyle: {
    color: '#ffff', // Color of the placeholder text
  },
  labelStyle: {
    color: '#fff', // Color of the dropdown items
  },
  selectedTextStyle: {
    color: '#fff', // Color of the selected value
  },
  searchTextInputStyle: {
    color: '#fff', // Color of the search text input
  },
  device_top: {
    paddingTop:7,
  },
  GraphDashboard: {
// paddingTop:7,
    width:"48%",
    // marginVertical:20,
    marginHorizontal:5,
  },
  maindash_firstchart: {
    flexDirection:"row",
    marginBottom:-50
    // justifyContent:"space-between"
  }
});

export default Dashboard;
