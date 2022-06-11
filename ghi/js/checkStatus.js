window.addEventListener("DOMContentLoaded", async () => {
  const payloadCookie = await cookieStore.get("jwt_access_payload");
  
  if (payloadCookie) {
    const encodedPayload = JSON.parse(payloadCookie.value);
    const decodedPayload = atob(encodedPayload);
    const payload = JSON.parse(decodedPayload);

    console.log("payload: ", payload);

    if (payload.user.perms.includes("events.add_conference")) {
      const newConferenceTag = document.querySelector("[href='new-conference.html']");
      newConferenceTag.classList.remove("d-none");
    }
    if (payload.user.perms.includes("events.add_location")) {
      const newLocationTag = document.querySelector("[href='new-location.html']");
      newLocationTag.classList.remove("d-none");
    }
    if (payload.user.perms.include(""))
  }
});