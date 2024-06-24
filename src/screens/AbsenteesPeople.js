import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';

const AbsenteesPeople = () => {
  const headers = ['Person ID', 'Card Number', 'Person Name', 'Department', 'Designation', 'Level 4', 'Entry Time'];
  const [fromDate, setFromDate] = useState(new Date());
  const [OnlyDate, setOnlyDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleConfirm = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const initialData = [
    { id: '1', cardNumber: '1234', name: 'John', department: 'HR', designation: 'Manager', level4: 'L4-A', entryTime: '09:00 AM' },
    { id: '2', cardNumber: '1234', name: 'Jane', department: 'Finance', designation: 'Analyst', level4: 'L4-B', entryTime: '09:15 AM' },
    { id: '3', cardNumber: '1234', name: 'Jake', department: 'Engineering', designation: 'Engineer', level4: 'L4-C', entryTime: '10:00 AM' },
    // Add more data objects here
  ];

  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const personIdWidth = 80;
  const cardNumberWidth = 110;
  const PersonNameWidth = 110;
  const DepartmentWidth = 100;
  const DesignationWidth = 100;
  const Level4Width = 100;
  const EntryTimeWidth = 100;

  // Function to handle search input change
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredData(data); // Reset to original data if search query is empty
    } else {
      const filtered = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
      setFilteredData(filtered);
    }
  };

  return (
   <View style={styles.container}>
  <View style={styles.topContainer}>
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.label_from}>Date : </Text>
        <Text style={styles.dateText}>{`${OnlyDate.toLocaleDateString()}`}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.label_from}>From : </Text>
        <Text style={styles.dateText}>{`${fromDate.toLocaleTimeString()}`}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.label_To}>To : </Text>
        <Text style={styles.dateText}>{`${toDate.toLocaleTimeString()}`}</Text>
      </View>
    </View>
    <View style={styles.right_icons}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.openModalButton}
      >
        <Icon name="calendar" size={28} color="#00544d" />
      </TouchableOpacity>
      <TouchableOpacity>
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
          <Text style={styles.label_dash}>Date: </Text>
          <DatePicker
                date={OnlyDate}
                onDateChange={setOnlyDate}
                mode="date"
                style={styles.datePicker}
                is24hourSource="locale"
              />
        </View>
        <View style={styles.datePickerContainer}>
          <Text style={styles.label_dash}>From Time: </Text>
          <DatePicker
            date={fromDate}
            onDateChange={date => setFromDate(new Date(date))}
            mode="time"
            style={styles.datePicker}
            is24hourSource="locale"
          />
        </View>
        <View style={styles.datePickerContainer}>
          <Text style={styles.label_dash}>To Time: </Text>
          <DatePicker
            date={toDate}
            onDateChange={date => setToDate(new Date(date))}
            mode="time"
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

  <TextInput
    style={styles.searchInput}
    placeholder="Search by Person Name"
    onChangeText={handleSearch}
    value={searchQuery}
  />

  <ScrollView horizontal>
    <View style={styles.table}>
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, { width: personIdWidth, borderRightWidth: 1, borderColor: '#fff' }]}>Person ID</Text>
        <Text style={[styles.headerCell, { width: cardNumberWidth, borderRightWidth: 1, borderColor: '#fff' }]}>Card Number</Text>
        <Text style={[styles.headerCell, { width: PersonNameWidth, borderRightWidth: 1, borderColor: '#fff' }]}>Person Name</Text>
        <Text style={[styles.headerCell, { width: DepartmentWidth, borderRightWidth: 1, borderColor: '#fff' }]}>Department</Text>
      </View>
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={[styles.dataCell, { width: personIdWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.id}</Text>
            <Text style={[styles.dataCell, { width: cardNumberWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.cardNumber}</Text>
            <Text style={[styles.dataCell, { width: PersonNameWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.name}</Text>
            <Text style={[styles.dataCell, { width: DepartmentWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.department}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>No data found</Text>
      )}
    </View>
  </ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#004d40',
  },
  headerCell: {
    padding: 8,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  dataCell: {
    padding: 8,
    textAlign: 'center',
  },
  noDataText: {
    padding: 20,
    textAlign: 'center',
    color: '#777',
    fontStyle: 'italic',
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
});

export default AbsenteesPeople;
