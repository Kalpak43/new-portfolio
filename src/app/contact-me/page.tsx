"use client";

import React from "react";

export default function ContactForm() {
  const [sending, setSending] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/mailer", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent successfully");
    } else {
      alert("Message failed to send");
    }

    setSending(false);
  };

  return (
    <main className="py-6 lg:px-10 space-y-8" id="contact-me">
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Your Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="name"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Your Email</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="email"
          />
        </label>
        <label className="form-control w-full md:col-span-2">
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea
            name="message"
            id=""
            className="textarea textarea-bordered w-full"
            placeholder="Type your message here"
            rows={5}
          />
        </label>
        <button
          className="btn bg-gradient-blue transition-all duration-200 w-fit"
          disabled={sending}
        >
          {sending ? (
            <span className="text-white flex items-center gap-1">
              <span className="loading loading-spinner loading-xs"></span>{" "}
              Sending
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </main>
  );
}
