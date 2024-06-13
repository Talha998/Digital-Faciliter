import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SelectDropdown = () => {
  const navigation = useNavigation();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [openRegion, setOpenRegion] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [regions, setRegions] = useState([
    { label: 'Region 1', value: 'region1' },
    { label: 'Region 2', value: 'region2' },
  ]);
  const [cities, setCities] = useState([
    { label: 'City 1', value: 'city1' },
    { label: 'City 2', value: 'city2' },
  ]);
  const [locations, setLocations] = useState([
    { label: 'Location 1', value: 'location1' },
    { label: 'Location 2', value: 'location2' },
  ]);

  const handleNext = () => {
    navigation.navigate('DrawerNavigator');
  };

  const handleOpenRegion = () => {
    setOpenRegion(!openRegion);
    setOpenCity(false);
    setOpenLocation(false);
  };

  const handleOpenCity = () => {
    setOpenCity(!openCity);
    setOpenRegion(false);
    setOpenLocation(false);
  };

  const handleOpenLocation = () => {
    setOpenLocation(!openLocation);
    setOpenRegion(false);
    setOpenCity(false);
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/abstract1.png')}
      style={styles.backgroundImage_drop_Rt}
    >
      <View style={styles.logoContainer_drop_Rt}>
        <Image 
          source={require('../../assets/images/SAMGREEN.png')}
          style={styles.logo_drop_Rt}
        />
      </View>
      <View style={styles.container_drop_Rt}>
        <View style={[styles.dropdownWrapper_drop_Rt, openRegion && { zIndex: 3000 }]}>
          <Icon name="globe" size={20} color="black" style={styles.icon_drop_Rt} />
          <DropDownPicker
            open={openRegion}
            value={selectedRegion}
            items={regions}
            setOpen={handleOpenRegion}
            setValue={setSelectedRegion}
            setItems={setRegions}
            placeholder="Select Region"
            searchable={true}
            style={styles.picker_drop_Rt}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            zIndex={3000}
            zIndexInverse={1000}
          />
        </View>
        <View style={[styles.dropdownWrapper_drop_Rt, openCity && { zIndex: 2000 }]}>
          <Icon name="building" size={20} color="black" style={styles.icon_drop_Rt} />
          <DropDownPicker
            open={openCity}
            value={selectedCity}
            items={cities}
            setOpen={handleOpenCity}
            setValue={setSelectedCity}
            setItems={setCities}
            placeholder="Select City"
            searchable={true}
            style={styles.picker_drop_Rt}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            zIndex={2000}
            zIndexInverse={2000}
          />
        </View>
        <View style={[styles.dropdownWrapper_drop_Rt, openLocation && { zIndex: 1000 }]}>
          <Icon name="map-marker" size={20} color="black" style={styles.icon_drop_Rt} />
          <DropDownPicker
            open={openLocation}
            value={selectedLocation}
            items={locations}
            setOpen={handleOpenLocation}
            setValue={setSelectedLocation}
            setItems={setLocations}
            placeholder="Select Location"
            searchable={true}
            style={styles.picker_drop_Rt}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            zIndex={1000}
            zIndexInverse={3000}
          />
        </View>
        <TouchableOpacity style={styles.button__drop_Rt} onPress={handleNext}>
          <Text style={styles.buttonText__drop_Rt}>Next</Text>
          <Icon name="arrow-right" size={20} color="#fff" style={styles.buttonIcon_drop_Rt} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage_drop_Rt: {
    flex: 1,
    resizeMode: 'cover',
  },
  container_drop_Rt: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    
  },
  dropdownWrapper_drop_Rt: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00544d',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 0,
    paddingVertical:20,
    width: '100%',
    zIndex: 1, // Ensure initial zIndex is set
  },
  icon_drop_Rt: {
    position: 'absolute',
    left: 10,
    zIndex: 5000,
  },
  picker_drop_Rt: {
    flex: 1,
    color: '#fff',
    paddingLeft: 35, // Add padding to avoid overlap with the icon
  },
  dropDownContainerStyle: {
    // backgroundColor: '#00544d',
    // color:red
    
  },
  button__drop_Rt: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00544d',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText__drop_Rt: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  buttonIcon_drop_Rt: {
    marginLeft: 10,
  },
  logoContainer_drop_Rt: {
    alignItems: 'center',
    width: '100%',
  },
  logo_drop_Rt: {
    color: 'white',
    marginBottom: 10,
    resizeMode: 'contain',
    marginTop: '25%',
  },
});

export default SelectDropdown;
