import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Site de prestação de serviços", imgSrc: "/devnexus.png", link: "https://landing-page-fawn-sigma.vercel.app/" },
  { title: "Sistema de gestão de finanças pessoal", imgSrc: "/login.png", link: "https://financeai-qzbfj15bg-hulitoscodes-projects.vercel.app/login" },
  { title: "Site de saude", imgSrc: "/saude.png", link: "https://neurovida.vercel.app/" },
  { title: "API de gestão de artigos", imgSrc: "/api.png", link: "https://nestjs-backend-v9c5.onrender.com/api" },
];

const Projects = () => {
  return (
    <div className="py-20 lg:px-32 md:px-32">
      <h1 className="text-center text-3xl font-bold text-purple-600 py-6">Projectos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project, index) => (
          <Card key={index} className="w-full max-w-xs shadow-lg">
            <CardHeader>
              <CardTitle className="text-center font-medium">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image 
                src={project.imgSrc} 
                alt={project.title} 
                width={160} 
                height={50} 
                className="w-full h-60 object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter>
              {project.link ? (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full dark:bg-purple-600 dark:text-white">Ver Projeto</Button>
                </Link>
              ) : (
                <Button className="w-full opacity-50 cursor-not-allowed" disabled>Em breve</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
