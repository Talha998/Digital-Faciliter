import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Defs, LinearGradient, Stop, Svg, Rect } from 'react-native-svg';

// Function to generate data for the heatmap
const generateData = (count, { min, max }) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
};

// Heatmap component
const ApexChart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const initialData = [
      { name: 'Metric1', data: generateData(18, { min: 0, max: 10 }) },
      { name: 'Metric2', data: generateData(18, { min: 0, max: 10 }) },
      { name: 'Metric3', data: generateData(18, { min: 0, max: 10 }) },
      // { name: 'Metric4', data: generateData(18, { min: 0, max: 90 }) },
      // { name: 'Metric5', data: generateData(18, { min: 0, max: 90 }) },
      // { name: 'Metric6', data: generateData(18, { min: 0, max: 90 }) },
      // { name: 'Metric7', data: generateData(18, { min: 0, max: 90 }) },
      // { name: 'Metric8', data: generateData(18, { min: 0, max: 90 }) },
      // { name: 'Metric9', data: generateData(18, { min: 0, max: 90 }) }
    ];
    setSeries(initialData);
  }, []);

  const getColor = (value) => {
    const color = Math.floor(255 - (value / 90) * 255);
    return `rgb(0, ${color}, 255)`;
  };

  const cellSize = 20;
  const spacing = 2;

  return (
    <View style={styles.heatmapContainer}>
      {/* <Text style={styles.heatmapTitle}>HeatMap Chart (Single color)</Text> */}
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Svg height={(cellSize + spacing) * series.length} width={(cellSize + spacing) * 18}>
          {series.map((item, rowIndex) =>
            item.data.map((value, colIndex) => (
              <Rect
                key={`${rowIndex}-${colIndex}`}
                x={colIndex * (cellSize + spacing)}
                y={rowIndex * (cellSize + spacing)}
                width={cellSize}
                height={cellSize}
                fill={getColor(value)}
              />
            ))
          )}
        </Svg>
      </ScrollView>
    </View>
  );
};

// Main component
const PeopleEntryPerHour = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBackground}>
        <View style={styles.card}>
          <View style={styles.chartContainer}>
          <ApexChart />
            <View style={styles.labelsContainer}>
              {/* {data.map((item, index) => (
                <Text key={index} style={styles.chartLabel}>
                  {item.Hour}
                </Text>
              ))} */}
            </View>
          </View>
        </View>
        <View style={styles.text_inner_grah}>
        <Text style={styles.chartText_active}>People Entry Per Hour</Text>
        {/* <Text style={styles.chartText_num}>Total: {data.reduce((total, item) => total + item.Values, 0)}</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00544d', // Green background color
    padding: 20,
    marginTop: 100,
    height: 150, // Adjusted height to accommodate the chart and labels
    marginBottom: 100,
    // width:"100%",
    borderRadius: 20,
  },
  greenBackground: {
    alignItems: 'center',
    borderRadius: 20,
    position: "absolute",
    top: -50,
    width: '100%', // Ensure full width within the container
  },
  card: {
    backgroundColor: '#ffffff', // White background color for the card
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 2,
    marginBottom: 5,
    width: 120, // Ensure full width within the card
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ensure full width within the chart container
  },
  chart: {
    height: 104, // Adjusted height for the bar chart
    width: 100,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '90%', // 90% of the container width
    paddingHorizontal: 20, // Add horizontal padding for better spacing
  },
  chartLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000', // Adjust label color as needed
    flex: 1, // Allow flex to distribute space evenly
  },
  chartText_active: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    width:"100%"
    // marginTop: 5,
  },
  chartText_num: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: -12,
  },
});

export default PeopleEntryPerHour;
