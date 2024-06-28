import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDropdown = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        {/* <Icon name="location-on" size={24} color="black" /> */}
        <Text style={styles.input}>
          {selectedItem ? selectedItem.label : 'Select Location'}
        </Text>
        <Icon name="arrow-drop-down" size={24} color="green" />
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdownContent}>
          <TextInput
            placeholder="Type something..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          <ScrollView nestedScrollEnabled={true}>
            {filteredItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.listItem}
                onPress={() => {
                  setSelectedItem(item);
                  setDropdownVisible(false);
                  setSearchQuery('');
                }}
              >
                <Text style={styles.listItemText}>{item.label}</Text>
                {selectedItem && selectedItem.value === item.value && (
                  <Icon name="check" size={24} color="green" />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    marginBottom:15,
    
    justifyContent: 'center',
  },
  inputContainer: {
    width:"100%"
,    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    color:'green',
    paddingRight:5,
    paddingVertical:10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  dropdownContent: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'green',
    color:'green',
    backgroundColor: 'white',
    borderRadius: 5,
    maxHeight: 200,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  listItemText: {
    fontSize: 16,
  },
});

export default CustomDropdown;
