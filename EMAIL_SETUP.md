# 📧 Email Service Setup for Production

## 🚀 **Resend Email Service Configuration**

Your contact form is now configured to send emails to `info@vaidyahealth.com` using **Resend** - the most reliable and developer-friendly email service.

### **1. Get Your Resend API Key**

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to **API Keys** section
4. Create a new API key
5. Copy the API key (starts with `re_`)

### **2. Set Environment Variable**

Create a `.env.local` file in your project root:

```bash
# .env.local
RESEND_API_KEY=re_your_actual_api_key_here
```

### **3. Verify Your Domain (Optional but Recommended)**

For production, verify your domain in Resend:
1. Go to **Domains** in Resend dashboard
2. Add and verify `vaidya.health` or your domain
3. This allows you to send from `noreply@vaidya.health`

### **4. Test the Setup**

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your server logs
4. Check `info@vaidyahealth.com` inbox

### **5. Production Deployment**

- **Vercel:** Add `RESEND_API_KEY` to your project environment variables
- **Netlify:** Add the environment variable in site settings
- **Other platforms:** Add the environment variable in your hosting platform

### **6. Email Features**

✅ **Professional HTML emails** with Vaidya branding  
✅ **Text fallback** for email clients  
✅ **Error handling** and logging  
✅ **Rate limiting** protection  
✅ **Delivery tracking** via Resend dashboard  

### **7. Monitoring & Analytics**

- Check Resend dashboard for delivery rates
- Monitor bounce rates and spam reports
- View email analytics and engagement

### **8. Troubleshooting**

If emails aren't sending:
1. Check your API key is correct
2. Verify the environment variable is loaded
3. Check server logs for error messages
4. Ensure your Resend account is active

### **9. Cost & Limits**

- **Free tier:** 3,000 emails/month
- **Paid plans:** Starting at $20/month for 50,000 emails
- **No setup fees** or hidden costs

---

**Your contact form is now production-ready! 🎉**

All form submissions will be sent as professional emails to `info@vaidyahealth.com` with full contact details and message content.
