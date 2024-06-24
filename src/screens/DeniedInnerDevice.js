import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

const DeniedInnerDevice = () => {
    // Dummy data to replace data from context
    const name = "User";
    const loading = false;
    const dummyData = [
        { Group: 'ID card no longer valid', Day: 4, Values: 1 },
        { Group: 'ID Card Unknown', Day: 4, Values: 1 },
        { Group: 'Wrong access level', Day: 4, Values: 1 },
        { Group: 'Wrong time\r\n', Day: 4, Values: 4 },
        { Group: 'Access not allowed', Day: 4, Values: 22 },
        { Group: 'Access not allowed', Day: 5, Values: 4 },
        { Group: 'Wrong time\r\n', Day: 5, Values: 9 },
        { Group: 'ID card has been blocked', Day: 6, Values: 1 },
        { Group: 'Access not allowed', Day: 6, Values: 7 },
        // Add more dummy data as needed
    ];

    const getDatasource = () => {
        let temp = {};
        temp.dataSource = [];
        temp.xAis = [];
        temp.yAis = [];

        // Extract unique x-axis and y-axis labels
        const xLabels = [1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        const yLabels = [...new Set(dummyData.map((item) => item.Group))];

        for (let y = 0; y < yLabels.length; y++) {
            temp.dataSource.push([]);
            temp.yAis.push(y);
            temp.xAis.push(yLabels[y]);

            for (let x = 0; x < xLabels.length; x++) {
                const item = dummyData.find((d) => d.Day === xLabels[x] && d.Group === yLabels[y]);
                temp.dataSource[y].push(item ? item.Values : '');
            }
        }

        return temp;
    }

    const data = getDatasource();

    const getColor = (value) => {
        if (value === '') return '#ffffff';
        if (value <= 10) return '#6EB5D0';
        if (value <= 20) return '#7EDCA2';
        if (value <= 30) return '#DCD57E';
        return '#DCD57E';  // Adjust as needed
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Access Denied for {name}</Text>
            {dummyData.length > 0 ? (
                loading ? (
                    <View style={styles.spinner}><Text>Loading...</Text></View>
                ) : (
                    <ScrollView horizontal>
                        <Svg height={data.yAis.length * 40} width={data.xAis.length * 40}>
                            {data.yAis.map((y, i) => (
                                data.xAis.map((x, j) => (
                                    <React.Fragment key={`${i}-${j}`}>
                                        <Rect
                                            x={j * 40}
                                            y={i * 40}
                                            width="40"
                                            height="40"
                                            fill={getColor(data.dataSource[i][j])}
                                            stroke="lightgreen"
                                            strokeWidth="0.5"
                                        />
                                        {data.dataSource[i][j] ? (
                                            <SvgText
                                                x={(j * 40) + 20}
                                                y={(i * 40) + 25}
                                                fontSize="12"
                                                fill="#000"
                                                textAnchor="middle"
                                            >
                                                {data.dataSource[i][j]}
                                            </SvgText>
                                        ) : null}
                                    </React.Fragment>
                                ))
                            ))}
                        </Svg>
                    </ScrollView>
                )
            ) : (
                <View style={styles.noData}>
                    <Text>No Data</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    spinner: {
        marginTop: 20,
    },
    noData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DeniedInnerDevice;