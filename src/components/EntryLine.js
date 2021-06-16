import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react';

export const EntryLine = (props) => {
    const {id,title, amount, isExpense, deleteEntry} = props

    function handleDelete() {
        console.log("deleted entry");
        deleteEntry(id);
    }

    return (    
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign="right">
            <Grid.Row>
                <Grid.Column width={10} textAlign="left">{title}</Grid.Column>
                <Grid.Column width={3} textAlign="right">${amount}</Grid.Column>
                <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon onClick={handleDelete} name="trash" bordered /> 
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
    )   
}