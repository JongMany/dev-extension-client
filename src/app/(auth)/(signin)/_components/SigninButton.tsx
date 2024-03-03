import { useRouter } from "next/navigation";
import { type Signin } from "@/models/auth/auth.model";
import { signIn } from "next-auth/react";
// import { signin } from "@/app/(auth)/(signin)/_utils/signin";

type Props = {
  form: Signin;
};

export default function SigninButton({ form }: Props) {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const data = await signin(form);
    const response = await signIn("credentials", {
      email: form.email,
      password: form.password,
      apiKey: form.apiKey,
      redirect: false,
    });
    console.log(response);
    // console.log(data);
    if (response?.error) {
      console.log(response.error);
    } else {
      router.push("/main");
    }
  };

  return <button onClick={handleSubmit}>로그인</button>;
}
