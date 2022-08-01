import styles from '@styles/Home.module.css'
import Head from 'next/head'
import { Tag, Button } from 'antd'
import Header from '@components/Header'
import Title from '@components/Title'
import style from './index.module.scss'
import { useState } from 'react'
import CMap from '../map'
const Tools = () => {
  const [cname, setCname] = useState('crypto')
  return <div className={ styles.bg}>
    <Head>
      <title>tools</title>
    </Head>
    <Header />
    <div className="flex justify-between">
      <div className={ style.leftmenu }>
        <Title title='crypto' />
        <div className={ `${style.block}` }>
          <Button onClick={() => setCname('crypto')} type="link">crypto</Button>
        </div>
        <Title title='ocr' />
          <a href='/tools/ocr' target="_blank">
            <Tag color="green">ocr: tesseract.js</Tag>
          </a>
        <Title title='color' />

      </div>

      <div className={ style.content }>
        {
          CMap[cname]
        }
      </div>
    </div>
  </div>
}

export default Tools