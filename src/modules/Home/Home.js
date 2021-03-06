import React from 'react';
import {
  ItemContent,
  BannerFruid,
  SectionAboutPostPay,
  SectionComponent,
  SectionTwoColumn,
} from '../../StyledComponents/pages/GlobalPageStyle';
import ContactUs from './ContactUs'
import plushuman from '../../img/plushuman.svg';
import flight from '../../img/flight.svg';
import handle from '../../img/hand.svg';
import handup from '../../img/handup.svg';
import howItWorks1 from '../../img/how-it-works-1.png';
import howItWorks2 from '../../img/how-it-works-2.png';
import howItWorks3 from '../../img/how-it-works-3.png';
import retailerBg from '../../img/are-you-retailer-bg.jpg';

const Home = () => {
  // Two Element Section
  return (
    <div>
      <SectionComponent titleSection="how it works">
        <ItemContent
          isSmallScreen
          url={plushuman}
          alt="human"
          titleItem="sign-up in seconds &#38; get instant approval decision"
          desTitleItem="Select postpay as your payment method on checkout. All you need is your debit/credit card and emirates ID (you must be over 18). no long forms for you to fill and we will give you an instant approval decision."
        />
        <ItemContent
          isSmallScreen
          url={flight}
          alt="human"
          titleItem="receive your order as normal"
          desTitleItem="Your order is shipped as normal  and the purchase amount is split into 4 equal payments - the first is processed immediately and the remaining three payments are automatically collected every two weeks."
        />
        <ItemContent
          isSmallScreen
          url={handle}
          alt="human"
          titleItem="pay nothing extra"
          desTitleItem="postpay is always zero interest and charges absolutely no additional fees when you repay on time. Automatic payment taken every 2 weeks in four equal installments."
        />
      </SectionComponent>

      <SectionAboutPostPay
        url={handup}
        titleSection="about postpay"
        subTitleSection="shop now, pay later"
        descriptionSection={
          <p>
            postpay is fully integrated with all your favourite shops. shop as usual, then choose
            postpay as your payment method at checkout. First-time customers complete a quick
            registration, returning customers simply log in. It’s that easy! <br />
            <br /> You then pay for your items over 4 easy instalments, with Zero-interest and no
            transaction or processing fees when you pay on time. It’s buy now, pay later made
            seamless for you!
          </p>
        }
      />
      <h2>Section Bonus</h2>
      <SectionComponent titleSection="how it works">
        <ItemContent
          isSmallScreen
          bigImgMb="bigImgMb"
          newAttr="bigImg"
          url={howItWorks1}
          alt="human"
          titleItem="Shop at your favorite online stores"
          desTitleItem="Simply complete your order and select postpay at checkout!"
        />
        <ItemContent
          isSmallScreen
          bigImgMb="bigImgMb"
          centerImg="centerImg"
          newAttr="bigImg"
          url={howItWorks2}
          alt="human"
          titleItem="Sign up in seconds"
          desTitleItem="For first-time users only! Enter a couple of details and get instant approval decision"
        />
        <ItemContent
          isSmallScreen
          bigImgMb="bigImgMb"
          newAttr="bigImg"
          url={howItWorks3}
          alt="human"
          titleItem="postpay it!"
          desTitleItem="Confirm your order in one click and pay in four interest-free payments"
        />
      </SectionComponent>
      <BannerFruid
        sectionCTA
        overlay
        headline="are you a retailer"
        BannerTitleText="add postpay to your checkout today"
        BannerSubTitleText="Learn how postpay can increase conversion rates, average basket sizes and attract more
        repeat customers to your business."
        url={retailerBg}
        href="#"
        nameBtn="learn more"
      />

      <ContactUs />
    </div>
  );
};

export default Home;
