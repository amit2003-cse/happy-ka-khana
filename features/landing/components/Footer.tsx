"use client";

import React from "react";
import { Utensils, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";


export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="contact" className="bg-brand-secondary text-white/90 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <Utensils className="h-5 w-5 text-brand-primary" />
              </div>
              <span className="font-heading text-lg font-extrabold text-white tracking-tight">
                Happy Ka <span className="text-brand-primary">Khana</span>
              </span>
            </div>
            <p className="text-sm text-white/70 font-body leading-relaxed">
              Swadisht, hygienic aur nutritious ghar jaisa khana ab aapke ghar, PG ya office tak.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-white/5 hover:bg-brand-primary text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram Page"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-white/5 hover:bg-brand-primary text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook Page"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>


          {/* Column 2: Active Locations */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider">
              Active Locations
            </h4>
            <ul className="space-y-2 text-sm text-white/70 font-body">
              <li>Boring Road, Patna</li>
              <li>Kankarbagh, Patna</li>
              <li>Rajendra Nagar, Patna</li>
              <li>Bailey Road, Patna</li>
              <li>Patliputra Colony, Patna</li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70 font-body">
              <li className="flex items-start gap-2.5">
                <Phone className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                <a href="tel:+917488574616" className="hover:text-brand-primary transition-all">
                  +91 74885 74616
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="h-5 w-5 text-brand-primary shrink-0 mt-0.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm12.035-2.03c1.797 0 3.548-.482 5.077-1.393l.363-.216 3.775.99-.208-3.679.237-.377a9.92 9.92 0 0 0 1.517-5.26c.003-5.485-4.48-9.948-9.984-9.948-5.502 0-9.98 4.463-9.983 9.948-.001 1.93.546 3.81 1.58 5.48l.245.39-.63 2.302 2.355-.618.377.224a9.94 9.94 0 0 0 5.12 1.452zm4.953-6.793c-.271-.135-1.602-.789-1.85-.878-.247-.089-.427-.135-.607.135-.18.271-.697.878-.854 1.057-.158.18-.315.2-.585.065-.27-.135-1.14-.42-2.172-1.34-.803-.715-1.345-1.6-1.503-1.871-.158-.271-.017-.417.118-.552.122-.122.271-.315.405-.471.135-.158.18-.271.27-.45.09-.18.045-.338-.022-.472-.068-.135-.608-1.464-.833-2.005-.22-.53-.44-.457-.607-.466-.157-.008-.337-.01-.517-.01-.18 0-.472.067-.72.338-.247.271-.944.923-.944 2.25 0 1.328.966 2.61 1.101 2.79.135.18 1.9 2.9 4.606 4.074.645.278 1.148.445 1.542.57.647.206 1.236.177 1.702.107.518-.077 1.602-.653 1.828-1.284.225-.63.225-1.17.157-1.284-.067-.113-.247-.203-.518-.338z" />
                </svg>
                <a
                  href="https://wa.me/917488574616?text=Hi,%20I%20want%20to%20know%20more%20about%20Happy%20Ka%20Khana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-all"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                <a href="mailto:abhishek1973kr@gmail.com" className="hover:text-brand-primary transition-all">
                  abhishek1973kr@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                <span>Boring Road Crossing, near Patna High School, Patna, Bihar 800001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/50 font-body gap-4 text-center sm:text-left">
          <p>© {currentYear} Happy Ka Khana. All rights reserved.</p>
          <p>Made with ❤️ for Patna</p>
        </div>
      </Container>
    </footer>
  );
}
