import type { ReactNode } from 'react';

interface Props {
  containerClass?: string;
  wrapperClass?: string;
  children: ReactNode;
  id?: string;
}

const Container = ({ wrapperClass, containerClass, children, id }: Props) => {
  return (
    <div id={id} className={`w-full  !py-10 lg:py-0 ${wrapperClass ?? ''}`}>
      <div
        className={`container mx-auto h-full px-4 md:px-10 xl:px-28 ${
          containerClass ?? ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
