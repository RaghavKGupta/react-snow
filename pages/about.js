import Meta from '../components/Meta'

const about = () => {
  return (
    <div class="usa-d-flex justify-content-center">
      <Meta title='About' />
      <div>
      <h1>About CBX</h1>
      <p><em>Children's Bureau Express</em> (CBX) covers news, issues, and trends of
            interest to professionals and policymakers in the interrelated fields of
            child abuse and neglect, child welfare, and adoption. Visit CBX to gain:</p>
            <ul>
				<li class="blue_dot">Context and perspective on the implementation of Federal
legislation related to child safety, permanency, and well-being</li>
				<li class="blue_dot">Awareness of best practices and training materials</li>
				<li class="blue_dot">Insights into trends and emerging issues</li>
				<li class="blue_dot">Access to a community of your peers</li>
				<li class="blue_dot">Access to and updates on the resources of Child Welfare Information Gateway and the Children's Bureau's network of
national Child Welfare Resource Centers.</li>
			</ul>
      <p>Whenever possible, articles include links to full-text documents, online
			ordering services, related stories or resources, and other relevant sites.
			If you are viewing CBX via the Internet, just click on the highlighted
			link that you would like to follow. If you follow a link, you can always
			easily return to CBX. We also include the full web address for all links.</p>
      </div>
      <div>
        <h2>Printing and Emailing Articles</h2>
        <p>You always have the following options available:</p>
        <p>Print a printer-friendly version of an issue.</p>
        <ul>
				<li>This option prints each article without the menus and other graphics visible on the website.</li>
				<li>Email an issue to a colleague and include a personalized message. You just need your recipient's email
address.</li>
			</ul>
      </div>
      <div>
        <h2>Make a suggestion to CBX</h2>
        <p>Send us a private email to <a href="mailto:cb_express@childwelfare.gov">"Make a Suggestion"</a>.</p>
      </div>
      

    </div>
  )
}

export default about
