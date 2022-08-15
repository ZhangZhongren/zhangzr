import { Tag, Tooltip } from 'antd';

interface Props {
  url: string
  text: string
  desc: string
}

const Links = (props: Props) => {
  const { url, text, desc } = props
  return <a href={url} target="_blank" rel="noreferrer">
    <Tooltip placement="topLeft" title={desc}>
      <Tag style={{ marginBottom: '8px' }} color="green">{ text }</Tag>
    </Tooltip>
</a>
}

export default Links