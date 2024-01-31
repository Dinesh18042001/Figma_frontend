import React from "react";

const sizeClasses = {
  txtPoppinsRegular14Blue500: "font-normal font-poppins",
  txtPoppinsSemiBold30Cyan900: "font-poppins font-semibold",
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtPoppinsSemiBold20Cyan900: "font-poppins font-semibold",
  txtRobotoRomanMedium25Black900: "font-medium font-roboto",
  txtPoppinsSemiBold50: "font-poppins font-semibold",
  txtPoppinsRegular18Blue500: "font-normal font-poppins",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular18Black900: "font-normal font-poppins",
  txtPoppinsSemiBold38: "font-poppins font-semibold",
  txtPoppinsMedium20Cyan900: "font-medium font-poppins",
  txtPoppinsMedium18Teal500: "font-medium font-poppins",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtRobotoRomanMedium25: "font-medium font-roboto",
  txtProcionoRegular50: "font-normal font-prociono",
  txtPoppinsRegular18Gray600: "font-normal font-poppins",
  txtPoppinsMedium16Cyan900: "font-medium font-poppins",
  txtPoppinsMedium18Cyan900: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsSemiBold60: "font-poppins font-semibold",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular14Cyan900: "font-normal font-poppins",
  txtPoppinsMedium18Gray600: "font-medium font-poppins",
  txtPoppinsMedium25: "font-medium font-poppins",
  txtRobotoRomanRegular18: "font-normal font-roboto",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium18Pink400: "font-medium font-poppins",
  txtPoppinsRegular16Gray600: "font-normal font-poppins",
  txtPoppinsRegular16Black9007f: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular18Gray700: "font-normal font-poppins",
  txtPoppinsMedium18Purple300: "font-medium font-poppins",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
