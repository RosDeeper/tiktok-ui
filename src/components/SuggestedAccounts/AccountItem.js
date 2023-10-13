import classNames from "classnames/bind"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import styles from "./SuggestedAccounts.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
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
    )
}

AccountItem.propTypes = {
}

export default AccountItem