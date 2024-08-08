import { render } from "@testing-library/svelte";
import { expect, test } from "vitest";
import TimelineComponent from "../src/components/Timeline.svelte";

let mockData: {
  content: string;
  visited: boolean;
  lastSeen: string | null;
}[] = [
  { content: "Item 1", visited: true, lastSeen: "2023-01-01" },
  { content: "Item 2", visited: true, lastSeen: "2023-01-01" },
  { content: "Item 3", visited: true, lastSeen: "2023-01-03" },
];

test("renders grouped timeline by lastSeen date", () => {
  const { container } = render(TimelineComponent, { timelineProps: mockData });
  const dateHeaders = container.querySelectorAll(".last-seen-date");
  expect(dateHeaders.length).toBe(1);
  expect(dateHeaders[0].textContent).toContain("2023-01-01");
  const items = container.querySelectorAll(".card-item");
  expect(items.length).toBe(3);
});
mockData = [
  { content: "Item 1", visited: true, lastSeen: "2023-01-01" },
  { content: "Item 2", visited: true, lastSeen: "2023-01-01" },
  { content: "Item 3", visited: false, lastSeen: null },
];

test("does not render a null lastSeen date", () => {
  const { container } = render(TimelineComponent, { timelineProps: mockData });
  const dateHeaders = container.querySelectorAll(".last-seen-date");
  expect(dateHeaders.length).toBe(1);
  const items = container.querySelectorAll(".card-item");
  expect(items.length).toBe(3);
});

test("applies correct classes based on visited status", () => {
  const { container } = render(TimelineComponent, { timelineProps: mockData });

  const visitedItem = container.querySelector(".bg-gray-100");
  const notVisitedItem = container.querySelector(".bg-yellow-200");
  expect(visitedItem).not.toBeNull();
  expect(notVisitedItem).not.toBeNull();
  expect(visitedItem.textContent).toContain("Item 1");
  expect(notVisitedItem.textContent).toContain("Item 3");
});
