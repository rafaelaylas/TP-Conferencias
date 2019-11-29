import md5 from 'md5';

const gravatar = (correo) => {
  if(!correo) return null;
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = (correo).trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: "binary" });
  return `${base}${hash}`
}

export default gravatar;