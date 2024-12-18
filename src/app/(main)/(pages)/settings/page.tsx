import ProfileForm from "@/components/forms/ProfileForm";
import React from "react";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span className="tracking-tight">Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-semibold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
      <ProfileForm />
      </div>
    </div>
  );
};

export default Settings;
