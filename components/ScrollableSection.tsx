import React, { ReactChildren } from "react";

type ScrollSectionProps = {
  children: JSX.Element;
  error?: boolean;
};

const ScrollableSection = ({ children, error }: ScrollSectionProps) => {
  const fieldRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (error && fieldRef.current) {
      fieldRef.current.scrollIntoView();
    }
  }, [error]);
  return <div ref={fieldRef}>{children}</div>;
};

export default ScrollableSection;
