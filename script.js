// Example: you can expand functionality later
document.addEventListener("DOMContentLoaded", () => {
  console.log("Instagram barebones loaded!");
});
window.uploadImage = async function() {
  const file = document.getElementById("imageUpload").files[0];
  if (!file) return alert("Velg et bilde først!");

  const user = auth.currentUser;
  if (!user) return alert("Du må være logget inn.");

  const imageRef = ref(storage, `users/${user.uid}/${file.name}`);
  try {
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);

    // Save URL in Firestore under user's profile
    await setDoc(doc(db, "users", user.uid), {
      images: arrayUnion(downloadURL)
    }, { merge: true });

    document.getElementById("uploadStatus").innerText = "✅ Lastet opp!";
  } catch (err) {
    console.error(err);
    document.getElementById("uploadStatus").innerText = "❌ Feil ved opplasting.";
  }
}
window.followUser = async function(targetUserId) {
  const user = auth.currentUser;
  if (!user) return alert("Du må være logget inn.");

  const currentUserRef = doc(db, "users", user.uid);
  const targetUserRef = doc(db, "users", targetUserId);

  await updateDoc(currentUserRef, {
    following: arrayUnion(targetUserId)
  });
  await updateDoc(targetUserRef, {
    followers: arrayUnion(user.uid)
  });

  alert("Du følger nå denne brukeren!");
}
