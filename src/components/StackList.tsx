import {
  IconBrandAlpineJs,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandRust,
  IconBrandSvelte,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from "@tabler/icons-preact";
import IconBrandHtmx from "../icons/htmx";
export default function StackList() {
  interface IconListInterface {
    title: string;
    icon: any;
  }
  const iconList: IconListInterface[] = [
    {
      title: "React",
      icon: IconBrandReact,
    },
    {
      title: "Svelte",
      icon: IconBrandSvelte,
    },
    {
      title: "AlpineJS",
      icon: IconBrandAlpineJs,
    },
    {
      title: "VueJS",
      icon: IconBrandVue,
    },
    {
      title: "NextJS",
      icon: IconBrandNextjs,
    },
    {
      title: "htmx",
      icon: IconBrandHtmx,
    },
    {
      title: "TailwindCSS",
      icon: IconBrandTailwind,
    },
    {
      title: "HTML5",
      icon: IconBrandHtml5,
    },
    {
      title: "CSS3",
      icon: IconBrandCss3,
    },
    {
      title: "TypeScript",
      icon: IconBrandTypescript,
    },
    {
      title: "Javascript",
      icon: IconBrandJavascript,
    },
    {
      title: "Rust",
      icon: IconBrandRust,
    },
  ];
  return (
    <div class="flex flex-wrap gap-1">
      {iconList.map((item) => (
        <button class="btn btn-secondary no-animation">
          <item.icon />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  );
}