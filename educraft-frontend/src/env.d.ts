/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_PORT: string;
  // add other VITE_ env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
