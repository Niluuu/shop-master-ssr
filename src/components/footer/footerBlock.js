import React from "react";
import img from "../../assets/img/logo.png";

function FooterBlock() {
  return (
    <footer class="footer-block">
      <div class="container">
        <div class="footer-wrap">
          <div class="footer-left">
            <a href="index.html" class="footer-logo">
              <img src={img} alt="" />
            </a>

            <p>
              Many say exploration is part of our dest but it’s actually our
              duty to future and their. quest ensure the survival of the human
              species. We have any infinite amount to learn both Special nature.
              and from each other.
            </p>

            <div class="footer-contacts">
              <div class="footer-contacts__item">
                <b>Address:</b> <span>868 Fake Street, New York</span>
              </div>

              <div class="footer-contacts__item">
                <b>Phone:</b>{" "}
                <a href="tel:(08) 08 4752 1499">(08) 08 4752 1499</a>
              </div>

              <div class="footer-contacts__item">
                <b>Email</b>{" "}
                <a href="mailto: info@supermart.com">info@supermart.com</a>
              </div>
            </div>
          </div>

          <div class="footer-menu">
            <div class="footer-column">
              <h5>COMPANY</h5>
              <ul>
                <li>
                  <a href="#!">Discount Vouches</a>
                </li>
                <li>
                  <a href="#!">Spring Collection</a>
                </li>
                <li>
                  <a href="#!">Trending</a>
                </li>
                <li>
                  <a href="#!">Best Sellers</a>
                </li>
                <li>
                  <a href="#!">Special Deals</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h5>POLICY INFO</h5>
              <ul>
                <li>
                  <a href="#!">Orders &amp; Returns</a>
                </li>
                <li>
                  <a href="#!">Advanced Search</a>
                </li>
                <li>
                  <a href="#!">Help &amp; FAQs</a>
                </li>
                <li>
                  <a href="#!">Consultant</a>
                </li>
                <li>
                  <a href="#!">Store Locations</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h5>My Account</h5>
              <ul>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Delivery Information</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#!">Custom Link</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h5>COMPANY</h5>
              <ul>
                <li>
                  <a href="#!">Discount Vouches</a>
                </li>
                <li>
                  <a href="#!">Spring Collection</a>
                </li>
                <li>
                  <a href="#!">Trending</a>
                </li>
                <li>
                  <a href="#!">Best Sellers</a>
                </li>
                <li>
                  <a href="#!">Special Deals</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h5>POLICY INFO</h5>
              <ul>
                <li>
                  <a href="#!">Orders &amp; Returns</a>
                </li>
                <li>
                  <a href="#!">Advanced Search</a>
                </li>
                <li>
                  <a href="#!">Help &amp; FAQs</a>
                </li>
                <li>
                  <a href="#!">Consultant</a>
                </li>
                <li>
                  <a href="#!">Store Locations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBlock;
