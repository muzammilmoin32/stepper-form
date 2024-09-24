import { FormData } from "../Home";

const Details: React.FC<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmit: (e: React.FormEvent) => void;
}> = ({ formData, setFormData, handleSubmit }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-center">Step #2</h2>
    <h3 className="text-xl text-center">Details</h3>
    <p className="text-center text-gray-600">
      We&apos;re thrilled at the opportunity to help you grow your business
      online. Please let us know the best way to reach you.
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-sm"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="flex gap-2 flex-col md:flex-row ">
        <div className="flex w-full flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-sm"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="w-full p-2 border rounded-sm"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Anything else you'd like to share?</label>
        <textarea
          className="w-full p-2 border rounded-sm"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <button
        type="submit"
        className="mx-auto min-w-28 py-2 px-5 flex bg-green-500 text-white rounded-sm hover:bg-green-600 transition-colors"
      >
        Send Request
      </button>
    </form>
    <div className="flex gap-3 mx-auto justify-center items-center ">
      <svg
        width="15"
        height="17"
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 4.5V6.5H10.5V4.5C10.5 2.84375 9.15625 1.5 7.5 1.5C5.84375 1.5 4.5 2.84375 4.5 4.5ZM3.5 6.5V4.5C3.5 2.3125 5.28125 0.5 7.5 0.5C9.6875 0.5 11.5 2.3125 11.5 4.5V6.5H12C13.375 6.5 14.5 7.625 14.5 9V14C14.5 15.4062 13.375 16.5 12 16.5H3C1.59375 16.5 0.5 15.4062 0.5 14V9C0.5 7.625 1.59375 6.5 3 6.5H3.5ZM1.5 9V14C1.5 14.8438 2.15625 15.5 3 15.5H12C12.8125 15.5 13.5 14.8438 13.5 14V9C13.5 8.1875 12.8125 7.5 12 7.5H3C2.15625 7.5 1.5 8.1875 1.5 9Z"
          fill="#6B7280"
        />
      </svg>
      <p className="text-center text-sm text-gray-500">
        We promise never to share your information or spam your inbox.
      </p>
    </div>
  </div>
);
export default Details;
