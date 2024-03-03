import SigninForm from "@/app/(auth)/(signin)/_components/SigninForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[100vh]">
      <section className="flex flex-col items-center justify-center px-4 py-2 border-[1px] border-slate-600 rounded-xl bg-slate-600 text-white">
        <h1 className="py-4 font-bold text-2xl">로그인</h1>
        <SigninForm />
        <div className="flex flex-col items-center decoration-solid underline">
          <Link href="/signup">회원가입</Link>
          <Link href="/help/inquiry">
            ApiKey / 이메일 / 비밀번호를 까먹으셨나요?
          </Link>
        </div>
      </section>
    </main>
  );
}
