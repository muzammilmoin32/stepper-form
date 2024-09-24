"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import Budget from "./components/Budget";
import Details from "./components/Details";
import Confirmation from "./components/Confirmation";

enum STEP {
  BUDGET = 1,
  DETAILS = 2,
  CONFIRMATION = 3,
}

export interface FormData {
  budget: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const UserStepperForm: React.FC = () => {
  const [step, setStep] = useState<STEP>(STEP.BUDGET);
  const [formData, setFormData] = useState<FormData>({
    budget: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, STEP.CONFIRMATION));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, STEP.BUDGET));
  };

  const handleExit = () => {
    setStep(STEP.BUDGET);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  const handleRestart = () => setStep(STEP.BUDGET);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className=" mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className={`text-black hover:text-gray-900 flex gap-2 items-center ${
              step === STEP.BUDGET ? "text-gray-300  hover:text-gray-300" : ""
            }`}
            disabled={step === STEP.BUDGET}
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="text-xl">Go Back</span>
          </button>
          <button
            onClick={handleExit}
            disabled={step === STEP.BUDGET}
            className={`text-black hover:text-gray-900 flex gap-2 items-center ${
              step === STEP.BUDGET ? "text-gray-300  hover:text-gray-300" : ""
            }`}
          >
            <span className="text-xl">Exit</span>
            <X className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="bg-white">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-500 ease-in-out"
            style={{ width: `${(step / STEP.CONFIRMATION) * 100}%` }}
          />
        </div>
      </div>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[500px] w-full space-y-8 text-black p-6 rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === STEP.BUDGET && (
                <Budget
                  formData={formData}
                  setFormData={setFormData}
                  handleNext={handleNext}
                />
              )}
              {step === STEP.DETAILS && (
                <Details
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                />
              )}
              {step === STEP.CONFIRMATION && (
                <Confirmation handleRestart={handleRestart} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default UserStepperForm;
