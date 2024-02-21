import React from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useStore, { User } from "@/stores/zustandStore";
import customFetch from "@/utils/customFetch";
import { useMutation } from "@tanstack/react-query";

type ErrorType = {
  password: string;
  email: string;
};

async function signInUser(userInfo: User) {
  const { data } = await customFetch.post("/auth/login", userInfo);
  return data;
}

export default function useSignInMutation() {
  const { userInfo, showSignModal } = useStore();

  const [errorContainer, setErrorContainer] = React.useState<ErrorType>({
    password: "",
    email: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      signInUser({ email: userInfo.email, password: userInfo.password }),
    onSuccess: (res) => {
      toast.success(res.mgs);
      showSignModal();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMsg = error?.response?.data.msg;

        const newErrorContainer = {
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
