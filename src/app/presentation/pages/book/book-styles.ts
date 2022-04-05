import {
  styled,
  TableCell,
  TableRow,
  Table as TableWrapper
} from '@mui/material'

export const ContentContainer = styled('div')(() => ({
  width: '90vw',
  height: '70vh',
  maxWidth: '1200px',
  margin: '0 auto',
  overflow: 'hidden',
  padding: '30px 20px',
  background: '#f8f7fc',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, .3)'
}))

export const Cell = styled(TableCell)(() => ({
  textOverflow: 'ellipsis',
  padding: '10px'
}))

export const Row = styled(TableRow)(() => ({
  background: '#fff'
}))

export const Table = styled(TableWrapper)(() => ({}))
