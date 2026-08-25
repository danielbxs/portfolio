import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lea5pQtAAAAAOAkhYhd34elnd2YmC2EPb6rq7ps">
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </GoogleReCaptchaProvider>
  );
}
