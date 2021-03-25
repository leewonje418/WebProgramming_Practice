import React, {Component} from 'react';

class Scrollbar extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        const style = {
            border: '1pxsolid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            positiio: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'innear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
            <div style={innerStyle}/>
            </div>
        )
    }
}

export default Scrollbar;