import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { PhotoProps } from '../../interfaces/photo.interface';
import { tranformToUnsplashURL } from '../../utils/photo.utils';

const ListPhotos = ({ items = [] }: { items: Array<PhotoProps> }) => {
    return (
        <ImageList cols={3}>
            {items.map((item: PhotoProps) => (
                <ImageListItem key={item.id}>
                    <img
                        data-testid={item.id}
                        src={tranformToUnsplashURL({ url: item.url })}
                        srcSet={tranformToUnsplashURL({ url: item.url })}
                        alt={item.author}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default ListPhotos;