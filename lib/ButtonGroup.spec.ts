import { render, screen, fireEvent } from "@testing-library/svelte";
import ButtonGroup from "../src/components/ButtonGroup.svelte"; // Adjust the import path as necessary
import { describe, expect, test, vi } from "vitest";
import arrowNarrowRight from "../src/assets/arrow-narrow-right.svg";
import BadgeCheck from "../src/assets/badge-check.svg";
import Icon from "../src/assets/Icon.svg";
import Menu from "../src/assets/menu.svg";
import Vector from "../src/assets/Vector.svg";
import Plus from "../src/assets/plus-sm.svg";

describe("ButtonGroup", () => {
  const buttons = [
    { title: "Badge Check", icon: BadgeCheck, action: vi.fn() },
    { title: "Vector", icon: Vector, action: vi.fn() },
    { title: "Icon", icon: Icon, action: vi.fn() },
    { title: "Menu", icon: Menu, action: vi.fn() },
    { title: "Plus", icon: Plus, action: vi.fn() },
    { title: "Arrow Narrow Right", icon: arrowNarrowRight, action: vi.fn() },
  ];

  test("button click triggers action", async () => {
    render(ButtonGroup, { buttons });
    for (const button of buttons) {
      const btn = screen.getByAltText(button.title);
      await fireEvent.click(btn);
      expect(button.action).toHaveBeenCalled();
    }
  });

  test("handles no buttons scenario", () => {
    render(ButtonGroup, { buttons: [] });
    expect(screen.queryByRole("button")).toBeNull();
  });
});
