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
import { FormUser, QueryParams, TArticleWithAuthor } from '@/types'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Link from 'next/link'

type Props = {
  data: TArticleWithAuthor[]
  params: QueryParams<Article>
  setPage: React.Dispatch<React.SetStateAction<number>>
  total: number
  // handleOpen: () => void
  onSubmit: (data: FormUser) => void
}

export default function TableArticle(props: Props) {
  const { data = [], params, setPage, total, onSubmit } = props
  console.log('data', data)
  const numPage = params.page ? params.page - 1 : 0
  const router = useRouter()

  const renderDetailsButton = (row: TArticleWithAuthor) => {
    const { id } = row

    return (
      <>
        <IconButton
          onClick={() => {
            onSubmit({ id })
          }}
        >
          <Tooltip children={<DeleteIcon color='error' />} title={'Delete Article'} />
        </IconButton>
        <IconButton
          onClick={async () => {
            // await dispatch(getUserAction(id))
            // router.push(`?id=${id}`, undefined, { shallow: false })
          }}
        >
          <Link href={`/admin/article/${id}`}>
            <Tooltip children={<EditIcon />} title={'Edit Article'} />
          </Link>
        </IconButton>
        {/* <IconButton
          onClick={() => {
            onSubmit({ id, password: process.env.DEFAULT_PASSWORD })
          }}
        >
          <Tooltip children={<RestartAltIcon />} title={'Reset Password'} />
        </IconButton> */}
      </>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell> Id</TableCell>
            <TableCell align='center'>title</TableCell>
            <TableCell align='center'>Author</TableCell>
            {/* <TableCell align='center'></TableCell> */}
            {/* <TableCell align='center'>Status</TableCell> */}
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='center'>{row.title}</TableCell>
              <TableCell align='center'>{row.author.name}</TableCell>
              <TableCell align='center'>{renderDetailsButton(row)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        // rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={total}
        rowsPerPage={params.limit || 5}
        page={numPage}
        onPageChange={(event, newPage) => {
          if (newPage >= 0) {
            setPage(newPage + 1)
          }
        }}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}
