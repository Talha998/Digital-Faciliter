import React, { createContext, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
    const [isServerURLModalVisible, setServerURLModalVisible] = useState(false);
    const [isModifyPasswordModalVisible, setModifyPasswordModalVisible] = useState(false);
    const [area, setArea] = useState([]);
    const [brand, setBrand] = useState([]);
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const getLevel4 = async (locationId) => {
       
        try {
            const baseUrl = await AsyncStorage.getItem('baseURL');
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.get(`${baseUrl}/api/GetLevelList`, {
                params: {
                    List_Name: 'Level4',
                    language: 'P',
                    UserId: '1',
                    Parent_Id: locationId,
                    'api-version': '1.0'
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const level4Data = response.data.Data;
            setArea(level4Data.map(item => ({ label: item.Title, value: item.ID })));
            setSelectedArea(level4Data[0].ID);
            getEqptGroup(level4Data[0].ID)
        } catch (error) {
            console.error('Error fetching Level 4 data:', error);
        }
    };

    const getEqptGroup = async (areaId) => {
        console.log(areaId , "ffff123")
        try {
            const baseUrl = await AsyncStorage.getItem('baseURL');
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.get(`${baseUrl}/api/GetLevelList`, {
                params: {
                    List_Name: 'Eqpt_Group',
                    language: 'P',
                    UserId: '1',
                    Parent_Id: areaId,
                    'api-version': '1.0'
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const eqptGroupData = response.data.Data;
            setBrand(eqptGroupData.map(item => ({ label: item.Title, value: item.ID })));
            setSelectedBrand(eqptGroupData[0].ID);
        } catch (error) {
            console.error('Error fetching Equipment Group data:', error);
        }
    };

    return (
        <AppContext.Provider value={{
            isLanguageModalVisible,
            setLanguageModalVisible,
            isServerURLModalVisible,
            setServerURLModalVisible,
            isModifyPasswordModalVisible,
            setModifyPasswordModalVisible,
            getLevel4,
            getEqptGroup,
            area,
            setArea,
            brand,
            setBrand,
            selectedArea, 
            setSelectedArea,
            selectedBrand, 
            setSelectedBrand
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
