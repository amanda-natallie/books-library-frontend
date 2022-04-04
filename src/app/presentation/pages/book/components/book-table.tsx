import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { BookModel } from '~/app/domain/models'
import { useDeleteBookMutation } from '~/app/presentation/hooks'
import TodoItem from './book-item'

type Props = {
  books: BookModel[]
}

const BookTable = ({ books }: Props) => {
  const history = useHistory()
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'description', label: 'Description', minWidth: 170 },
    { id: 'completed', label: 'Completed', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 }
  ]

  const [deleteBook] = useDeleteBookMutation()

  const handleDelete = async (book: number) => {
    const res = await deleteBook({ toDoId: `${book}` })
    alert('deleted')
  }

  const handleTableActions = (book: BookModel, action: 'edit' | 'delete') => {
    action === 'edit'
      ? history.push(`/book-library/${book.id}`)
      : handleDelete(book.id)
  }

  return (
    <Table aria-label='book list table' size='small'>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id} align='left' component='th'>
              {column.label}
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
