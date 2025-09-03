"use client";

import { ReactNode } from "react";

interface TableColumn {
  header: string;
  key: string;
  className?: string;
}

interface TableRow {
  [key: string]: ReactNode;
}

interface ResponsiveTableProps {
  columns: TableColumn[];
  data: TableRow[];
  className?: string;
}

export default function ResponsiveTable({ columns, data, className = "" }: ResponsiveTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      {/* Desktop Table */}
      <table className="w-full border-collapse border border-gray-300 rounded-lg hidden sm:table">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`border border-gray-300 p-2 sm:p-4 text-left font-semibold text-sm sm:text-base ${column.className || ""}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="border border-gray-300 p-2 sm:p-4 text-sm sm:text-base"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {data.map((row, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
            {columns.map((column) => (
              <div key={column.key} className="mb-3 last:mb-0">
                <div className="text-sm font-semibold text-gray-600 mb-1">
                  {column.header}
                </div>
                <div className="text-sm text-gray-900">
                  {row[column.key]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}