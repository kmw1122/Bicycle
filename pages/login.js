import React from "react";
import Layout from "./components/Layout";
import Link from "next/link";

export default function login() {
  const googleLoginHandler = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signIn("google", {
        redirect: false,
      });
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const kakaoLoginHandler = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signIn("kakao", {
        redirect: false,
      });
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const naverLoginHandler = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signIn("naver", {
        redirect: false,
      });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <div className="mx-auto max-w-screen-md px-2 py-2 border-4 border-solid">
        <h1 className="mb-16 text-7xl text-center font-semibold">Login</h1>
        <form
          action="api/login"
          method="post"
          className="border-2 border-solid p-2 max-w-screen-sm mx-auto"
        >
          <div className="flex flex-col mb-4">
            <input
              type="id"
              name="userid"
              className="mb-2 p-2 border-2 border-solid"
              placeholder="아이디"
            ></input>
            <input
              type="password"
              name="password"
              className="p-2 border-2 border-solid"
              placeholder="비밀번호"
            ></input>
          </div>
          <div className="flex mb-4 justify-center">
            <div>
              <input
                type="submit"
                className="basic-button mx-0.5 w-40 font-semibold"
                value="로그인 하기"
              ></input>
            </div>
            <div>
              <Link href="/register">
                <button className="basic-button mx-0.5 w-40 font-semibold">
                  회원가입하기
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-green-500 py-2 shadow outline-none hover:bg-green-600 active:bg-green-700 w-72 font-medium"
                type="button"
                onClick={naverLoginHandler}
              >
                Naver Login
              </button>
            </div>
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-slate-200 py-2 shadow outline-none hover:bg-slate-300 active:bg-slate-400 w-72 font-medium"
                type="button"
                onClick={googleLoginHandler}
              >
                Google Login
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-amber-400 py-2 shadow outline-none hover:bg-amber-500 active:bg-amber-600 w-72 font-medium"
                type="button"
                onClick={kakaoLoginHandler}
              >
                Kakao Login
              </button>
            </div>
            <div className="mb-2 w-full text-center">
              <button
                className="rounded bg-blue-600 py-2 shadow outline-none hover:bg-blue-700 active:bg-blue-800 w-72 font-medium"
                type="button"
                onClick="#"
              >
                Facebook Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
