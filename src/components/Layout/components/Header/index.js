import { useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleXmark, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Menu from '~/components/Popper/Menu'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        subMenu: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'VietNamese'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    }
]

const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser}/>,
        title: 'View profile',
        to: '/@user_id'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}/>,
        title: 'Get coins',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear}/>,
        title: 'Settings',
        to: '/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut}/>,
        title: 'Log out',
        to: '/logout',
        separate: true
    },
] 

function Header() {
    const [searchResults, setSearchResults] = useState([])
    const currentUser = true

    const handleChangeMenu = (item) => {
        console.log(item)
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt=''/>
                </div>

                <HeadlessTippy 
                    interactive
                    visible={searchResults.length > 0}
                    render={attrs => (
                        <div  className={cx('search-result')} tabIndex='-1' {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-label')}>Accounts</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search....' spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content='Messages' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane}/>
                                </button>
                            </Tippy>
                            <Tippy content='Inbox' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage}/>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>
                            </>
                    )}

                    <Menu items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS} onChange={handleChangeMenu}>
                        {currentUser ? (
                            <img className={cx('user-avt')} src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1253dc15a05d70ebb29cb35c5f1ff0e4.jpeg?x-expires=1695542400&x-signature=mwDInPgjPkoZBz%2BVVAj0bI3mSEc%3D" alt=""/>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header