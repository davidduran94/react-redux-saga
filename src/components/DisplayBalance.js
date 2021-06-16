import React from 'react'
import { Statistic } from 'semantic-ui-react';

export const DisplayBalance = (props) => {
    const {title, amount, color="black", size='tiny'} = props
    return (    
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign:'center'}}>
                {title}:
            </Statistic.Label>
            <Statistic.Value>
                {amount}
            </Statistic.Value>
        </Statistic>
    )
}