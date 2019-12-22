const p = new Promise((resolve, reject) => {
  if (DEV) {
    resolve(true)
  } else {
    reject(new Error('error'))
  }
})

console.log(p)
