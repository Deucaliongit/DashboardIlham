import React, { useEffect, useState } from "react";
import axios from "axios";

const TableItem = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [dataItemIT, setDataItemIT] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endPoint = "http://10.17.44.43:3000/item";
        const dataItem = await axios.get(endPoint);
        console.log(dataItem);
        setDataItemIT(dataItem.data.data);
      } catch (error) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="w-full mx-auto px-4">
      <div className="dark:text-slate-400 text-slate-700 font-semibold">
        <h1>List Asset IT</h1>
      </div>
      <div className="overflow-x-auto py-4">
        <table className="min-w-full dark:bg-slate-800/60 bg-white border border-gray-200 dark:border-none">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b dark:border-none border-gray-200 text-left text-sm leading-4 text-gray-600 dark:text-slate-300 tracking-wider">
                No
              </th>
              <th className="px-6 py-3 border-b dark:border-none border-gray-200 text-left text-sm leading-4 text-gray-600 dark:text-slate-300 tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b dark:border-none border-gray-200 text-left text-sm leading-4 text-gray-600 dark:text-slate-300 tracking-wider">
                Detail
              </th>
              <th className="px-6 py-3 border-b dark:border-none border-gray-200 text-left text-sm leading-4 text-gray-600 dark:text-slate-300 tracking-wider">
                Kategori
              </th>
              <th className="px-6 py-3 border-b dark:border-none border-gray-200 text-left text-sm leading-4 text-gray-600 dark:text-slate-300 tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800/70">
            {dataItemIT.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center font-semibold px-6 py-4 border-b dark:border-none border-gray-200 text-sm leading-5 text-gray-700 dark:text-slate-400"
                >
                  Data Not Found
                </td>
              </tr>
            ) : (
              dataItemIT.map((item, index) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 border-b dark:border-none border-gray-200 text-sm leading-5 text-gray-700 dark:text-slate-400">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 border-b dark:border-none border-gray-200 text-sm leading-5 text-gray-700 dark:text-slate-400">
                    {item.nama}
                  </td>
                  <td className="px-6 py-4 border-b dark:border-none border-gray-200 text-sm leading-5 text-gray-700 dark:text-slate-400">
                    {item.detail_nama}
                  </td>
                  <td className="px-6 py-4 border-b dark:border-none border-gray-200 text-sm leading-5 text-gray-700 dark:text-slate-400">
                    {item.kategori}
                  </td>
                  <td className="px-6 py-4 border-b dark:border-none border-gray-200 text-sm leading-5 text-gray-700 dark:text-slate-400">
                    {item.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableItem;
