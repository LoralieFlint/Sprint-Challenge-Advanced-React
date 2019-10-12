import {useState, useEffect} from "react";

const UseBackgroundChange = (initialValue) => {
    const [background, setBackground] = useState(initialValue)

    useEffect(() => {
        if(background){
            document.body.classList.add('background');
        } else {
            document.body.classList.remove('background');
        }
    }, [background]);

    return [background, setBackground]
}
export default UseBackgroundChange;