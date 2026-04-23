'use client';

import dynamic from "next/dynamic";

type ColorPalette = [string, string];

interface ThemeInput {
  light: ColorPalette;
  dark: ColorPalette;
}

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then(mod => mod.GitHubCalendar),
  { ssr: false }
);

const githubTheme: ThemeInput = {
  light: ['hsl(215, 35%, 13%)', 'darkred'],
  dark: ['hsl(215, 35%, 13%)', 'darkred'],
}

export default function GithubCalendar() {
  return (
    <GitHubCalendar
      username="renzoboyy"
      theme={githubTheme}
      labels={{
        totalCount: '{{count}} contributions in the last year',
      }}
    />
  );
}