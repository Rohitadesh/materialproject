"use client"
import Image from "next/image";
import Login from "../app/Login/page"
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  return (
    <>
      <button  className="border border-black" onClick={()=>route.push("/Login")}>
          Login
      </button>
      <button className="border borer-black " onClick={()=>route.push("/Work")}>
        Home
      </button>
    </>
    
  );
}
