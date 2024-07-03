import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Svg, { Rect, Text as SvgText, G } from 'react-native-svg';
import { AppContext } from '../Context/AppContext';

const CardByCardholderGraph = () => {
    const { Device_DeniedHourSum , selectedPersonName } = useContext(AppContext);
    console.log(Device_DeniedHourSum[0]?.Group , "Device_DeniedHourSum")
    const name = "User";
    const loading = false;

    const [tooltip, setTooltip] = useState(null);

    const getDatasource = () => {
        let temp = {};
        temp.dataSource = [];
        temp.xAis = [];
        temp.yAis = [];

        // Extract unique x-axis and y-axis labels
        const xLabels = [12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const yLabels = [...new Set(Device_DeniedHourSum?.map((item) => item.Group))];

        for (let x = 0; x < xLabels.length; x++) {
            temp.dataSource.push([]);
            temp.xAis.push(x);
            temp.yAis.push(xLabels[x]);

            for (let y = 0; y < yLabels.length; y++) {
                const item = Device_DeniedHourSum?.find((d) => d.Hour === xLabels[x] && d.Group === yLabels[y]);
                // temp.dataSource[x].push(item ? item.Values : '');
                temp.dataSource[x].push(item ? item : { Values: '' });
            }
        }

        return temp;
    }

    const data = getDatasource();

    const getColor = (value) => {
        if (value === '') return '#FF0000';  // Red for no data
        if (value <= 10) return '#6EB5D0';
        if (value <= 20) return '#7EDCA2';
        if (value <= 30) return '#DCD57E';
        return '#DCD57E';  // Adjust as needed
    };

    const handlePress = (item, x, y) => {
        if (item.Values !== '') {
            setTooltip({ ...item, x, y });
        } else {
            setTooltip(null);
        }
    };

    const renderTooltip = () => {
        if (!tooltip) return null;
        return (
            <View style={[styles.tooltip, { top: tooltip.y * 50 + 50, left: tooltip.x * 50 + 10 }]}>
                <Text>Group: {tooltip.Group}</Text>
                <Text>Hour: {tooltip.Hour}</Text>
                <Text>Values: {tooltip.Values}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Access Denied for {selectedPersonName ?  selectedPersonName : name}</Text>
            {Device_DeniedHourSum.length > 0 ? (
                loading ? (
                    <View style={styles.spinner}><Text>Loading...</Text></View>
                ) : (
                    <View style={styles.containerv2} >
                        <Text  style={styles.group_v6} >{Device_DeniedHourSum[0]?.Group}</Text>
                    <ScrollView horizontal>
                        <View style={styles.height_vt} >
                        <Svg height={data.xAis.length * 50} width={data.yAis.length * 50}>
                            {data.xAis.map((y, i) => (
                                data.yAis.map((x, j) => {
                                    const item = data?.dataSource[i][j];
                                    return (
                                        <TouchableWithoutFeedback key={`${i}-${j}`} onPress={() => handlePress(item, j, i)}>
                                            <G>
                                                <Rect
                                                    y={j * 50}
                                                    x={i * 50}
                                                    // width="50"
                                                    height="50"
                                                    fill={getColor(item?.Values)}
                                                    stroke="lightgreen"
                                                    strokeWidth="0.5"
                                                />
                                                {item?.Values ? (
                                                    <SvgText
                                                        y={(j * 50) + 25}
                                                        x={(i * 50) + 30}
                                                        fontSize="12"
                                                        fill="#000"
                                                        textAnchor="middle"
                                                    >
                                                        {item?.Values}
                                                    </SvgText>
                                                ) : null}
                                            </G>
                                        </TouchableWithoutFeedback>
                                    );
                                })
                            ))}
                        </Svg>
                        </View>
                    </ScrollView>
                    </View>
                )
            ) : (
                <View style={styles.noData}>
                    <Text>No Data</Text>
                </View>
            )}
            {renderTooltip()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        width: "100%",
    },
    
    containerv2: {
        flexDirection:"row",
        justifyContent: 'center',
        // alignItems: 'center',
        width: "100%",
    },
    group_v6: {
        // flex:1,
        // flexDirection:"row",
        // justifyContent: 'center',
        // alignItems: 'center',
        // height:300,
        width:60,
        paddingTop:"30%",
        // fontSize
        
        // padding: 10,
        // width: "100%",
    },
    
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:"center",
        marginBottom:20
    },
    height_vt: { 
        height:300
    },
    spinner: {
        marginTop: 20,
    },
    noData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tooltip: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});

export default CardByCardholderGraph;
