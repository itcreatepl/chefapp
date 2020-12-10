import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'




const MAX_NAME_LENGTH = 45
const MIN_NAME_LENGTH = 4
const MIN_DESCRIPTION_LENGTH = 20
const MAX_DESCRIPTION_LENGTH = 1500
const MAX_TIME = 240


const styles = {
    div: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    input: { maxWidth: 380, margin: '10px 0' },
    title: { fontWeight: 'bold', margin: 30 },
    link: { fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' },
    randomPhoto: { marginTop: -10, marginBottom: 10, cursor: 'pointer', color: 'blue' }
}

const AddRecipe = props => {

    const [name, setName] = React.useState('')
    const [nameError, setNameError] = React.useState(false)

    const nameValidate = (value) => {
        const validValue = value && value.replace(/\s{2,}/g, ' ')
        if (value !== validValue) {
            setName(validValue)
        }
        const isError = !validValue || validValue.length < MIN_NAME_LENGTH
        setNameError(isError)
        return isError

    }

    const setValidName = (string) => {
        if (string.length < MAX_NAME_LENGTH) {
            setName(string)
        }
    }

    const inputs = [
        {
            label: 'Nazwa',
            value: name,
            onChange: setValidName,
            error: nameError,
            validate: nameValidate,
            helperText:'Zbyt krótka nazwa, minimum 4 znaki'
        }
    ]
    return (
        <div
            style={styles.div}
        >
            {inputs.map(input => (
                <TextField
                    kay={inputs.label}
                    style={styles.input}
                    variant='outlined'
                    fullWidth
                    label={input.label}
                    value={input.value}
                    error={input.error}
                    helperText={input.error && input.helperText}
                    onChange={evt => {
                        input.onChange(evt.target.value)
                        if (input.error) {
                          input.validate(evt.target.value)
                        }
                      }}
                    onBlur={() => input.validate(input.value)}
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
