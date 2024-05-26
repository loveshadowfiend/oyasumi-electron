import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";
import { Route, Router } from "wouter";
import { SearchPage } from "./components/pages/search-page";
import { HomePage } from "./components/pages/home-page";
import { MangaPage } from "./components/pages/manga-page";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Route path="/" component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/manga/:id" component={MangaPage} />
            </Router>
        </QueryClientProvider>
    );
}

export default App;
