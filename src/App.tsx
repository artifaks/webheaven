import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import HerbDetailPage from "./pages/herb/[id]";

// Lazy load pages for better performance
const AffiliatePage = lazy(() => import("./pages/affiliate"));
const ChatbotPage = lazy(() => import("./pages/chatbot"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herb/:id" element={<HerbDetailPage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
