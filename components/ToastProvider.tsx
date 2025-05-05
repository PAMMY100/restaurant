"use client";
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Optional: Type-safe container props
const toastOptions: ToastContainerProps = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: true,
};

export default function ToastProvider() {
  return <ToastContainer {...toastOptions} />;
}