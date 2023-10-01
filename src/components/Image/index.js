import { forwardRef, useState } from 'react'
import classNames from 'classnames'

import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, className, fallback : customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customFallback)
    }

    return (
        <img 
            ref={ref}
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    )
})

export default Image