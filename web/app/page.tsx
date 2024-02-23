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
    <section className="w-full h-full mt-4 mb-8 p-5 m-5">
      <h1 className="mb-4 text-4xl font-extrabold leading-none">
        Payment Interface
      </h1>
      <PaymentForm friends={friends} />
    </section>
  );
}
