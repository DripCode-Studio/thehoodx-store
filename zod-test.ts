import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

const AuthResponseSchema = z.object({
  user: UserSchema,
  accessToken: z.string(),
  message: z.string().optional(),
});

const rawResponse = {
  "user": {
    "id": "1fc1ec5d-3568-4083-a099-ab29a1c9e1b3",
    "email": "test44@example.com",
    "role": "USER",
    "name": "Test User 44",
    "createdAt": "2026-03-07T05:22:56.947Z",
    "updatedAt": "2026-03-07T05:22:56.947Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxZmMxZWM1ZC0zNTY4LTQwODMtYTA5OS1hYjI5YTFjOWUxYjMiLCJlbWFpbCI6InRlc3Q0NEBleGFtcGxlLmNvbSIsImlhdCI6MTc3Mjg2MDk4OSwiZXhwIjoxNzczNDY1Nzg5fQ.bX0Rp2aR39xZZ592G1vaPuKWyBFDHN-kBOR3u5wqx1Q"
};

try {
  AuthResponseSchema.parse(rawResponse);
  console.log("Parse successful!");
} catch (e) {
  console.log("Parse failed!", e);
}
