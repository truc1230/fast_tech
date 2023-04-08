import _ from 'lodash'

export default function convertKeyToLabel(key: string) {
  if (typeof key == 'string') {
    return _.startCase(key.replaceAll('_', ' '))
  }
  return key
}
