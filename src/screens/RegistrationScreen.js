import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import CustomDropdown from '../container/Customdropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors }, setValue  } = useForm({
    defaultValues: {
      Role_ID: 1,
      User_Account_Type: 'L',
      User_ID: '',
      User_Password: '',
      Full_Name: '',
      User_Email: '',
      Mobile_No: '',
      Desig_ID: '',
      Expiry_Date: '2023-06-06T22:03:35',
      Is_Active: '1',
      Is_Sys_Admin_User: '0',
      // User_Image: 'null',
      Is_Login: '1',
      Last_Update_On: '2023-05-07T22:03:35',
      userLocations: [],
    },
  });
  const [designation, setDesignation] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(true);

  const getList = async () => {
    try {
      const baseURL = await AsyncStorage.getItem('baseURL');
      const response = await axios.get(`http://18.226.185.31:8081/api/GetDesignation`);
      const responseData = response.data.Data.map(item => ({
        label: item.Desig_Title_P,
        value: item.Desig_ID,
      }));
      setItems(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setValue('User_ID', '');
      setValue('Full_Name', '');
      setValue('User_Email', '');
      setValue('Mobile_No', '');
      setValue('designation', 'ZTE Manager');
      setValue('User_Password', '');
      setImageUri(null)
      // setValue('User_Image', null);

      return () => {};
    }, [])
  );

  const handleImagePicker = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets) {
        const imageUri = response.assets[0].uri;
        setImageUri(imageUri);
        convertImageToBase64(imageUri);
      }
    });
  };

  const handleCamera = () => {
    launchCamera({}, (response) => {
      if (response.assets) {
        const imageUri = response.assets[0].uri;
        setImageUri(imageUri);
        convertImageToBase64(imageUri);
      }
    });
  };

  const convertImageToBase64 = (imageUri) => {
    fetch(imageUri)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          setValue('User_Image', base64data);
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error('Error converting image to base64:', error);
      });
  };


  const onSubmit = async (data) => {
    console.log(data , "dataonSubmit")
    try {
      const baseURL = await AsyncStorage.getItem('baseURL');
      console.log(baseURL , "baseURL")
      const response = await axios.post(`http://18.226.185.31:8081/api/CreateUser`, data);
      if (response.data.StatusCode === 201) {
        navigation.navigate('HomeScreen');
      } else {
        console.error('Failed to create user:', response.data.Message);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <ImageBackground source={require('../../assets/images/abstract1.png')} style={styles.background_r1}>
      <ScrollView>
        <View style={styles.container_r1}>
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
            name="User_Image"
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
            rules={{ required: 'User ID is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input_r1, errors.User_ID && styles.errorInput]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="User ID"
                  placeholderTextColor="green"
                />
                {errors.User_ID && <Text style={styles.errorText}>{errors.User_ID.message}</Text>}
              </>
            )}
            name="User_ID"
          />
          <Controller
            control={control}
            rules={{ required: 'Full Name is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input_r1, errors.Full_Name && styles.errorInput]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Full Name"
                  placeholderTextColor="green"
                />
                {errors.Full_Name && <Text style={styles.errorText}>{errors.Full_Name.message}</Text>}
              </>
            )}
            name="Full_Name"
          />
          <Controller
            control={control}
            rules={{ required: 'Email ID is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input_r1, errors.User_Email && styles.errorInput]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Email ID"
                  placeholderTextColor="green"
                />
                {errors.User_Email && <Text style={styles.errorText}>{errors.User_Email.message}</Text>}
              </>
            )}
            name="User_Email"
          />
           <CustomDropdown items={items} loading={loading} />

          <Controller
            control={control}
            rules={{ required: 'Mobile Number is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input_r1, errors.Mobile_No && styles.errorInput]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Mobile Number"
                  placeholderTextColor="green"
                />
                {errors.Mobile_No && <Text style={styles.errorText}>{errors.Mobile_No.message}</Text>}
              </>
            )}
            name="Mobile_No"
          />
           
          <Controller
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[styles.input_r1, errors.User_Password && styles.errorInput]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Enter Password"
                  placeholderTextColor="green"
                  secureTextEntry
                />
                {errors.User_Password && <Text style={styles.errorText}>{errors.User_Password.message}</Text>}
              </>
            )}
            name="User_Password"
          />
       
          {/* <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={onChange}
                setItems={setItems}
                onBlur={onBlur}
                placeholder="Select designation"
                style={[styles.input_r1, { zIndex: 1000 }]}
                placeholderStyle={{ color: 'green' }}
                dropDownContainerStyle={{ zIndex: 1000 }}
              />
            )}
            name="Desig_ID"
          /> */}
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
        // height:50,
        width: '100%',
        // padding: 15,
        paddingHorizontal:10,
    paddingVertical:10,
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
        maxHeight: 200
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
        marginBottom: 15,
      },
      imagePickerButton_r1: {
        flex: 1,
        backgroundColor: '#ddd',
        // padding: 15,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center',
      },
      imagePickerText_r1: {
        color: '#000',
      },
      imageBox: {
        width: 125,
        height: 125,
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
