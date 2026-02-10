// Email service for notifications
export const sendEmail = async (to, subject, body) => {
  console.log(`Sending email to ${to}: ${subject}`)
  return {success: true}
}
