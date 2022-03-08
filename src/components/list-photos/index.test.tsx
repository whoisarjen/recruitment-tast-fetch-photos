import { render, screen } from "@testing-library/react";
import ListPhotos from ".";
import { fakeItems } from "../../test-utils/photo.utils";
import { tranformToUnsplashURL } from "../../utils/photo.utils";

describe('Testing ListPhotos', () => {
    it('expect to correctly load', () => {
        render(<ListPhotos items={[]} />)
    })

    it('expect img to have changed src', () => {
        render(<ListPhotos items={fakeItems} />)

        const img = screen.getByTestId(fakeItems[0].id)

        expect(img.getAttribute('src')).toEqual(tranformToUnsplashURL({ url: fakeItems[0].url }))
    })
})

export default {};