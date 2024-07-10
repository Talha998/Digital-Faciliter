import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const ImageSelectionModal = ({ isVisible, onClose, onImageSelected }) => {
  const modalImages = [
    require('../../assets/images/ComponentPurple.png'),
    require('../../assets/images/ComponentDarkGreen.png'),
    require('../../assets/images/Componentgreen.png'),
    require('../../assets/images/ComponentBlue.png')
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleDone = () => {
    if (selectedImageIndex !== null) {
      onImageSelected(selectedImageIndex);
      onClose();
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {modalImages.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedImageIndex(index)}
              style={[
                styles.imageWrapper,
                selectedImageIndex === index && styles.selectedImage
              ]}
            >
              <Image source={image} style={styles.image} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  imageWrapper: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImage: {
    borderColor: 'blue',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  doneButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ImageSelectionModal;
