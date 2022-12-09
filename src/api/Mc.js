import axios from "axios";

// const urlMerchant = "https://multi-mer-1.vercel.app/merchant";
const urlMerchant = "https://multi-mer-1-erkd0r26c-sandhyalavuri07-gmailcom.vercel.app/merchant";
export const fetchMerchant = () => axios.get(urlMerchant)
export const createMerchant = (newMerchant)=> axios.post(urlMerchant,newMerchant);
export const updateMerchant =(id,updateMerchant)=>axios.patch(`${urlMerchant}/${id}`,updateMerchant);
export const deleteMerchant = (id)=> axios.delete(`${urlMerchant}/${id}`);

const urlCustomer = "https://multi-mer-1-erkd0r26c-sandhyalavuri07-gmailcom.vercel.app/customer";
export const fetchCustomer = () => axios.get("https://multi-mer-1-erkd0r26c-sandhyalavuri07-gmailcom.vercel.app/customer")
export const createCustomer = (newCustomer)=> axios.post(urlCustomer,newCustomer);
export const updateCustomer =(id,updateCustomer)=>axios.patch(`${urlCustomer}/${id}`,updateCustomer);
export const deleteCustomer = (id)=> axios.delete(`${urlCustomer}/${id}`);