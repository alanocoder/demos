import * as React from 'react';

interface Props {
    name: string;
    value?: string;
    controls: { label: any, value: string }[];
    disabled?: boolean;
}

class RadioButton extends React.PureComponent<any, any> {
    render() {
        const { label, disabled, ...props } = this.props;
        return (
            <div className='r-radio'>
                <label htmlFor={props.id}>
                    <input type="radio" id={props.id} name={props.name} className='stealth' disabled={disabled} {...props} onChange={this.props.onChange} />
                    <span className={`s-label ${disabled ? 'disabled' : ''}`}>{label}</span>
                    <span className='s-rb' />
                </label>

            </div>);
    }
}

export class RadioGroup extends React.PureComponent<Props, any> {
    render() {
        const { value, controls, ...props } = this.props;
        var count = 1;
        var radios = controls.map(info => <RadioButton key={info.value} id={`rb-${props.name}-${count++}`} value={info.value} checked={value === info.value} label={info.label} {...props} />);
        return (
            <div className='r-radio-group'>{radios}</div>
        );
    }
}

export class RadioButtonEZ extends React.PureComponent<any, any> {
    onChange = (evt: any) => {
        if (this.props.onChange) this.props.onChange(evt.target.value);
    }
    render() {
        return <RadioButton {...this.props} onChange={this.onChange} />;
    }
}

interface Props_EZ extends Props {
    onChange?: (val: string) => void;
}

export class RadioGroupEZ extends React.PureComponent<Props_EZ, any> {
    render() {
        const { value, controls, ...props } = this.props;
        var count = 1;
        var radios = controls.map((info: { label: string, value: string }) => <RadioButtonEZ key={info.value} id={`rb-${props.name}-${count++}`} value={info.value} checked={value === info.value} label={info.label} {...props} />

        );
        return (
            <div className='r-radio-group'>{radios}</div>
        );
    }
}