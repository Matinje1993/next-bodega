import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn(
    "max-w-screen-2xl mx-auto min-w-0 box-border",
    className
  )}>{children}</div>;
};

export default Container;
