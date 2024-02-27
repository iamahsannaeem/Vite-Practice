import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import { columnHeadings } from "./Column";
import { data } from "./Data";

const BasicTable = () => {
  const finalColumn = useMemo(() => columnHeadings, []);
  const finalData = useMemo(() => data, []);
  const Table = useReactTable({
    columns: finalColumn,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full p-5">
      <table className="w-full">
        <thead style={{ padding: "50px" }}>
          {Table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id} className="bg-yellow-500">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      colSpan={header.colSpan}
                      key={header.key}
                      className="text-left"
                      style={{ padding: "10px", color: "white" }}
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
              <tr key={rowEl.id} className="even:bg-green-200">
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id} className="py-1 pl-2">
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
