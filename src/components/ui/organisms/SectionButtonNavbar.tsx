import { Box, Button, Menu } from '@mui/material'
import * as React from 'react'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import MenuItem from '../molecules/MenuItem'
export interface ISectionButtonNavbarProps {
  children: React.ReactNode
  icon: React.ReactElement | undefined
  sub: unknown | undefined
}
const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: 'none'
  }
})

export default function SectionButtonNavbar(props: ISectionButtonNavbarProps) {
  let currentlyHovering = false
  const styles = useStyles()
  const [isHover, setIsHover] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }
  const convertTitleToHref = (inputString: string) => {
    return '/' + inputString.toLowerCase().replace(/\s+/g, '-')
  }
  function handleHover() {
    currentlyHovering = true
  }

  function handleClose() {
    setAnchorEl(null)
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
    if (currentlyHovering) return <KeyboardArrowDownIcon fontSize='small' />
    return <KeyboardArrowUp fontSize='small' />
  }

  return (
    <Box className='hover:text-[red] focus-within:text-[red]'>
      <Button
        variant='text'
        className='hover:text-[red] focus-within:text-[red] hover:bg-transparent'
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        {...propsButton}
      >
        {props.children}
        {props.icon && renderIcon()}
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={true}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: 'auto' }
        }}
        getContentAnchorEl={null}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        PopoverClasses={{
          root: styles.popOverRoot
        }}
      >
        <Box className='min-w-[30vw]  px-4'>
          {props.sub &&
            props.sub.data.map((item) => (
              <Link
                href={`${convertTitleToHref(props.sub.title)}/${convertTitleToHref(item.title)}`}
                passHref
              >
                <MenuItem>{item.title}</MenuItem>
              </Link>
            ))}
          {/* <Link href={'profile'} passHref>
            <MenuItem>Profile</MenuItem>
          </Link>
          <Link href={'profile'} passHref>
            <MenuItem>Technology advisory</MenuItem>
          </Link>
          <Link href={'profile'} passHref>
            <MenuItem>Data, analytics and AI</MenuItem>
          </Link> */}
        </Box>
      </Menu>
    </Box>
  )
}
