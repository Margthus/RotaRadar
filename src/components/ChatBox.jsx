import { useEffect, useState } from "react";
import { getMessages, sendMessage, subscribeToMessages } from "../services/chatService";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    async function loadMessages() {
      try {
        const initialMessages = await getMessages();
        setMessages(initialMessages);

        unsubscribe = subscribeToMessages((newMessage) => {
          setMessages((current) => {
            const alreadyExists = current.some((msg) => msg.$id === newMessage.$id);
            if (alreadyExists) return current;
            return [...current, newMessage];
          });
        });
      } catch (error) {
        console.error("Mesajlar alınamadı:", error);
      } finally {
        setLoading(false);
      }
    }

    loadMessages();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await sendMessage({ text, userName });
      setText("");
    } catch (error) {
      console.error("Mesaj gönderilemedi:", error);
      alert("Mesaj gönderilemedi. Appwrite izinlerini kontrol et.");
    }
  }

  return (
    <div className="chat-box">
      <h2>Forum / Sohbet</h2>

      <div className="chat-messages">
        {loading ? (
          <p>Mesajlar yükleniyor...</p>
        ) : messages.length === 0 ? (
          <p>Henüz mesaj yok. İlk kaosu sen başlat.</p>
        ) : (
          messages.map((message) => (
            <div key={message.$id} className="chat-message">
              <strong>{message.userName}</strong>
              <p>{message.text}</p>
              <small>{new Date(message.$createdAt).toLocaleString("tr-TR")}</small>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Adın"
        />

        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Mesaj yaz..."
        />

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}