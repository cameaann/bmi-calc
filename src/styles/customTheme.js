import { extendTheme } from "@mui/joy/styles";
import { radioClasses } from "@mui/joy";

const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        success: {
          //   solidBg: '#2DA44E',
          //   solidHoverBg: '#2C974B',
          //   solidActiveBg: '#298E46',
        },
        neutral: {
          //   outlinedBg: '#F6F8FA',
          //   outlinedHoverBg: '#F3F4F6',
          //   outlinedActiveBg: 'rgba(238, 239, 242, 1)',
          //   outlinedBorder: 'rgba(27, 31, 36, 0.15)',
        },
        // focusVisible: 'rgba(3, 102, 214, 0.3)',
      },
    },
  },
  //   focus: {
  //     default: {
  //       outlineWidth: '3px',
  //     },
  //   },
  //   fontFamily: {
  //     body: 'Inter, sans-serif',
  //   },
  components: {
    JoyButton: {
      styleOverrides: {},
    },
    JoyRadio: {
      styleOverrides: {
        root: {
           [`& .${radioClasses.checked}`]: {
			color: "var(--primary-color) !important",
        },
        },
      },
    },
  },
});

export default customTheme;
