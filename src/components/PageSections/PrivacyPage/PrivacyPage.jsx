import React from "react";
import "./PrivacyPage.scss";

import PageHeader from "../../PageHeader/PageHeader";

const PrivacyPage = () => {
  return (
    <div>
      <PageHeader title="Privacy Policy" subtitle="version 1" />
      <div className="container privacy__container">
        <h2 className="privacy__h2">Wayfare Studios Privacy Policy</h2>

        <p className="privacy__p">
          It is Wayfare Studio’s policy to respect your privacy regarding any
          information we may collect while operating our business and website.
          This policy applies to https://wayfarestudios.com/ (hereinafter, “us”,
          “we”, or “https://wayfarestudios.com/“). We respect your privacy and
          are committed to protecting personally identifiable information you
          may provide us through our website. We have adopted this (“Privacy
          Policy”) to explain what information may be collected on our Website,
          how we use this information, and under what circumstances we may
          disclose the information to third parties. This Privacy Policy applies
          only to information we collect through our Website and does not apply
          to our collection of information from other sources.
        </p>
        <p className="privacy__p end">
          This Privacy Policy sets forth the general rules and policies
          governing your use of our Website. Depending on your activities when
          visiting our Website, you may be required to agree to additional terms
          and conditions, which may alter the terms in this policy. It should be
          known that all other agreements you consent for shall take precedence
          over this particular policy.
        </p>
        <h2 className="privacy__h2">Website Visitors</h2>
        <p className="privacy__p end">
          Like most website operators, Wayfare Studios collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request. Wayfare Studios’ purpose in collecting non-personally
          identifying information is to better understand how Wayfare Studios’
          visitors use its website. From time to time, Wayfare Studios may
          release non-personally-identifying information like Internet Protocol
          (IP) addresses for it’s users to private third party applications.
        </p>
        <h2 className="privacy__h2">Security</h2>
        <p className="privacy__p end">
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially superior means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </p>
        <h2 className="privacy__h2">Links to External Sites</h2>
        <p className="privacy__p end">
          Our Website may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party’s site. We strongly advise you to review the Privacy
          Policy and Terms and Conditions of every site you visit. We have no
          control over, and assume no responsibility for the content, privacy
          policies, or practices of any third party sites, products or services.
        </p>
        <h2 className="privacy__h2">3rd Party Services for Remarketing</h2>
        <p className="privacy__p">
          https://wayfarestudios.com/ may use remarketing services to advertise
          on third party websites (including Google) to previous visitors of our
          site. It could mean that we advertise to previous visitors who haven’t
          completed a task on our site, for example using the contact form to
          make an inquiry. This could be in the form of an advertisement on the
          Google search results page, or a site in the Google Display Network.
          Third party vendors, including Google, use cookies to serve ads based
          on someone’s past visits. Of course, any data collected will be used
          in accordance with our own privacy policy and Google’s privacy policy.
        </p>
        <p className="privacy__p end">
          You can set preferences for how Google advertises to you using the
          Google Ad Preferences page, and if you want, you may opt out of
          interest-based advertising entirely by cookie settings or permanently
          using a browser plugin.
        </p>
        <h2 className="privacy__h2">Aggregated Statistics</h2>
        <p className="privacy__p end">
          Wayfare Studios may collect statistics about the behavior of visitors
          to its website. Wayfare Studios may display this information publicly
          or provide it to others. However, Wayfare Studios does not disclose
          your personally-identifying information.
        </p>
        <h2 className="privacy__h2">Cookies</h2>
        <p className="privacy__p">
          To enrich and perfect your online experience, Wayfare Studios uses
          “Cookies”, similar technologies and services provided by others to
          display personalized content, appropriate advertising and store your
          preferences.
        </p>
        <p className="privacy__p">
          A cookie is a string of information that a website stores on a
          visitor’s computer, and that visitor’s browser provides to the website
          each time the visitor returns. Wayfare Studios uses cookies to help
          identify and track visitors, their usage of our Website, and their
          website access preferences. Wayfare Studios visitors who do not wish
          to have cookies placed on their computers should set their browsers to
          refuse cookies before using our Website, with the drawback that
          certain features of our Website may not function properly without the
          aid of cookies.
        </p>
        <p className="privacy__p end">
          By continuing to navigate our website without changing your cookie
          settings, you hereby acknowledge and agree to Wayfare Studios’ use of
          cookies.
        </p>
        <h2 className="privacy__h2">Privacy Policy Changes</h2>
        <p className="privacy__p">
          Although most changes are likely to be minor, Wayfare Studios may
          change its Privacy Policy from time to time, and in Wayfare Studios’
          sole discretion. Wayfare Studios encourages visitors to frequently
          check this page for any changes to its Privacy Policy. Your continued
          use of this site after any change in this Privacy Policy will
          constitute your acceptance of such change.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
