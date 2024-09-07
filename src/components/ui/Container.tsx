import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full min-h-screen mx-auto overflow-hidden  max-w-[2400px]">
      {children}
    </div>
  );
};

export default Container;
