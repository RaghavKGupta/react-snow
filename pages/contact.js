import Meta from '../components/Meta'

const contact = () => {
  return (
    <div class="usa-d-flex justify-content-center">
      <Meta title='Contact' />
      <h1>Contact Us</h1>
      <div class="grid-container">
      <div class="grid-row">
      <div class="tablet:grid-col">
      <h2>Questions</h2>
        <p>To report child abuse or neglec, please contact Child Help USA at 1.800.4 A Child(1.800.422.4453) or see our list of State child abuse and neglect reporting numbers.
        </p>
      </div>
        <div class="tablet:grid-col"></div>
        <div class="tablet:grid-col"><div>
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use href="../img/sprite.svg#mail"></use>
      </svg>
        <h3>Email Us</h3>
        <p>You can email us at SomeEmailHere</p>
      </div>
      <div>
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use href="../img/sprite.svg#phone"></use>
      </svg>
        <h3>Call Us</h3>
        <p>To speak to an information support specialist, please contact us at 1.800.384.3366 between 9:30 AM and 5:30 PM. (EST)</p>
      </div>
      <div>
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use href="../img/sprite.svg#chat"></use>
      </svg>
        <h3>Live Chat/Live Online Support</h3>
        <p>Use Live Chat, an instant messaging service, to contact an information support specialist between 10:00 AM and 5:00 PM (EST) </p>
      </div>
      <div>
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use href="../img/sprite.svg#location_on"></use>
      </svg>
        <h3>Mail</h3>
        <p>Child Welfare Information Gateway<br/>
            Children's Bureau/ACYF<br/>
            330 C Street S.W.<br/>
            Washington, DC 20201
        </p>
      </div></div>
      </div>
      </div>
      <hr/>
      <div>
        <h2>Comments/Suggestion</h2>
        <p>Send us a private email to <a href="mailto:cb_express@childwelfare.gov">"Make a Suggestion"</a>.</p>
      </div>
      

    </div>
  )
}

export default contact
