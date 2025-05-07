import redis from "@/database/redis";

export interface UserData extends Record<string, string | boolean | undefined> {
  userId: string;
  email: string;
  name: string;
  lastActive: string;
  lastLogin: string;
  onboardingSent?: boolean;
  reminderSent?: boolean;
}

export const updateUserActivity = async (userId: string, data: Partial<UserData>) => {
  await redis.hset(`user:${userId}`, data);
  await redis.expire(`user:${userId}`, 60 * 60 * 24 * 180); // 6 month TTL
};

export const getInactiveUsers = async (inactiveDays: number = 14): Promise<{userId: string, data: UserData}[]> => {
  const cutoffDate = new Date(Date.now() - inactiveDays * 86400000).toISOString();
  
  const users: {userId: string, data: UserData}[] = [];
  const keys = await redis.keys('user:*');

  for (const key of keys) {
    const userId = key.replace('user:', '');
    const userData = await redis.hgetall<UserData>(key);

    if (userData?.lastActive && userData.lastActive < cutoffDate && !userData.reminderSent) {
      users.push({ userId, data: userData });
    }
  }

  return users;
};