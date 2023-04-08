//@ts-nocheck
import { TypeGenerateColumns, TypeOption } from '@types'
import moment from 'moment'
import Resizer from 'react-image-file-resizer'

export const resizePhoto = (file: File) =>
  new Promise((resolve) => {
    return Resizer.imageFileResizer(
      file,
      500,
      500,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri)
      },
      'file'
    )
  })

export const generateColumns = <T>(
  params?: { [key: string]: { label: string } },
  FIELDS: string[],
  invisibleFields?: string[]
): GridColumns<TypeGenerateColumns> => {
  const columns: TypeGenerateColumns[] = []
  ;[...FIELDS].map((field, index) => {
    const newColumn = {
      field,
      flex: 1,
      headerName: (params && params[field]?.label) || _.startCase(field.replaceAll('_', ' ')),
      hide: invisibleFields?.includes(field)
    }
    columns.push(newColumn)
  })
  return columns
}

export const customColumns = (
  FIELDS: GridColDef[],
  invisibleFields?: string[]
): GridColumns<any> | [] => {
  return [...FIELDS].map((field, index) => {
    return {
      ...field,
      flex: 1,
      headerName: invisibleFields?.includes(field.field)
        ? ''
        : _.startCase(field.headerName.replaceAll('_', ' '))
    }
  })
}

export const checkDate = (value: string) => {
  return value.includes('date')
}

export const generateRows = (listRow: any[], isNotParse?: boolean) => {
  const newListRow = []
  listRow.forEach((row) => {
    const newRow = {}
    Object.keys(row).forEach((key) => {
      if (Array.isArray(row[key])) {
        newRow[key] = !isNotParse ? row[key].map((item) => item.name).join() : row[key]
      } else if (typeof row[key] === 'object') {
        newRow[key] = !isNotParse ? row[key]?.name : row[key]
      } else {
        if (checkDate(key)) {
          newRow[key] = getFormatDateTimeToDate(row[key])
        } else {
          newRow[key] = row[key]
        }
      }
    })
    newListRow.push(newRow)
  })
  return newListRow
}

export const convertToFilters = (value) => {
  let filters = {}
  Object.keys(value).map((key) => {
    if (!value[key] && value[key] !== 0) return
    if (typeof value[key] === 'object' && Object.keys(value[key]).length === 0) return
    if (!Array.isArray(value[key]) && typeof value[key] === 'object') filters[key] = value[key].id
    else if (typeof value[key] === 'object') filters[key] = value[key].map((item) => item.id)
    else filters[key] = value[key]
  })
  return filters
}

export function getPastDate(number: number) {
  return new Date(Date.now() - 3600 * 1000 * 24 * number)
}
export function formatNumberToDollar(number: number) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })
}
export function isRectEqual(r1, r2) {
  return (
    r1 &&
    r2 &&
    r1.left === r2.left &&
    r1.top === r2.top &&
    r1.width === r2.width &&
    r1.height === r2.height
  )
}

export const getListIdByOption = (options: TypeOption & any): TypeId[] =>
  options.map((option) => option.id)

export const addBusinessDays = (startDate: Date, workDaysToAdd: number): Date => {
  let currentDate = new Date(startDate)
  let addedDays = 1
  while (addedDays < workDaysToAdd) {
    currentDate.setDate(currentDate.getDate() + 1)
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      addedDays++
    }
  }
  return currentDate
}

export const countBusinessDays = (startDate: Date, endDate: Date): number => {
  let count = 0
  const curDate = new Date(startDate)
  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) count++
    curDate.setDate(curDate.getDate() + 1)
  }
  return count
}
export function areListsEqual(list1, list2) {
  if (list1.length !== list2.length) {
    return false
  }
  const sortedList1 = list1.sort()
  const sortedList2 = list2.sort()
  for (let i = 0; i < sortedList1.length; i++) {
    if (sortedList1[i] !== sortedList2[i]) {
      return false
    }
  }
  return true
}
export function areObjectsEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (!areListsEqual(obj1Keys, obj2Keys)) {
    return false
  }
  for (const key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

export function getFormatDateTimeToDate(value: DateTime) {
  return moment(value).startOf('day').format('YYYY-MM-DD')
}

export function getHoursAMPM(value: DateTime) {
  return moment(value).format('hh:mm A')
}

export const getDataGridGroupRows = <T>(groupData: T[], groupName) => {
  const dataGridGroupRows = groupData.map((row) => {
    return row[groupName]
  })
  return dataGridGroupRows
}

export const getDataGridGroupNames = <T>(groupData: T[]) => {
  const dataGridGroupNames = []
  groupData.forEach((row) => {
    dataGridGroupNames.push(row.name)
  })
  return dataGridGroupNames
}
