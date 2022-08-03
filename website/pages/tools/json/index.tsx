import style from './index.module.scss'
import { Input } from 'antd'
import { useState } from 'react'
const { TextArea } = Input;

const Json = () => {

  const [value, setValue] = useState()
  const changejsonstr = (e: any) => {
    console.log(e.target.value)
    try {
      setValue(JSON.stringify(JSON.parse(e.target.value) as any, null, 10 ) as any)
    } catch (e: any) {
      setValue(e)
    }
  }
  return <>
    <div className='columns-2 justify-between'>
      <div>
        <TextArea className={ style.textarea } onChange={changejsonstr} style={{ backgroundColor: '#666', color: '#fff' }} rows={6} placeholder="please input json string" />
      </div>
      <div>
      <TextArea className={ style.textarea } style={{ backgroundColor: '#666', color: '#fff' }} value={value} readOnly rows={6} placeholder="answer" />
      </div>
    </div>
  </>
}

export default Json