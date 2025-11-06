import React from "react";

const App = () => {
  return (
    <div>
      <div className="bg-[url('/bg-image.jpg')] h-screen bg-cover bg-center bg-no-repeat">
        <div className="container w-[63%] mx-auto flex justify-between pt-3">
          <div>
            <img
              width="100"
              src="/mountain0.png"
              alt="mountain logo"
              className=""
            />
          </div>
          <ul className="flex justify-between items-center gap-5 text-white text-[14px]">
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Про гида</a>
            </li>
            <li>
              <a href="#">Программа тура</a>
            </li>
            <li>
              <a href="#">Стоимость</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <button className="rounded-md bg-[#313838] text-white px-4 py-1 ms-4 hover:bg-[#59535b]">
              Консультация
            </button>
          </ul>
        </div>
        <div className="container w-[63%] mx-auto mt-[350px] ">
          <h1 className="uppercase font-second font-bold text-[40px] leading-[150%] tracking-[0.02em] text-[#fdfdfd]">
            Насладись прогулкой в горах с командой единомышленников
          </h1>
          <div className="bg-[#59535b] rounded-lg mt-10 grid grid-cols-4 p-7 gap-4">
            <div>
              <button className="rounded-md border border-white text-white py-2 px-2 w-[220px] flex justify-between items-center">
                Локация для тура<i class=" fa-solid fa-chevron-down"></i>
              </button>
              <p className="px-2 mt-1 text-white font-[14px]">
                выберите из списка
              </p>
            </div>
            <div>
              <button className="rounded-md border border-white text-white py-2 px-2 w-[220px] flex justify-between items-center">
                Дата похода<i class="fa-regular fa-calendar"></i>
              </button>
              <p className="text-white px-2 mt-1">укажите диапазон</p>
            </div>
            <div>
              <button className="rounded-md border border-white text-white py-2 px-2 w-[220px] flex justify-between items-center">
                Участники<i class=" fa-solid fa-chevron-down"></i>
              </button>
              <p className="text-white px-2 mt-1">минимум 4 человека</p>
            </div>
            <div>
              <button className="rounded-md border border-white  py-2 px-4 bg-white w-[220px] hover:bg-[#313838] hover:text-white">
                Найти программу
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-[63%] mx-auto mb-[150px] mt-[90px] grid grid-cols-2">
        <div className="relative">
          <img
            className="h-[320px] w-[280px] rounded-[24px]"
            src="/card-1.jpg"
            alt="card-1"
          />
          <img
            className="h-[320px] w-[280px] rounded-[24px] absolute top-[100px] left-[105px]"
            src="/card-2.jpg"
            alt="card-2"
          />
        </div>
        <div className="pt-[30px]">
          <h3 className="font-normal text-[18px] leading-[83%] text-[#f2be22] mb-3">
            о нашем походе
          </h3>
          <h2 className="font-primary font-extrabold text-[28px] leading-[120%] text-[#18121e] mb-[30px]">
            Исследуйте все горные массивы мира вместе с нами
          </h2>
          <p className="font-primary font-normal text-[15px] leading-[150%] text-[#18121e] mb-[30px]">
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
            самых странных слов в Lorem Ipsum, "consectetur"и занялся его
            поисками в классической латинской литературе.
          </p>
          <button className="bg-[#313838] rounded-[4px] px-[30px] py-[12px]  text-white text-[14px]">
            Программа тура
          </button>
        </div>
      </div>
      <div className="bg-[#f3f5f4] pt-[60px] pb-2">
        <div className="container w-[63%] mx-auto mb-[50px] grid grid-cols-2">
          <div>
            <h3 className="font-normal text-[18px] leading-[83%] text-[#f2be22] mb-2">
              наше предложение
            </h3>
            <h2 className="font-primary font-extrabold text-[28px] leading-[120%] text-[#18121e] mb-[30px]">
              Лучшие программы для тебя
            </h2>
            <p className="font-primary font-normal text-[15px] leading-[150%] text-[#18121e] mb-[30px]">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа.
            </p>
            <div className="flex justify-between items-center mb-[25px]">
              <div className="w-[50px] h-[50px] bg-[#e5eeeb] p-2 rounded me-2">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_37)">
                    <path
                      d="M12.0345 24.9276H15.678V25.23H12.0345V24.9276ZM28.0395 24.9276H36.0001V25.23H28.0395V24.9276ZM27.8446 13.8785C28.1761 14.3344 28.4439 14.7347 28.6571 15.0913C28.726 13.9452 28.9244 13.2457 29.1207 12.8438V16.0015C29.223 16.2605 29.2964 16.5328 29.3004 16.8194C29.3007 17.0228 29.2609 17.2095 29.1814 17.3774C29.164 17.415 29.1427 17.4512 29.1207 17.4869V23.3885C29.1207 23.6191 29.2123 23.8402 29.3753 24.0033C29.5384 24.1663 29.7595 24.2579 29.9901 24.2579C30.2206 24.2579 30.4418 24.1663 30.6048 24.0033C30.7678 23.8402 30.8594 23.6191 30.8594 23.3885V17.0418H31.1852V23.3885C31.1852 23.6191 31.2768 23.8402 31.4398 24.0032C31.6028 24.1662 31.8239 24.2578 32.0545 24.2578C32.285 24.2578 32.5061 24.1662 32.6691 24.0032C32.8321 23.8402 32.9237 23.6191 32.9237 23.3885V16.2883C30.9405 14.1585 29.5848 11.808 29.2571 11.2165C29.1947 11.2373 29.1291 11.2637 29.0609 11.2981C28.6828 11.4855 28.2751 11.8956 27.9898 12.6226C27.8698 12.9257 27.7665 13.2862 27.6864 13.7172C27.7465 13.7632 27.7997 13.8175 27.8446 13.8785ZM27.5091 16.3365L27.5105 16.3966L27.5426 16.4034C27.5316 16.381 27.5204 16.3587 27.5091 16.3365Z"
                      fill="#45766A"
                    />
                    <path
                      d="M30.4385 12.6932C31.046 13.6196 31.8962 14.7997 32.9236 15.9309V12.8455C32.9653 12.9309 33.0073 13.029 33.0488 13.1435C33.2469 13.6928 33.4136 14.5941 33.413 16.0005C33.413 16.3882 33.4006 16.8142 33.3732 17.2818C33.3687 17.3584 33.3799 17.435 33.4061 17.5071C33.4324 17.5792 33.4731 17.6451 33.5257 17.7009C33.5784 17.7567 33.6419 17.8011 33.7123 17.8314C33.7827 17.8617 33.8586 17.8773 33.9353 17.8772C34.0787 17.877 34.2166 17.8221 34.3209 17.7236C34.4252 17.6252 34.4879 17.4906 34.4963 17.3475C34.5231 16.899 34.537 16.4498 34.5379 16.0005C34.5351 13.8787 34.1963 12.7042 33.7339 11.998C33.5031 11.6477 33.2328 11.4227 32.9832 11.298C32.7339 11.1726 32.5148 11.1473 32.3903 11.1478L32.388 11.1479C32.3853 11.1478 32.383 11.147 32.3802 11.147H29.664C29.6608 11.147 29.6576 11.148 29.6545 11.148H29.6539C29.603 11.1482 29.5522 11.1519 29.5018 11.159C29.6579 11.4375 29.9781 11.9915 30.4385 12.6932Z"
                      fill="#45766A"
                    />
                    <path
                      d="M31.022 10.7463C31.8957 10.7463 32.6039 10.038 32.6039 9.16439C32.6039 8.29075 31.8957 7.58252 31.022 7.58252C30.1484 7.58252 29.4402 8.29075 29.4402 9.16439C29.4402 10.038 30.1484 10.7463 31.022 10.7463Z"
                      fill="#45766A"
                    />
                    <path
                      d="M4.76545 18.8765V33.0221C4.76545 33.8483 5.43523 34.5176 6.26094 34.5176C7.0869 34.5176 7.75669 33.8483 7.75669 33.0221V22.1023H8.31736V33.0221C8.31736 33.8483 8.98715 34.5176 9.81286 34.5176C10.6388 34.5176 11.3086 33.8483 11.3086 33.0221V14.8821C11.3893 15.0491 11.4612 15.2202 11.5239 15.3947C11.8648 16.3398 12.1516 17.8904 12.1506 20.3107C12.1506 20.9777 12.1291 21.7105 12.0824 22.5153C12.0512 23.0487 12.4585 23.5063 12.9922 23.5378C13.2484 23.5527 13.5001 23.4652 13.6918 23.2946C13.8835 23.124 13.9996 22.8842 14.0146 22.628C14.0635 21.7892 14.0862 21.0193 14.0862 20.3108C14.0813 16.6596 13.4982 14.6391 12.7031 13.424C12.3056 12.8208 11.8407 12.434 11.4113 12.2198C10.9951 12.01 10.6293 11.9637 10.4116 11.9615C10.3992 11.961 10.3866 11.9596 10.3738 11.9596H9.80597L9.50863 14.2844L8.32922 12.8631L9.14453 11.9596H6.92928L7.74459 12.8631L6.56517 14.2844L6.26784 11.9596H5.70027C5.6641 11.9596 5.62841 11.9621 5.59333 11.9662C5.16487 11.972 4.72468 11.9968 4.29828 12.0083C4.17755 12.0115 4.05731 12.0145 3.93973 12.0144C3.24902 12.0216 2.65036 11.9236 2.37238 11.7514C2.22855 11.666 2.15017 11.5878 2.07577 11.4533C2.00392 11.3178 1.93594 11.0979 1.93545 10.7245C1.93473 10.3213 2.02122 9.74855 2.24912 9.00195C2.32378 8.75641 2.29787 8.49127 2.17707 8.26483C2.05628 8.03839 1.85049 7.8692 1.60497 7.79447C1.59844 7.79241 1.59203 7.79145 1.5855 7.78963V5.26786C1.84981 4.84375 2.52419 4.08639 3.70228 4.78871C6.8942 6.69138 7.08932 2.24819 7.08932 2.24819C7.08932 2.24819 5.41588 3.17576 4.20622 2.08707C3.18237 1.16567 1.94235 1.68824 1.58538 1.87066V1.48224H1.1418V7.76991C0.968562 7.80288 0.807638 7.88258 0.676429 8.0004C0.545221 8.11822 0.448723 8.26967 0.397374 8.43837C0.132096 9.31283 0.000969233 10.0581 1.5072e-06 10.7243C-0.000482356 11.3344 0.115524 11.8884 0.366286 12.3608C0.741521 13.0793 1.40792 13.5099 2.0419 13.7068C2.68363 13.9117 3.3297 13.9475 3.93973 13.9496C3.97312 13.9496 4.00614 13.9488 4.03941 13.9486C4.28969 13.9464 4.53355 13.9386 4.76532 13.9294L4.76545 18.8765Z"
                      fill="#45766A"
                    />
                    <path
                      d="M8.48077 11.2336C9.77292 11.0216 10.7586 9.90048 10.7586 8.54857C10.7586 7.04521 9.54018 5.82684 8.03682 5.82684C6.5337 5.82684 5.31509 7.04521 5.31509 8.54857C5.31509 9.90048 6.30096 11.0216 7.59288 11.2336C7.73743 11.2574 7.88562 11.2703 8.03682 11.2703C8.18803 11.2703 8.33633 11.2575 8.48077 11.2336ZM22.223 17.1173C22.101 15.8997 21.8281 15.1248 21.4882 14.6051C21.2574 14.2548 20.9871 14.0298 20.7376 13.9053C20.4881 13.7796 20.2691 13.7546 20.1444 13.7551H20.1442C20.1409 13.7551 20.138 13.7541 20.1347 13.7541H19.6504C19.8713 14.6864 19.9292 15.5452 19.9292 16.1876C19.9292 16.5744 19.9084 16.8825 19.8898 17.082V18.3735H17.6634V17.0837C17.6363 16.7858 17.6231 16.4868 17.6237 16.1877C17.6237 15.5452 17.6817 14.6865 17.9027 13.7542H17.4184C17.4152 13.7542 17.412 13.7552 17.4089 13.7552H17.4083C17.2838 13.7547 17.0645 13.7795 16.8153 13.9054C16.437 14.0928 16.0295 14.5031 15.7442 15.2299C15.4554 15.9597 15.2615 17.0146 15.2605 18.6077C15.2608 19.0195 15.2737 19.4672 15.3026 19.9549C15.311 20.098 15.3738 20.2325 15.478 20.3309C15.5823 20.4293 15.7202 20.4842 15.8635 20.4844C15.8747 20.4844 15.8858 20.4839 15.8971 20.4834C16.046 20.4747 16.1853 20.4071 16.2844 20.2956C16.3835 20.1842 16.4343 20.0379 16.4256 19.889C16.3996 19.4624 16.3863 19.0351 16.3856 18.6077C16.3831 16.9048 16.6313 15.9497 16.8754 15.4508V25.9958C16.8754 26.2264 16.967 26.4475 17.13 26.6105C17.293 26.7735 17.5141 26.8651 17.7447 26.8651C17.9752 26.8651 18.1963 26.7735 18.3593 26.6105C18.5224 26.4475 18.6139 26.2264 18.6139 25.9958V19.6491H18.9397V25.9958C18.9397 26.2264 19.0313 26.4475 19.1943 26.6106C19.3574 26.7736 19.5785 26.8652 19.8091 26.8652C20.0397 26.8652 20.2608 26.7736 20.4238 26.6106C20.5869 26.4475 20.6785 26.2264 20.6785 25.9958V15.4532C20.7201 15.5385 20.7621 15.6364 20.8034 15.7506C21.0017 16.3002 21.1683 17.2012 21.1678 18.608C21.1678 18.9954 21.1552 19.4215 21.1281 19.8892C21.1162 20.0941 21.2166 20.278 21.3747 20.3857C21.431 19.3377 21.5879 18.4955 21.8512 17.8295C21.963 17.5435 22.0904 17.3096 22.223 17.1173Z"
                      fill="#45766A"
                    />
                    <path
                      d="M17.8344 16.1876C17.8344 16.5101 17.8493 16.7758 17.865 16.9674H19.688C19.7035 16.7758 19.7184 16.5101 19.7184 16.1876C19.7184 15.5464 19.6582 14.6844 19.4325 13.7541H18.1203C17.8946 14.6846 17.8344 15.5466 17.8344 16.1876Z"
                      fill="#45766A"
                    />
                    <path
                      d="M18.7765 13.3536C19.6502 13.3536 20.3584 12.6453 20.3584 11.7717C20.3584 10.898 19.6502 10.1898 18.7765 10.1898C17.9029 10.1898 17.1947 10.898 17.1947 11.7717C17.1947 12.6453 17.9029 13.3536 18.7765 13.3536Z"
                      fill="#45766A"
                    />
                    <path
                      d="M18.775 18.1039C18.9933 18.1039 19.1704 17.9269 19.1704 17.7085C19.1704 17.4901 18.9933 17.313 18.775 17.313C18.5566 17.313 18.3795 17.4901 18.3795 17.7085C18.3795 17.9269 18.5566 18.1039 18.775 18.1039Z"
                      fill="#45766A"
                    />
                    <path
                      d="M24.2881 13.6251H26.4501C26.1707 13.1773 25.6751 12.8783 25.1082 12.8783C24.2346 12.8783 23.5264 13.5864 23.5264 14.46C23.5264 15.3338 24.2346 16.042 25.1082 16.042C25.6971 16.042 26.2099 15.7195 26.4822 15.2421H24.288V13.6251H24.2881Z"
                      fill="#45766A"
                    />
                    <path
                      d="M25.6357 14.8671C25.8751 14.8671 26.0692 14.673 26.0692 14.4335C26.0692 14.1941 25.8751 14 25.6357 14C25.3962 14 25.2021 14.1941 25.2021 14.4335C25.2021 14.673 25.3962 14.8671 25.6357 14.8671Z"
                      fill="#45766A"
                    />
                    <path
                      d="M29.0585 16.8226C29.0535 16.4619 28.9287 16.1174 28.7053 15.673C28.4787 15.231 28.1392 14.6951 27.649 14.0208C27.6056 13.9611 27.5508 13.9105 27.4878 13.8719C27.4248 13.8333 27.3548 13.8075 27.2818 13.796C27.2088 13.7845 27.1343 13.7875 27.0625 13.8048C26.9907 13.8221 26.9229 13.8534 26.8632 13.8969C26.8035 13.9403 26.7529 13.9951 26.7144 14.0581C26.6758 14.1211 26.6501 14.191 26.6386 14.264C26.627 14.3369 26.63 14.4114 26.6473 14.4832C26.6646 14.555 26.6959 14.6227 26.7393 14.6824C27.2077 15.3259 27.519 15.8229 27.704 16.1853C27.8226 16.4121 27.8849 16.5881 27.9137 16.6987C27.7538 16.6944 27.497 16.6453 27.2486 16.5864C27.1147 16.5554 26.9812 16.5229 26.8515 16.4962C26.7424 16.4744 26.6398 16.4553 26.5219 16.4483C26.5035 16.4463 26.4854 16.4426 26.4666 16.4426H23.7503C23.7471 16.4426 23.7441 16.4435 23.7408 16.4435H23.7402C23.6154 16.4431 23.3965 16.4681 23.1471 16.5938C22.769 16.7814 22.3614 17.1915 22.076 17.9182C21.7874 18.648 21.5935 19.7032 21.5925 21.2961C21.5925 21.7081 21.6058 22.1555 21.6345 22.6433C21.6432 22.7922 21.7107 22.9315 21.8222 23.0306C21.9336 23.1297 22.0799 23.1805 22.2288 23.1718C22.3777 23.1631 22.517 23.0956 22.6161 22.9842C22.7153 22.8727 22.7661 22.7265 22.7574 22.5776C22.7316 22.1509 22.7183 21.7235 22.7175 21.2961C22.7151 19.5934 22.9634 18.6386 23.2071 18.1394V28.6842C23.2071 29.1645 23.5964 29.5534 24.0764 29.5534C24.5564 29.5534 24.9457 29.1645 24.9457 28.6842V22.3377H25.2714V28.6842C25.2714 28.9147 25.363 29.1358 25.526 29.2988C25.689 29.4619 25.9101 29.5534 26.1407 29.5534C26.2549 29.5535 26.3679 29.531 26.4734 29.4873C26.5789 29.4437 26.6748 29.3796 26.7555 29.2989C26.8362 29.2182 26.9003 29.1224 26.944 29.0169C26.9877 28.9114 27.0102 28.7984 27.0102 28.6842V17.6855C27.0766 17.7009 27.1447 17.7162 27.2155 17.7313C27.444 17.7789 27.6875 17.8228 27.9448 17.824C28.1606 17.821 28.406 17.799 28.6582 17.6312C28.7894 17.541 28.8945 17.4178 28.9628 17.274C29.032 17.1275 29.0587 16.9713 29.0585 16.8226Z"
                      fill="#45766A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_37">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h3 className="leading-[143%] text-[#000] font-bold text-[14px]">
                  Опытный гид
                </h3>
                <p className="text-[11px]">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-[25px]">
              <div className="w-[50px] h-[50px] bg-[#e3e6ee] p-2 rounded me-2">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.4036 7.06108C32.3342 6.74833 32.2162 6.44843 32.0537 6.17233C32.0537 6.17233 28.151 0 17.9992 0C7.8505 0 3.94482 6.17233 3.94482 6.17233C3.80108 6.39885 3.6438 6.79844 3.59413 7.06108C3.59413 7.06108 2.83934 11.0638 4.08855 16.8012C5.23919 22.0758 8.41942 29.6365 17.0541 35.6997C17.3309 35.8948 17.6613 35.9996 18 35.9996C18.3387 35.9996 18.6691 35.8948 18.9459 35.6997C27.5776 29.6358 30.7593 22.0758 31.9092 16.8012C33.1622 11.0638 32.4036 7.06108 32.4036 7.06108ZM28.5822 16.0758C28.5499 16.227 28.51 16.385 28.4723 16.5401H17.9992V32.1741C11.2625 27.0613 8.57896 20.9793 7.5254 16.5401H17.9992V3.40524C25.2274 3.40524 28.446 7.04453 29.0842 7.87382C29.1895 8.6384 29.5176 11.79 28.5822 16.0758Z"
                    fill="#6276AA"
                  />
                </svg>
              </div>
              <div>
                <h3 className="leading-[143%] text-[#000] font-bold text-[14px]">
                  Опытный гид
                </h3>
                <p className="text-[11px]">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-[25px]">
              <div className="w-[50px] h-[50px] bg-[#f4d8ca] p-2 rounded me-2">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.3006 9.44613L19.0547 4.83511V1.05469C19.0547 0.472219 18.5825 0 18 0C17.4175 0 16.9453 0.472219 16.9453 1.05469V4.83511L9.6994 9.44613C9.54971 9.54139 9.42647 9.67288 9.34109 9.82841C9.25571 9.98395 9.21094 10.1585 9.21094 10.3359V34.9453C9.21094 35.5278 9.68316 36 10.2656 36H25.7344C26.3168 36 26.7891 35.5278 26.7891 34.9453V10.3359C26.7891 9.97538 26.6048 9.63977 26.3006 9.44613ZM18 17.2969C16.0615 17.2969 14.4844 15.7198 14.4844 13.7812C14.4844 12.21 15.5205 10.8765 16.9453 10.4275V11.3203C16.9453 11.9028 17.4175 12.375 18 12.375C18.5825 12.375 19.0547 11.9028 19.0547 11.3203V10.4275C20.4795 10.8765 21.5156 12.21 21.5156 13.7812C21.5156 15.7198 19.9385 17.2969 18 17.2969Z"
                    fill="#F2BE22"
                  />
                </svg>
              </div>
              <div>
                <h3 className="leading-[143%] text-[#000] font-bold text-[14px]">
                  Опытный гид
                </h3>
                <p className="text-[11px]">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
              </div>
            </div>
            <button className="bg-[#313838] rounded-[4px] px-[30px] py-[12px]  text-white text-[14px] mt-3">
              Программа тура
            </button>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 ms-[60px] mt-[35px]">
            <img
              className="w-[200px] h-[200px]"
              src="Rectangle 8.png"
              alt="Rectangle8"
            />
            <img
              className="w-[200px] h-[200px]"
              src="Rectangle 9.png"
              alt="Rectangle9"
            />
            <img
              className="w-[200px] h-[200px]"
              src="Rectangle 10.png"
              alt="Rectangle10"
            />
            <img
              className="w-[200px] h-[200px]"
              src="Rectangle 11.png"
              alt="Rectangle11"
            />
          </div>
        </div>
      </div>
      <div className="container text-center w-[63%] mx-auto pt-[60px]">
        <h3 className="font-normal text-[18px] leading-[83%] text-[#f2be22] mb-3">
          по версии отдыхающих
        </h3>
        <h2 className="font-primary font-extrabold text-[28px] leading-[120%] text-[#18121e] mb-[30px]">
          Популярные направления
        </h2>
        <div className="flex justify-between items-center mt-[50px]">
          <div className="relative">
            <img
              className="w-[310px] h-[390px] "
              src="фоновое изображение.png"
              alt=""
            />
            <p className="absolute top-12 right-0 bg-[#d2e4f6] rounded px-3 py-1">
              <i class="fa-solid fa-star text-yellow-500"></i>
              4.9
            </p>
            {/* <div className="flex justify-evenly bg-[rgba(255, 255, 255, 0.2)] blur-[6px]">
              <div>
                <h2>Озеро возле гор</h2>
                <p>романтическое приключение</p>
              </div>
              <p>480 $</p>
            </div> */}
          </div>

          <div className="relative">
            <img
              className="w-[310px] h-[390px]"
              src="фоновое изображение (1).png"
              alt=""
            />
            <p className="absolute top-12 right-0 bg-[#d2e4f6] rounded px-3 py-1">
              <i class="fa-solid fa-star text-yellow-500"></i>
              4.5
            </p>
            {/* <div className="flex justify-evenly ">
              <div>
                <h2>Озеро возле гор</h2>
                <p>романтическое приключение</p>
              </div>
              <p>480 $</p>
            </div> */}
          </div>
          <div className="relative">
            <img
              className="w-[310px] h-[390px]"
              src="фоновое изображение (2).png"
              alt=""
            />
            <p className="absolute top-12 right-0 bg-[#d2e4f6] rounded px-3 py-1">
              <i class="fa-solid fa-star text-yellow-500"></i>
              5.0
            </p>
            {/* <div className="flex justify-evenly ">
              <div>
                <h2>Озеро возле гор</h2>
                <p>романтическое приключение</p>
              </div>
              <p>480 $</p>
            </div> */}
          </div>
        </div>
        <button className="mt-[50px] bg-[#313838] rounded-[4px] px-[30px] py-[12px]  text-white text-[14px] mb-[100px]">
          Рейтинг направлений
        </button>
      </div>
      <div className="bg-[#f3f5f4]">
        <div className="container w-[63%] mx-auto pt-[50px] text-center">
          <h3 className="font-normal text-[18px] leading-[83%] text-[#f2be22] mb-3 text-center">
            делимся впечатлениями
          </h3>
          <h2 className="font-primary font-extrabold text-[28px] leading-[120%] text-[#18121e] mb-[30px] text-center">
            Блог о путешествиях
          </h2>
          <div className="cards flex justify-between mb-5">
            <div className="card flex justify-between bg-white me-5 rounded-lg box-border p-4">
              <img
                src="Rectangle 19.png"
                alt="Rectangle 19"
                className="w-[180px] h-[220px]"
              />
              <div className="p-3">
                <h2 className="font-primary font-bold text-[15px] leading-[120%] text-[#18121e] mb-3">
                  Красивая Италия, какая она в реальности?
                </h2>
                <p className="text-[12px] mb-[50px]">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[12px] leading-[83%] text-[#f2be22]">
                    01/04/2023
                  </p>
                  <p className="text-[12px]">читать статью</p>
                </div>
              </div>
            </div>
            <div className="card flex justify-between bg-white rounded-lg box-border p-4">
              <img
                className="w-[180px] h-[220px]"
                src="Rectangle 19 (1).png"
                alt="Rectangle 19"
              />
              <div className="p-3">
                <h2 className="font-primary font-bold text-[15px] leading-[120%] text-[#18121e] mb-3">
                  Как подготовиться к путешествию в одиночку?{" "}
                </h2>
                <p className="text-[12px] mb-[50px]">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[12px] leading-[83%] text-[#f2be22]">
                    01/04/2023
                  </p>
                  <p className="text-[12px]">читать статью</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cards flex justify-between">
            <div className="card flex justify-between bg-white me-5 rounded-lg box-border p-4">
              <img
                src="Rectangle 19 (2).png"
                alt="Rectangle 19"
                className="w-[180px] h-[220px]"
              />
              <div className="p-3">
                <h2 className="font-primary font-bold text-[15px] leading-[120%] text-[#18121e] mb-3">
                  Красивая Италия, какая она в реальности?
                </h2>
                <p className="text-[12px] mb-[50px]">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[12px] leading-[83%] text-[#f2be22]">
                    01/04/2023
                  </p>
                  <p className="text-[12px]">читать статью</p>
                </div>
              </div>
            </div>
            <div className="card flex justify-between bg-white rounded-lg box-border p-4">
              <img
                className="w-[180px] h-[220px]"
                src="Rectangle 19 (3).png"
                alt="Rectangle 19"
              />
              <div className="p-3">
                <h2 className="font-primary font-bold text-[15px] leading-[120%] text-[#18121e] mb-3">
                  Как подготовиться к путешествию в одиночку?{" "}
                </h2>
                <p className="text-[12px] mb-[50px]">
                  Для современного мира базовый вектор развития предполагает
                  независимые способы реализации соответствующих условий
                  активизации.
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[12px] leading-[83%] text-[#f2be22]">
                    01/04/2023
                  </p>
                  <p className="text-[12px]">читать статью</p>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-[40px] bg-[#313838] rounded-[4px] px-[30px] py-[12px]  text-white text-[14px] mb-[70px]">
            Другие материалы
          </button>
        </div>
      </div>
      <div className="container w-[63%] mx-auto text-center mt-[60px]">
        <h3 className="font-normal text-[18px] leading-[83%] text-[#f2be22] mb-3">
          фото-отчет
        </h3>
        <h2 className="font-primary font-extrabold text-[28px] leading-[120%] text-[#18121e] mb-[40px]">
          Делимся впечатлениями
        </h2>

        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px] mb-[50px] w-full">
          <img
            src="Rectangle 20.png"
            className="col-span-2 row-span-1 object-cover w-full h-full rounded"
          />

          <img
            src="Rectangle 21.png"
            className="col-span-1 row-span-1 object-cover w-full h-full rounded"
          />

          <img
            src="Rectangle 22.png"
            className="col-span-1 row-span-1 object-cover w-full h-full rounded"
          />

          <img
            src="Rectangle 24.png"
            className="col-span-1 row-span-1 object-cover w-full h-full rounded"
          />

          <img
            src="Rectangle 23.png"
            className="col-span-2 row-span-1 object-cover w-full h-full rounded"
          />

          <img
            src="Rectangle 25.png"
            className="col-span-1 row-span-1 object-cover w-full h-full rounded"
          />
        </div>
        <button className=" bg-[#313838] rounded-[4px] px-[30px] py-[12px]  text-white text-[14px]">
          Наш pinterest
        </button>
      </div>
      <div className="bg-[#1a3e3e] mt-[150px]">
        <div className="container w-[63%] mx-auto text-white flex justify-between pt-[100px] pb-[60px]">
          <div className="w-[40%]">
            <h3 className="text-[14px] mb-[16px]">Компания «РумТибет»</h3>
            <p className="text-[11px] mb-[70px]">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney.
            </p>
            <a className="text-[11px] pe-[20px] underline">info@domain.com</a>
            <a className="text-[11px] underline" href="">
              +7 (123) 456-78-90
            </a>
            <p className="mt-[20px]">
              <i class="fa-brands fa-telegram pe-[30px]"></i>
              <i class="fa-brands fa-vk pe-[30px]"></i>
              <i class="fa-brands fa-pinterest pe-[30px]"></i>
              <i class="fa-brands fa-skype pe-[30px]"></i>
            </p>
          </div>
          <div>
            <h3 className="text-14px mb-[16px]">Наши услуги</h3>
            <ul className="text-[11px]">
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Прогулки в горы
                летом
              </li>
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Зимние походы в
                горы
              </li>
              <li className="pb-4 text-yellow-400">
                <i class="fa-solid fa-chevron-right me-2"></i>Посещение храмов в
                горах
              </li>
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Экстремальные виды
                туризма
              </li>
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Походы в джунглях
                Амазонии
              </li>
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Поездка в Африку
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-14px mb-[16px]">Важно для путешествий</h3>
            <ul className="text-[11px]">
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Как собрать в
                долгий поход?
              </li>
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Жизненно важные
                предметы для похода
              </li>
              <li className="pb-4 text-yellow-400">
                <i class="fa-solid fa-chevron-right me-2"></i>Медицинская
                страховка, гарантии безопасности
              </li>
              <li className="pb-4">
                <i class="fa-solid fa-chevron-right me-2"></i>Если вы врач -
                загляните сюда
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#18121e]">
        <div className="container w-[63%] mx-auto flex justify-between items-center text-white text-[12px] pt-[25px] pb-[25px]">
          <p>ИП Константинопольский К.К., 2023</p>
          <p>Политика обработки персональных данных</p>
        </div>
      </div>
    </div>
  );
};

export default App;
