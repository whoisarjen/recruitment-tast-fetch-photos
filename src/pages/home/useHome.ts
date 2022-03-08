import { useEffect, useState } from "react"
import useListPhotos from "../../hooks/useListPhotos"
import { PhotoProps } from "../../interfaces/photo.interface"

const useHome = () => {
    const [startingFrom, setStartingFrom] = useState(0)
    const { all, getFew } = useListPhotos()
    const [items, setItems] = useState<PhotoProps[]>([])

    const next = () => {
        if (startingFrom + 3 < all.length) {
            setStartingFrom(state => state + 3)
        }
    }

    const prev = () => {
        if (startingFrom - 3 >= 0) {
            setStartingFrom(state => state - 3)
        }
    }

    useEffect(() => {
        setItems(getFew({ startingFrom, howMany: 3 }))
    }, [all, startingFrom])

    return { items, next, prev, startingFrom, setStartingFrom, all, getFew }
}

export type useHomeProps = Omit<ReturnType<typeof useHome>, 'startingFrom' | 'setStartingFrom' | 'all' | 'getFew'>

export default useHome;