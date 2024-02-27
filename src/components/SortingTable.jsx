import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { columnHeadings } from "./Column";
import { data } from "./Data";

const BasicTable = () => {
  const finalColumn = columnHeadings;
  const finalData = data;
  const [sorting, setSorting] = useState([]);

  const Table = useReactTable({
    columns: finalColumn,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      state: sorting,
    },
    onSortingChange: setSorting,
  });
  return (
    <div className="w-full p-5">
      <table className="w-full cursor-default">
        <thead style={{ padding: "50px" }}>
          {Table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                key={headerGroup.id}
                className="bg-yellow-200 border-2 border-black"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      colSpan={header.colSpan}
                      key={header.key}
                      className="text-left hover:cursor-pointer hover:underline border-2 border-black"
                      style={{ padding: "10px", color: "black" }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {Table.getRowModel().rows.map((rowEl) => {
            return (
              <tr
                key={rowEl.id}
                className="even:bg-green-200 border-2 border-black"
              >
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td
                      key={cellEl.id}
                      className="py-1 pl-2 border-2 border-black"
                    >
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
