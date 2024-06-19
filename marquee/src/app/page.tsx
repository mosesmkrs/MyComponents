/* eslint-disable @next/next/no-img-element */
"use client"
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
     <Marquee 
          direction="ltr"
          velocity={30}
          scatterRandomly={false}
          resetAfterTries={100}
          onInit={() => console.log('Marquee initialized')}
          onFinish={({ totalTries }) => console.log(`Marquee finished after ${totalTries} tries`)}
          
        >
          <img src="/images/html.png" alt="HTML Logo" className="h-12 mx-2" />
          <img src="/images/react.png" alt="React Logo" className="h-12 mx-2" />
          <img src="/images/next.png" alt="Next.js Logo" className="h-12 mx-2" />
          <img src="/images/css.png" alt="CSS Logo" className="h-12 mx-2" />
          <img src="/images/js.png" alt="Javascript Logo" className="h-12 mx-2" />
          <img src="/images/Blockchain.png" alt="Blockchain Logo" className="h-12 mx-2" />
          <img src="/images/nodejs.webp" alt="Node.js Logo" className="h-12 mx-2" />
          <img src="/images/Sql.png" alt="SQL Logo" className="h-12 mx-2" />
          <img src="/images/firebase.png" alt="Firebase Logo" className="h-12 mx-2" />
          <img src="/images/python.png" alt="Python Logo" className="h-12 mx-2" />
          <img src="/images/cpp.png" alt="C++ Logo" className="h-12 mx-2" />
          <img src="/images/sol.png" alt="Solidity Logo" className="h-12 mx-2" />
          <img src="/images/eth.png" alt="Ethereum Logo" className="h-12 mx-2" />
          <img src="/images/ts.png" alt="Typescript Logo" className="h-12 mx-2" />
          <img src="/images/C_Logo.png" alt="C Logo" className="h-12 mx-2" />


        </Marquee>

  );
}
