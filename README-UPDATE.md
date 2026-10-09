# Update: booking flow

1. Unzip over your stage 6 project (see the file list in the chat message).
2. `npm install`
3. Supabase: create a project, run `supabase/leads.sql` in the SQL editor, copy the project URL and the service-role key.
4. Copy `.env.example` to `.env` and fill it in. Never commit `.env`.
5. Resend: create an API key. For testing, the default sender only delivers to your own Resend account email. Verify your domain before launch.
6. Edit `src/config/booking.ts`: set your Cal.com link and the call length.
7. `npm run dev`, submit the form, check Supabase, your inbox and /thank-you.
8. Vercel: add the same environment variables, then deploy.
