import {
  FormControl,
  Select,
  SelectProps,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
  useTheme,
  Theme,
  InputLabel
} from '@mui/material'
import React from 'react'

type Props = {
  data?: Array<string>
  title?: string
} & SelectProps
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

function getStyles(name: string, selected: string[], theme: Theme) {
  return {
    fontWeight:
      selected.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}
const FieldSelect = (props: Props) => {
  const { data = names, title = 'Name' } = props
  const theme = useTheme()
  const [selected, setSelected] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value }
    } = event
    setSelected(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id='demo-multiple-name-label'>{title}</InputLabel>
        <Select
          multiple={false}
          value={selected}
          input={<OutlinedInput label='Name' />}
          MenuProps={MenuProps}
          {...props}
        >
          {data.map((item) => (
            <MenuItem key={item} value={item} style={getStyles(item, selected, theme)}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default FieldSelect
