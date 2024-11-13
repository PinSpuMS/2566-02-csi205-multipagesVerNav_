import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [curBtn, setCurBtn] = useState('')

  const homeRef = useRef()
  const productsRef = useRef()
  const cartsRef = useRef()
  const aboutRef = useRef()

  useEffect(() => {
    homeRef.current.click()
  }, [])

  const btnStyle = { width: '200px', margin: '10px' }
  return (
    <div style={{ paddingTop: '15px' }}>
      <Link to={'/'}>
        <button
          className={
            'btn btn-outline-primary' + (curBtn === 'home' ? ' active' : '')
          }
          style={btnStyle}
          onClick={() => {
            setCurBtn('home')
          }}
          ref={homeRef}
        >
          Home
        </button>
      </Link>
      <Link to={'/products'}>
        <button
          className={
            'btn btn-outline-primary' + (curBtn === 'product' ? ' active' : '')
          }
          style={btnStyle}
          onClick={() => {
            setCurBtn('product')
          }}
          ref={productsRef}
        >
          Product
        </button>
      </Link>
      <Link to={'/carts'}>
        <button
          className={
            'btn btn-outline-primary' + (curBtn === 'carts' ? ' active' : '')
          }
          style={btnStyle}
          onClick={() => {
            setCurBtn('carts')
          }}
          ref={cartsRef}
        >
          Carts
        </button>
      </Link>
      <Link to={'/about'}>
        <button
          className={
            'btn btn-outline-primary' + (curBtn === 'about' ? ' active' : '')
          }
          style={btnStyle}
          onClick={() => {
            setCurBtn('about')
          }}
          ref={aboutRef}
        >
          About
        </button>
      </Link>
    </div>
  )
}
