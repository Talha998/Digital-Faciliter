import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity , ScrollView  } from 'react-native';
// import { BarChart, Grid } from 'react-native-svg-charts';
import { BarChart } from 'react-native-chart-kit';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

const CardByCardholderGraphDay = () => {
  // Original data
  const data = [
    { Values: 77, Day: 4 },
    { Values: 1, Day: 1 },
    { Values: 1, Day: 2 },
    { Values: 1, Day: 3 },
    { Values: 2, Day: 10 },
    { Values: 3, Day: 15 },
    { Values: 4, Day: 20 },
    { Values: 5, Day: 19 },
    { Values: 5, Day: 14 },
    { Values: 5, Day: 18 },
    { Values: 5, Day: 23 },
    { Values: 88, Day: 28 },
    { Values: 5, Day: 10 },
    { Values: 55, Day: 30 }
  ];

  const chartData = {
    labels: data.map(item => `Day ${item.Day}`),
    datasets: [{
        data: data.map(item => item.Values),
    }],
};

const chartConfig = {
    backgroundGradientFrom: '#f0f0f0',
    backgroundGradientTo: '#f0f0f0',
    color: (opacity = 0) => '#00544d',
    strokeWidth: 2, // optional, default 3
};

return (
  <ScrollView horizontal style={{ flex: 1 }}>
  <View style={{ alignItems: 'center', justifyContent: 'center' , paddingVertical: 10, paddingHorizontal: 0 }}>
   
  <BarChart
                        style={{ marginBottom: 15 }}
                        data={chartData}
                        width={data.length * 50} // Adjust width based on data length
                        height={220}
                        yAxisLabel={'Days'}
                        chartConfig={chartConfig}
                        fromZero={true} // Ensure bars start from zero
                        horizontal={true} // Display as horizontal bar chart
                    />
      
  </View>
</ScrollView>
);
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  chart: {
    height: 250,
    width: '100%',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 5,
  },
  chartLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    flex: 1,
  },
  barOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '3%', // Width of each bar
    backgroundColor: 'transparent',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
  },
  tooltipText: {
    fontSize: 12,
    color: '#000000',
  },
});

export default CardByCardholderGraphDay;
