import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext';

const DeviceStatus = () => {
  const { dashDeviceData } = useContext(AppContext);
console.log(dashDeviceData , "dashDeviceData")
  return (
    <View style={styles.container_device_status}>
      {/* Table Header */}
      <View style={[styles.tableHeader, styles.headerRow]}>
        <Text style={[styles.headerText_device, styles.greenText]}>Device Status</Text>
      </View>

      {/* Main Table Container */}
      <View style={styles.tableContainer}>
        {/* Table Headers */}
        <View style={styles.tableRow}>
          <Text style={[styles.headerText, styles.tableCellHeader]}>Type</Text>
          <Text style={[styles.headerText, styles.greenText]}>Device</Text>
          <Text style={[styles.headerText, styles.greenText]}>Status</Text>
        </View>

        {/* Table Rows */}
        {dashDeviceData?.map(device => (
          <View style={styles.tableRow} key={device?.Eqpt_ID}>
            <Text style={styles.tableCell}>{device?.Eqpt_Type_Title}</Text>
            <Text style={styles.cellText}>{device?.Eqpt_Title}</Text>
            <Text style={styles.cellText}>{device?.Device_Status}</Text>
          </View>
        ))}
      </View>

      {/* Search Bar (assuming it's at the bottom of the table) */}
      {/* Include your search bar component here if applicable */}

    </View>
  );
};

const styles = StyleSheet.create({
    container_device_status: {
    // flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
    // paddingBottom: 10,
    // backgroundColor: '#ffffff', // Table background color
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#00544d', // Table border color
  },
  tableHeader: {
    backgroundColor: '#00544d', // Header background color
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // marginBottom: 10,
    paddingVertical: 10,
    // alignItems: 'center',
  },
  tableCellHeader: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d4d',
    marginRight:"20%"
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00544d', // Header text color
    flex: 1,
    textAlign: 'center',
  },
  headerText_device: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // Header text color
    flex: 1,
    textAlign: 'left',
    marginLeft:10
  },
  tableContainer: {
    backgroundColor: '#ffffff', // Table background color
    // borderRadius: 10,
    // borderTopEndRadius:10,
    width: '100%',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth: 1,
    borderColor: '#00544d', // Table border color
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cellText: {
    fontSize: 14,
    color: '#00544d', // Cell text color
    flex: 1,
    textAlign: 'center',
  },
  tableCell:{
    fontSize: 14,
    color: '#00544d', // Cell text color
    flex: 1,
    textAlign: 'center',
     marginRight:"20%"
  },
  greenText: {
    // backgroundColor: '#00544d', // Header and cell background color
  },
  searchContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Separator above search bar
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 14,
    color: '#00544d', // Search text color
  },
});

export default DeviceStatus;