import axios from "axios";

const useAxios = () => {

    const get = async ({ url, overWriteDefault = false }: { url: string, overWriteDefault?: boolean }) => {
        return await axios.get(`${(!overWriteDefault ? process.env.REACT_APP_SERVER_URL : '')}${url}`);
    }

    return { get }
}

export default useAxios;