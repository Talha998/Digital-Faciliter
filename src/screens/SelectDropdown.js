import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import icon from "../../assets/images/abstract1.png";
const SelectDropown = () => {
  const [selectedRegion, setSelectedRegion] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();
  const [selectedLocation, setSelectedLocation] = React.useState();

  return (
    <ImageBackground 
      source={require('../../assets/images/abstract1.png')}
      style={styles.backgroundImage_drop_Rt}
    >
      <View style={styles.logoContainer_drop_Rt} >
        <Image 
          source={require('../../assets/images/SAMGREEN.png')}
          style={styles.logo_drop_Rt}
        />
        </View>
        <View style={styles.container_drop_Rt}>
      
        <View style={styles.dropdownContainer_drop_Rt}>
          <Icon name="globe" size={20} color="#fff" style={styles.icon_drop_Rt} />
          <Picker
            selectedValue={selectedRegion}
            onValueChange={(itemValue, itemIndex) => setSelectedRegion(itemValue)}
            style={styles.picker_drop_Rt}
          >
            <Picker.Item label="Select Region" value="" />
            <Picker.Item label="Region 1" value="region1" />
            <Picker.Item label="Region 2" value="region2" />
          </Picker>
          {/* <Icon name="caret-down" size={20} color="#fff" style={styles.arrowIcon_drop_Rt} /> */}
        </View>
        <View style={styles.dropdownContainer_drop_Rt}>
          <Icon name="building" size={20} color="#fff" style={styles.icon_drop_Rt} />
          <Picker
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
            style={styles.picker_drop_Rt}
          >
            <Picker.Item label="Select City" value="" />
            <Picker.Item label="City 1" value="city1" />
            <Picker.Item label="City 2" value="city2" />
          </Picker>
          {/* <Icon name="caret-down" size={20} color="#fff" style={styles.arrowIcon} /> */}
        </View>
        <View style={styles.dropdownContainer_drop_Rt}>
          <Icon name="map-marker" size={20} color="#fff" style={styles.icon_drop_Rt} />
          <Picker
            selectedValue={selectedLocation}
            onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
            style={styles.picker_drop_Rt}
          >
            <Picker.Item label="Select Location" value="" />
            <Picker.Item label="Location 1" value="location1" />
            <Picker.Item label="Location 2" value="location2" />
          </Picker>
          {/* <Icon name="caret-down" size={20} color="#fff" style={styles.arrowIcon_drop_Rt} /> */}
        </View>
        <TouchableOpacity style={styles.button__drop_Rt}>
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
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop:50
    // width:"100%"
  },
 
  dropdownContainer_drop_Rt: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00544d',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  icon_drop_Rt: {
    marginRight: 10,
  },
  picker_drop_Rt: {
    flex: 1,
    color: '#fff',
  },
  arrowIcon_drop_Rt: {
    marginLeft: 10,
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
    // paddingHorizontal:20,
  // marginHorizontal:50,
  width:"100%",
 },
 logo_drop_Rt: {
  color: 'white',
  // fontSize: 14,
  marginBottom: 10,
  // width:"50%",
  resizeMode: 'contain',
  marginTop: "25%",
  
},
});

export default SelectDropown;
