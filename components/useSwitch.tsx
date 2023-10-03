import React,{useState} from 'react';

const useSwitch = () => {
    const [value,setValue] = useState(false)

    const flip = () => {
        setValue(!value)
    }

    return {value,flip}
}

export default useSwitch;