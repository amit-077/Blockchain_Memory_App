import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../utils/load-contract";
import { Box } from "@chakra-ui/react";
import Web3 from "web3";

const App = () => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  useEffect(() => {
    async function metamaskDetect() {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("memoryApp", provider);

      if (provider) {
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });

        const chainId = await provider.request({
          method: "eth_chainId",
        });
      } else {
        console.log("Please install MetaMask!");
      }
    }

    metamaskDetect();
  }, []);

  console.log(web3Api);

  return (
    <div>
      <Box></Box>
    </div>
  );
};

export default App;
