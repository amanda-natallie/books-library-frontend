import React from 'react'
import { Box, Paper } from '@mui/material'
import { useStyles } from './paper-styles'

type CustomPaperProps = {
  children: React.ReactNode
  customStyles?: React.CSSProperties
}

export const CustomPaper: React.FC<CustomPaperProps> = ({
  children,
  customStyles
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Paper
        elevation={5}
        className={classes.defaultPaper}
        style={customStyles ? customStyles : {}}
      >
        {children}
      </Paper>
    </Box>
  )
}

export default CustomPaper
