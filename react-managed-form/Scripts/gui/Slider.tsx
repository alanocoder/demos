import * as React from 'react';

interface Props {
    name?: string;
    min?: number;
    max?: number;
    step?: number;

    disabled?: boolean;
    [prop: string]: any;
}

export class Slider extends React.PureComponent<Props, any> {
    render() {
        const { name, min, max, step, disabled, value, ...props } = this.props;
        return (
            <div className='r-slider'>
                <input type='range' name={name} min={min || 0} max={max || 100} step={step || 1} value={value || 50} disabled={disabled} {...props} />
            </div>);
    }
}

interface Props_EZ extends Props {
    onChange?: (value: number) => void;
}
export class SliderEZ extends React.PureComponent<Props_EZ, any> {
    onChange = (evt: any) => {
        if (this.props.onChange) this.props.onChange(parseInt((evt.target as any).value, 10));
    }
    render() {
        const { onChange, ...props_rest } = this.props;
        return <Slider {...props_rest} onChange={this.props.onChange ? this.onChange : null} />;
    }
}