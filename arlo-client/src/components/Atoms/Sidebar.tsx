import React from 'react'
import styled from 'styled-components'
import { Menu } from '@blueprintjs/core'
import H2Title from './H2Title'

const Wrapper = styled.div`
  margin-right: 15px;
  width: 250px;
  padding: 0 15px;

  .bp3-heading {
    padding-left: 12px;
  }
`

export interface ISidebarMenuItem {
  action: () => void
  title: string
  active: boolean
}

interface IProps {
  menuItems: ISidebarMenuItem[]
  title: string
}

const Sidebar = ({ menuItems, title }: IProps) => (
  <Wrapper>
    <H2Title>{title}</H2Title>
    <Menu>
      {menuItems.map((item, i) => (
        <React.Fragment key={item.title}>
          {i > 0 && <Menu.Divider />}
          <Menu.Item
            onClick={item.action}
            active={item.active}
            text={item.title}
          />
        </React.Fragment>
      ))}
    </Menu>
  </Wrapper>
)

export default Sidebar