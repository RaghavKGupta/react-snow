import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'


const Nav = () => {
  return (
    <div>
      <div>
      <section class="usa-banner" aria-label="Official government website">
  <div class="usa-accordion">
    <header class="usa-banner__header">
      <div class="usa-banner__inner">
        <div class="grid-col-auto">
          <img
            class="usa-banner__header-flag"
            src="../img/us_flag_small.png"
            alt="U.S. flag"
          />
        </div>
        <div class="grid-col-fill tablet:grid-col-auto">
          <p class="usa-banner__header-text">
            An official website of the United States government
          </p>
          <p class="usa-banner__header-action" aria-hidden="true">
            Here’s how you know
          </p>
        </div>
        <button
          class="usa-accordion__button usa-banner__button"
          aria-expanded="false"
          aria-controls="gov-banner-default"
        >
          <span class="usa-banner__button-text">Here’s how you know</span>
        </button>
      </div>
    </header>
    <div class="usa-banner__content usa-accordion__content" id="gov-banner-default">
      <div class="grid-row grid-gap-lg">
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img
            class="usa-banner__icon usa-media-block__img"
            src="../img/icon-dot-gov.svg"
            role="img"
            alt=""
            aria-hidden="true"
          />
          <div class="usa-media-block__body">
            <p>
              <strong> Official websites use .gov </strong>
              <br />
              A <strong>.gov</strong> website belongs to an official government
              organization in the United States.
            </p>
          </div>
        </div>
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img
            class="usa-banner__icon usa-media-block__img"
            src="../img/icon-https.svg"
            role="img"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    </div>
    
  )
}

export default Nav
