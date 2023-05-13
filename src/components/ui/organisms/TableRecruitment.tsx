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
import { DeleteIcon, EditIcon } from '@/components/icon'
import { Article, Recruitment } from '@prisma/client'
import { FormUser, QueryParams, TArticleWithAuthor, TypeId } from '@/types'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { formatVND } from '@/utils/formatCurrency'
import { useControlPopup } from '@/components/hooks'
import { DialogConfirm } from '@/ui/molecules'

type Props = {
  data: Recruitment[]
  params: QueryParams<Recruitment>
  setPage: React.Dispatch<React.SetStateAction<number>>
  total: number
  // handleOpen: () => void
  handleDelete: (id: TypeId) => void
}

export default function TableRecruitment(props: Props) {
  const { data = [], params, setPage, total, handleDelete } = props
  console.log('data', data)
  const numPage = params.page ? params.page - 1 : 0
  const router = useRouter()
  const { open, handleClose, handleOpen } = useControlPopup()
  const [rowSelected, setRowSelected] = React.useState<Recruitment>()
  const renderDetailsButton = (row: Recruitment) => {
    const { id } = row

    return (
      <>
        <IconButton
          onClick={() => {
            setRowSelected(row)
            handleOpen()
          }}
        >
          <Tooltip children={<DeleteIcon color='error' />} title={'Delete Recruitment'} />
        </IconButton>
        <IconButton>
          <Link href={`/admin/recruitment/${id}`}>
            <Tooltip children={<EditIcon />} title={'Edit Recruitment'} />
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
            <TableCell align='center'>Title</TableCell>
            <TableCell align='center'>Min Salary</TableCell>
            <TableCell align='center'>Max Salary</TableCell>
            <TableCell align='center'>Amount</TableCell>
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
              <TableCell align='center'>{formatVND(row.minSalary)}</TableCell>
              <TableCell align='center'>{formatVND(row.maxSalary)}</TableCell>
              <TableCell align='center'>{row.amount}</TableCell>
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
      <DialogConfirm
        open={open}
        onClose={handleClose}
        onSubmit={() => handleDelete(rowSelected?.id as TypeId)}
        title={'Xác nhận xoá'}
        description={'Bạn có muốn xoá bài tuyển dụng này'}
      />
    </TableContainer>
  )
}
