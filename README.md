## SUVe with Axelar

### ✨ Inspiration

With the outbreak of Covid-19, and a rush to find a fast and effective solution, we have witnessed a rise in counterfeit vaccines. This has cost thousands of human lives, especially in emerging countries. Suve is a dApp that takles this problem.

### 🍰 What SUVe does

SUVe allows users on different blockchain ecosystems to query from a single source of truth. Suve works by implementing a 2-way General Message Passing to enable communication between Enrollment Service on the source blockchain and Verifification service on other blockchains, to verify the autheticity of vaccines.

### 📜 2-way Interchain Transaction for Vaccine verification

Request: [This is a transaction made to VerificationService](https://testnet.axelarscan.io/gmp/0x6fc432832a421eaa8a67905bd3b4f4b509d02019fb2ad5e6723729d693216501)

Response:
[This is the response from EnrollmentService on the source chain](https://testnet.axelarscan.io/gmp/0xa27784ec4365f07afe0c30398b8b7271cf8169ec589765d1e5fef1ec4a5dc8bf)

### 💻 How I built SUVe

I created 2 EVM smart contracts in Solidity, [**EnrollmentService.sol**](https://github.com/iamendy/suve/blob/master/contracts/Enrol.sol) and [**VerificationService.sol**](https://github.com/iamendy/suve/blob/master/contracts/Verify.sol). The EnrollmentService is the source of truth and deployed on the Avalanche Blockchain. The EnrollmentService is where a pharmacetucal company can register their vaccines, while the VerificationService is deployed on three of the many EVM compatible chains supported by Axelar(Celo, Fantom, and Polygon). These smart contracts uses Axelar 2-way General Message Passing to make cross-chain calls between VerificationService(Request) on other blockchains and EnrollmentService(Response).

For the front end, I used **`NextJs/Typescript`** with **`Wagmi`**. The dApp uses **`AxelarJs SDK`** on API endpoints which implements `AxelarQueryAPI` and `AxelarGMPRecoveryAPI` to get interchain estimated gas, as well as track the entire 2-way GMP process on the frontend.

### 🚀 Accomplishments that I'm proud of

🍥 I implemented an inter-chain verification system that wouldn't have been possible without Axelar. <br />
🍥 I showcased how different blockchains can interact and sync data as one super DApp.<br />
🍥 I implemented 2-way GMP UI tracking on the frontend, using AlexarJs SDK. This allowing users monitor progress without leaving the dApp. <br />
🍥 I really enjoyed studying the Axelar technology, and the myraids of potentials it unlocks for the blockchain ecosystem. <br />

### 🧘‍♂️ Experience learning and using Axelar

✅ The ease of interchain capability using Axelar is amazing. <br/>
✅ I'm more of a visual learner, so the video resources on Youtube really helped bring me up to speed, then the docs became super easy to understand <br />
✅ Once you get familiar with Axelar, you really appreciate the work put in to make docs easily absorbed.

➖ I noticed that sometimes transactions don't show up quickly on Axelar scan, so the AxelarJs SDK was my favourite way of checking transactions. <br />
➖ Axelar scan keeps reloading thereby making it difficult to actually study the report <br>

## 📈 What's next for SUVe

I'm happy to have built this app. I was marvelled at the ease of connecting different blockchains. I plan on:

- Expanding the Enrollment service into a Factory Contract, to allow bespoke enrollment and Verification service that is not limited to vaccines, but other business niches like automobiles, fashion, etc
- Expanding the service to the Cosmos ecosystem
- Integrate the Service to allow inter-chain verification using NFTs (ERC721, ERC1155)

## 📄 Links

[Dapp](https://to_be_updated)

Thank you! I hope you enjoyed my interchain-chain verification dApp that saves lives for web3 users, and expands the web3 ecosystem using Axelar.

## 🧑‍💻 Instructions for testing locally

1. Deploy `EnrollmentService` on Avalanche (Or any Axelar supported chain you wish) with the respective GateWay and Gas Service:

   For Avalanche

   - gateway = `0xC249632c2D40b9001FE907806902f63038B737Ab`
   - gasReceiver = `0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6`

2. Deploy `VerificationService` on any Axelar-supported chain, such as Celo as shown here:

   For Celo

   - gateway = `0xe432150cce91c13a887f7D836923d5597adD8E31`
   - gasReceiver = `0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6`
   - VaccineEnrollmentService = `address of your deployed EnrollmentService`
   - VESChain = `Avalanche`
     \*You can deploy to as many chains as you wish.

3. Update your deployed addresses on the `src/chains/index.ts file.

4. On the dApp, visit the enrollment dashboard to register Vaccnines. This interacts with `EnrollmentService.enroll()`. Private Key instruction is already made.

5. Run `npm install` to install all dependencies.

6. `npm run dev` to start the app on a development environment.

7. Verify the vaccine you uploaded on the different blockchains by entering the hash on the verify page.
