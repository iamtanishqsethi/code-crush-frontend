import {ThemeProvider} from "@/Components/Theme-Provider.tsx";
import Landing from "@/Components/Landing/Landing.tsx";
import Body from "@/Components/Body.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/Components/Login.tsx";
import Profile from "@/Components/Profile/Profile.tsx";
import Feed from "@/Components/Feed/Feed.tsx";
import {Provider} from "react-redux";
import appStore from "@/Utils/appStore.ts";
import { Toaster } from "@/Components/ui/sonner"
import ProtectedRoute from "@/Components/ProtectedRoute.tsx";
import Connections from "@/Components/Social/Connections.tsx";
import Requests from "@/Components/Social/Requests.tsx";
import Chat from "@/Components/Chat/Chat.tsx";

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
                    element:(
                        <ProtectedRoute>
                            <Profile/>
                        </ProtectedRoute>
                    )
                },
                {
                    path:"/feed",
                    element:(
                        <ProtectedRoute>
                            <Feed/>
                        </ProtectedRoute>
                    )
                },
                {
                    path:"/connections",
                    element:(
                        <ProtectedRoute>
                            <Connections/>
                        </ProtectedRoute>
                    )
                },
                {
                    path:"/requests",
                    element:(
                        <ProtectedRoute>
                            <Requests/>
                        </ProtectedRoute>
                    )
                },
                {
                    path:"/chat/:targetUserId",
                    element:(
                        <ProtectedRoute>
                            <Chat/>
                        </ProtectedRoute>
                    )
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
                <Toaster duration={3000}/>
              <RouterProvider router={appRouter}></RouterProvider>
          </Provider>
      </ThemeProvider>
  )
}

export default App
