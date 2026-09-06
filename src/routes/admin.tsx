import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

type Inquiry = {
  name?: string;
  mobile?: string;
  orderType?: string;
  waterType?: string;
  quantity?: string;
  message?: string;
  at?: string;
};

const STORAGE_KEY = "acqua-fusion-inquiries";

export const Route = createFileRoute("/admin")({ component: Admin });

function Admin() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<Inquiry[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Inquiry[];
    } catch {
      return [];
    }
  });

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((item) =>
      Object.values(item).some((value) =>
        String(value ?? "").toLowerCase().includes(needle),
      ),
    );
  }, [items, query]);

  function clearAll() {
    if (!window.confirm("Clear all saved inquiries from this browser?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setItems([]);
  }

  return (
    <main className="min-h-screen bg-mist px-5 py-8 text-ink sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Acqua Fusion
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] text-brand-deep">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-sm text-muted">
              Manage inquiries saved in this browser.
            </p>
          </div>
          <a className="text-sm font-bold text-brand hover:underline" href="/">
            Back to website
          </a>
        </header>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-paper p-5 shadow-card">
            <p className="text-sm text-muted">Total inquiries</p>
            <p className="mt-2 text-3xl font-bold text-brand-deep">{items.length}</p>
          </div>
          <div className="rounded-2xl bg-paper p-5 shadow-card">
            <p className="text-sm text-muted">Showing</p>
            <p className="mt-2 text-3xl font-bold text-brand-deep">{filtered.length}</p>
          </div>
          <button
            className="rounded-2xl border border-danger/30 bg-paper p-5 text-left shadow-card hover:bg-red-50"
            onClick={clearAll}
            type="button"
          >
            <p className="text-sm font-bold text-danger">Clear local inquiries</p>
            <p className="mt-2 text-sm text-muted">Remove all records from this browser.</p>
          </button>
        </section>

        <div className="mb-5">
          <input
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-aqua/30"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, mobile, order, or message..."
            value={query}
          />
        </div>

        <section className="overflow-hidden rounded-2xl bg-paper shadow-card">
          {filtered.length === 0 ? (
            <p className="p-8 text-center text-sm text-muted">No inquiries found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-brand-deep text-foam">
                  <tr>
                    <th className="px-5 py-4">Customer</th>
                    <th className="px-5 py-4">Order</th>
                    <th className="px-5 py-4">Water</th>
                    <th className="px-5 py-4">Qty</th>
                    <th className="px-5 py-4">Message</th>
                    <th className="px-5 py-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item, index) => (
                    <tr className="border-b border-line last:border-0" key={`${item.at}-${index}`}>
                      <td className="px-5 py-4">
                        <strong className="block text-brand-deep">{item.name || "—"}</strong>
                        <span className="text-muted">{item.mobile || "—"}</span>
                      </td>
                      <td className="px-5 py-4">{item.orderType || "—"}</td>
                      <td className="px-5 py-4">{item.waterType || "—"}</td>
                      <td className="px-5 py-4">{item.quantity || "—"}</td>
                      <td className="max-w-xs px-5 py-4 text-muted">{item.message || "—"}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-muted">
                        {item.at ? new Date(item.at).toLocaleString() : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
