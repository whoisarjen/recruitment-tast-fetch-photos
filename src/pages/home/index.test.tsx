import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from ".";
import BaseHome from "./Home";
import { renderHook, act } from '@testing-library/react-hooks'
import useHome from "./useHome";

const module = {
    items: [],
    next: jest.fn(),
    prev: jest.fn(),
}

const spyNext = jest.spyOn(module, 'next');
const spyPrev = jest.spyOn(module, 'prev');

describe('Testing Home Page', () => {
    it('Expect to load correctly', () => {
        render(<Home />)
    })

    it('Expect to fire next', () => {
        render(<BaseHome {...module} />)

        userEvent.click(screen.getByTestId('next'))

        expect(spyNext).toBeCalledTimes(1)
    })

    it('Expect to fire prev', () => {
        render(<BaseHome {...module} />)

        userEvent.click(screen.getByTestId('prev'))

        expect(spyPrev).toBeCalledTimes(1)
    })
})

jest.mock("../../hooks/useListPhotos", () => () => {
    return {
        all: [{}, {}, {}, {}],
        getFew: jest.fn()
    }
})

describe('Testing useHome', () => {
    it('Expect to allow clicking next', () => {
        const { result } = renderHook(() => useHome())

        act(() => {
            result.current.next()
        })

        expect(result.current.startingFrom).toEqual(3)
    })

    it('Expect to block clicking prev', () => {
        const { result } = renderHook(() => useHome())

        act(() => {
            result.current.prev()
        })

        expect(result.current.startingFrom).toEqual(0)
    })

    it('Expect to allow clicking prev', () => {
        const { result } = renderHook(() => useHome())

        result.current.setStartingFrom(3)

        act(() => {
            result.current.prev()
        })

        expect(result.current.startingFrom).toEqual(0)
    })
})

export default {};