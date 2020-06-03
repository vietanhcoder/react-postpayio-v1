import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// Container fluid
export const ContainerFluid = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-right: auto;
  margin-left: auto;
`;

// Container
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10rem;
`;

// Hero banner
export const BannerWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  position: relative;
  width: 100%;
  height: 55rem;
  ${(props) =>
    props.big &&
    css`
      height: 600px;
    `}
  ${(props) =>
    props.overlay &&
    css`
      position: relative;
      &:before {
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
      }
    `}
`;

export const BannerTitle = styled.div`
  font-family: 'GreycliffCF-Bold', 'Helvetica Neue', helvetica, Arial, sans-serif;
  font-size: 5.5rem;
  text-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);
  color: white;
  margin-bottom: 5px;
  ${(props) =>
    props.sectionCTA &&
    css`
      font-size: 4rem;
    `}
`;

export const BannerSubTitle = styled.div`
  margin-bottom: 25px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  font-size: 3rem;
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translate(0, -50%);
  ${(props) =>
    props.sectionCTA &&
    css`
      max-width: 800px;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #252524;
      ${BannerTitle} {
        color: #252524;
      }
      ${BannerSubTitle} {
        margin-bottom: 25px;
        line-height: 20px;
        color: #252524;
        font-size: 2rem;
      }
    `}
`;

export const Headline = styled.div`
  font-size: 2.7rem;
  color: #252524;
  margin-bottom: 5px;
`;

// export const Button = styled.a`

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-family: GreycliffCF-Bold;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  background-color: transparent;
  color: rgb(87, 87, 86);
  padding: 10px 15px;
  border-color: rgb(87, 87, 86);

  &:hover {
    color: rgb(37, 37, 36);
    border-color: rgb(37, 37, 36);
  }
  ${(props) =>
    props.subscribeBtn &&
    css`
      padding: 0px 33px;
      height: 46px;
      margin-top: 6px;
    `}

  ${(props) =>
    props.headerBtn &&
    css`
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
      border-color: rgb(138, 187, 213);
      width: 120px;
      background-color: rgb(138, 187, 213);
      color: white;
      &:hover {
        background-color: rgb(100, 137, 157);
        border-color: rgb(100, 137, 157);
      }
    `}
`;

// =================================
// navbar
// =================================
export const LogoLink = styled(NavLink)`
  font-size: 4.5rem;
  font-family: 'GreycliffCF-Bold';
`;

export const NavLinkLv2 = styled(NavLink)`
  padding: 20px;
  border-bottom: 1px solid gray;
  &:last-child {
    border: none;
  }
`;

export const DropdownLinkLv2 = styled.div`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  display: none;
  flex-direction: column;
  z-index: 1;
  background: white;
  top: 0;
  width: max-content;
  font-family: 'GreycliffCF-Light';
  margin-top: 20px;
`;
export const NavLinkLv1 = styled(NavLink)`
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

export const MenuDropdown = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  top: 0;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  ${(props) =>
    props.dropDown &&
    css`
      a {
        text-shadow: none;
      }
      &:after {
        position: absolute;
        top: 50%;
      }
      svg {
        margin-left: 10px;
        padding-top: 5px;
      }
      &:hover {
        svg {
          transform: scale(-1);
          padding-top: 0px;
        }
        ${DropdownLinkLv2} {
          position: absolute;
          opacity: 1;
          visibility: visible;
          display: flex;
          flex-direction: column;
          z-index: 1;
          background: white;
          top: 54px;
          width: max-content;
          font-family: 'GreycliffCF-Light';
        }
      }
    `}
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShowContentMobile = styled.div`
  display: none;
  ${(props) =>
    props.isSmallScreen &&
    css`
      display: block;
      color: #8abbd5;
      &:hover {
        cursor: pointer;
      }
    `}
`;
export const NavBarLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.isSmallScreen &&
    css`
      display: none;
    `}
`;
export const NavBarComponent = styled.div`
    /* padding: 10px 0; */
    align-items: center;
    position:fixed;
    z-index:100;
    width:100%;
    color: white;
    font-family: 'GreycliffCF-Bold';
    a {
      color: white;
    }
    ${NavLinkLv1},${MenuDropdown} {
      padding: 30px 24px;
      font-weight: bold;
      font-family: 'GreycliffCF-Bold';
    }

    ${(props) =>
      props.scrollPos &&
      css`
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        background: white;
        color: #575756;
        a {
          color: #8abbd5;
        }
        ${NavLinkLv1}, ${MenuDropdown} {
          color: #575756;
          a {
            color: #575756;
          }
        }
        @keyframes fadedown {
          from {
            top: -50px;
          }
          to {
            top: 0;
          }
        }
        animation: fadedown 1s;
      `}

    &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.3);
      background: white;
      color: #575756;
      a {
        color: #8abbd5;
      }
      ${NavLinkLv1}, ${MenuDropdown}{
        color: #575756;
        a {
          color:  #575756;
        }
      }
    }
  `;
