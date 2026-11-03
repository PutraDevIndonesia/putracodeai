export const SKILLS_CATEGORIES = [
  { id: 'all', label: 'Semua Skill', count: 12 },
  { id: 'coding-architecture', label: 'Coding & Arsitektur', count: 3 },
  { id: 'debugging-qa', label: 'Debugging & Pengujian', count: 3 },
  { id: 'database-api', label: 'Database & API', count: 3 },
  { id: 'devops-security', label: 'DevOps & Keamanan', count: 3 }
];

export const SKILLS_LIST = [
  {
    id: 'refactor-clean',
    name: 'refactor-clean',
    tag: '@skills refactor-clean',
    category: 'coding-architecture',
    categoryLabel: 'Coding & Arsitektur',
    shortDesc: 'Refactoring bedah: pecah fungsi monster (500+ baris), terapkan early-return, hapus duplikasi (DRY), 100% zero-regression.',
    fullDesc: 'Menyederhanakan struktur kontrol kompleks, mengekstrak fungsi modular atau custom hook, serta mengeliminasi baris kode mati tanpa merubah kontrak API atau merusak fungsionalitas yang telah berjalan.',
    command: '@skills refactor-clean',
    params: '[target: file_path | function_name]',
    samplePrompt: '@skills refactor-clean src/services/orderProcessor.ts sederhanakan nested if-else menjadi guard clauses dan pisahkan validasi.',
    simulation: {
      step1: 'Memetakan alur kontrol: mendeteksi 5 level nested conditionals pada fungsi proses pesanan.',
      step2: 'Menerapkan guard clauses (early return) untuk memangkas cyclomatic complexity dari 16 ke 3.',
      step3: 'Menyunting baris secara in-place tanpa menyentuh modul dependen lainnya.',
      codeSnippet: `// Setelah Refactor: Pola Early-Return Bersih
export function processOrder(order, context) {
  if (!order?.id) return { status: 'error', message: 'Order ID invalid' };
  if (!context?.user) return { status: 'error', message: 'Unauthenticated' };
  
  const paymentHandler = paymentRegistry.get(order.paymentMethod);
  if (!paymentHandler) return { status: 'error', message: 'Metode pembayaran tidak didukung' };
  
  return paymentHandler.charge(order);
}`
    }
  },
  {
    id: 'db-schema',
    name: 'db-schema',
    tag: '@skills db-schema',
    category: 'database-api',
    categoryLabel: 'Database & API',
    shortDesc: 'Perancangan skema database relasional (PostgreSQL, MySQL, SQLite), indexing pencegah slow query, dan migrasi aman.',
    fullDesc: 'Menyusun tabel normalisasi terukur, foreign keys berindeks, aturan cascade yang aman, serta skrip migrasi Prisma, Drizzle, atau SQL murni tanpa downtime.',
    command: '@skills db-schema',
    params: '[dialect: postgresql | mysql | sqlite] [orm: prisma | drizzle | sql]',
    samplePrompt: '@skills db-schema postgresql prisma Rancang skema sesi chat AI, riwayat eksekusi kode, dan tabel token tracking.',
    simulation: {
      step1: 'Menentukan entitas utama: Session, CodeExecution, ProjectContext, dan TokenUsage.',
      step2: 'Menambahkan compound index pada [sessionId, createdAt] untuk optimasi query pembacaan riwayat.',
      step3: 'Menghasilkan skema Prisma lengkap dengan relasi referensial dan constraints aman.',
      codeSnippet: `model CodeExecution {
  id          String   @id @default(uuid())
  sessionId   String
  command     String
  status      String   // 'success' | 'failed'
  durationMs  Int
  createdAt   DateTime @default(now())

  session     Session  @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  @@index([sessionId, createdAt])
}`
    }
  },
  {
    id: 'mcp-builder',
    name: 'mcp-builder',
    tag: '@skills mcp-builder',
    category: 'coding-architecture',
    categoryLabel: 'Coding & Arsitektur',
    shortDesc: 'Panduan pembuatan server MCP (Model Context Protocol) untuk menghubungkan AI dengan tool dan layanan eksternal.',
    fullDesc: 'Membangun server MCP standar industri berbasis TypeScript (MCP SDK) atau Python (FastMCP) lengkap dengan validasi skema input Zod, error boundaries, dan stdio transport.',
    command: '@skills mcp-builder',
    params: '[runtime: typescript | python] [transport: stdio | sse]',
    samplePrompt: '@skills mcp-builder typescript Buatkan MCP server untuk mengeksekusi perintah CLI dan membaca git status.',
    simulation: {
      step1: 'Menginisialisasi instance MCP Server dengan protokol stdio transport.',
      step2: 'Mendaftarkan tool "git_status_check" dengan validasi parameter menggunakan skema Zod.',
      step3: 'Menyertakan graceful error handling dan format respons terstruktur.',
      codeSnippet: `server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "execute_git_status",
    description: "Membaca branch aktif dan perubahan file kerja",
    inputSchema: zodToJsonSchema(z.object({
      repoPath: z.string().min(1)
    }))
  }]
}));`
    }
  },
  {
    id: 'api-designer',
    name: 'api-designer',
    tag: '@skills api-designer',
    category: 'database-api',
    categoryLabel: 'Database & API',
    shortDesc: 'Perancangan REST & GraphQL API modern: OpenAPI/Swagger spec, validasi runtime Zod, status code HTTP presisi.',
    fullDesc: 'Menyusun endpoint idempotent, standardisasi struktur response envelope, autentikasi Bearer JWT aman, serta pagination berbasis kursor yang scalable.',
    command: '@skills api-designer',
    params: '[format: rest | graphql] [spec: openapi | zod]',
    samplePrompt: '@skills api-designer rest zod Rancang endpoint CRUD untuk manajemen ekstensi dengan validasi payload lengkap.',
    simulation: {
      step1: 'Menentukan kontrak endpoint: POST /api/v1/extensions, GET /api/v1/extensions/:id.',
      step2: 'Membangun skema validasi runtime Zod dengan pesan kesalahan deskriptif.',
      step3: 'Menyusun response handler dengan HTTP Status 201 Created dan standard error payload.',
      codeSnippet: `export const CreateExtensionSchema = z.object({
  name: z.string().min(3).max(50),
  version: z.string().regex(/^\\d+\\.\\d+\\.\\d+$/),
  repositoryUrl: z.string().url().optional()
});

export type CreateExtensionDto = z.infer<typeof CreateExtensionSchema>;`
    }
  },
  {
    id: 'debug-systematic',
    name: 'debug-systematic',
    tag: '@skills debug-systematic',
    category: 'debugging-qa',
    categoryLabel: 'Debugging & Pengujian',
    shortDesc: 'Investigasi 4 tahap: rumuskan gejala, buat hipotesis, buktikan dengan log/uji riil, lalu perbaiki akar masalah.',
    fullDesc: 'Mencegah perbaikan spekulatif (trial-and-error). Mengisolasi variabel masalah hingga sumber bug terbukti melalui bukti log nyata atau kegagalan tes yang dapat direproduksi.',
    command: '@skills debug-systematic',
    params: '[error_trace: string | error_log]',
    samplePrompt: '@skills debug-systematic Analisis error ECONNRESET saat fetch data ke endpoint gateway eksternal.',
    simulation: {
      step1: 'Gejala: Socket connection tertutup mendadak setelah 30 detik tanpa respons byte pertama.',
      step2: 'Hipotesis: Default timeout pada HTTP Agent lebih pendek daripada pemrosesan backend gateway.',
      step3: 'Pembuktian & Solusi: Menambahkan keep-alive agent dan konfigurasi timeout terukur dengan retry circuit-breaker.',
      codeSnippet: `// Solusi Akar Masalah: Keep-Alive HTTP Agent & Timeout Terukur
import http from 'node:http';

export const safeHttpAgent = new http.Agent({
  keepAlive: true,
  timeout: 60000,
  maxSockets: 50
});`
    }
  },
  {
    id: 'test-writer',
    name: 'test-writer',
    tag: '@skills test-writer',
    category: 'debugging-qa',
    categoryLabel: 'Debugging & Pengujian',
    shortDesc: 'Pembuatan unit & integration test terarah: uji perilaku bukan implementasi, mencakup alur sukses dan sad path.',
    fullDesc: 'Menyusun test suite menggunakan Vitest, Jest, atau Mocha yang mencakup alur sukses, alur gagal (sad path), boundary values, serta pencegahan regresi.',
    command: '@skills test-writer',
    params: '[framework: vitest | jest | mocha] [file: target_file]',
    samplePrompt: '@skills test-writer vitest Tuliskan unit test untuk kalkulator diskon dengan skenario batas dan kupon kedaluwarsa.',
    simulation: {
      step1: 'Menentukan skenario uji: transaksi normal, batas diskon maksimal, kupon kedaluwarsa, dan input negatif.',
      step2: 'Menyusun test cases mandiri tanpa ketergantungan urutan eksekusi.',
      step3: 'Menjalankan vitest dan memastikan branch coverage 100%.',
      codeSnippet: `describe('calculateDiscount', () => {
  it('harus memotong harga sesuai persentase kupon valid', () => {
    const result = calculateDiscount(100000, { type: 'percent', value: 20 });
    expect(result.finalPrice).toBe(80000);
  });

  it('harus melempar error jika kupon sudah kedaluwarsa', () => {
    expect(() => calculateDiscount(100000, { expired: true }))
      .toThrow('Kupon kedaluwarsa');
  });
});`
    }
  },
  {
    id: 'perf-optimizer',
    name: 'perf-optimizer',
    tag: '@skills perf-optimizer',
    category: 'coding-architecture',
    categoryLabel: 'Coding & Arsitektur',
    shortDesc: 'Optimasi performa & memori: eliminasi re-render sia-sia, deteksi memory leak, dan pemangkasan ukuran bundle.',
    fullDesc: 'Menganalisis dependensi hook React, stabilisasi referensi memori dengan useMemo/useCallback, virtualisasi daftar panjang, dan tree-shaking impor modul.',
    command: '@skills perf-optimizer',
    params: '[target: react | node | bundle]',
    samplePrompt: '@skills perf-optimizer src/components/DataGrid.tsx hilangkan lag render saat data mencapai 10.000 baris.',
    simulation: {
      step1: 'Profiling render: mendeteksi 10.000 DOM node dibuat sekaligus tanpa virtual windowing.',
      step2: 'Menerapkan virtualisasi berbasis intersection observer dan memoisasi row renderer.',
      step3: 'Waktu render terpangkas dari 1.200ms menjadi 16ms (60 FPS stabil).',
      codeSnippet: `// Virtualisasi DataGrid & Memoisasi Item
export const MemoizedRow = React.memo(function DataRow({ item, onSelect }) {
  return (
    <div className="h-10 flex items-center px-4 border-b border-zinc-800">
      <span className="font-mono text-xs">{item.id}</span>
      <span className="ml-4 text-xs truncate">{item.name}</span>
    </div>
  );
});`
    }
  },
  {
    id: 'code-review',
    name: 'code-review',
    tag: '@skills code-review',
    category: 'debugging-qa',
    categoryLabel: 'Debugging & Pengujian',
    shortDesc: 'Audit kode komprehensif: deteksi kebocoran memori, race conditions, type safety, dan pergeseran cakupan.',
    fullDesc: 'Memeriksa diff kode sebelum commit atau deployment. Memastikan tidak ada console log debugging tertinggal, variabel tak terpakai, atau perubahan yang tidak diminta.',
    command: '@skills code-review',
    params: '[target: git_diff | file_list]',
    samplePrompt: '@skills code-review Periksa pull request implementasi auth provider dan validasi token session.',
    simulation: {
      step1: 'Menganalisis diff perubahan dan pohon dependensi komponen.',
      step2: 'Memeriksa potensi race condition pada token refresh concurrency.',
      step3: 'Memberikan laporan review konstruktif beserta rekomendasi fix langsung.',
      codeSnippet: `// AUDIT CODE-REVIEW:
// [PASS] Bebas dari variabel global yang tidak aman
// [PERINGATAN] Multiple concurrent refresh requests terdeteksi
// [FIX] Tambahkan shared promise lock saat refreshing token:
let refreshPromise: Promise<string> | null = null;`
    }
  },
  {
    id: 'security-audit',
    name: 'security-audit',
    tag: '@skills security-audit',
    category: 'devops-security',
    categoryLabel: 'DevOps & Keamanan',
    shortDesc: 'Audit keamanan standar OWASP: cegah injeksi SQL/Command, sanitasi parameter input, XSS, dan kebocoran credential.',
    fullDesc: 'Memindai seluruh basis kode terhadap string rahasia ter-hardcode, eksekusi shell berbahaya, sanitasi path traversal, dan pengamanan header HTTP.',
    command: '@skills security-audit',
    params: '[scope: full | api | secrets]',
    samplePrompt: '@skills security-audit full Audit endpoint upload dan eksekusi child_process dari celah Remote Code Execution.',
    simulation: {
      step1: 'Memeriksa eksekusi shell command: memastikan tidak ada raw string interpolation yang rentan dieksploitasi.',
      step2: 'Menerapkan allowlist perintah dan sanitasi argumen via execFile tanpa spawning shell eksternal.',
      step3: 'Memastikan seluruh secret key diakses via environment variable terenkripsi.',
      codeSnippet: `// Eksekusi Aman Tanpa Shell Injection
import { execFile } from 'node:child_process';

export function runSanitizedCommand(binaryPath, args) {
  // execFile tidak memakai shell eksternal sehingga kebal injeksi argumen
  return new Promise((resolve, reject) => {
    execFile(binaryPath, args, { timeout: 15000 }, (err, stdout) => {
      if (err) return reject(err);
      resolve(stdout);
    });
  });
}`
    }
  },
  {
    id: 'auto-deploy',
    name: 'auto-deploy',
    tag: '@skills auto-deploy',
    category: 'devops-security',
    categoryLabel: 'DevOps & Keamanan',
    shortDesc: 'Otomasi rilis live: inisialisasi Git, buat repo GitHub (gh CLI), push kode, deploy ke Vercel/Cloudflare.',
    fullDesc: 'Menangani seluruh alur deployment dari local workspace hingga live URL publik aktif, memverifikasi build produksi bebas error sebelum publikasi.',
    command: '@skills auto-deploy',
    params: '[platform: vercel | cloudflare | netlify] [git: github]',
    samplePrompt: '@skills auto-deploy vercel Publikasikan aplikasi ini ke produksi dan verifikasi URL live.',
    simulation: {
      step1: 'Menjalankan build produksi: "npm run build" -> verifikasi output dist/ bersih tanpa error.',
      step2: 'Membuat repository GitHub via GitHub CLI "gh repo create" dan push commit.',
      step3: 'Deploy ke Vercel melalui CLI atau integrasi Git dan menghasilkan tautan live aktif.',
      codeSnippet: `// Workflow Deployment Otomatis
1. git init && git add -A && git commit -m "feat: release production"
2. gh repo create putracodeai-showcase --public --source=. --push
3. vercel --prod --yes`
    }
  },
  {
    id: 'vps-remote-manager',
    name: 'vps-remote-manager',
    tag: '@skills vps-remote-manager',
    category: 'devops-security',
    categoryLabel: 'DevOps & Keamanan',
    shortDesc: 'Akses & monitoring server VPS remote via SSH: pantau utilisasi CPU/RAM, kelola PM2/Docker, dan konfigurasi Nginx.',
    fullDesc: 'Mengeksekusi perintah jarak jauh terenkripsi, memantau resource server real-time, setup reverse proxy Nginx, dan troubleshooting log server langsung.',
    command: '@skills vps-remote-manager',
    params: '[host: ip/domain] [action: monitor | restart | logs | nginx]',
    samplePrompt: '@skills vps-remote-manager Cek penggunaan memori server dan reload konfigurasi Nginx reverse proxy.',
    simulation: {
      step1: 'Menghubungkan sesi SSH aman menggunakan keypair terverifikasi.',
      step2: 'Memeriksa utilisasi resource: CPU 1.2%, RAM terpakai 1.4GB / 4.0GB.',
      step3: 'Melakukan reload konfigurasi Nginx tanpa memutus koneksi aktif pengguna.',
      codeSnippet: `# Status Monitoring Server VPS
● putracodeai-api.service - PutraCodeAi Engine Backend
     Active: active (running) since Tue 2026-11-03 04:30:12 WIB
     Memory: 184.2M (limit: 1.0G)
     CPU: 0.8% (2 cores available)`
    }
  },
  {
    id: 'project-handoff',
    name: 'project-handoff',
    tag: '@skills project-handoff',
    category: 'devops-security',
    categoryLabel: 'DevOps & Keamanan',
    shortDesc: 'Dokumentasi serah terima proyek: penyusunan PROGRESS.md dan ERROR_LOGS.md terstruktur dan berkesinambungan.',
    fullDesc: 'Merekam riwayat perubahan file, langkah penyelesaian fitur, dokumentasi akar masalah bug, dan panduan tindak lanjut secara rapi dan profesional.',
    command: '@skills project-handoff',
    params: '[files: PROGRESS.md, ERROR_LOGS.md]',
    samplePrompt: '@skills project-handoff Buatkan dokumentasi serah terima proyek mencakup status fitur dan catatan error.',
    simulation: {
      step1: 'Mengompilasi daftar berkas yang dimodifikasi dan status fungsionalitas.',
      step2: 'Mendokumentasikan log error beserta metode penanganan konkret.',
      step3: 'Menyusun berkas PROGRESS.md dan ERROR_LOGS.md siap serah terima.',
      codeSnippet: `## Status Akhir Serah Terima
- Ekstensi: PutraCodeAi VS Code
- Status: Production Ready & Terverifikasi
- Dokumentasi: PROGRESS.md & ERROR_LOGS.md Terkini`
    }
  }
];

export const VSCODE_EXTENSION_FEATURES = [
  {
    icon: 'Brain',
    title: 'Eksekusi Bedah (Surgical Edits)',
    description: 'Menyunting hanya baris kode yang relevan dengan presisi tinggi. Menghemat token, menjaga konsistensi gaya kode, dan 100% zero-regression pada fitur lain.'
  },
  {
    icon: 'Zap',
    title: 'Debugging Sistematis & Root-Cause',
    description: 'Mengidentifikasi akar penyebab error secara metodis melalui hipotesis dan bukti log riil, bukan sekadar tebak-tebakan atau trial-and-error acak.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Audit Keamanan & Standar OWASP',
    description: 'Mendeteksi potensi celah injeksi, sanitasi parameter input berbahaya, XSS, dan kebocoran credential sebelum kode sempat di-commit atau dirilis.'
  },
  {
    icon: 'Terminal',
    title: 'Verifikasi Otomatis di Terminal',
    description: 'Menjalankan linter, typecheck TypeScript/JS, dan unit test otomatis di terminal latar belakang untuk memastikan seluruh perubahan kode teruji sempurna.'
  },
  {
    icon: 'FileCode2',
    title: 'Manajemen Memori Proyek Kontinu',
    description: 'Merekam riwayat langkah kerja dan log penanganan error secara terstruktur, memastikan kesinambungan konteks rekayasa antar sesi tanpa terputus.'
  },
  {
    icon: 'Cpu',
    title: 'Performa Cepat Tanpa Bebani CPU',
    description: 'Dibangun khusus untuk Visual Studio Code dengan runtime async non-blocking. Sangat hemat sumber daya dan responsif saat menangani repositori besar.'
  }
];

export const INSTALL_METHODS = [
  {
    id: 'method-marketplace',
    step: '1',
    title: 'Instal Langsung dari VS Code Marketplace',
    badge: 'Paling Direkomendasikan',
    desc: 'Buka halaman resmi di Visual Studio Marketplace dan klik tombol "Install" untuk memasangnya secara otomatis ke editor VS Code Anda.',
    command: 'https://marketplace.visualstudio.com/items?itemName=MPUTRARAMADHANI.putracodeai'
  },
  {
    id: 'method-quickopen',
    step: '2',
    title: 'VS Code Quick Open (Ctrl+P / Cmd+P)',
    badge: 'Cepat & Praktis',
    desc: 'Tekan Ctrl+P (atau Cmd+P di macOS), tempel perintah instalasi berikut, lalu tekan Enter untuk memasang ekstensi seketika.',
    command: 'ext install MPUTRARAMADHANI.putracodeai'
  },
  {
    id: 'method-terminal',
    step: '3',
    title: 'Instalasi Satu Baris CLI Terminal',
    badge: 'PowerShell / Bash / CMD',
    desc: 'Jalankan perintah resmi berikut di terminal untuk memasang ekstensi PutraCodeAi secara instan melalui baris perintah VS Code.',
    command: 'code --install-extension MPUTRARAMADHANI.putracodeai'
  }
];

