import { fetchSessions, fetchSessionsbyId } from "../models/model.sessions.js";



async function getSessions(req, res) {
    try {
        const { tractorId, fieldId, date, } = req.query; 
        const sessions = await fetchSessions({tractorId, fieldId, date});
        res.json(sessions);

    } catch (error){
        console.error("Error in getSessions, ", error);
        res.status(500).json({message:'Error fetching sessions'})

    }
}

async function getSessionbyId(req, res){
    try {
        const sessionId = req.params.sessionId; 
        const sessionbyId = await fetchSessionsbyId(sessionId); // write later
        res.json(sessionbyId)

    } catch (error){
        console.error("Error in getSessionbyId, ", error);
        res.status(500).json({message: 'Error fetching session by id'})
    }
}

export {getSessions, getSessionbyId}
