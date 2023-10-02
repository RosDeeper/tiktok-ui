import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"
import Image from "../Image"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avavtar')} 
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1253dc15a05d70ebb29cb35c5f1ff0e4.jpeg?x-expires=1695542400&x-signature=mwDInPgjPkoZBz%2BVVAj0bI3mSEc%3D" 
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>RosDeeper</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                </h4>
                <span className={cx('username')}>Pham Ngoc Hoang</span>
            </div>
        </div>
    )
}

export default AccountItem