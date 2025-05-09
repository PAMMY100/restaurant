const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT,
    databaseUrl: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
      qstashUrl: process.env.QSTASH_URL!,
      qstashToken: process.env.QSTASH_TOKEN!
    },
    emaijs: {
      serviceID: process.env.EMAILJS_SERVICE_ID!,
      ejsPublicKey: process.env.EMAILJS_PUBLIC_KEY!,
      ejsPrivateKey: process.env.EMAILJS_PRIVATE_KEY!,
      ejsOnboarding: process.env.EMAILJS_TEMPLATE_ID_ONBOARDING!,
      ejsInactivity: process.env.template_kr6d1zl!

    }
  }
}

export default config;