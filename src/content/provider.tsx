import qs from "qs";

function getURL(path = "") {
  return `${process.env.NEXT_PUBLIC_CMS_API_URL}${path}`;
}

export function getMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  return `${getURL()}${url}`;
}

export async function getEntry(path: string, urlParamsObject = {}) {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
