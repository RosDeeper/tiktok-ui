import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ 
    to, 
    href, 
    disabled = false, 
    text = false, 
    primary = false, 
    outline = false, 
    small = false, 
    large = false, 
    rounded = false, 
    className, 
    leftIcon, 
    rightIcon, 
    children, 
    onClick, 
    ...rest 
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...rest,
    }

    if(to) {
        props.to = to
        Comp = Link
    } else if(href) {
        props.href = href
        Comp = 'a'
    }

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    const classes = cx('wrapper', {
        disabled,
        text,
        primary,
        outline,
        small,
        large,
        rounded,
        [className]: className,
    })

    return (
        <Comp className={classes} {...props}> 
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Button