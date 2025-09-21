export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      {/* Facebook Icon */}
      <svg
        className="w-6 h-6 text-purple-500"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>

      {/* Instagram Icon */}
      <svg
        className="w-6 h-6 text-purple-500"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>

      {/* LinkedIn Icon */}
      <svg
        className="w-6 h-6 text-purple-500"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>

      {/* WhatsApp Icon */}
      <svg
        className="w-6 h-6 text-purple-500"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.72 11.06c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.63.14-.72.9-.88 1.08-.32.21-.6.07a7.41 7.41 0 0 1-2.2-1.36 8.36 8.36 0 0 1-1.53-1.9c-.16-.28 0-.43.12-.57.12-.12.28-.32.42-.48s.19-.28.28-.46a.55.55 0 0 0-.03-.51c-.07-.14-.63-1.52-.87-2.07s-.46-.48-.63-.49H7.54a1 1 0 0 0-.72.34 3 3 0 0 0-.94 2.24c0 1.32.94 2.6 1.08 2.78s1.85 3 4.48 4.2a14.8 14.8 0 0 0 1.44.53c.6.19 1.15.16 1.58.1.48-.07 1.65-.68 1.88-1.35a2.2 2.2 0 0 0 .15-1.35c-.07-.12-.25-.19-.53-.33z" />
        <path d="M20.52 3.48a11.94 11.94 0 1 0-4.19 18.12l4.41 1.3-1.3-4.41a11.94 11.94 0 0 0 1.08-15.01z" />
      </svg>
    </div>
  );
}
