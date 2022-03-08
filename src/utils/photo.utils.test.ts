import { tranformToUnsplashURL } from "./photo.utils";

describe('Testing tranformToUnsplashURL', () => {
    it('Expect to show https://source.unsplash.com/123', () => {
        const res = tranformToUnsplashURL({ url: '123' })

        expect(res).toEqual('https://source.unsplash.com/123')
    })
})

export default {};