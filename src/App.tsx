import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./scenes/dashboard";
import { Sidebar } from "./scenes/global/Sidebar";
import { Topbar } from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Team } from "./scenes/team";
import { Contacts } from "./scenes/contacts";
import { Invoices } from "./scenes/invoices";
import { Form } from "./scenes/form";
import { Calendar } from "./scenes/calendar";

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
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
