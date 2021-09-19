import { screen, render } from '@testing-library/react'

import Main from './index'

describe('<Main>React avançado</Main>', () => {
  it('should render a header', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: 'React Avançado' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
