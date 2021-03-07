import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/JobPostForm.module.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { fetchPostJSON } from "../utils/api-helpers"

import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

const ReactRTE = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

const Editor = dynamic(
  () => {
    return import("../components/DraftEditor");
  },
  { loading: () => null, ssr: false }
);

const BASIC = "price_1IM4zADN3w6TabsRUEtBLB9g";
const STANDARD = "price_1IM523DN3w6TabsRAr5UUGnR";
const PREMIUM = "price_1IM52PDN3w6TabsR1tvlKCVK";

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
    },
    invalid: {
      color: "#f2542d",
      iconColor: "#f2542d"
    }
  }
}

const BulletPoint = () => (
  <div
    style={{
      width: ".5rem",
      height: ".5rem",
      content: "' '",
      background: "var(--orange)",
      display: "inline-flex",
      borderRadius: "50%",
      marginLeft: ".5ch",
    }}
  ></div>
);

const CheckMark = ({ color }) => (
  <span
    style={{
      display: "inline-block",
      height: "1.5em",
      marginRight: ".25em",
      verticalAlign: "-.4rem",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
        fill={color}
      />
    </svg>
  </span>
);

const PrintObject = ({ content }) => {
  const formatContent = JSON.stringify(content, null, 2)
  return <pre>{formatContent}</pre>
}

export default function JobPostForm() {
  const [better, setBetter] = useState(true);
  const [best, setBest] = useState(false);
  const [total, setTotal] = useState(225);
  const [upgades, setUpgrades] = useState();
  const [isProcessing, setIsProcessing] = useState(false);
  const [payment, setPayment] = useState({ status: 'Initial' });
  const [priceId, setPriceId] = useState(BASIC);

  const stripe = useStripe()
  const elements = useElements()

  const selectBetter = () => {
    if (better) {
      setBetter(false);
      setBest(false);
    }
    if (!better) {
      setBest(false);
      setBetter(true);
      setUpgrades(22435);
    }
  };
  const selectBest = () => {
    if (best) {
      setBetter(false);
      setBest(false);
    }
    if (!best) {
      setBest(true);
      setBetter(false);
      setUpgrades(22436);
    }
  };

  const handleSubmit = async (values) => {


    //Check if form is valid
    setIsProcessing(true)

    //Create PaymentIntent with amount from items
    const response = await fetchPostJSON('/api/payment_intents', {
      priceId: priceId,
      email: values.companyEmail,
      metadata: {
        email: values.companyEmail,
        jobTitle: values.jobTitle,
        company: values.company,
      } 
    })
    setPayment(response)

    if (response.statusCode === 500) {
      setPayment({ status: 'error' })
      //Set Error Message
      return
    }

    //Get a ref to the CardElement
    const cardElement = elements.getElement(CardElement)

    //Use CardElement to process payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      response.client_secret,
      {
        payment_method: {
          card: cardElement,
        }
      }
    )
    
    if (error) {
      setPayment({ status: 'error' })
      //Set error message
    } else if (paymentIntent) {
      setPayment(paymentIntent)
      setIsProcessing(false)
      alert(JSON.stringify(values, null, 2));
      // Send to success page
    }
  }

  useEffect(() => {
    if (!better && !best) {
      setTotal(99);
      setPriceId(BASIC)
    }
    if (better) {
      setTotal(134);
      setPriceId(STANDARD)
    }
    if (best) {
      setTotal(164);
      setPriceId(PREMIUM)
    }
  }, [better, best]);


  return (
    <div>
      <Formik
        initialValues={{ jobTitle: "", category: "", location: "", companyEmail: "" }}
        validationSchema={Yup.object({
          jobTitle: Yup.string()
            .min(10, "Must be 10 characters or more"),
            // .required("Required"),
          location: Yup.string()
            .min(5, "Must be 5 characters or more"),
            // .required("Required"),
          howToApply: Yup.string()
            .url("Invalid URL"),
            // .required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form className={styles.postForm}>
          <div className="form">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2em",
              }}
            >
              <h2>Tell us about the position</h2>
              <span style={{ fontSize: ".875em" }}>
                Required
                <BulletPoint />
              </span>
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="jobTitle" className={styles.label}>
                Job Title
                <BulletPoint />
              </label>
              <Field name="jobTitle" type="text" className={styles.input} />
              <ErrorMessage component="span" name="jobTitle" style={{ color: "var(--orange)", fontSize: ".875em", fontWeight: "700", marginBottom: "1em" }} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              className={styles.inputDiv}
            >
              <div style={{ flex: 1, flexBasis: "300px", marginRight: "2em" }}>
                <label htmlFor="category" className={styles.label}>
                  Category
                  <BulletPoint />
                </label>
                <Field name="category" as="select" className={styles.select}>
                  <option value="Develop">Develop</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Finance">Finance</option>
                  <option value="Other">Other</option>
                </Field>
              </div>
              <div
                role="group"
                aria-labelledby="Job-Type"
                style={{ flexGrow: 1, flexShrink: 1 }}
              >
                <div style={{ marginBottom: "2em" }}>
                  <div className={styles.label}>
                    Job Type
                    <BulletPoint />
                  </div>
                  <label style={{ marginRight: "1em" }}>
                    <Field
                      type="radio"
                      name="jobType"
                      value="full-time"
                      style={{ marginRight: ".5em" }}
                    />
                    Full-Time
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="jobType"
                      value="contract"
                      style={{ marginRight: ".5em" }}
                    />
                    Contract
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              className={styles.inputDiv}
            >
              <div style={{ flex: 1, flexBasis: "300px", marginRight: "2em" }}>
                <label htmlFor="location" className={styles.label}>
                  Location
                  <BulletPoint />
                </label>
                <Field name="location" className={styles.input} />
                <ErrorMessage name="location" />
              </div>
              <div
                role="group"
                aria-labelledby="Remote"
                style={{ flexGrow: 1, flexShrink: 1 }}
              >
                <div style={{ marginBottom: "2em" }}>
                  <div className={styles.label}>
                    Remote Position
                    <BulletPoint />
                  </div>
                  <label style={{ marginRight: "1em" }}>
                    <Field
                      type="radio"
                      name="remote"
                      value="true"
                      style={{ marginRight: ".5em" }}
                    />
                    Yes
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="remote"
                      value="false"
                      style={{ marginRight: ".5em" }}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="howToApply" className={styles.label}>
                How to Apply
                <BulletPoint />
              </label>
              <Field name="howToApply" type="text" className={styles.input} />
              <ErrorMessage name="howToApply" />
            </div>
            <div className="last">
              <label htmlFor="jobDesc" className={styles.label}>
                Job Description
                <BulletPoint />
              </label>
              {/* <ReactRTE /> */}
              <Editor />
              <ErrorMessage name="jobDesc" />
            </div>
          </div>
          <div className="form">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2em",
              }}
            >
              <h2>Tell us about your company</h2>
              <span style={{ fontSize: ".875em" }}>
                Required
                <BulletPoint />
              </span>
            </div>
            <div>
              <label htmlFor="companyName" className={styles.label}>
                Company Name
                <BulletPoint />
              </label>
              <Field name="companyName" type="text" className={styles.input} />
              <ErrorMessage name="companyName" />
            </div>
            <div>
              <label htmlFor="companyStatement" className={styles.label}>
                Company Statement
              </label>
              <Field
                name="companyStatement"
                type="text"
                className={styles.input}
              />
              <ErrorMessage name="companyStatement" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{ flex: "1", marginRight: "1.5em", flexBasis: "300px" }}
              >
                <label htmlFor="companyWebsite" className={styles.label}>
                  Company Website
                  <BulletPoint />
                </label>
                <Field name="companyWebsite" className={styles.input} />
              </div>
              <div style={{ flex: "1", marginRight: "1.5em" }}>
                <label htmlFor="companyEmail" className={styles.label}>
                  Company Email
                  <BulletPoint />
                </label>
                <Field name="companyEmail" className={styles.input} />
              </div>
            </div>
            <div>
              <label htmlFor="companyLogo" className={styles.label}>
                Company Logo
              </label>
              <Field name="companyLogo" type="text" className={styles.input} />
              <ErrorMessage name="companyLogo" />
            </div>
            <div className="last">
              <label htmlFor="companyDesc" className={styles.label}>
                Company Description
                <BulletPoint />
              </label>
              <ReactRTE />
              <ErrorMessage name="companyDesc" />
            </div>
          </div>
          <div className="pricing">
            <div>
              <div className="pricing-title">
                <h2>Help your ad stand out</h2>
                <span
                  style={{
                    color: "var(--grey)",
                    textTransform: "uppercase",
                    fontSize: "small",
                  }}
                >
                  Optional, but highly recommended
                </span>
              </div>
              <div className="cards" style={{ marginBottom: "4em" }}>
                <div
                  className={better ? "card selected" : "card"}
                  onClick={() => selectBetter()}
                >
                  <h3>Better</h3>
                  <h4>$35</h4>
                  <ul>
                    <li>
                      <CheckMark color="var(--orange)" /> Highlight your ad
                    </li>
                    <li>
                      <CheckMark color="var(--orange)" /> 2x Social Media Posts
                    </li>
                    <li>
                      <CheckMark color="var(--orange)" /> Share to Google Jobs
                    </li>
                    <li>
                      <CheckMark color="var(--grey)" /> Company Logo
                    </li>
                    <li>
                      <CheckMark color="var(--grey)" /> Featured for 14 days
                    </li>
                  </ul>
                </div>
                <div
                  className={best ? "card selected" : "card"}
                  onClick={() => selectBest()}
                >
                  <h3>Best</h3>
                  <h4>$65</h4>
                  <ul>
                    <li>
                      <CheckMark color="var(--orange)" /> Highlight your ad
                    </li>
                    <li>
                      <CheckMark color="var(--orange)" /> 2x Social Media Posts
                    </li>
                    <li>
                      <CheckMark color="var(--orange)" /> Share to Google Jobs
                    </li>
                    <li>
                      <CheckMark color="var(--orange)" /> Company Logo
                    </li>
                    <li>
                      <CheckMark color="var(--orange)" /> Featured for 14 days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom-cards">
              <div className="bottom-card">
                <span className="total">Total: ${total}</span>
              </div>
              <div className="cardContainer">
                <CardElement options={cardElementOptions}/>
              </div>
              <div className="bottom-card">
                <button type="submit" className="button payButton" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Post your job"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>

      <PrintObject content={payment} />
      <style jsx>{`
      .form, .pricing {
          background: var(--light-yellow);
          border-radius: 8px;
          padding: 16px 16px;
          width: 100%;
          margin-bottom: 4em;
      }
      .pricing {
        background var(--dark-green);
        
        color: var(--white);
      }
      .pricing-title {
        margin-top: 2em;
        text-align: center;
        margin-bottom: 3em;
      }
      .pricing-title h2 {
        font-size: 2rem;
      }
      .cards {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2em;
        margin-left: 2em;
        margin-right: 2em;
        flex-wrap: wrap;
      }
      .cardContainer {
        padding: 1em 0;
        background: #fff;
        border-radius: 8px;
      }

      
      .bottom-cards {
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
        margin-left: 2em;
        margin-right: 2em;
        flex-wrap: wrap;
        gap: 2em;
      }
      .payButton {
        width: 100%;
        padding-top: .75em;
        padding-bottom: .75em;
      }
      .payButton:disabled, .payButton[disabled] {
        background: rgba(242, 84, 45, .75);
        border: transparent 2px solid;
        cursor: not-allowed;
      }
      .card {
        flex: 1;
        padding: 1em;
        cursor: pointer;
        min-width: 250px;
        margin-bottom: 2em;
      }
      @media only screen and (max-width: 642px) {
        
      .bottom-cards {
        justify-content: center;
      }
      }
      @media only screen and (min-width: 642px) 
      {
      .card:first-of-type {
        margin-right: 2em;
      }
        
      }
      .card {
        background: var(--white);
        border-radius: 8px;
        color: var(--black);
        max-width: 308px;
        border: 4px solid var(--white);
      }
      .card.selected {
        border: 4px solid var(--orange);
      }
      .card h3 {
        text-transform: uppercase;
        font-size: 1em;
        margin-bottom: -.65em;
        color: var(--orange);
      }
      .card h4 {
        margin-top: 0;
        font-size: 2em;
        margin-bottom: .5em;
      }
      .card li {
        margin-bottom: 1em;
        font-weight: 700;
      }
      .card li:last-of-type {
        margin-bottom: 2em;
      }
      .total {
        font-size: 1.675em;
        font-weight: 700;
      }

      .last {
        margin-bottom: 2em;
      }  
      
        
        `}</style>
    </div>
  );
}
