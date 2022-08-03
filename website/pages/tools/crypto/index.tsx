import { Input, Button } from 'antd'
const { TextArea } = Input;
import Clipboard from 'clipboard';
import * as crypto from 'crypto-js'
import { useState, useEffect } from 'react'

const Crypto = () => {
  useEffect(() => {
    new Clipboard('.copy')
  })
  const getInputValiue = () => document.getElementById('crypto')  as unknown as HTMLTextAreaElement
  const [cryptoValue, setCryptoValue] = useState('')
  const md5 = () => setCryptoValue(crypto.MD5(getInputValiue()?.value).toString())
  const sha1 = () => setCryptoValue(crypto.SHA1(getInputValiue()?.value).toString())
  const SHA256 = () => setCryptoValue(crypto.SHA256(getInputValiue()?.value).toString())
  const SHA512 = () => setCryptoValue(crypto.SHA512(getInputValiue()?.value).toString())
  const SHA3 = () => setCryptoValue(crypto.SHA3(getInputValiue()?.value).toString())
  return (
    <div className='columns-2 justify-between'>
      <div>
        <TextArea id='crypto' rows={8} placeholder="please input key" />
        <Button type="primary" onClick={md5}>md5</Button>
        <Button type="default" onClick={sha1}>SHA1</Button>
        <Button type="primary" onClick={SHA256}>SHA256</Button>
        <Button type="default" onClick={SHA512}>SHA512</Button>
        <Button type="primary" onClick={SHA3}>SHA3</Button>
      </div>
      <div>
        <TextArea id='copyvalue' style={{ color: '#fff' }} value={cryptoValue} readOnly rows={8} placeholder="output" />
        {/* <div className='flex justify-end'> */}
          <Button className='copy' data-clipboard-target="#copyvalue" type="primary" >copy</Button>
          <Button type="primary" onClick={ () => setCryptoValue('')}>clear</Button>
        {/* </div> */}
      </div>
    </div>
  )
 
}

export default Crypto