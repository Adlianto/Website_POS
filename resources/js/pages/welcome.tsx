import { Head, Link } from '@inertiajs/react';

interface Props {
    auth: {
        user: {
            name: string;
            role?: string;
        } | null;
    };
}

export default function Welcome({ auth }: Props) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

            <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 font-bold text-white shadow-sm">
                                P
                            </div>
                            <span className="text-lg font-bold tracking-tight text-slate-900">
                                Toko<span className="text-blue-600">POS</span>
                            </span>
                        </div>

                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                            <a href="#fitur" className="hover:text-blue-600 transition">Fitur</a>
                            <a href="#solusi" className="hover:text-blue-600 transition">Alur Kasir</a>
                            <a href="#integrasi" className="hover:text-blue-600 transition">Laporan & Stok</a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        {auth?.user ? (
                            <>
                                <span className="hidden sm:inline-block text-xs font-medium text-slate-500">
                                    Masuk sebagai <strong className="text-slate-800">{auth.user.name}</strong>
                                </span>
                                <Link
                                    href="/pos"
                                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition"
                                >
                                    Buka POS
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="rounded-md px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>

            <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">

                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
                            Operasional Toko Ritel <br />
                            <span className="text-blue-600">Lebih Cepat, Stok Terkendali.</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Solusi Point of Sale lengkap untuk kasir ritel. Dilengkapi pencatatan barcode scanner instan, sinkronisasi stok otomatis, dan rekap profit harian akurat.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                            {auth?.user ? (
                                <>
                                    <Link
                                        href="/pos"
                                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition"
                                    >
                                        Masuk Terminal Kasir
                                    </Link>
                                    <Link
                                        href="/dashboard"
                                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                                    >
                                        Buka Back-Office
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition"
                                    >
                                        Masuk Sebagai Staf
                                    </Link>
                                    <a
                                        href="#fitur"
                                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                                    >
                                        Eksplor Fitur Utama
                                    </a>
                                </>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium pt-2">
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                Support Barcode Scanner
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                Format Cetak Struk 58mm & 80mm
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                Multi-Role (Admin & Kasir)
                            </span>
                        </div>
                    </div>

                    <div className="mt-14 max-w-5xl mx-auto rounded-lg border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 px-2 mb-3">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                                <span className="ml-3 font-mono text-[11px] text-slate-400">pos.terminal.local/checkout</span>
                            </div>
                            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                ONLINE • READY
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-50 p-3 rounded border border-slate-100">
                            <div className="md:col-span-2 space-y-3">
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-white border border-slate-200 rounded px-3 py-2 text-xs text-slate-400 flex items-center justify-between">
                                        <span>Ketik nama barang / scan barcode...</span>
                                        <kbd className="font-mono bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[10px]">Enter</kbd>
                                    </div>
                                    <div className="bg-white border border-slate-200 rounded px-3 py-2 text-xs font-medium text-slate-700">
                                        Semua Kategori
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                    {[
                                        { name: 'Kopi Susu Espresso 250ml', price: 'Rp 18.000', stock: 'Stok: 42' },
                                        { name: 'Roti Panggang Cokelat', price: 'Rp 12.500', stock: 'Stok: 15' },
                                        { name: 'Air Mineral Botol 600ml', price: 'Rp 4.000', stock: 'Stok: 120' },
                                        { name: 'Keripik Singkong Balado', price: 'Rp 9.000', stock: 'Stok: 28' },
                                        { name: 'Teh Melati Kotak 200ml', price: 'Rp 5.500', stock: 'Stok: 60' },
                                        { name: 'Biskuit Gandum Cokelat', price: 'Rp 11.000', stock: 'Stok: 19' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-2.5 rounded border border-slate-200 shadow-sm text-left">
                                            <div className="h-14 rounded bg-slate-100 mb-2 flex items-center justify-center text-slate-400 text-xs font-mono">
                                                BARCODE [{idx + 1}]
                                            </div>
                                            <p className="font-medium text-xs text-slate-800 truncate">{item.name}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="font-bold text-xs text-blue-600">{item.price}</span>
                                                <span className="text-[10px] text-slate-500">{item.stock}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-3 rounded border border-slate-200 flex flex-col justify-between">
                                <div>
                                    <div className="border-b border-slate-100 pb-2 mb-2 flex justify-between items-center">
                                        <span className="font-bold text-xs text-slate-800">Keranjang</span>
                                        <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-medium">3 Item</span>
                                    </div>
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="font-medium text-slate-800">Kopi Susu Espresso</p>
                                                <p className="text-[10px] text-slate-400">2x @ Rp 18.000</p>
                                            </div>
                                            <span className="font-semibold text-slate-700">Rp 36.000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="font-medium text-slate-800">Roti Panggang Cokelat</p>
                                                <p className="text-[10px] text-slate-400">1x @ Rp 12.500</p>
                                            </div>
                                            <span className="font-semibold text-slate-700">Rp 12.500</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-3 mt-4 space-y-2">
                                    <div className="flex justify-between text-xs text-slate-500">
                                        <span>Subtotal</span>
                                        <span>Rp 48.500</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-emerald-600 font-medium">
                                        <span>Diskon Promo</span>
                                        <span>- Rp 5.000</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-dashed border-slate-200 pt-1.5">
                                        <span>Total Akhir</span>
                                        <span className="text-blue-600">Rp 43.500</span>
                                    </div>
                                    <button className="w-full bg-blue-600 text-white rounded py-2 text-xs font-semibold shadow-sm hover:bg-blue-700 transition mt-2">
                                        Proses Bayar (F9)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-slate-200 bg-white py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">TokoPOS System</span>
                        <span>&bull;</span>
                        <span>Retail Platform Management</span>
                    </div>
                    <p>&copy; {new Date().getFullYear()} TokoPOS. Seluruh hak cipta dilindungi undang-undang.</p>
                </div>
            </footer>
        </div>
    );
}