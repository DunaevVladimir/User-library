import { User } from "@/entities/session";

export const login = async (data: User) => {
  let users = localStorage.getItem('users');
  if (users) {
    let user = JSON.parse(users).find((item: User) => item.email === data.email);
    if (user) {
      if (user.password !== data.password) {
        throw new Error('Неправильно введен пароль')
      }
    } else {
      throw new Error('Нет пользователя с такой почтой')
    }
  } else {
    throw new Error('Нет пользователя с такой почтой')
  }
}