import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

import styles from "./AccountItem.module.scss"
import Image from "../Image"

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avavtar')} 
                src={data.avatar}
                alt={data.last_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem