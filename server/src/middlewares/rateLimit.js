// rateLimit.js
const rateLimit = ({ windowMs, max }) => {
  // Store: { "ip": [timestamps] }
  const requests = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const ip = req.ip;

    if (!requests.has(ip)) {
      requests.set(ip, []);
    }

    // Filter timestamps inside the window
    const windowStart = now - windowMs;
    const requestTimes = requests.get(ip).filter((ts) => ts > windowStart);

    // Update store
    requestTimes.push(now);
    requests.set(ip, requestTimes);

    // Check limit
    if (requestTimes.length > max) {
      return res.status(429).json({
        success: false,
        reply: "Too many requests. Please try again later.",
        remaining: 0,
        retryAfter: `${Math.ceil(windowMs / 1000)} seconds`,
      });
    }

    // Attach info
    res.setHeader("X-RateLimit-Limit", max);
    res.setHeader("X-RateLimit-Remaining", max - requestTimes.length);
    res.setHeader("X-RateLimit-Reset", windowMs);

    next();
  };
};

export default rateLimit;
