import React, { PropsWithChildren } from "react";

interface PropTypes {
  className: string;
  id: string;
  color: string;
  handleClick: () => void;
}

const Item = ({
  className,
  id,
  color,
  children,
  handleClick,
}: PropsWithChildren<PropTypes>) => {
  return (
    <div
      data-testid={id}
      className={`item ${className}`}
      style={{
        background: color,
      }}
      onClick={() => handleClick()}
    >
      {children}
    </div>
  );
};

export default Item;
