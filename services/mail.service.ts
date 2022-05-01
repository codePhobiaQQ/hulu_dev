import axios from "axios";

export const mailService = async (
  company: string,
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  const response = axios.post("http://localhost:3000/api/mail", {
    company,
    name,
    email,
    phone,
    message,
  });
  return response;
};
