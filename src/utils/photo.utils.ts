export const tranformToUnsplashURL = ({ url }: { url: string }) => {
    return `http://source.unsplash.com/${url.substring(url.lastIndexOf('/') + 1)}`
}