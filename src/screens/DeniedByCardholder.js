import React, { useState, useEffect , useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput ,  ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
import CardByCardholderGraph from './CardByCardholderGraph';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardByCardholderGraphDay from './CardByCardholderGraphDay';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';

const DeniedByCardholder = () => {
  const {
    selectedRegion,
    selectedCity,
    selectedLocation,
    selectedArea,
    selectedBrand,
} = useContext(AppContext);
const currentDate = new Date();
  
const fromDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
const toDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);

const [fromDate, setFromDate] = useState(fromDateTime);
const [toDate, setToDate] = useState(toDateTime);

const convertToLocalTime = (date) => {
  const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  return localDate.toISOString().slice(0, 19).replace('T', ' ');
};

const startDate = convertToLocalTime(fromDate);
const endDate = convertToLocalTime(toDate);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const fetchDeniedCardholders = async () => {
    try {
      const baseUrl = await AsyncStorage.getItem('baseURL');
      const token = await AsyncStorage.getItem('userToken');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios({
        method: "get",
        url: `${baseUrl}/api/GetDeniedCardholder?Language=p&Tran_Type=S&Level1_ID=${selectedRegion}&Level2_ID=${selectedCity}&Level3_ID=${selectedLocation}&Level4_ID=${selectedArea}&Eqpt_Group_ID=${selectedBrand}&Start_Date=${fromDate.toISOString()}&End_Date=${toDate.toISOString()}`,
        headers: headers,
      });
  
      console.log("API Response:", response); // Log the full response for debugging
      console.log("Response Data:", response.data); // Log the response data
  
      if (response.status === 200 && response.data.Data) {
        setData(response.data.Data);
        setFilteredData(response.data.Data); // Update filteredData here
      } else {
        setData([]);
        setFilteredData([]); // Reset filteredData if no data is found
        console.error("No data found or unexpected response format");
      }
    } catch (error) {
      setData([]);
      setFilteredData([]); // Reset filteredData on error
      console.error("API Error:", error); // Log the error for debugging
      if (error.response?.status === 404 || error.response?.status === 500) {
        // Handle specific error codes if needed
      }
    } finally {
      // Optionally handle loading state here
    }
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setData(filteredData); // Reset to original data when search query is empty
    } else {
      const filteredItems = filteredData.filter(item =>
        item.Person_Name.toLowerCase().includes(query.toLowerCase())
      );
      setData(filteredItems); // Update data state with filtered items
    }
  };
  const handleConfirm = () => {
    setModalVisible(false);
    fetchDeniedCardholders();
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchDeniedCardholders();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
      <View>
        <View style={styles.dateContainer}>
          <Text style={styles.label_from}>From : </Text>
          <Text style={styles.dateText}>{startDate}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.label_To}>To : </Text>
          <Text style={styles.dateText}>{endDate}</Text>
          
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
                  onDateChange={(date) => setFromDate(new Date(date))}
                  mode="datetime"
                  style={styles.datePicker}
                  is24hourSource="locale"
                />
              </View>
              <View style={styles.datePickerContainer}>
                <Text style={styles.label_dash}>To: </Text>
                <DatePicker
                  date={toDate}
                  onDateChange={(date) => setToDate(new Date(date))}
                  mode="datetime"
                  style={styles.datePicker}
                  is24hourSource="locale"
                />
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleCancel} style={[styles.modalButton, styles.cancelButton]}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={[styles.modalButton, styles.confirmButton]}>
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      <View style={styles.container_grid}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Person Name</Text>
          <Text style={styles.headerText}>Access Denied</Text>
        </View>
        <TextInput
        style={styles.searchInput}
        placeholder="Search by Person Name"
        onChangeText={handleSearch}
        value={searchQuery}
      />
        <ScrollView>
          {data.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.Person_Name}</Text>
              <Text style={styles.cell}>{item.Access_Denied}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <CardByCardholderGraph />
        <View style={styles.CardByCardholderGraphDay}>
          <CardByCardholderGraphDay />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 18,
  },
  CardByCardholderGraphDay: {
    paddingHorizontal: 12,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  container_grid: {
    height: 240, // Fixed height for the grid container
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    width: "100%",
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#00695c',
    justifyContent:"space-between",
    padding: 10,
    paddingHorizontal:15
  },
  headerText: {
    // flex: 1,
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection:"row",
    justifyContent:"space-between",
    padding: 10,
    paddingHorizontal:15
  },
 
  
});

export default DeniedByCardholder