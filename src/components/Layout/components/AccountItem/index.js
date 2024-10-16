import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avata')} src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/82443f6d92ad071b9201d6f4e7d8f542.jpeg?lk3s=a5d48078&nonce=94536&refresh_token=e0740a7dc7e439f35ef88bf92872ddbf&x-expires=1729242000&x-signature=pPUwZ8K%2FYpYyrm2H2XG45On%2B5v4%3D&shp=a5d48078&shcp=81f88b70" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}> Nguyen Van A </span>
            </div>
        </div>
    );
}

export default AccountItem;
