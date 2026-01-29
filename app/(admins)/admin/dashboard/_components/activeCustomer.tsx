import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ActiveCustomer = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Customers Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm min-h-70">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">#</th>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2 px-2">Journey</th>
              <th className="text-left py-2">Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">1</td>
              <td className="py-2">Jane SMMMC</td>
              <td className="py-2">
                <div className="w-18 md:w-30 h-1.5 bg-blue-100 rounded">
                  <div
                    className="h-full bg-blue-600 rounded"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </td>
              <td className="py-2 text-blue-600 text-center">
                <span className="bg-blue-100 w-16 py-1 rounded border-blue-600 border inline-block">
                  67%
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">2</td>
              <td className="py-2">Jane Smith</td>
              <td className="py-2">
                <div className="w-18 md:w-30 h-1.5 bg-green-100 rounded">
                  <div
                    className="h-full bg-green-600 rounded"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </td>
              <td className="py-2 text-green-600 text-center">
                <span className="bg-green-100 w-16 py-1 rounded border-green-600 border inline-block">
                  67%
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">3</td>
              <td className="py-2">Bob Johnson</td>
              <td className="py-2">
                <div className="w-18 md:w-30 h-1.5 bg-red-100 rounded">
                  <div
                    className="h-full bg-red-600 rounded"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </td>
              <td className="py-2 text-red-600 text-center">
                <span className="bg-red-100 w-16 py-1 rounded border-red-600 border inline-block">
                  89%
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">4</td>
              <td className="py-2">Alice Brown</td>
              <td className="py-2">
                <div className="w-18 md:w-30 h-1.5 bg-yellow-100 rounded">
                  <div
                    className="h-full bg-yellow-600 rounded"
                    style={{ width: "23%" }}
                  ></div>
                </div>
              </td>
              <td className="py-2 text-yellow-600 text-center">
                <span className="bg-yellow-100 w-16 py-1 rounded border-yellow-600 border inline-block">
                  23%
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">5</td>
              <td className="py-2">Charlie Wilson</td>
              <td className="py-2">
                <div className="w-18 md:w-30 h-1.5 bg-purple-100 rounded">
                  <div
                    className="h-full bg-purple-600 rounded"
                    style={{ width: "56%" }}
                  ></div>
                </div>
              </td>
              <td className="py-2 text-purple-600 text-center">
                <span className="bg-purple-100 w-16 py-1 rounded border-purple-600 border inline-block">
                  56%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ActiveCustomer;
