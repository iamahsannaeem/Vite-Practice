import React, { useState } from "react"
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table"
////Columns Headings Has been created Seperate file and Import Here
import { columnHeadings } from "./Column"
///Dummy Data file are created and import here
import { data } from "./Data"

const GlobalFiltering = () => {
  const [sorting, setSorting] = useState([])
  const [filter, setFilter] = useState("")

  const Table = useReactTable({
    columns: columnHeadings,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
  })

  return (
    <>
      <div className="w-full p-5 ">
        <div className="flex justify-between">
          <input
            type="text"
            className="w-[25%] my-2 bg-slate-200 outline-none h-10 rounded pl-2"
            placeholder="Search Here for record..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div className="flex items-center bg-slate-200 my-2 px-2 rounded space-x-2">
            <p>Select Rows Per Page : </p>
            <select
              value={Table.options.state.pagination.pageSize}
              onChange={(e) => Table.setPageSize(e.target.value)}
              className="bg-slate-300 outline-none "
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <table className="w-full cursor-default">
          <thead className="">
            {Table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id} className="bg-green-300">
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        className="text-left py-2 pl-1 cursor-pointer hover:underline underline-offset-2"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    )
                  })}
                </tr>
              )
            })}
          </thead>
          <tbody>
            {Table.getRowModel().rows.map((rowEl) => {
              return (
                <tr key={rowEl.id} className="even:bg-slate-200">
                  {rowEl.getVisibleCells().map((cellEl) => {
                    return (
                      <td key={cellEl.id} className="py-2 pl-1">
                        {flexRender(
                          cellEl.column.columnDef.cell,
                          cellEl.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <hr className="border-t boreder-2 border-black my-2" />
        <div className="flex justify-between">
          <div className="space-x-2">
            <button
              className={`disabled:bg-gray-300 disabled:text-black bg-gray-500 p-2 rounded text-white disabled:scale-100 disabled:shadow-none hover:bg-gray-600 hover:shadow transition duration-150 hover:scale-[.98]`}
              onClick={() => Table.setPageIndex(0)}
              disabled={!Table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className={`disabled:bg-gray-300 disabled:text-black bg-gray-500 p-2 rounded text-white disabled:scale-100 disabled:shadow-none hover:bg-gray-600 hover:shadow transition duration-150 hover:scale-[.98]`}
              onClick={() => Table.previousPage()}
              disabled={!Table.getCanPreviousPage()}
            >
              Previous
            </button>
            <button
              className={`disabled:bg-gray-300 disabled:text-black bg-gray-500 p-2 rounded text-white disabled:scale-100 disabled:shadow-none hover:bg-gray-600 hover:shadow transition duration-150 hover:scale-[.98]`}
              onClick={() => Table.nextPage()}
              disabled={!Table.getCanNextPage()}
            >
              Next Page
            </button>

            <button
              className={`disabled:bg-gray-300 disabled:text-black bg-gray-500 p-2 rounded text-white disabled:scale-100 disabled:shadow-none hover:bg-gray-600 hover:shadow transition duration-150 hover:scale-[.98]`}
              onClick={() => Table.setPageIndex(Table.getPageCount() - 1)}
              disabled={!Table.getCanNextPage()}
            >
              {">>"}
            </button>
            <input
              type="number"
              name=""
              id=""
              className=" bg-slate-200 outline-none h-10 rounded px-2"
              defaultValue={Table.options.state.pagination.pageIndex}
              onChange={(e) => Table.setPageIndex(e.target.value)}
              placeholder="Search Page"
            />
          </div>
          <div className="flex space-x-2">
            <p className="font-semibold ">Current Page</p>
            <span className="text-green-500 font-semibold">
              {Table.options.state.pagination.pageIndex}
            </span>

            <p className="font-semibold ">Total Page </p>
            <span className="text-green-500 font-semibold">
              {Table.getPageCount() - 1}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default GlobalFiltering
