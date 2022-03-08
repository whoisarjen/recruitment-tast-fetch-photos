import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationBasic from ".";

const module = {
    function: jest.fn()
}

const spy = jest.spyOn(module, 'function')

describe('Testing paginationBasic', () => {
    it('Expect to correctly load', () => {
        render(<PaginationBasic prev={jest.fn()} next={jest.fn()} />)
    })

    it('Expect to call prev funtion', () => {
        render(<PaginationBasic prev={module.function} next={jest.fn()} />)

        userEvent.click(screen.getByTestId('prev'))

        expect(spy).toBeCalledTimes(1)
    })

    it('Expect to call next funtion', () => {
        render(<PaginationBasic next={module.function} prev={jest.fn()} />)

        userEvent.click(screen.getByTestId('next'))

        expect(spy).toBeCalledTimes(1)
    })
})

export default {};