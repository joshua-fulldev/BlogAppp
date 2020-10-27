import React, { useContext, createContext, useState} from 'react';

const ThemeContext = createContext();

function UseTheme() {
    const context = useContext(ThemeContext);
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
    return <ThemeContext.Provider value={screenMode.mode}>{children}</ThemeContext.Provider>
}

export {ThemeProvider, ChangeTheme};