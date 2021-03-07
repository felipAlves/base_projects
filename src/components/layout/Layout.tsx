import React, { useContext } from 'react'
import Switch from 'react-switch'
import styled, { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface IPropsLayout {
  children: JSX.Element | JSX.Element[]
  toggleTheme(): void
}

// Estilo

const LayoutComponent = styled.main`
  padding: 10px;
`

export const Layout = ({
  children,
  toggleTheme
}: IPropsLayout): JSX.Element => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <LayoutComponent>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
      {children}
    </LayoutComponent>
  )
}
