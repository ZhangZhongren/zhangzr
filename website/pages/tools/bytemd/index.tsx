import { Editor, Viewer } from '@bytemd/react'
import { useState } from 'react'
import 'bytemd/dist/index.css'
import './index.module.scss'
const plugins: any = [
  
  // Add more plugins here
]
const Bytemd = () => {
  
  const [value, setValue] = useState('<a href="https://github.com/bytedance/bytemd">https://github.com/bytedance/bytemd</a>')
  return <>
    <Editor
      value={value}
      plugins={plugins}
      onChange={(v) => {
        setValue(v)
      }}
    />
  </>
}

export default Bytemd