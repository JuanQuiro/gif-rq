/* eslint-disable */
import React from "react";

type IconProps = {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  className?: any;
};

export const ChevronDown: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return <svg {...props} />;
};

export const Lock: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return <svg {...props} />;
};

export const Activity: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return <svg {...props} />;
};

export const Flash: React.FC<IconProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return <svg {...props} />;
};

export const Server: React.FC<IconProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return <svg {...props} />;
};

export const TagUser: React.FC<IconProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return <svg {...props} />;
};

export const Scale: React.FC<IconProps> = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return <svg {...props} />;
};
