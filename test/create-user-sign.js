'use strict'
/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                            IMPORTANT
                        only for testing
                             ------
                don't do this on the client-side
        apiSecret is very important, don't share with anyone
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
const chai = require('chai')
const expect = chai.expect

const jwt = require('jsonwebtoken')

const YOUR_API_KEY = 'ABCDEFG'
const YOUR_API_SECRET = '123abc456'

//
var JWTCreatorMethod = (userModel) => {
  let tokenObject = {
    apiKey: YOUR_API_KEY,
    game: 'tombala',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 18000, // 5h
    user: {
      ...userModel
    }
  }
  try {
    return jwt.sign(tokenObject, YOUR_API_SECRET)
  } catch (e) {
    return null
  }
}

describe('LiveGames JWT Tests', () => {
  //
  it('should have return user jwt', async () => {
    var userData = {
      // guest: false,
      id: 'fun_user',
      currency: 'USD',
      locale: 'en',
      token: 'USER_SESSION_TOKEN' // new feature
    }
    var userJWT = JWTCreatorMethod(userData)

    console.log('userJWT: %s', userJWT)

    expect(userJWT).to.not.be.equal(null)
  })

  it('should have return guest jwt', async () => {
    var guestData = {
      guest: true,
      locale: 'en',
      token: 'USER_SESSION_TOKEN'
    }
    var guestJWT = JWTCreatorMethod(guestData)

    console.log('guestJWT: %s', guestJWT)

    expect(guestJWT).to.not.be.equal(null)
  })
})
