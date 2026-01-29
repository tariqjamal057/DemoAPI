"use client";

import React, { useState } from "react";
import { Search, Filter, Paperclip, Send, ArrowLeft, Plus } from "lucide-react";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumblist";

interface User {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
}

const InquiryMessagesPage = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Hi, I'm interested in your Toyota Camry",
      time: "4:35 PM",
      unreadCount: 2,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Can you provide more details about the BMW?",
      time: "3:20 PM",
      unreadCount: 1,
    },
    {
      id: 3,
      name: "Bob Johnson",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Is the price negotiable?",
      time: "2:15 PM",
      unreadCount: 0,
    },
    {
      id: 4,
      name: "Alice Brown",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "When can we schedule a test drive?",
      time: "1:45 PM",
      unreadCount: 3,
    },
    {
      id: 5,
      name: "Charlie Wilson",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Thanks for the information",
      time: "12:30 PM",
      unreadCount: 0,
    },
    {
      id: 6,
      name: "Diana Lee",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Please send me the service history",
      time: "11:20 AM",
      unreadCount: 1,
    },
    {
      id: 7,
      name: "Eve Davis",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Looking forward to your response",
      time: "10:15 AM",
      unreadCount: 0,
    },
    {
      id: 8,
      name: "Frank Miller",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Can we meet tomorrow?",
      time: "9:45 AM",
      unreadCount: 2,
    },
    {
      id: 9,
      name: "Frank Miller",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Can we meet tomorrow?",
      time: "9:45 AM",
      unreadCount: 2,
    },
    {
      id: 10,
      name: "Frank Miller",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Can we meet tomorrow?",
      time: "9:45 AM",
      unreadCount: 2,
    },
    {
      id: 11,
      name: "Frank Miller",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Can we meet tomorrow?",
      time: "9:45 AM",
      unreadCount: 2,
    },
    {
      id: 12,
      name: "Frank Miller",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Can we meet tomorrow?",
      time: "9:45 AM",
      unreadCount: 2,
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setIsMobileChatOpen(true);
  };

  const handleBackToList = () => {
    setIsMobileChatOpen(false);
    setSelectedUser(null);
  };

  const sendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  const breadcrumbs = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      label: "Analytics",
      href: "/admin/inquire-messages",
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="mb-10 hidden md:block">
        <BreadcrumbWithCustomSeparator items={breadcrumbs} />
      </div>
      <h2 className="font-semibold text-xl md:text-2xl text-[#7D7D7D]">
        Inquiry/Messages
      </h2>
      <div className="border rounded-lg">
        <div className="flex h-full">
          {/* Left Sidebar - User List */}
          <div
            className={`w-full md:w-1/4 bg-white border-r max-h-[80vh] overflow-hidden ${
              isMobileChatOpen ? "hidden md:block" : "block"
            }`}
          >
            {/* Search Header */}
            <div className="p-4  ">
              <div className="relative bg-[#EEF3F7]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" />
              </div>
            </div>

            {/* User List */}
            <div className="overflow-y-auto h-full">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleUserSelect(user)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedUser?.id === user.id
                      ? "bg-blue-50 border-l-4 border-l-blue-500"
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-sm truncate">
                          {user.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {user.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {user.lastMessage}
                      </p>
                    </div>
                    {user.unreadCount > 0 && (
                      <div className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {user.unreadCount}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chat Area */}
          <div
            className={`flex-1 flex flex-col w-full ${
              !isMobileChatOpen ? "hidden md:flex" : "flex"
            }`}
          >
            {selectedUser ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b bg-white flex items-center space-x-3">
                  {isMobileChatOpen && (
                    <ArrowLeft
                      className="h-6 w-6 cursor-pointer md:hidden"
                      onClick={handleBackToList}
                    />
                  )}
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h3 className="font-semibold">{selectedUser.name}</h3>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                  {/* Sample messages */}
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-lg max-w-xs">
                        <p className="text-sm">
                          Hi, I'm interested in your car listing.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                        <p className="text-sm text-wrap">
                          Hello! I'd be happy to help you with that.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-lg max-w-xs">
                        <p className="text-sm">
                          Can you tell me more about the vehicle's condition?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t bg-white overflow-hidden">
                  <div className="flex items-center space-x-3.5">
                    <Paperclip className="h-5 w-5  text-[#4079ED] cursor-pointer" />
                    <input
                      type="text"
                      placeholder="Enter message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="flex-1 py-2 px-3 border rounded-full focus:outline-none focus:ring-0 focus:ring-blue-500 inline max-w-[70%] md:max-w-full bg-[#E8E8E8]"
                    />
                    <div
                      className="bg-[#4079ED] px-3 py-1.5 rounded-full"
                      onClick={sendMessage}
                    >
                      <Send className="w-5 h-5 text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">
                    Select a conversation to start chatting
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryMessagesPage;
