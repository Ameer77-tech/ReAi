// rateLimit.js
const rateLimit = ({ windowMs, max }) => {
  const requests = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const windowStart = now - windowMs;
    const ip = req.ip || req.connection.remoteAddress;

    if (!ip) {
      console.log("⚠️ RateLimiter: No IP detected!");
      return next(); // DO NOT BLOCK ENTIRE SERVER
    }

    if (!requests.has(ip)) {
      requests.set(ip, []);
    }

    // Filter only timestamps that are still within window
    const timestamps = requests.get(ip).filter((ts) => ts > windowStart);

    timestamps.push(now);
    requests.set(ip, timestamps);

    if (timestamps.length > max) {
      return res.status(429).json({
        success: false,
        reply: "Too many requests. Please try again later.",
        remaining: 0,
        retryAfter: Math.ceil(windowMs / 1000),
      });
    }

    res.setHeader("X-RateLimit-Limit", max);
    res.setHeader("X-RateLimit-Remaining", max - timestamps.length);
    res.setHeader("X-RateLimit-Reset", windowMs);

    next();
  };
};

export default rateLimit;
