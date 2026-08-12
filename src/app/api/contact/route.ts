import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization, phone, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Vaidya Landing Page

Name: ${name}
Email: ${email}
Organization: ${organization || 'Not provided'}
Phone: ${phone || 'Not provided'}

Message:
${message || 'No message provided'}

---
This email was sent from the Vaidya Health landing page contact form.
    `.trim()

    // Check if Resend is available
    if (!resend) {
      console.log('=== EMAIL TO: info@vaidyahealth.com ===')
      console.log(emailContent)
      console.log('=== END EMAIL ===')
      console.log('Note: Resend API key not configured. Email not sent.')
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. Email logged to console (Resend not configured).'
        },
        { status: 200 }
      )
    }

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Vaidya Health <noreply@vaidyahealth.com>',
        to: ['info@vaidyahealth.com'],
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <p><strong>From:</strong> Vaidya Health Landing Page</p>
            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #059669;">
              ${message || 'No message provided'}
            </div>
            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 14px;">
              This email was sent from the Vaidya Health landing page contact form.
            </p>
          </div>
        `
      })

      if (error) {
        console.error('Resend email error:', error)
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        )
      }

      console.log('Email sent successfully via Resend:', data)
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. Email sent to info@vaidyahealth.com'
        },
        { status: 200 }
      )

    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
