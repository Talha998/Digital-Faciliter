import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground, StyleSheet, Modal, Animated } from 'react-native';
import styles from '../styles';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-500)).current; // Initial position off-screen

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible, slideAnim]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContentf2, { transform: [{ translateY: slideAnim }] }]}>

            {/* Top Header */}
            <View style={styles.serverURLContainerf2}>
              <Text style={styles.serverURLf2}>Privacy Policy</Text>
              <TouchableOpacity onPress={closeModal}>
                <Image source={require('../../assets/images/favicon.png')} style={styles.cancelIcon} />
              </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <View style={styles.modalContent_rt_f2}>
              <ScrollView contentContainerStyle={styles.scrollViewContentf2}>
                <Text style={styles.textStyleSubtitle} >Privacy Statement for On-Premises Digital Faciliter Software</Text>
                <View>
                <Text style={styles.textStyle_H1} >Last Updated: 19-02-2024</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >SAM Controls, a software development company based in Regina, SK, Canada (\"we,"
                  "our,"
                  "or"
                  "us"
                  "is dedicated to safeguarding the privacy and security of your personal information"
                  "in relation to our on-premises digital dashboard software. This Privacy Statement outlines how we collect, use, disclose, and protect your personal information within the context of our software
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >1. Information Collection</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >Our on-premises digital dashboard software does not collect or transmit personal information to our servers or any third-party entities. All data and information processed by the software remains under your control and within your organization's premises.
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >2. Data Processing</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >The data and information processed by our on-premises digital dashboard software are solely under your organization's control. We do not access, process, or use this data for any purpose other than providing the intended functionalities of the software.
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >3. Security Measures</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >We have implemented robust security measures to protect the data processed by our software within your organization's premises. These measures include encryption, access controls, and other industry-standard security practices to prevent unauthorized access, disclosure, or misuse.
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >4. User Responsibilities</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >We have implemented robust security measures to protect the data processed by our software within your organization's premises. These measures include encryption, access controls, and other industry-standard security practices to prevent unauthorized access, disclosure, or misuse.
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >5. Cookies and Tracking Technologies</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >As the user of our on-premises digital dashboard software, you are responsible for ensuring the security and compliance of the data and information processed by the software within your organization. This includes implementing appropriate access controls and security measures.
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >6. Support and Technical Assistance</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >In the event that you require technical support or assistance, our support team may request access to the software and the data processed within it. Such access will only be granted with your explicit consent and will be limited to providing technical assistance.
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >7. Updates to the Privacy Statement</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >We may update this Privacy Statement from time to time to reflect changes in our practices or legal requirements. We will notify you about significant changes by providing a notice through appropriate communication channels.
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >8. Contact Information</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >For any questions, concerns, or inquiries regarding the privacy and security of our on-premises digital dashboard software, please contact us at:
                  </Text>
                  </View>
                  <View style={styles.textStyle_second}>
                  <Text style={styles.textStyle_H1} >SAM Controls</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >Email: info@samcontrols.com</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >Phone: +1 306 700 4950</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >Address: 2010 11th Avenue Royal Bank Building, 7th Floor, Regina SK S4P 0J3, Canada</Text>
                <Text style={styles.textStyleSubtitle_TEXT} >Email: info@samcontrols.com</Text>
                <Text style={styles.textStyleSubtitle_TEXT_f2} >By using our on-premises digital dashboard software, you acknowledge and agree to the practices outlined in this Privacy Statement.</Text>
                  </View>

              </ScrollView>
            </View>

            {/* Bottom Footer */}
            <View style={styles.serverURLContainer_bottom_f2}>
              <Text style={styles.serverURL_bottom_f2}>SAM Controls 2023. All rights reserved</Text>

            </View>
          </Animated.View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Server URL Text */}
            <View style={styles.serverURLContainer}>

              <Text style={styles.serverURL}>Server URL</Text>
            </View>

            {/* Input Field */}
            <View style={styles.modalContent_rt}>
              <View>
                <TextInput
                  placeholder="Server URL"
                  placeholderTextColor="#00544d"
                  style={styles.inputf1}
                />
              </View>

              {/* Text */}
              <Text style={styles.bottomTextf1}>
                Please refer to the email you have received with your login credentials or contact your administrator for the server URL.
              </Text>

              {/* Buttons */}
              <View style={styles.buttonContainerf1}>
                <View>
                  <TouchableOpacity onPress={toggleModal} style={styles.buttonf1}>
                    <Text style={styles.buttonTextf1}>Cancel</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={[styles.buttonf1]}>
                    <Text style={[styles.buttonTextf2]}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Close Button */}

            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground source={require('../../assets/images/abstract1.png')} style={styles.background}>
        <View style={styles.container}>
          {/* Logo */}
          <View>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/SAMGREEN.png')} // apne logo ka path lagaye
                resizeMode="contain"
                style={styles.logo}
              />

            </View>
            {/* Buttons */}
            <View style={styles.btn1}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Login / Register</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Theme Setting</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            {/* Bottom Text */}
            <View style={styles.bottomContainer}>
              <View style={styles.bottomLinks}>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.bottomLinkText}>Server URL</Text>
                </TouchableOpacity>
                <Text style={styles.bottomLinkText}> | </Text>
                <TouchableOpacity onPress={openModal}>
                  <Text style={styles.bottomLinkText}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={styles.bottomLinkText}> | </Text>
                <Text style={styles.bottomLinkText}>Language</Text>
              </View>
              <Text style={styles.bottomText}>SAM Controls 2024. All rights reserved</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 100,  // apne logo ke dimension yahan adjust karen
//     height: 100,  // apne logo ke dimension yahan adjust karen
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'green',
//     fontSize: 16,
//   },
//   bottomContainer: {
//     position: 'absolute',
//     bottom: 20,
//     alignItems: 'center',
//   },
//   bottomLinks: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   bottomText: {
//     color: 'white',
//   },
// });

export default HomeScreen;
