export const getUsers = async (num = 20) => {
    const results = await fetch(`https://randomuser.me/api?results=${num}`);
    return results.json()
  }