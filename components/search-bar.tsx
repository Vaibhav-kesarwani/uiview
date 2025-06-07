import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledWrapper>
      <div>
        <div id="poda">
          <div className="glow" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="white" />
          <div className="border" />
          <div id="main">
            <input
              placeholder="Search..."
              type="text"
              name="text"
              className="input"
            />
            <div id="input-mask" />
            <div id="pink-mask" />
            <div className="filterBorder" />
            <div id="filter-icon">
              <svg
                preserveAspectRatio="none"
                height={20}
                width={20}
                viewBox="4.8 4.56 14.832 15.408"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                  stroke="url(#goldFilterStroke)"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="goldFilterStroke"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="10%" stopColor="#B88746" />
                    <stop offset="100%" stopColor="#FDF5A6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div id="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                viewBox="0 0 24 24"
                strokeWidth={2}
                height={18}
                fill="none"
              >
                <circle
                  stroke="url(#goldGradientCircle)"
                  r={8}
                  cy={11}
                  cx={11}
                />
                <line
                  stroke="url(#goldGradientLine)"
                  y2="16.65"
                  y1={22}
                  x2="16.65"
                  x1={22}
                />
                <defs>
                  <linearGradient
                    id="goldGradientCircle"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="10%" stopColor="#B88746" />
                    <stop offset="100%" stopColor="#FDF5A6" />
                  </linearGradient>
                  <linearGradient
                    id="goldGradientLine"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="10%" stopColor="#B88746" />
                    <stop offset="100%" stopColor="#FDF5A6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .white,
  .border,
  .darkBorderBg,
  .glow {
    max-height: 50px;
    max-width: 240px;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    border-radius: 10px;
    filter: blur(2px);
  }

  .input {
    background-color: #010201;
    border: none;
    width: 228px;
    height: 42px;
    border-radius: 8px;
    color: white;
    padding-inline: 45px;
    font-size: 14px;
  }

  #poda {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input::placeholder {
    color: #c0b9c0;
  }

  .input:focus {
    outline: none;
  }

  #main:focus-within > #input-mask {
    display: none;
  }

  #input-mask {
    pointer-events: none;
    width: 60px;
    height: 18px;
    position: absolute;
    background: linear-gradient(90deg, transparent, black);
    top: 12px;
    left: 55px;
  }

  #pink-mask {
    pointer-events: none;
    width: 20px;
    height: 18px;
    position: absolute;
    background: #cf30aa;
    top: 8px;
    left: 5px;
    filter: blur(15px);
    opacity: 0.7;
    transition: all 2s;
  }

  #main:hover > #pink-mask {
    opacity: 0;
  }

  .white {
    max-height: 45px;
    max-width: 235px;
  }

  .white::before,
  .border::before,
  .darkBorderBg::before,
  .glow::before {
    content: "";
    z-index: -2;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%) rotate(83deg);
    background-repeat: no-repeat;
    background-position: 0 0;
    transition: all 2s;
  }

  .white::before {
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #a099d8,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #dfa2da,
      rgba(0, 0, 0, 0) 58%
    );
  }

  .border {
    max-height: 43px;
    max-width: 232px;
    border-radius: 9px;
    filter: blur(0.4px);
  }

  .border::before {
    background-image: conic-gradient(
      #1c191c,
      #402fb5 5%,
      #1c191c 14%,
      #1c191c 50%,
      #cf30aa 60%,
      #1c191c 64%
    );
  }

  .darkBorderBg {
    max-height: 47px;
    max-width: 238px;
  }

  .darkBorderBg::before {
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #18116a,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      #6e1b60,
      rgba(0, 0, 0, 0) 60%
    );
  }

  .glow {
    max-height: 90px;
    max-width: 270px;
    filter: blur(15px);
    opacity: 0.3;
  }

  .glow::before {
    background-image: conic-gradient(
      #000,
      #402fb5 5%,
      #000 38%,
      #000 50%,
      #cf30aa 60%,
      #000 87%
    );
  }

  #poda:hover > .darkBorderBg::before,
  #poda:hover > .glow::before,
  #poda:hover > .white::before,
  #poda:hover > .border::before {
    transform: translate(-50%, -50%) rotate(250deg);
  }

  #poda:focus-within > .darkBorderBg::before,
  #poda:focus-within > .glow::before,
  #poda:focus-within > .white::before,
  #poda:focus-within > .border::before {
    transform: translate(-50%, -50%) rotate(430deg);
    transition: all 4s;
  }

  #filter-icon {
    position: absolute;
    top: 6px;
    right: 6px;
    max-height: 30px;
    max-width: 28px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: linear-gradient(180deg, #161329, black, #1d1b4b);
  }

  .filterBorder {
    height: 32px;
    width: 30px;
    position: absolute;
    overflow: hidden;
    top: 5px;
    right: 5px;
    border-radius: 8px;
  }

  .filterBorder::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 400px;
    height: 400px;
    background-repeat: no-repeat;
    filter: brightness(1.35);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #3d3a4f,
      rgba(0, 0, 0, 0) 50%,
      #3d3a4f,
      rgba(0, 0, 0, 0) 100%
    );
    animation: rotate 4s linear infinite;
  }

  #main {
    position: relative;
  }

  #search-icon {
    position: absolute;
    left: 15px;
    top: 12px;
  }

  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(450deg);
    }
  }
`;

export default SearchBar;
