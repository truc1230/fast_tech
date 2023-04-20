import * as React from 'react'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
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
  EditIcon,
  NoAccountsIcon,
  RestartAltIcon
} from '@/components/icon'
import { User } from '@prisma/client'
import { FormUser, QueryParams } from '@/types'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

type Props = {
  data: User[]
  params: QueryParams<User>
  setPage: React.Dispatch<React.SetStateAction<number>>
  total: number
  handleOpen: () => void
  onSubmit: (data: FormUser) => void
}

export default function TableUser(props: Props) {
  const { data = [], params, setPage, total, handleOpen, onSubmit } = props
  console.log('data', data)
  const numPage = params.page ? params.page - 1 : 0
  const router = useRouter()

  const renderDetailsButton = (row: User) => {
    const { isActive, id } = row

    return (
      <>
        <IconButton
          onClick={() => {
            onSubmit({ id, isActive: !isActive })
          }}
        >
          {isActive ? (
            <Tooltip children={<NoAccountsIcon color='error' />} title={'Disable Account'} />
          ) : (
            <Tooltip children={<AccountCircleIcon color='success' />} title={'Enable Account'} />
          )}
        </IconButton>
        <IconButton
          onClick={async () => {
            handleOpen()
            // await dispatch(getUserAction(id))
            router.push(`?id=${id}`, undefined, { shallow: false })
          }}
        >
          <Tooltip children={<EditIcon />} title={'Edit Account'} />
        </IconButton>
        <IconButton
          onClick={() => {
            onSubmit({ id, password: process.env.DEFAULT_PASSWORD })
          }}
        >
          <Tooltip children={<RestartAltIcon />} title={'Reset Password'} />
        </IconButton>
      </>
    )
  }

  const renderStatus = (row: User) => {
    const { isActive } = row
    return (
      <>
        {isActive ? (
          <CircleIcon fontSize='small' color='success' />
        ) : (
          <CircleIcon fontSize='small' color='error' />
        )}
      </>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='center'>Username</TableCell>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Role</TableCell>
            <TableCell align='center'>Status</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='center'>{row.username}</TableCell>
              <TableCell align='center'>{row.name}</TableCell>
              <TableCell align='center'>{row.role}</TableCell>
              <TableCell align='center'>{renderStatus(row)}</TableCell>
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
