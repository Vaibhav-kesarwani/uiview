import React, { useEffect, useState } from "react";
import styled from "styled-components";

const bubblePath = `
  M 12 2
  C 17.5228 2 22 6.47715 22 12
  C 22 17.5228 17.5228 22 12 22
  C 6.47715 22 2 17.5228 2 12
  C 2 6.47715 6.47715 2 12 2
  Z
`;

const CreateButton: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <StyledWrapper>
      <button className="button" type="button">
        <span className="fold" />
        <div
          className="points_wrapper"
          style={{ visibility: loaded ? "visible" : "hidden" }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <svg
              key={i}
              className="point"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d={bubblePath} />
            </svg>
          ))}
        </div>
        <span className="inner">
          <svg
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="icon"
          >
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
          </svg>
          Create
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --h-button: 48px;
    --w-button: 102px;
    --round: 0.55rem;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.25s ease;
    background: linear-gradient(90deg, #b88746 10%, #fdf5a6 100%);
    border-radius: var(--round);
    border: none;
    outline: none;
    padding: 9px 12px;
  }

  .button::before,
  .button::after {
    content: "";
    position: absolute;
    inset: var(--space);
    transition: all 0.5s ease-in-out;
    border-radius: calc(var(--round) - var(--space));
    z-index: 0;
  }

  .button::before {
    --space: 1px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.19) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .button::after {
    --space: 2px;
    background: linear-gradient(69deg, #b88746 60%, #fdf5a6 150%);
  }

  .button:active {
    transform: scale(0.95);
  }

  .points_wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  .points_wrapper .point {
    bottom: -5px;
    position: absolute;
    animation: floating-points infinite ease-in-out;
    pointer-events: none;
    width: 8px;
    height: 8px;
    fill: #e5e4e2;
    opacity: 0.9;
  }

  @keyframes floating-points {
    0% {
      transform: translateY(0);
    }
    85% {
      opacity: 0;
    }
    100% {
      transform: translateY(-55px);
      opacity: 0;
    }
  }
  .points_wrapper .point:nth-child(1) {
    left: 10%;
    opacity: 1;
    animation-duration: 2.35s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(2) {
    left: 30%;
    opacity: 0.7;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
  }
  .points_wrapper .point:nth-child(3) {
    left: 25%;
    opacity: 0.8;
    animation-duration: 2.2s;
    animation-delay: 0.1s;
  }
  .points_wrapper .point:nth-child(4) {
    left: 44%;
    opacity: 0.6;
    animation-duration: 2.05s;
  }
  .points_wrapper .point:nth-child(5) {
    left: 50%;
    opacity: 1;
    animation-duration: 1.9s;
  }
  .points_wrapper .point:nth-child(6) {
    left: 75%;
    opacity: 0.5;
    animation-duration: 1.5s;
    animation-delay: 1.5s;
  }
  .points_wrapper .point:nth-child(7) {
    left: 88%;
    opacity: 0.9;
    animation-duration: 2.2s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(8) {
    left: 58%;
    opacity: 0.8;
    animation-duration: 2.25s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(9) {
    left: 98%;
    opacity: 0.6;
    animation-duration: 2.6s;
    animation-delay: 0.1s;
  }
  .points_wrapper .point:nth-child(10) {
    left: 65%;
    opacity: 1;
    animation-duration: 2.5s;
    animation-delay: 0.2s;
  }

  .points_wrapper .point:nth-child(11) {
    left: 75%;
    opacity: 1;
    animation-duration: 2.5s;
    animation-delay: 0.3s;
  }

  .points_wrapper .point:nth-child(12) {
    left: 85%;
    opacity: 0.7;
    animation-duration: 2.5s;
    animation-delay: 0.4s;
  }

  .points_wrapper .point:nth-child(13) {
    left: 90%;
    opacity: 0.8;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
  }

  .points_wrapper .point:nth-child(14) {
    left: 35%;
    opacity: 0.6;
    animation-duration: 2.5s;
    animation-delay: 0.6s;
  }

  .points_wrapper .point:nth-child(15) {
    left: 20%;
    opacity: 1;
    animation-duration: 2.5s;
    animation-delay: 0.7s;
  }

  .inner {
    z-index: 10;
    gap: 5px;
    position: relative;
    width: 100%;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    transition: color 0.1s ease-in-out;
  }

  .inner svg.icon {
    width: 18px;
    height: 18px;
    transition: fill 0.1s ease-in-out;
  }

  .button:focus svg.icon {
    fill: white;
  }

  .button:hover svg.icon {
    fill: transparent;
    animation: dasharray 1s linear forwards, filled 0.1s linear forwards 0.95s;
  }

  @keyframes dasharray {
    from {
      stroke-dasharray: 0 0 0 0;
    }
    to {
      stroke-dasharray: 68 68 0 0;
    }
  }

  @keyframes filled {
    to {
      fill: white;
    }
  }
`;

export default CreateButton;
