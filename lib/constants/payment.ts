export const BANKING_DETAILS = {
  international: {
    bankName: "Citibank N A – Nairobi",
    accountName: "Kenya Airways Plc",
    accountNumber: "0100597217",
    swiftCode: "CITIKENA",
    branchCode: "16000",
    currency: "USD",
    instructions: "Please use your full name and 'AAIS2025' as reference when making the international transfer",
  },
  local: {
    bankName: "NCBA Bank",
    paybillNumber: "880100",
    accountNumber: "6606530056",
    currency: "KES",
    instructions:
      "1. Go to M-Pesa menu\n2. Select Lipa na M-Pesa\n3. Select Pay Bill\n4. Enter Paybill Number: 880100\n5. Enter Account Number: 6606530056\n6. Enter Amount in KES\n7. Enter your M-Pesa PIN\n8. Copy the transaction code from SMS",
  },
}

export const EXCHANGE_RATE = 130 // KES to USD
