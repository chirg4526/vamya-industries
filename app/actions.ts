"use server";

export async function submitEnquiry(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const contactInfo = formData.get("contactInfo") as string;
  const requirements = formData.get("requirements") as string;

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  console.log("========================================");
  console.log("📥 NEW BUSINESS ENQUIRY RECEIVED");
  console.log(`Time: ${timestamp}`);
  console.log(`Name: ${fullName}`);
  console.log(`Contact: ${contactInfo}`);
  console.log(`Message: ${requirements}`);
  console.log("========================================");

  // Ready for email service dispatch (e.g. Resend, SMTP, SendGrid)
}