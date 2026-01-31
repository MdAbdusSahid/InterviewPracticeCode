function isValidIPv4(ip) {
  const parts = ip.split(".");

  if (parts.length !== 4) return false;

  for (let part of parts) {
    if (part === "" || isNaN(part)) return false;

    // leading zero check
    if (part.length > 1 && part[0] === "0") return false;

    const num = Number(part);
    if (num < 0 || num > 255) return false;
  }

  return true;
}

// Examples
console.log(isValidIPv4("192.168.1.1")); // true
console.log(isValidIPv4("01.1.1.1"));    // false
console.log(isValidIPv4("300.1.1.1"));   // false
