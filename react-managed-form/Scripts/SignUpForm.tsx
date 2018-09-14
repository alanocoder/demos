import * as React from 'react';
import { ManagedForm, IManagedForm, IField } from 'react-managed-form';

var Model: { [name: string]: IField } = {
    'name': {
        attrs: {
            placeholder: 'Your name *'
        },
        rules: {
            required: true,
            minLength: 5
        }
    },
    'email': {
        attrs: {
            placeholder: 'Your email address *'
        },
        rules: {
            required: true,
            minLength: 5
        }
    },
    'description': {
        attrs: { placeholder: 'Your description *' },
        rules: { required: true }
    },
    'icecream': {
        rules: {
            required: true
        }
    },
    'snack': {
        rules: {
            required: true
        }
    }
};

var errStyle = { color: 'red', fontSize: '12px' };
const RenderTextField = (props: { name: string, error?: string, [key: string]: any }) => {
    const { name, error, ...rest } = props;
    return (
        <div>
            <input name={name} {...rest} />
            {error && <div style={errStyle}>{error}</div>}
        </div>
    );
}

export class SignUpForm extends React.Component<{}, { formError: string }> {
    state = { formError: null };
    onSubmit = (values: any, dirty: boolean) => {
        alert('You form input:\r\n' + JSON.stringify(values));
    }
    onChange = (form: IManagedForm, name?: string) => {
        var errors = form.getErrors(true);
        if (!errors) {
            this.setState({ formError: null });
            return;
        }
        for (var name in errors) {
            if (name === 'name' || name === 'email') continue;
            this.setState({ formError: `${name}: ${errors[name]}` });
        }
    }

    render() {
        return (
            <ManagedForm onSubmit={this.onSubmit} onChange={this.onChange} model={Model} defaultValues={{ drink: 'Tea' }}>
                <h2>ManagedForm with HTML inputs</h2>
                <RenderTextField name='name' />
                <RenderTextField name='email' />
                <textarea name='description' placeholder='Your description' rows={5} />
                <select name='icecream'>
                    <option value=''>Ice-cream favorite</option>
                    <option value='chocolate'>Chocolate</option>

                    <option value='vanilla'>Vanilla</option>
                    <option value='strawberry'>Strawberry</option>
                    <option value='coconut'>Coconut</option>
                    <option value='pineapple'>Pineapple</option>
                </select>
                <input name='snack' list='snacks' />
                <datalist id='snacks'>
                    <option value='Peanuts' />
                    <option value='Potato chips' />
                    <option value='Fruits' />
                </datalist>
                <div>Favorite:
                    <input type='radio' name='drink' value='Coffee' /> Coffee
                    <input type='radio' name='drink' value='Tea' /> Tea
                </div>
                <div>Rating: <input type='range' name='rate' min={0} max={10} /></div>
                <div><input type='checkbox' name='agree' value='I agree' /> Agree to Terms</div>
                {this.state.formError && <div style={errStyle}>{this.state.formError}</div>}
                <button type='submit'>Done</button>
            </ManagedForm>
        );
    }
}