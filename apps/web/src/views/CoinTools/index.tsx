import { useAccount, useBalance } from 'wagmi'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CoinTools() {
  const [name, setName] = React.useState('Cat in the Hat');
  const [checked, setChecked] = React.useState(true);
  const { data, isError, isLoading } = useBalance({
    address: useAccount().address,
  })


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  if (isLoading) return <div>Fetching balance…</div>
  if (isError) return <div>Error fetching balance</div>
  return (
    <Grid
      container
      direction="column"
    >

      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ pt: 5 }}
      >
        <Typography variant="h5"
          component="h2" sx={{
            color: 'teal',
          }}>
          Balance: {data?.formatted} {data?.symbol}
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ pt: 5 }}

      >
        <Grid container sx={{ p: 2 }} maxWidth={"1800px"} width={"1800px"}>
          <Grid xs={12} md={6}>
            <h2>Basic setting</h2>
            <Grid sx={{ mt: 2 }}>
              <InputLabel required shrink htmlFor="name">
                Token name
              </InputLabel>
              <TextField
                fullWidth
                id="name"
                size="small"
                value={name}
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Token name
              </InputLabel>
              <TextField
                fullWidth
                size="small"
                value={name}
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid sx={{ mt: 2 }} columns={16} container spacing={2}>
              <Grid xs={9} md={8} >
                <InputLabel shrink htmlFor="bootstrap-input">
                  Initial supply
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id="standard-read-only-input"
                  defaultValue="Hello World"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={1} md={4} />
              <Grid xs={6} md={4}  >
                <InputLabel shrink htmlFor="bootstrap-input">
                  Decimals (0-18)
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id="standard-read-only-input"
                  defaultValue="Hello World"
                  variant="outlined"
                />
              </Grid>

            </Grid>
          </Grid>
          <Grid xs={12} md={6}>
            <h2>Token configuration</h2>

            <Grid sx={{ mt: 2 }}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <span>Can Burn</span>
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <span>Can Mint</span>
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <span>Can Pause</span>
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <span>Can Blacklist</span>
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <span>Apply Burn Fee (Deflationary token
                )</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 5 }}

      >
        <Button variant="contained">Create</Button>
      </Grid>
    </Grid>
  )
}
