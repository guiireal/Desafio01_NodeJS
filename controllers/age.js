const index = (req, res) => {
  return res.render('index')
}

const major = (req, res) => {
  const {
    age
  } = req.query
  if (!age) return res.redirect('/')

  return res.render('major', {
    age
  })
}

const minor = (req, res) => {
  const {
    age
  } = req.query

  if (!age) return res.redirect('/')

  return res.render('minor', {
    age
  })
}

const check = (req, res) => {
  const age = parseInt(req.body.age)

  if (!Number.isInteger(age)) return res.redirect('/')

  if (age > 18) {
    return res.redirect(`/major?age=${age}`)
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
}

module.exports = {
  index,
  major,
  minor,
  check
}
