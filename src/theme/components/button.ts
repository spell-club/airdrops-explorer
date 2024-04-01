import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        outline: () => ({
          borderRadius: "16px",
        }),
        brand: (props: StyleFunctionProps) => ({
          bg: mode("brand.500", "brand.500")(props),
          color: "white",
          _focus: {
            bg: mode("brand.500", "brand.500")(props),
          },
          _active: {
            bg: mode("brand.500", "brand.500")(props),
          },
          _hover: {
            bg: mode("brand.600", "brand.500")(props),
          },
        }),
        darkBrand: (props: StyleFunctionProps) => ({
          bg: mode("brand.900", "brand.500")(props),
          color: "white",
          _focus: {
            bg: mode("brand.900", "brand.500")(props),
          },
          _active: {
            bg: mode("brand.900", "brand.500")(props),
          },
          _hover: {
            bg: mode("brand.800", "brand.500")(props),
          },
        }),
        lightBrand: (props: StyleFunctionProps) => ({
          bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.500", "whiteAlpha.200")(props),
          },
        }),
        light: (props: StyleFunctionProps) => ({
          bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.500", "whiteAlpha.200")(props),
          },
        }),
        action: (props: StyleFunctionProps) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("secondaryGray.300", "brand.500")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "brand.500")(props),
          },
          _active: { bg: mode("secondaryGray.300", "brand.500")(props) },
          _hover: {
            bg: mode("secondaryGray.200", "brand.500")(props),
          },
        }),
        setup: (props: StyleFunctionProps) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("transparent", "brand.500")(props),
          border: mode("1px solid", "0px solid")(props),
          borderColor: mode("secondaryGray.500", "transparent")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("transparent", "brand.500")(props),
          },
          _active: { bg: mode("transparent", "brand.500")(props) },
          _hover: {
            bg: mode("secondaryGray.100", "brand.500")(props),
          },
        }),
      },
    },
  },
};
