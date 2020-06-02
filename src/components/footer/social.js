import React from "react";

function Social() {
  return (
    <div class="black-bg__block">
      <div class="container">
        <div class="flex__block">
          <div class="newsletter-main">
            <div class="newsletter-text__wrap">
              <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              <span>
                SIGNUP to <br /> NEWSLETTER{" "}
              </span>
            </div>
            <div class="search__block">
              <div class="search__inner">
                <div class="form-group">
                  <input type="text" placeholder="Search" />
                </div>
              </div>

              <button class=" main-btn">submit</button>
            </div>
          </div>

          <div class="social-main">
            <h5>Keep in touch</h5>

            <div class="social-main__wrap">
              <a href="#!" class="social-block__item socials-twitter">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#!" class="social-block__item socials-fb">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#!" class="social-block__item socials-ig">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#!" class="social-block__item socials-pin">
                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
              </a>
              <a href="#!" class="social-block__item socials-vimeo">
                <i class="fa fa-vimeo" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
