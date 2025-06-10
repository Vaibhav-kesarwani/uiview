import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <div className="pl-8 pr-8 pt-2">
      <MainNav />
      <MobileNav />
    </div>
  );
}
