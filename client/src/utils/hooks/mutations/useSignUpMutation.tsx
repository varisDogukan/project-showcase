import React from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useStore, { User } from "@/stores/zustandStore";
import customFetch from "@/utils/customFetch";
import { useMutation } from "@tanstack/react-query";

type ErrorType = {
  name: string;
  password: string;
  email: string;
};

async function signUpUser(userInfo: User) {
  const { data } = await customFetch.post("/auth/register", userInfo);
  return data;
}

export default function useSignUpMutation() {
  const { userInfo, changeSignType, clearUserInfo } = useStore();

  const [errorContainer, setErrorContainer] = React.useState<ErrorType>({
    name: "",
    password: "",
    email: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => signUpUser(userInfo),
    onSuccess: (res) => {
      toast.success(res.mgs);
      clearUserInfo();
      changeSignType();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMsg = error?.response?.data.msg;

        const newErrorContainer = {
          name: "",
          password: "",
          email: "",
        };

        errorMsg.split(",").forEach((err: string) => {
          const [key, message] = err.split(": ").map((part) => part.trim());
          if (key in newErrorContainer) {
            newErrorContainer[key as keyof ErrorType] += `${message}, `;
          }
        });

        setErrorContainer(newErrorContainer);
      }
    },
  });

  return { mutate, isPending, errorContainer, setErrorContainer };
}
