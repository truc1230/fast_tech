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
  Tooltip,
  Typography
} from '@mui/material'
import { DeleteIcon, EditIcon } from '@/components/icon'
import { Solution as TSolution } from '@prisma/client'
import { FormUser, QueryParams } from '@/types'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  data: TSolution[]
  params: QueryParams<TSolution>
  setPage: React.Dispatch<React.SetStateAction<number>>
  total: number
  // handleOpen: () => void
  onSubmit: (data: FormUser) => void
}

export default function TableSolution(props: Props) {
  const { data = [], params, setPage, total, onSubmit } = props
  console.log('data', data)
  const numPage = params.page ? params.page - 1 : 0
  const router = useRouter()

  const renderDetailsButton = (row: TSolution) => {
    const { id } = row

    return (
      <>
        <IconButton
          onClick={() => {
            onSubmit({ id })
          }}
        >
          <Tooltip children={<DeleteIcon color='error' />} title={'Delete Solution'} />
        </IconButton>
        <IconButton>
          <Link href={`/admin/solution/${id}`}>
            <Tooltip children={<EditIcon />} title={'Edit Solution'} />
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
            <TableCell align='left'>Description</TableCell>
            <TableCell align='left'>Image</TableCell>
            <TableCell align='left'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='left'>
                <Typography
                  maxWidth={150}
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '1',
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {row.title}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography
                  maxWidth={300}
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {row.description}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <img
                  className='object-center h-14'
                  src={
                    row.image ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDlXUfT41nAkApex3eYC40w-oX2VhGou3bZXPyyrGtTOW3eCD'
                  }
                />
              </TableCell>
              <TableCell align='left'>{renderDetailsButton(row)}</TableCell>
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
