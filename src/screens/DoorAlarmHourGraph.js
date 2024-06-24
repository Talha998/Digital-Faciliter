import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Modal, TouchableOpacity, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const DoorHourGraph = (props) => {
  const [clickedData, setClickedData] = useState({ hour: null, value: null });
  const [modalVisible, setModalVisible] = useState(false);

  const onClickHandler = (label, value) => {
    const clickedData = dummyData.find((item) => item.Period === label);
    setClickedData({ hour: clickedData.Period, value: value });
    setModalVisible(true);
  };

  // Dummy data
  const dummyData = [
    { Period: "12 AM", Door_Forced: 10, Door_Held: 5 },
    { Period: "1 AM", Door_Forced: 8, Door_Held: 3 },
    { Period: "2 AM", Door_Forced: 12, Door_Held: 7 },
    { Period: "3 AM", Door_Forced: 6, Door_Held: 2 },
    { Period: "4 AM", Door_Forced: 15, Door_Held: 10 },
    { Period: "5 AM", Door_Forced: 9, Door_Held: 4 },
  ];

  const hours = dummyData.map((item) => item.Period);

  const data = {
    labels: hours,
    datasets: [
      {
        data: hours.map((hour) => {
          const foundItem = dummyData.find((item) => item.Period === hour);
          return foundItem ? foundItem.Door_Forced : null;
        }),
        color: (opacity = 1) => `rgba(32, 142, 121, ${opacity})`, // Bar color
      },
      {
        data: hours.map((hour) => {
          const foundItem = dummyData.find((item) => item.Period === hour);
          return foundItem ? foundItem.Door_Held : null;
        }),
        color: (opacity = 1) => `rgba(7, 45, 38, ${opacity})`, // Bar color
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  const barWidth = 40; // Adjust bar width according to your need
  const chartWidth = hours.length * barWidth * 2; // Calculate total chart width

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <BarChart
            data={data}
            width={chartWidth} // Adjust width based on the number of data points
            height={250}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            fromZero={true}
            showBarTops={true}
            showValuesOnTopOfBars={true}
            style={{ borderRadius: 10 }}
          />
          <View style={[styles.overlay, { width: chartWidth }]}>
            {hours.map((label, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.touchableBar,
                  { left: index * barWidth * 2, width: barWidth * 2 },
                ]}
                onPress={() => onClickHandler(label, data.datasets[0].data[index])}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hour: {clickedData.hour}</Text>
            <Text style={styles.modalText}>Value: {clickedData.value}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.date_m}>Hour</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    flexDirection: 'row',
    zIndex: 1,
  },
  touchableBar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#00544d",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default DoorHourGraph;
