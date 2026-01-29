import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ActivityInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm min-h-70">
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-[#7B91B0] text-xs">
                Donald updated the status of Refund #1234 to awaiting customer
                response
              </td>
              <td className="py-2 text-[#7B91B0] text-[10px]">Time: 10 Min ago</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-[#7B91B0] text-xs">
                Donald updated the status of Refund #1234
              </td>
              <td className="py-2 text-[#7B91B0] text-[10px]">Time: 10 Min ago</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-[#7B91B0] text-xs">
                Donald updated the status of Refund #1234
              </td>
              <td className="py-2 text-[#7B91B0] text-[10px]">Time: 10 Min ago</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-[#7B91B0] text-xs">
                Donald updated the status of Refund #1234 
              </td>
              <td className="py-2 text-[#7B91B0] text-[10px]">Time: 10 Min ago</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-[#7B91B0] text-xs">
                Donald updated the status of Refund #1234
              </td>
              <td className="py-2 text-[#7B91B0] text-[10px]">Time: 10 Min ago</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-[#7B91B0] text-xs">
                Donald updated the status of Refund #1234
              </td>
              <td className="py-2 text-[#7B91B0] text-[10px]">Time: 10 Min ago</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ActivityInfo;
