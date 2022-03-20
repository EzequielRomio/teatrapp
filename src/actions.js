import { billboard, theaters } from "./data"
import { 
  THEATERS_HEADERS, 
  BILLBOARD_HEADERS, 
  DAYS, 
  THEATER, 
  DAY, 
  PRICE, 
  PLAY, 
  TIME, 
  ADDRES, 
  PHONE 
} from "./constants"

export const getTheaters = () => {
  const formattedTheaters = []
  for (const theater of theaters.split('\n')) {
    const formattedTheater = {}
    const fields = theater.split(',')
    THEATERS_HEADERS.forEach((header, ix) => formattedTheater[header] = fields[ix])

    formattedTheaters.push(formattedTheater)
  }
  return formattedTheaters 
}

export const getBillboard = () => {
  const plays = []
  for (const theaterData of billboard.split('\n')) {
    if (!isValidTheaterData(theaterData)) continue;
    const splittedData = theaterData.split(',')
    const theaterName = splittedData.shift()
    const splittedPlays = splitByDay(splittedData)
    for (const playData of splittedPlays) {
      const splittedData = playData.split(',')
      const play = {}
      BILLBOARD_HEADERS.forEach((header, j) => {
        if (header === PRICE) {
          play[header] = parsePrice(splittedData[j])
        } else {
          play[header] = splittedData[j]
        }
      })
      plays.push({...play, [THEATER]: theaterName})      
    }
  }
  return plays
}

export const getDay = () => {
  const today = (new Date()).getDay()
  return DAYS[today]
}

export const filterBillboardByDay = (day, billboard) => {
  return billboard.filter(play => play[DAY] === day)
}

export const sortPlays = (billboard, field, isAsc=false) => {
  const result = [...billboard]
  if ([PLAY, THEATER, ADDRES].includes(field)) {
    return result.sort((a, b) => isAsc ? b[field].localeCompare(a[field]) : a[field].localeCompare(b[field]))
  }
  if (field === PRICE) {
    return result.sort((a, b) => {
      const priceA = getPrice(a[PRICE])
      const priceB = getPrice(b[PRICE])
      return isAsc ? priceA - priceB : priceB - priceA
    })
  }
  if (field === TIME) {
    return result.sort((a, b) => {
      const dateA = getDateFormat(a[TIME])
      const dateB = getDateFormat(b[TIME])
      return isAsc ? dateA - dateB : dateB - dateA
    })
  } 
}

const getPrice = (price) => {
  if (price === " - " || price === "-") return 0;
  let parsedPrice = price
  const invalidChs = [',', '.', '$']
  invalidChs.forEach(ch => parsedPrice = parsedPrice.replaceAll(ch, ''))
  parsedPrice = parsedPrice.includes('/') ? parseInt(parsedPrice.split('/')[0]) + 1 : parseInt(parsedPrice)
  return parsedPrice
}

const getDateFormat = (time) => {
  return new Date(`January, 1995, ${time.split(' hs')[0]}:00`)
}

const parsePrice = (price) => {
  if (price === " - " || price === "-") return price;

  if (!price.includes(' / ')) {
    return price.slice(0, -2)
  } else {
    const prices = price.split(' / ')
    return (prices.map(p => p.slice(0, -2))).join(' / ')
  }
}

const isValidTheaterData = (data) => {
  const keyWordsToExclude = ['Proximamente', 'Próximamente', 'próximamente', 'próximamente']
  
  if ((data.split(',')).length < 3) {
    return false
  }

  for (const keyWord of keyWordsToExclude) {
    if (data.includes(keyWord)) {
      return false
    }
  }
  return true
}

const splitByDay = (plays) => {
  const result = []
  let day = plays[0]
  while (plays.length) {
    if (Object.values(DAYS).includes(plays[0])) {
      day = plays[0]
      result.push([...Array(5)].map(_ => plays.shift()).join(','))
    } else {
      const aux = [...Array(4)].map(_ => plays.shift())
      result.push([day, ...aux].join(','))
    }
  }
  return result
}