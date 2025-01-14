// import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { sideTabs } from './homeConfig';
import styles from '../styles/home/sidebar.module.css'

function Sidebar() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={true} scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton className='d-md-none'>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles['logo-container']}>
            <img src='https://rkstudio.s3.ap-south-1.amazonaws.com/static/logo.png' alt='logo'/>
          </div>
          {
            Array.isArray(sideTabs) && sideTabs.map((tab, index)=>{
              return <div key={`home_sidebar_${index}`}>{tab.label}</div>
            })
          }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Sidebar;