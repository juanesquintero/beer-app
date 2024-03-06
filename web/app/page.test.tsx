import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import { fetchData } from "@/shared/helpers";

// Mock the fetchData function
jest.mock("../shared/helpers", () => ({
  fetchData: jest.fn(),
}));

const friendsMock = [
  { owed: 5.99, name: "John Doe" },
  { owed: 10.5, name: "Jane Doe" },
];

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText("Payment Interface")).toBeInTheDocument();
  });

  it("fetches and displays a list of friends", async () => {
    // Mock the API call
    fetchData.mockResolvedValue(friendsMock);

    render(<Home />);

    // Wait for the fetchData to be called and state to update
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith("/friends/");
      expect(screen.getByTestId("John Doe")).toBeInTheDocument();
      expect(screen.getByTestId("Jane Doe")).toBeInTheDocument();
    });
  });
});
