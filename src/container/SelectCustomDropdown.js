import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';

const CustomDropdown = ({ items, selectedValue, setSelectedValue, color, placeholder, iconName, isOpen, setOpen, style, style2 }) => {
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

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  return (
    <View style={[styles.container, { zIndex: isOpen ? 1 : 0 }]}>
      <TouchableOpacity style={[style]} onPress={setOpen}>
        <Icon name={iconName} size={20} color={color} style={styles.icon} />
        <Text style={[style2]}>
          {selectedValue !== null ?
            (items.find(item => item.value === selectedValue)?.label || selectedValue) :
            placeholder
          }
        </Text>
        <Icons name="arrow-drop-down" size={24} color={color} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownList}>
          <TextInput
            placeholder="Type something..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          <ScrollView style={{ maxHeight: 200 }}>
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
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative', // Ensure proper stacking context
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
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure the dropdown is above other content
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
