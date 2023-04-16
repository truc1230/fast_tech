import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Box, Button, Menu } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { KeyboardArrowDownIcon, KeyboardArrowUp } from '@/components/icon'
import { MenuItem } from '@/ui/molecules'
export interface ISectionButtonNavbarProps {
  children: React.ReactNode
  icon: React.ReactElement | undefined
  sub: MenuListProps
}
type MenuListProps = {
  title: string
  data: Array<{
    title: string
  }>
}

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: 'none'
  }
})

export default function SectionButtonNavbar(props: ISectionButtonNavbarProps) {
  let currentlyHovering = false
  const styles = useStyles()
  const [isHover, setIsHover] = React.useState(currentlyHovering)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { asPath } = useRouter()
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
      setIsHover(true)
    }
  }

  const convertTitleToHref = (inputString: string) => {
    return '/' + inputString.toLowerCase().replace(/\s+/g, '-')
  }
  // let isAccessing =
  function handleHover() {
    currentlyHovering = true
    setIsHover(true)
  }

  function handleClose() {
    setAnchorEl(null)
    setIsHover(false)
  }

  function handleCloseHover() {
    currentlyHovering = false
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose()
      }
    }, 50)
  }
  let propsButton = {}
  if (!!props.icon) {
    propsButton = {
      'aria-haspopup': 'true',
      onClick: handleClick,
      onMouseOver: handleClick,
      onMouseLeave: handleCloseHover
    }
  }

  const renderIcon = () => {
    if (isHover) return <KeyboardArrowDownIcon fontSize='small' />
    return <KeyboardArrowUp fontSize='small' />
  }

  return (
    <Box>
      <Button
        variant='text'
        className={`hover:text-[red]  hover:bg-transparent ${
          isHover || asPath.includes(convertTitleToHref(props.sub.title)) ? 'text-[red]' : ''
        }`}
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        {...propsButton}
      >
        {props.children}
        {props.icon && renderIcon()}
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: 'auto' }
        }}
        // getcontentanchorel={null}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        PopoverClasses={{
          root: styles.popOverRoot
        }}
      >
        <Box className='min-w-[30vw]  px-4'>
          {props.sub &&
            props.sub.data.map((item, idx) => {
              let href = `${convertTitleToHref(props.sub.title)}${convertTitleToHref(item.title)}`
              return (
                <Link
                  key={idx}
                  href={href}
                  passHref
                  // className={`${asPath.includes(href) ? 'text-red' : ''}`}
                >
                  <MenuItem>{item.title}</MenuItem>
                </Link>
              )
            })}
        </Box>
      </Menu>
    </Box>
  )
}
