import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import useHover from '../../../hooks/useHover';
import SearchBar from './Sections/SearchBar.js'

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  const [ref, hover] = useHover();

  return (
    <nav className="menu" style={{ zIndex: 5, width: '100%' }}>
      <div className="menu__logo" ref={ref}>
        <a href="/">{hover ? <img style={{width:"3.5em", height:"3.5em"}} src="images/lego-logo-yellow.png"/> : <img style={{width:"3.5em", height:"3.5em"}} src="images/lego-logo-red.png" />}</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />  {/**mode="horizontal" 추가해주기 */}
        </div>
        {/*추가한부분 - Search-bar */}
        <div className="menu_rigth">
          
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-left" />
        </Button>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
        
          <Icon type="align-left" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="left"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar