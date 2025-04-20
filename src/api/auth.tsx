export const loginAPI = async (username: string, password: string) => {
  // 模擬伺服器延遲 (例如 1 秒)
  await new Promise((resolve) => setTimeout(resolve, 300));

  // 返回一個假的 token 和 refreshToken
  return {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzQ1MDYwOTczLCJuYmYiOjE3NDUwNjA5NzMsImV4cCI6MTc0NTE0NzM3MywidXNlcklkIjoidXNlcjAwMDEiLCJuaWNrTmFtZSI6Imp3dFRlc3QiLCJyb2xlIjoidXNlciJ9.pmDOlu5jIojPyO27PgDyb72PbNfcgMxas5M3cRx479s",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoIiwiaWF0IjoxNzQ1MDYwOTczLCJuYmYiOjE3NDUwNjA5NzMsImV4cCI6MTc0NTE0NzM3MywidXNlcklkIjoidXNlcjAwMDEiLCJyb2xlIjoicmVmcmVzaCJ9.YugNxKI1EWbqw0pbsTenBMNtbpqU_bu9zuGai01tag4",
  };
};
