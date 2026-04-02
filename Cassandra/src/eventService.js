import client from "./cassandraClient.js";

export async function addEvent(userId, eventType, page) {
  // TODO 1:
  // Insert into Cassandra
  // HINT: INSERT INTO user_events (...)

}

export async function getRecentEvents(userId) {
  // TODO 2:
  // Query last events for user
  // HINT: SELECT ... WHERE user_id = ?

}
