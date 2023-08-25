import React from "react";
import { TagProps } from "./types";
import { StyledTag } from "./StyledTag";

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, className, ...props }) => (
  <StyledTag className={className} {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon, {
        mr: "0.5rem",
      })}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon, {
        ml: "0.5rem",
      })}
  </StyledTag>
);

Tag.defaultProps = {
  variant: "primary",
  outline: false,
};

export default Tag;
