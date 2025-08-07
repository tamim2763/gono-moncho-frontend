// The updated mock ABI now includes functions for verification.
export const gonoMonchoABI = [
    {
      "type": "function",
      "name": "publishArticle",
      "stateMutability": "payable",
      "inputs": [
        { "name": "headline", "type": "string" },
        { "name": "content", "type": "string" }
      ],
      "outputs": []
    },
    {
      "type": "function",
      "name": "confirmAuthenticity",
      "stateMutability": "nonpayable",
      "inputs": [
        { "name": "articleId", "type": "uint256" }
      ],
      "outputs": []
    },
    {
      "type": "function",
      "name": "flagAsMisinformation",
      "stateMutability": "nonpayable",
      "inputs": [
        { "name": "articleId", "type": "uint256" }
      ],
      "outputs": []
    }
  ] as const;