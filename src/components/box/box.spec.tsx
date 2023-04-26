import { render } from "@testing-library/react"
import { Box } from "."

describe('<Box />', () => {
  it('should be in the document', () => {
    const label = 'label'

    const { getByText } = render(
      <Box>{label}</Box>
    )

    expect(getByText(label)).toBeInTheDocument()
  })

  it('should have 100% width when provided fullWidth prop', () => {
    const label = 'label'

    const { getByText } = render(
      <Box fullWidth>{label}</Box>
    )

    expect(getByText(label)).toHaveStyle({ width: '100%' })
  })
})