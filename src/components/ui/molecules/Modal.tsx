import { Card, Modal as MuiModal, ModalProps } from '@mui/material'
type Props = {
  width?: number
  height?: number
} & ModalProps
export default function Modal(props: Props) {
  const { children, width = 500, height = 500, ...rest } = props
  return (
    <MuiModal className='Modal' {...rest}>
      <Card
        sx={{
          width,
          height,
          ...style
        }}
      >
        {children}
      </Card>
    </MuiModal>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
  overflow: 'auto'
}
