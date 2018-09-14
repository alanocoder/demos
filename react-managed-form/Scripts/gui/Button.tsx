import * as React from 'react';

type Props = {
    type?: string;
    className?: string;
    disabled?: boolean;
    style?: any;
    onClick?: (event: any) => void;
}

export class Button extends React.Component<Props, any> {
    render() {
        var cn = 'r-button' + (this.props.className ? ' ' + this.props.className : '');

        return <button {...this.props} className={cn}>{this.props.children}</button>;
    }
}