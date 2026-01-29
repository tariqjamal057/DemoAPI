"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumblist";
import AddUserModal from "@/components/admin/user-management/AddUserModal";
import EditUserModal from "@/components/admin/user-management/EditUserModal";
import { User } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for EditUserModal
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // State to store the user being edited
  const queryClient = useQueryClient();

  const { data: users, isLoading, isError, error } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const deleteUserMutation = useMutation<any, Error, string>({
    mutationFn: async (userId: string) => {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete user');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User deleted successfully!');
    },
    onError: (err) => {
      toast.error(err.message || 'Failed to delete user.');
    },
  });

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUserMutation.mutate(userId);
    }
  };

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const breadcrumbs = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      label: "User Management",
      href: "/admin/user-management",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <p>Loading users...</p>
      </div>
    );
  }

  if (isError) {
    toast.error(error?.message || "Failed to fetch users");
    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <p className="text-red-500">Error: {error?.message || "Failed to fetch users"}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="mb-10 hidden md:block">
        <BreadcrumbWithCustomSeparator items={breadcrumbs} />
      </div>
      <h2 className="font-semibold text-xl md:text-2xl text-[#7D7D7D]">
        User Management
      </h2>
      <div className="col-span-12 md:col-span-8 flex flex-col gap-y-4 border p-4 rounded-lg">
        <div className="items-center justify-between grid grid-cols-12 gap-3">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-200 px-3 py-1.5 text-sm rounded-full col-span-12 md:col-span-7 placeholder:text-gray-400 font-medium"
            placeholder="search users..."
          />
          <span className="md:col-span-1 hidden md:block md:opacity-0"></span>
          {/* <button
            onClick={() => setIsAddModalOpen(true)}
            className="rounded bg-blue-500 text-white col-span-6 md:col-span-2 py-1 font-medium text-sm md:text-base"
          >
            Add User
          </button> */}
          <button className="cursor-pointer rounded bg-gray-300 col-span-6 md:col-span-2 py-1 font-medium text-sm md:text-base text-gray-600" onClick={() => setIsAddModalOpen(true)}>
            Add client
          </button>
          <button className="cursor-pointer rounded bg-blue-400 text-white col-span-6 md:col-span-2 py-1 font-medium text-sm md:text-base">
            Admin
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2 text-sm md:text-base">Name</th>
                <th className="text-left py-2 text-sm md:text-base">
                  Email Address
                </th>
                <th className="text-left py-2 text-sm md:text-base">Role</th>
                <th className="text-left py-2 text-sm md:text-base">Status</th>
                <th className="text-left py-2 text-sm md:text-base">
                  Join Date
                </th>
                <th className="text-left py-2 text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 text-sm md:text-base capitalize">{user.name}</td>
                  <td className="py-2 text-sm md:text-base">{user.email}</td>
                  <td className="py-2 px-2">
                    <div
                      className={`px-1 md:px-2 py-1 rounded text-white text-xs w-20 text-center ${
                        user.role === "ADMIN" ? "bg-blue-500" : "bg-gray-500"
                      }`}
                    >
                      {user.role}
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <div
                      className={`px-1 md:px-2 py-1 rounded text-white text-xs w-20 text-center ${
                        user.status === "Active" ? "bg-lime-500" : "bg-red-500"
                      }`}
                    >
                      {user.status}
                    </div>
                  </td>
                  <td className="py-2 text-sm md:text-base">
                    {new Date(user.joinedDate).toISOString().split('T')[0]}
                  </td>
                  <td className="py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedUser(user);
                            setIsEditModalOpen(true);
                          }}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 focus:text-red-600"
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddUserModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      {selectedUser && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedUser(null);
          }}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default UserManagementPage;
