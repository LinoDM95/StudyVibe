import { div, input } from "framer-motion/client";


interface InputFieldProps {
placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder }) => {



  return (
<input placeholder={placeholder} className="bg-white border-2 rounded-full px-4 py-2 font-manrope">

</input>
  );
};

export default InputField;
