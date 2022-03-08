export const tranformToUnsplashURL = ({ url }: { url: string }) => {
    return `https://source.unsplash.com/${url.substring(url.lastIndexOf('/') + 1)}`
}