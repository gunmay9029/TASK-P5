# SIT313 P5 — DEV@Deakin Newsletter

This project extends the supplied C1 React website with a connection to the P2 Express/SendGrid backend. The existing page design and components are retained; the footer subscription form now sends an HTTP POST request and displays the backend result.

## Requirements
- Node.js 20.19+ or 22.12+ recommended for the Vite version used by the frontend.
- A SendGrid API key and verified sender address. Never commit these secrets.

## 1. Configure backend
```bash
cd backend
npm install
cp .env.example .env
```
Edit `backend/.env` locally and set `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL` to your own valid SendGrid values. Do not upload `.env`.

Start the backend in this terminal:
```bash
npm run dev
```
It listens on `http://localhost:3000`. Check `http://localhost:3000/health`.

## 2. Configure frontend
Open a second terminal from the project root:
```bash
cd frontend
npm install
npm run dev
```
Open the local URL printed by Vite. The Vite proxy forwards `/api/subscribe` to the Express `/subscribe` endpoint.

If you use the existing Firebase login/signup pages, copy `frontend/.env.example` to `frontend/.env` and add your Firebase configuration. These settings are not needed for the newsletter route itself.

## 3. Test
1. Enter a valid email address you can access and select Subscribe.
2. A successful request displays a confirmation message and the backend logs the actual SendGrid response status. SendGrid normally returns HTTP 202 when it accepts a message for processing. This is not a guarantee of final inbox delivery; check the inbox and spam folder for evidence.
3. Try a malformed email; the browser and backend should reject it.
4. Stop the backend and try again to verify the frontend network error message.

The backend responds with HTTP 202 for an accepted SendGrid send request, HTTP 400 for invalid input, HTTP 502 if SendGrid rejects/fails the send, and HTTP 500 if the server is not configured correctly.

## Submission reminders
- Create the required GitLab project `Task P5` with Internal visibility, as specified in the task sheet.
- Commit all required source files/resources with meaningful messages. Do not commit `.env`, `node_modules`, or `dist`.
- Capture website screenshots and terminal evidence of the real SendGrid response. Also capture the received welcome email in the inbox if available.
- Add the GitLab repository and Panopto video links to the report. The walkthrough must be 2–4 minutes.
