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

import {
    Bytecode as myTokenBytecode,
    Abi as myTokenAbi,
} from "./my-token.json"

import {
    Bytecode as helloWorldBytecode,
    Abi as helloWorldTokenAbi,
} from "./hello-world.json"

export default function Deploy() {
    const { chain, chains } = useNetwork()
    const [age, setAge] = useState();

    const [holder, setHolder] = useState("");
    const [hash, setHash] = useState<undefined | `0x${string}`>();
    const { data: walletClient } = useWalletClient();
    const {
        data: deployTx,
        isError,
        isLoading,
    } = useWaitForTransaction({
        hash,
    });
    async function onSubmit() {
        const data = await walletClient?.deployContract({
            abi: helloWorldTokenAbi,
            bytecode: helloWorldBytecode as `0x${string}`,
            args: [],
            chain
        });
        setHash(data);
    }

    return (
        <Stack spacing={5}>
            <Typography variant="h5"
                component="h2" sx={{
                    color: 'teal',
                }}>
                Deploy
            </Typography>


            {chain && <div>Connected to {chain.id}</div>}
            {chains && (
                <div>Available chains: {chains.map((c) => c.name)}</div>
            )}

            <FormControl>
                <Stack spacing={5}>
                    <FormLabel>
                        Holder address (will receive the tokens)
                        <Input
                            placeholder="Address"
                            value={holder}
                            onChange={(e) => setHolder(e.target.value)}
                        />
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
