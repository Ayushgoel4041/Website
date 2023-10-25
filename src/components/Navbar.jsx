import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import Login from './Login'
import SignUp from './SignUp'
import { About, Blog, Contact, Men, Women, Kids, Cart } from '../Home/import';
import '../styles/navbar.scss'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,

  useDisclosure
} from '@chakra-ui/react'
import { TbListTree } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (

    <div className='navbar'>
      <div className="tree">

        <Button variant="ghost"
          color="current"
          pos={'fixed'}
          top={'4'}
          left={'6'}
          size={'lg'}
          onClick={onOpen}>
          <TbListTree size={'25'} />
        </Button>
        <div className="cart">
          <Link to='/Cart'>
            <Button variant="ghost"
              color="current"
              pos={'fixed'}
              top={'4'}
              right={'16'}
              onClick={onOpen}>
              <FaShoppingCart size={'30'} />
              <h1>{totalQuantity}</h1>
            </Button>
          </Link>
        </div>

      </div>


      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>More Options...</DrawerHeader>
          <DrawerBody>
            <ul className="linking">


              <li><Link to='/' className='active'>Home</Link></li>
              <li><Link to='/Blog'>Blog</Link></li>
              <li><Link to='/About' >About</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
              <li><Link to='/Cart'>Cart</Link></li>

            </ul>
            <div className="button">

              <Link to='Login'> <Button padding={'30px'} margin='10px' >Log In</Button></Link>
              <Link to='SignUp'>  <Button padding={'30px'} margin='10px' >Sign Up</Button></Link>

            </div>
          </DrawerBody>
          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>


      <nav>
        <Link to='Men'>Men</Link>
        <Link to='WoMen'>Women</Link>
        <Link to='Kids'>Kids</Link>
      {/* <div className="user">
        <Link><Button color={'black'}>Welcome, User</Button></Link>
      </div> */}

      </nav>

    </div >
  )
}

export default Navbar
