import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, disabled = false, text = false, primary = false, outline = false, small = false, large = false, rounded = false, leftIcon, rightIcon, children, onClick, ...rest }) {
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
    })

    return (
        <Comp className={classes} {...props}> 
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button