export async function simpFetch(url, options, loading) {
  if (!url) throw new Error("fetch:error - missing url as required");

  // Allowed methods
  const allowedMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
  if (options?.method && !allowedMethods.includes(options.method)) {
    throw new Error(
      "fetch:error - method not allowed, please use one of these: " +
        allowedMethods.join(", ")
    );
  }

  let isLoading = true;

  try {
    const fetcher = await fetch(url, {
      method: options?.method || "GET",
      // use Content-Type Application/JSON if body if body contains json format
      headers:
        options?.body && options?.body.constructor === Object
          ? { "Content-Type": "application/json" }
          : {},

      body:
        options?.body && options?.body.constructor === Object
          ? JSON.stringify(options.body)
          : options?.body,
    });

    isLoading = false;
    return {
      res: fetcher,
      data: await fetcher.json(),
    };
  } catch (error) {
    isLoading = false; // Loading finished (in case of error)
    throw new Error("fetch:error - " + error);
  }
}
