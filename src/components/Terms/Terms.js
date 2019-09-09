import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Terms extends Component {
  static propTypes = {
    contactEmail: PropTypes.string
  }

  static defaultProps = {
    contactEmail: 'hello@all-turtles.com'
  }

  render () {
    const { contactEmail } = this.props

    return (
      <>
        <p>Last updated: May 29, 2019</p>
        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the www.all-turtles.com website and the associated mobile applications (together, or individually, the "Service") operated by All Turtles, LLC ("us", "we", or "our").</p>
        <p>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.</p>
        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.</p>
        <h4>Communications</h4>
        <p>By creating an Account on our service, you agree to subscribe to emails, marketing or promotional materials and other information we may send to an email address on file, via your submission. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
        <h4>Purchases</h4>
        <p>If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
        <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
        <p>The service may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.</p>
        <h4>Availability, Errors and Inaccuracies</h4>
        <p>We are constantly updating product and service offerings on the Service. We may experience delays in updating information on the Service and in our advertising on other web sites. The information found on the Service may contain errors or inaccuracies and may not be complete or current. Products or services may be mispriced, described inaccurately, or unavailable on the Service and we cannot guarantee the accuracy or completeness of any information found on the Service.</p>
        <p>We therefore reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.</p>
        <h4>Content</h4>
        <p>Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness. It is also solely at your election to contribute Content.</p>
        <p>By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
        <p>You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service. However, by posting Content using the Service, and as necessary for us to provide the Services,  you grant us a worldwide, non-exclusive, royalty-free, fully paid up, irrevocable, worldwide, perpetual license, sublicensable, and transferable license to use, make, have made, execute, reproduce, modify, adapt, display, perform, distribute, make derivative works of, import, export, and, make, have made, use, execute, reproduce, modify, adapt, display, perform, distribute, make derivative works of, import, and export, your information in connection with the Services and to permit others to do any of the foregoing. The rights you grant in this license are for the limited purpose of operating and providing our Services (such as to allow us to display your profile picture and status message, transmit your messages, store your undelivered messages on our servers for up to 30 days as we try to deliver them, and otherwise as described in our applicable policies). You also grant us the right to sell or offer for sale your information and data derived thereof submitted through our Services, excluding your video content, which always remains yours.</p>
        <p>All Turtles, LLC has the right but not the obligation to monitor and edit all Content provided by users.</p>
        <p>In addition, Content found on or through this Service are the property of All Turtles, LLC or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
        <h4>Accounts</h4>
        <p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</p>
        <p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
        <p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.</p>
        <p>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>
        <h4>Intellectual Property</h4>
        <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of All Turtles, LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of All Turtles, LLC.</p>
        <h4>Links To Other Web Sites</h4>
        <p>Our Service may contain links to third party web sites or services that are not owned or controlled by All Turtles, LLC</p>
        <p>All Turtles, LLC has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
        <p>You acknowledge and agree that All Turtles, LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.</p>
        <p>We strongly advise you to read the terms of service and privacy policies of any third party web sites or services that you visit.</p>
        <h4>Termination</h4>
        <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
        <p>If you wish to terminate your account, you may simply discontinue using the Service.</p>
        <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
        <h4>Indemnification</h4>
        <p>You agree to defend, indemnify and hold harmless All Turtles, LLC and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.</p>
        <h4>Limitation Of Liability</h4>
        <p>In no event shall All Turtles, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
        <h4>Disclaimer</h4>
        <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
        <p>All Turtles, LLC its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>
        <h4>Exclusions</h4>
        <p>Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.</p>
        <h4>Governing Law</h4>
        <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.</p>
        <h4>Changes</h4>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>
        <h4>Contact Us</h4>
        <p>
        If you have any questions about these Terms, please contact us at: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </>
    )
  }
}
