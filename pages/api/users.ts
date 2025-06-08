import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'userData.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const fileData = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileData);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Gagal membaca data pengguna.' });
    }
  } else if (req.method === 'POST') {
    try {
      const newUser = req.body;

      // Mendapatkan tanggal dan waktu saat ini dalam format lokal
      const now = new Date().toLocaleString();

      // Menambahkan properti registeredAt dan status
      const userWithTimestamps = {
        ...newUser,
        registeredAt: now,
        status: now,
      };

      const fileData = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileData);
      data.push(userWithTimestamps);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      res.status(201).json({ message: 'Pengguna berhasil ditambahkan.' });
    } catch (error) {
      res.status(500).json({ message: 'Gagal menambahkan pengguna.' });
    }
  } else {
    res.status(405).json({ message: 'Metode tidak diizinkan.' });
  }
}
