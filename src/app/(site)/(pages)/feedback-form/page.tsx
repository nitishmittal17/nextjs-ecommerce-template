"use client";
import { FormEvent } from "react";

export default function FeedbackFormPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.parent !== window) {
      // If in iframe, use parent's alert
      window.parent.postMessage({ type: "feedback-submitted" }, "*");
    }
    alert("Thank you for your feedback!");
    e.currentTarget.reset();
  };

  return (
    <div style={{
      backgroundColor: "#10b981",
      padding: "20px",
      borderRadius: "8px",
      margin: "0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
    }}>
      <h3 style={{
        color: "white",
        fontSize: "18px",
        fontWeight: 600,
        marginBottom: "15px",
        margin: "0 0 15px 0",
      }}>
        Iframe Feedback Form
      </h3>
      
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <label
          htmlFor="iframe-feedback-name"
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Name:
        </label>
        <input
          type="text"
          id="iframe-feedback-name"
          name="name"
          required
          placeholder="Enter your name"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            fontFamily: "inherit",
            width: "100%",
            boxSizing: "border-box",
          }}
        />

        <label
          htmlFor="iframe-feedback-email"
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Email:
        </label>
        <input
          type="email"
          id="iframe-feedback-email"
          name="email"
          required
          placeholder="Enter your email"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            fontFamily: "inherit",
            width: "100%",
            boxSizing: "border-box",
          }}
        />

        <label
          htmlFor="iframe-feedback-message"
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Feedback:
        </label>
        <textarea
          id="iframe-feedback-message"
          name="message"
          required
          placeholder="Share your feedback about the website"
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            fontFamily: "inherit",
            width: "100%",
            boxSizing: "border-box",
            resize: "vertical",
            minHeight: "80px",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#047857",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background-color 0.2s",
            marginTop: "4px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#065f46";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#047857";
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

