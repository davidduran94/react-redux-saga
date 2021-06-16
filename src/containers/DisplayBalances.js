import React from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import { DisplayBalance } from '../components/DisplayBalance';

export const DisplayBalances = (props) => {
    const { balances = [] } = props
    
    return (    
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            {
                balances.map((item, index) => (
                    <Grid.Column key={index}>
                        <DisplayBalance title={item.title} color={item.color} amount={item.amount}/>
                    </Grid.Column>
                ))
            }

          </Grid.Row>

        </Grid>
      </Segment>
    )   
}