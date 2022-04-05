import { MdDelete, MdEdit } from 'react-icons/md'

import { IconButton } from '@mui/material'
import { BookModel } from '~/app/domain/models'
import { Cell, Row } from '../book-styles'

type Props = {
  onSelectRow: (book: BookModel, action: 'edit' | 'delete') => void
  book: BookModel
}

const TodoItem = ({ book, onSelectRow }: Props) => {
  return (
    <Row>
      <Cell align='left' sx={{ width: '20%' }}>
        {book.name}
      </Cell>
      <Cell align='left' size='small' sx={{ width: '60%' }}>
        <p
          style={{
            maxHeight: 60,
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {book.description}
        </p>
      </Cell>
      <Cell
        align='left'
        sx={{
          width: '10%',
          color: book.booked ? '#333' : 'green'
        }}
      >
        {book.booked ? 'Booked' : <strong>Available</strong>}
      </Cell>
      <Cell align='center' sx={{ width: '10%' }}>
        <IconButton
          aria-label='edit'
          title='Edit'
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff'
            }
          }}
          onClick={() => onSelectRow(book, 'edit')}
        >
          <MdEdit fontSize={16} />
        </IconButton>
        <IconButton
          aria-label='delete'
          title='Delete'
          sx={{
            '&:hover': {
              backgroundColor: '#1976d2',
              color: '#fff'
            }
          }}
          onClick={() => onSelectRow(book, 'delete')}
        >
          <MdDelete fontSize={16} />
        </IconButton>
      </Cell>
    </Row>
  )
}

export default TodoItem
