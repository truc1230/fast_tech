import { InputBaseProps } from '@mui/material'
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ['clean']
  ]
}

const formats = [
  //'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background'
]

export type Props = {} & InputBaseProps

function QuillEditor(props: Props) {
  const {} = props
  // {...field}

  return (
    <ReactQuill
      {...props}
      theme='snow'
      modules={modules}
      formats={formats}
      style={{ height: '600px' }}
    />
  )
}

export default QuillEditor
