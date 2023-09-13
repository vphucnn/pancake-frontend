import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const CTDecrementButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.MuiButtonBase-root': {
    'box-sizing': ' border-box',
    background: `#9E9E9E`,
    'border-radius': `15px 0px 0px 15px`,
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

export default CTDecrementButton
