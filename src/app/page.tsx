import React from "react";
import BlackPage from "./black/page";
import WhitePage from "./white/page";
import CreativePage from "./creative/page";
import Seletor from "./components/seletor";

type HomeProps = {
  searchParams?: Promise<{
    theme?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const rawTheme = Array.isArray(params?.theme) ? params?.theme[0] : params?.theme;
  const theme = rawTheme?.toLowerCase();
  let page = <WhitePage />;

  if (theme === "black") {
    page = <BlackPage />;
  } else if (theme === "creative") {
    page = <CreativePage />;
  } else if (theme === "white") {
    page = <WhitePage />;
  }

  return (
    <>
      {page}
      <Seletor />
    </>
  );
}
