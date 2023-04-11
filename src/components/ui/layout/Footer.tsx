import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Box>
      <Stack direction={'row'} spacing={4}>
        <Box width={1 / 4}>Item1</Box>
        <Box>Item2</Box>
        <Box>Item3</Box>
        <Typography>{'thang '}</Typography>
      </Stack>
      <Box></Box>
    </Box>
  )
}
