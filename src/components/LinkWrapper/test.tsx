import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWraper/>', () => {
  it('should render link with children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByRole('link', { name: /anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')

    screen.logTestingPlaygroundURL()
  })
})
