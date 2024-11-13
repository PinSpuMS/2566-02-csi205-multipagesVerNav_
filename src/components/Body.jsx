import { Outlet } from 'react-router'
import { Navbar } from './Navbar'

export const Body = () => {
  return (
    <div
      style={{
        margin: 'auto',
        width: '1020px',
        height: '460px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        borderLeft: '1px solid',
      }}
    >
      <Navbar />
      <div
        style={{
          gridColumnStart: '2',
          gridColumnEnd: '5',
          border: '1px solid',
          borderTop: '0px',
          borderBottom: '0px'
        }}
      >
        <Outlet />
      </div>
    </div>
  )
}
