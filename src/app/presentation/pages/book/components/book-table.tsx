import { TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { BookModel } from '~/app/domain/models'
import { useDeleteBookMutation } from '~/app/presentation/hooks'
import TodoItem from './book-item'
import { Table } from '../book-styles'

type Props = {
  books: BookModel[]
}

const BookTable = ({ books }: Props) => {
  const history = useHistory()
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'description', label: 'Description', minWidth: 170 },
    { id: 'availability', label: 'Availability', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 }
  ]

  const [deleteBook] = useDeleteBookMutation()

  const handleDelete = async (book: number) => {
    const res = await deleteBook({ bookId: `${book}` })
    alert('deleted')
  }

  const handleTableActions = (book: BookModel, action: 'edit' | 'delete') => {
    action === 'edit'
      ? history.push(`/book-library/${book.id}`)
      : handleDelete(book.id)
  }

  return (
    <Table
      stickyHeader
      aria-label='book sticky list table'
      size='small'
      padding='none'
    >
      <TableHead sx={{ background: '#f8f7fc' }}>
        <TableRow>
          {columns.map((column, idx) => (
            <TableCell
              key={column.id}
              align={idx === columns.length - 1 ? 'center' : 'left'}
              component='th'
              style={{ padding: '10px', color: '#1976d2' }}
            >
              <strong>{column.label}</strong>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {books &&
          books.map((book) => (
            <TodoItem
              key={book.id}
              book={book}
              onSelectRow={handleTableActions}
            />
          ))}
      </TableBody>
    </Table>
  )
}

export default BookTable
