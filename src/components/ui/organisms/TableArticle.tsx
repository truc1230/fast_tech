import * as React from 'react'
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip
} from '@mui/material'
import {
  AccountCircleIcon,
  CircleIcon,
  DeleteIcon,
  EditIcon,
  NoAccountsIcon,
  RestartAltIcon
} from '@/components/icon'
import { Article, User } from '@prisma/client'
import { FormUser, QueryParams, TArticleWithAuthor, TypeId } from '@/types'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { EllipsisTypography } from '@/ui/atom'
import { useControlPopup } from '@/components/hooks'
import { DialogConfirm } from '@/ui/molecules'

type Props = {
  data: TArticleWithAuthor[]
  params: QueryParams<Article>
  setPage: React.Dispatch<React.SetStateAction<number>>
  total: number
  // handleOpen: () => void
  handleDelete: (id: TypeId) => void
}

export default function TableArticle(props: Props) {
  const { data = [], params, setPage, total, handleDelete } = props
  console.log('data', data)
  const numPage = params.page ? params.page - 1 : 0
  const router = useRouter()
  const { open, handleClose, handleOpen } = useControlPopup()
  const [rowSelected, setRowSelected] = React.useState<TArticleWithAuthor>()

  const renderDetailsButton = (row: TArticleWithAuthor) => {
    const { id } = row

    return (
      <>
        <IconButton
          onClick={() => {
            setRowSelected(row)
            handleOpen()
          }}
        >
          <Tooltip children={<DeleteIcon color='error' />} title={'Delete Article'} />
        </IconButton>
        <IconButton>
          <Link href={`/admin/article/${id}`}>
            <Tooltip children={<EditIcon />} title={'Edit Article'} />
          </Link>
        </IconButton>
      </>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell> Id</TableCell>
            <TableCell align='left'>Title</TableCell>
            <TableCell align='center'>Author</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='left'>
                <EllipsisTypography WebkitLineClamp='1' maxWidth={300} text={row.title} />
              </TableCell>
              <TableCell align='center'>{row.author.name}</TableCell>
              <TableCell align='center'>{renderDetailsButton(row)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component='div'
        count={total}
        rowsPerPage={params.limit || 5}
        page={numPage}
        onPageChange={(event, newPage) => {
          if (newPage >= 0) {
            setPage(newPage + 1)
          }
        }}
      />
      <DialogConfirm
        open={open}
        onClose={handleClose}
        onSubmit={() => handleDelete(rowSelected?.id as TypeId)}
        title={'Xác nhận xoá'}
        description={'Bạn có muốn xoá bài viết này'}
      />
    </TableContainer>
  )
}
