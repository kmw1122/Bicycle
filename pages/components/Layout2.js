import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Modal from "./Modal";

export default function Layout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title ? title + " - CycleSC" : "CycleSC"}</title>
        <meta name="description" content="BicycleRecommendation" />
        <meta name="author" content="FactorTeam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header>
          <nav className="flex px-8 py-3 justify-between">
            <Link href="/">
              <a className="text-5xl">CycleSC</a>
            </Link>
            <div className="pt-3">
              <Link href="/">
                <a className="text-2xl">로그아웃</a>
              </Link>
              &nbsp;<a className="text-2xl text-gray-300">|</a>&nbsp;
              <Link href="/register">
                <a className="text-2xl">회원가입</a>
              </Link>
            </div>
          </nav>
          <hr />
          <div className="flex px-8 py-3 justify-between">
            <div>
              <Modal />
            </div>

            <div className="flex">
              <Link href={"/"} passHref>
                <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                  메인으로 가기
                </button>
              </Link>

              <Link href={"/sub/${recommend.slug}"} passHref>
                <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                  자전거 추천 받으러 가기
                </button>
              </Link>

              <Link href={"/sub/second"} passHref>
                <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                  수입사 사이트 바로가기
                </button>
              </Link>

              <Link href={"https://corearoadbike.com/"} passHref>
                <button className="mx-2 py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-700">
                  도싸 바로가기
                </button>
              </Link>
            </div>

            <div className="flex border-solid border-2 border-grey-100 rounded p-2">
              <form
                method="get"
                action="http://www.google.co.kr/search"
                target="_blank"
              >
                <input type="text" name="q" placeholder="search" />
                <input type="submit" name="btnG" value="🔍" />
              </form>
            </div>
          </div>
          <hr />
        </header>
        <main className="my-auto">{children}</main>
        <footer className="flex h-20 justify-center items-center shadow-inner bg-blue-100">
          <p>Copyright &copy; 2022 CycleSC_BicycleRecommendation</p>
        </footer>
      </div>
    </Fragment>
  );
}
