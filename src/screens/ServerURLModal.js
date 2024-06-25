// ServerURLModal.js
import React from 'react';
import styles from '../styles';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const ServerURLModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
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
                <TouchableOpacity onPress={onClose} style={styles.buttonf1}>
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
  );
};

    

export default ServerURLModal;
