import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image , ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';

const RegistrationScreen = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      userId: '',
      fullName: '',
      email: '',
      mobileNumber: '',
      designation: null, // or initial value for the dropdown
      password: '',
      confirmPassword: '',
      image: null // add a default value for the image
    },
  });
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
    console.log('Opening camera...');
    launchCamera({}, (response) => {
      console.log('Camera response:', response);
      if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const onSubmit = (data) => {
    console.log(data); // Replace with your submission logic
    // Example: Send data to backend or perform other actions
  };

  return (
    <ImageBackground source={require('../../assets/images/abstract1.png')} style={styles.background_r1}>
         <ScrollView>
      <View style={styles.container_r1}>
        <Image source={require('../../assets/images/SAMGREEN.png')} style={styles.logo_r1} />
        {/* <Text style={styles.heading}>Request User Registration</Text> */}
        <Controller
          control={control}
          rules={{ required: 'User ID is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={[styles.input_r1, errors.userId && styles.errorInput]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="User ID"
                placeholderTextColor="green"
              />
              {errors.userId && <Text style={styles.errorText}>{errors.userId.message}</Text>}
            </>
          )}
          name="userId"
        />
        <Controller
          control={control}
          rules={{ required: 'Full Name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={[styles.input_r1, errors.fullName && styles.errorInput]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Full Name"
                placeholderTextColor="green"
              />
        {errors.fullName && <Text style={styles.errorText}>{errors.fullName.message}</Text>}
            </>
          )}
          name="fullName"
        />
        <Controller
          control={control}
          rules={{ required: 'Email ID is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={[styles.input_r1, errors.email && styles.errorInput]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email ID"
                placeholderTextColor="green"
              />
              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </>
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{ required: 'Mobile Number is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={[styles.input_r1, errors.mobileNumber && styles.errorInput]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Mobile Number"
                placeholderTextColor="green"
              />
              {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber.message}</Text>}
            </>
          )}
          name="mobileNumber"
        />
       <Controller
  control={control}
  rules={{ required: 'Designation is required' }}
  render={({ field: { onChange, onBlur, value } }) => (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={onChange} // Use onChange instead of setDesignation
        setItems={setItems}
        placeholder="Select Designation"
        searchable={true}
        style={[styles.dropdown_r1, errors.designation && styles.errorDropdown]}
        dropDownContainerStyle={styles.dropdownContainer_r1}
        placeholderStyle={styles.placeholderStyle_r1}
        searchPlaceholder="Search..."
        onBlur={onBlur}
      />
      {errors.designation && <Text style={styles.errorText}>{errors.designation.message}</Text>}
    </View>
  )}
  name="designation"
/>
        {/* {errors.designation && <Text style={styles.errorText}>{errors.designation.message}</Text>} */}
        <Controller
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
            <TextInput  style={[styles.input_r1, errors.password && styles.errorInput]}
                onBlur={onBlur}
                onChangeText={onChange}
            placeholder="Enter Password" placeholderTextColor="green" secureTextEntry />
             {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </>
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{ required: 'Confirm Password is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
        <TextInput   style={[styles.input_r1, errors.ConfirmPassword && styles.errorInput]}
                onBlur={onBlur}
                onChangeText={onChange} placeholder="Confirm Password" 
        placeholderTextColor="green" secureTextEntry />
        {errors.ConfirmPassword && <Text style={styles.errorText}>{errors.ConfirmPassword.message}</Text>}
            </>
          )}
          name="ConfirmPassword"
        />
      <View style={styles.imagePickerContainer_r1}>
  <TouchableOpacity style={styles.imagePickerButton_r1} onPress={handleImagePicker}>
    <Text style={styles.imagePickerText_r1}>Upload Image</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.imagePickerButton_r1} onPress={handleCamera}>
    <Text style={styles.imagePickerText_r1}>Capture Image</Text>
  </TouchableOpacity>
</View>
<Controller
  control={control}
  rules={{ required: 'Image is required' }}
  render={({ field: { onChange, onBlur, value } }) => (
    <View style={[styles.imageBox, errors.image && styles.errorImageBox]}>
      {value || imageUri ? (
        <Image source={{ uri: value || imageUri }} style={styles.imagePreview_r1} />
      ) : (
        <Ionicons name="person" size={50} color="#999" style={styles.iconPlaceholder} />
      )}
    </View>
  )}
  name="image"
/>
{/* {errors.image && <Text style={styles.errorText_center}>{errors.image.message}</Text>} */}
                <TouchableOpacity style={styles.submitButton_r1} onPress={handleSubmit(onSubmit)}>
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
      errorInput: {
        borderColor: 'red',
      },
      errorDropdown: {
        borderColor: 'red',
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
        alignSelf: 'flex-start',
        textAlign: 'left',
      },
      errorText_center: {
        color: 'red',
        marginBottom: 10,
        // alignSelf: 'flex-start',
        // textAlign: 'left',
      },
      
      errorImageBox: {
        borderColor: 'red',
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
        backgroundColor: '#046357',
        padding: 15,
        // opacity:1,
        borderRadius: 10,
        alignItems: 'center',
      },
      submitButtonText_r1: {
        color: '#fff',
        fontSize: 16,
      },
});

export default RegistrationScreen;
