import Image from "next/image";
import UserStepperForm from "./components/pages/Home/UserStepperForm";

export const metadata = {
  title: "User Stepper Form Page",
  description:
    "A simple form that uses a stepper to guide the user through the process",
};

export default function Home() {
  return (
    <div>
      <UserStepperForm />
    </div>
  );
}
