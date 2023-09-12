import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const CTButtom = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.MuiButtonBase-root': {
    'box-sizing': ' border-box',
    background: `linear-gradient(180deg, rgba(88, 74, 37, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(180deg, #FFF3BF 0%, #E8CC93 45.83%, #BCA578 100%)`,
    'box-shadow': `0px 4px 44px rgba(143, 101, 59, 0.2)`,
    'border-radius': `8px`,
    border: '0.5px solid',
    'border-image-source':
      'conic-gradient(from 180deg at 48.5% 50%, #3F1F0F -18.37deg, #E3A455 26.25deg, #F6DBA6 88.12deg, #FFEBC4 270.95deg, #F0BE79 281.4deg, #8F653B 287.98deg, #673D22 295.79deg, #BA7F3B 306.01deg, #EEBC70 328.06deg, #B3874F 333.25deg, #3F1F0F 341.63deg, #E3A455 386.25deg)',
    '&.MuiInputBase-root fieldset': {
      borderColor: `#e0e0e0ee`,
      color: `#D1D1D1`,
    },
    '& .MuiFormHelperText-root': {
      color: `#D1D1D1 !important`,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: `#D1D1D1 !important`,
    },
  },
}))

export default CTButtom
