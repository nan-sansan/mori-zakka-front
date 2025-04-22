// src/app/api/hello/route.ts
// 映射路徑: [host]/api/hello

// GET
export async function GET(request: Request) {
  console.log(request);
  return new Response(JSON.stringify({ message: "This is a GET request" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST
export async function POST(request: Request) {
  // 等待請求載入完成
  const body = await request.json();
  return new Response(JSON.stringify({ received: body }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// ... 類推
