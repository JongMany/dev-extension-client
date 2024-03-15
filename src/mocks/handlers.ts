import { HttpResponse, http } from "msw";

const USERS = [
  {
    accessToken: "acceeeeeesssssToooooken",
    email: "homebody-coder@naver.com",
    nickname: "방구석코딩쟁이",
    apiKey: "aaaa1111",
  },
];

export const handlers = [
  http.post("/auth/signin", () => {
    return HttpResponse.json(USERS[0], {
      status: 200,
      headers: {
        "Set-Cookie": "refreshToken=asdasdasd;HttpOnly;Path=/",
      },
    });
  }),
];
