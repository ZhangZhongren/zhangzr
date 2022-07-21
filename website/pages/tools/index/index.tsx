import styles from '@styles/Home.module.css'
import Head from 'next/head'
import Header from '@components/Header'
import Title from '@components/Title'
import { Input, Button } from 'antd'
import style from './index.module.scss'
import { useState, useEffect } from 'react'
import Clipboard from 'clipboard';
// https://www.npmjs.com/package/crypto-js
import * as crypto from 'crypto-js'
const { TextArea } = Input;
// console.log(crypto)

const Tools = () => {
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
  return <div className={ styles.bg}>
    <Head>
      <title>tools</title>
    </Head>
    <Header />
    <div className="flex justify-center">
      <div className="w-70">
        <Title title='crypto' />
        <div className={ `${style.block} columns-2 justify-between` }>
          <div>
            <TextArea style={{ backgroundColor: '#666', color: '#fff' }} id='crypto' rows={6} placeholder="please input key" maxLength={6} />
            <Button type="primary" onClick={md5}>md5</Button>
            <Button type="default" onClick={sha1}>SHA1</Button>
            <Button type="primary" onClick={SHA256}>SHA256</Button>
            <Button type="default" onClick={SHA512}>SHA512</Button>
            <Button type="primary" onClick={SHA3}>SHA3</Button>
          </div>
          <div>
            <TextArea id='copyvalue' style={{ backgroundColor: '#666', color: '#fff' }} value={cryptoValue} readOnly rows={6} placeholder="answer" maxLength={6} />
            <div className='flex justify-end'>
              <Button className='copy' data-clipboard-target="#copyvalue" type="primary" >copy</Button>
              <Button type="primary" onClick={ () => setCryptoValue('')}>clear</Button>
            </div>
          </div>
        </div>
        <Title title='ocr' />
      </div>
    </div>
  </div>
}

export default Tools