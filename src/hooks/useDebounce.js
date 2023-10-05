import { useEffect, useState } from "react"

function useDebounce(value, delay) {
    const [debounceValue, setDeBounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDeBounceValue(value), delay)

        return () => clearTimeout(handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debounceValue
} 

export default useDebounce