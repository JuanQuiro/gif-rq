import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Input from "./components/InputComponent";
import NavBar from "./components/NavBar";
import "./style.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GifsComponent from "./components/GifsComponent";

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <main className="dark text-foreground min-h-screen bg-background">
        <NavBar />
        <div className="mx-6">
          <Input />
          <div className="grid gap-5 grid-cols-4">
            <GifsComponent />
          </div>
        </div>
      </main>
    </NextUIProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
