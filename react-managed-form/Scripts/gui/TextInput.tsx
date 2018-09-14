import * as React from 'react';

type Props = {
    rules?: any;
    label?: string;
    placeholder?: string;
    name: string;
    value?: string;
    type?: string;
    required?: boolean;
    multiline?: boolean;
    readOnly?: boolean;
    error?: string;
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    onClick?: (event: any) => void;
}
export class TextInput extends React.PureComponent<Props, any> {
    static getDerivedStateFromProps(props: Props, state: any) {
        if (!state.active && props.value) return { active: true };
        else return null;
    }

    state = { active: !!this.props.value, rows: 30 };

    calRows = () => {
        if (this.props.multiline && this.props.value) {
            var ti = this.refs.ti as any;

            var rows = Math.min(ti.scrollHeight, 150); // limit textarea to 150px as max height.
            if (rows !== this.state.rows) this.setState({ rows });
        }
    }

    componentDidMount() {
        this.calRows();
    }

    componentDidUpdate() {
        this.calRows();
    }

    render() {
        const { name, value, error, required, readOnly, onFocus, onBlur, onChange, onClick, rules, ...props } = this.props;

        var ti = this.refs.ti as any;
        var valid = !error;
        var cn = 's-label' + (this.state.active ? ' s-active' : '') + (!valid ? ' error' : '');
        var ph = (!props.label || this.state.active) && !value ? props.placeholder : '';
        var cn_tf = 'r-ti' + (!valid ? ' error' : '') + (props.children ? ' s-info' : '');
        var rows = this.state.rows;

        const attrs = {
            ref: 'ti',
            id: name,
            name,
            value,
            required,
            readOnly,
            placeholder: ph,
            onFocus: (event: any) => { this.setState({ active: true }); if (onFocus) onFocus(event); },
            onBlur: (event: any) => { this.setState({ active: !!value }); if (onBlur) onBlur(event); },
            onChange,
            onClick
        };

        return (
            <div className={cn_tf}>
                <label className={cn} htmlFor={name}>{props.label}</label>
                {!props.multiline ?
                    <input type={props.type || 'text'} {...rules} {...attrs} />
                    :
                    <textarea style={{ height: rows + 'px', overflowY: 'hidden' }} {...rules} {...attrs} />
                }
                {props.children}
                {(error && <div className="s-error">{error}</div>)}
            </div>
        );
    }
}