import { IconButton } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Illustrations } from '../../components'
import { useToggleTheme } from '../../hooks'
import { RootLayoutContainer } from './layout-styles'

const BasicLayout: React.FC = ({ children }) => {
  const { toggleTheme, type } = useToggleTheme()
  const history = useHistory()
  return (
    <RootLayoutContainer>
      {history.location.pathname !== '/login' && <Illustrations.Logo />}
      <IconButton data-test-id='toggle-theme-button' onClick={toggleTheme}>
        {type}
        <span>Toggle Theme</span>
      </IconButton>
      {children}
    </RootLayoutContainer>
  )
}

export default BasicLayout
