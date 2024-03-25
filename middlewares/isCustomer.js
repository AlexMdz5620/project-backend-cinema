const isCustomer = (req, res, next) => {
  if (req.role === 'CUSTOMER') {
    next()
  } else {
    return res.status(403).json({
      msg: 'Unauthorized role'
    })
  }
}

export { isCustomer }
