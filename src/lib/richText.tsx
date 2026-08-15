import { Fragment } from "react";
import type { RichTextBlock } from "@/content";

export function asText(field: RichTextBlock[] | null | undefined): string {
  if (!field) return "";
  return field.map((block) => block.text).join(" ");
}

export function RichText({
  field,
}: {
  field?: RichTextBlock[] | null;
}) {
  if (!field) return null;

  return (
    <>
      {field.map((block, index) => (
        <Fragment key={`${index}-${block.text}`}>
          {block.type === "heading1" ? (
            <h1>{block.text}</h1>
          ) : block.type === "heading2" ? (
            <h2>{block.text}</h2>
          ) : (
            <p>{block.text}</p>
          )}
        </Fragment>
      ))}
    </>
  );
}
