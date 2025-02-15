# API Scoreboard Service
# 1. Technology implementation
 - Backend: <Nodejs (Express JS + TypeScript)>
 - ORM: <Sequelize> (Interaction with database)
 - Database: <MySQL>
 - Cache Memory: <Redis>
 - Realtime Handling: <Socket>
 - Secure: <JWT, API Key> 

# 2. API Endpoints
 - GET /api/v1/scoreboard/top?limit=10
    + Description: get top scoreboard with limit

 - POST /api/v1/scoreboard/update
    Headers: 
        Authorization: Bearer <JWT Token>
    Body:
    {
        "user_id": 1,
        "points": 100
    }
    + Description: get top scoreboard with limit
    + Action inside: 
        If Authenticated valid:
            Update Databse
            Update Redis Data (Cache data for DB to reduce request DB)
            Send Socket (Update for realtime user)
        Else Throw error exception 

 - GET /api/scoreboard/user/:user_id
    + Description: get scoreboard with specified user

# 3. Flow System
    FlowSystem.drawio

# 4. Authentication
 - Genneration JWT Token Without Information In Payload
 - JWT: check JWT verify by secret key
 - Use MD5 (parse) to generate key on redis (if need to get data in redis)
 - Get Information in redis

# 5. Protect Server
 - Use RateLimiter to prevent spam requests
 - Log when update score user
 - Authentication request

    