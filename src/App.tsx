import {ThemeProvider} from "@/Components/Theme-Provider.tsx";
import Child from "@/Components/Child.tsx";

function App() {


  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Child/>
      </ThemeProvider>
  )
}

export default App
