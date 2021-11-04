import { render } from '@testing-library/react'

import LoaderContainer from '.'

describe('Render loader container', () => {
  it('Should render a loader container', () => {
    const { container } = render(<LoaderContainer loading={true} />)
    expect(container.getElementsByClassName('loader').length).toBe(1)
  })

  it('Should not render a loader container', () => {
    const { container } = render(<LoaderContainer loading={false} />)
    expect(container.getElementsByClassName('loader').length).toBe(0)
  })
})
