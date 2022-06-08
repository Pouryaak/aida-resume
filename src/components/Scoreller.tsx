import React, { useEffect } from "react";
import * as smoothScroll from "smoothscroll-polyfill";

interface Props {
  offset?: number;
  children: any;
  href: string;
  className: string;
}

const Scoreller = (props: Props) => {
  const { offset, className, ...rest } = props;

  useEffect(() => {
    smoothScroll.polyfill();
  }, []);

  const smoothScrollNative = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let offset = 0;
    if (props.offset) {
      offset = props.offset;
    }

    const id = e.currentTarget.getAttribute("href")?.slice(1);
    if (id) {
      const $anchor = document.getElementById(id);
      if ($anchor) {
        const offsetTop =
          $anchor.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
          top: offsetTop - offset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <a {...rest} className={className} onClick={smoothScrollNative}>
      {props.children}
    </a>
  );
};

export default Scoreller;
