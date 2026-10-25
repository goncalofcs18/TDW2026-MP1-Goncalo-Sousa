import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import DateComponent from "@/app/date";

describe("DateComponent", () => {
  it("renders the date in a <time> element with a readable label", () => {
    const html = renderToStaticMarkup(
      <DateComponent dateString="2026-10-25T12:00:00.000Z" />,
    );
    expect(html).toContain('<time dateTime="2026-10-25T12:00:00.000Z">');
    expect(html).toContain("October 25, 2026");
  });
});
