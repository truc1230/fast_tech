import DefaultLayout from '@/components/ui/layout/DefaultLayout'
import LayoutSidebar from '@/components/ui/layout/LayoutSidebar'
import Article from '@/components/ui/molecules/Article'
import ListArticles from '@/components/ui/organisms/ListArticles'
import { Box } from '@mui/material'
import React from 'react'

export default function index() {
  return (
    <DefaultLayout>
      <ListArticles />
    </DefaultLayout>
  )
}
