import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RadioButton, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFF',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      ...DefaultTheme.fonts.regular,
      fontSize: 14,
    },
  },
  radioButton: {
    size: 16, // Custom size for the radio button
  },
};

const InOutComponent = () => {
  const [selectedButton, setSelectedButton] = useState('FilterByDept');
  const [loading, setLoading] = useState(false);

  const allData = {
    FilterByCat: [
      { ID: 1, Title: 'Category 1', Entry: 5, Exit: 3 },
      { ID: 2, Title: 'Category 2', Entry: 8, Exit: 6 },
      { ID: 3, Title: 'Category 3', Entry: 2, Exit: 4 },
    ],
    FilterByGroup: [
      { ID: 4, Title: 'Group 1', Entry: 9, Exit: 1 },
      { ID: 5, Title: 'Group 2', Entry: 3, Exit: 3 },
    ],
    FilterByDept: [
      { ID: 6, Title: 'Dept 1', Entry: 7, Exit: 5 },
      { ID: 7, Title: 'Dept 2', Entry: 4, Exit: 2 },
    ],
  };

  const [filterData, setFilterData] = useState(allData[selectedButton]);

  const handleRadioButtonPress = (value) => {
    setSelectedButton(value);
    setFilterData(allData[value]);
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>IN & Out</Text>
          <RadioButton.Group onValueChange={handleRadioButtonPress} value={selectedButton}>
            <View  style={styles.inner_radio}>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.radioButtonLabel}>Category</Text>
              <RadioButton value="FilterByCat" color="#FFFF" />
            </View>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.radioButtonLabel}>Group</Text>
              <Text style={styles.FilterByGroup}>
              <RadioButton value="FilterByGroup" color="#FFFF" />
              </Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.radioButtonLabel}>Department</Text>
              <RadioButton value="FilterByDept" color="#FFFF" />
            </View>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.body}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              {filterData.length > 0 ? (
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCellHeader}>Description</Text>
                    <Text style={styles.tableCellHeader}>Entry</Text>
                    <Text style={styles.tableCellHeader}>Exit</Text>
                  </View>
                  {filterData.map((row, index) => (
                    <View key={index} style={styles.tableRow}>
                      <Text style={styles.tableCell}>{row.Title}</Text>
                      <Text style={styles.tableCell}>{row.Entry}</Text>
                      <Text style={styles.tableCell}>{row.Exit}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text>No Data Found</Text>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#004d4d',
    marginTop:25,

    // padding: 20,
    // margin: 2,
  },
  header: {
    flexDirection:"row",
    // justifyContent:"center"
    backgroundColor: '#004d4d',
    borderTopLeftRadius: 10,
    alignItems:"center",
    borderTopRightRadius: 10,
    // padding: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight:20,
    marginLeft:10,
    marginTop:3
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radioButtonLabel: {
    color: '#ffffff',
    marginLeft: 0,
    marginRight:0,
    fontSize:10
  },
  body: {
    // padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  tableCellHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d4d',
  },
  inner_radio: {
    flexDirection:"row",
    marginRight:50,
    // alignItems:"center"
  }
});

export default InOutComponent;
