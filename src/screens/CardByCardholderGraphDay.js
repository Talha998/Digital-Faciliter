import React, { useState, useContext, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { AppContext } from '../Context/AppContext';

const CardByCardholderGraphDay = () => {
  const { Device_DeniedDaySum } = useContext(AppContext);
  // Ensure all days from 1 to 30 are included and aggregate values by day
  const completeData = Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const foundData = Device_DeniedDaySum.filter(item => item.Day === day);
    const totalValues = foundData.reduce((acc, curr) => acc + curr.Values, 0);
    return { Values: totalValues, Day: day };
  });

  const chartData = {
    labels: completeData.map(item => `Day ${item.Day}`),
    datasets: [{
      data: completeData.map(item => item.Values),
    }],
  };

  const chartConfig = {
    backgroundGradientFrom: '#f0f0f0',
    backgroundGradientTo: '#f0f0f0',
    color: (opacity = 0) => '#00544d',
    strokeWidth: 2,
  };

  return (
    <ScrollView horizontal style={{ flex: 1 }}>
      <View style={styles.chartContainer}>
        <BarChart
          style={{ marginBottom: 15 }}
          data={chartData}
          width={completeData.length * 50}
          height={220}
          yAxisLabel={'Days'}
          chartConfig={chartConfig}
          fromZero={true}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
});

export default CardByCardholderGraphDay;
