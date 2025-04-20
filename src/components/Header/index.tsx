"use client";

import React, { useEffect, useState } from "react";
import { UserProfile } from "@/type/user.d";
import { jwtDecode } from "jwt-decode";
import useUserStore from "@/store/user";
import useLoadingStore from "@/store/loading";
import LoadingWrap from "@/components/Wrapper/LoadingWrap";

export default function Header() {
  const token = useUserStore((state) => state.token);

  const [userInfo, setUserInfo] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (token) {
      setUserInfo(jwtDecode(token));
    } else {
      setUserInfo(null);
    }
  }, [token]);

  const handleLogin = () => {
    useLoadingStore.setState({ isLoading: true });
    useUserStore
      .getState()
      .login("test", "Password")
      .finally(() => {
        useLoadingStore.setState({ isLoading: false });
      });
  };

  const handleLogout = () => {
    useLoadingStore.setState({ isLoading: true });
    useUserStore
      .getState()
      .logout()
      .finally(() => {
        useLoadingStore.setState({ isLoading: false });
      });
  };

  return (
    <div>
      <h1>登入狀態測試</h1>

      <div
        style={{
          padding: "10px 20px",
          marginBottom: "10px",
          border: "1px solid #000",
          borderRadius: "5px",
          backgroundColor: userInfo ? "#d4edda" : "#f8d7da",
          color: userInfo ? "#155724" : "#721c24",
          cursor: "default",
          display: "block",
          margin: "10px",
        }}
      >
        {userInfo ? (
          <div>
            <p>UID: {userInfo.userId}</p>
            <p>暱稱: {userInfo.nickName}</p>
            <p>權限: {userInfo.role}</p>
          </div>
        ) : (
          "未登入"
        )}
      </div>

      <LoadingWrap classNames={["loading-class", "loading-class-2"]}>
        <div className="flex justify-center">
          {!token ? (
            <button
              onClick={handleLogin}
              style={{
                padding: "10px 20px",
                margin: "10px 0",
                border: "1px solid #007bff",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
                backgroundColor: "#007bff",
              }}
            >
              登入
            </button>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 20px",
                margin: "10px 0",
                border: "1px solid #6c757d",
                borderRadius: "5px",
                backgroundColor: "#6c757d",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              登出
            </button>
          )}
        </div>
      </LoadingWrap>
    </div>
  );
}
