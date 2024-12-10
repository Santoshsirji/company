"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; 
}
const Container = ({
  children,
  className
}: ContainerProps) => {
  return (
    <div
      className={`
        px-1
        sm:px-2
        md:px-4
        lg:px-10
        xl:px-14
        2xl:px-16
        max-w-[2540px]
        ${className}
        `}
    >
      {children}
    </div>
  );
}

export default Container;