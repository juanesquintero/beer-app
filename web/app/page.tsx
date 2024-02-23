"use client";
import { useEffect, useState } from "react";
import { Friend } from "@/shared/types";
import PaymentForm from "../components/PaymentForm";
import { fetchData } from "@/shared/helpers";

export default function Home() {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    // Fetch friends list from API
    const getFriends = async () => {
      const data = await fetchData("/friends/");
      setFriends(data);
    };

    getFriends();
  }, []);
  return (
    <div>
      <h1>Payment Interface</h1>
      <PaymentForm friends={friends ?? []} />
    </div>
  );
}
