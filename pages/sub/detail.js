import React, { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Detail() {
  return (
    <Layout>
      <div className="flex">
        <div className="w-9/12 mx-auto h-full text-center bg-white">
          <h1 className="text-4xl my-4">CENTO 10 SL(완성차)</h1>
          <Image
            src={"/img/GLCO/CENTO 10 SL(완성차).jpg"}
            width={500}
            height={400}
          />
          <div className="grid place-items-center">
            <table className="border-4 w-8/12 border-stone-400">
              <tbody>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border w-96  text-right font-bold bg-slate-200 pr-2">
                    브랜드
                  </td>
                  <td>윌리어(WILIER)</td>
                </tr>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border text-right font-bold bg-slate-200 pr-2">
                    모델명
                  </td>
                  <td>CENTO 10 SL(완성차)</td>
                </tr>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border text-right font-bold bg-slate-200 pr-2">
                    분류
                  </td>
                  <td>로드(ROAD)</td>
                </tr>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border text-right font-bold bg-slate-200 pr-2">
                    프레임소재
                  </td>
                  <td>카본(CARBON)</td>
                </tr>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border text-right font-bold bg-slate-200 pr-2">
                    기어&구동계
                  </td>
                  <td>22단 / 울테그라R8000</td>
                </tr>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border text-right font-bold bg-slate-200 pr-2">
                    브레이크타입
                  </td>
                  <td>디스크브레이크(DISK)</td>
                </tr>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border text-right font-bold bg-slate-200 pr-2">
                    무게
                  </td>
                  <td>8.35Kg</td>
                </tr>
                <tr className="border-2 h-10 border-stone-300">
                  <td className="border text-right font-bold bg-slate-200 pr-2">
                    공식가격
                  </td>
                  <td>4,600,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-pink-500 font-bold text-left ml-96 my-4">
            ※ 제품의 참고용 간략 정보입니다.
            <br />
            ※ 사양이 정확하지 않거나 변경되었을 수 있습니다.
            <br />※ 자세한 사양은 공식홈페이지를 참고해주세요.
          </p>
        </div>
      </div>
    </Layout>
  );
}
