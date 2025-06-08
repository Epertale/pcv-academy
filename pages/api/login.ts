import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "cookie";

const filePath = path.join(process.cwd(), "data", "userData.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metode tidak diizinkan." });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email dan password wajib diisi." });
    }

    // Baca file user
    const fileData = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(fileData);

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Email atau password salah." });
    }

    // Perbarui status login terakhir
    user.status = new Date().toISOString();
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    // Set cookie login
    const cookie = serialize("auth_token", email, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 hari
    });

    res.setHeader("Set-Cookie", cookie);
    res.status(200).json({ message: "Login berhasil." });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
}
