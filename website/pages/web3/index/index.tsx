import React from "react"
// import Image from 'next/image'
import Head from 'next/head'
import style from './index.module.scss'
import { Tag } from 'antd'
import styles from '@styles/Home.module.css'
import Header from '@components/Header'
import Title from '@components/Title'
import wensitejson from './website.json'

interface Website {
  title: string
  link: string
  icon: string
}
const colors = [ 'success', 'processing', 'red', 'default', 'purple', 'geekblue', 'cyan', 'lime', 'orange' ]
const Web3: React.FC = () => {
  return <div className={ styles.bg }>
    <Head>
      <title>web3</title>
    </Head>
    <Header />
    <div className="flex justify-center">
      <div className="w-70">
        <Title title='website' />
        <div className={ style.block }>
          {
            wensitejson.map((item: Website, index: number) => (
              <a key={ index } href={ item.link } target="_blank">
                <Tag color={ colors[index % 9] }>{ item.title }</Tag>
              </a>
            ))
          }
        </div>
      </div>
    </div>
   
  </div>
}

export default Web3