import Birthdays from "@/components/Birthdays";
import Departments from "@/components/Departments";
import Testimonies from "@/components/Testimonies";

const page = () => {
  return (
    <div>
      <Departments />
      <Testimonies />
      <Birthdays />
    </div>
  );
};

export default page;
