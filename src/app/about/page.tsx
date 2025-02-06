import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";
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

const About = () => {
  return (
    <>
      <div className="lg:px-32 md:px-32 mt-20 px-6 text-muted-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          {/* Texto de apresentação */}
          <div>
            <h1 className="text-4xl bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text font-extrabold text-transparent">
              Olá, Eu sou Helton,{" "}
              <span className="dark:text-white">Desenvolvedor Full Stack</span>
            </h1>

            <p className="mt-4 text-md">
              <strong className="dark:text-white">
                Desenvolvedor Full Stack
              </strong>{" "}
              especializado em criar soluções robustas, escaláveis e de alto
              desempenho, com expertise em JavaScript, TypeScript, React,
              Next.js, Node.js, NestJS, Prisma, Postgres, Express e Docker.
            </p>

            <p className="py-2 text-md">
              <strong className="dark:text-white">
                Foco em design e usabilidade:
              </strong>{" "}
              Acredito que uma experiência de usuário excepcional é tão
              essencial quanto a qualidade técnica. Busco equilibrar
              performance, acessibilidade e um design intuitivo, garantindo
              produtos modernos e eficientes.
            </p>

            <p className="py-2 text-md">
              <strong className="dark:text-white">Aprendizado contínuo:</strong>{" "}
              Estou sempre atualizado com as tendências tecnológicas, aplicando
              as melhores práticas para desenvolver soluções inovadoras e
              competitivas.
            </p>
            <p className=" text-muted-foreground">
              <strong className="text-purple-600">💻 Skills</strong>
            </p>
            <div className="flex flex-wrap  gap-3 py-4">
              {tecnologias.map((tec, index) => (
                <Image
                  key={index}
                  src={tec.imgSrc}
                  alt={tec.nome}
                  width={40}
                  height={30}
                  className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
                />
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center py-2">
            <Image
              src="/p7.jpg"
              alt="Foto de Helton"
              width={600}
              height={200}
              className="rounded-xl border-4 border-purple-600 max-w-full h-auto"
            />
          </div>
        </div>

        {/* Seção de contato */}
        <div>
          <Card className="bg-zinc-900 ">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Vamos conversar?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg dark:text-white text-white">
              Se você está em busca de alguém com potencial e vontade de
              aprender, ficarei feliz em conversar com você!
            </CardContent>
            <CardFooter className="">
              <Link href="tel:+258843779669">
                <Button className="dark:hover:bg-white dark:hover:text-gray-600 dark:bg-purple-600 dark:text-white bg-purple-600 hover:bg-white hover:text-gray-600 text-white gap-2">
                  <MessageCircleIcon />
                  Fale comigo
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
