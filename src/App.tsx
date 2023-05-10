import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./scenes/dashboard";
import { Sidebar } from "./scenes/global/Sidebar";
import { Topbar } from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      value={colorMode as { toggleColorMode: () => void }}
    >
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
