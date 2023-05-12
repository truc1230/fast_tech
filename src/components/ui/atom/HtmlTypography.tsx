import React from 'react'
import { Typography, TypographyProps } from '@mui/material'
import { makeStyles, DefaultTheme } from '@mui/styles'
interface CustomTheme extends DefaultTheme {
  typography: {
    [key: string]: React.CSSProperties
  }
}

const useStyles = makeStyles((theme: CustomTheme) => {
  const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const nestedRules: Record<string, React.CSSProperties> = {}
  tags.forEach((tag) => {
    nestedRules[`& ${tag}`] = { ...theme.typography[tag as keyof typeof theme.typography] }
  })
  return {
    root: nestedRules
  }
})

type Props = {
  content: string
} & TypographyProps

export default function HtmlTypography(props: Props) {
  const { content, ...rest } = props
  const classes = useStyles()
  return (
    <Typography
      className={classes.root}
      variant='body1'
      dangerouslySetInnerHTML={{
        __html: content
      }}
      {...rest}
    ></Typography>
  )
}
