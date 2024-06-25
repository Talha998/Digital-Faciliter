import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
    const [isServerURLModalVisible, setServerURLModalVisible] = useState(false);
    const [isModifyPasswordModalVisible, setModifyPasswordModalVisible] = useState(false);

    return (
        <AppContext.Provider value={{
            isLanguageModalVisible,
            setLanguageModalVisible,
            isServerURLModalVisible,
            setServerURLModalVisible,
            isModifyPasswordModalVisible,
            setModifyPasswordModalVisible,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
