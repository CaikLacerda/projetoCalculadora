import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    render() {
        return (
            <div className='calculator'>
                <Display value={100} />
                <Button func='triple' label='AC' />
                <Button func='operation' label='/' />
                <Button label='7' />
                <Button label='8' />
                <Button label='9' />
                <Button func='operation' label='*' />
                <Button label='4' />
                <Button label='5' />
                <Button label='6' />
                <Button func='operation' label='+' />
                <Button label='1' />
                <Button label='2' />
                <Button label='3' />
                <Button func='operation' label='-' />
                <Button func='double' label='0' />
                <Button label='.' />
                <Button func='operation' label='=' />
            </div>
        )
    }
}