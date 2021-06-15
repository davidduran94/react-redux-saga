import React from 'react'
import { Container, Grid, Header, Segment, Statistic, Image, Icon, Form, Button } from 'semantic-ui-react';

export const MainHeader = (props) => {
    const {title} = props
    return (
        <Header as="h1">{title}</Header>
    )
}