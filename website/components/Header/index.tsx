import Link from 'next/link'
import style from './index.module.scss'
export default () => {
  return (
    <header className='flex justify-between'>
      <Link href="/"><div className={ style.logo }>zhangzr</div></Link>
      <div className='columns-3 mr-10'>
        <Link href="/a" ><p className={ style.menu }>blog</p></Link>
        <Link href="/tools/index" ><p className={ style.menu }>tools</p></Link>
        <Link href="/g" ><p className={ style.menu }>myself</p></Link>
      </div>
    </header>
  )
}