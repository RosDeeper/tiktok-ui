import classNames from "classnames/bind"
import Tippy from "@tippyjs/react/headless"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import { Wrapper as PopperWrapper } from "~/components/Popper"
import styles from "./SuggestedAccounts.module.scss"
import AccountPreview from "./AccountPreview"

const cx = classNames.bind(styles)

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                interactive
                offset={[-10, 5]}
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg'
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hoaahanassii</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Dao Le Phuong Hoa</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

AccountItem.propTypes = {
}

export default AccountItem