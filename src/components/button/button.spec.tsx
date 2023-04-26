import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '.'

describe('Button Component', () => {


  it('should be in the document', () => {
    const label = 'Button'
    const { getByText } = render(<Button>{label}</Button>)

    expect(getByText(label)).toBeInTheDocument()
  })

  it ('should be possible fire click event', () => {
    const label = 'Button'
    const handleClick = jest.fn()

    const { getByText } = render(<Button onClick={handleClick}>{label}</Button>)

    const component = getByText(label)
    userEvent.click(component)
    
    expect(handleClick).toBeCalled()
  })

  it ('should be disabled when loading prop is true', () => {
    const label = 'Button'
    const { getByText } = render(<Button loading>{label}</Button>)

    expect(getByText(label)).toBeDisabled()
  })

  it ('should be disabled prop disabled is true', () => {
    const label = 'Button'
    const { getByText } = render(<Button disabled>{label}</Button>)

    expect(getByText(label)).toBeDisabled()
  })

  it ('should have an icon when prop icon is provided', () => {
    const label = 'Button'
    const { getByText } = render(
      <Button 
        icon={{
          name: 'backward'
        }}
      >{label}</Button>
    )
        
    const component = getByText(label).parentNode

    expect(component?.querySelector('svg')).toBeTruthy()
  })

})