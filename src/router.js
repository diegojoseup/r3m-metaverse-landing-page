import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Portals from "./pages/Portals";
import Creative from "./pages/Creative";
import Matter from "./pages/Matter";
import Domain from "./pages/Domain";
import Marketplace from "./pages/Marketplace";
import Foundation from "./pages/Foundation";
import Token from "./pages/Token";
import Nft from "./pages/Nft";
import Upload from "./pages/Upload";
import Community from './pages/Community';

export default function Router () {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/creative", element: <Creative /> },
                { path: "/portals", element: <Portals /> },
                { path: "/matter", element: <Matter /> },
                { path: "/domain", element: <Domain /> },
                { path: "/marketplace", element: <Marketplace /> },
                { path: "/foundation", element: <Foundation /> },
                { path: "/token", element: <Token /> },
                { path: "/nft", element: <Nft /> },
                { path: "/upload", element: <Upload /> },
                { path: "/community", element: <Community /> },
            ]
        }
    ])
}
// import 