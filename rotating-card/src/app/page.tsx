import Image from "next/image";
import './page.scss'

export default function Home() {
  return (
   <div className="wrapper">
  <div className="card">Hello, This is a component styled with sass ie .scss
    @mkrs
  </div>
  <div className="ring"></div>
  <div className="shadow"></div>
</div>
  );
}
