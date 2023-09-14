import { MenuItem, MenuItemProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const CTMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  '&.MuiButtonBase-root:hover': {
    background: `linear-gradient(180deg, rgba(88, 74, 37, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(180deg, #FFF3BF 0%, #E8CC93 45.83%, #BCA578 100%)`,
    'box-shadow': `0px 4px 44px rgba(143, 101, 59, 0.2)`
  },
  '&.MuiButtonBase-root': {
    border: "0 solid",
    boxSizing: "border-box",
    borderStyle: "solid",
    borderRadius: "8px",
    "--tw-border-opacity": "1",
    borderColor: "rgb(230 203 130 / var(--tw-border-opacity))",
    borderWidth: "1px",
    "--tw-bg-opacity": "0.8",
    backgroundColor: "rgb(98 86 55/var(--tw-bg-opacity))"
    ,

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

export default CTMenuItem