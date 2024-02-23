"use client";
import { postData } from "@/shared/helpers";
import { Friend } from "@/shared/types";
import { useState, ChangeEvent } from "react";

interface PaymentFormProps {
  friends: Friend[];
}

const PaymentForm: React.FC<PaymentFormProps> = ({ friends }) => {
  const [selectedFriend, setSelectedFriend] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [splitAccount, setSplitAccount] = useState<boolean>(false);

  const handlePayment: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    const response = await postData("/pay/", {
      friend: selectedFriend,
      amount: parseFloat(amount),
      split: splitAccount,
    });

    if (response?.ok) {
      alert("Payment successful");
    } else {
      alert("Payment failed");
    }
  };

  return (
    <form className="w-full max-w-s bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <select
        className="bg-gray-50 border rounded-lg  block w-full max-w-xs p-2.5"
        value={selectedFriend}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSelectedFriend(e.target.value)
        }
      >
        <option value="" disabled>
          Select a friend
        </option>
        {friends?.map((friend) => (
          <option key={friend.name} value={friend.name}>
            {friend?.name}
          </option>
        ))}
      </select>
      <div className="flex justify-star w-full max-w-xs items-center">
        $ 
        <input
          className="bg-gray-50 border rounded-lg block p-2.5 my-2.5 ml-2"
          type="number"
          placeholder="$ Amount to pay"
          value={amount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value)
          }
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          className="w-4 h-4 rounded m-2"
          value={splitAccount ? "checked" : ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSplitAccount(e.target?.value === "checked")
          }
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Split the bill evenly
        </label>
      </div>
      <button
        className="bg-gray-200 hover:bg-gray-400 font-bold px-4 py-2 rounded"
        onClick={handlePayment}
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
