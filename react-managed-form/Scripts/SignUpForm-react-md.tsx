import * as React from 'react';
import { ManagedForm, IManagedForm, IField } from 'react-managed-form';
import { TextField, Button, SelectField, SelectionControl, SelectionControlGroup, Slider } from 'react-md';

var Model: { [name: string]: IField } = {
    'name': {
        attrs: {
            label: 'Your name',
            placeholder: 'Your name'
        },
        rules: {
            required: true,
            minLength: 5
        }
    },
    'email': {
        attrs: {
            placeholder: 'Your email address'
        },
        rules: {
            required: true,
            minLength: 5
        }
    },
    'drink': {
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
    { value: 'Tea', label: 'Tea' }
];

const RenderTextField = (props: { name: string, error?: string, onChange?: (evt: any) => void, [key: string]: any }) => {
    const { name, error, onChange, ...rest } = props;
    return <TextField id={name} error={!!error} errorText={error} onChange={(value, evt) => { onChange(evt); }} {...rest} />;
}
const RenderSelectField = (props: { name: string, error?: string, onChange?: (evt: any) => void, onBlur?: (evt: any) => void, [key: string]: any }) => {
    const { name, error, onChange, onBlur, ...rest } = props;
    // Note: evt object passed by SelectField is a DIV. not the actual input tag. So need to custom create an event object.
    return <SelectField id={name} name={name} error={!!error} errorText={error}
        onChange={(value, index, evt) => onChange({ target: { name, value } })}
        onBlur={() => onBlur({ target: { name } })}
        {...rest} />;
}
const RenderSwitch = (props: { name: string, value?: string, defaultValue?: string, onChange?: (evt: any) => void, [key: string]: any }) => {
    const { name, value, defaultValue, onChange, ...rest } = props;
    return <SelectionControl id={name} name={name} type='switch' value={defaultValue} checked={!!value} onChange={(value, evt) => { onChange(evt); }} {...rest} />;
}

const RenderSlider = (props: { name: string, onChange?: (evt: any) => void, [key: string]: any }) => {
    const { name, value, defaultValue, onChange, ...rest } = props;
    return <Slider id={name}
        onChange={(value, evt) => onChange({ target: { name, value } })}
        {...rest} />;
}

const RenderRadioGroup = (props: { name: string, controls: any, onChange?: (evt: any) => void, [key: string]: any }) => {
    const { name, onChange, ...rest } = props;
    return <SelectionControlGroup id={name} name={name} type='radio' onChange={(value, evt) => { onChange(evt); }} {...rest} />;
}

export class SignUpForm extends React.Component<any, any> {
    onSubmit = (values: any, dirty: boolean) => {
        alert('You form input:\r\n' + JSON.stringify(values));
    }
    onChange = (form: IManagedForm, name?: string) => {
    }

    render() {
        return (
            <ManagedForm onSubmit={this.onSubmit} onChange={this.onChange} model={Model} defaultValues={{ agree: 'I agree', rate: '2' }}>
                <h2>Custom form</h2>
                <RenderTextField name='name' />
                <RenderTextField name='email' />
                <RenderTextField rows={3} name='description' placeholder='Your description' />
                <RenderSelectField name='icecream' menuItems={iceCreamList} label='Favorite ice-cream' />
                <RenderSwitch name='agree' type='switch' label='Agree to Terms' defaultValue='I agree' />
                Favorite: <RenderRadioGroup name='drink' controls={drinkTypes} />
                <RenderSlider name='rate' min={50} max={100} />
                <Button type='submit' flat={true}>Done</Button>
            </ManagedForm>
        );
    }
}