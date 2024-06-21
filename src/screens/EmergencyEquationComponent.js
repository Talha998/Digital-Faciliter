import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const EmergencyEquationComponent = () => {
  const headers = ['Person ID', 'Card Number', 'Person Name', 'Department', 'Designation', 'Level 4', 'Entry Time'];

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
            <Text style={[styles.headerCell, { width: DesignationWidth, borderRightWidth: 1, borderColor: '#fff' }]}>Designation</Text>
            <Text style={[styles.headerCell, { width: Level4Width, borderRightWidth: 1, borderColor: '#fff' }]}>Level4</Text>
            <Text style={[styles.headerCell, { width: EntryTimeWidth }]}>Entry Time</Text>
          </View>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <View key={index} style={styles.dataRow}>
                <Text style={[styles.dataCell, { width: personIdWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.id}</Text>
                <Text style={[styles.dataCell, { width: cardNumberWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.cardNumber}</Text>
                <Text style={[styles.dataCell, { width: PersonNameWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.name}</Text>
                <Text style={[styles.dataCell, { width: DepartmentWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.department}</Text>
                <Text style={[styles.dataCell, { width: DesignationWidth, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.designation}</Text>
                <Text style={[styles.dataCell, { width: Level4Width, borderRightWidth: 1, borderColor: '#ddd' }]}>{item.level4}</Text>
                <Text style={[styles.dataCell, { width: EntryTimeWidth }]}>{item.entryTime}</Text>
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
});

export default EmergencyEquationComponent;
