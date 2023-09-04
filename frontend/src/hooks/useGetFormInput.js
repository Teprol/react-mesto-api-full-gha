import React from 'react';

function useGetFormInput(obj) {
    const [values, setValue] = React.useState(obj);

    function handleChange(e) {
        const { name, value } = e.target;

        setValue({...values, [name]: value});
    };
    return { values, setValue, handleChange };
}

export default useGetFormInput;