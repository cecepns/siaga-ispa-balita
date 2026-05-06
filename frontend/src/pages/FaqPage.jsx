import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah batuk pilek selalu ISPA?',
    a: [
      'Batuk dan pilek merupakan gejala ISPA ringan yang sering terjadi pada anak.',
      'Sebagian besar disebabkan oleh infeksi virus dan dapat membaik dengan perawatan di rumah.',
      'Orang tua tetap perlu memantau apakah muncul tanda bahaya seperti sesak napas atau napas cepat.',
    ],
  },
  {
    q: 'Kapan anak dengan batuk pilek harus dibawa ke fasilitas kesehatan?',
    a: ['Segera periksa ke fasilitas kesehatan bila anak mengalami:'],
    points: ['Sesak napas', 'Napas cepat', 'Tarikan dinding dada', 'Demam tinggi', 'Sulit makan atau minum', 'Sangat lemas', 'Kejang'],
  },
  {
    q: 'Kapan demam pada anak dianggap berbahaya?',
    a: ['Demam perlu diwaspadai bila:'],
    points: ['Suhu tubuh >= 38°C', 'Berlangsung lebih dari 3 hari', 'Disertai sesak napas', 'Anak mengalami kejang'],
    closing: 'Segera periksa ke fasilitas kesehatan bila demam tidak membaik atau kondisi anak memburuk.',
  },
  {
    q: 'Bagaimana cara mengukur suhu tubuh anak?',
    a: [
      'Suhu tubuh dapat diukur menggunakan termometer digital pada ketiak, mulut, atau dahi sesuai petunjuk penggunaan alat.',
      'Suhu normal anak sekitar 36,5°C-37,5°C.',
      'Demam biasanya ditandai suhu >= 38°C.',
    ],
  },
  {
    q: 'Bagaimana cara menghitung napas anak?',
    a: ['Hitung gerakan dada anak naik turun selama 1 menit penuh saat anak dalam keadaan tenang atau tidur.', 'Napas cepat:'],
    points: ['Usia kurang dari 2 bulan: >= 60 kali/menit', 'Usia 2-11 bulan: >= 50 kali/menit', 'Usia 12-59 bulan: >= 40 kali/menit'],
  },
  {
    q: 'Bagaimana cara menurunkan demam pada anak?',
    a: ['Beberapa cara yang dapat dilakukan:'],
    points: ['Kompres hangat', 'Pakaikan baju tipis dan nyaman', 'Berikan cairan lebih banyak', 'Istirahat cukup'],
  },
  {
    q: 'Apakah anak dengan ISPA harus diberi antibiotik?',
    a: [
      'Tidak semua ISPA memerlukan antibiotik.',
      'Sebagian besar ISPA disebabkan oleh virus sehingga cukup dirawat dengan istirahat, cairan, dan pemantauan kondisi anak.',
      'Antibiotik hanya diberikan sesuai anjuran tenaga kesehatan.',
    ],
  },
  {
    q: 'Apakah ISPA bisa menular?',
    a: ['Ya. ISPA dapat menular melalui percikan batuk dan bersin, kontak langsung dengan penderita, atau benda yang terkontaminasi virus dan bakteri.'],
  },
];

export default function FaqPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-blue-700">Pertanyaan Umum (FAQ)</h1>
      {faqs.map((item, index) => (
        <details key={item.q} className="card group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-800 group-open:text-blue-700">
            <span>{index + 1}. {item.q}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180 group-open:text-blue-700" />
          </summary>
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
            {item.a.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {item.points?.length > 0 && (
              <ul className="list-disc space-y-1 pl-5">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {item.closing && <p>{item.closing}</p>}
          </div>
        </details>
      ))}
    </div>
  );
}
