import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="py-20 px-6 text-muted-foreground gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Texto de apresentação */}
        <div>
          <h1 className="font-bold text-4xl text-purple-600">
            Olá, Eu sou Helton,{" "}
            <span className="dark:text-white">Desenvolvedor Full Stack</span>
          </h1>

          <p className="mt-4 text-lg">
            <strong className="dark:text-white">Desenvolvedor Full Stack</strong>{" "}
            especializado em criar soluções robustas, escaláveis e de alto
            desempenho, com expertise em JavaScript, TypeScript, React, Next.js,
            Node.js, NestJS, Prisma, Postgres, Express e Docker.
          </p>

          <p className="py-2 text-lg">
            <strong className="dark:text-white">Foco em design e usabilidade:</strong>{" "}
            Acredito que uma experiência de usuário excepcional é tão essencial
            quanto a qualidade técnica. Busco equilibrar performance,
            acessibilidade e um design intuitivo, garantindo produtos modernos e eficientes.
          </p>

          <p className="py-2 text-lg">
            <strong className="dark:text-white">Aprendizado contínuo:</strong> Estou
            sempre atualizado com as tendências tecnológicas, aplicando as melhores
            práticas para desenvolver soluções inovadoras e competitivas.
          </p>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
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
      <div className="mt-14">
        <Card className="bg-zinc-900 ">
          <CardHeader>
            <CardTitle className="text-white text-xl">Vamos conversar?</CardTitle>
          </CardHeader>
          <CardContent className="text-lg dark:text-white text-white">
            Se você está em busca de alguém com potencial e vontade de aprender, ficarei feliz em bater um papo com você!
          </CardContent>
          <CardFooter className="">
            <Button className="dark:bg-purple-600 dark:text-white bg-white text-black gap-2">
              <MessageCircleIcon />
              <Link href="tel:+258843779669">Fale comigo</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default About;
