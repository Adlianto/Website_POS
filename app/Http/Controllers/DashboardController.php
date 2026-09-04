<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transaction;
use App\Models\TransactionItem;
use Carbon\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $today = Carbon::today();

        // 1. Metrik Utama Hari Ini
        $todayTransactions = Transaction::whereDate('created_at', $today);
        $todayRevenue = (float) $todayTransactions->sum('total_amount');
        $todayCount = $todayTransactions->count();

        // 2. Jumlah Item Terjual Hari Ini
        $itemsSoldToday = (int) TransactionItem::whereHas('transaction', function ($query) use ($today) {
            $query->whereDate('created_at', $today);
        })->sum('qty');

        // 3. Peringatan Stok Menipis (stok <= min_stock_alert)
        $lowStockProducts = Product::with('category')
            ->whereColumn('stock', '<=', 'min_stock_alert')
            ->orderBy('stock', 'asc')
            ->take(5)
            ->get();

        // 4. Riwayat 5 Transaksi Terakhir
        $recentTransactions = Transaction::with('user')
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('dashboard', [
            'metrics' => [
                'today_revenue' => $todayRevenue,
                'today_transactions' => $todayCount,
                'items_sold_today' => $itemsSoldToday,
                'low_stock_count' => Product::whereColumn('stock', '<=', 'min_stock_alert')->count(),
            ],
            'lowStockProducts' => $lowStockProducts,
            'recentTransactions' => $recentTransactions,
        ]);
    }
}