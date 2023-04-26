import { fireEvent, render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { ButtonIcon } from '.'

describe('<ButtonIcon />', () => {

  it('should be in the document', () => {
    const label = 'label'

    const { getByLabelText } = render(
      <ButtonIcon 
        label={label}
        icon={{
          name: 'backward'
        }}
      />
    )

    expect(getByLabelText(label)).toBeInTheDocument()
  })

  it ('should be possible fire click event', async () => {
    const label = 'label'
    const mockCallBack = jest.fn();

    const { getByLabelText } = render(
      <ButtonIcon 
        label={label}
        onClick={mockCallBack}
        icon={{
          name: 'backward'
        }}
      />
    )

    const component = getByLabelText(label)
    await userEvent.click(component)

    expect(mockCallBack).toBeCalledTimes(1)
  })

  it ('should have an icon when prop icon is provided', () => {
    const label = 'Button'
    const { getByLabelText } = render(
      <ButtonIcon 
        label={label}
        icon={{
          name: 'backward'
        }}
      />
    )
        
    const component = getByLabelText(label)

    expect(component?.querySelector('svg')).toBeTruthy()
  })
})