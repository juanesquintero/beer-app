"use client";
import { useEffect, useState } from "react";
import { Friend } from "@/shared/types";

export default function Home() {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    // Fetch friends list from API
    const fetchFriends = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/friends`
      );
      if (response?.ok) {
        const data = await response.json();
        setFriends(data);
      } else {
        console.error("Failed to fetch friends");
      }
    };

    fetchFriends();
  }, []);
  return (
    <div>
      <h1>Payment Interface</h1>
    </div>
  );
}
