import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import DownloadLink from "../src/components/AppLinkButton.svelte";

describe("DownloadLink", () => {
  it("should render with the correct link", () => {
    const linkUrl = `https://ruleevcom.sharepoint.com/sites/ruleevGmbH/Freigegebene%20Dokumente/Forms/AllItems.aspx?id=%2Fsites%2FruleevGmbH%2FFreigegebene%20Dokumente%2FExternal%2F003%5Fshared%2F005%5Fyond%2F002%5Fcode%5Fchallenges%2Fprofile%5Fpics%2Ezip&parent=%2Fsites%2FruleevGmbH%2FFreigegebene%20Dokumente%2FExternal%2F003%5Fshared%2F005%5Fyond%2F002%5Fcode%5Fchallenges&p=true&ga=1`;
    const { getByText } = render(DownloadLink, { link: linkUrl });

    const anchor = getByText("Download avatar pictures") as HTMLAnchorElement;

    expect(anchor).toBeTruthy(); // Check if the anchor element exists
    expect(anchor.href).toBe(linkUrl); // Check if the href is correctly set
    expect(anchor.getAttribute("download")).toBe("profile_pics.zip"); // Check if the download attribute is correctly set
  });

  it("should have the correct CSS classes", () => {
    const linkUrl = "https://example.com/avatar.zip";
    const { getByText } = render(DownloadLink, { link: linkUrl });

    const anchor = getByText("Download avatar pictures");

    expect(anchor.className).toBe(
      "text-[#0085FF] underline font-medium text-[1.3rem]"
    );
  });
});
