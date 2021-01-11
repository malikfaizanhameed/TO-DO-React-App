import React, {useState } from 'react';
import { TextField } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';


function UpdateForm({ submitUpdate }) {
    const [ newVal, setNewVal ] = useState('');

    

    return (
        <div>
            <TextField placeholder="Edit Todo" size="medium" required onChange={(e) => setNewVal(e.target.value)}/>
            <IconButton onClick={() => submitUpdate(newVal)}><CheckIcon/></IconButton>
        </div>
    )
};

export default UpdateForm;
