export function ProfilePreview(profile, options = { shortForm: false }) {
  if (options.shortForm === false) {

    const preview = document.createElement("aside");

    const picture = document.createElement("img");
    picture.src = profile.pictureSrc;
    picture.alt = "";
    picture.dataset.testid = "profilePicture";

    const name = document.createElement("p");
    name.textContent = profile.name;
    name.dataset.testid = "profileName";

    const bio = document.createElement("p");
    bio.textContent = profile.bio;
    bio.dataset.testid = "profileBio";

    preview.appendChild(picture);
    preview.appendChild(name);
    preview.appendChild(bio);

    return preview;
  } else if (options.shortForm === true) {
    const preview = document.createElement("aside");

    const picture = document.createElement("img");
    picture.src = profile.pictureSrc;
    picture.alt = "";
    picture.dataset.testid = "profilePicture";

    const name = document.createElement("p");
    name.textContent = profile.name;
    name.dataset.testid = "profileName";

    preview.appendChild(picture);
    preview.appendChild(name);

    return preview;

  }
}
