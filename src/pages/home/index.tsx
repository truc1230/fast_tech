import { ListArticles } from '@/ui/organisms'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Box } from '@mui/material'
import React from 'react'

export default function index() {
  return (
    <DefaultLayout>
      <ListArticles />
    </DefaultLayout>
  )
}
