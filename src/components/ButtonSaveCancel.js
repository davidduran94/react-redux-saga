import React from 'react'
import { Button } from 'semantic-ui-react';

export const ButtonSaveCancel = (props) => {
    const {addEntry, title, amount, isExpense} = props

    function handleClick(){
        addEntry(title, amount, isExpense)
    }

    return (
      <Button.Group style={{ marginTop: 20 }}>
        <Button>Cancel</Button>
        <Button.Or></Button.Or>
        <Button primary onClick={handleClick}>OK</Button>
      </Button.Group>

    )
}