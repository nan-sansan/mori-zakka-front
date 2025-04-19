"use client";

import { RootState } from "@/store";
import { login, logout } from "@/store/user";
import { UserProfile } from "@/type/user.d";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);
  const [userInfo, setUserInfo] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (token) {
      setUserInfo(jwtDecode(token));
    } else {
      setUserInfo(null);
    }
  }, [token]);

  const handleLogin = () => {
    dispatch(
      login({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzQ1MDYwOTczLCJuYmYiOjE3NDUwNjA5NzMsImV4cCI6MTc0NTE0NzM3MywidXNlcklkIjoidXNlcjAwMDEiLCJuaWNrTmFtZSI6Imp3dFRlc3QiLCJyb2xlIjoidXNlciJ9.pmDOlu5jIojPyO27PgDyb72PbNfcgMxas5M3cRx479s",
        refreshToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoIiwiaWF0IjoxNzQ1MDYwOTczLCJuYmYiOjE3NDUwNjA5NzMsImV4cCI6MTc0NTE0NzM3MywidXNlcklkIjoidXNlcjAwMDEiLCJyb2xlIjoicmVmcmVzaCJ9.YugNxKI1EWbqw0pbsTenBMNtbpqU_bu9zuGai01tag4",
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>登入狀態測試</h1>

      <button
        style={{
          padding: "10px 20px",
          marginBottom: "10px",
          border: "1px solid #000",
          borderRadius: "5px",
          backgroundColor: userInfo ? "#d4edda" : "#f8d7da",
          color: userInfo ? "#155724" : "#721c24",
          cursor: "default",
          display: "block",
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
      </button>

      <div>
        {!token ? (
          <button
            onClick={handleLogin}
            style={{
              padding: "10px 20px",
              margin: "10px 0",
              border: "1px solid #007bff",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
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
    </div>
  );
}
