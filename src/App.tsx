import {ThemeProvider} from "@/Components/Theme-Provider.tsx";
import Landing from "@/Components/Landing.tsx";
import Body from "@/Components/Body.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/Components/Login.tsx";
import Profile from "@/Components/Profile.tsx";
import Feed from "@/Components/Feed.tsx";
import {Provider} from "react-redux";
import appStore from "@/Utils/appStore.ts";

function App() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Body/>,
            children:[
                {
                    path:"/",
                    element:<Landing/>
                },
                {
                    path:"/profile",
                    element:<Profile/>
                },
                {
                    path:"/feed",
                    element:<Feed/>
                }
            ]
        },
        {
            path:"/login",
            element:<Login/>
        },
    ])

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Provider store={appStore}>
              <RouterProvider router={appRouter}></RouterProvider>
          </Provider>
      </ThemeProvider>
  )
}

export default App
