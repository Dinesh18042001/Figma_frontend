import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded", circle: "rounded-[50%]" };
const variants = {
  outline: {
    blue_500: "border border-blue-500 border-solid text-blue-500",
    cyan_900: "border border-cyan-900 border-solid text-cyan-900",
  },
  fill: {
    blue_500_b2: "bg-blue-500_b2",
    blue_gray_900: "bg-blue_gray-900 shadow-bs text-white-A700",
    light_green_600: "bg-light_green-600 text-white-A700",
    blue_500: "bg-blue-500 text-white-A700",
    black_900_70: "bg-black-900_70",
    cyan_900: "bg-cyan-900 text-white-A700",
    teal_500: "bg-teal-500 text-white-A700",
    purple_300: "bg-purple-300 text-white-A700",
    pink_400: "bg-pink-400 text-white-A700",
    blue_500_19: "bg-blue-500_19",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2", md: "p-[13px]", lg: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "blue_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_500",
    "cyan_900",
    "blue_500_b2",
    "blue_gray_900",
    "light_green_600",
    "black_900_70",
    "teal_500",
    "purple_300",
    "pink_400",
    "blue_500_19",
    "black_900",
  ]),
};

export { Button };
