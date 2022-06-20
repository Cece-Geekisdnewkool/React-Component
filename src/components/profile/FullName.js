function FullName() {
  const linkedinProfile =
    "https://www.linkedin.com/mwlite/in/egbuna-celia-967616a8/";
  return (
    <h1>
      Egbuna Cece-Geekisdewkool
      <a href={linkedinProfile} target="_blank">
        {" "}
        <i style={{ color: "blue" }} class="bi bi-linkedin"></i>{" "}
      </a>
    </h1>
  );
}

export default FullName;
