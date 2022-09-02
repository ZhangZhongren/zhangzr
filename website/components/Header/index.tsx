import Link from 'next/link'
import style from './index.module.scss'
const Header = () => {
  return (
    <header className='flex justify-between'>
      <Link href="/"><div className={ style.logo }>zhangzr</div></Link>
      <div className='columns-3 mr-10'>
        <Link href="/web3/index" passHref target="_blank" ><p className={ style.menu }>web3</p></Link>
        <Link href="https://zhangzhongren.github.io/" passHref target="_blank" ><p className={ style.menu }>blog</p></Link>
        <Link href="/tools/index" ><p className={ style.menu }>tools</p></Link>
      </div>
    </header>
  )
}

export default Header