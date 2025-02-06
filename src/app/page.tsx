"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const tecnologias = [
  { nome: "JavaScript", imgSrc: "/JavaScript.png" },
  { nome: "TypeScript", imgSrc: "/TypeScript.png" },
  { nome: "NestJS", imgSrc: "/Nestjs.png" },
  { nome: "Next.js", imgSrc: "/Next.js.png" },
  { nome: "Node.js", imgSrc: "/Node Js.png" },
  { nome: "Express.js", imgSrc: "/Express Js.png" },
  { nome: "React", imgSrc: "/React.png" },
  { nome: "Prisma ORM", imgSrc: "/Prisma Orm.png" },
  { nome: "PostgreSQL", imgSrc: "/PostgreSQL.png" },
  { nome: "Tailwind CSS", imgSrc: "/Tailwind CSS.png" },
  { nome: "Docker", imgSrc: "/Docker.png" },
  { nome: "Git", imgSrc: "/Git.png" },
  { nome: "GitHub", imgSrc: "/GitHub.png" },
];

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <div className="mt-16">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:size-[35rem] md:size-[40rem] lg:size-[45rem] xl:size-[50rem]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.4"
            />
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
              👋 Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-5xl font-extrabold text-transparent">
                Helton!
              </span>
            </strong>
          </h1>
          <br></br>

          <p className="text-center text-muted-foreground">
            <strong className="text-purple-600">
              💻 Desenvolvedor Full Stack
            </strong>{" "}
            apaixonado por criar soluções robustas, escaláveis e de alto
            desempenho. Tenho expertise em:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 py-4">
            {tecnologias.map((tec, index) => (
              <Image
                key={index}
                src={tec.imgSrc}
                alt={tec.nome}
                width={40}
                height={30}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
            ))}
          </div>

          <div className="flex items-center justify-center py-4 gap-4">
            <div className="flex flex-col md:flex-row sm:flex-col gap-2">
              <Button className="rounded-full dark:bg-purple-600 dark:text-foreground dark:hover:text-black">
                <Link
                  href="https://www.linkedin.com/in/heltonmatimbe/"
                  target="_blank"
                >
                  Me acompanhe no Linkedin{" "}
                </Link>
                <LinkedinIcon />
              </Button>
              <Button className="rounded-full dark:bg-purple-600 dark:text-foreground dark:hover:text-black">
                <Link href="https://github.com/HulitosCode" target="_blank">
                  Meu Github
                </Link>
                <GithubIcon />
              </Button>
            </div>
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
