import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useState } from 'react'

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)
const defaultFn = () => {

}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.subMenu

            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory((prev) => [...prev, item.subMenu])
                }else {
                    onChange(item)
                }
            }}/>
        })
    }

    const handeBackMenu = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const handleRender = (attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header 
                        title={current.title} 
                        onBack={handeBackMenu}
                    />
                )}
                <div className={cx('menu-body')}>
                    {renderItems()}
                </div>
            </PopperWrapper>
        </div>
    )

    const handleResetMenu = () => setHistory(prev => prev.slice(0, 1))

    return (
        <Tippy 
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement='bottom-end'
            hideOnClick={hideOnClick}
            render={handleRender}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu