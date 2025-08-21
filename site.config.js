const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Abdulaziz Al-Zabin",
    image: "https://notion-avatar.app/api/svg/eyJmYWNlIjo0LCJub3NlIjo3LCJtb3V0aCI6MCwiZXllcyI6MTAsImV5ZWJyb3dzIjoyLCJnbGFzc2VzIjoyLCJoYWlyIjoxLCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjMsImZsaXAiOjEsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "CyberSecurity Enthusiast",
    bio: "I like watching logs :)",
    email: "zabinaziz0@gmail.com",
    linkedin: "abdulaziz-al-zabin",
    github: "Abdulaziz-AlZabin",
    instagram: "",
  },
  projects: [
    {
      name: `Malware Detection ML Model`,
      href: "https://github.com/Abdulaziz-AlZabin/Mal-Detect-ML-Model",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Abdulaziz Al-Zabin",
    description: "welcome to My World Stranger :)",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
