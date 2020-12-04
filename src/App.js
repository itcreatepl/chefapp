import React from 'react'

import { Button, TextField } from '@material-ui/core';

const App = props => {
    return (
        <div>
            <Button
                color='primary'
                variant='contained'
            >
                submit
            </Button>
            <TextField
                label='email'
                variant='outlined'
            />
        </div>
    )
}

export default App
