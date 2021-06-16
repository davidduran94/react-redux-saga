import React, { useState } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import { ButtonSaveCancel } from './ButtonSaveCancel';

export const NewEntryForm = (props) => {
    const { addEntry } = props
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input 
            icon="tags" 
            width={12} 
            label="Description"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="New shinny thing" />
          <Form.Input 
            icon="dollar" 
            iconPosition="left"
            width={4} 
            label="Value"
            type="number"
            onChange={(event) => setAmount(event.target.value)}
            placeholder="100.00" />
        </Form.Group>
        <Segment compact>
            <Checkbox 
                onChange={() => setIsExpense(!isExpense)}
                checked={isExpense} 
                toggle 
                label='is expense'/>
        </Segment>
        <ButtonSaveCancel addEntry={addEntry} title={title} amount={amount} isExpense={isExpense} />
          
      </Form>
    )
}