const Footer = () => {
  return (
    <div class="footer">
      <div class="contain">
        <br />
        <div class="col">
          <h1>ABOUT US</h1>

          <ul>
            <li>
              <i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us
            </li>
            <li>
              <i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion
            </li>
          </ul>
        </div>
        <div class="col">
          <h1></h1>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="col">
          <div class="position-absolute top-50 start-50 translate-middle">
            <br />

            <img
                  src="%PUBLIC_URL%../../logo1.png"
                  class="rounded-circle"
                  width="60"
                  height="60"
                  alt="logo"
                />
                <a href="/home" style={{ textDecoration: "none" }}>
                  <h1>Ceylon Exports</h1>
                </a>

            <ul>
              <li>@ Copyright reserved</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <h1></h1>
          <ul></ul>
        </div>

        <div class="position-absolute top-50 end-0 translate-middle-y">
          <div class="col social">
            <h1>Help</h1>

            <ul>
              <li>
                <i class="fas fa-envelope"></i>&nbsp; &nbsp;{" "}
                <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;
                <i class="fas fa-star"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  );
};

export default Footer;
