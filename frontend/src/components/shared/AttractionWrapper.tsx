"use client"
import { Attraction } from "./Attraction";
import { useState, useEffect } from "react";

const AttractionWrapper = () => {
    const dataOne = [
      {
        id: 0,
        name: "Brandon",
        img: "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy",
      },
      {
        id: 1,
        name: "Scott",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy",
      },
      {
        id: 2,
        name: "Emily",
        img: "https://images.unsplash.com/photo-1591727884968-cc11135a19b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHwy",
      },
      {
        id: 3,
        name: "Hannah",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXIlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 4,
        name: "Tom",
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHByb2dyYW1tZXIlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 5,
        name: "Ayo",
        img: "https://images.unsplash.com/photo-1525357816819-392d2380d821?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwcm9ncmFtbWVyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDI%3D",
      },
    ];
    const dataTwo = [
      {
        id: 0,
        name: "Barbara",
        img: "https://images.unsplash.com/photo-1520295187453-cd239786490c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxwcm9ncmFtbWVyJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDI%3D",
      },
      {
        id: 1,
        name: "John",
        img: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      },
      {
        id: 2,
        name: "Leonard",
        img: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      },
      {
        id: 3,
        name: "Jimmy",
        img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      },
      {
        id: 4,
        name: "Faith",
        img: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBnaXJsc3xlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 5,
        name: "Dera",
        img: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwZ2lybHN8ZW58MHx8MHx8fDI%3D",
      },
    ];
    const dataThree = [
      {
        id: 0,
        name: "London",
        img: "https://images.unsplash.com/photo-1610390370064-4890cf703fd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9uJTIwYnJpZGdlfGVufDB8fDB8fHwy",
      },
      {
        id: 1,
        name: "Paris",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDI%3D",
      },
      {
        id: 2,
        name: "Maldives",
        img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGRpdmVzfGVufDB8fDB8fHwy",
      },
      {
        id: 3,
        name: "Dubai",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDI%3D",
      },
      {
        id: 4,
        name: "Newyork",
        img: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3eW9ya3xlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 5,
        name: "Instabul",
        img: "https://images.unsplash.com/photo-1593544648982-cf4bbfb8fc38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhbmJ1bHxlbnwwfHwwfHx8Mg%3D%3D",
      },
    ];
  return (<>
    <Attraction title="Top Designers" data={dataOne} />
    <Attraction title="Top Developers" data={dataTwo} />
    <Attraction title="Projects" data={dataThree} />

  </>
  
  )
}

export default AttractionWrapper