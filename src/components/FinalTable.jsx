import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { columnHeadings } from "./Column";
import { data } from "./Data";

const FinalTable = () => {
  const finalColumn = columnHeadings;
  const finaalData = data;

  const [sorting, setSorting] = useState([]);
  const Table = useReactTable({
    columns: finalColumn,
    data: finaalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });
  return (
    <>
      <div className="w-full p-5">
        <table className="w-full border border-black cursor-default">
          <thead className="border border-black">
            {Table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id} className=" bg-green-400">
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        className="border border-black cursor-pointer hover:underline underline-offset-2"
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
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
                  className="border border-black even:bg-slate-300"
                >
                  {rowEl.getVisibleCells().map((cellEl) => {
                    return (
                      <td key={cellEl.id} className="border border-black pl-2">
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
    </>
  );
};

export default FinalTable;
