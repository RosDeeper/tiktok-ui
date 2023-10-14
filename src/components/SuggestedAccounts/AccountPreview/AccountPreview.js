import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import styles from "./AccountPreview.module.scss"
import Button from "~/components/Button"

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src='https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg'
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hoaahanassii</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Dao Le Phuong Hoa</p>
                <p className={cx('analyst')}>
                    <strong className={cx('value')}>15.5M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>401.3M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    )
}

export default AccountPreview