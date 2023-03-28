import Pattern from '@/assets/svg/Pattern'
import Image from 'next/image';
import React from 'react';
import Group from '../assets/images/group.png';
import Button from './Button';

const Community = () => {
  return (
      <div className='mt-10 lg:h-[971px] h-[459px] text-white bg-primaryblue relative font-font-satoshi'>
          <div className='absolute w-full'>
              <div className='text-white relative z-50 lg:mt-[86px] mt-10 flex justify-center mx-auto flex-col items-center'>
                  <p className='font-font-satoshi uppercase lg:text-base text-[8px] font-medium'>Join Our Community</p>
                  <h1 className=' font-font-clash lg:text-[56px] text-[24px] lg:w-[80%] w-[90%] mt-2 text-center font-bold leading-[29.52px] lg:leading-[68.88px]'>Are you  ready to connect with the future talent of the tech world</h1>
                  <p className='capitalize lg:text-base text-[8px] font-medium mt-4'>Meet up with other techstars and grow together</p>
              </div>
          </div>
          <div className='absolute lg:bottom-24 bottom-6 flex justify-center mx-auto w-full'>
              <Button
                  name="Join Our Community"
                  bg='bg-white'
                  color='text-primaryblue'
                  border='border-none'
                  height='lg:h-[54px] h-[27px]'
                  width='lg:w-[220px] w-[110px]'
                  type='button'
                  handleClick={() => {}}
              />
          </div>
          <div className='absolute w-full lg:bottom-52 bottom-20'>
              <div className='flex justify-center items-center mx-auto lg:w-[70%] w-[95%]'>
                  <Image className='lg:h-[454.2px] h-[207.13px] w-full' src={Group} alt="group" />
            </div>
          </div>
          <div> 
              <svg className='lg:h-[971px] h-[459px]' viewBox="0 0 1728 971" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1476_642)">
<path d="M-1374.51 775.394C-1338.17 734.016 -1189 1011.13 -1152.64 969.729C-1116.28 928.328 -1265.47 651.237 -1229.11 609.837C-1192.75 568.437 -1043.6 845.572 -1007.24 804.172C-970.875 762.772 -1120.07 485.681 -1083.71 444.281C-1047.35 402.881 -898.195 680.016 -861.835 638.616C-825.475 597.216 -974.673 320.125 -938.313 278.725C-901.953 237.324 -752.794 514.46 -716.434 473.06C-680.074 431.659 -829.272 154.568 -792.932 113.19C-756.591 71.8124 -607.393 348.903 -570.975 307.437C-534.557 265.97 -683.813 -11.0545 -647.473 -52.4324C-611.132 -93.8104 -461.915 183.258 -425.652 141.969C-389.39 100.68 -538.491 -176.522 -502.033 -218.033C-465.576 -259.544 -316.514 17.702 -280.174 -23.676C-243.833 -65.054 -392.993 -342.189 -356.652 -383.567C-320.312 -424.945 -171.133 -147.832 -134.773 -189.232C-98.4135 -230.632 -247.611 -507.723 -211.271 -549.101C-174.931 -590.479 -25.7326 -313.388 10.6273 -354.789C46.9872 -396.189 -102.211 -673.28 -65.8511 -714.68C-29.4912 -756.08 119.668 -478.945 156.028 -520.345C192.388 -561.745 43.1897 -838.836 79.5496 -880.236C115.909 -921.636 265.068 -644.501 301.428 -685.901C337.788 -727.301 188.59 -1004.39 224.95 -1045.79C261.31 -1087.19 410.469 -810.057 446.829 -851.458C483.189 -892.858 334.01 -1169.97 370.351 -1211.35C406.691 -1252.73 555.889 -975.636 592.23 -1017.01C628.57 -1058.39 479.411 -1335.53 515.751 -1376.91C552.092 -1418.28 701.29 -1141.19 737.65 -1182.59C774.01 -1223.99 624.812 -1501.08 661.171 -1542.48C697.531 -1583.88 846.71 -1306.77 883.05 -1348.15C919.391 -1389.53 770.231 -1666.66 806.591 -1708.06C842.951 -1749.46 992.13 -1472.35 1028.49 -1513.75C1064.85 -1555.15 915.671 -1832.26 952.011 -1873.64" stroke="#A0A3BD" stroke-opacity="0.1" stroke-width="1.898" stroke-miterlimit="10"/>
<path d="M-1068.33 1344.17C-1031.99 1302.79 -882.807 1579.91 -846.447 1538.5C-810.087 1497.1 -959.285 1220.01 -922.926 1178.61C-886.566 1137.21 -737.407 1414.35 -701.047 1372.95C-664.687 1331.55 -813.885 1054.46 -777.525 1013.06C-741.165 971.657 -592.006 1248.79 -555.646 1207.39C-519.286 1165.99 -668.484 888.901 -632.124 847.501C-595.765 806.101 -446.605 1083.24 -410.246 1041.84C-373.886 1000.44 -523.084 723.345 -486.743 681.967C-450.403 640.589 -301.205 917.68 -264.787 876.213C-228.368 834.746 -377.625 557.722 -341.284 516.344C-304.944 474.966 -155.726 752.035 -119.464 710.745C-83.2014 669.456 -232.302 392.254 -195.845 350.743C-159.388 309.232 -10.3258 586.478 26.0146 545.1C62.355 503.722 -86.8041 226.587 -50.4636 185.209C-14.1232 143.831 135.055 420.944 171.415 379.544C207.775 338.144 58.577 61.053 94.9174 19.675C131.258 -21.703 280.456 255.388 316.816 213.988C353.176 172.588 203.978 -104.503 240.337 -145.903C276.697 -187.304 425.856 89.8316 462.216 48.4314C498.576 7.03127 349.378 -270.06 385.738 -311.46C422.098 -352.86 571.257 -75.7247 607.617 -117.125C643.977 -158.525 494.779 -435.616 531.139 -477.016C567.499 -518.416 716.658 -241.281 753.017 -282.681C789.377 -324.081 640.199 -601.195 676.539 -642.573C712.88 -683.951 862.078 -406.86 898.418 -448.238C934.759 -489.616 785.599 -766.751 821.94 -808.129C858.28 -849.507 1007.48 -572.416 1043.84 -613.816C1080.2 -655.216 931 -932.307 967.36 -973.707C1003.72 -1015.11 1152.9 -737.994 1189.24 -779.372C1225.58 -820.75 1076.42 -1097.89 1112.78 -1139.29C1149.14 -1180.69 1298.32 -903.573 1334.68 -944.973C1371.04 -986.373 1221.86 -1263.49 1258.2 -1304.86" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-530.445 2343.33C-494.105 2301.96 -344.926 2579.07 -308.566 2537.67C-272.207 2496.27 -421.405 2219.18 -385.045 2177.78C-348.685 2136.38 -199.526 2413.51 -163.166 2372.11C-126.806 2330.71 -276.004 2053.62 -239.644 2012.22C-203.284 1970.82 -54.1252 2247.96 -17.7653 2206.56C18.5946 2165.16 -130.603 1888.06 -94.2436 1846.66C-57.8837 1805.26 91.2754 2082.4 127.635 2041C163.995 1999.6 14.7971 1722.51 51.1375 1681.13C87.4779 1639.75 236.676 1916.84 273.094 1875.38C309.513 1833.91 160.256 1556.89 196.597 1515.51C232.937 1474.13 382.154 1751.2 418.417 1709.91C454.679 1668.62 305.579 1391.42 342.036 1349.91C378.493 1308.4 527.555 1585.64 563.895 1544.26C600.236 1502.89 451.077 1225.75 487.417 1184.37C523.758 1142.99 672.936 1420.11 709.296 1378.71C745.656 1337.31 596.458 1060.22 632.798 1018.84C669.139 977.46 818.337 1254.55 854.697 1213.15C891.056 1171.75 741.858 894.66 778.218 853.26C814.578 811.859 963.737 1088.99 1000.1 1047.59C1036.46 1006.19 887.259 729.103 923.619 687.703C959.979 646.303 1109.14 923.438 1145.5 882.038C1181.86 840.638 1032.66 563.547 1069.02 522.147C1105.38 480.747 1254.54 757.882 1290.9 716.482C1327.26 675.082 1178.08 397.969 1214.42 356.591C1250.76 315.213 1399.96 592.303 1436.3 550.925C1472.64 509.547 1323.48 232.412 1359.82 191.034C1396.16 149.656 1545.36 426.747 1581.72 385.347C1618.08 343.947 1468.88 66.8558 1505.24 25.4557C1541.6 -15.9445 1690.78 261.169 1727.12 219.791C1763.46 178.413 1614.3 -98.7225 1650.66 -140.123C1687.02 -181.523 1836.2 95.5901 1872.56 54.1899C1908.92 12.7898 1759.74 -264.323 1796.08 -305.701" stroke="#A0A3BD" stroke-opacity="0.1" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-1225.33 1052.51C-1188.99 1011.13 -1039.82 1288.24 -1003.46 1246.84C-967.096 1205.44 -1116.29 928.35 -1079.93 886.95C-1043.57 845.55 -894.415 1122.69 -858.056 1081.29C-821.696 1039.88 -970.894 762.794 -934.534 721.394C-898.174 679.994 -749.015 957.129 -712.655 915.729C-676.295 874.329 -825.493 597.238 -789.133 555.837C-752.773 514.437 -603.614 791.573 -567.254 750.172C-530.895 708.772 -680.093 431.681 -643.752 390.303C-607.412 348.925 -458.214 626.016 -421.795 584.549C-385.377 543.083 -534.634 266.058 -498.293 224.68C-461.953 183.302 -312.735 460.371 -276.473 419.082C-240.21 377.793 -389.311 100.591 -352.854 59.0797C-316.396 17.5686 -167.335 294.815 -130.994 253.437C-94.6538 212.059 -243.813 -65.0765 -207.472 -106.455C-171.132 -147.833 -21.9536 129.281 14.4063 87.8805C50.7662 46.4804 -98.4318 -230.611 -62.0914 -271.989C-25.751 -313.367 123.447 -36.2757 159.807 -77.6759C196.167 -119.076 46.9687 -396.167 83.3286 -437.567C119.688 -478.967 268.848 -201.832 305.207 -243.232C341.567 -284.632 192.369 -561.723 228.729 -603.123C265.089 -644.524 414.248 -367.388 450.608 -408.788C486.968 -450.189 337.77 -727.28 374.13 -768.68C410.49 -810.08 559.649 -532.945 596.009 -574.345C632.369 -615.745 483.19 -892.858 519.53 -934.236C555.871 -975.614 705.069 -698.523 741.409 -739.901C777.75 -781.279 628.591 -1058.41 664.931 -1099.79C701.271 -1141.17 850.469 -864.079 886.829 -905.48C923.189 -946.88 773.991 -1223.97 810.351 -1265.37C846.711 -1306.77 995.889 -1029.66 1032.23 -1071.04C1068.57 -1112.41 919.411 -1389.55 955.771 -1430.95C992.131 -1472.35 1141.31 -1195.24 1177.67 -1236.64C1214.03 -1278.04 1064.85 -1555.15 1101.19 -1596.53" stroke="#A0A3BD" stroke-opacity="0.1" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-687.456 2051.67C-651.116 2010.29 -501.937 2287.41 -465.577 2246C-429.217 2204.6 -578.415 1927.51 -542.055 1886.11C-505.696 1844.71 -356.537 2121.85 -320.177 2080.45C-283.817 2039.05 -433.015 1761.96 -396.655 1720.56C-360.295 1679.16 -211.136 1956.29 -174.776 1914.89C-138.416 1873.49 -287.614 1596.4 -251.254 1555C-214.894 1513.6 -65.7354 1790.74 -29.3755 1749.34C6.9844 1707.94 -142.214 1430.84 -105.873 1389.47C-69.5328 1348.09 79.6652 1625.18 116.084 1583.71C152.502 1542.25 3.2454 1265.22 39.5858 1223.84C75.9262 1182.47 225.144 1459.53 261.406 1418.25C297.669 1376.96 148.568 1099.75 185.025 1058.24C221.483 1016.73 370.544 1293.98 406.885 1252.6C443.225 1211.22 294.066 934.087 330.406 892.709C366.747 851.331 515.925 1128.44 552.285 1087.04C588.645 1045.64 439.447 768.553 475.788 727.175C512.128 685.797 661.326 962.888 697.686 921.488C734.046 880.088 584.848 602.997 621.208 561.597C657.567 520.196 806.727 797.332 843.086 755.931C879.446 714.531 730.248 437.44 766.608 396.04C802.968 354.64 952.127 631.775 988.487 590.375C1024.85 548.975 875.649 271.884 912.009 230.484C948.369 189.084 1097.53 466.219 1133.89 424.819C1170.25 383.419 1021.07 106.305 1057.41 64.9274C1093.75 23.5495 1242.95 300.64 1279.29 259.262C1315.63 217.884 1166.47 -59.2508 1202.81 -100.629C1239.15 -142.007 1388.35 135.084 1424.71 93.6839C1461.07 52.2837 1311.87 -224.807 1348.23 -266.207C1384.59 -307.608 1533.77 -30.4944 1570.11 -71.8724C1606.45 -113.25 1457.29 -390.386 1493.65 -431.786C1530.01 -473.186 1679.19 -196.073 1715.55 -237.473C1751.91 -278.873 1602.73 -555.986 1639.07 -597.364" stroke="#A0A3BD" stroke-opacity="0.1" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M82.1162 3481.22C118.457 3439.85 267.635 3716.96 303.995 3675.56C340.355 3634.16 191.157 3357.07 227.517 3315.67C263.877 3274.27 413.036 3551.4 449.396 3510C485.755 3468.6 336.558 3191.51 372.917 3150.11C409.277 3108.71 558.436 3385.85 594.796 3344.45C631.156 3303.05 481.958 3025.96 518.318 2984.56C554.678 2943.16 703.837 3220.29 740.197 3178.89C776.557 3137.49 627.359 2860.4 663.699 2819.02C700.039 2777.64 849.237 3054.73 885.656 3013.27C922.074 2971.8 772.818 2694.78 809.158 2653.4C845.498 2612.02 994.716 2889.09 1030.98 2847.8C1067.24 2806.51 918.14 2529.31 954.598 2487.8C991.055 2446.29 1140.12 2723.53 1176.46 2682.16C1212.8 2640.78 1063.64 2363.64 1099.98 2322.26C1136.32 2280.89 1285.5 2558 1321.86 2516.6C1358.22 2475.2 1209.02 2198.11 1245.36 2156.73C1281.7 2115.35 1430.9 2392.44 1467.26 2351.04C1503.62 2309.64 1354.42 2032.55 1390.78 1991.15C1427.14 1949.75 1576.3 2226.89 1612.66 2185.49C1649.02 2144.09 1499.82 1866.99 1536.18 1825.59C1572.54 1784.19 1721.7 2061.33 1758.06 2019.93C1794.42 1978.53 1645.22 1701.44 1681.58 1660.04C1717.94 1618.64 1867.1 1895.77 1903.46 1854.37C1939.82 1812.97 1790.64 1535.86 1826.98 1494.48C1863.32 1453.1 2012.52 1730.2 2048.86 1688.82C2085.2 1647.44 1936.04 1370.3 1972.38 1328.93C2008.72 1287.55 2157.92 1564.64 2194.28 1523.24C2230.64 1481.84 2081.44 1204.75 2117.8 1163.35C2154.16 1121.95 2303.34 1399.06 2339.68 1357.68C2376.02 1316.3 2226.86 1039.17 2263.22 997.769C2299.58 956.369 2448.76 1233.48 2485.12 1192.08C2521.48 1150.68 2372.3 873.568 2408.64 832.19" stroke="#A0A3BD" stroke-opacity="0.1" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-919.146 1621.28C-882.806 1579.91 -733.628 1857.02 -697.268 1815.62C-660.908 1774.22 -810.106 1497.13 -773.746 1455.73C-737.386 1414.33 -588.227 1691.46 -551.867 1650.06C-515.507 1608.66 -664.705 1331.57 -628.345 1290.17C-591.985 1248.77 -442.826 1525.91 -406.466 1484.51C-370.107 1443.11 -519.305 1166.01 -482.945 1124.61C-446.585 1083.21 -297.426 1360.35 -261.066 1318.95C-224.706 1277.55 -373.904 1000.46 -337.564 959.08C-301.223 917.702 -152.025 1194.79 -115.607 1153.33C-79.1886 1111.86 -228.445 834.835 -192.105 793.457C-155.764 752.079 -6.54674 1029.15 29.7158 987.859C65.9783 946.569 -83.1224 669.368 -46.6651 627.857C-10.2079 586.346 138.854 863.592 175.194 822.214C211.535 780.836 62.3756 503.7 98.716 462.322C135.056 420.944 284.235 698.058 320.595 656.657C356.955 615.257 207.757 338.166 244.097 296.788C280.437 255.41 429.636 532.501 465.995 491.101C502.355 449.701 353.157 172.61 389.517 131.21C425.877 89.8096 575.036 366.945 611.396 325.545C647.756 284.145 498.558 7.05357 534.918 -34.3466C571.278 -75.7468 720.437 201.389 756.796 159.988C793.156 118.588 643.959 -158.503 680.318 -199.903C716.678 -241.303 865.837 35.8322 902.197 -5.56795C938.557 -46.9681 789.379 -324.081 825.719 -365.459C862.059 -406.837 1011.26 -129.746 1047.6 -171.124C1083.94 -212.502 934.779 -489.638 971.119 -531.016C1007.46 -572.394 1156.66 -295.303 1193.02 -336.703C1229.38 -378.103 1080.18 -655.194 1116.54 -696.594C1152.9 -737.994 1302.08 -460.881 1338.42 -502.259C1374.76 -543.637 1225.6 -820.772 1261.96 -862.172C1298.32 -903.573 1447.5 -626.46 1483.86 -667.86C1520.22 -709.26 1371.04 -986.373 1407.38 -1027.75" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-149.574 3050.83C-113.234 3009.46 35.9447 3286.57 72.3046 3245.17C108.664 3203.77 -40.5335 2926.68 -4.17363 2885.28C32.1862 2843.88 181.345 3121.01 217.705 3079.61C254.065 3038.21 104.867 2761.12 141.227 2719.72C177.587 2678.32 326.746 2955.46 363.106 2914.06C399.466 2872.66 250.268 2595.56 286.628 2554.16C322.987 2512.76 472.146 2789.9 508.506 2748.5C544.866 2707.1 395.668 2430.01 432.009 2388.63C468.349 2347.25 617.547 2624.34 653.965 2582.88C690.384 2541.41 541.127 2264.39 577.468 2223.01C613.808 2181.63 763.026 2458.7 799.288 2417.41C835.551 2376.12 686.45 2098.92 722.907 2057.41C759.364 2015.9 908.426 2293.14 944.767 2251.76C981.107 2210.39 831.948 1933.25 868.288 1891.87C904.629 1850.49 1053.81 2127.61 1090.17 2086.21C1126.53 2044.81 977.329 1767.72 1013.67 1726.34C1050.01 1684.96 1199.21 1962.05 1235.57 1920.65C1271.93 1879.25 1122.73 1602.16 1159.09 1560.76C1195.45 1519.36 1344.61 1796.49 1380.97 1755.09C1417.33 1713.69 1268.13 1436.6 1304.49 1395.2C1340.85 1353.8 1490.01 1630.94 1526.37 1589.54C1562.73 1548.14 1413.53 1271.05 1449.89 1229.65C1486.25 1188.25 1635.41 1465.38 1671.77 1423.98C1708.13 1382.58 1558.95 1105.47 1595.29 1064.09C1631.63 1022.71 1780.83 1299.8 1817.17 1258.43C1853.51 1217.05 1704.35 939.912 1740.69 898.534C1777.03 857.156 1926.23 1134.25 1962.59 1092.85C1998.95 1051.45 1849.75 774.356 1886.11 732.956C1922.47 691.555 2071.65 968.669 2107.99 927.291C2144.33 885.913 1995.17 608.778 2031.53 567.377C2067.89 525.977 2217.07 803.09 2253.43 761.69C2289.79 720.29 2140.61 443.177 2176.95 401.799" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-381.266 2620.45C-344.925 2579.07 -195.747 2856.18 -159.387 2814.78C-123.027 2773.38 -272.225 2496.29 -235.865 2454.89C-199.505 2413.49 -50.3461 2690.62 -13.9862 2649.22C22.3737 2607.82 -126.824 2330.73 -90.4645 2289.33C-54.1046 2247.93 95.0545 2525.07 131.414 2483.67C167.774 2442.27 18.5762 2165.18 54.9361 2123.78C91.296 2082.38 240.455 2359.51 276.815 2318.11C313.175 2276.71 163.977 1999.62 200.317 1958.24C236.658 1916.86 385.856 2193.96 422.274 2152.49C458.692 2111.02 309.436 1834 345.776 1792.62C382.117 1751.24 531.334 2028.31 567.597 1987.02C603.859 1945.73 454.758 1668.53 491.216 1627.02C527.673 1585.51 676.735 1862.75 713.075 1821.38C749.416 1780 600.256 1502.86 636.597 1461.48C672.937 1420.11 822.116 1697.22 858.476 1655.82C894.836 1614.42 745.638 1337.33 781.978 1295.95C818.318 1254.57 967.516 1531.66 1003.88 1490.26C1040.24 1448.86 891.038 1171.77 927.398 1130.37C963.758 1088.97 1112.92 1366.11 1149.28 1324.71C1185.64 1283.31 1036.44 1006.22 1072.8 964.816C1109.16 923.415 1258.32 1200.55 1294.68 1159.15C1331.04 1117.75 1181.84 840.659 1218.2 799.259C1254.56 757.859 1403.72 1034.99 1440.08 993.594C1476.44 952.194 1327.26 675.081 1363.6 633.703C1399.94 592.325 1549.14 869.416 1585.48 828.038C1621.82 786.66 1472.66 509.525 1509 468.147C1545.34 426.769 1694.54 703.859 1730.9 662.459C1767.26 621.059 1618.06 343.968 1654.42 302.568C1690.78 261.168 1839.96 538.281 1876.3 496.903C1912.64 455.525 1763.48 178.39 1799.84 136.99C1836.2 95.5895 1985.38 372.702 2021.74 331.302C2058.1 289.902 1908.92 12.789 1945.26 -28.589" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-1300.02 913.781C-1263.68 872.403 -1114.5 1149.52 -1078.14 1108.12C-1041.78 1066.72 -1190.98 789.625 -1154.62 748.225C-1118.26 706.825 -969.097 983.96 -932.737 942.56C-896.377 901.16 -1045.58 624.069 -1009.22 582.669C-972.856 541.268 -823.696 818.404 -787.337 777.004C-750.977 735.603 -900.175 458.512 -863.815 417.112C-827.455 375.712 -678.296 652.847 -641.936 611.447C-605.576 570.047 -754.774 292.956 -718.434 251.578C-682.093 210.2 -532.895 487.291 -496.477 445.824C-460.059 404.358 -609.315 127.333 -572.975 85.9552C-536.634 44.5773 -387.417 321.646 -351.154 280.357C-314.892 239.067 -463.992 -38.1344 -427.535 -79.6454C-391.078 -121.156 -242.016 156.09 -205.676 114.712C-169.335 73.3337 -318.494 -203.802 -282.154 -245.18C-245.814 -286.558 -96.6352 -9.44439 -60.2753 -50.8446C-23.9154 -92.2447 -173.113 -369.336 -136.773 -410.714C-100.433 -452.092 48.7654 -175.001 85.1253 -216.401C121.485 -257.801 -27.7129 -534.892 8.64698 -576.292C45.0069 -617.692 194.166 -340.557 230.526 -381.957C266.886 -423.357 117.688 -700.448 154.048 -741.849C190.408 -783.249 339.566 -506.113 375.926 -547.513C412.286 -588.914 263.088 -866.005 299.448 -907.405C335.808 -948.805 484.967 -671.67 521.327 -713.07C557.687 -754.47 408.508 -1031.58 444.849 -1072.96C481.189 -1114.34 630.387 -837.248 666.728 -878.626C703.068 -920.004 553.909 -1197.14 590.249 -1238.52C626.59 -1279.9 775.788 -1002.8 812.148 -1044.2C848.508 -1085.6 699.31 -1362.7 735.669 -1404.1C772.029 -1445.5 921.208 -1168.38 957.548 -1209.76C993.889 -1251.14 844.729 -1528.27 881.089 -1569.67C917.449 -1611.07 1066.63 -1333.96 1102.99 -1375.36C1139.35 -1416.76 990.169 -1693.88 1026.51 -1735.25" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.898" stroke-miterlimit="10"/>
<path d="M-762.136 1912.95C-725.795 1871.57 -576.617 2148.68 -540.257 2107.28C-503.897 2065.88 -653.095 1788.79 -616.735 1747.39C-580.375 1705.99 -431.216 1983.12 -394.856 1941.72C-358.496 1900.32 -507.694 1623.23 -471.335 1581.83C-434.975 1540.43 -285.816 1817.57 -249.456 1776.17C-213.096 1734.77 -362.294 1457.68 -325.934 1416.28C-289.574 1374.88 -140.415 1652.01 -104.055 1610.61C-67.6953 1569.21 -216.893 1292.12 -180.553 1250.74C-144.212 1209.36 4.98553 1486.46 41.4038 1444.99C77.8221 1403.52 -71.4343 1126.5 -35.0939 1085.12C1.24652 1043.74 150.464 1320.81 186.727 1279.52C222.989 1238.23 73.8884 961.03 110.346 919.519C146.803 878.008 295.865 1155.25 332.205 1113.88C368.545 1072.5 219.386 795.362 255.727 753.984C292.067 712.606 441.246 989.72 477.606 948.32C513.965 906.919 364.767 629.828 401.108 588.45C437.448 547.072 586.646 824.163 623.006 782.763C659.366 741.363 510.168 464.272 546.528 422.872C582.888 381.472 732.047 658.607 768.407 617.207C804.767 575.807 655.569 298.716 691.928 257.316C728.288 215.915 877.447 493.051 913.807 451.651C950.167 410.25 800.969 133.159 837.329 91.7591C873.689 50.3589 1022.85 327.494 1059.21 286.094C1095.57 244.694 946.389 -32.4192 982.73 -73.7972C1019.07 -115.175 1168.27 161.916 1204.61 120.538C1240.95 79.1598 1091.79 -197.975 1128.13 -239.353C1164.47 -280.731 1313.67 -3.64053 1350.03 -45.0407C1386.39 -86.4409 1237.19 -363.532 1273.55 -404.932C1309.91 -446.332 1459.09 -169.219 1495.43 -210.597C1531.77 -251.975 1382.61 -529.11 1418.97 -570.51C1455.33 -611.911 1604.51 -334.798 1640.87 -376.198C1677.23 -417.598 1528.05 -694.711 1564.39 -736.089" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M7.43652 3342.5C43.7769 3301.12 192.955 3578.23 229.315 3536.83C265.675 3495.43 116.477 3218.34 152.837 3176.94C189.197 3135.54 338.356 3412.67 374.716 3371.27C411.076 3329.87 261.878 3052.78 298.238 3011.38C334.598 2969.98 483.757 3247.12 520.117 3205.72C556.476 3164.32 407.278 2887.23 443.638 2845.83C479.998 2804.43 629.157 3081.56 665.517 3040.16C701.877 2998.76 552.679 2721.67 589.019 2680.29C625.36 2638.91 774.558 2916.01 810.976 2874.54C847.394 2833.07 698.138 2556.05 734.478 2514.67C770.819 2473.29 920.036 2750.36 956.299 2709.07C992.561 2667.78 843.461 2390.58 879.918 2349.07C916.375 2307.56 1065.44 2584.8 1101.78 2543.43C1138.12 2502.05 988.959 2224.91 1025.3 2183.54C1061.64 2142.16 1210.82 2419.27 1247.18 2377.87C1283.54 2336.47 1134.34 2059.38 1170.68 2018C1207.02 1976.62 1356.22 2253.71 1392.58 2212.31C1428.94 2170.91 1279.74 1893.82 1316.1 1852.42C1352.46 1811.02 1501.62 2088.16 1537.98 2046.76C1574.34 2005.36 1425.14 1728.27 1461.5 1686.87C1497.86 1645.47 1647.02 1922.6 1683.38 1881.2C1719.74 1839.8 1570.54 1562.71 1606.9 1521.31C1643.26 1479.91 1792.42 1757.05 1828.78 1715.64C1865.14 1674.24 1715.96 1397.13 1752.3 1355.75C1788.64 1314.38 1937.84 1591.47 1974.18 1550.09C2010.52 1508.71 1861.36 1231.58 1897.7 1190.2C1934.04 1148.82 2083.24 1425.91 2119.6 1384.51C2155.96 1343.11 2006.76 1066.02 2043.12 1024.62C2079.48 983.219 2228.66 1260.33 2265 1218.95C2301.34 1177.58 2152.18 900.441 2188.54 859.04C2224.9 817.64 2374.08 1094.75 2410.44 1053.35C2446.8 1011.95 2297.62 734.84 2333.96 693.462" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-993.826 1482.56C-957.486 1441.18 -808.307 1718.29 -771.947 1676.89C-735.587 1635.49 -884.785 1358.4 -848.426 1317C-812.066 1275.6 -662.907 1552.74 -626.547 1511.34C-590.187 1469.94 -739.385 1192.85 -703.025 1151.44C-666.665 1110.04 -517.506 1387.18 -481.146 1345.78C-444.786 1304.38 -593.984 1027.29 -557.624 985.889C-521.265 944.488 -372.105 1221.62 -335.746 1180.22C-299.386 1138.82 -448.584 861.732 -412.243 820.354C-375.903 778.976 -226.705 1056.07 -190.287 1014.6C-153.868 973.134 -303.125 696.11 -266.784 654.732C-230.444 613.354 -81.2264 890.422 -44.9639 849.133C-8.70141 807.844 -157.802 530.642 -121.345 489.131C-84.8875 447.62 64.1742 724.866 100.515 683.488C136.855 642.11 -12.3041 364.975 24.0364 323.597C60.3768 282.219 209.555 559.332 245.915 517.932C282.275 476.532 133.077 199.441 169.417 158.063C205.758 116.685 354.956 393.776 391.316 352.375C427.676 310.975 278.478 33.8844 314.837 -7.51579C351.197 -48.916 500.356 228.219 536.716 186.819C573.076 145.419 423.878 -131.672 460.238 -173.072C496.598 -214.472 645.757 62.663 682.117 21.2629C718.477 -20.1373 569.279 -297.228 605.639 -338.629C641.999 -380.029 791.158 -102.893 827.517 -144.294C863.877 -185.694 714.699 -462.807 751.039 -504.185C787.38 -545.563 936.578 -268.472 972.918 -309.85C1009.26 -351.228 860.099 -628.363 896.44 -669.741C932.78 -711.119 1081.98 -434.028 1118.34 -475.428C1154.7 -516.829 1005.5 -793.92 1041.86 -835.32C1078.22 -876.72 1227.4 -599.607 1263.74 -640.985C1300.08 -682.363 1150.92 -959.498 1187.28 -1000.9C1223.64 -1042.3 1372.82 -765.185 1409.18 -806.585C1445.54 -847.986 1296.36 -1125.1 1332.7 -1166.48" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-224.255 2912.11C-187.914 2870.73 -38.736 3147.84 -2.37607 3106.44C33.9838 3065.04 -115.214 2787.95 -78.8543 2746.55C-42.4944 2705.15 106.665 2982.29 143.025 2940.89C179.384 2899.49 30.1864 2622.39 66.5463 2580.99C102.906 2539.59 252.065 2816.73 288.425 2775.33C324.785 2733.93 175.587 2456.84 211.947 2415.44C248.307 2374.04 397.466 2651.17 433.826 2609.77C470.186 2568.37 320.988 2291.28 357.328 2249.9C393.668 2208.53 542.866 2485.62 579.285 2444.15C615.703 2402.68 466.447 2125.66 502.787 2084.28C539.127 2042.9 688.345 2319.97 724.607 2278.68C760.87 2237.39 611.769 1960.19 648.226 1918.68C684.684 1877.17 833.745 2154.42 870.086 2113.04C906.426 2071.66 757.267 1794.52 793.608 1753.15C829.948 1711.77 979.127 1988.88 1015.49 1947.48C1051.85 1906.08 902.648 1628.99 938.989 1587.61C975.329 1546.23 1124.53 1823.33 1160.89 1781.93C1197.25 1740.53 1048.05 1463.43 1084.41 1422.03C1120.77 1380.63 1269.93 1657.77 1306.29 1616.37C1342.65 1574.97 1193.45 1297.88 1229.81 1256.48C1266.17 1215.08 1415.33 1492.21 1451.69 1450.81C1488.05 1409.41 1338.85 1132.32 1375.21 1090.92C1411.57 1049.52 1560.73 1326.66 1597.09 1285.26C1633.45 1243.86 1484.27 966.743 1520.61 925.365C1556.95 883.987 1706.15 1161.08 1742.49 1119.7C1778.83 1078.32 1629.67 801.187 1666.01 759.809C1702.35 718.431 1851.55 995.522 1887.91 954.121C1924.27 912.721 1775.07 635.63 1811.43 594.23C1847.79 552.83 1996.97 829.943 2033.31 788.565C2069.65 747.187 1920.49 470.052 1956.85 428.652C1993.21 387.252 2142.39 664.365 2178.75 622.964C2215.11 581.564 2065.93 304.451 2102.27 263.073" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-455.947 2481.72C-419.607 2440.34 -270.428 2717.45 -234.068 2676.05C-197.709 2634.65 -346.907 2357.56 -310.547 2316.16C-274.187 2274.76 -125.028 2551.9 -88.6679 2510.5C-52.308 2469.1 -201.506 2192.01 -165.146 2150.61C-128.786 2109.21 20.3728 2386.34 56.7327 2344.94C93.0926 2303.54 -56.1054 2026.45 -19.7455 1985.05C16.6143 1943.65 165.773 2220.78 202.133 2179.38C238.493 2137.98 89.2952 1860.89 125.636 1819.52C161.976 1778.14 311.174 2055.23 347.592 2013.76C384.011 1972.3 234.754 1695.27 271.095 1653.89C307.435 1612.51 456.652 1889.58 492.915 1848.29C529.177 1807 380.077 1529.8 416.534 1488.29C452.991 1446.78 602.053 1724.03 638.393 1682.65C674.734 1641.27 525.575 1364.14 561.915 1322.76C598.256 1281.38 747.434 1558.49 783.794 1517.09C820.154 1475.69 670.956 1198.6 707.296 1157.22C743.637 1115.85 892.835 1392.94 929.195 1351.54C965.555 1310.14 816.356 1033.05 852.716 991.645C889.076 950.245 1038.24 1227.38 1074.6 1185.98C1110.96 1144.58 961.757 867.489 998.117 826.089C1034.48 784.689 1183.64 1061.82 1220 1020.42C1256.36 979.024 1107.16 701.933 1143.52 660.533C1179.88 619.132 1329.04 896.268 1365.4 854.868C1401.76 813.467 1252.58 536.354 1288.92 494.976C1325.26 453.598 1474.46 730.689 1510.8 689.311C1547.14 647.933 1397.98 370.798 1434.32 329.42C1470.66 288.042 1619.86 565.133 1656.22 523.733C1692.58 482.333 1543.38 205.242 1579.74 163.841C1616.1 122.441 1765.28 399.554 1801.62 358.176C1837.96 316.798 1688.8 39.6632 1725.16 -1.73692C1761.52 -43.1371 1910.7 233.976 1947.06 192.576C1983.42 151.176 1834.24 -125.938 1870.58 -167.316" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-1150.84 1190.89C-1114.5 1149.52 -965.318 1426.63 -928.958 1385.23C-892.598 1343.83 -1041.8 1066.74 -1005.44 1025.34C-969.076 983.938 -819.917 1261.07 -783.558 1219.67C-747.198 1178.27 -896.396 901.182 -860.036 859.781C-823.676 818.381 -674.517 1095.52 -638.157 1054.12C-601.797 1012.72 -750.995 735.625 -714.635 694.225C-678.275 652.825 -529.116 929.96 -492.756 888.56C-456.396 847.16 -605.594 570.069 -569.254 528.691C-532.914 487.313 -383.716 764.404 -347.297 722.937C-310.879 681.47 -460.135 404.446 -423.795 363.068C-387.455 321.69 -238.237 598.759 -201.975 557.47C-165.712 516.18 -314.813 238.978 -278.356 197.467C-241.898 155.956 -92.8366 433.202 -56.4962 391.825C-20.1558 350.447 -169.315 73.3112 -132.974 31.9332C-96.634 -9.44482 52.5445 267.668 88.9044 226.268C125.264 184.868 -23.9338 -92.2229 12.4066 -133.601C48.747 -174.979 197.945 102.112 234.305 60.7118C270.665 19.3117 121.467 -257.779 157.827 -299.179C194.187 -340.58 343.346 -63.4443 379.706 -104.844C416.065 -146.245 266.867 -423.336 303.227 -464.736C339.587 -506.136 488.746 -229.001 525.106 -270.401C561.466 -311.801 412.268 -588.892 448.628 -630.292C484.988 -671.692 634.147 -394.557 670.507 -435.957C706.867 -477.357 557.688 -754.47 594.028 -795.848C630.369 -837.226 779.567 -560.136 815.907 -601.514C852.248 -642.892 703.089 -920.027 739.429 -961.405C775.769 -1002.78 924.967 -725.692 961.327 -767.092C997.687 -808.492 848.489 -1085.58 884.849 -1126.98C921.209 -1168.38 1070.39 -891.27 1106.73 -932.648C1143.07 -974.026 993.909 -1251.16 1030.27 -1292.56C1066.63 -1333.96 1215.81 -1056.85 1252.17 -1098.25C1288.53 -1139.65 1139.35 -1416.76 1175.69 -1458.14" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-612.957 2190.06C-576.617 2148.68 -427.438 2425.79 -391.078 2384.39C-354.718 2342.99 -503.916 2065.9 -467.556 2024.5C-431.197 1983.1 -282.038 2260.24 -245.678 2218.84C-209.318 2177.44 -358.516 1900.35 -322.156 1858.95C-285.796 1817.55 -136.637 2094.68 -100.277 2053.28C-63.9172 2011.88 -213.115 1734.79 -176.755 1693.39C-140.395 1651.99 8.76366 1929.12 45.1235 1887.72C81.4834 1846.32 -67.7146 1569.23 -31.3742 1527.86C4.96623 1486.48 154.164 1763.57 190.583 1722.1C227.001 1680.64 77.7444 1403.61 114.085 1362.23C150.425 1320.85 299.643 1597.92 335.905 1556.63C372.168 1515.34 223.067 1238.14 259.524 1196.63C295.982 1155.12 445.043 1432.37 481.384 1390.99C517.724 1349.61 368.565 1072.48 404.905 1031.1C441.246 989.72 590.424 1266.83 626.784 1225.43C663.144 1184.03 513.946 906.942 550.287 865.564C586.627 824.186 735.825 1101.28 772.185 1059.88C808.545 1018.48 659.347 741.385 695.707 699.985C732.066 658.585 881.226 935.72 917.585 894.32C953.945 852.92 804.747 575.829 841.107 534.429C877.467 493.029 1026.63 770.164 1062.99 728.764C1099.35 687.364 950.148 410.273 986.508 368.872C1022.87 327.472 1172.03 604.608 1208.39 563.207C1244.75 521.807 1095.57 244.694 1131.91 203.316C1168.25 161.938 1317.45 439.029 1353.79 397.651C1390.13 356.273 1240.97 79.1378 1277.31 37.7599C1313.65 -3.61814 1462.85 273.473 1499.21 232.073C1535.57 190.672 1386.37 -86.4186 1422.73 -127.819C1459.09 -169.219 1608.27 107.894 1644.61 66.5163C1680.95 25.1383 1531.79 -251.997 1568.15 -293.397C1604.51 -334.797 1753.69 -57.6843 1790.05 -99.0845C1826.41 -140.485 1677.23 -417.598 1713.57 -458.976" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M156.615 3619.61C192.956 3578.23 342.134 3855.34 378.494 3813.94C414.854 3772.54 265.656 3495.45 302.016 3454.05C338.376 3412.65 487.535 3689.79 523.895 3648.39C560.255 3606.99 411.057 3329.89 447.416 3288.49C483.776 3247.09 632.935 3524.23 669.295 3482.83C705.655 3441.43 556.457 3164.34 592.817 3122.94C629.177 3081.54 778.336 3358.67 814.696 3317.27C851.056 3275.87 701.858 2998.78 738.198 2957.4C774.538 2916.03 923.737 3193.12 960.155 3151.65C996.573 3110.18 847.317 2833.16 883.657 2791.78C919.997 2750.4 1069.21 3027.47 1105.48 2986.18C1141.74 2944.89 992.639 2667.69 1029.1 2626.18C1065.55 2584.67 1214.62 2861.92 1250.96 2820.54C1287.3 2779.16 1138.14 2502.02 1174.48 2460.65C1210.82 2419.27 1360 2696.38 1396.36 2654.98C1432.72 2613.58 1283.52 2336.49 1319.86 2295.11C1356.2 2253.73 1505.4 2530.83 1541.76 2489.43C1578.12 2448.03 1428.92 2170.93 1465.28 2129.53C1501.64 2088.13 1650.8 2365.27 1687.16 2323.87C1723.52 2282.47 1574.32 2005.38 1610.68 1963.98C1647.04 1922.58 1796.2 2199.71 1832.56 2158.31C1868.92 2116.91 1719.72 1839.82 1756.08 1798.42C1792.44 1757.02 1941.6 2034.16 1977.96 1992.76C2014.32 1951.36 1865.14 1674.24 1901.48 1632.86C1937.82 1591.49 2087.02 1868.58 2123.36 1827.2C2159.7 1785.82 2010.54 1508.69 2046.88 1467.31C2083.22 1425.93 2232.42 1703.02 2268.78 1661.62C2305.14 1620.22 2155.94 1343.13 2192.3 1301.73C2228.66 1260.33 2377.84 1537.44 2414.18 1496.07C2450.52 1454.69 2301.36 1177.55 2337.72 1136.15C2374.08 1094.75 2523.26 1371.86 2559.62 1330.46C2595.98 1289.06 2446.8 1011.95 2483.14 970.573" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-844.647 1759.67C-808.307 1718.29 -659.129 1995.41 -622.769 1954C-586.409 1912.6 -735.607 1635.51 -699.247 1594.11C-662.887 1552.71 -513.728 1829.85 -477.368 1788.45C-441.008 1747.05 -590.206 1469.96 -553.846 1428.56C-517.486 1387.16 -368.327 1664.29 -331.967 1622.89C-295.608 1581.49 -444.806 1304.4 -408.446 1263C-372.086 1221.6 -222.927 1498.74 -186.567 1457.34C-150.207 1415.94 -299.405 1138.84 -263.065 1097.47C-226.724 1056.09 -77.5262 1333.18 -41.1079 1291.71C-4.68957 1250.25 -153.946 973.222 -117.606 931.844C-81.2652 890.466 67.9523 1167.53 104.215 1126.25C140.477 1084.96 -8.62334 807.754 27.8339 766.243C64.2912 724.732 213.353 1001.98 249.693 960.6C286.034 919.222 136.875 642.087 173.215 600.709C209.555 559.331 358.734 836.444 395.094 795.044C431.454 753.644 282.256 476.553 318.596 435.175C354.937 393.797 504.135 670.888 540.494 629.488C576.854 588.088 427.656 310.997 464.016 269.597C500.376 228.196 649.535 505.332 685.895 463.931C722.255 422.531 573.057 145.44 609.417 104.04C645.777 62.6399 794.936 339.775 831.296 298.375C867.655 256.975 718.458 -20.1161 754.817 -61.5163C791.177 -102.916 940.336 174.219 976.696 132.819C1013.06 91.4186 863.878 -185.695 900.218 -227.073C936.558 -268.451 1085.76 8.64036 1122.1 -32.7376C1158.44 -74.1156 1009.28 -351.251 1045.62 -392.629C1081.96 -434.007 1231.16 -156.916 1267.52 -198.316C1303.88 -239.716 1154.68 -516.807 1191.04 -558.207C1227.4 -599.608 1376.58 -322.494 1412.92 -363.872C1449.26 -405.25 1300.1 -682.386 1336.46 -723.786C1372.82 -765.186 1522 -488.073 1558.36 -529.473C1594.72 -570.873 1445.54 -847.986 1481.88 -889.364" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-75.0771 3189.22C-38.7367 3147.85 110.442 3424.96 146.802 3383.56C183.162 3342.16 33.9636 3065.07 70.3234 3023.67C106.683 2982.27 255.842 3259.4 292.202 3218C328.562 3176.6 179.364 2899.51 215.724 2858.11C252.084 2816.71 401.243 3093.85 437.603 3052.45C473.963 3011.05 324.765 2733.96 361.125 2692.56C397.484 2651.16 546.644 2928.29 583.003 2886.89C619.363 2845.49 470.165 2568.4 506.506 2527.02C542.846 2485.64 692.044 2762.73 728.462 2721.27C764.881 2679.8 615.624 2402.78 651.965 2361.4C688.305 2320.02 837.523 2597.09 873.785 2555.8C910.048 2514.51 760.947 2237.31 797.404 2195.8C833.861 2154.29 982.923 2431.53 1019.26 2390.16C1055.6 2348.78 906.445 2071.64 942.785 2030.26C979.126 1988.89 1128.3 2266 1164.66 2224.6C1201.02 2183.2 1051.83 1906.11 1088.17 1864.73C1124.51 1823.35 1273.7 2100.44 1310.06 2059.04C1346.42 2017.64 1197.23 1740.55 1233.59 1699.15C1269.95 1657.75 1419.11 1934.89 1455.47 1893.49C1491.83 1852.09 1342.63 1574.99 1378.99 1533.59C1415.35 1492.19 1564.51 1769.33 1600.87 1727.93C1637.23 1686.53 1488.03 1409.44 1524.39 1368.04C1560.75 1326.64 1709.91 1603.77 1746.27 1562.37C1782.63 1520.97 1633.45 1243.86 1669.79 1202.48C1706.13 1161.1 1855.33 1438.2 1891.67 1396.82C1928.01 1355.44 1778.85 1078.3 1815.19 1036.93C1851.53 995.548 2000.73 1272.64 2037.09 1231.24C2073.45 1189.84 1924.25 912.747 1960.61 871.347C1996.97 829.947 2146.15 1107.06 2182.49 1065.68C2218.83 1024.3 2069.67 747.169 2106.03 705.769C2142.39 664.369 2291.57 941.482 2327.93 900.082C2364.29 858.681 2215.11 581.568 2251.45 540.19" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
<path d="M-306.768 2758.83C-270.427 2717.46 -121.249 2994.57 -84.8888 2953.17C-48.5289 2911.77 -197.727 2634.68 -161.367 2593.28C-125.007 2551.88 24.1519 2829.01 60.5118 2787.61C96.8717 2746.21 -52.3263 2469.12 -15.9664 2427.72C20.3935 2386.32 169.553 2663.46 205.912 2622.06C242.272 2580.66 93.0743 2303.56 129.434 2262.16C165.794 2220.76 314.953 2497.9 351.313 2456.5C387.673 2415.1 238.475 2138.01 274.815 2096.63C311.156 2055.25 460.354 2332.34 496.772 2290.88C533.19 2249.41 383.934 1972.39 420.274 1931.01C456.615 1889.63 605.832 2166.7 642.095 2125.41C678.357 2084.12 529.257 1806.92 565.714 1765.41C602.171 1723.9 751.233 2001.14 787.573 1959.76C823.914 1918.39 674.755 1641.25 711.095 1599.87C747.435 1558.49 896.614 1835.61 932.974 1794.21C969.334 1752.81 820.136 1475.72 856.476 1434.34C892.816 1392.96 1042.01 1670.05 1078.37 1628.65C1114.73 1587.25 965.536 1310.16 1001.9 1268.76C1038.26 1227.36 1187.41 1504.49 1223.77 1463.09C1260.13 1421.69 1110.94 1144.6 1147.3 1103.2C1183.66 1061.8 1332.82 1338.94 1369.18 1297.54C1405.54 1256.14 1256.34 979.047 1292.7 937.647C1329.06 896.247 1478.22 1173.38 1514.58 1131.98C1550.94 1090.58 1401.76 813.469 1438.1 772.091C1474.44 730.713 1623.64 1007.8 1659.98 966.425C1696.32 925.047 1547.16 647.912 1583.5 606.534C1619.84 565.156 1769.04 842.247 1805.4 800.847C1841.76 759.447 1692.56 482.356 1728.92 440.956C1765.28 399.555 1914.46 676.669 1950.8 635.291C1987.14 593.913 1837.98 316.778 1874.34 275.377C1910.7 233.977 2059.88 511.09 2096.24 469.69C2132.6 428.29 1983.42 151.177 2019.76 109.799" stroke="#A0A3BD" stroke-opacity="0.05" stroke-width="1.3286" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_1476_642">
<rect width="1961" height="1151" fill="white" transform="translate(-83 -27)"/>
</clipPath>
</defs>
</svg>

          </div>
    </div>
  )
}

export default Community