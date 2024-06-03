import React from 'react';
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width: 600px;
`;

const LoadingSpinner = () => (
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
    <BarLoader css={override} color={"#36D7B7"} loading={true} />
  </div>
);

export default LoadingSpinner;