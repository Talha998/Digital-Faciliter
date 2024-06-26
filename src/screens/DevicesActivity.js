import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';


const DevicesActivity = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleConfirm = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const data = [
    { doorName: 'Main Entrance', doorId: 'D001', forced: 'No', held: 'Yes' },
    { doorName: 'Back Door', doorId: 'D002', forced: 'Yes', held: 'No' },
    { doorName: 'Side Gate', doorId: 'D003', forced: 'No', held: 'Yes' },
    { doorName: 'Garage Door', doorId: 'D004', forced: 'Yes', held: 'Yes' },
    { doorName: 'Basement Door', doorId: 'D005', forced: 'No', held: 'No' },
  ];
  return (
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
       <View>
      <Text style={styles.Summary}>Offline Device</Text>
      </View>
      <View style={styles.container_grid}>
        
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Type</Text>
        <Text style={styles.headerText}>Device Name</Text>
       
      </View>
      <ScrollView>
        {data.map((item, index) => (
         <View key={index} style={styles.row}>
         <Text style={[styles.cellWidth]}>{item.doorName}</Text>
         <Text style={[styles.cellWidth]}>{item.doorId}</Text>
       
       </View>
        ))}
      </ScrollView>
    </View>

    {/* // Device with loggn */}
    <View>
      <Text style={[styles.Summary , styles.mt]}>Device with the Longest Total Duration</Text>
      </View>
      <View style={styles.container_grid}>
        
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>DeviceName</Text>
        <Text style={styles.headerText}>Count</Text>
        <Text style={styles.headerText}>Avearge</Text>
        <Text style={styles.headerText}>TotalDuration</Text>
       
      </View>
      <ScrollView>
        {data.map((item, index) => (
         <View key={index} style={styles.row}>
         <Text style={[ styles.cell, styles.cellWidth1]}>{item.doorName}</Text>
         <Text style={[ styles.cell, styles.cellWidth2]}>{item.doorId}</Text>
         <Text style={[ styles.cell, styles.cellWidth3]}>{item.doorId}</Text>
         <Text style={[ styles.cell, styles.cellWidth4]}>{item.doorId}</Text>
       
       </View>
        ))}
      </ScrollView>
    </View>
   
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 18,
  },
  scrollViewContainer: {
    flexGrow: 1,
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
  mt: {
   marginTop:12
  },
  container_grid: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    width: "100%"
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#00695c',
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 15
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    // flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 5,
    paddingBottom: 10,
    // borderBottomWidth:1,
    // backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  cell: {
    flex: 1,
    // textAlign: 'center',
  },
  cellWidth1: {
    minWidth: 50,
    
     // Adjust as needed for your content
  },
 
  cellWidth2: {
    minWidth: 20,
    
     // Adjust as needed for your content
  },
  cellWidth3: {
    minWidth: 20,
    
     // Adjust as needed for your content
  },
  cellWidth4: {
    minWidth: 20,
    
     // Adjust as needed for your content
  },
  
  Summary: {
    color:'#00544d',
    fontWeight:"700",
    fontSize:24,
    marginBottom:4
  }
  
});

export default DevicesActivity