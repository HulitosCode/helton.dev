import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Book, Home, MenuIcon, Presentation, User } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="md:hidden">
            <MenuIcon className="w-5 h-5" />
            <span className="sr-only">Abrir ? Fechar</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="sm:max-w-x">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="#">
              <span className="text-purple-500 font-bold">Helton.dev</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:text-foreground"
              prefetch={false}
            >
              <Home className="h-5 w-5 transition-all" />
              <span>Inicio</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:text-foreground"
              prefetch={false}
            >
              <Presentation className="h-5 w-5 transition-all" />
              <span>Sobre mim</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:text-foreground"
              prefetch={false}
            >
              <User className="h-5 w-5 transition-all" />
              <span>Projectos</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:text-foreground"
              prefetch={false}
            >
              <Book className="h-5 w-5 transition-all" />
              <span>Formacao</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
