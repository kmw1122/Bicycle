import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Modal from "./Modal";
import React, { useState } from "react";
import Data from "../../utils/data";
import axios from "axios";

export default function Layout({ title, children }) {
  const [query, setQuery] = useState({
    brand: [],
    type: [],
    gears: [],
    breakType: [],
    material: [],
    minweight: [],
    maxwweight: [],
    minprice: [],
    maxprice: [],
  });

  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = async (checked, id) => {
    const newquery = { ...query };
    var tmp;
    if (id.includes("b")) {
      var filt = "brand";
      if (id === "b1") tmp = Data.filter.b1;
      if (id === "b2") tmp = Data.filter.b2;
      if (id === "b3") tmp = Data.filter.b3;
      if (id === "b4") tmp = Data.filter.b4;
      if (id === "b5") tmp = Data.filter.b5;
      if (id === "b6") tmp = Data.filter.b6;
      if (id === "b7") tmp = Data.filter.b7;
      if (id === "b8") tmp = Data.filter.b8;
      if (id === "b9") tmp = Data.filter.b9;
      if (id === "b10") tmp = Data.filter.b10;
      if (id === "b11") tmp = Data.filter.b11;
      if (id === "b12") tmp = Data.filter.b12;
      if (id === "b13") tmp = Data.filter.b13;
      if (id === "b14") tmp = Data.filter.b14;
      if (id === "b15") tmp = Data.filter.b15;
      if (id === "b16") tmp = Data.filter.b16;
      if (id === "b17") tmp = Data.filter.b17;
      if (id === "b18") tmp = Data.filter.b18;
      if (id === "b19") tmp = Data.filter.b19;
      if (id === "b20") tmp = Data.filter.b20;
      if (id === "b21") tmp = Data.filter.b21;
      if (id === "b22") tmp = Data.filter.b22;
      if (id === "b23") tmp = Data.filter.b23;
      if (id === "b24") tmp = Data.filter.b24;
      if (id === "b25") tmp = Data.filter.b25;
      if (id === "b26") tmp = Data.filter.b26;
      if (id === "b27") tmp = Data.filter.b27;
      if (id === "b28") tmp = Data.filter.b28;
      if (id === "b29") tmp = Data.filter.b29;
      if (id === "b30") tmp = Data.filter.b30;
      if (id === "b31") tmp = Data.filter.b31;
      if (id === "b32") tmp = Data.filter.b32;
      if (id === "b33") tmp = Data.filter.b33;
      if (id === "b34") tmp = Data.filter.b34;
      if (id === "b35") tmp = Data.filter.b35;
      if (id === "b36") tmp = Data.filter.b36;
      if (id === "b37") tmp = Data.filter.b37;
      if (id === "b38") tmp = Data.filter.b38;
      if (id === "b39") tmp = Data.filter.b39;
      if (id === "b40") tmp = Data.filter.b40;
      if (id === "b41") tmp = Data.filter.b41;
    }

    if (id.includes("t")) {
      var filt = "type";
      if (id === "t1") tmp = Data.filter.t1;
      if (id === "t2") tmp = Data.filter.t2;
      if (id === "t3") tmp = Data.filter.t3;
      if (id === "t4") tmp = Data.filter.t4;
    }

    if (id.includes("g")) {
      var filt = "gears";
      if (id === "g1") tmp = Data.filter.g1;
      if (id === "g2") tmp = Data.filter.g2;
      if (id === "g3") tmp = Data.filter.g3;
      if (id === "g4") tmp = Data.filter.g4;
      if (id === "g5") tmp = Data.filter.g5;
    }

    if (id.includes("BT")) {
      var filt = "breakType";
      if (id == "BT1") tmp = Data.filter.BT1;
      if (id == "BT2") tmp = Data.filter.BT2;
    }

    if (id.includes("m")) {
      var filt = "material";
      if (id == "m1") tmp = Data.filter.m1;
      if (id == "m2") tmp = Data.filter.m2;
    }

    if (id.includes("w")) {
      var filt = "weight";
      if (id == "w1") {
      }
    }

    if (id.includes("p")) {
      var filt = "price";
    }

    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      newquery[filt].splice(0, 0, tmp);
      setQuery(newquery);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      newquery[filt].splice(newquery[filt].indexOf(tmp), 1);
    }
    console.log(query[filt]);

    await axios.post("/api/select", { query }).then((res) => {
      console.log(res.data.read);
    });
  };

  const refresh = () => {
    window.location.reload();
  };

  function checkAll() {
    let isChecked = document.getElementById("chkall").checked;
    let chks = document.getElementsByName("ca[]");
    for (let i = 0; i < chks.length; i++) {
      chks[i].checked = isChecked;
    }
  }
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
        <div className="flex">
          <div className="w-2/12 bg-gray-200 pl-4">
            <div className="py-1">
              <h1 className="font-black">제품명</h1>
              <label>
                <input type="text" className="w-6/12 rounded-sm" />
                &nbsp;
                <button className="border-solid border-1 bg-white">검색</button>
              </label>
            </div>
            <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
            <div className="flex flex-col h-76 leading-8 overflow-x-hidden">
              <h1 className="font-black">브랜드</h1>
              <label>
                <input type="checkbox" id="chkall" onClick={checkAll} />
                <span className="font-semibold"> 전부포함</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ca[]"
                  value="b9"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b9");
                  }}
                  checked={checkedInputs.includes("b9") ? true : false}
                />
                <span className="font-semibold"> 비앙키(BIANCHI)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ca[]"
                  value="b10"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b10");
                  }}
                  checked={checkedInputs.includes("b10") ? true : false}
                />
                <span className="font-semibold"> 구스토(GUSTO)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ca[]"
                  value="b11"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b11");
                  }}
                  checked={checkedInputs.includes("b11") ? true : false}
                />
                <span className="font-semibold"> 타임(TIME)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ca[]"
                  value="b22"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b22");
                  }}
                  checked={checkedInputs.includes("b22") ? true : false}
                />
                <span className="font-semibold"> 예거(JAEGER)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ca[]"
                  value="b23"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b23");
                  }}
                  checked={checkedInputs.includes("b23") ? true : false}
                />
                <span className="font-semibold"> 팩터(FACTOR)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ca[]"
                  value="b24"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b24");
                  }}
                  checked={checkedInputs.includes("b24") ? true : false}
                />
                <span className="font-semibold"> 윌리어(WILIER)</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="ca[]"
                  value="b41"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b41");
                  }}
                  checked={checkedInputs.includes("b41") ? true : false}
                />
                <span className="font-semibold"> 인세인(INSAINNE)</span>
              </label>
            </div>
            <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
            <div className="flex flex-col leading-8">
              <h1 className="font-black">분류</h1>
              <label>
                <input
                  type="checkbox"
                  name="cb[]"
                  value="t1"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "t1");
                  }}
                  checked={checkedInputs.includes("t1") ? true : false}
                />
                <span className="font-semibold"> 로드(ROAD)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cb[]"
                  value="t2"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "t2");
                  }}
                  checked={checkedInputs.includes("t2") ? true : false}
                />
                <span className="font-semibold"> 사이클로크로스(CX)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cb[]"
                  value="t3"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "t3");
                  }}
                  checked={checkedInputs.includes("t3") ? true : false}
                />
                <span className="font-semibold"> 그래블(GRAVEL)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cb[]"
                  value="t4"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "t4");
                  }}
                  checked={checkedInputs.includes("t4") ? true : false}
                />
                <span className="font-semibold"> 타임트라이얼(TT)</span>
              </label>
            </div>
            <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
            <div className="flex flex-col leading-8">
              <h1 className="font-black">기어수</h1>
              <label>
                <input
                  type="checkbox"
                  name="cc[]"
                  value="g1"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "g1");
                  }}
                  checked={checkedInputs.includes("g1") ? true : false}
                />
                <span className="font-semibold"> 16단(클라리스)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cc[]"
                  value="g2"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "g2");
                  }}
                  checked={checkedInputs.includes("g2") ? true : false}
                />
                <span className="font-semibold"> 18단(소라)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cc[]"
                  value="g3"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "g3");
                  }}
                  checked={checkedInputs.includes("g3") ? true : false}
                />
                <span className="font-semibold"> 20단(티아그라)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cc[]"
                  value="g4"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "g4");
                  }}
                  checked={checkedInputs.includes("g4") ? true : false}
                />
                <span className="font-semibold"> 22단(105)</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cc[]"
                  value="g5"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "g5");
                  }}
                  checked={checkedInputs.includes("g5") ? true : false}
                />
                <span className="font-semibold">
                  {" "}
                  24단(105 Di2, 울테그라, 듀라에이스)
                </span>
              </label>
            </div>
            <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
            <div className="flex flex-col leading-8">
              <h1 className="font-black">브레이크 타입</h1>
              <label>
                <input
                  type="checkbox"
                  name="cd[]"
                  value="BT1"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "BT1");
                  }}
                  checked={checkedInputs.includes("BT1") ? true : false}
                />
                <span className="font-semibold"> 디스크 브레이크</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cd[]"
                  value="BT2"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "BT2");
                  }}
                  checked={checkedInputs.includes("BT2") ? true : false}
                />
                <span className="font-semibold"> 림 브레이크</span>
              </label>
            </div>
            <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
            <div className="flex flex-col leading-8">
              <h1 className="font-black">소재</h1>
              <label>
                <input
                  type="checkbox"
                  name="ce[]"
                  value="m1"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "m1");
                  }}
                  checked={checkedInputs.includes("m1") ? true : false}
                />
                <span className="font-semibold"> 알루미늄</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ce[]"
                  value="m2"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "m2");
                  }}
                  checked={checkedInputs.includes("m2") ? true : false}
                />
                <span className="font-semibold"> 카본</span>
              </label>
            </div>
            <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
            <div className="flex flex-col leading-7">
              <h1 className="font-black">무게</h1>
              <label>
                <input type="text" className="w-4/12 rounded-sm" />
                ~
                <input type="text" className="w-4/12 rounded-sm" />
                kg
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cf[]"
                  value="w1"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "w1");
                  }}
                  checked={checkedInputs.includes("w1") ? true : false}
                />
                <span className="font-semibold"> 6kg이하</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cf[]"
                  value="w2"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "w2");
                  }}
                  checked={checkedInputs.includes("w2") ? true : false}
                />
                <span className="font-semibold"> 6kg ~ 7kg</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cf[]"
                  value="w3"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "w3");
                  }}
                  checked={checkedInputs.includes("w3") ? true : false}
                />
                <span className="font-semibold"> 7.1kg ~ 8kg</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cf[]"
                  value="w4"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "w4");
                  }}
                  checked={checkedInputs.includes("w4") ? true : false}
                />
                <span className="font-semibold"> 8.1kg ~ 9kg</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cf[]"
                  value="w5"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "w5");
                  }}
                  checked={checkedInputs.includes("w5") ? true : false}
                />
                <span className="font-semibold"> 10kg이상</span>
              </label>
            </div>
            <hr className="w-11/12 my-2 border-0 h-0.5 bg-black" />
            <div className="flex flex-col leading-7">
              <h1 className="font-black">가격</h1>
              <label>
                <input type="text" className="w-4/12 rounded-sm" />
                ~
                <input type="text" className="w-4/12 rounded-sm" />원
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cg[]"
                  value="p1"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "p1");
                  }}
                  checked={checkedInputs.includes("p1") ? true : false}
                />
                <span className="font-semibold"> 100만원 이하</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cg[]"
                  value="p2"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "p2");
                  }}
                  checked={checkedInputs.includes("p2") ? true : false}
                />
                <span className="font-semibold"> 300만원 이하</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cg[]"
                  value="p3"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "p3");
                  }}
                  checked={checkedInputs.includes("p3") ? true : false}
                />
                <span className="font-semibold"> 500만원 이하</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cg[]"
                  value="p4"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "p4");
                  }}
                  checked={checkedInputs.includes("p4") ? true : false}
                />
                <span className="font-semibold"> 700만원 이하</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cg[]"
                  value="p5"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "p5");
                  }}
                  checked={checkedInputs.includes("p5") ? true : false}
                />
                <span className="font-semibold"> 1000만원 이하</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="cg[]"
                  value="p6"
                  onChange={(e) => {
                    changeHandler(e.currentTarget.checked, "b17");
                  }}
                  checked={checkedInputs.includes("p6") ? true : false}
                />
                <span className="font-semibold"> 2000만원 이하</span>
              </label>
            </div>
            <button
              onClick={refresh}
              className="border-solid border-2 bg-white my-3 mr-4 px-2 py-1 hover:bg-gray-300"
            >
              초기화
            </button>
            <Link href={"../bicycle/wilier"}>
              <button
                // onClick={submithandler} 서브밋핸들러
                type="submit"
                className="border-solid border-2 bg-white my-3 px-2 py-1 hover:bg-gray-300"
              >
                검색하기
              </button>
            </Link>
          </div>
          <main className="w-10/12 bg-white">{children}</main>
        </div>
        <footer className="flex h-20 justify-center items-center shadow-inner bg-blue-100">
          <p>Copyright &copy; 2022 CycleSC_BicycleRecommendation</p>
        </footer>
      </div>
    </Fragment>
  );
}
