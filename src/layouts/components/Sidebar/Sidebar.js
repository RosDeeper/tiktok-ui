import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from "./Menu"
import config from '~/config'
import { HomeIcon, UserIcon, CompasIcon, LiveIcon } from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<UserIcon/>}/>
                <MenuItem title="Explore" to={config.routes.explore} icon={<CompasIcon/>}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>}/>
            </Menu>

            <SuggestedAccounts label='Suggested Accounts'/>
            <SuggestedAccounts label='Following Accounts'/>
        </aside>
    )
}

export default Sidebar