import * as React from 'react';

interface ISelection {
    label: string,
    value: string
}

interface Props {
    name: string;
    source: ISelection[];
    label?: string;
    error?: string;
    value?: string;
    className?: string;
}
export class Dropdown extends React.Component<Props, any> {
    render() {
        const { source, label, error, value, className, ...props } = this.props;

        var options: any[] = label ? [<option key='oo' value='' className='s-label'>{label}</option>] : [];
        for (var i = 0; i < source.length; i++) {
            options.push(<option key={`o${i}`} value={source[i].value} className='s-option'>{source[i].label}</option>);
        }
        var cn = 'r-dropdown' + (className ? ' ' + className : '');
        return (<div className={cn}><select className={value || !label ? 's-option' : 's-label'} {...props} value={value}>{options}</select>{error && <div className="s-error">{error}</div>}</div>)
    }
}