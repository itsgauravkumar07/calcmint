import { cn } from "@/lib/utils";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  minWidth?: string;
  maxHeight?: string;
  emptyMessage?: string;
}

export function DataTable<T extends object>({
  columns,
  data,
  minWidth = "900px",
  maxHeight = "500px",
  emptyMessage = "No data available.",
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card card-shadow">
      <div
        className="table-scroll overflow-auto"
        style={{ maxHeight }}
      >
        <table
          className="w-full border-collapse"
          style={{ minWidth }}
        >
          <thead className="sticky top-0 z-10 bg-muted shadow-sm">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="border-b border-border px-4 py-3 text-left text-sm font-semibold text-foreground"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-10 text-center text-sm text-text-muted"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-border transition-colors hover:bg-muted/40"
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="px-4 py-3 text-sm text-text-secondary whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : String(row[column.key])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}