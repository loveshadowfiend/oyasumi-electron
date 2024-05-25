import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";
import { MainLayout } from "./layouts/main-layout";
import { PopularNewTitles } from "./components/popular-new-titles";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout>
                <PopularNewTitles />
            </MainLayout>
        </QueryClientProvider>
    );
}

export default App;
