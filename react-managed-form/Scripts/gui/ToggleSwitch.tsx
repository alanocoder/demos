import * as React from 'react';

interface Props {
    name: string;
    label: string;
    disabled?: boolean;
    [prop: string]: any;
}

export class ToggleSwitch extends React.PureComponent<Props, any> {
    render() {
        const { label, value, defaultValue, disabled, ...props } = this.props;

        return (
            <div className='r-switch'>
                <label htmlFor={`cb-${props.name}`}>
                    <input type="checkbox" id={`cb-${props.name}`} className='stealth' {...props} disabled={disabled} defaultValue={defaultValue} checked={value} />
                    <span className='s-slider' />
                </label>
                <div className={`s-label ${disabled ? 'disabled' : ''}`}>{label}</div>
            </div>);
    }
}

interface Props_EZ extends Props {
    onChange?: (checked: boolean) => void;
}
export class ToggleSwitchEZ extends React.PureComponent<Props_EZ, any> {
    onChange = (evt: any) => {
        if (this.props.onChange) this.props.onChange(evt.target.checked);
    }
    render() {
        return <ToggleSwitch {...this.props} onChange={this.onChange} />;
    }
}