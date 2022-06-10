window.addEventListener("DOMContentLoaded", async () => {
  const payloadCookie = await cookieStore.get("jwt_access_payload");
  
  if (payloadCookie) {

    const decodedPayload = atob(payloadCookie.value);
    const payload = JSON.parse(decodedPayload);

    console.log("payload: ", payload);

    if (payload.user.perms.includes("events.add_conference")) {
      const newConferenceTag = document.getElementById("new-conference");
      newConferenceTag.classList.remove("d-none");
    }
    if (payload.user.perms.includes("events.add_location")) {
      const newLocationTag = document.getElementById("new-location");
      newLocationTag.classList.remove("d-none");
    }

  }
});