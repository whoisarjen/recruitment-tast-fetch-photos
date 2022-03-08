import { tranformToUnsplashURL } from "./photo.utils";

describe('Testing tranformToUnsplashURL', () => {
    it('Expect to show http://source.unsplash.com/123', () => {
        const res = tranformToUnsplashURL({ url: '123' })

        expect(res).toEqual('http://source.unsplash.com/123')
    })
})

export default {};