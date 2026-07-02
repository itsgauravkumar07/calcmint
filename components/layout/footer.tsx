import { DesktopFooter } from "./desktop-footer";
import { MobileFooter } from "./mobile-footer";

export function Footer() {
  return (
    <>
      {/* Mobile Footer */}
      <div className="lg:hidden">
        <MobileFooter />
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <DesktopFooter />
      </div>
    </>
  );
}