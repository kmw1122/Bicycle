import React from "react";
import Layout from "./components/Layout";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Home">
      <Marquee>
        <div className="flex w-full h96 mt-1">
          <img src="\images\one.jpg" width="700" height="700"></img>
          <div className="mx-5"></div>
          <img src="\images\two.jpg" width="700" height="700"></img>
          <div className="mx-5"></div>
          <img src="\images\three.jpg" width="700" height="700"></img>
          <div className="mx-5"></div>
          <img src="\images\four.jpg" width="700" height="700"></img>
          <div className="mx-5"></div>
          <img src="\images\five.png" width="700" height="700"></img>
          <div className="mx-5"></div>
          <img src="\images\six.png" width="700" height="700"></img>
          <div className="mx-5"></div>
          <img src="\images\seven.jpg" width="700" height="700"></img>
        </div>
      </Marquee>
      <div className="my-52">
        <div className="w-11/12 max-w-screen-lg my-0 mx-auto">
          <ul className="flex">
            <li className="mx-5 border-solid border-2 border-red-700 rounded">
              <Link href={"/login"}>
                <a>
                  <img src="images/blog33.jpg" />
                </a>
              </Link>
              <Link href={"/login"}>
                <a>
                  <h3 className="text-black font-normal text-xl leading-relaxed text-center">
                    자전거 추천 받으러 가기
                  </h3>
                </a>
              </Link>
            </li>
            <li className="mx-5 border-solid border-2 border-red-700 rounded">
              <Link href={"/sub/second"}>
                <a>
                  <img src="images/blog22.jpg" />
                </a>
              </Link>
              <Link href={"/sub/second"}>
                <a>
                  <h3 className="text-black font-normal text-xl leading-relaxed text-center">
                    수입사 사이트 바로가기
                  </h3>
                </a>
              </Link>
            </li>
            <li className="mx-5 border-solid border-2 border-red-700 rounded">
              <Link href={"https://corearoadbike.com/"} passHref>
                <a>
                  <img src="images/blog11.jpg" />
                </a>
              </Link>
              <Link href={"https://corearoadbike.com/"} passHref>
                <a>
                  <h3 className="text-black font-normal text-xl leading-relaxed text-center">
                    도싸 바로가기
                  </h3>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
