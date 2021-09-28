import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--container);
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  margin: auto;
`
export const Header = styled.h1`
  font-size: var(--large);
  font-weight: bold;
  margin-bottom: var(--large);
  line-height: var(--medium);
`

export const Body = styled.p`
  font-size: var(--medium);
  line-height: var(--medium);
`
