import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../../components/styled/Button/styles'
import { dark } from '../../styles/themes/dark'

describe("rende something", () => {
  it('render something', () => {
    const screen = render(<ThemeProvider theme={dark}><Button disabled></Button></ThemeProvider>)
    screen.debug()
  })
})