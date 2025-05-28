export default function VisiMisiSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      {/* Visi dan Misi */}
      <div className="bg-gray-100 rounded-xl p-10 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Visi Dan Misi</h3>

        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Visi */}
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold mb-4">Visi</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              <li>Membangun ekosistem edukasi trading profesional.</li>
              <li>
                Mendorong pertumbuhan trader berbasis pemahaman, strategi, dan
                mindset yang benar.
              </li>
              <li>
                Menjadi katalisator menuju kebebasan finansial bagi para trader.
              </li>
            </ul>
          </div>

          {/* Misi */}
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold mb-4">Misi</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              <li>
                Menyediakan akses belajar terjangkau untuk semua kalangan.
              </li>
              <li>
                Mengembangkan sistem edukasi dan trading berbasis AI & data.
              </li>
              <li>Memberikan mentorship yang intensif dan sistematis.</li>
              <li>
                Mendorong pertumbuhan trader melalui komunitas yang suportif dan
                progresif.
              </li>
              <li>
                Menjadi pusat solusi edukasi, riset, dan konsultasi finansial
                berbasis teknologi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
