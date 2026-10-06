import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomePage } from "../pages/HomePage";
import { WorkPage } from "../pages/WorkPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { StoryPage } from "../pages/StoryPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { pageRoutes } from "./routes";
import { stories } from "../data/portfolio";
export function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const path = pathname.replace(/\/+$/, "") || "/";
    const title =
      pageRoutes.find((page) => page.path === path)?.title ??
      stories.find((story) => `/work/${story.slug}` === path)?.title ??
      "Page not found";
    document.title = `${title} — Sofia Gusakova`;
  }, [pathname]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<StoryPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
