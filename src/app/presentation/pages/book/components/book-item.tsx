import { MdDelete, MdEdit } from 'react-icons/md'

import { IconButton, TableCell, TableRow } from '@mui/material'
import { BookModel } from '~/app/domain/models'

type Props = {
  onSelectRow: (book: BookModel, action: 'edit' | 'delete') => void
  book: BookModel
}

const TodoItem = ({ book, onSelectRow }: Props) => {
  return (
    <TableRow key={book.id}>
      <TableCell align='left'>{book.name}</TableCell>
      <TableCell align='left'>{book.description}</TableCell>
      <TableCell align='left'>
        {book.completed ? 'Completed' : 'Not Completed'}
      </TableCell>
      <TableCell align='center'>
        <IconButton
          aria-label='edit'
          title='Edit'
          onClick={() => onSelectRow(book, 'edit')}
        >
          <MdEdit fontSize={16} />
        </IconButton>
        <IconButton
          aria-label='delete'
          title='Delete'
          onClick={() => onSelectRow(book, 'delete')}
        >
          <MdDelete fontSize={16} />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default TodoItem
