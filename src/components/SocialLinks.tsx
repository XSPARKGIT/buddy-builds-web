
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@ikwezi.com", label: "Email" },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-6">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href}
          className="text-gray-600 hover:text-ikwezi-green transition-colors duration-200"
          aria-label={link.label}
        >
          <link.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
