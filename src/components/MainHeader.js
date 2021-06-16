import React from 'react'
import { Header } from 'semantic-ui-react';

export const MainHeader = (props) => {
    const {title, type} = props
    return (
        <Header as={type}>{title}</Header>
    )
}