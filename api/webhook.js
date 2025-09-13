// Webhook handler for Sanity Studio to trigger Vercel rebuilds
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    console.error('SANITY_WEBHOOK_SECRET is not set');
    return res.status(500).json({ message: 'Webhook secret not configured' });
  }

  // Verify the request is from Sanity (basic validation)
  const signature = req.headers['sanity-webhook-signature'];
  
  // Log the webhook call for debugging
  console.log('Webhook received:', {
    timestamp: new Date().toISOString(),
    body: req.body,
    headers: req.headers['sanity-webhook-signature'] ? 'Present' : 'Missing'
  });

  // For now, we'll accept any POST request to this endpoint
  // In production, you might want to add signature verification
  
  return res.status(200).json({ 
    message: 'Webhook received successfully',
    timestamp: new Date().toISOString()
  });
}