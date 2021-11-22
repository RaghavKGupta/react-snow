const Footer = () => {
    return (
      <div>
          <footer class="usa-footer">
      <div class="footer__upper">
        <div class="grid-container">
          <div class="grid-row grid-gap">
            <div
              class="
                usa-footer__logo
                grid-row
                mobile-lg:grid-col-6 mobile-lg:grid-gap-2
              "
            >
              <div class="mobile-lg:grid-col-auto">
                <p class="usa-footer__logo-heading">Children's Bureau Express</p>
                <h4>Contact Center</h4>
                <a href="">cb_express@childwelfare.gov</a>
              </div>
              <div class="usa-footer__social-links grid-row grid-gap-1">
                <div class="grid-col-auto">
                  <a
                    class="usa-social-link usa-social-link--facebook"
                    href="javascript:void(0);"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
    
                <div class="grid-col-auto">
                  <a
                    class="usa-social-link usa-social-link--twitter"
                    href="javascript:void(0);"
                  >
                    <span>Twitter</span>
                  </a>
                </div>
    
                <div class="grid-col-auto">
                  <a
                    class="usa-social-link usa-social-link--youtube"
                    href="javascript:void(0);"
                  >
                    <span>YouTube</span>
                  </a>
                </div>
    
                <div class="grid-col-auto">
                  <a
                    class="usa-social-link usa-social-link--instagram"
                    href="javascript:void(0);"
                  >
                    <span>Instagram</span>
                  </a>
                </div>
    
                <div class="grid-col-auto">
                  <a
                    class="usa-social-link usa-social-link--rss"
                    href="javascript:void(0);"
                  >
                    <span>RSS</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="usa-footer__contact-links mobile-lg:grid-col-6">
              <address class="usa-footer__address">
                <div class="usa-footer__contact-info grid-row grid-gap">
                  <div class="grid-col-auto">
                    <form class="usa-search" role="search">
                      <span id="sign_up">Sign up</span>
                      <label class="usa-sr-only" for="basic-search-field-en-small">
                      Sign up
                      </label>
                      <input id="basic-search-field-en-small" class="footer_input" type="email" name="sign_up" 
                      placeholder="Your email address"/>
                      <button type="submit" style={{backgroundColor:'#E2EFF7', color:'#264A64'}}>
                        Sign up
                      </button>
                   </form>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
<div class="usa-identifier footer__lower">
  <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier,,,">
    <div class="usa-identifier__container">
      <div class="usa-identifier__logos">
        <a href="javascript:void(0);" class="usa-identifier__logo">
          <img
            class="usa-identifier__logo-img"
            src="../img/cb-logo-white.svg"
            alt="&lt;Parent agency&gt; logo"
            role="img"
          />
        </a>
        <a href="javascript:void(0);" class="usa-identifier__logo">
          <img
            class="usa-identifier__logo-img"
            src="../img/acf-logo-white.svg"
            alt="&lt;Other agency&gt; logo"
            role="img"
          />
        </a>
      </div>
      <div class="usa-identifier__identity" aria-label="Agency description">
        <p class="usa-identifier__identity-domain">cbexpress.acf.hhs.gov</p>
        <p class="usa-identifier__identity-disclaimer">
          An official website of the
          <a href="https://www.acf.hhs.gov/cb/">U.S. Department of Health and Human Services,</a><a href=""> Administration
            of Children and Families</a> and the
          <a href="https://www.acf.hhs.gov/">Children's Bureau</a>
        </p>
      </div>
    </div>
  </section>
  <nav
    class="usa-identifier__section usa-identifier__section--required-links"
    aria-label="Links to help navigate the policies and procedures for Child Welfare Gateway."
  >
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        <li class="usa-identifier__required-links-item">
          <a href="https://www.acf.hhs.gov/cb/" class="usa-identifier__required-link">About Children's Bureau Express</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="https://www.childwelfare.gov/accessibility/" class="usa-identifier__required-link"
            >Accessibility support</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="https://www.acf.hhs.gov/foia"
            class="usa-identifier__required-link usa-link"
            >FOIA requests</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="https://www.acf.hhs.gov/no-fear-act"
            class="usa-identifier__required-link usa-link"
            >No FEAR Act data</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="https://oig.hhs.gov/"
            class="usa-identifier__required-link usa-link"
            >Office of the Inspector</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="https://oig.hhs.gov/"
            class="usa-identifier__required-link usa-link"
            >General</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="https://www.childwelfare.gov/performancereports/"
            class="usa-identifier__required-link usa-link"
            >Performance reports</a
          >
        </li>
        <li class="usa-identifier__required-links-item">
          <a
            href="https://www.childwelfare.gov/privacypolicy/"
            class="usa-identifier__required-link usa-link"
            >Privacy policy</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <section
    class="usa-identifier__section usa-identifier__section--usagov"
    aria-label="U.S. government information and services,,,"
  >
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">
        Looking for U.S. government information and services?
      </div>
      <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
    </div>
  </section>
</div>
      </div>
    )
  }
  
  export default Footer
  