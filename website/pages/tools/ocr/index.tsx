import { useState, useRef } from 'react'
import Tesseract, { createWorker } from 'tesseract.js';
import Loading from '@components/Loading'
import { Input } from 'antd'
const { TextArea } = Input;

// https://github.com/naptha/tesseract.js
function Ocr() {
  const [value, setValue] = useState('')
  const [src, setSrc] = useState('')
  const [loading, setLoading] = useState(false)
  const input = useRef<any>(null)
  const trans = (str: any) => {
    setLoading(true)
    const worker = createWorker();
    (async () => {
      await worker.load();
      await worker.loadLanguage('eng+chi_tra');
      await worker.initialize('eng+chi_tra');
      const { data: { text } } = await worker.recognize(str);
      console.log(text);
      setValue(text)
      setLoading(false)
      await worker.terminate();
    })();
  }
  const getFile = (e: any): void => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      setSrc(reader.result as string)
      trans(reader.result as string)
    }
  }
  const handleupload = () => {
    input.current?.click()
  }
  return <>
    <Loading loading={ loading } />
    <div className="flex flex-row">
      <div className="basis-1/2" style={{ height: '100vh', border: '1px solid #666', borderRadius: '4px' }}>
        <button style={{ float: 'right', background: '#368', color: '#fff', width: '100px', height: '30px' }} onClick={ handleupload }>上传</button>
        <input type="file" ref={input} hidden onChange={getFile} />
        <img src={src} alt="" />
      </div>
      <div className="basis-1/2" style={{ height: '100vh', border: '1px solid #666', borderRadius: '4px', padding: '20px', overflow: 'auto' }}>
        <TextArea style={ { width: '100%', height: '100%', outline: 'none' }} value={value}></TextArea>
      </div>
    </div>
  </>
}

export default Ocr
