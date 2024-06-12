import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image , ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
const RegistrationScreen = () => {
  const [designation, setDesignation] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Manager', value: 'manager' },
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    // Add more designations as needed
  ]);
  const [imageUri, setImageUri] = useState(null);

  const handleImagePicker = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleCamera = () => {
    launchCamera({}, (response) => {
      if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <ImageBackground source={require('../../assets/images/abstract1.png')} style={styles.background_r1}>
         <ScrollView>
      <View style={styles.container_r1}>
        <Image source={require('../../assets/images/SAMGREEN.png')} style={styles.logo_r1} />
        {/* <Text style={styles.heading}>Request User Registration</Text> */}
        <TextInput style={styles.input_r1} placeholder="User ID" placeholderTextColor="green" />
        <TextInput style={styles.input_r1} placeholder="Full Name" placeholderTextColor="green" />
        <TextInput style={styles.input_r1} placeholder="Email ID" placeholderTextColor="green" />
        <TextInput style={styles.input_r1} placeholder="Mobile Number" placeholderTextColor="green" />
        <DropDownPicker
          open={open}
          value={designation}
          items={items}
          setOpen={setOpen}
          setValue={setDesignation}
          setItems={setItems}
          placeholder="Select Designation"
          searchable={true}
          style={styles.dropdown_r1}
          dropDownContainerStyle={styles.dropdownContainer_r1}
          placeholderStyle={styles.placeholderStyle_r1}
          searchPlaceholder="Search..."
        />
        <TextInput style={styles.input_r1} placeholder="Enter Password" placeholderTextColor="green" secureTextEntry />
        <TextInput style={styles.input_r1} placeholder="Confirm Password" placeholderTextColor="green" secureTextEntry />
        <View style={styles.imagePickerContainer_r1}>
          <TouchableOpacity style={styles.imagePickerButton_r1} onPress={handleImagePicker}>
            <Text style={styles.imagePickerText_r1}>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePickerButton_r1} onPress={handleCamera}>
            <Text style={styles.imagePickerText_r1}>Capture Image</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageBox}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.imagePreview_r1} />
            ) : (
              <Ionicons name="person" size={50} color="#999" style={styles.iconPlaceholder} />
            )}
                </View>
        <TouchableOpacity style={styles.submitButton_r1}>
          <Text style={styles.submitButtonText_r1}>Submit</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background_r1: {
        flex: 1,
        resizeMode: 'cover',
      },
      scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container_r1: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo_r1: {
        width: "90%",
        textAlign: "center",
        marginBottom: 15
      },
      heading_r1: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      input_r1: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
        color: '#000',
      },
      dropdown_r1: {
        width: '100%',
        borderColor: 'green',
        borderRadius: 10,
        marginBottom: 15,
      },
      dropdownContainer_r1: {
        borderColor: 'green',
        borderRadius: 10,
      },
      placeholderStyle_r1: {
        color: 'green',
      },
      imagePickerContainer_r1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
      },
      imagePickerButton_r1: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center',
      },
      imagePickerText_r1: {
        color: '#000',
      },
      imageBox: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#ffff",
        borderWidth: 1,
        borderColor: 'green',
        marginBottom: 20,
        // marginTop:
      },
      imagePreview_r1: {
        width: 150,
        height: 150,
        borderRadius: 75,
      },
      iconPlaceholder: {
        textAlign: 'center',
      },
      submitButton_r1: {
        width: '100%',
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      submitButtonText_r1: {
        color: '#fff',
        fontSize: 16,
      },
});

export default RegistrationScreen;
