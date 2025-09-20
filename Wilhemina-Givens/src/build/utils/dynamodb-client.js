const API_BASE = import.meta.env.VITE_API_BASE || "https://your-api.example.com";

/**
 * Fetch latest messages (newest first)
 * @param {number} limit - Max number of messages to fetch
 * @returns {Promise<{items: Array, nextCursor: string|null}>}
 */
export async function fetchMessages(limit = 30) {
  const res = await fetch(`${API_BASE}/messages?limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch messages");
  return await res.json();
}

/**
 * Fetch older messages using a pagination cursor
 * @param {string} cursor - Base64-encoded DynamoDB LastEvaluatedKey
 * @param {number} limit - Max number of messages to fetch
 * @returns {Promise<{items: Array, nextCursor: string|null}>}
 */
export async function fetchMoreMessages(cursor, limit = 30) {
  const res = await fetch(`${API_BASE}/messages?limit=${limit}&cursor=${encodeURIComponent(cursor)}`);
  if (!res.ok) throw new Error("Failed to fetch more messages");
  return await res.json();
}

/**
 * Post a new message to the board
 * @param {string} author - Name of the poster
 * @param {string} text - Message content
 * @returns {Promise<{message: object}>}
 */
export async function postMessage(author, text) {
  const payload = {
    author: author.trim().slice(0, 50),
    text: text.trim().slice(0, 500)
  };

  const res = await fetch(`${API_BASE}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw new Error("Failed to post message");
  return await res.json();
}
