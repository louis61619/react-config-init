import React, { memo, useState } from 'react'
import { Avatar } from 'antd'
import { BookOutlined, BellOutlined, UserOutlined } from '@ant-design/icons'
import logo from '@/assets/image/logo.svg'

import { useRouter } from '@/hook'

import { HeaderWrapper } from './style'

interface Props {}

export default memo(function Layout({}: Props) {
  const router = useRouter()
  const [current, setCurrent] = useState('')

  const handleClick = (e: any) => {
    // console.log('click ', e)
    router.push(e.key)
    setCurrent(e.key)
  }

  return (
    <div className="page-space">
      <HeaderWrapper>
        <img src={logo} alt="logo" />
        <div className="bar">
          <div className="tool">
            <BookOutlined />
            <BellOutlined />
          </div>

          <Avatar size={50} icon={<UserOutlined />} />
        </div>
      </HeaderWrapper>
    </div>
  )
})
