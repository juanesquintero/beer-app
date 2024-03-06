"use client";
import React, { useEffect, useState } from "react";
import { Friend } from "@/shared/types";
import PaymentForm from "../components/PaymentForm";
import { fetchData } from "@/shared/helpers";

export default function Home() {
  const [friends, setFriends] = useState<Friend[]>([]);

  const getFriends = async () => {
    const data = await fetchData("/friends/");
    setFriends(data);
  };

  useEffect(() => {
    // Fetch friends list from API
    getFriends();
  }, []);

  return (
    <section className="w-full h-full mt-4 mb-8 p-5 m-5">
      <h1 className="mb-4 text-4xl font-extrabold leading-none">
        Payment Interface
      </h1>
      <PaymentForm friends={friends} reFetch={getFriends} />
    </section>
  );
}
