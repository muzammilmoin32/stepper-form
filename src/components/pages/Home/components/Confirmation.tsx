const Confirmation: React.FC<{ handleRestart: () => void }> = ({
  handleRestart,
}) => (
  <div className="space-y-6 text-center">
    <div className="w-24 h-24 mx-auto bg-gray-200" />
    <h2 className="text-2xl font-bold">
      Your Request for a Proposal Has Been Submitted!
    </h2>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam in
      gravida parturient urna tristique congue.
    </p>
    <button
      onClick={handleRestart}
      className="px-4 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600 transition-colors"
    >
      Return Home
    </button>
  </div>
);
export default Confirmation;
