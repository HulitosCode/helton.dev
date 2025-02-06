import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Site de prestação de serviços",
    descricao:
      "Site de prestação de serviços desenvolvido com ReactJS e Tailwind CSS. Oferece uma navegação dinâmica e um design moderno e responsivo.",
    imgSrc: "/devnexus.png",
    link: "https://landing-page-fawn-sigma.vercel.app/",
  },
  {
    title: "Sistema de gestão de finanças pessoal",
    descricao:
      "O sistema de finanças pessoais utiliza TypeScript, ShadCN, Clerk, Prisma, Tailwind e PostgreSQL. Ele oferece uma interface intuitiva para o controle financeiro, permitindo gerenciar finanças de forma fácil e eficiente.",
    imgSrc: "/finance.png",
    link: "https://financeai-qzbfj15bg-hulitoscodes-projects.vercel.app/login",
  },
  {
    title: "Site de saúde",
    descricao:
      "Site de saúde desenvolvido com ReactJS e Tailwind, oferecendo uma interface acessível e responsiva.",
    imgSrc: "/saude.png",
    link: "https://neurovida.vercel.app/",
  },
  {
    title: "API de gestão de artigos",
    descricao:
      "API para gestão de artigos com NestJS, Prisma, PostgreSQL e Docker. Solução escalável e eficiente.",
    imgSrc: "/api.png",
    link: "https://nestjs-backend-v9c5.onrender.com/api",
  },
  {
    title: "site de Importação e Exportação",
    descricao:
      "Site de Importação e Exportação desenvolvido com HTML, CSS e JavaScript. Possui design moderno, responsivo e navegação intuitiva.",
    imgSrc: "/sig.png",
    link: "https://hulitoscode.github.io/sig/",
  },
  {
    title: "Lista de Tarefas",
    descricao: "Projeto em desenvolvimento",
    imgSrc: "/api.png",
    link: "",
  },
  {
    title: "API de Envio de Alerta",
    descricao: "Projeto em desenvolvimento",
    imgSrc: "/api.png",
    link: "",
  },
];

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

const Projects = () => {
  return (
    <div className="py-20 px-6 lg:px-32 md:px-16 dark:text-muted-foreground">
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

      <div className="text-center">
        <h1 className="text-3xl font-bold text-purple-600 py-6">
          Meus Projetos 🚀
        </h1>
        <p className="max-w-3xl mx-auto">
          Aqui você encontrará alguns dos projetos pessoais que desenvolvi, cada
          um acompanhado de um estudo de caso detalhado. Meu foco é criar
          soluções eficientes e escaláveis, utilizando tecnologias modernas como
          React, Next.js, Node.js, NestJS, Prisma, PostgreSQL e Docker.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 py-5">
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
      </div>

      {/* Card de informações */}
      <div className="py-10">
        <Card className="dark:bg-zinc-900 bg-purple-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold dark:text-white text-white border-b">
              💡 O que você pode esperar?
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 text-white">
            <ul className="list-disc list-inside space-y-2">
              <li>Projetos bem estruturados, com código limpo e organizado.</li>
              <li>
                Soluções inovadoras e funcionais, desenvolvidas com foco na
                usabilidade.
              </li>
              <li>
                Estudos de caso que detalham os desafios, soluções e
                aprendizados de cada projeto.
              </li>
              <li>
                Tecnologias atualizadas para garantir alta performance e
                segurança.
              </li>
            </ul>
            <div className="pt-6">
              <Link href="tel:+258843779669">
                <Button className="w-full dark:bg-purple-600 dark:text-white bg-white hover:bg-gray-100 text-black gap-2 dark:hover:bg-zinc-800">
                  <MessageCircleIcon />
                  Fale comigo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
        {projects.map((project, index) => (
          <Card key={index} className="w-full max-w-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-foreground text-md">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </CardContent>
            <CardDescription className="px-4 py-2 text-center">
              {project.descricao}
            </CardDescription>
            <CardFooter>
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full dark:bg-purple-600 dark:text-white dark:hover:bg-zinc-800">
                    Ver Projeto
                  </Button>
                </Link>
              ) : (
                <Button
                  className="w-full opacity-50 cursor-not-allowed"
                  disabled
                >
                  Em breve
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
