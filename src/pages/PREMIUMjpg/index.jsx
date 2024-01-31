import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
  TextArea,
} from "components";

const selectOptionsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PREMIUMjpgPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="sm:h-[733px] md:h-[735px] h-[660px] md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="h-[661px] sm:h-[733px] md:h-[735px] mx-auto w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="h-[660px] sm:h-[733px] md:h-[735px] relative w-full">
                    <Img
                      className="h-[660px] m-auto object-cover w-full"
                      src="images/img_rectangle41.png"
                      alt="rectangleFortyOne"
                    />
                    <div className="absolute bg-black-900_99 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[108px] w-full">
                      <div className="flex flex-col md:gap-10 gap-[380px] justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_cc blur-[200.00px] flex md:flex-1 flex-col items-end justify-start p-[19px] w-[22%] md:w-full">
                            <Img
                              className="h-[60px] md:h-auto mb-5 object-cover w-[71%]"
                              src="images/img_logo.png"
                              alt="logo"
                            />
                          </div>
                          <div className="md:h-[376px] h-[95px] md:mt-0 mt-[3px] relative w-[73%] md:w-full">
                            <div className="absolute backdrop-opacity-[0.5] bg-white-A700_cc blur-[200.00px] h-[95px] inset-y-[0] my-auto right-[0] w-[28%]"></div>
                            <header className="absolute flex md:flex-col flex-row md:gap-5 inset-y-[0] items-center justify-center left-[0] my-auto w-full">
                              <Text
                                className="text-base text-right text-white-A700 w-auto"
                                size="txtPoppinsMedium16"
                              >
                                Home
                              </Text>
                              <div className="flex flex-col items-center justify-center px-4 py-1.5 w-auto">
                                <Text
                                  className="text-base text-right text-white-A700 w-auto"
                                  size="txtPoppinsRegular16"
                                >
                                  About Us
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center px-4 py-1.5 w-auto">
                                <Text
                                  className="text-base text-center text-white-A700 w-auto"
                                  size="txtPoppinsRegular16"
                                >
                                  Testimonial
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[5px] items-center justify-center px-4 py-1.5 w-auto">
                                <Text
                                  className="text-base text-center text-white-A700 w-auto"
                                  size="txtPoppinsRegular16"
                                >
                                  {" "}
                                  Year of Experience
                                </Text>
                                <Img
                                  className="h-1.5 w-3"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown"
                                />
                              </div>
                              <div className="flex flex-row gap-[5px] items-center justify-center px-4 py-1.5 w-auto">
                                <Text
                                  className="text-base text-center text-white-A700 w-auto"
                                  size="txtPoppinsRegular16"
                                >
                                  Competitive
                                </Text>
                                <Img
                                  className="h-1.5 w-3"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown_One"
                                />
                              </div>
                              <div className="flex flex-row gap-2.5 items-center justify-center pl-4 sm:pr-5 pr-[25px] py-1.5 w-auto">
                                <Text
                                  className="text-base text-center text-white-A700 w-auto"
                                  size="txtPoppinsRegular16"
                                >
                                  WA Seniors{" "}
                                </Text>
                                <Img
                                  className="h-1.5 w-3"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown_Two"
                                />
                              </div>
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[140px] rounded-[20px] text-base text-center"
                                color="black_900"
                              >
                                Contact Us
                              </Button>
                            </header>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-5 items-center justify-start ml-1.5 md:ml-[0] w-[30%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[201px] rounded-[26px] text-center text-lg"
                            size="md"
                          >
                            Free Appraisal
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] outline-[2px] rounded-[26px] text-center text-lg w-[201px]"
                            size="md"
                            variant="outline"
                          >
                            Get in Touch
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[329px] items-end justify-end p-[7px] right-[0] w-[39%]"
                  style={{
                    backgroundImage: "url('images/img_group105784.png')",
                  }}
                >
                  <div className="flex flex-col items-center justify-start mr-[21px] mt-[159px] w-[59%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                        size="txtPoppinsSemiBold50"
                      >
                        <span className="text-black-900 font-prociono font-normal">
                          Honest{" "}
                        </span>
                        <span className="text-blue-500 font-prociono font-normal">
                          People
                        </span>
                      </Text>
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                        size="txtProcionoRegular50"
                      >
                        Good Advice
                      </Text>
                    </div>
                    <Text
                      className="mt-[3px] text-blue-500 text-center text-lg"
                      size="txtPoppinsSemiBold18"
                    >
                      <span className="text-blue-500 font-poppins font-semibold">
                        Welcome{" "}
                      </span>
                      <span className="text-black-900 font-poppins font-semibold">
                        To Premium Estate
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-59px] p-[39px] sm:px-5 rounded-tl-[20px] w-[17%] z-[1]">
                <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                    <div className="bg-blue-500_33 flex flex-col items-center justify-start p-2.5 rounded-[35px] w-[70px] md:w-full">
                      <Img
                        className="h-[50px] md:h-auto object-cover rounded-tl-[20px] w-[50px]"
                        src="images/img_expertise11.png"
                        alt="expertiseEleven"
                      />
                    </div>
                    <Text
                      className="text-black-900 text-center text-lg"
                      size="txtPoppinsMedium18"
                    >
                      <span className="text-black-900 font-poppins font-medium">
                        <>
                          Years Of
                          <br />
                        </>
                      </span>
                      <span className="text-black-900 font-poppins font-medium">
                        {" "}
                        Experience
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start ml-[473px] mt-[-59px] p-[39px] sm:px-5 rounded-tr-[20px] w-[17%] z-[1]">
                <div className="flex flex-col gap-2.5 items-center justify-start w-[73%] md:w-full">
                  <div className="bg-blue-500_33 flex flex-col items-center justify-start p-2.5 rounded-[35px] w-[70px] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto object-cover w-[50px]"
                      src="images/img_competition1.png"
                      alt="competitionOne"
                    />
                  </div>
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtPoppinsMedium18"
                  >
                    <span className="text-black-900 font-poppins font-medium">
                      Competitive
                    </span>
                    <span className="text-black-900 font-poppins font-medium">
                      <>
                        {" "}
                        <br />
                        Service Fees
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-50 bottom-[0] flex flex-col items-center justify-start left-[16%] p-[13px] rounded-bl-[10px] rounded-br-[10px] w-[17%]">
              <div className="flex flex-col gap-2.5 items-center justify-start my-[26px] w-full">
                <div className="bg-black-900_33 flex flex-col items-center justify-start p-2.5 rounded-[35px] w-[70px] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto object-cover w-[50px]"
                    src="images/img_professional1.png"
                    alt="professionalOne"
                  />
                </div>
                <Text
                  className="text-black-900 text-center text-lg"
                  size="txtPoppinsMedium18"
                >
                  <span className="text-black-900 font-poppins font-medium">
                    Professional &
                  </span>
                  <span className="text-black-900 font-poppins font-medium">
                    <>
                      {" "}
                      <br />
                      Seamless Experience
                    </>
                  </span>
                </Text>
              </div>
            </div>
            <Img
              className="absolute bottom-[11%] h-52 object-cover right-[0]"
              src="images/img_rectangle63.png"
              alt="rectangleSixtyThree"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[42px] md:px-5 w-[94%] md:w-full">
            <Img
              className="h-[168px] sm:h-auto md:mt-0 mt-[41px] object-cover rotate-[128deg] w-[7%] md:w-full"
              src="images/img_ellipse19.png"
              alt="ellipseNineteen"
            />
            <div className="md:h-[270px] h-[517px] md:ml-[0] ml-[15px] md:mt-0 mt-[38px] relative w-[41%] md:w-full">
              <div className="absolute md:h-[123px] h-[517px] inset-y-[0] left-[0] my-auto w-[65%]">
                <Text
                  className="absolute inset-x-[0] mx-auto md:text-4xl sm:text-[34px] text-[38px] text-black-900 top-[6%]"
                  size="txtPoppinsSemiBold38"
                >
                  <>
                    The Premium real <br />
                    Estate difference
                  </>
                </Text>
                <div className="absolute flex flex-col md:gap-10 gap-[434px] h-full inset-y-[0] items-start justify-start left-[0] my-auto w-[58%]">
                  <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-blue-500 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          ABOUT US
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center rounded-[26px] shadow-bs w-[201px]"
                    rightIcon={
                      <Img
                        className="h-[18px] ml-2.5 my-1"
                        src="images/img_teenyiconsarrowupsolid.svg"
                        alt="teenyicons:arrow-up-solid"
                      />
                    }
                    size="md"
                    variant="outline"
                  >
                    <div className="leading-[normal] text-center text-lg">
                      See more{" "}
                    </div>
                  </Button>
                </div>
              </div>
              <Text
                className="absolute bottom-[17%] inset-x-[0] mx-auto text-black-900_7f text-lg"
                size="txtPoppinsRegular18"
              >
                <span className="text-black-900_7f font-poppins text-left font-normal">
                  <>
                    This multi award winning business, located in the Northern
                    Suburbs of Perth, services all areas.
                    <br />
                  </>
                </span>
                <span className="text-blue-500 font-poppins text-left font-normal">
                  Premium Estates
                </span>
                <span className="text-black-900_7f font-poppins text-left font-normal">
                  <>
                    {" "}
                    is committed to providing its customers with innovative
                    solutions and continuous improvement. We achieve this
                    through significant investments in software development and
                    business improvement processes that add value to our
                    clients’ assets.
                    <br />
                    Our knowledgeable Property Managers and Sales Professionals
                    take the time to understand our customers’ needs so that we
                    can provide real estate solutions that solve{" "}
                  </>
                </span>
              </Text>
            </div>
            <div className="sm:h-[1003px] md:h-[518px] h-[556px] md:ml-[0] ml-[47px] relative w-[49%] md:w-full">
              <div className="absolute flex flex-col md:gap-10 gap-[332px] h-full inset-y-[0] justify-start left-[0] my-auto w-[72%]">
                <div className="bg-gradient  h-[140px] mr-[318px] rotate-[-37deg] rounded-[50%] w-[140px]"></div>
                <div className="bg-gradient1  h-[84px] md:ml-[0] ml-[374px] rotate-[-93deg] rounded-[50%] w-[84px]"></div>
              </div>
              <Img
                className="absolute h-[231px] inset-y-[0] my-auto object-cover right-[28%]"
                src="images/img_rectangle63.png"
                alt="rectangleSixtyTwo"
              />
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[10px] shadow-bs1 w-[95%]">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-between w-full">
                    <Img
                      className="h-[197px] md:h-auto sm:mt-0 mt-[18px] object-cover rounded-[10px]"
                      src="images/img_rectangle48.png"
                      alt="rectangleFortyEight"
                    />
                    <Img
                      className="h-[215px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle46.png"
                      alt="rectangleFortySix"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                    <Img
                      className="h-[283px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle47.png"
                      alt="rectangleFortySeven"
                    />
                    <Img
                      className="h-[248px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle49.png"
                      alt="rectangleFortyNine"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-10 items-start justify-end md:ml-[0] ml-[100px] mt-[79px] md:px-5 w-[94%] md:w-full">
            <div className="md:h-[1679px] sm:h-[540px] h-[566px] relative w-[93%] md:w-full">
              <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[5%] w-[68%]">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[482px] md:h-auto mb-9 object-cover"
                    src="images/img_rectangle63.png"
                    alt="rectangleSixtyFour"
                  />
                  <Img
                    className="h-[227px] md:h-auto mt-[291px] object-cover"
                    src="images/img_rectangle63.png"
                    alt="rectangleSixtyThree_One"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col gap-5 items-start justify-start rounded-[10px] shadow-bs1 w-auto">
                    <div className="h-[120px] relative w-full">
                      <Img
                        className="h-[120px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle81.png"
                        alt="rectangleEightyOne"
                      />
                      <div className="absolute bg-blue-500_7f flex flex-col h-full inset-[0] items-center justify-center m-auto p-[35px] sm:px-5 rounded-[10px] w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center w-[50px]"
                          shape="circle"
                          color="blue_500_b2"
                          size="xs"
                        >
                          <Img
                            className="h-10"
                            src="images/img_icroundplus.svg"
                            alt="icroundplus"
                          />
                        </Button>
                      </div>
                    </div>
                    <Img
                      className="h-[120px] md:h-auto object-cover rounded-[10px] w-[200px] sm:w-full"
                      src="images/img_rectangle56.png"
                      alt="rectangleFiftySix"
                    />
                    <Img
                      className="h-[120px] md:h-auto object-cover rounded-[10px] w-[200px] sm:w-full"
                      src="images/img_rectangle57.png"
                      alt="rectangleFiftySeven"
                    />
                    <Img
                      className="h-[120px] md:h-auto object-cover rounded-[10px] w-[200px] sm:w-full"
                      src="images/img_rectangle58.png"
                      alt="rectangleFiftyEight"
                    />
                  </div>
                  <Img
                    className="h-[540px] md:h-auto object-cover rounded-[10px]"
                    src="images/img_rectangle55.png"
                    alt="rectangleFiftyFive"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[88%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-blue-500 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          PRODUCTS
                        </Text>
                      </div>
                      <Text
                        className="md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                        size="txtPoppinsSemiBold38"
                      >
                        <>
                          Find the Best
                          <br />
                          Product for you
                        </>
                      </Text>
                    </div>
                    <Text
                      className="mt-5 text-black-900_7f text-lg w-full"
                      size="txtPoppinsRegular18"
                    >
                      We are a vastly experienced, professional Real Estate
                      Company. You will find our fee for service is very
                      competitive with the market – you won’t pay any more to
                      experience our excellent levels of service. To back up our
                      claims, we offer “no lock in” contracts”. Contact Barry
                      for sales – and Natalie or Kim forProperty{" "}
                    </Text>
                    <Button
                      className="border border-black-900 border-solid cursor-pointer flex items-center justify-center mt-[50px] rounded-[26px] w-[201px]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-2.5 my-1"
                          src="images/img_teenyiconsarrowupsolid_white_a700.svg"
                          alt="teenyicons:arrow-up-solid"
                        />
                      }
                      color="blue_gray_900"
                      size="md"
                    >
                      <div className="leading-[normal] text-center text-lg">
                        See more{" "}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[168px] sm:h-auto md:mt-0 mt-[26px] object-cover rotate-[128deg] w-[5%] md:w-full"
              src="images/img_ellipse19_168x60.png"
              alt="ellipseNineteen_One"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1239px] mt-[54px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[29%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue-500 text-xl"
                  size="txtPoppinsMedium20"
                >
                  SERVICES
                </Text>
              </div>
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                size="txtPoppinsSemiBold38"
              >
                Premium Services
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row items-center justify-between md:mt-0 mt-[52px] rounded-[22px] shadow-bs w-[26%] md:w-full">
              <Button className="cursor-pointer font-medium leading-[normal] rounded-[22px] text-base text-center w-24">
                All
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] rounded-[22px] text-base text-center w-24"
                variant="outline"
              >
                Lorem
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] rounded-[22px] text-base text-center w-24"
                variant="outline"
              >
                Lorem
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-end md:ml-[0] ml-[100px] mt-[50px] overflow-auto md:px-5 w-[94%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="h-[350px] relative w-full">
                  <Img
                    className="h-[350px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_rectangle58_350x340.png"
                    alt="rectangleFiftyEight_One"
                  />
                  <div className="absolute bg-teal-500 flex flex-col h-[60px] items-center justify-start left-[6%] p-1.5 top-[0] w-[60px]">
                    <Text
                      className="text-base text-center text-white-A700"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      <>
                        2 <br />
                        Week
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[19px] w-full">
                  <Text
                    className="text-black-900 text-center text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    12.45 $
                  </Text>
                  <Button
                    className="cursor-pointer flex h-[30px] items-center justify-center rounded-[15px] w-[114px]"
                    rightIcon={
                      <Img
                        className="h-3.5 ml-1.5 my-[3px]"
                        src="images/img_teenyiconsarrowupsolid_white_a700.svg"
                        alt="teenyicons:arrow-up-solid"
                      />
                    }
                    color="teal_500"
                    size="xs"
                  >
                    <div className="leading-[normal] text-center text-sm">
                      See more{" "}
                    </div>
                  </Button>
                </div>
                <Text
                  className="mt-3 text-lg text-teal-500"
                  size="txtPoppinsMedium18Teal500"
                >
                  Lorem Ipsum
                </Text>
                <Text
                  className="mt-[7px] text-base text-black-900_7f w-4/5 sm:w-full"
                  size="txtPoppinsRegular16Black9007f"
                >
                  We specialise in residential sales and rentals and offer our{" "}
                </Text>
                <Img
                  className="h-5 mt-2.5"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
            </div>
            <div className="md:h-[523px] h-[550px] relative shadow-bs2 w-[26%] md:w-full">
              <div className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[19px] rounded-bl-[10px] rounded-br-[10px] w-full">
                <div className="flex flex-col items-start justify-start mb-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      12.45 $
                    </Text>
                    <div className="bg-light_green-600 flex flex-row gap-1.5 h-[30px] md:h-auto items-center justify-center px-2.5 py-1.5 rounded-[15px] w-[114px]">
                      <Text
                        className="text-center text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14"
                      >
                        See more{" "}
                      </Text>
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_teenyiconsarrowupsolid_white_a700.svg"
                        alt="teenyiconsarrow"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-3 text-black-900 text-lg"
                    size="txtPoppinsMedium18"
                  >
                    Lorem Ipsum
                  </Text>
                  <Text
                    className="mt-[7px] text-base text-white-A700 w-[89%] sm:w-full"
                    size="txtPoppinsRegular16"
                  >
                    We specialise in residential sales and rentals and offer our{" "}
                  </Text>
                  <Img
                    className="h-5 mt-2.5"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
              </div>
              <div className="h-[350px] mx-auto w-full">
                <Img
                  className="h-[350px] m-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_rectangle58_1.png"
                  alt="rectangleFiftyEight_Two"
                />
                <div className="absolute bg-light_green-600 flex flex-col h-[60px] items-center justify-start left-[6%] p-1.5 top-[0] w-[60px]">
                  <Text
                    className="text-base text-center text-white-A700"
                    size="txtPoppinsMedium16WhiteA700"
                  >
                    <>
                      6 <br />
                      Day
                    </>
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                  <div className="h-[350px] relative w-full">
                    <Img
                      className="h-[350px] m-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_rectangle58_2.png"
                      alt="rectangleFiftyEight_Three"
                    />
                    <div className="absolute bg-light_green-600 flex flex-col h-[60px] items-center justify-start left-[6%] p-1.5 top-[0] w-[60px]">
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtPoppinsMedium16WhiteA700"
                      >
                        <>
                          6 <br />
                          Day
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        12.45 $
                      </Text>
                      <Button
                        className="cursor-pointer flex h-[30px] items-center justify-center rounded-[15px] w-[114px]"
                        rightIcon={
                          <Img
                            className="h-3.5 ml-1.5 my-[3px]"
                            src="images/img_teenyiconsarrowupsolid_white_a700.svg"
                            alt="teenyicons:arrow-up-solid"
                          />
                        }
                        color="light_green_600"
                        size="xs"
                      >
                        <div className="leading-[normal] text-center text-sm">
                          See more{" "}
                        </div>
                      </Button>
                    </div>
                    <Text
                      className="mt-3 text-black-900 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="mt-[7px] text-base text-white-A700 w-[89%] sm:w-full"
                      size="txtPoppinsRegular16"
                    >
                      We specialise in residential sales and rentals and offer
                      our{" "}
                    </Text>
                    <Img
                      className="h-5 mt-2.5"
                      src="images/img_television.svg"
                      alt="television_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 w-[53%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[350px] relative w-full">
                    <Img
                      className="h-[350px] m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle58_3.png"
                      alt="rectangleFiftyEight"
                    />
                    <div className="absolute bg-purple-300 flex flex-col h-[60px] items-center justify-start left-[6%] p-1 top-[0] w-[60px]">
                      <Text
                        className="my-0.5 text-base text-center text-white-A700"
                        size="txtPoppinsMedium16WhiteA700"
                      >
                        <>
                          2 <br />
                          Month
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[19px] w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      12.45 $
                    </Text>
                    <Button
                      className="cursor-pointer flex h-[30px] items-center justify-center rounded-[15px] w-[114px]"
                      rightIcon={
                        <Img
                          className="h-3.5 ml-1.5 my-[3px]"
                          src="images/img_teenyiconsarrowupsolid_white_a700.svg"
                          alt="teenyicons:arrow-up-solid"
                        />
                      }
                      color="purple_300"
                      size="xs"
                    >
                      <div className="leading-[normal] text-center text-sm">
                        See more{" "}
                      </div>
                    </Button>
                  </div>
                  <Text
                    className="mt-3 text-lg text-purple-300"
                    size="txtPoppinsMedium18Purple300"
                  >
                    Lorem Ipsum
                  </Text>
                  <Text
                    className="mt-[7px] text-base text-black-900_7f w-4/5 sm:w-full"
                    size="txtPoppinsRegular16Black9007f"
                  >
                    We specialise in residential sales and rentals and offer our{" "}
                  </Text>
                  <Img
                    className="h-5 mt-2.5"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[350px] relative w-full">
                    <Img
                      className="h-[350px] m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle58_4.png"
                      alt="rectangleFiftyEight"
                    />
                    <div className="absolute bg-pink-400 flex flex-col h-[60px] items-center justify-start left-[6%] p-1.5 top-[0] w-[60px]">
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtPoppinsMedium16WhiteA700"
                      >
                        <>
                          2 <br />
                          Week
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[19px] w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      12.45 $
                    </Text>
                    <Button
                      className="cursor-pointer flex h-[30px] items-center justify-center rounded-[15px] w-[114px]"
                      rightIcon={
                        <Img
                          className="h-3.5 ml-1.5 my-[3px]"
                          src="images/img_teenyiconsarrowupsolid_white_a700.svg"
                          alt="teenyicons:arrow-up-solid"
                        />
                      }
                      color="pink_400"
                      size="xs"
                    >
                      <div className="leading-[normal] text-center text-sm">
                        See more{" "}
                      </div>
                    </Button>
                  </div>
                  <Text
                    className="mt-3 text-lg text-pink-400"
                    size="txtPoppinsMedium18Pink400"
                  >
                    Lorem Ipsum
                  </Text>
                  <Text
                    className="mt-[7px] text-base text-black-900_7f w-4/5 sm:w-full"
                    size="txtPoppinsRegular16Black9007f"
                  >
                    We specialise in residential sales and rentals and offer our{" "}
                  </Text>
                  <Img
                    className="h-5 mt-2.5"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col items-center justify-start mt-20 w-full">
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
              <div className="flex md:h-[1225px] h-[500px] justify-end md:px-5 relative w-full">
                <div className="bg-gradient1  h-[126px] mb-2 ml-[425px] mt-auto rotate-[130deg] rounded-[50%] w-[126px]"></div>
                <div className="absolute bg-gray-50_7f flex flex-col h-full inset-[0] items-center justify-center m-auto p-[50px] md:px-10 sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row gap-[58px] items-start justify-start w-[93%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[26%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-blue-500 text-xl"
                            size="txtPoppinsMedium20"
                          >
                            TESTIMONIAL
                          </Text>
                        </div>
                        <Text
                          className="md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                          size="txtPoppinsSemiBold38"
                        >
                          <>
                            Words from our
                            <br />
                            Satisfied Clients
                          </>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex h-[30px] items-center justify-center mt-[131px] rounded-[15px] w-[114px]"
                        rightIcon={
                          <Img
                            className="h-3.5 ml-1.5 my-[3px]"
                            src="images/img_teenyiconsarrowupsolid_white_a700.svg"
                            alt="teenyicons:arrow-up-solid"
                          />
                        }
                        size="xs"
                      >
                        <div className="leading-[normal] text-center text-sm underline">
                          Click here
                        </div>
                      </Button>
                      <Img
                        className="h-10 mt-3.5 rounded-[20px]"
                        src="images/img_group122.svg"
                        alt="group122"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-[71%] md:w-full">
                      <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[10px]">
                        <div className="flex flex-col gap-3.5 justify-start my-2 w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_flowbitequoteoutline.svg"
                            alt="flowbitequoteou"
                          />
                          <div className="flex flex-col gap-[21px] items-center justify-start ml-2 md:ml-[0] w-full">
                            <Text
                              className="text-black-900_7f text-lg w-[98%] sm:w-full"
                              size="txtPoppinsRegular18"
                            >
                              I would like to thank you so much for your efforts
                              in achieving the sale. It has obviously been a
                              massive learning curve for us and we owe you
                              equally large debt of thanks for your knowledge
                              and insight through this whole process. I would
                              also like to acknowledge your personal effort,
                              patience, persistence and tolerance (with both us
                              and the buyer representative). Quite frankly it
                              goes beyond what I can attempt to put into words.
                            </Text>
                            <Line className="bg-white-A700 border border-blue_gray-100 border-solid h-px rounded-[1px] w-full" />
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                              <div className="flex sm:flex-1 flex-row gap-5 items-center justify-start w-[37%] sm:w-full">
                                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-20 items-center justify-start p-2.5 rounded-[10px] w-20">
                                  <Img
                                    className="h-[60px] w-[60px]"
                                    src="images/img_entypouser.svg"
                                    alt="entypouser"
                                  />
                                </div>
                                <Text
                                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                                  size="txtPoppinsMedium25"
                                >
                                  Simon Thomas
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1.5 h-[30px] md:h-auto items-center justify-center px-2.5 py-1.5 w-[114px]">
                                <Text
                                  className="text-blue-500 text-center text-sm w-auto"
                                  size="txtPoppinsRegular14Blue500"
                                >
                                  See more{" "}
                                </Text>
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_teenyiconsarrowupsolid.svg"
                                  alt="teenyiconsarrow_One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-[290px] w-[5px]"
                        src="images/img_frame76.svg"
                        alt="frameSeventySix"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="h-40 md:h-auto md:mt-0 mt-[58px] object-cover"
                  src="images/img_rectangle63.png"
                  alt="rectangleSixtyTwo_One"
                />
                <div className="flex md:flex-1 flex-col gap-4 items-start justify-start ml-4 md:ml-[0] md:px-5 w-[34%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <a href="javascript:" className="text-blue-500 text-xl">
                      <Text size="txtPoppinsMedium20">Contact Us</Text>
                    </a>
                    <Text
                      className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                      size="txtPoppinsSemiBold38"
                    >
                      Book An Appointment
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-blue-500"
                      size="txtPoppinsSemiBold30"
                    >
                      Get In Touch
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center py-1.5 w-auto sm:w-full">
                          <Button
                            className="flex h-9 items-center justify-center rounded-[50%] w-9"
                            shape="circle"
                            color="blue_500_19"
                          >
                            <Img src="images/img_lock.svg" alt="lock" />
                          </Button>
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtPoppinsRegular18Black900"
                          >
                            <span className="text-black-900 font-poppins text-left font-medium">
                              Email
                            </span>
                            <span className="text-black-900 font-poppins text-left font-normal">
                              :{" "}
                            </span>
                            <span className="text-black-900_7f font-poppins text-left font-normal">
                              reception@premiumestates.com.au.
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-center py-1.5 w-auto">
                          <Button
                            className="flex h-9 items-center justify-center rounded-[50%] w-9"
                            shape="circle"
                            color="blue_500_19"
                          >
                            <Img
                              className="h-[21px]"
                              src="images/img_call.svg"
                              alt="call"
                            />
                          </Button>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtPoppinsRegular18Black900"
                          >
                            <span className="text-black-900 font-poppins text-left font-medium">
                              Office PH
                            </span>
                            <span className="text-black-900 font-poppins text-left font-normal">
                              :
                            </span>
                            <span className="text-black-900_7f font-poppins text-left font-normal">
                              <>
                                {" "}
                                0468 454 490. <br />
                              </>
                            </span>
                            <span className="text-black-900 font-poppins text-left font-medium">
                              Text
                            </span>
                            <span className="text-black-900 font-poppins text-left font-normal">
                              :{" "}
                            </span>
                            <span className="text-black-900_7f font-poppins text-left font-normal">
                              0468 454 490.
                            </span>
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center py-1.5 w-auto sm:w-full">
                          <Img
                            className="h-9 rounded-[50%] w-9"
                            src="images/img_pepiconspopinternet.svg"
                            alt="pepiconspopinte"
                          />
                          <Text
                            className="text-black-900 text-lg"
                            size="txtPoppinsRegular18Black900"
                          >
                            <span className="text-black-900 font-poppins text-left font-medium">
                              Address
                            </span>
                            <span className="text-black-900 font-poppins text-left font-normal">
                              :
                            </span>
                            <span className="text-black-900_7f font-poppins text-left font-normal">
                              <>
                                {" "}
                                Suite One, 8 Dugdale <br />
                                Street, WARWICK, WA, 6024.
                              </>
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-roboto gap-3.5 items-start justify-start md:ml-[0] ml-[73px] md:px-5 rounded shadow-bs3 w-[48%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                    <Input
                      name="language_Seven"
                      placeholder="Enter  name"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_7f sm:h-auto text-left text-lg w-full"
                      wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                      type="text"
                    ></Input>
                    <Input
                      name="language_Eight"
                      placeholder="Enter  Phone"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_7f sm:h-auto text-left text-lg w-full"
                      wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                      type="number"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                    <Input
                      name="frame105674"
                      placeholder="Enter emial ID"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_7f sm:h-auto text-left text-lg w-full"
                      wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                    ></Input>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid sm:flex-1 h-[60px] leading-[normal] text-left text-lg w-[49%] sm:w-full"
                      placeholderClassName="text-black-900_7f"
                      indicator={
                        <Img
                          className="h-2 w-4"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frame105675"
                      options={selectOptionsOptionsList}
                      isSearchable={false}
                      placeholder="-- Select Options --"
                      shape="round"
                      color="white_A700"
                      size="xs"
                    />
                  </div>
                  <TextArea
                    className="bg-white-A700 border border-blue_gray-100 border-solid gap-2.5 h-[150px] leading-[normal] max-w-[690px] px-5 py-[15px] rounded placeholder:text-black-900_7f text-black-900_7f text-left text-lg w-full"
                    name="frame105676"
                    placeholder="Enter Message"
                  ></TextArea>
                  <Button
                    className="border border-solid border-white-A700 cursor-pointer font-medium h-[60px] leading-[normal] text-center text-xl w-[335px]"
                    shape="round"
                    size="lg"
                  >
                    SUBMIT
                  </Button>
                </div>
                <Img
                  className="h-40 md:h-auto md:ml-[0] ml-[43px] md:mt-0 mt-[163px] object-cover"
                  src="images/img_rectangle63.png"
                  alt="rectangleSixtyTwo_Two"
                />
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[53px] md:px-5 w-full">
            <div className="h-[526px] relative w-full">
              <Button
                className="flex h-[50px] items-center justify-center mb-[-24.05px] ml-auto mr-[100px] w-[50px] z-[1]"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </Button>
              <div className="md:h-[1156px] h-[500px] mt-auto mx-auto w-full">
                <Img
                  className="h-[500px] m-auto object-cover w-full"
                  src="images/img_rectangle120.png"
                  alt="rectangle120"
                />
                <div className="absolute bg-black-900_99 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[18px] rounded-[10px] w-[87%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[95px] items-end justify-start mb-2 w-[22%] md:w-full">
                        <div className="md:h-[136px] h-[178px] mr-0.5 relative w-full">
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_cc blur-[200.00px] flex flex-col inset-x-[0] items-center justify-start mx-auto p-10 sm:px-5 top-[0] w-[97%]">
                            <Img
                              className="h-[47px] md:h-auto mb-[9px] object-cover w-[91%]"
                              src="images/img_logo.png"
                              alt="logo_One"
                            />
                          </div>
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0]">
                            <Text
                              className="leading-[116.67%] text-lg text-white-A700"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              <>
                                Welcome To Premium
                                <br /> Estates
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-end w-[81%] md:w-full">
                          <Button
                            className="flex h-10 items-center justify-center rounded-[50%] w-10"
                            shape="circle"
                          >
                            <Img
                              className="h-6"
                              src="images/img_rifacebookfill.svg"
                              alt="rifacebookfill"
                            />
                          </Button>
                          <Button
                            className="flex h-10 items-center justify-center ml-[15px] rounded-[50%] w-10"
                            shape="circle"
                            size="xs"
                          >
                            <Img
                              className="h-[27px]"
                              src="images/img_user_white_a700.svg"
                              alt="user_One"
                            />
                          </Button>
                          <Button
                            className="flex h-10 items-center justify-center ml-[15px] rounded-[50%] w-10"
                            shape="circle"
                          >
                            <Img
                              className="h-6"
                              src="images/img_riinstagramfill.svg"
                              alt="riinstagramfill"
                            />
                          </Button>
                          <Button
                            className="flex h-10 items-center justify-center ml-[15px] rounded-[50%] w-10"
                            shape="circle"
                          >
                            <Img
                              className="h-6"
                              src="images/img_rilinkedinfill.svg"
                              alt="rilinkedinfill"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col font-roboto gap-[19px] items-start justify-start w-[10%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-500"
                          size="txtRobotoRomanMedium25"
                        >
                          COMPANY
                        </Text>
                        <div className="flex flex-col font-poppins items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-blue-500 text-lg w-auto"
                              size="txtPoppinsRegular18Blue500"
                            >
                              Home
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              About Us
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Our Services
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Products
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Testimonials
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <a
                              href="javascript:"
                              className="text-lg text-white-A700 w-auto"
                            >
                              <Text size="txtPoppinsRegular18WhiteA700">
                                Contact Us
                              </Text>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-roboto gap-[19px] items-start justify-start w-[22%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-500"
                          size="txtRobotoRomanMedium25"
                        >
                          SERVICES
                        </Text>
                        <div className="flex flex-col font-poppins items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Properties
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Sold Properties
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center py-2 w-auto">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Standard Management Fees
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-roboto items-center justify-start w-[31%] md:w-full">
                        <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-500"
                            size="txtRobotoRomanMedium25"
                          >
                            CONTACT US
                          </Text>
                          <div className="flex flex-col font-poppins items-center justify-start w-full">
                            <ul className="flex flex-col items-start justify-start w-auto md:w-full common-column-list">
                              <li>
                                <a href="javascript:">
                                  <div className="flex flex-row gap-2.5 items-center justify-center py-1.5">
                                    <Img
                                      className="h-5 w-5"
                                      src="images/img_evaemailfill.svg"
                                      alt="evaemailfill"
                                    />
                                    <Text
                                      className="text-lg text-white-A700 w-auto"
                                      size="txtPoppinsRegular18WhiteA700"
                                    >
                                      reception@premiumestates.com.au.
                                    </Text>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
                                  <div className="flex flex-row gap-2.5 items-center justify-center py-1.5">
                                    <Img
                                      className="h-5 w-5"
                                      src="images/img_ioncall.svg"
                                      alt="ioncall"
                                    />
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtPoppinsRegular18WhiteA700"
                                    >
                                      <>
                                        0468 454 490.
                                        <br />
                                        0468 454 490.{" "}
                                      </>
                                    </Text>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
                                  <div className="flex flex-row gap-2.5 items-center justify-center py-1.5">
                                    <Img
                                      className="h-5 w-5"
                                      src="images/img_pepiconspopinternet_white_a700.svg"
                                      alt="pepiconspopinte_One"
                                    />
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtPoppinsRegular18WhiteA700"
                                    >
                                      <>
                                        Suite One, 8 Dugdale <br />
                                        Street, WARWICK, WA, 6024.
                                      </>
                                    </Text>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-white-A700_4c h-px mt-8 w-full" />
                    <Text
                      className="mt-5 text-lg text-white-A700"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Designed by Webpristine Technologies (INDIA)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PREMIUMjpgPage;
