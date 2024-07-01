import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';

const CustomDropdown = ({ items, selectedValue, setSelectedValue, placeholder, iconName }) => {
  console.log( selectedValue, setSelectedValue , "fff123")
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Filter items based on search query
  const filteredItems = items.filter(item =>
    item.label && item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle selection of an item
  const handleSelect = (value) => {
    setSelectedValue(value);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setOpen(!open)}>
        <Icon name={iconName} size={20} color="black" style={styles.icon} />
        <Text style={styles.input}>
        {selectedValue !== null ? 
    (items.find(item => item.value === selectedValue)?.label || selectedValue) :
    placeholder
  }
        </Text>
        <Icons name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdownList}>
          <TextInput
            placeholder="Type something..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          <FlatList
            data={filteredItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedItem(item);
                  setOpen(false);
                  setSearchQuery('');
                  handleSelect(item.value);
                }}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
                {selectedItem && selectedItem.value === item.value && (
                  <Icon name="check" size={24} color="green" />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    paddingRight: 5,
    marginVertical: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: 'green',
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
    borderRadius: 5,
    maxHeight: 200,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default CustomDropdown;
