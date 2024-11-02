interface UserDetails {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  asn: string;
  org: string; // Internet Service Provider
}

async function getUserDetails(): Promise<UserDetails> {
  try {
    // First get the user's IP address
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const { ip } = await ipResponse.json();

    // Then get the detailed information using the IP
    const detailsResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const details: UserDetails = await detailsResponse.json();

    return details;
  } catch (error) {
    console.error(`Error fetching user details, ${error}`);
    throw error;
  }
}

async function displayUserDetails() {
  try {
    const details = await getUserDetails();

    console.log(
      `Hello, fellow developer (${details.ip}) from ${details.country_name}, ${details.city} (${details.longitude}, ${details.latitude}).`
    );

    return details;
  } catch (error) {
    console.error(`Error fetching user details, ${error}`);
    throw error;
  }
}

export { getUserDetails, displayUserDetails };
export type { UserDetails };
