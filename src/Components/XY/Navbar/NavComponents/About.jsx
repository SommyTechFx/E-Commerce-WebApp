function About() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h4
        onClick={() => scrollToSection("about")}
        style={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          fontSize: "1.4rem",
          lineHeight: "2.4rem",
          color: "rgba(115, 115, 115, 1)",
        }}
      >
        About
      </h4>
    </div>
  );
}

export default About;
