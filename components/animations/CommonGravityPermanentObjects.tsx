"use client";

import {
  CommonGravityContainer,
  CommonGravityObject,
} from "@/components/animations/CommonGravitySection";

const ITEMS = [
  "Branding & Identity",
  "Graphic Design",
  "Creative Design",
  "Packaging Design",
  "Website Design",
  "Web Development",
  "Social Media Marketing",
  "SEO",
  "Content Marketing",
  "Video Production",
  "Video Editing",
  "Photography",
  "Videography",
  "UI/UX Design",
  "Print Design",
  "Marketing Collateral",
  "Marketing Strategy",
  "Consulting",
];

export default function CommonGravityPermanentObjects() {
  return (
    <CommonGravityContainer>
      <div className="mxd-promo__objects object-container">
        {ITEMS.map((item, index) => (
          <CommonGravityObject key={item} index={index}>
            <div className="object object-permanent">
              <p>{item}</p>
            </div>
          </CommonGravityObject>
        ))}
      </div>
    </CommonGravityContainer>
  );
}
