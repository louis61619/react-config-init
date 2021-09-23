import React, { memo } from 'react'
import { Button } from 'antd'

interface Props {}

export default memo(function Home({}: Props) {
  return (
    <div>
      <Button type="primary">Button</Button>
    </div>
  )
})
