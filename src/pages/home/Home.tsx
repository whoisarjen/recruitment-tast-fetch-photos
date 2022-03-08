import ListPhotos from "../../components/list-photos";
import PaginationBasic from "../../pagination-basic";
import { useHomeProps } from "./useHome";

const BaseHome = ({ items, next, prev }: useHomeProps) => {
    return (
        <>
            <ListPhotos {...{ items }} />
            <PaginationBasic next={next} prev={prev} />
        </>
    )
}

export default BaseHome;