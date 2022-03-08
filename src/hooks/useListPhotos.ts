import { useEffect, useState } from "react"
import useAxios from "./useAxios"

const useListPhotos = () => {
    const [all, setAll] = useState([])
    const { get } = useAxios()

    useEffect(() => {
        (async () => {
            const res = await get({ url: 'https://picsum.photos/v2/list', overWriteDefault: true });
            setAll(res.data);
        })()
    }, [])

    const getFew = ({ startingFrom = 0, howMany }: { startingFrom?: number, howMany: number }) => {
        return all.slice(startingFrom, startingFrom + howMany)
    }
    
    return { all, getFew }
}

export default useListPhotos;