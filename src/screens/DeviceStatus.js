import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const DeviceStatus = () => {
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
          <Text style={[styles.headerText, styles.greenText]}>Type</Text>
          <Text style={[styles.headerText, styles.greenText]}>Device</Text>
          <Text style={[styles.headerText, styles.greenText]}>Status</Text>
        </View>

        {/* Table Rows */}
        {/* Example rows (replace with actual data rendering logic) */}
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Mobile</Text>
          <Text style={styles.cellText}>iPhone</Text>
          <Text style={styles.cellText}>Active</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Desktop</Text>
          <Text style={styles.cellText}>Windows </Text>
          <Text style={styles.cellText}>Inactive</Text>
        </View>
      </View>

      {/* Search Bar (assuming it's at the bottom of the table) */}
     
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
    textAlign: 'center',
  },
  tableContainer: {
    backgroundColor: '#ffffff', // Table background color
    // borderRadius: 10,
    // borderTopEndRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth: 1,
    borderColor: '#00544d', // Table border color
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Table row separator color
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cellText: {
    fontSize: 14,
    color: '#00544d', // Cell text color
    flex: 1,
    textAlign: 'center',
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