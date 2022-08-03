import styles from '@styles/Home.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Tag, Button } from 'antd'
import Header from '@components/Header'
import Title from '@components/Title'
import style from './index.module.scss'
import { useState, useEffect } from 'react'
import CMap from '../map'
const Tools = () => {
  const router = useRouter()
  const [cname, setCname] = useState('')
  useEffect(() => {
    setCname(router.query.cname as string || 'crypto')
  }, [router.query.cname])
  const changeTmp = (str: string) => {
    setCname(str)
    router.replace('/tools/index', { query: { cname: str } })
  }

  return <div className={ styles.bg}>
    <Head>
      <title>tools</title>
    </Head>
    <Header />
    <div className="flex justify-between">
      <div className={ style.leftmenu }>
        <div className={ `${style.block}` }>
          <Button onClick={() => changeTmp('crypto') } type="link">crypto</Button>
          <Button onClick={() => changeTmp('color')} type="link">color transition</Button>
          <Button onClick={() => changeTmp('json')} type="link">json format</Button>
        </div>
        <Title title='ocr' />
          <a href='/tools/ocr' target="_blank">
            <Tag color="green">ocr: tesseract.js</Tag>
          </a>

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