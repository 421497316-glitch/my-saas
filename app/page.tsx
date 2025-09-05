"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // 本地状态：输入框的实时值
  const [name, setName] = useState("");
  // 已保存的名字（点击 Save 后显示）
  const [savedName, setSavedName] = useState<string | null>(null);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Hello, GitHub!!</h1>

      {/* 输入 + 按钮：典型的受控组件模式 */}
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="border px-3 py-2 rounded"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setSavedName(name);                // 把当前输入保存到另一个 state
            console.log("saved name:", name); // 调试输出（Dev Console 可见）
          }}
        >
          Save
        </button>
      </div>

      {/* 根据 savedName 条件渲染问候语 */}
      {savedName && (
        <p className="mt-4 text-lg">
          Hi, <strong>{savedName}</strong>! 👋 (This came from React state)
        </p>
      )}
    </main>
  );
}