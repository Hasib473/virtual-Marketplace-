import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    bio: "",
    hourlyRate: "",
    availability: "Available",
    location: "",
    gigs: [],
  });

  // load
  useEffect(() => {
    const saved = localStorage.getItem("freelancer_profile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  // save
  useEffect(() => {
    localStorage.setItem("freelancer_profile", JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (data) => {
    setProfile((prev) => ({ ...prev, ...data }));
  };

  const addGig = (gig) => {
    setProfile((prev) => ({
      ...prev,
      gigs: [...prev.gigs, gig],
    }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, addGig }}>
      {children}
    </ProfileContext.Provider>
  );
};
