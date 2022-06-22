import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      This page doesn't exist. Go <Link to="/">home</Link>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815.6879697209847!2d45.69154658673015!3d43.324510206847165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d13abc103637%3A0x8601f7fff1cac51f!2zSW50b2NvZGUgQ29kaW5nIEJvb3RjYW1wIOKAkyDRiNC60L7Qu9CwINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1655900778845!5m2!1sru!2sru"
        width="600"
        height="450"
        allowfullscreen=""
        title="hh"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export { Contact };
