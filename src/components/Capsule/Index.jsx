import Button from "../Button";
import {useRef} from 'react';
import cap1 from '../../assets/images/cap1.png';
import cap2 from '../../assets/images/cap2.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { Power4} from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

 function Capsule() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".capsules",
            start: "top 60%",
            end: "bottom bottom",
            scrub: .5,
            }
        });
        tl.to(".capsule:nth-child(2)", {
            y: 0,
            marginTop:32,
            ease: Power4
        })
        tl.to(".capsule:nth-child(1)", {
            marginTop: 32,
            ease: Power4
        })
    }, container);


  return (
    <div data-color="white" ref={container} className="capsules  section w-full h-[100vh] 
    overflow-hidden mb-32 
    flex  items-start justify-between mt-60 px-10 gap-40">
        <div className="left w-1/3 h-full flex flex-col justify-between py-10 items-start " >
            <h1 className="w-2/3 font-[Sansita] text-xl leading-[2rem] font-medium">
                Stay up-to-date on the
                latest healthcare
                innovations and thought
                leadership.
            </h1>
            <div className="heading">
                <h1 className="font-[SansitaReg] text-6xl py-5 leading-[4.6rem]">Explore <br/> Our Insights</h1>
                <Button bgColor="bg-[#f5f19c]" text="VIEW ALL ARTICLES" />
            </div>
        </div>
        <div className="right font-[SansitaReg] w-2/3  h-full flex items-start justify-start gap-20  ">
            {/* 1st capsule */}
            <div   
                className="capsule w-fit flex flex-col items-center gap-4 p-6 -rotate-[16deg] translate-y-10
                rounded-full border-[1px] border-black">
                <div className="image w-60 h-60  rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap1} />
                </div>
                <div className="text text-center text-xl font-semibold mt-10 leading-[2.2rem]">
                    <h3>Equity in Tech: An <br/>
                        International Women&apos;s <br/> Day Conversation with <br/>Caroline 
                        Nieto, <br/> Significo&apos;s CPO
                    </h3>
                </div>
                <button className="bg-[#e9bbff] text-black px-4 rounded-full text-medium py-3 mb-10 mt-10 font-semibold">Thought Leadership</button>

            </div>
            {/* 2nd capsule */}
            <div   
                className="capsule w-fit flex flex-col items-center gap-4 p-6 -rotate-[16deg] translate-y-40
                rounded-full border-[1px] border-black">
                    <button className="bg-[#e9bbff] text-black px-4 rounded-full text-medium py-3 mb-6 mt-10 font-semibold">Thought Leadership</button>
                
                <div className="text text-center text-xl flex flex-col gap-6 mb-6 font-semibold leading-[2.2rem]">
                    <h3>How to Use Digital <br/>
                        Health Interventions&apos;s <br/>to Align Employee & <br/>Organizational Goals
                    </h3>
                    <h4 className="font-[Sansita] text-[.8rem] font-medium leading-[1.4rem] text-zinc-500">How to use personalized digital health <br/> interventions to empower employees while <br/>
                        achieving your organization&apos;s goals 
                    </h4>
                </div>
                <div className="image w-60 h-60  rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap2} />
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Capsule

// logo

{/* <div class="footer__logo--chars"><div class="footer__logo--char is--s" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 200 266" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-0.698546 174.066C8.9357 174.066 18.1398 174.017 27.344 174.176C27.983 174.176 29.0644 175.657 29.1504 176.527C30.0106 185.196 31.8662 193.608 35.2947 201.628C43.2208 220.178 57.0086 232.251 76.5474 237.222C97.9664 242.671 119.164 241.042 139.6 232.777C152.81 227.439 162.604 218.17 166.279 204.027C170.371 188.281 168.798 173.38 156.485 161.331C149.701 154.695 141.161 150.605 132.043 148.536C115.736 144.85 99.2936 141.765 82.8392 138.753C68.2526 136.084 53.6784 133.439 40.0258 127.353C20.9416 118.843 9.05858 104.873 6.65002 83.7021C4.70843 66.6335 6.94495 50.3852 16.1122 35.5083C22.0968 25.8108 30.4653 18.6111 40.419 13.2236C53.9487 5.90145 68.5967 2.57098 83.8346 1.37104C94.329 0.53842 104.848 0.366993 115.293 1.73836C134.734 4.30968 152.27 11.3135 166.34 25.321C177.117 36.0593 184.318 49.0261 187.857 63.7928C189.664 71.2863 190.622 78.9758 191.925 86.5918C192.023 87.1673 191.827 87.7795 191.741 88.7958C188.632 88.7958 185.584 88.7958 182.536 88.7958C176.908 88.7958 171.268 88.6244 165.64 88.8692C162.481 89.0039 161.646 87.6693 161.437 84.8531C160.528 72.8659 157.21 61.65 150.439 51.5729C141.382 38.0796 128.442 30.5861 112.651 27.8433C97.1799 25.1496 81.8561 26.0067 66.9746 31.1616C51.7859 36.4267 40.8983 46.1609 37.7401 62.4459C34.1641 80.8737 39.3008 95.9342 59.54 104.787C71.2633 109.917 83.7854 112.011 96.3075 114.129C110.685 116.566 125.149 118.684 139.367 121.856C153.363 124.978 166.832 129.802 178.211 139.096C188.128 147.201 194.8 157.327 197.049 169.939C198.278 176.808 199.384 183.849 199.224 190.779C198.708 213.101 190.549 232.043 172.251 245.744C160.528 254.523 147.072 259.58 132.78 262.494C120.614 264.98 108.313 266.045 95.9265 265.739C74.0406 265.2 53.3958 260.45 35.221 247.507C21.0154 237.381 11.6269 223.765 5.63007 207.615C2.21384 198.395 0.407426 188.832 -0.673968 179.11C-0.83372 177.616 -0.698546 176.098 -0.698546 174.078V174.066Z" fill="currentColor"></path>
</svg></div></div><div class="footer__logo--char is--i" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 30 269" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.984007 182.091C0.984007 154.554 1.04545 127.004 0.910279 99.4665C0.89799 96.3075 1.80734 95.4748 4.87948 95.5606C11.9331 95.7687 19.0113 95.7565 26.065 95.5606C28.9036 95.4871 29.7024 96.3809 29.6901 99.1849C29.6041 137.951 29.6287 176.716 29.6287 215.47C29.6287 231.889 29.5549 248.321 29.6901 264.741C29.7147 267.729 28.793 268.561 25.8684 268.475C18.7041 268.279 11.5399 268.292 4.37567 268.475C1.6476 268.537 0.922561 267.704 0.922561 265.01C1.02087 237.362 0.984007 209.727 0.984007 182.079V182.091Z" fill="currentColor"></path>
<path d="M1.27259 0.371622H29.3643C29.4626 1.26546 29.6346 2.13481 29.6346 3.00416C29.6592 13.4976 29.5855 24.0032 29.6961 34.4967C29.7207 36.9088 28.9588 37.6435 26.5502 37.5945C18.8821 37.4598 11.2141 37.5088 3.54598 37.57C1.77643 37.5822 0.965388 37.117 0.977677 35.1823C1.05141 24.0767 1.01453 12.9711 1.0391 1.85319C1.0391 1.46137 1.16201 1.06955 1.28489 0.359375L1.27259 0.371622Z" fill="currentColor"></path>
</svg></div></div><div class="footer__logo--char top-space is--g" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 168 260" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.84877 195.7H32.773C34.0019 199.704 34.985 203.83 36.4965 207.761C41.8666 221.695 52.4716 229.886 66.5666 233.645C72.2317 235.163 78.2039 236.265 84.0287 236.278C98.9962 236.314 113.202 233.119 124.286 222.221C130.467 216.148 134.731 208.556 136.464 199.998C137.656 194.145 138.418 188.121 138.504 182.17C138.737 164.93 138.553 147.677 138.504 130.437C138.504 128.099 138.246 125.76 138.123 123.581C137.631 134.686 134.817 145.192 128.452 154.669C120.845 166.007 109.994 172.631 97.1037 176.244C87.9733 178.803 78.5726 179.672 69.1472 178.999C40.2568 176.929 19.7349 162.836 8.74889 135.898C1.49863 118.107 -0.000570729 99.4102 0.994804 80.3947C1.56008 69.4727 3.40335 58.8201 6.78271 48.388C15.7042 20.8136 37.1232 2.47159 67.2302 0.463513C79.359 -0.344615 91.1684 0.500238 102.523 4.62659C125.982 13.1364 136.353 31.0744 138.602 54.9509C138.602 39.0455 138.664 23.1278 138.541 7.22241C138.516 4.45518 139.229 3.48788 142.129 3.5491C149.699 3.73276 157.281 3.68377 164.863 3.57357C167.149 3.53684 167.824 4.28375 167.824 6.5612C167.775 66.0566 168.046 125.552 167.616 185.047C167.48 202.973 162.221 219.736 150.375 233.902C141.158 244.91 129.361 251.963 115.721 255.856C97.2881 261.109 78.548 261.158 59.9185 257.13C41.4856 253.15 26.1618 244.102 15.6919 227.927C9.99003 219.111 7.10223 209.34 5.60302 199.092C5.517 198.492 5.55385 197.867 5.59072 197.255C5.6153 196.851 5.71359 196.459 5.84877 195.724V195.7ZM141.023 90.1657C140.851 79.4886 139.708 69.6197 136.464 60.0936C133.257 50.7144 128.599 42.1188 120.845 35.6783C108.716 25.6012 94.5969 22.4054 79.0518 23.9849C58.5053 26.0787 44.4349 36.6211 36.3859 55.453C31.6916 66.4361 30.4628 78.0315 30.4259 89.7494C30.3891 100.439 31.7531 111.006 35.5503 121.144C39.6424 132.041 46.0201 141.078 56.0599 147.322C66.2103 153.628 77.2945 155.575 89.1039 154.987C108.716 154.02 123.328 145.253 132.556 127.891C138.934 115.891 140.642 102.851 141.023 90.178V90.1657Z" fill="currentColor"></path>
</svg></div></div><div class="footer__logo--char top-space is--n" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 152 177" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M151.362 176.323C142.146 176.323 133.151 176.359 124.168 176.249C123.541 176.249 122.681 175.208 122.398 174.474C122.091 173.678 122.325 172.662 122.325 171.743C122.325 137.361 122.362 102.979 122.312 68.5968C122.3 58.0176 120.076 48.014 113.759 39.2103C107.91 31.0433 99.6645 26.7211 90.0917 24.7007C77.8031 22.1172 65.9569 23.3783 54.6637 29.1577C46.1109 33.5289 40.323 40.4347 36.194 48.8344C31.7701 57.834 29.8531 67.4213 29.8162 77.4372C29.6811 109.15 29.423 140.851 29.3861 172.564C29.3861 175.796 28.403 176.482 25.4046 176.396C18.351 176.2 11.2727 176.335 4.21911 176.323C3.12542 176.323 2.03175 176.212 0.77832 176.151V3.7751C2.11777 3.68939 3.30977 3.56696 4.50176 3.55471C11.2605 3.53022 18.0192 3.53022 24.7779 3.55471C30.0005 3.56696 29.2878 3.29757 29.3001 7.92594C29.3615 24.9578 29.3861 42.002 29.423 59.0339C29.423 59.842 29.423 60.6379 29.423 61.9113C30.2586 55.5933 30.6641 49.6915 31.8561 43.9489C37.0542 18.9214 54.7006 2.57516 81.4159 0.407904C92.832 -0.522668 103.855 0.554846 114.534 4.43631C129.98 10.0565 140.057 21.1254 145.943 36.1982C149.163 44.4142 150.945 52.9485 151.006 61.7767C151.24 99.3913 151.412 137.018 151.596 174.633C151.596 175.025 151.498 175.417 151.375 176.31L151.362 176.323Z" fill="currentColor"></path>
</svg></div></div><div class="footer__logo--char is--i" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 30 269" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.984007 182.091C0.984007 154.554 1.04545 127.004 0.910279 99.4665C0.89799 96.3075 1.80734 95.4748 4.87948 95.5606C11.9331 95.7687 19.0113 95.7565 26.065 95.5606C28.9036 95.4871 29.7024 96.3809 29.6901 99.1849C29.6041 137.951 29.6287 176.716 29.6287 215.47C29.6287 231.889 29.5549 248.321 29.6901 264.741C29.7147 267.729 28.793 268.561 25.8684 268.475C18.7041 268.279 11.5399 268.292 4.37567 268.475C1.6476 268.537 0.922561 267.704 0.922561 265.01C1.02087 237.362 0.984007 209.727 0.984007 182.079V182.091Z" fill="currentColor"></path>
<path d="M1.27259 0.371622H29.3643C29.4626 1.26546 29.6346 2.13481 29.6346 3.00416C29.6592 13.4976 29.5855 24.0032 29.6961 34.4967C29.7207 36.9088 28.9588 37.6435 26.5502 37.5945C18.8821 37.4598 11.2141 37.5088 3.54598 37.57C1.77643 37.5822 0.965388 37.117 0.977677 35.1823C1.05141 24.0767 1.01453 12.9711 1.0391 1.85319C1.0391 1.46137 1.16201 1.06955 1.28489 0.359375L1.27259 0.371622Z" fill="currentColor"></path>
</svg></div></div><div class="footer__logo--char is--fi" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 210 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M209.36 0.273438C209.36 6.95886 209.36 13.2525 209.36 19.5583C209.36 24.1622 207.038 26.4641 202.392 26.4641C182.829 26.4641 163.278 26.5131 143.715 26.4151C141.281 26.4151 139.745 27.1498 138.369 29.1089C133.146 36.5045 130.185 44.8919 128.329 53.5487C125.466 66.9685 123.266 80.523 120.809 94.0285C120.747 94.3958 120.907 94.8121 121.018 95.6325C122.455 95.6325 123.856 95.6325 125.257 95.6325C151.886 95.6325 178.516 95.6325 205.133 95.6325C209.336 95.6325 209.348 95.6448 209.348 99.7956C209.348 154.699 209.323 209.603 209.409 264.519C209.409 267.543 208.721 268.621 205.502 268.511C198.448 268.266 191.37 268.29 184.304 268.511C181.404 268.596 180.728 267.605 180.728 264.862C180.801 215.162 180.777 165.462 180.777 115.762C180.777 112.473 179.106 110.828 175.763 110.828C157.638 110.828 139.512 110.889 121.386 110.767C118.56 110.754 117.626 111.587 117.159 114.428C114.455 130.651 111.457 146.826 108.618 163.025C105.915 178.417 103.31 193.832 100.594 209.223C96.8951 230.223 93.2208 251.222 89.3499 272.196C88.0104 279.482 86.3269 286.718 84.3976 293.869C82.1365 302.256 76.9753 308.782 69.8602 313.668C53.627 324.822 37.3078 335.855 21.0132 346.948C20.6814 347.181 20.2512 347.315 19.9809 347.597C14.5125 353.462 7.49571 352.433 0.257742 352.103C0.184011 350.523 0.0611578 349.03 0.0611578 347.548C0.0365806 340.716 0.134841 333.871 0.0119555 327.039C-0.0249102 324.724 0.773862 324.088 3.02267 324.1C16.1346 324.186 29.2342 324.051 42.3461 324.222C45.025 324.259 46.6962 323.439 47.5442 321.076C49.8175 314.77 52.8037 308.599 54.0694 302.085C58.5547 278.931 62.4748 255.679 66.5423 232.451C70.1306 211.954 73.5959 191.432 77.2088 170.923C80.5021 152.226 83.906 133.553 87.2608 114.856C87.9613 110.95 87.863 110.828 83.9798 110.828C74.7634 110.828 65.5469 110.754 56.3305 110.865C53.8974 110.901 53.074 110.118 53.2338 107.705C53.4181 104.755 53.4427 101.779 53.2338 98.8283C53.0494 96.1835 54.1309 95.5713 56.5886 95.5958C66.825 95.706 77.0736 95.5713 87.31 95.6815C89.7677 95.706 90.8245 95.0938 91.4021 92.4857C93.7123 82.0658 96.0226 71.6091 98.9473 61.3483C102.351 49.4223 109.786 40.3492 120.243 33.5903C136.968 22.7908 153.57 11.8199 170.233 0.946881C170.786 0.57955 171.536 0.322416 172.187 0.322416C184.365 0.285683 196.543 0.297931 209.336 0.297931L209.36 0.273438Z" fill="currentColor"></path>
</svg></div></div><div class="footer__logo--char top-space is--c" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 166 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M165.154 115.08C161.836 133.031 154.684 148.434 141.388 160.446C130.672 170.131 117.818 175.702 103.576 178.151C87.7235 180.869 71.9819 180.465 56.5228 176.008C31.2944 168.723 14.6556 152.426 6.32394 127.619C2.57593 116.44 0.941524 104.954 0.695752 93.1753C0.425404 79.6697 1.65428 66.4091 5.78324 53.5035C12.161 33.5697 24.1424 18.1051 43.1405 8.79937C53.4629 3.74245 64.6209 1.31806 76.2091 0.436469C88.3993 -0.494103 100.307 0.436463 112.006 3.64449C136.571 10.3789 152.718 26.1251 161.074 49.9527C162.241 53.2831 163.114 56.7238 164.232 60.4951C162.93 60.642 162.057 60.8134 161.197 60.8134C153.418 60.8379 145.627 60.7522 137.849 60.8869C135.723 60.9236 134.875 60.1155 134.137 58.2176C129.529 46.1814 122.549 36.0186 110.826 29.7372C92.1474 19.7213 65.1002 21.5702 49.1374 36.3859C40.8303 44.0999 35.9886 53.8953 33.236 64.7928C30.2375 76.6576 29.4019 88.7061 30.729 100.828C32.1422 113.783 35.3865 126.174 43.5215 136.826C50.7717 146.316 60.2585 152.205 71.9573 154.519C84.934 157.079 97.542 156.307 109.622 150.393C122.131 144.259 129.664 133.973 134.211 121.252C136.386 115.154 136.19 115.08 142.629 115.08C149.99 115.08 157.338 115.08 165.129 115.08H165.154Z" fill="currentColor"></path>
</svg></div></div><div class="footer__logo--char top-space is--o" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div class="svg w-embed"><svg width="100%" height="100%" viewBox="0 0 170 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M170.09 88.973C169.279 105.013 167.62 119.817 161.611 133.775C153.488 152.68 139.995 166.137 120.616 173.545C106.914 178.785 92.7332 180.304 78.1589 179.496C66.8043 178.871 55.8921 176.606 45.4959 172.039C28.8695 164.741 16.8267 152.754 9.15863 136.42C3.28469 123.906 0.261719 110.633 0.261719 96.8706C0.261719 87.0506 0.446005 77.1204 1.90835 67.4351C5.43516 44.0974 16.2614 24.8982 36.7956 12.1274C48.4575 4.86645 61.5202 1.76864 75.136 0.470734C85.8147 -0.545548 96.346 0.140132 106.804 2.24616C135.719 8.04999 154.79 25.0697 164.216 52.8154C167.202 61.6191 168.849 70.7166 169.254 80.0346C169.402 83.365 169.881 86.671 170.102 88.9607L170.09 88.973ZM140.351 85.2629C140.425 79.4346 139.024 69.5044 135.817 59.8681C132.044 48.5298 125.765 38.8568 115.639 32.2326C104.37 24.8492 91.8484 22.6453 78.4539 23.9432C54.9459 26.2329 40.1381 40.1669 33.6374 61.1905C27.9233 79.6673 27.8864 98.548 33.2565 117.196C37.9507 133.518 47.5358 145.995 63.8919 152.215C75.6766 156.697 87.8915 157.113 100.082 154.076C114.201 150.562 124.745 142.322 131.602 129.404C138.238 116.915 140.29 103.483 140.376 85.2629H140.351Z" fill="currentColor"></path>
</svg></div></div></div> */}
