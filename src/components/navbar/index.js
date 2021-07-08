import React, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/logo-bookmark.svg' ;
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [click,setClick] = useState(false);

  const toggle = () => {
    setClick(!click)
  }


  return (
    <Wrapper>
      <div className="logo">
        <Logo title="Bookmark"/>
      </div>
      <div className="content" onClick={toggle}>
        <i className="icon">{click ? <FaTimes/> : <FaBars/>}</i>
        <div className={click ? 'nav-items active' : 'nav-items'}>
        <ul >
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }

  li {
    margin: 5px;
    font-size: 1rem;
    padding: 7px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  li:hover {
    color: var(--primary-red);
    cursor: pointer;
  }

  .logo {
    cursor: pointer;
  }

  .icon {
    display: none;
  }

  @media (max-width:769px) {
    .content {
      position: relative;
    }
    .icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(200%,20%);
      font-size: 1.2rem;
    }

    .nav-items {
      position: fixed;
      left: -100%;
      top: 5rem;
      width: 100%;
      transition: 0.3s;
      background-color: rgba(83, 104, 223, 0.9);
      
    }

    .nav-items ul {
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      
    }

    .nav-items ul li {
      padding: 1.5rem 0;
      border-bottom: 1px solid #fff;
      color: #fff;
    }

    .nav-items.active {
      left: 0;
    }

    .logo {
      transform: translate(-50px, 17px);
    }
  }

`