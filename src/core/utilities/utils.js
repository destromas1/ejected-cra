const rootStr = "Lets do a great Meetup";

const concatStr = name => {
  const str = `${rootStr} - ${name}`;
  console.log(str);
  return str;
};

export {concatStr};