import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Router } from "wouter";
import { SearchPage } from "./components/pages/search-page";
import { HomePage } from "./components/pages/home-page";
import { MangaPage } from "./components/pages/manga-page";
import { SettingsPage } from "./components/pages/settings-page";

import "@/index.css";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Route path="/" component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/manga/:id" component={MangaPage} />
                <Route path="/settings" component={SettingsPage}></Route>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
