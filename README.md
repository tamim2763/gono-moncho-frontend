# Gono Moncho - Decentralized Journalism

**Gono Moncho** (which means "People's Platform") is a full-stack dApp (decentralized application) built with Next.js and blockchain technology. It's a prototype for a decentralized ecosystem that aims to combat misinformation by creating a platform for verifiable journalism.

---

### 📷 Screenshots

<table>
  <tr>
    <td><img width="400" alt="Home Page" src="https://github.com/user-attachments/assets/772d6432-fdb4-470e-97c7-2d0ceb938056" /></td>
    <td><img width="400" alt="Publish Article Page" src="https://github.com/user-attachments/assets/0401205e-d0fe-42a0-8f62-5734a28e4fe2" /></td>
  </tr>
  <tr>
    <td><img width="400" alt="Verification and Voting" src="https://github.com/user-attachments/assets/8f2478cf-c1fc-4231-ba48-3140bb120dae" /></td>
    <td><img width="400" alt="Metamask Connection" src="https://github.com/user-attachments/assets/15285e30-abf9-4691-b88b-f771a898f652" /></td>
  </tr>
</table>

---

### Key Features

* **Wallet Connection:** Users can connect their Web3 wallet (like MetaMask) to interact with the platform.
* **Article Publishing:** Connected users can publish new journalistic articles (via the `/publish` page).
* **Decentralized Verification:** Users can vote on the authenticity of articles, calling smart contract functions like `confirmAuthenticity` and `flagAsMisinformation`.
* **Category Filtering:** The main feed can be filtered by article category (e..g, "All", "Politics", "Tech") using a shared React Context.
* **Modern UI:** Built with Next.js, React Server Components, and Tailwind CSS.

---

### 🛠 Tech Stack

* **Framework:** Next.js (App Router)
* **Blockchain:** `wagmi` for wallet connection and smart contract interaction.
* **Smart Contract:** Solidity (with ABI `gonoMonchoABI`)
* **State Management:** React Context (`ArticleContext`)
* **Styling:** Tailwind CSS
* **Language:** TypeScript

---

### 🏎️ How to Run Locally

1.  Clone the repository:
    ```bash
    git clone [https://github.com/tamim2763/gono-moncho-frontend.git](https://github.com/tamim2763/gono-moncho-frontend.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd gono-moncho-frontend
    ```
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```
4.  Run the local development server:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You will need a browser-based wallet like MetaMask installed and connected to the Sepolia test network to use the app's full functionality.
