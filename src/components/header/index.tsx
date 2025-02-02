import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "../../_components/darkmode/dark";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center p-4 justify-between text-muted-foreground gap-4 container mx-auto max-w-screen-xl">
      <h1 className="text-purple-600 font-bold">
        <Link href="/">
          Helton<span className="dark:text-muted-foreground">.dev</span>
        </Link>
      </h1>
      
      {/* Menu Desktop */}
      <nav className="hidden sm:flex gap-10">
        <Link href="/" className="text-purple-600 hover:text-muted-foreground font-medium">Inicio</Link>
        <Link href="/about" className="hover:text-purple-600">Sobre mim</Link>
        <Link href="/projects" className="hover:text-purple-600">Projectos</Link>
        {/* <Link href="/school" className="hover:text-purple-600">Formação</Link> */}
      </nav>
      
      <div className="flex gap-4 items-center">
        <Button className="dark:bg-purple-600 dark:text-foreground dark:hover:text-black">
          <Link href="tel:+258843779669">Contactar</Link>
        </Button>
        <ModeToggle />

        {/* Menu Mobile */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-6 text-lg p-4">
              <Link href="/" className="hover:text-purple-600">Inicio</Link>
                <Link href="/about" className="hover:text-purple-600">Sobre mim</Link>
                <Link href="/projects" className="hover:text-purple-600">Projectos</Link>
                {/* <Link href="/school" className="hover:text-purple-600">Formação</Link> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
