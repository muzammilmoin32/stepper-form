import { FormData } from "../Home";

const budgetOptions = [
  "< $1,000/mo",
  "$1,000 - $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

const Budget: React.FC<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleNext: () => void;
}> = ({ formData, setFormData, handleNext }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-center">Step #1</h2>
    <h3 className="text-xl text-center">
      What is your monthly digital marketing budget?
    </h3>
    <div className="space-y-2">
      {budgetOptions.map((option) => (
        <button
          key={option}
          className={`w-full p-3 border text-gray-400 text-center rounded-sm bg-white transition-colors ${
            formData.budget === option
              ? "bg-green-100 border-green-500"
              : "hover:bg-gray-100"
          }`}
          onClick={() => {
            setFormData({ ...formData, budget: option });
            handleNext();
          }}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);
export default Budget;
