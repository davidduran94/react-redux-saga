import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react';
import { EntryLine } from '../components/EntryLine';

export const EntryLines = (props) => {
    const {initialEntries = [], deleteEntry} = props
    return (    
        <>
        {
            initialEntries.map((item, i) => (
              <EntryLine deleteEntry={deleteEntry} key={i} {...item}/>
            ))
          }
        </>
    )   
}