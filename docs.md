# EditaCTF API Documentation

This document lists the main API endpoints for EditaCTF, including both user and admin endpoints, with their methods, authentication requirements, and main parameters/fields. Use this as a reference for integration.

---

## Public/User Endpoints

### Challenges
- `GET /api/challenges`
  - List all challenges (id, name, category, points, difficulty, daily)
- `GET /api/challenges?id=<challenge_id>`
  - Get details for a specific challenge
- `GET /api/challenges?hint=<challenge_id>`
  - Get the hint for a specific challenge

### Flag Submission
- `POST /api/flag`
  - Submit a flag for a challenge
  - **Auth required** (Bearer token)
  - Body: `{ id: string, flag: string }`
  - Returns: `{ correct: boolean, points, awarded, message }`

### Leaderboard
- `GET /api/leaderboard`
  - Get the current team leaderboard

### Teams
- `GET /api/teams`
  - List all teams (name, members, score)
- `POST /api/team/create`
  - Create a new team (auth required)
  - Body: `{ name: string, password: string }`
- `POST /api/team/join`
  - Join a team (auth required)
  - Body: `{ name: string, password: string }`
- `POST /api/team/leave`
  - Leave current team (auth required)

### Profile
- `GET /api/profile`
  - Get current user's profile (auth required)
- `POST /api/profile`
  - Set display name (auth required)
  - Body: `{ display_name: string }`

### User Summary
- `GET /api/me/summary`
  - Get current user's team, score, solved challenges, etc. (auth required)

### Rules
- `GET /api/rules`
  - Get the CTF rules (plain text)

### Health
- `GET /api/health/db`
  - Check DB health and table existence

---

## Admin Endpoints (require admin email in `ADMIN_EMAILS`)

### Users
- `GET /api/admin/users`
  - List all users (profile + auth info)
- `PATCH /api/admin/users/[userId]`
  - Update user profile (display_name, team_name)
- `DELETE /api/admin/users/[userId]`
  - Delete user (profile, solves, auth)
- `POST /api/admin/users/[userId]/reset-password`
  - Send password reset email

### Teams
- `GET /api/admin/teams`
  - List all teams with members and solve counts
- `DELETE /api/admin/teams?name=<team_name>`
  - Delete a team (moves members to guest)

### Challenges
- `GET /api/admin/challenges`
  - List all challenges with flags and solve counts
- `POST /api/admin/challenges`
  - Create/update a challenge (id, name, category, points, flag, ...)

### Logs & System
- `GET /api/admin/logs`
  - List recent solves and admin actions
- `GET /api/admin/system`
  - Get system stats (users, challenges, solves, teams, recent activity)

### Admins
- `GET /api/admin/admins`
  - List admin users
- `POST /api/admin/admins`
  - Request to add a new admin (logs request, requires env update)

### Auth
- `POST /api/admin/auth`
  - Check if current user is admin

---

## Notes
- All endpoints return JSON unless otherwise noted.
- Endpoints requiring authentication expect a Bearer token in the `Authorization` header.
- Admin endpoints require the user's email to be in the `ADMIN_EMAILS` environment variable.
- For more details, see the code in the corresponding `route.ts` files.
