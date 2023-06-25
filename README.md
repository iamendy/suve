# SUVe with Axelar

![](https://github.com/iamendy/suve/blob/master/public/img/preview.gif)

Live Demo - [YouTube](https://youtu.be/VtPkBPngoBo)

## ✨ Inspiration

With the outbreak of Covid-19, and a rush to find a fast and effective solution, we have witnessed a rise in counterfeit vaccines generally. This has cost thousands of human lives, especially in emerging countries.

[SUVe](https://suve.vercel.app) is a dApp that takles vaccine counterfeit problem.

[SUVe](https://suve.vercel.app) is a proof on how multi-chain verification systems is made possible through Axelar protocol.

## 🍰 What SUVe does

![](https://github.com/iamendy/suve/blob/master/public/img/chart.png)

[SUVe](https://suve.vercel.app) allows users on different blockchains to query from a single source of truth. Suve works by implementing a 2-way General Message Passing to enable communication between Enrollment Service on the source blockchain and Verifification service on other blockchains, to verify the autheticity of vaccines.

## 📜 2-way GMP Transaction for Vaccine verification

Request: [This is a transaction made to VerificationService on FANTOM](https://testnet.axelarscan.io/gmp/0x40002bac8b06c22036c201dee87067b57fc3a18434eebca2477cdaa741857708)

Response:
[This is the response from EnrollmentService on the source chain AVALANCHE](https://testnet.axelarscan.io/gmp/0x0d43bbeb449f4a7ec0bc06b36ba01857f2cedcb21f349d8f0e90e47bbbbf5f4a)

## 💻 How I built SUVe

I created 2 EVM smart contracts in Solidity, [**VaccineEnrollmentService.sol**](https://github.com/iamendy/suve/blob/master/contracts/VaccineEnrollmentService.sol) and [**VaccineVerificationService.sol**](https://github.com/iamendy/suve/blob/master/contracts/VaccineVerificationService.sol).

- The EnrollmentService is the source of truth. This contract enables vaccine enrollment. For this demo, our Enrollment service is deployed on the Avalanche Blockchain.

- The VerificationService is used for verification. The VerificationService is deployed to multiple EVM compatible chains (Celo, Fantom, and Polygon).

When a user requests for verification on any of the supported chains, these smart contracts uses Axelar 2-way General Message Passing to make cross-chain call and response, in order verify the authenticity of requested vaccine.

For the front end, I used **`NextJs/Typescript`** with **`Wagmi`**. The dApp uses **`AxelarJs SDK`** on custom API endpoints which implements `AxelarQueryAPI` to get interchain estimated gas, and `AxelarGMPRecoveryAPI` to track the entire 2-way GMP process on the frontend.

## 📄 Links

[Dapp](https://suve.vercel.app) 🌍

[LIVE Demo](https://www.youtube.com/watch?v=VtPkBPngoBo) 📹

You can verify using any of these Vaccine Ids on supported blokchains:

1. 0x4687e82018f4232d0e25a63155dc048e112b1ccc2d7dd6a0318ef50b21c83bb4
2. 0x02481b8151b9372d9a187e74aec24a8fb08d588202115ee7ddc64f5f94a8f4f8
3. 0xc56a5f4865add0b51d6045824742a6f52fed9f9a529b3c984d126c8a0731415c

## 🚀 Accomplishments that I'm proud of

🍥 Implemented an inter-chain verification system that wouldn't have been possible without Axelar. <br />
🍥 Showcased how different blockchains can interact and sync data as one super DApp.<br />
🍥 Implemented 2-way `GMP tracking on the frontend`, using AlexarJs SDK. This allowing users monitor progress without leaving the dApp. <br />
🍥 I enjoyed studying the Axelar technology, and excited about the future it unlocks for the blockchain ecosystem. <br />

## 🧘‍♂️ Experience learning and using Axelar

✅ The ease of interchain capability using Axelar is amazing. <br/>
✅ I'm more of a visual learner, so the video resources on Youtube really helped bring me up to speed, then the docs became super easy to understand <br />
✅ I love how the docs is well structured. It is easy to navigate and find what you're looking for.

✅ Axelar SDK works seamlessless, especially for getting GMP status.

➖ I noticed GMP transactions shows "Data Not Found" on Axelar scan during peak times. <br />
➖ Axelar scan sometimes keeps reloading the entire page, thereby making it difficult to actually study the report <br>

## 📈 What's next for SUVe

I'm happy to have built this app. I was marvelled at the ease of connecting different blockchains. I plan on:

- Expanding the Enrollment service into a Factory Contract, to allow bespoke enrollment and verification service that is not limited to vaccines, but other business niches like automobiles, fashion, etc
- Expanding the service to the Cosmos ecosystem
- Integrate the Service to allow inter-chain verification with NFTs.

Thank you! I hope you enjoyed my interchain-chain verification dApp that saves lives for web3 users, and expands the web3 ecosystem using Axelar.

## 🧑‍💻 Instructions for testing locally

\***\* Smart contract \*\***

Note: Recommend using [Remix](https://remix.ethereum.org/) for quick smart contract deployment:

1. Deploy `EnrollmentService` on Avalanche (Or any Axelar supported chain you wish) with the respective GateWay and Gas Service:

   For Avalanche

   - gateway = `0xC249632c2D40b9001FE907806902f63038B737Ab`
   - gasReceiver = `0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6`

2. Deploy `VerificationService` on any Axelar-supported chain. You can deploy to as many chains as you wish.

   For Celo

   - gateway = `0xe432150cce91c13a887f7D836923d5597adD8E31`
   - gasReceiver = `0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6`
   - VaccineEnrollmentService = `address of your deployed EnrollmentService`
   - VESChain = `Avalanche`

3. Update your deployed Enrollment and Verification addresses on the `src/chains/index.ts file.

\***\* Frontend \*\***

4. Run `cp .env.example .env.local` to create a valid .env config file

5. Run `npm install` to install dependencies.

6. `npm run dev` to start the DApp on your development environment.

7. On the dApp, visit the enrollment dashboard to register Vaccines.

8. Switch to any of your deployed Verification chains.

9. Verify the vaccine by entering the hash on the verify page.
