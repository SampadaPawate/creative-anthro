# Contact Form API Setup

This portfolio includes a backend API for handling contact form submissions. The API sends emails directly to your inbox using Resend.

## Setup Instructions

### 1. Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing middleware
- `dotenv` - Environment variable management
- `resend` - Email service
- `concurrently` - Run multiple commands simultaneously (for development)

### 2. Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day on free tier)
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 3. Configure Environment Variables

1. Create a `.env` file in the `server/` directory:

```bash
cd server
touch .env
```

2. Add the following variables to `server/.env`:

```env
# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
TO_EMAIL=sampadapawate@gmail.com

# From Email (must be verified in Resend)
# For testing, you can use onboarding@resend.dev
# For production, use your verified domain email
FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>

# Server Port (optional, defaults to 3001)
PORT=3001
```

3. Configure frontend environment variable:
   - Create a `.env` file in the root directory (if it doesn't exist)
   - Add: `VITE_API_URL=http://localhost:3001`

### 4. Verify Your Email Domain (For Production)

If you want to use your own domain email address:

1. Go to Resend Dashboard → Domains
2. Add your domain
3. Follow the DNS verification steps
4. Once verified, update `FROM_EMAIL` in `.env` to use your domain email

Example:
```env
FROM_EMAIL=Portfolio Contact <contact@yourdomain.com>
```

### 5. Running the Application

#### Development Mode (Frontend + Backend)

Run both frontend and backend simultaneously:

```bash
npm run dev:all
```

This starts:
- Frontend on `http://localhost:8080` (Vite default)
- Backend API on `http://localhost:3001`

#### Run Separately

**Frontend only:**
```bash
npm run dev
```

**Backend only:**
```bash
npm run dev:server
```

### 6. API Endpoints

#### Health Check
```
GET /health
```

#### Contact Form Submission
```
POST /api/contact
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "message": "Hello, I'd like to discuss a project."
}
```

### 7. Deployment

#### Option 1: Deploy Backend Separately

You can deploy the backend server to:
- **Heroku** - Free tier available
- **Railway** - Easy deployment
- **Render** - Free tier available
- **DigitalOcean** - App Platform
- **Vercel** - Serverless functions

#### Option 2: Serverless Functions

For platforms like Vercel, you can convert the Express server to serverless functions.

### 8. Troubleshooting

**Email not sending:**
- Verify your Resend API key is correct
- Check that your FROM_EMAIL domain is verified in Resend
- Check server logs for error messages

**CORS errors:**
- Ensure the backend is running
- Check that VITE_API_URL matches your backend URL

**Port conflicts:**
- Change PORT in server/.env if 3001 is already in use

### 9. Security Notes

- Never commit `.env` files to version control
- Add `.env` to `.gitignore`
- For production, use environment variables from your hosting platform
- Consider adding rate limiting to prevent spam

### Support

If you encounter any issues:
1. Check the server console for error messages
2. Verify your Resend API key is valid
3. Ensure all environment variables are set correctly

