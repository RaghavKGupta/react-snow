import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <script src="../js/uswds.min.js"></script>
      <script src="../js/uswds-init.min.js"></script>
    <link rel="stylesheet" href="../css/uswds.min.css" />
    <link rel="stylesheet" href="../cbxTest.scss"/>
        
        <script src="https://kit.fontawesome.com/dad43c51a6.js" crossorigin="anonymous"></script>
    
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
