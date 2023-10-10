import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          form_name: form.name,
          to_name: "Liron",
          from_email: form.email,
          to_email: "contact@mail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiA5c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
