import { useMemo } from 'react';
import { AlertTriangle, ShieldCheck, Stethoscope, Thermometer, Wind, HeartPulse, ShieldAlert } from 'lucide-react';
import { materiStatis } from '../data/staticContent';
import pengertianImage from '../assets/ispa/pengertian.png';
import penyebabImage from '../assets/ispa/penyebab.png';
import faktorRisikoImage from '../assets/ispa/faktor_risiko.png';
import tandaGejalaImage from '../assets/ispa/tanda_gejala.png';
import perawatanImage from '../assets/ispa/cara_perawatan.png';
import pencegahanImage from '../assets/ispa/pencegahan.png';
import klasifikasiTandaBahayaImage from '../assets/ispa/klasifikasi_tanda_bahaya.png';
import pencegahanCuciTanganImage from '../assets/ispa/pencegahan_ispa_cuci_tangan.jpeg';
import pencegahanEtikaBatukImage from '../assets/ispa/pencegahan_ispa_etika_batuk.jpeg';

const tandaBahaya = [
  'Sesak napas',
  'Nyeri di bagian dada atau perut',
  'Kejang',
  'Penurunan kesadaran',
  'Bibir dan kuku tampak kebiruan',
  'Kulit menjadi pucat dan terasa dingin',
  'Gangguan pencernaan, seperti mual, muntah, dan diare',
];

const kategoriConfig = {
  pengertian: {
    label: 'Pengertian',
    icon: Stethoscope,
    accent: 'bg-blue-50 text-blue-700',
    placeholder: 'Placeholder Gambar Pengertian',
    image: pengertianImage,
  },
  penyebab: {
    label: 'Penyebab',
    icon: Wind,
    accent: 'bg-indigo-50 text-indigo-700',
    placeholder: 'Placeholder Gambar Penyebab',
    image: penyebabImage,
  },
  faktor_risiko: {
    label: 'Faktor Risiko',
    icon: ShieldAlert,
    accent: 'bg-amber-50 text-amber-700',
    placeholder: 'Placeholder Gambar Faktor Risiko',
    image: faktorRisikoImage,
  },
  tanda_gejala: {
    label: 'Tanda dan Gejala',
    icon: Thermometer,
    accent: 'bg-cyan-50 text-cyan-700',
    placeholder: 'Placeholder Gambar Tanda Gejala',
    image: tandaGejalaImage,
  },
  klasifikasi_tanda_bahaya: {
    label: 'Klasifikasi dan Tanda Bahaya',
    icon: AlertTriangle,
    accent: 'bg-rose-50 text-rose-700',
    placeholder: 'Placeholder Gambar Klasifikasi',
    image: klasifikasiTandaBahayaImage,
  },
  perawatan: {
    label: 'Cara Perawatan',
    icon: HeartPulse,
    accent: 'bg-emerald-50 text-emerald-700',
    placeholder: 'Placeholder Gambar Perawatan',
    image: perawatanImage,
  },
  pencegahan: {
    label: 'Pencegahan',
    icon: ShieldCheck,
    accent: 'bg-green-50 text-green-700',
    placeholder: 'Placeholder Gambar Pencegahan',
    image: pencegahanImage,
    images: [pencegahanCuciTanganImage, pencegahanEtikaBatukImage],
  },
};

function ImageBlock({ title, src, images = [] }) {
  if (images.length > 0) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, idx) => (
          <div key={`${title}-${idx}`} className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
            <img src={img} alt={`${title} ${idx + 1}`} className="h-auto w-full object-contain" />
          </div>
        ))}
      </div>
    );
  }

  if (src) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <img src={src} alt={title} className="h-full min-h-52 w-full object-cover" />
      </div>
    );
  }

  return (
    <div className="flex h-52 w-full items-center justify-center rounded-2xl bg-slate-100 text-center text-sm font-medium text-slate-500">
      {title}
      <br />
      (silakan upload/ganti gambar)
    </div>
  );
}

export default function MateriPage() {
  const materi = materiStatis;

  const grouped = useMemo(() => {
    const map = {};
    materi.forEach((item) => {
      map[item.kategori] = [...(map[item.kategori] || []), item];
    });
    return map;
  }, [materi]);

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-6 text-white shadow-md">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15" />
        <div className="absolute -bottom-10 right-16 h-24 w-24 rounded-full bg-white/10" />
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-blue-100">Edukasi Kesehatan Anak</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Materi ISPA Balita</h1>
        <p className="mt-3 max-w-2xl text-base text-blue-50 sm:text-lg">
          Pelajari pengertian, gejala, perawatan, dan pencegahan ISPA dengan tampilan ringkas agar orang tua lebih cepat mengambil keputusan awal.
        </p>
      </section>

      {Object.entries(grouped).map(([kategori, items], index) => {
        const config = kategoriConfig[kategori] || {
          label: kategori.replaceAll('_', ' '),
          icon: Stethoscope,
          accent: 'bg-slate-50 text-slate-700',
          placeholder: 'Placeholder Gambar Materi',
          image: '',
          images: [],
        };
        const SectionIcon = config.icon;
        const isEven = index % 2 === 0;

        return (
          <section key={kategori} className="card overflow-hidden p-0">
            <div className={`flex items-center gap-3 px-5 py-5 ${config.accent}`}>
              <SectionIcon className="h-6 w-6" />
              <h2 className="text-2xl font-bold">{config.label}</h2>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2 md:items-center">
              <div className={`space-y-3 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                {items.map((item, idx) => (
                  <article key={`${item.title}-${idx}`} className="rounded-2xl bg-white p-5 shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{item.content}</p>
                  </article>
                ))}
              </div>
              <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                <ImageBlock title={config.placeholder} src={config.image} images={config.images} />
              </div>
            </div>
          </section>
        );
      })}

      <section className="card bg-gradient-to-b from-red-50 to-white">
        <h2 className="mb-3 text-2xl font-bold text-red-700">Tanda Bahaya</h2>
        <p className="mb-4 text-base text-red-600">Jika muncul salah satu kondisi berikut, segera ke fasilitas kesehatan.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {tandaBahaya.map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-xl bg-white p-4 text-base text-red-700 shadow-sm">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
