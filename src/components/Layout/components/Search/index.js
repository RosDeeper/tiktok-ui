import { useEffect, useRef, useState } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'

import * as searchService from '~/apiServices/searchService'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import styles from './Search.module.scss'
import { SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const debounced = useDebounce(searchValue, 700)

    const inputRef = useRef()

    useEffect(() => {
        if(!debounced.trim()) {
            setSearchResults([])
            return
        }

        const fetchAPI = async () => {
            setLoading(true)

            const result = await searchService.search(debounced)
            setSearchResults(result)
            setLoading(false)
        }

        fetchAPI()

    }, [debounced])

    const handleChange = (e) => {
        const inputValue = e.target.value

        if(inputValue.startsWith(' ')) {
            return
        }

        setSearchValue(inputValue)
    }

    const handleClear = () => {
        setSearchValue('')
        setSearchResults([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (  
        <HeadlessTippy 
            interactive
            visible={showResult && searchResults.length > 0}
            render={attrs => (
                <div  className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-label')}>Accounts</h4>
                        {searchResults.map(result => (
                            <AccountItem key={result.id} data={result}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search....' 
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
            
                <button className={cx('search-btn')}>
                    <SearchIcon width='2.4rem' height='2.4rem'/>
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search