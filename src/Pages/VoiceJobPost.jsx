import React, { useState, useRef } from "react";

const VoiceJobPost = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Microphone access denied or error:", err);
      alert("Microphone access required!");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  // Delete recording
  const deleteRecording = () => {
    setAudioBlob(null);
    setAudioURL(null);
    setRecording(false);
  };

  // Submit voice job
  const handleSubmit = async () => {
    if (!audioBlob) {
      alert("No recording found!");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("voice", audioBlob);

    try {
      const res = await fetch("http://localhost:5000/api/voice-jobs", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("🎉 Voice job sent to admin successfully!");
        deleteRecording();
      } else {
        alert("❌ Failed to send voice job");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Post Job via Voice
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Record your job description as a voice note. Admin will review and post the job.
        </p>

        <div className="flex flex-col items-center gap-4">
          {!recording && !audioURL && (
            <button
              onClick={startRecording}
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg transition"
            >
              Start Recording
            </button>
          )}

          {recording && (
            <button
              onClick={stopRecording}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition"
            >
              Stop Recording
            </button>
          )}

          {audioURL && (
            <>
              <audio controls src={audioURL} className="w-full mt-2" />
              <div className="flex gap-3 mt-2">
                <button
                  onClick={deleteRecording}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3 rounded-lg ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Voice Job"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceJobPost;
