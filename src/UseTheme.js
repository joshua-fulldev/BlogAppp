import React, { useContext, createContext, useState} from 'react';

const themeContext = createContext();

function UseTheme() {
    const context = useContext(themeContext);
    if (!context){
        throw new Error(`Context not found`);
    }
    else{
        useContext(context);
    }
}

function ChangeTheme() {
    const [mode, setMode] = useState("light");

    const changeMode = () => {
        if (mode === "light" ){
            setMode("dark");
        }
        else {
            setMode("light");
        }
    };

    return{
        mode, changeMode
    }

}

function ThemeProvider({children}) {
    const screenMode = ChangeTheme();
    return <themeContext.Provider value={screenMode}>{children}</themeContext.Provider>
}

export {ThemeProvider, ChangeTheme};