import { fireEvent, render } from "@testing-library/react"
import { Pagination } from "."
import userEvent from "@testing-library/user-event";

describe('<Pagination />', () => {
  it('should be in the document', () => {
    const mockCallBack = jest.fn();

    const { getByText } = render(
      <Pagination 
        currentPage={1}
        onPageChange={mockCallBack}
        totalPages={10}
      />
    )

    expect(getByText('1 de 9')).toBeInTheDocument()
  })

  it ('should able to change page when user type number of the page', () => {
    const { getByRole } = render(
      <Pagination 
        currentPage={1}
        totalPages={10}
      />
    )

    const component = getByRole('input')

    fireEvent.change(component, { 
      target: {
        value: '3'
      }
    })

    expect((getByRole('input') as HTMLInputElement).value).toBe('3')
  })
  it ('should be not possible type a string in the page input', () => {
    const { getByRole } = render(
      <Pagination 
        currentPage={1}
        totalPages={10}
      />
    )

    const component = getByRole('input')

    fireEvent.change(component, { 
      target: {
        value: 'asdasdasd'
      }
    })

    expect((getByRole('input') as HTMLInputElement).value).toBe('0')
  })

  it ('should be able to forward 1 page when current page is less than total pages', () => {
    const forward = jest.fn()

    const { getByText } = render(
      <Pagination 
        currentPage={1}
        onPageChange={forward}
        totalPages={10}
      />
    )


    const component = getByText('>')


    fireEvent.click(component)

    expect(forward).toBeCalledTimes(1)
  })

  it ('should not be able to forward 1 page when current page is bigger or equal to total pages', () => {
    const forward = jest.fn()

    const { getByText } = render(
      <Pagination 
        currentPage={10}
        onPageChange={forward}
        totalPages={10}
      />
    )


    const component = getByText('>')


    fireEvent.click(component)

    expect(forward).toBeCalledTimes(0)
    expect(component).toBeDisabled()
  })

  it ('should be able to forward 2 pages when current page is less than total pages', () => {
    const forward = jest.fn()

    const { getByText } = render(
      <Pagination 
        currentPage={1}
        onPageChange={forward}
        totalPages={10}
      />
    )


    const component = getByText('>>')


    fireEvent.click(component)

    expect(forward).toBeCalledTimes(1)
  })

  it ('should not be able to forward 2 page when (current page + 2) is bigger or equal to total pages', () => {
    const forward = jest.fn()

    const { getByText } = render(
      <Pagination 
        currentPage={10}
        onPageChange={forward}
        totalPages={10}
      />
    )


    const component = getByText('>>')


    fireEvent.click(component)

    expect(forward).toBeCalledTimes(0)
    expect(component).toBeDisabled()
  })

  it ('should be able to backward 1 page when current page is bigger than 0', () => {
    const forward = jest.fn()

    const { getByText } = render(
      <Pagination 
        currentPage={2}
        onPageChange={forward}
        totalPages={10}
      />
    )

    const component = getByText('<')

    fireEvent.click(component)

    expect(forward).toBeCalledTimes(1)
  })

  it ('should not be able to backward 1 page when current page is equal or less than 1', () => {
    const forward = jest.fn()

    const { getByText } = render(
      <Pagination 
        currentPage={1}
        onPageChange={forward}
        totalPages={10}
      />
    )

    const component = getByText('<')

    fireEvent.click(component)

    expect(forward).toBeCalledTimes(0)
    expect(component).toBeDisabled()
  })

  it ('should not be able to backward 2 page when (current page - 2) is equal or less than 2', () => {
    const forward = jest.fn()

    const { getByText } = render(
      <Pagination 
        currentPage={2}
        onPageChange={forward}
        totalPages={10}
      />
    )
    const component = getByText('<<')

    fireEvent.click(component)

    expect(forward).toBeCalledTimes(0)
    expect(component).toBeDisabled()
  })
})
