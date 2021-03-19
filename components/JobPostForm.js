import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import styles from "../styles/JobPostForm.module.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { fetchPostJSON } from "../utils/api-helpers";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import ExamplePosting from "./examplePost";

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
      iconColor: "#f2542d",
    },
  },
};

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
  const formatContent = JSON.stringify(content, null, 2);
  return <pre>{formatContent}</pre>;
};

export default function JobPostForm() {
  const [better, setBetter] = useState(true);
  const [best, setBest] = useState(false);
  const [total, setTotal] = useState(225);
  const [upgades, setUpgrades] = useState();
  const [isProcessing, setIsProcessing] = useState(false);
  const [payment, setPayment] = useState({ status: "Initial" });
  const [priceId, setPriceId] = useState(BASIC);

  // const [editorState, setEditorState] = useState(
  //   () => EditorState.createEmpty(),
  // )
  const [convertedContent, setConvertedContent] = useState(null);

  // const handleEditorChange = (state) => {
  //   setEditorState(state);
  //   convertContentToHTML();
  // }

  // const convertContentToHTML = () => {
  //   let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
  //   setConvertedContent(currentContentAsHTML);
  // }

  // const createMarkup = (html) => {
  //   return {__html: html}
  // }

  const stripe = useStripe();
  const elements = useElements();

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
    setIsProcessing(true);

    //Create PaymentIntent with amount from items
    const response = await fetchPostJSON("/api/payment_intents", {
      priceId: priceId,
      email: values.companyEmail,
      metadata: {
        email: values.companyEmail,
        jobTitle: values.jobTitle,
        company: values.company,
      },
    });
    setPayment(response);

    if (response.statusCode === 500) {
      setPayment({ status: "error" });
      //Set Error Message
      return;
    }

    //Get a ref to the CardElement
    const cardElement = elements.getElement(CardElement);

    //Use CardElement to process payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      response.client_secret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setPayment({ status: "error" });
      //Set error message
    } else if (paymentIntent) {
      setPayment(paymentIntent);
      setIsProcessing(false);
      alert(JSON.stringify(values, null, 2));
      // Send to success page
    }
  };

  useEffect(() => {
    if (!better && !best) {
      setTotal(99);
      setPriceId(BASIC);
    }
    if (better) {
      setTotal(134);
      setPriceId(STANDARD);
    }
    if (best) {
      setTotal(164);
      setPriceId(PREMIUM);
    }
  }, [better, best]);

  const TextInput = ({ label, required, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
        {required ? <BulletPoint /> : null}
        <input className={styles.input} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div
            style={{
              color: "var(--orange)",
              fontSize: ".875em",
              fontWeight: "700",
              marginBottom: ".5em",
              height: "1.25em",
              lineHeight: 1,
            }}
          >
            {meta.error}
          </div>
        ) : (
          <div
            style={{ content: " ' ' ", height: "17.5px", marginBottom: ".5em" }}
          ></div>
        )}
      </>
    );
  };

  const SelectInput = ({ label, required, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
        {required ? <BulletPoint /> : null}
        <select className={styles.select} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div
            style={{
              color: "var(--orange)",
              fontSize: ".875em",
              fontWeight: "700",
              marginBottom: ".5em",
              height: "1.25em",
              lineHeight: 1,
            }}
          >
            {meta.error}
          </div>
        ) : (
          <div
            style={{ content: " ' ' ", height: "17.5px", marginBottom: ".5em" }}
          ></div>
        )}
      </>
    );
  };

  const FocusError = () => {
    const { errors, isSubmitting, isValidating } = useFormikContext();

    useEffect(() => {
      if (isSubmitting && !isValidating) {
        let keys = Object.keys(errors);
        if (keys.length > 0) {
          const selector = `[name=${keys[0]}]`;
          const errorElement = document.querySelector(selector);
          if (errorElement) {
            errorElement.focus();
          }
        }
      }
    }, [errors, isSubmitting, isValidating]);

    return null;
  };

  return (
    <div>
      <Formik
        initialValues={{
          jobTitle: "",
          category: "",
          location: "",
          jobDescription: "",
          jobType: "",
          howToApply: "http://",
          remotePosition: "",
          companyName: "",
          companyStatement: "",
          companyWebsite: "http://",
          companyEmail: "",
          companyLogo: "",
        }}
        validationSchema={Yup.object({
          jobTitle: Yup.string()
            .min(10, "A little more description, try 10 chracters or more")
            .required("Required"),
          location: Yup.string().min(3, "Please Enter a Valid Location"),
          // .required("Required"),
          howToApply: Yup.string().url("Enter a valid URL"),
          // .required("Required"),
          jobDescription: Yup.string().min(
            10,
            "Please enter a job description"
          ),
          // .required("Required"),
          category: Yup.string()
            .oneOf(
              [
                "Develop",
                "Design",
                "Marketing",
                "Sales",
                "Support",
                "Finance",
                "Other",
              ],
              "Invalid Job Type"
            )
            .required("Required"),
          jobType: Yup.string().required("Please select a Job Type"),
          jobType: Yup.string().required("Please select a Job Type"),
          jobType: Yup.string().required("Please select a Job Type"),
        })}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, setTouched, touched, values }) => (
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
                <TextInput
                  label="Job Title"
                  name="jobTitle"
                  type="text"
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                className={styles.inputDiv}
              >
                <div
                  style={{ flex: 1, flexBasis: "300px", marginRight: "2em" }}
                >
                  <SelectInput label="Category" name="category" required>
                    <option value="">Select a Category</option>
                    <option value="Develop">Develop</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                  </SelectInput>
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
                <div
                  style={{ flex: 1, flexBasis: "300px", marginRight: "2em" }}
                >
                  <TextInput
                    label="Location"
                    name="location"
                    type="text"
                    required
                  />
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
                <TextInput
                  label="How to Apply"
                  name="howToApply"
                  type="text"
                  required
                />
              </div>
              <div>
                <TextInput
                  label="Tags, comma separated"
                  name="tags"
                  type="text"
                />
              </div>
              <div className="last">
                <div style={{ marginBottom: ".25em" }}>
                  <label htmlFor="jobDescription" className={styles.label}>
                    Job Description
                    <BulletPoint />
                  </label>
                </div>
                <Field
                  component={Editor}
                  name="jobDescription"
                  setConvertedContent={setConvertedContent}
                  setFieldValue={setFieldValue}
                  setTouched={setTouched}
                  touched={touched}
                />
                <ErrorMessage
                  name="jobDesc"
                  style={{
                    color: "var(--orange)",
                    fontSize: ".875em",
                    fontWeight: "700",
                    marginBottom: ".5em",
                    height: "1.25em",
                    lineHeight: 1,
                  }}
                />
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
                <TextInput
                  label="Company Name"
                  name="companyName"
                  type="text"
                  required
                />
              </div>
              <div>
                <TextInput
                  label="Company Statement"
                  name="companyStatement"
                  type="text"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    marginRight: "1.5em",
                    flexBasis: "0",
                  }}
                >
                  <TextInput
                    label="Company Website"
                    name="companyWebsite"
                    type="text"
                  />
                </div>
                <div style={{ flex: "1", marginRight: "1.5em" }}>
                  <TextInput
                    label="Company Email"
                    name="companyEmail"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div>
                <TextInput
                  label="Company Logo"
                  name="companyLogo"
                  type="text"
                />
              </div>
            </div>
            <div style={{ marginBottom: '4em' }}>
              <h4>Example Post</h4>
              <ExamplePosting values={values} />
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
                        <CheckMark color="var(--orange)" /> 2x Social Media
                        Posts
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
                        <CheckMark color="var(--orange)" /> 2x Social Media
                        Posts
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
                  <CardElement options={cardElementOptions} />
                </div>
                <div className="bottom-card">
                  <button
                    type="submit"
                    className="button payButton"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Post your job"}
                  </button>
                </div>
              </div>
            </div>
            <FocusError />
          </Form>
        )}
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
