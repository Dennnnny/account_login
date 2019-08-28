function createArray(obj, text) {
  let newArray = []
  for (i = 0; i < obj.length; i++) {
    let item = obj[i][text]
    newArray.push(item)
  }
  return newArray
}


function checkAccount(account) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  let message = ''
  const pattern = new RegExp('^.*@.*\..*$')
  const emailAll = createArray(users, 'email')

  //檢查帳號長度 =0 : 請輸入email
  if (account.email.length === 0) {
    return message = `請輸入email`
  } else if (!account.email.match(pattern)) {
    // 檢查符合　@ . 模式 
    message = `帳號格式錯誤`
    return message
  } else {
    // 通過帳號檢測 檢查密碼 
    if (emailAll.includes(account.email)) {
      let index = emailAll.indexOf(account.email)
      if (account.password === users[index].password) {
        // 密碼正確 回傳users obj
        return users[index]
      } else if (account.password.length === 0) {
        // 密碼長度 =0 : 請輸入密碼
        message = `請輸入密碼`
        return message
      } else {
        // 其餘狀況 帳號密碼錯誤
        message = `帳號/密碼錯誤`
        return message
      }
    } else {
      // 帳號輸入錯誤 帳號密碼錯誤
      message = `帳號/密碼錯誤`
      return message
    }
  }



}

module.exports = checkAccount