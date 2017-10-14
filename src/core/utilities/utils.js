const rootStr = "Meetup Speaker";

const concatStr = name => {
  const str = `${rootStr} - ${name}`;
  console.log(str);
  return str;
};

export {concatStr};