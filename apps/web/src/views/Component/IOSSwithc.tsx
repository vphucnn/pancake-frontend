import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 0.5,
      'margin-top': '1px',
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          background: `linear-gradient(180deg, #191A1D 0%, #373C42 100%)`,
          backgroundImage: `conic-gradient(from 180deg at 48.5% 50%, #3F1F0F -18.37deg, #E3A455 26.25deg, #F6DBA6 88.12deg, #FFEBC4 270.95deg, #F0BE79 281.4deg, #8F653B 287.98deg, #673D22 295.79deg, #BA7F3B 306.01deg, #EEBC70 328.06deg, #B3874F 333.25deg, #3F1F0F 341.63deg, #E3A455 386.25deg)`,
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
        '& .MuiSwitch-thumb': {
          background: `linear-gradient(180deg, #FFF3BF 0%, #E8CC93 45.83%, #BCA578 100%), linear-gradient(180deg, #16181C 0%, #1E1E1F 100%)`,
          border: `1px solid`,
          borderColor: `black`,
          'box-shadow': `0px 0px 4px 0px rgba(0, 0, 0, 0.35)`,
          width: 25,
          height: 25,
        },
      },
  
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        background: 'red',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        background: 'red',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      background: `linear-gradient(180deg, #484E56 17.71%, #3B4048 90.44%)`,
      border: `2px solid`,
      width: 22,
      height: 22,
      'border-image-source': 'linear-gradient(180deg, #16181C 0%, #1E1E1F 100%)',
      'box-shadow': '0px 0px 4px 0px rgba(0, 0, 0, 0.35)',
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      background: `linear-gradient(180deg, #191A1D 0%, #373C42 100%),
  linear-gradient(180deg, #282B30 0%, #1E2124 100%)`,
      border: `2px solid`,
  
      'border-image-source': `linear-gradient(180deg, #191A1D 0%, #373C42 100%)`,
  
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }))

  export default IOSSwitch