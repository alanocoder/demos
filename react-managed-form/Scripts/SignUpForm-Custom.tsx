import * as React from 'react';
import { TextInput } from './gui/TextInput';
import { Button } from './gui/Button';
import { Dropdown } from './gui/Dropdown';
import { ToggleSwitch } from './gui/ToggleSwitch';
import { RadioGroup } from './gui/RadioButton';
import { Slider } from './gui/Slider';
import { ManagedForm, IManagedForm, IField } from 'react-managed-form';

var Model: { [name: string]: IField } = {
    'name': {
        attrs: {
            label: 'Your name',
            placeholder: 'full name'
        },
        rules: {
            required: true,
            minLength: 5
        }
    },
    'email': {
        attrs: {
            label: 'Your email address'
        },
        rules: {
            required: true,
            minLength: 5
        }
    },
    'icecream': {
        rules: {
            required: true
        }
    }
};

const iceCreamList = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'coconut', label: 'Coconut' },
    { value: 'pineapple', label: 'Pineapple' }
];

const drinkTypes = [
    { value: 'Coffee', label: 'Coffee' },
    { value: 'Tea', label: 'Tea'}
];

export class SignUpForm extends React.Component<any, any> {
    onSubmit = (values: any, dirty: boolean) => {
        alert('You form input:\r\n' + JSON.stringify(values));
    }
    onChange = (form: IManagedForm, name?: string) => {
    }

    render() {
        return (
            <ManagedForm onSubmit={this.onSubmit} onChange={this.onChange} model={Model} defaultValues={{ agree: 'I agree', drink: 'Tea', rate: '2' }}>
                <h2>ManagedForm with custom UI</h2>
                <TextInput name='name' />
                <TextInput name='email' />
                <TextInput multiline={true} name='description' placeholder='Your description' />
                <Dropdown name='icecream' source={iceCreamList} label='Favorite ice-cream' />
                <ToggleSwitch name='agree' label='Agree to Terms' defaultValue='I agree' />
                Favorite: <RadioGroup name='drink' controls={drinkTypes} />
                <Slider name='rate' min={50} max={100} />
                <Button type='submit'>Done</Button>
            </ManagedForm>
        );
    }
}