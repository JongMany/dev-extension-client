"use client";
import { useState } from "react";

export const useForm = <T>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return { form, onChange, setForm, resetForm };
};

export const useFormWithDate = <T>(initialForm: T) => {
  const { form, setForm, onChange } = useForm(initialForm);
  const changeDate = (date: Date, name: string) => {
    setForm({ ...form, [name]: date });
  };
  return { form, onChange, changeDate };
};
