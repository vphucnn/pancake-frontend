import Radio, { RadioProps } from '@mui/material/Radio'
import { styled } from '@mui/material/styles'

const CTRadio = styled(Radio)<RadioProps>(({ theme }) => ({
  '&.MuiButtonBase-root': {
    '&.Mui-checked': {
      color: '#E8CC93',
    },
  },
}))

export default CTRadio
