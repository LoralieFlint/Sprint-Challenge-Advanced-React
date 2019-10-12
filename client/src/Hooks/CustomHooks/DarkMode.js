import React from "react";
import useBackgroundChange from "./useBackgroundChange"

const DarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useBackgroundChange(false);
    const toggleBackground = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <button onClick={toggleBackground}>ON - OFF</button>
        </div>
    )
}
export default DarkMode;