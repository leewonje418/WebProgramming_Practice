import React from 'react';
import PropTypes from 'prop-types'

const MyComponent = ({name, favNum, children}) => {
    return (
        <div>안녕하세요. 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        좋아하는 숫자는 {favNum}</div>
    )
}

MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favNum: PropTypes.number.isRequired,
    children: PropTypes.string
}

export default MyComponent;