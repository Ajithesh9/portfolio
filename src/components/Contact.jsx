import React from "react";

export default function Contact() {
  return (
    <div>
      <h2>Interested in collaborating? Let’s talk!</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea rows="4" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
