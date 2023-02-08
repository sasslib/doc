import React from "react";

export default function Section({
  children,
  title,
  titleAs = "h1",
  titleClassName = "card--title",
  ...props
}) {
  const getTitle = () => {
    switch (titleAs) {
      case "h1":
        return <h1 className={titleClassName}>{title}</h1>;
        break;
      case "h2":
        return <h2 className={titleClassName}>{title}</h2>;
        break;
      case "h3":
        return <h3 className={titleClassName}>{title}</h3>;
        break;
      case "h4":
        return <h4 className={titleClassName}>{title}</h4>;
        break;
      case "h5":
        return <h5 className={titleClassName}>{title}</h5>;
        break;
      case "h6":
        return <h6 className={titleClassName}>{title}</h6>;
        break;

      default:
        return <h1 className={titleClassName}>{title}</h1>;
        break;
    }
  };
  return (
    <section className="card" {...props}>
      {title ? getTitle() : null}
      {children}
    </section>
  );
}
