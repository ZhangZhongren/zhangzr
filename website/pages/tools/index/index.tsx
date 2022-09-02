import styles from '@styles/Home.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Tag, Button } from 'antd'
import Header from '@components/Header'
import Title from '@components/Title'
import ALink from '@components/ALink'
import style from './index.module.scss'
import { useState, useEffect } from 'react'
import CMap from '../../../components/tools/map'
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
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src='https://unpkg.com/roughjs@latest/bundled/rough.js'></script>
    </Head>
    <Header />
    <div className="flex justify-between">
      <div className={ style.leftmenu }>
        <div className={ `${style.block}` }>
          <Button onClick={() => changeTmp('crypto') } type="link">crypto</Button>
          <Button onClick={() => changeTmp('color')} type="link">color transition</Button>
          <Button onClick={() => changeTmp('json')} type="link">json format</Button>
          <Button onClick={() => changeTmp('sheet')} type="link">fortune sheet</Button>
          <Button onClick={() => changeTmp('Bytemd')} type="link">Bytemd</Button>
          <Button onClick={() => changeTmp('Rough')} type="link">Rough</Button>
        </div>
        <Title title='ocr' />
          <a href='/tools/ocr' target="_blank">
            <Tag color="green">ocr: tesseract.js</Tag>
          </a>
        <Title title='links' />
          <ALink url="https://github.com/hellodigua/code996" desc="根据git commit 检测你 996程度" text="code996" />
          <ALink url="https://wantwords.net/" desc="根据描述推测词语" text="wantwords" />
          <ALink url="https://revealjs.com/" desc="js ppt 工具" text="revealjs" />
          <ALink url="https://visiky.github.io/resume/?mode=edit" desc="在线简历编辑" text="resume" />
          <ALink url="https://github.com/shipshapecode/shepherd" desc="用户引导" text="shepherd" />
          <ALink url="https://github.com/dicebear/dicebear" desc="自动生成头像" text="dicebear" />
         
          

        <Title title='css' />
          <a href='https://github.com/kevquirk/simple.css' target="_blank" rel="noreferrer">
            <Tag color="green">simple.css</Tag>
          </a>
        <Title title='UI frame' />
          <a href='https://github.com/tusen-ai/naive-ui' target="_blank" rel="noreferrer">
            <Tag color="green">Vue3 naive-ui</Tag>
          </a>
          <a href='https://element-plus.gitee.io/zh-CN/#/zh-CN' target="_blank" rel="noreferrer">
            <Tag color="blue">Element-plus</Tag>
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