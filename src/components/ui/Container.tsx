import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className=" min-h-screen w-full max-w-7xl mx-auto bg-red-600 overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
