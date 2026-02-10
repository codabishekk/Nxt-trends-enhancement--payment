// Payment processing service
export const processPayment = async (amount, currency) => {
  console.log(`Processing payment of ${amount} ${currency}`)
  return {success: true, transactionId: 'TXN_' + Date.now()}
}
