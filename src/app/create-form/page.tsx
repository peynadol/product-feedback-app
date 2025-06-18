import CreateFeedbackForm from "@/components/create-feedback-form";
import React from "react";

const CreateFormPage = () => {
  return (
    <main className="bg-mist h-dvh p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-md">
        <CreateFeedbackForm />
      </div>
    </main>
  );
};

export default CreateFormPage;
