import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';

import Tippy from '@tippyjs/react/headless';
import AccountItem from '../AccountItem';
// import 'tippy.js/dist/tippy.css';
import Button from '../../../Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo -- done*/}
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="TikTok" />
                </div>
                {/* search */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}> Accounts </h4>
                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>                                    
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            {/* Search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text >Upload</Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn}/>} >Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
