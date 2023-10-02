import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Menu from '~/components/Popper/Menu'
import { MessageIcon, InboxIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'

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

               <Search/>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content='Messages' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon/>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content='Inbox' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon/>
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
                            <Image 
                                className={cx('user-avt')} 
                                alt=""
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1253dc15/a05d70ebb29cb35c5f1ff0e4.jpeg?x-expires=1695542400&x-signature=mwDInPgjPkoZBz%2BVVAj0bI3mSEc%3D" 
                            />
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