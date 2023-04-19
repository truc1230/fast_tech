import * as React from 'react'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid'
import { Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import {
  AccountCircleIcon,
  AddIcon,
  CircleIcon,
  EditIcon,
  NoAccountsIcon,
  RestartAltIcon
} from '@/components/icon'
import { User } from '@prisma/client'
import { ButtonNavbar } from '@/ui/atom'

type Props = {
  data: User[]
}

export default function DataTable(props: Props) {
  const { data } = props
  return (
    <div style={{ height: '100vh', width: '100%', padding: '10px' }}>
      {/* <FormSearch marginBottom={10}/> */}
      <ButtonNavbar>
        <AddIcon />
        Add Account
      </ButtonNavbar>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

const renderDetailsButton = (params: GridCellParams) => {
  const { isActive } = params.row
  return (
    <>
      <IconButton onClick={() => {}}>
        {isActive ? (
          <Tooltip children={<NoAccountsIcon color='error' />} title={'Disable Account'} />
        ) : (
          <Tooltip children={<AccountCircleIcon color='success' />} title={'Enable Account'} />
        )}
      </IconButton>
      <IconButton>
        <Tooltip children={<EditIcon />} title={'Edit Account'} />
      </IconButton>
      <IconButton>
        <Tooltip children={<RestartAltIcon />} title={'Reset Password'} />
      </IconButton>
    </>
  )
}
const columns: GridColDef[] = [
  { minWidth: 100, flex: 1, field: 'id', headerName: 'ID' },
  { minWidth: 100, flex: 1, field: 'name', headerName: 'Name' },
  { minWidth: 100, flex: 1, field: 'username', headerName: 'Username' },
  { minWidth: 100, flex: 1, field: 'role', headerName: 'Role' },
  {
    minWidth: 100,
    flex: 1,
    field: 'isActive',
    headerName: 'Active',
    type: 'boolean',
    align: 'center',
    renderCell: (params: GridCellParams) => {
      const { isActive } = params.row
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
  },
  {
    minWidth: 100,
    flex: 1,
    field: 'action',
    type: 'actions',
    headerName: 'Action',
    renderCell: renderDetailsButton
  }
]
