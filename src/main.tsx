// Keep the global CSS + font imports here in the ViteReactSSG entry so their
// styles are inlined into every pre-rendered page (no unstyled flash).
import "@fontsource-variable/fredoka";
import "@fontsource-variable/nunito";
import "./index.css";

import { ViteReactSSG } from "vite-react-ssg";

import { routes } from "./routes";

// ViteReactSSG auto-mounts into #root in the browser and drives static
// generation at build. The named `createRoot` export is required.
export const createRoot = ViteReactSSG({ routes });
