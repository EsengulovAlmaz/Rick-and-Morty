import React from "react";

type ErrorComponentProps = {
  message: string;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
  <div className="h-[50vh] flex justify-center items-center">
    <div className="1/3 sm:w-1/4 flex flex-col items-center justify-center p-4 border-2 border-red-500 bg-red-100 text-red-700 rounded">
      <p className="text-lg">{message}</p>
    </div>
  </div>
);

export default ErrorComponent;
