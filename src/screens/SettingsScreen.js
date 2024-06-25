import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LanguageModal from './LanguageModal'; // Adjust the import path as necessary
import ModifyPasswordModal from './ModifyPasswordModal'; // Adjust the import path as necessary
import ServerURLModal from './ServerURLModal';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    // Add any additional logic for changing the app language
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleSavePassword = (currentPassword, newPassword, confirmPassword) => {
    // Handle password change logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => setLanguageModalVisible(true)}
      >
        <Icon name="globe" size={24} color="black" />
        <Text style={styles.optionText}>{selectedLanguage}</Text>
        <Icon name="chevron-right" size={24} color="black" style={styles.chevron} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option} onPress={toggleModal}>
        <Icon name="laptop" size={24} color="black" />
        <Text style={styles.optionText}>Server URL</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option} onPress={() => setPasswordModalVisible(true)}>
        <Icon name="key" size={24} color="black" />
        <Text style={styles.optionText}>Modify Password</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>SAM Controls 2024. All rights reserved</Text>
      </View>

      <LanguageModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        onSelectLanguage={handleSelectLanguage}
      />
      <ModifyPasswordModal
        visible={passwordModalVisible}
        onClose={() => setPasswordModalVisible(false)}
        onSave={handleSavePassword}
      />
        <ServerURLModal visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  chevron: {
    marginLeft: 'auto',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#004d40',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SettingsScreen;
