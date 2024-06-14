import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView for rendering web content
const AlarmPerChart = () => {
  // Data for the pie chart
  const data = {
    series: [5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 4],
    options: {
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      colors: ['#808080', '#448EE4', '#FF6347', '#FFD700', '#8A2BE2', '#7FFF00', '#DC143C', '#00FFFF', '#FF8C00', '#00FA9A', '#1E90FF'], // Define colors for the slices
      legend: {
        show: false, // Hide legend
      },
      dataLabels: {
        enabled: true, // Disable data labels
        style: {
          fontSize: '5px', // Set font size of data labels
        }
      },
      tooltip: {
        enabled: false, // Disable tooltips
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
          <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin: 0;
            
          }
          #chart {
            
          }
        </style>
      </head>
      <body>
        <div id="chart"></div>
        <script>
          var options = ${JSON.stringify(data.options)};
          options.series = ${JSON.stringify(data.series)};
         options.chart = { type: 'pie', height: 130, width: 130 };
          
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
              style={{ height: 78, width: 100 }} 
            />
          </View>
        </View>
        <Text style={styles.chartText_active}>Alarms Per Hour</Text>
        <Text style={styles.chartText_num}>{data.series.reduce((a, b) => a + b, 0)}</Text>
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
