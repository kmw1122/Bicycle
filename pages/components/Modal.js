import React, { useState } from 'react'
import Link from 'next/link'

const TestModals = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex md:flex-col justify-center items-center mt-2 ">
      <div className="flex gap-5 ">
        <button
          className="font-semibold text-lg text-red-500 hover:text-blue-500"
          type="button"
          onClick={() => setShowModal(true)}
        >
          📢 안녕하세요 자전거 추천서비스 CycleSC입니다!
        </button>
      </div>
      {showModal ? (
        <div className="mx-auto fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-75">
          <h2 className="text-base mt-72 mx-4 text-white font-semibold text-center">
            91812969 정보보호학과 18학번 이진욱
            <Link href={'https://portfolio-jinuk0316.vercel.app/'}>
              <a className="hover:text-blue-500">
                {' '}
                &quot;이진욱_포트폴리오&quot;
              </a>
            </Link>
            <br />
            91813286 정보보호학과 18학번 허현
            <Link href={'https://portfolio-hurhyeon.vercel.app/'}>
              <a className="hover:text-blue-500">
                {' '}
                &quot;허현_포트폴리오&quot;
              </a>
            </Link>
            <br />
            91813298 정보보호학과 18학번 홍승현
            <Link href={'https://portfolio-fawn-tau-77.vercel.app/'}>
              <a className="hover:text-blue-500">
                {' '}
                &quot;홍승현_포트폴리오&quot;
              </a>
            </Link>
            <br />
            91812074 정보보호학과 18학번 강형욱
            <Link href={'https://pofol-c0mm4.vercel.app/'}>
              <a className="hover:text-blue-500">
                {' '}
                &quot;강형욱_포트폴리오&quot;
              </a>
            </Link>
            <br />
            92015001 정보보호학과 20학번 김민우
            <Link href={'https://portfolio-kmw-a8ea-kmw1122.vercel.app/'}>
              <a className="hover:text-blue-500">
                {' '}
                &quot;김민우_포트폴리오&quot;
              </a>
            </Link>
            <br />
            <Link href={'https://youtu.be/H1qZ0wb6Ebk'}>
              <a className="text-red-500 hover:text-orange-500">유투브</a>
            </Link>
            <br />
            <br />
            Copyright &copy; 2022 CycleSC_BicycleRecommendation
          </h2>
          <button
            className="mt-80 mx-auto w-1/2 px-8 h-10 bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow font-semibold absolute left-1/4"
            onClick={() => setShowModal(false)}
          >
            모달창닫기
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default TestModals
