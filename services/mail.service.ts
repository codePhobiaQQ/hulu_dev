import axios from "axios";

export const mailService = async (
  company: string,
  name: string,
  email: string,
  phone: string,
  message: string,
  address: string
) => {
  const response = axios.post(`${address}/api/mail`, {
    company,
    name,
    email,
    phone,
    message,
  });
  return response;
};
