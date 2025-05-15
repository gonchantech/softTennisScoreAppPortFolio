"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/button/Button";
import { InputField } from "@/components/form";
import styles from "./LoginForm.module.css";
import { useLogin } from "@/features/auth/api/login";
import { useRouter, useSearchParams } from "next/navigation";

type LoginFormData = {
  id: string;
  name: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();
  const router = useRouter();
  const redirect = useSearchParams().get("redirect") as string;
  const onSuccess = () => {
    console.log("onSuccessが呼ばれてまっせ");
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  };

  const login = useLogin({ onSuccess });

  const onSubmit = async (data: LoginFormData) => {
    login.submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputField
        id="userId"
        label="ID"
        type="text"
        {...register("id", { required: "IDは必須です" })}
        error={errors.id?.message}
        placeholder="IDを入力"
        size="md"
      />

      <InputField
        id="userName"
        label="名前"
        type="text"
        {...register("name", { required: "名前は必須です" })}
        error={errors.name?.message}
        placeholder="名前を入力"
        size="md"
      />

      <InputField
        id="password"
        label="パスワード"
        type="password"
        {...register("password", { required: "パスワードは必須です" })}
        error={errors.password?.message}
        placeholder="••••••••"
        size="md"
      />

      <Button
        type="submit"
        color="primary"
        size="md"
        isLoading={isSubmitting}
        fullWidth
      >
        ログイン
      </Button>
    </form>
  );
};
