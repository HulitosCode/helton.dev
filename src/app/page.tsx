"use client"
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import {motion} from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{
        opacity: 1,
        y: 0,
	  transition:{duration:1}
      }}
    >
     <div className="py-20">
      <svg viewBox="0 0 1024 1024" className="absolute top-1/8 left-1/3 -z-10 size-[45rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/img.png"
            alt="Profile picture"
            width={80}
            height={80}
            className="rounded-full border-4 border-purple-600"
          />
        </div>
        <h1 className="font-bold text-4xl py-4 text-center text-purple-600">
          <strong>
          👋 Olá, eu sou <span className="dark:text-white">Helton!</span>  
          </strong>
        </h1>
        <br></br>

        <p className="text-center text-muted-foreground">
          <strong className="text-purple-600">💻 Desenvolvedor Full Stack</strong>{" "}
          apaixonado por criar soluções robustas, escaláveis e de alto desempenho. Tenho expertise em JavaScript, TypeScript, React, Next.js, Node.js, NestJS, Prisma, Postgres, Express e Docker, desenvolvendo aplicações modernas, eficientes e bem estruturadas.
        </p>
        <div className="flex items-center justify-center py-4 gap-4">
        <Button className="rounded-full dark:bg-purple-600 dark:text-foreground dark:hover:text-black">
            Me acompanhe no Linkedin
            <LinkedinIcon />

          </Button>
          <Button  className="rounded-full dark:bg-purple-600 dark:text-foreground dark:hover:text-black">
            Meu Github
            <GithubIcon />
          </Button>
        </div>
        <div className=" mt-6 flex items-center justify-center">
          <Image
            src="/p7.jpg"
            alt="Profile picture"
            width={600}
            height={100}
            className="rounded-xl border-4 border-purple-600"
          />
        </div>
      </div>
    </motion.div>
      
    </>
  );
};

export default Home;
