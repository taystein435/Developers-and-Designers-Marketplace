
"use client";

import { useState, useEffect, AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import { fetchUsers, createUser, updateUser,updateProfile, deleteUser } from '@/lib/actions';

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [newUser, setNewUser] = useState({ username: '', email: '', role: '' });
  const [editUser, setEditUser] = useState<any>(null);
  const [editProfile, setEditProfile] = useState<any>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    loadUsers();
  }, []);

  const handleCreateUser = async () => {
    try {
      await createUser(newUser);
      const updatedUsers = await fetchUsers();
      setUsers(updatedUsers);
      setNewUser({ username: '', email: '', role: '' });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleUpdateUser = async () => {
    if (editUser) {
      try {
        await updateUser(editUser.id, editUser);
        const updatedUsers = await fetchUsers();
        setUsers(updatedUsers);
        setEditUser(null);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  const handleUpdateProfile = async () => {
    if (editProfile) {
      try {
        await updateProfile(editProfile.id, editProfile);
        const updatedUsers = await fetchUsers();
        setUsers(updatedUsers);
        setEditProfile(null);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      const updatedUsers = await fetchUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* User List */}
      <div className="p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Username</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Role</th>
              <th className="px-4 py-2 border-b">Profiles</th>
              <th className="px-4 py-2 border-b">Messages Sent</th>
              <th className="px-4 py-2 border-b">Messages Received</th>
              <th className="px-4 py-2 border-b">Bookings</th>
              <th className="px-4 py-2 border-b">Reviews</th>
              <th className="px-4 py-2 border-b">Likes</th>
              <th className="px-4 py-2 border-b">Follows</th>
              <th className="px-4 py-2 border-b">Followings</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.username}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.role}</td>
                <td className="px-4 py-2 border-b">
                  {user.profiles.length > 0 ? user.profiles.map((profile: any) => (
                    <div key={profile.id}>{profile.firstName} {profile.lastName}</div>
                  )) : 'No profiles'}
                </td>
                <td className="px-4 py-2 border-b">{user.messagesSent.length}</td>
                <td className="px-4 py-2 border-b">{user.messagesReceived.length}</td>
                <td className="px-4 py-2 border-b">{user.bookings.length}</td>
                <td className="px-4 py-2 border-b">{user.reviews.length}</td>
                <td className="px-4 py-2 border-b">{user.likes.length}</td>
                <td className="px-4 py-2 border-b">{user.follows.length}</td>
                <td className="px-4 py-2 border-b">{user.followings.length}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => setEditUser(user)}
                    className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit User
                  </button>
                  {user.profiles.length > 0 && (
                    <button
                      onClick={() => setEditProfile(user.profiles[0])}
                      className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Edit Profile
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create User Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Create User</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
          />
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
          />
          <button
            onClick={handleCreateUser}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create User
          </button>
        </div>
      </div>

      {/* Update User Form */}
      {editUser && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Update User</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={editUser.username}
              onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Email"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <input
              type="text"
              placeholder="Role"
              value={editUser.role}
              onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <button
              onClick={handleUpdateUser}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Update User
            </button>
          </div>
        </div>
      )}

      {/* Update Profile Form */}
      {editProfile && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={editProfile.firstName}
              onChange={(e) => setEditProfile({ ...editProfile, firstName: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={editProfile.lastName}
              onChange={(e) => setEditProfile({ ...editProfile, lastName: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <input
              type="text"
              placeholder="Profile Picture URL"
              value={editProfile.profilePicture}
              onChange={(e) => setEditProfile({ ...editProfile, profilePicture: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <input
              type="text"
              placeholder="Banner Image URL"
              value={editProfile.bannerImage}
              onChange={(e) => setEditProfile({ ...editProfile, bannerImage: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <textarea
              placeholder="Description"
              value={editProfile.description}
              onChange={(e) => setEditProfile({ ...editProfile, description: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <button
              onClick={handleUpdateProfile}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Update Profile
            </button>
          </div>
        </div>
      )}

    </div>
  );
}