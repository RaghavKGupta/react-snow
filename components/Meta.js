import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <script src="../js/uswds-init.min.js"></script>
    <link rel="stylesheet" href="../css/uswds.min.css" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Demo for CWIG',
  keywords: 'SEE, CWIG',
  description: 'some text here',
}

export default Meta
