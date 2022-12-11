import React from "react";
import Layout from "../components/Layout3";
import Image from "next/image";
import Link from "next/link";

export default function wilier() {
  return (
    <Layout>
      <div className="flex">
        <div>
          <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
            <Link href={"../sub/detail"}>
              <Image
                src={"/img/GLCO/CENTO 10 SL(완성차).jpg"}
                width={500}
                height={400}
              />
            </Link>
          </div>
          <h1 className="text-center font-bold">CENTO 10 SL(완성차)</h1>
          <h2 className="text-center font-bold">4,600,000원</h2>
        </div>
        <div>
          <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
            <Image
              src={"/img/GLCO/WILIER 0 SL (완성차).jpg"}
              width={500}
              height={400}
            />
          </div>
          <h1 className="text-center font-bold">WILIER 0 SL (완성차)</h1>
          <h2 className="text-center font-bold">5,300,000원</h2>
        </div>
        <div>
          <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
            <Image
              src={"/img/GLCO/FILANTE SLR(프레임세트).jpg"}
              width={500}
              height={400}
            />
          </div>
          <h1 className="text-center font-bold">FILANTE SLR(프레임세트)</h1>
          <h2 className="text-center font-bold">5,500,000원</h2>
        </div>
        <div>
          <div class="mx-8 mt-8 mb-1 box-content h-62 w-62">
            <Image
              src={"/img/GLCO/WILIER 0 SLR (프레임 세트).jpg"}
              width={500}
              height={400}
            />
          </div>
          <h1 className="text-center font-bold">WILIER 0 SLR (프레임 세트)</h1>
          <h2 className="text-center font-bold">5,500,000원</h2>
        </div>
      </div>
    </Layout>
  );
}
