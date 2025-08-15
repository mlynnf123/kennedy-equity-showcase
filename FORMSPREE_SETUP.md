# Formspree Setup Guide

This guide will help you set up Formspree to automatically send contact form submissions to dan@pmiaustin.net and info@pmiaustin.net.

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" and sign up for a free account
3. Verify your email address

## Step 2: Create a New Form

1. In your Formspree dashboard, click "New Form"
2. Give your form a name: "Kennedy Equity Contact Form"
3. Click "Create Form"

## Step 3: Configure Email Recipients

1. In the form settings, go to the "Emails" tab
2. Add both email addresses:
   - dan@pmiaustin.net
   - info@pmiaustin.net
3. Both recipients will need to verify their email addresses by clicking the confirmation link Formspree sends

## Step 4: Get Your Form ID

1. In the form dashboard, you'll see your form endpoint
2. It will look like: `https://formspree.io/f/YOUR_FORM_ID`
3. Copy just the form ID part (the alphanumeric string after `/f/`)

## Step 5: Update the Website Code

1. Open `src/pages/Contact.tsx`
2. Find this line:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID

## Step 6: Deploy and Test

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add Formspree form ID"
   git push origin main
   npm run deploy
   ```

2. Once deployed, test the form on your live site
3. Submit a test message and verify both recipients receive it

## Features Included

- **Spam Protection**: The form includes a honeypot field to prevent bot submissions
- **Custom Subject Line**: Each email will have the subject "Kennedy Equity Contact Form - [Sender Name]"
- **Reply-To**: Recipients can reply directly to the sender's email
- **Success/Error Messages**: Users see clear feedback after submission
- **Loading State**: The submit button shows "Sending..." during submission

## Formspree Limits

The free plan includes:
- 50 submissions per month
- 2 forms
- Basic spam filtering
- Email notifications

If you need more submissions, you can upgrade to a paid plan.

## Troubleshooting

1. **"Failed to send message" error**: Check that your form ID is correct
2. **Not receiving emails**: Make sure both recipients have verified their email addresses in Formspree
3. **Spam submissions**: Enable reCAPTCHA in your Formspree form settings

## Alternative: Environment Variable (Optional)

For better security, you can store the form ID as an environment variable:

1. Create a `.env` file:
   ```
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

2. Update the code:
   ```javascript
   const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`;
   ```

Note: This approach won't work on GitHub Pages since it doesn't support environment variables at runtime.