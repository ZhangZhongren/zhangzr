import style from './index.module.scss'

const Loading = (props: any) => {
  const { loading } = props
  return loading ? <div className={ style.loading }>

  </div> : <></>
}

export default Loading