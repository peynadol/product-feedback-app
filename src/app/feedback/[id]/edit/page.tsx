import EditFeedbackForm from "@/components/edit-feedback-form";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const EditFormPage = () => {
  return (
    <main className="bg-mist h-dvh p-6">
      <div className="max-w-2xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-darkBlue hover:underline underline-offset-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Go Back
        </Link>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-md">
        <EditFeedbackForm />
      </div>
    </main>
  );
};

export default EditFormPage;
