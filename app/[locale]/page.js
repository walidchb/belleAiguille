"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Image from "next/image";
import * as Yup from "yup";
import { useTranslations, useLocale, getDirection } from "next-intl";

// import { Image } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useFormik } from "formik";
import Select from "react-select";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("Index");
  const router = useRouter();

  const handleChangeLanguage = () => {
    let loc = "";
    if (locale == "fr") {
      loc = "ar";
    } else {
      loc = "fr";
    }
    router.replace(`/${loc}`);
  };
  const formRef = useRef(null);
  const prenomRef = useRef(null);
  const nomRef = useRef(null);
  const wilayaRef = useRef(null);
  const telRef = useRef(null);
  const modelRef = useRef(null);
  const fabricRef = useRef(null);

  const scrollToDiv = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      console.log(currentPosition);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Define the threshold value where you want to hide the button
    const threshold = 1632; // Adjust this value as needed
    if (scrollPosition > threshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollPosition]);
  const wilayass = [
    {
      id: "1",
      code: "1",
      name: "Adrar",
      ar_name: "أدرار",
      longitude: "27.9766155",
      latitude: "-0.20396",
    },
    {
      id: "2",
      code: "2",
      name: "Chlef",
      ar_name: "الشلف",
      longitude: "36.1691245",
      latitude: "1.3539002",
    },
    {
      id: "3",
      code: "3",
      name: "Laghouat",
      ar_name: "الأغواط",
      longitude: "33.7873735",
      latitude: "2.8829115",
    },
    {
      id: "4",
      code: "4",
      name: "Oum El Bouaghi",
      ar_name: "أم البواقي",
      longitude: "35.8726014",
      latitude: "7.1180248",
    },
    {
      id: "5",
      code: "5",
      name: "Batna",
      ar_name: "باتنة",
      longitude: "35.32147",
      latitude: "3.1066502",
    },
    {
      id: "6",
      code: "6",
      name: "Béjaïa",
      ar_name: "بجاية",
      longitude: "36.7695969",
      latitude: "5.0085855",
    },
    {
      id: "7",
      code: "7",
      name: "Biskra",
      ar_name: "بسكرة",
      longitude: "34.8515041",
      latitude: "5.7246709",
    },
    {
      id: "8",
      code: "8",
      name: "Bechar",
      ar_name: "بشار",
      longitude: "31.5977602",
      latitude: "-1.8540446",
    },
    {
      id: "9",
      code: "9",
      name: "Blida",
      ar_name: "البليدة",
      longitude: "36.4803023",
      latitude: "2.8009379",
    },
    {
      id: "10",
      code: "10",
      name: "Bouira",
      ar_name: "البويرة",
      longitude: "36.2084234",
      latitude: "3.925049",
    },
    {
      id: "11",
      code: "11",
      name: "Tamanrasset",
      ar_name: "تمنراست",
      longitude: "22.2746227",
      latitude: "5.6754684",
    },
    {
      id: "12",
      code: "12",
      name: "Tbessa",
      ar_name: "تبسة",
      longitude: "35.4117259",
      latitude: "8.110545",
    },
    {
      id: "13",
      code: "13",
      name: "Tlemcen",
      ar_name: "تلمسان",
      longitude: "34.8959541",
      latitude: "-1.3150979",
    },
    {
      id: "14",
      code: "14",
      name: "Tiaret",
      ar_name: "تيارت",
      longitude: "35.3599899",
      latitude: "1.3916159",
    },
    {
      id: "15",
      code: "15",
      name: "Tizi Ouzou",
      ar_name: "تيزي وزو",
      longitude: "36.7002068",
      latitude: "4.075957",
    },
    {
      id: "16",
      code: "16",
      name: "Alger",
      ar_name: "الجزائر",
      longitude: "36.7538259",
      latitude: "3.057841",
    },
    {
      id: "17",
      code: "17",
      name: "Djelfa",
      ar_name: "الجلفة",
      longitude: "34.6672467",
      latitude: "3.2993118",
    },
    {
      id: "18",
      code: "18",
      name: "Jijel",
      ar_name: "جيجل",
      longitude: "36.7962714",
      latitude: "5.7504845",
    },
    {
      id: "19",
      code: "19",
      name: "Se9tif",
      ar_name: "سطيف",
      longitude: "36.1905173",
      latitude: "5.4202134",
    },
    {
      id: "20",
      code: "20",
      name: "Saefda",
      ar_name: "سعيدة",
      longitude: "34.841945",
      latitude: "0.1483583",
    },
    {
      id: "21",
      code: "21",
      name: "Skikda",
      ar_name: "سكيكدة",
      longitude: "36.8777912",
      latitude: "6.9357204",
    },
    {
      id: "22",
      code: "22",
      name: "Sidi Bel Abbes",
      ar_name: "سيدي بلعباس",
      longitude: "35.206334",
      latitude: "-0.6301368",
    },
    {
      id: "23",
      code: "23",
      name: "Annaba",
      ar_name: "عنابة",
      longitude: "36.9184345",
      latitude: "7.7452755",
    },
    {
      id: "24",
      code: "24",
      name: "Guelma",
      ar_name: "قالمة",
      longitude: "36.4569088",
      latitude: "7.4334312",
    },
    {
      id: "25",
      code: "25",
      name: "Constantine",
      ar_name: "قسنطينة",
      longitude: "36.319475",
      latitude: "6.7370571",
    },
    {
      id: "26",
      code: "26",
      name: "Medea",
      ar_name: "المدية",
      longitude: "36.2838408",
      latitude: "2.7728462",
    },
    {
      id: "27",
      code: "27",
      name: "Mostaganem",
      ar_name: "مستغانم",
      longitude: "35.9751841",
      latitude: "0.1149273",
    },
    {
      id: "28",
      code: "28",
      name: "M'Sila",
      ar_name: "المسيلة",
      longitude: "35.7211476",
      latitude: "4.5187283",
    },
    {
      id: "29",
      code: "29",
      name: "Mascara",
      ar_name: "معسكر",
      longitude: "35.382998",
      latitude: "0.1542592",
    },
    {
      id: "30",
      code: "30",
      name: "Ouargla",
      ar_name: "ورقلة",
      longitude: "32.1961967",
      latitude: "4.9634113",
    },
    {
      id: "31",
      code: "31",
      name: "Oran",
      ar_name: "وهران",
      longitude: "35.7066928",
      latitude: "-0.6405861",
    },
    {
      id: "32",
      code: "32",
      name: "El Bayadh",
      ar_name: "البيض",
      longitude: "32.5722756",
      latitude: "0.950011",
    },
    {
      id: "33",
      code: "33",
      name: "Illizi",
      ar_name: "إليزي",
      longitude: "26.5065999",
      latitude: "8.480587",
    },
    {
      id: "34",
      code: "34",
      name: "Bordj Bou Arreridj",
      ar_name: "برج بوعريريج",
      longitude: "36.0686488",
      latitude: "4.7691823",
    },
    {
      id: "35",
      code: "35",
      name: "Boumerdes",
      ar_name: "بومرداس",
      longitude: "36.7564181",
      latitude: "3.4917212",
    },
    {
      id: "36",
      code: "36",
      name: "El Tarf",
      ar_name: "الطارف",
      longitude: "36.7534258",
      latitude: "8.2984543",
    },
    {
      id: "37",
      code: "37",
      name: "Tindouf",
      ar_name: "تندوف",
      longitude: "27.2460501",
      latitude: "-6.3252899",
    },
    {
      id: "38",
      code: "38",
      name: "Tissemsilt",
      ar_name: "تيسمسيلت",
      longitude: "35.6021906",
      latitude: "1.802187",
    },
    {
      id: "39",
      code: "39",
      name: "El Oued",
      ar_name: "الوادي",
      longitude: "33.3714492",
      latitude: "6.8573436",
    },
    {
      id: "40",
      code: "40",
      name: "Khenchela",
      ar_name: "خنشلة",
      longitude: "35.4263293",
      latitude: "7.1414137",
    },
    {
      id: "41",
      code: "41",
      name: "Souk Ahras",
      ar_name: "سوق أهراس",
      longitude: "36.277849",
      latitude: "7.9592299",
    },
    {
      id: "42",
      code: "42",
      name: "Tipaza",
      ar_name: "تيبازة",
      longitude: "36.5980966",
      latitude: "2.4085379",
    },
    {
      id: "43",
      code: "43",
      name: "Mila",
      ar_name: "ميلة",
      longitude: "36.4514882",
      latitude: "6.2487316",
    },
    {
      id: "44",
      code: "44",
      name: "Ain Defla",
      ar_name: "عين الدفلى",
      longitude: "36.1283915",
      latitude: "2.1772514",
    },
    {
      id: "45",
      code: "45",
      name: "Naama",
      ar_name: "النعامة",
      longitude: "33.1995605",
      latitude: "-0.8021968",
    },
    {
      id: "46",
      code: "46",
      name: "Ain Temouchent",
      ar_name: "عين تموشنت",
      longitude: "35.404044",
      latitude: "-1.0580975",
    },
    {
      id: "47",
      code: "47",
      name: "Ghardaefa",
      ar_name: "غرداية",
      longitude: "32.5891743",
      latitude: "3.7455655",
    },
    {
      id: "48",
      code: "48",
      name: "Relizane",
      ar_name: "غليزان",
      longitude: "35.8050195",
      latitude: "0.867381",
    },
    {
      id: "49",
      code: "49",
      name: "El M'ghair",
      ar_name: "المغير",
      longitude: "33.947222",
      latitude: "5.922222",
    },
    {
      id: "50",
      code: "50",
      name: "El Menia",
      ar_name: "المنيعة",
      longitude: "30.579167",
      latitude: "2.879167",
    },
    {
      id: "51",
      code: "51",
      name: "Ouled Djellal",
      ar_name: "أولاد جلال",
      longitude: "34.433333",
      latitude: "5.066667",
    },
    {
      id: "52",
      code: "52",
      name: "Bordj Baji Mokhtar",
      ar_name: "برج باجي مختار",
      longitude: "21.327778",
      latitude: "0.955556",
    },
    {
      id: "53",
      code: "53",
      name: "Béni Abbès",
      ar_name: "بني عباس",
      longitude: "30.133333",
      latitude: "-2.166667",
    },
    {
      id: "54",
      code: "54",
      name: "Timimoun",
      ar_name: "تيميمون",
      longitude: "29.258333",
      latitude: "0.230556",
    },
    {
      id: "55",
      code: "55",
      name: "Touggourt",
      ar_name: "تقرت",
      longitude: "33.108333",
      latitude: "6.063889",
    },
    {
      id: "56",
      code: "56",
      name: "Djanet",
      ar_name: "جانت",
      longitude: "24.554167",
      latitude: "9.484722",
    },
    {
      id: "57",
      code: "57",
      name: "In Salah",
      ar_name: "عين صالح",
      longitude: "27.197222",
      latitude: "2.483333",
    },
    {
      id: "58",
      code: "58",
      name: "In Guezzam",
      ar_name: "عين قزام",
      longitude: "19.572222",
      latitude: "5.769444",
    },
  ];

  var isNumber = function isNumber(value) {
    return typeof value === "number" && isFinite(value);
  };
  const [switcherOpen, setSwitcherOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required(t("nomErr")),
    prenom: Yup.string().required(t("prenomErr")),
    wilaya: Yup.string().required(t("wilayaErr")),
    tel: Yup.number(t("telErrIncorrect")).required(t("telErrReq")),
    model: Yup.number().required(t("modelErr")),
    fabricType: Yup.number().required(t("fabricTypeErr")),
  });

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      wilaya: "",
      tel: "",
      model: "",
      fabricType: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [model, setModel] = useState(0);
  const [fabricType, setFabricType] = useState(0);

  return (
    <div dir={locale == "fr" ? "ltr" : "rtl"} className="bg-white  ">
      {isVisible ? (
        <button
          onClick={scrollToDiv}
          type="button"
          class=" mydivFixed text-white bg-gradient-to-br from-yellow-500 to-orange-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          {t("Commandez")} &#x2193;
        </button>
      ) : null}
      {/* <button> &#x2193; اطلب الان </button> */}
      <nav
        className=" myNav flex bg-white h-20 max-h-20 overflow-visible  justify-between items-center px-6 lg:px-8"
        aria-label="Global">
        <div className=" cursor-pointer ">
          <Image
            src="/walid.png"
            alt="Vercel Logo"
            className="max-h-20 max-w-20 "
            width={80}
            height={80}
            // fill
            style={{ transform: "scale(1.2)" }}
            priority
          />
        </div>
        <h1
          className={`text-orange-400  ${
            locale == "fr" ? "text-xl" : "text-2xl"
          } sm:text-4xl`}>
          {t("Bienvenue")}
        </h1>
        <button
          href="#"
          className=" justify-center flex items-center sm:mr-10 text-sm font-medium underline text-gray-400 hover:no-underline"
          onClick={() => {
            handleChangeLanguage(locale);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-1 mb-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>

          {locale == "fr" ? "AR" : "FR"}
        </button>
      </nav>

      <div className="p-4">
        <h1
          className={`ourcomfortersone ${
            locale == "fr" ? "text-2xl sm:text-4xl" : "text-4xl"
          }`}>
          {t("Mal")}{" "}
        </h1>

        <h1
          className={`ourcomforters pt-10 ${
            locale == "fr" ? "text-2xl sm:text-4xl" : "text-3xl"
          }`}>
          {t("Couette")}
        </h1>
      </div>

      <div className="mycontainer ">
        <button
          type="button"
          class="mydiv text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">
          {t("Remise")} ⏰
        </button>
        <div dir="ltr" className="  flex justify-center items-center">
          <Carousel
            stopOnHover
            interval={4000}
            autoPlay
            infiniteLoop
            className="w-full sm:w-2/3 z-0"
            showArrows={true}>
            <div>
              <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" />
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D" />
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" />
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D" />
            </div>
          </Carousel>
        </div>
      </div>

      <h1 className="text-black text-center my-4 text-2xl">{t("Avantages")}</h1>
      {/* <div
        className="justify-center items-center flex"
        style={{ position: "relative" }}>
        <div
          style={{ position: "absolute", zIndex: "10" }}
          className="w-5/6 py-4 flex flex-col justify-center items-center text-black bg-yellow-400 ">
          <h1 className="text-black py-2 text-2xl">{t("Lavable")} </h1>
        </div>

        <Image
          src="/e4a07dea4cd51660ee9ed6dee1855e81.jpg"
          alt="Vercel Logo"
          // className="w-5/6"
          width={500}
          // height={1/2}
          style={{ zIndex: "0" }}
          // fill
        />
      </div> */}

      <div className="w-[100vw] justify-center items-center flex flex-col ">
        <div className=" my-10  flex w-[90vw]  justify-around items-center">
          <p className="text-black text-center text-center text-xl md:text-4xl ">
            Lavable a la machine
          </p>
          <Image
            src="/washingMachine.jpeg"
            alt="Vercel Logo"
            className=" max-w-[50vw]"
            width={500}
            height={500}
            style={{ zIndex: "0" }}
            // fill
          />{" "}
        </div>
        <div className=" my-10 flex w-[90vw] justify-around items-center">
          <Image
            src="/confortSleeping.jpeg"
            alt="Vercel Logo"
            className="max-w-[50vw]"
            width={500}
            height={500}
            style={{ zIndex: "0" }}
            // fill
          />{" "}
          <p className="text-black text-center text-xl md:text-4xl ">
            Lavable a la machine
          </p>
        </div>
        <div className=" my-10 flex w-[90vw] justify-around items-center">
          <p className="text-black text-center text-xl md:text-4xl  ">
            Lavable a la machine
          </p>
          <Image
            src="/FabricQuality.jpeg"
            alt="Vercel Logo"
            className="max-w-[50vw]"
            width={500}
            height={500}
            style={{ zIndex: "0" }}
            // fill
          />{" "}
        </div>
        <div className="my-10 flex w-[90vw] justify-around items-center">
          <Image
            src="/sewingQuality.jpeg"
            alt="Vercel Logo"
            className="max-w-[50vw]"
            width={500}
            height={500}
            style={{ zIndex: "0" }}
            // fill
          />{" "}
          <p className="text-black text-center text-xl md:text-4xl ">
            Lavable a la machine
          </p>
        </div>
      </div>
      <div className="text-black p-6">
        <h1 className="text-black text-center my-4 text-2xl">{t("Dim")} </h1>
        <h3 className="text-xl">{t("dimOne")} </h3>
        <h3 className="text-xl">{t("dimTwo")} </h3>
        <h3 className="text-xl">{t("dimThree")} </h3>
      </div>
      <div
        ref={formRef}
        className=" w-full  text-black rounded-2xl px-6 sm:px-20 ">
        <form
          className="flex w-full flex-col items-center justify-center "
          onSubmit={formik.handleSubmit}>
          <h3 className="my-4 text-center text-xl">{t("From")}</h3>
          <div ref={prenomRef} className="w-full">
            <p className="text-xl"> {t("prenom")}</p>
            <input
              className="input mb-2 h-10 w-full rounded-2xl px-4"
              type="text"
              name="prenom"
              onChange={formik.handleChange}
              value={formik.values.prenom}
            />
          </div>
          <p className="text-red-500 w-full">
            {" "}
            {formik.errors.prenom &&
              formik.touched.prenom &&
              formik.errors.prenom}
          </p>
          <div ref={nomRef} className="w-full">
            <p className="text-xl"> {t("nom")}</p>
            <input
              className="input mb-2 h-10 w-full rounded-2xl px-4"
              type="text"
              name="nom"
              onChange={formik.handleChange}
              value={formik.values.nom}
            />
          </div>
          <p className="w-full text-red-500">
            {" "}
            {formik.errors.nom && formik.touched.nom && formik.errors.nom}
          </p>
          <div ref={wilayaRef} className="w-full">
            <p className="text-xl"> {t("wilaya")}</p>
            <select
              name="wilaya"
              value={formik.values.wilaya}
              onChange={(event) => {
                console.log(JSON.parse(event.target.value));
                formik.setFieldValue("wilaya", event.target.value);
              }}
              className="input mb-2 h-10 w-full rounded-2xl px-4 bg-white">
              <option value="">{t("chooseWilaya")}</option>
              {wilayass.map((option, index) => (
                <option key={index} value={JSON.stringify(option)}>
                  {option.code} - {option.ar_name}
                </option>
              ))}
            </select>
          </div>
          <p className="text-red-500 w-full">
            {" "}
            {formik.errors.wilaya &&
              formik.touched.wilaya &&
              formik.errors.wilaya}
          </p>
          <div ref={telRef} className="w-full">
            <p className="text-xl"> {t("tel")}</p>
            <input
              className="input mb-2 h-10 w-full rounded-2xl px-4"
              type="text"
              name="tel"
              onChange={formik.handleChange}
              value={formik.values.tel}
            />
          </div>
          <p className="w-full text-red-500">
            {" "}
            {formik.errors.tel && formik.touched.tel && formik.errors.tel}
          </p>
          <div name="model" ref={modelRef} className="text-xl">
            <h3 className="my-4 text-center">{t("chooseModel")} </h3>
            <h3 className="my-4 text-center">
              {t("swipeModel")}
              &larr;
            </h3>
            <h3 className="px-6 py-2">{t("modelOne")} </h3>
            <div dir="ltr" className="  flex justify-center items-center">
              <Carousel
                showThumbs={false}
                className="w-full sm:w-2/3 z-0"
                showArrows={true}>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" />
                </div>
                <div>
                  <img src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </Carousel>
            </div>

            <h3 className="px-6 py-2">{t("modelTwo")} </h3>

            <div dir="ltr" className="  flex justify-center items-center">
              <Carousel
                showThumbs={false}
                className="w-full sm:w-2/3 z-0"
                showArrows={true}>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" />
                </div>
                <div>
                  <img src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </Carousel>
            </div>
            <h3 className="px-6 py-2">{t("modelThree")} </h3>

            <div dir="ltr" className="  flex justify-center items-center">
              <Carousel
                showThumbs={false}
                className="w-full sm:w-2/3 z-0"
                showArrows={true}>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" />
                </div>
                <div>
                  <img src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </Carousel>
            </div>
            <div className="flex w-full  justify-around items-center my-4">
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setModel(1);
                  formik.setFieldValue("model", 1);
                }}
                class={
                  model == 1
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" +
                      "  "
                }>
                1
              </button>
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setModel(2);
                  formik.setFieldValue("model", 2);
                }}
                class={
                  model == 2
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                }>
                2
              </button>
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setModel(3);
                  formik.setFieldValue("model", 3);
                }}
                class={
                  model == 3
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                }>
                3
              </button>
            </div>
          </div>
          <p className="text-red-500">
            {formik.errors.model && formik.touched.model && formik.errors.model}
          </p>
          <div name="fabricType" ref={fabricRef} className="text-xl">
            <h3 className="my-4 text-center">{t("chooseFabric")}</h3>
            <h3 className="my-4 text-center">{t("swipeFabric")}&larr;</h3>

            <div dir="ltr " className="  flex justify-center items-center">
              <Carousel
                showThumbs={false}
                className="w-full sm:w-2/3 z-0"
                showArrows={true}
                showStatus={false}>
                <div style={{ position: "relative" }}>
                  <h1
                    class="w-10 h-10 border-4 text-xl border-black rounded-full flex items-center justify-center text-red-500 font-bold"
                    style={{ position: "absolute", top: 15, left: 15 }}>
                    1
                  </h1>
                  <img src="/fabric1.jpg" />
                </div>
                <div style={{ position: "relative" }}>
                  <h1
                    class="w-10 h-10 border-4 text-xl border-black rounded-full flex items-center justify-center text-red-500 font-bold"
                    style={{ position: "absolute", top: 15, left: 15 }}>
                    2
                  </h1>
                  <img src="/fabric2.jpg" />
                </div>
                <div style={{ position: "relative" }}>
                  <h1
                    class="w-10 h-10 border-4 text-xl border-black rounded-full flex items-center justify-center text-red-500 font-bold"
                    style={{ position: "absolute", top: 15, left: 15 }}>
                    3
                  </h1>
                  <img src="/fabric3.jpg" />
                </div>
                <div style={{ position: "relative" }}>
                  <h1
                    class="w-10 h-10 border-4 text-xl border-black rounded-full flex items-center justify-center text-red-500 font-bold"
                    style={{ position: "absolute", top: 15, left: 15 }}>
                    4
                  </h1>
                  <img src="/fabric4.jpg" />
                </div>
                <div style={{ position: "relative" }}>
                  <h1
                    class="w-10 h-10 border-4 text-xl border-black rounded-full flex items-center justify-center text-red-500 font-bold"
                    style={{ position: "absolute", top: 15, left: 15 }}>
                    5
                  </h1>
                  <img src="/fabric5.jpg" />
                </div>
                <div style={{ position: "relative" }}>
                  <h1
                    class="w-10 h-10 border-4 text-xl border-black rounded-full flex items-center justify-center text-red-500 font-bold"
                    style={{ position: "absolute", top: 15, left: 15 }}>
                    6
                  </h1>
                  <img src="/fabric6.jpg" />
                </div>
              </Carousel>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center my-4">
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setFabricType(1);
                  formik.setFieldValue("fabricType", 1);
                }}
                class={
                  fabricType == 1
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" +
                      "  "
                }>
                1
              </button>
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setFabricType(2);
                  formik.setFieldValue("fabricType", 2);
                }}
                class={
                  fabricType == 2
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" +
                      "  "
                }>
                2
              </button>
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setFabricType(3);
                  formik.setFieldValue("fabricType", 3);
                }}
                class={
                  fabricType == 3
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" +
                      "  "
                }>
                3
              </button>
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setFabricType(4);
                  formik.setFieldValue("fabricType", 4);
                }}
                class={
                  fabricType == 4
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" +
                      "  "
                }>
                4
              </button>
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setFabricType(5);
                  formik.setFieldValue("fabricType", 5);
                }}
                class={
                  fabricType == 5
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" +
                      "  "
                }>
                5
              </button>
              <button
                style={{ width: "25vw", height: "25vw" }}
                type="button"
                onClick={() => {
                  setFabricType(6);
                  formik.setFieldValue("fabricType", 6);
                }}
                class={
                  fabricType == 6
                    ? "bg-green-500 text-white  from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
                    : "bg-gradient-to-br text-white bg-green-500 from-yellow-500 to-orange-700     font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2" +
                      "  "
                }>
                5
              </button>
            </div>
          </div>
          <p className="text-red-500">
            {formik.errors.fabricType &&
              formik.touched.fabricType &&
              formik.errors.fabricType}
          </p>
          <p className="w-full text-red-500 text-center">
            {Object.keys(formik.errors).length != 0 && t("errorsGen")}
          </p>
          <button
            className=" w-full my-4 rounded border-b-4 border-violet-700 bg-violet-500 px-4 py-2 font-bold text-white hover:border-violet-500 hover:bg-violet-400"
            type="submit">
            {t("CmdBtn")}
          </button>
        </form>
      </div>
    </div>
  );
}
