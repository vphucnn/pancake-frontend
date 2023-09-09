import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useNetwork, useWaitForTransaction, useWalletClient } from "wagmi";
import {
    hstBytecode,
    hstAbi,
} from "./contract.json"

export default function Deploy() {
    const { chain } = useNetwork()
    const [age, setAge] = useState();

    const [holder, setHolder] = useState("");
    const [hash, setHash] = useState<undefined | `0x${string}`>();
    const [chainId, setChainId] = useState(5);
    const { data: walletClient } = useWalletClient({ chainId });
    const {
        data: deployTx,
        isError,
        isLoading,
    } = useWaitForTransaction({
        hash,
    });

    async function onSubmit() {
        const hash = await walletClient?.deployContract({
            abi: hstAbi,
            bytecode: hstBytecode as `0x${string}`,
            args: [],
            chain: chain
        });
        setHash(hash);
    }

    return (
        <Stack spacing={5}>
            <Typography variant="h5"
                component="h2" sx={{
                    color: 'teal',
                }}>
                Deploy
            </Typography>      <FormControl>
                <Stack spacing={5}>
                    <FormLabel>
                        Holder address (will receive the tokens)
                        <Input
                            placeholder="Address"
                            value={holder}
                            onChange={(e) => setHolder(e.target.value)}
                        />
                    </FormLabel>
                    <FormLabel>
                        Select Network
                        <Select
                            defaultValue={5}
                            value={age}
                            onChange={(e) => setChainId(parseInt(age))}
                        >
                            <MenuItem value={5}>Görli: testnet</MenuItem >
                            <MenuItem value={666666}>Localhost: testnet</MenuItem >
                            <MenuItem value={1}>Mainnet: production 💸</MenuItem >
                        </Select>
                    </FormLabel>
                    <Button
                        onClick={onSubmit}
                    >
                        Deploy
                    </Button>
                </Stack>
            </FormControl>

            {isLoading && <p>Deploying Landscapes.sol</p>}
            {isError && <p>There was an issue deploying Landscapes.sol</p>}
            {deployTx && <p>Contract deployed at ${deployTx.contractAddress}</p>}
        </Stack>
    );
}