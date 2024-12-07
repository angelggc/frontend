import { PropsWithChildren } from "react";

export function Table({ children }: PropsWithChildren) {
  return (
    <table className="w-full bg-white shadow">
      <tr className="bg-[#00000005] border-b text-sm text-opacity-80">
        <td className="p-3">Project info</td>
        <td>Project manager</td>
        <td>Assigned to</td>
        <td>Status</td>
        <td>Action</td>
      </tr>
      {children}
    </table>
  );
}
