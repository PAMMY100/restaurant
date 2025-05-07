import redis from "@/database/redis";

export interface UserData extends Record<string, string | boolean | undefined>{
  email: string;
  name: string;
  lastActive: string;
  emailSent?: boolean;
}

export const updateUserActivity = async (userId: string, data: Partial<UserData>) => {
  await redis.hset(`user:${userId}`, data);
};

export const getInactiveUsers = async (inactiveDays: number = 14): Promise<{userId: string, data: UserData}[]> => {
  const now = new Date();
  const cutoffDate = new Date(now.setDate(now.getDate() - inactiveDays)).toISOString();

  const users: {userId: string, data: UserData}[] = [];
  const keys = await redis.keys('user:*');

  for (const key of keys) {
    const userId = key.replace('user:', '');
    const userData = await redis.hgetall<UserData>(key);

    if (userData?.lastActive && userData.lastActive < cutoffDate) {
      users.push({ userId, data: userData })
    }
  }

  return users;
}