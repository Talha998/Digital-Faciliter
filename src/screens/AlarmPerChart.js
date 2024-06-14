import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView for rendering web content

const AlarmPerChart = () => {
  // Dummy data for the pie chart
  const data = {
    series: [59920],
    options: {
      labels: ['Active Person'],
      colors: ['#808080', '#448EE4'], // Define colors for the slices
      legend: {
        show: true, // Show legend
        position: 'bottom' // Position of the legend
      }
    }
  };

  // Create HTML content for the chart
  const chartHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </head>
      <body>
        <div id="chart"></div>
        <script>
          var options = ${JSON.stringify(data.options)};
          options.series = ${JSON.stringify(data.series)};
          options.chart = { type: 'pie', height: '200' };
          
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <View style={styles.greenBackground}>
        <View style={styles.card}>
          <View style={styles.chartContainer}>
            <WebView
              originWhitelist={['*']}
              source={{ html: chartHtml }}
              style={{ height: 100, width: 100 }} // Adjust the height and width as needed
            />
          </View>
        </View>
        <Text style={styles.chartText_active}>Active Workforce</Text>
        <Text style={styles.chartText_num}>{data.series[0]}</Text>
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
    height: 150, // Set height to 150
    marginBottom: 100,
    borderRadius: 20,
  },
  greenBackground: {
    alignItems: 'center',
    borderRadius: 20,
    position: "absolute",
    top: -50
  },
  card: {
    backgroundColor: '#ffffff', // White background color for the card
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 2,
    marginBottom: 5,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    height: 100,
    width: 100,
  },
  chartText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  chartText_active: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  chartText_num: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default AlarmPerChart;
