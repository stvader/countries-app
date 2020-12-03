export const getCached = ({type, data}) => {
  const proxyPoint = localStorage.getItem(type);

  if (!proxyPoint) {
    return null;
  }

  if (!data) {
    return proxyPoint;
  }

  const proxyItem = JSON.parse(proxyPoint)[data];
    
  if (!proxyItem) {
    return null;
  }

  return proxyItem
}

export const setChached = ({type, data, response}) => {
  const proxyPoint = JSON.parse(localStorage.getItem(type));
  
  if (!proxyPoint) {
    localStorage.setItem(type, JSON.stringify({[data]: response}));
    return;
  }

  proxyPoint[data] = response;
  localStorage.setItem(type, JSON.stringify(proxyPoint));
}