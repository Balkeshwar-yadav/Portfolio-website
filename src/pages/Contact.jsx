import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = async (e) => {
    e.preventDefault();
   const res =  await axios.post("https://portfolio-backend-1-7prp.onrender.com/api/contact", form);
    let name = res.data.name;

    setForm({name:"", email:"", message:""});
    alert(`Hello ${name} your message send successfully!`);
  };

  return (
    <section id="contact" className="py-30 px-6">
      <h2 className="text-3xl text-center mb-8">Contact Me</h2>

      <motion.form 
        onSubmit={submit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input 
        value={form.name}
          className="p-3 rounded bg-gray-200"
          placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})}
        />

        <input 
        value={form.email}
          className="p-3 rounded bg-gray-200"
          placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})}
        />

        <textarea 
        value={form.message}
          className="p-3 rounded bg-gray-200"
          placeholder="Message"
          onChange={e => setForm({...form, message: e.target.value})}
        />

        <button className="bg-blue-500 p-3 rounded-xl hover:bg-blue-600">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}