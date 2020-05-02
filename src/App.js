import React from 'react';
import '../src/style/styles.css'
function App() {
  return (
    <div className="page">
      <div className="page-wraper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="profile">
                <div className="profile-image"><a href="https://www.facebook.com/dat.bug.vn" className="avatar"><img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/90155465_1334627290066338_5971344953488441344_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=31sgHrTsoN8AX9sFxi9&_nc_ht=scontent.fhan3-2.fna&oh=3597c0c10279a73d02c91711f64b28d0&oe=5EB1FAB6" /></a></div>
                <div className="profile-info">
                  <div className="name-job">
                    <div className="name">Nguyễn Thành Đạt</div>
                    <div className="job">Developer</div>
                  </div>
                  <div className="social-icons"><a href="#" className="social-icons-item">
                    <div className="fab fa-facebook-f" /></a><a href="https://www.facebook.com/dat.bug.vn" className="social-icons-item">
                    <div className="fab fa-twitter" /></a></div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="content">
                <div className="menu-header">
                  <ul className="menu-content">
                    <li data-option="about" className="menu-item active"><i className="fa fa-user" /><span>About</span></li>
                    <li data-option="resume" className="menu-item"><i className="fa fa-user" /><span>Resume</span></li>
                    <li data-option="portfolio" className="menu-item"><i className="fa fa-user" /><span>Product</span></li>
                    <li data-option="blog" className="menu-item"><i className="fa fa-user" /><span>Blog</span></li>
                    <li data-option="contact" className="menu-item"><i className="fa fa-user" /><span>Contact</span></li>
                  </ul>
                </div>
                <div id="about" className="content_wrap tab-content">
                  <div className="page-title">
                    <h2>Một vài điều về cỏ máu</h2>
                  </div>
                  <h2 className="title-info">Thông tin người bán</h2>
                  <div className="content-info">
                    <div className="info-item">Full Name:<span>Nguyễn Thành Đạt</span></div>
                    <div className="info-item">Birthday:<span>27 March 1999</span></div>
                    <div className="info-item">Job:<span>Developer</span></div>
                    <div className="info-item">Phone:<span>0349657827</span></div>
                    <div className="info-item">Email:<span>dat.bug.t.nguyen@gmail.com</span></div>
                    <div className="info-item">Skype:<span>224e456c50acb37a</span></div>
                  </div>
                  <div className="content-dev">
                    <h2 className="title">Thành phần</h2>
                    <div className="text-description">
                      <p>+ Cây cỏ máu, cỏ be me, cỏ huyết đang, cỏ lạc tiên, có kha trúc, cỏ ban hương, cam thảo</p>
                    </div>
                    <h2 className="title">Công dụng</h2>
                    <div className="text-description">
                      <p>+ Giúp ăn ngon,tăng cân, điều kinh, thanh lọc cơ thể, bồi bổ sức khỏe , làm đẹp da .</p>
                      <p>+ Giúp đẹp da, đen tóc, thanh lọc cơ thể.</p>
                      <p>+ Giúp bồi bổ và lưu thông máu, giảm đau đầu, chóng mặt, chống suy nhược cơ thể .</p>
                      <p>+ Giúp phụ nữ sau sinh lợi sữa, nhanh lấy lại sức khỏe và nhan sắc.</p>
                      <p>+ Giúp người già khỏe mạnh, chống mệt mỏi nhức chân tay, sáng mắt.</p>
                      <p>+ Giúp trẻ em chống được còi xương, suy dinh dưỡng, biếng ăn.</p>
                      <p>+ Không chỉ bồi bổ sức khỏe, cỏ máu dùng chữa đau bụng hay tắm cho trẻ con rất tốt.</p>
                    </div>
                    <h2 className="title">Cách dùng</h2>
                    <div className="text-description">
                      <p>Lấy 60-100g hoặc 1 ấm cỏ rửa sạch, đem đun với 1,5-2 lít nước(Lượng nước vừa đủ uống trong 1 ngày)
                        sôi 15 phút. Dùng nước cỏ máu uống thay nước lọc hàng ngày. Bã của cỏ cất vào tủ lạnh để đun tiếp cho lần sau. Một ấm sắc được 3 lần. Có thể uống mát hay ấm tùy thích
                      </p>
                      <span style={{color: '#1c7430'}}>Nước cỏ máu có màu đỏ, chát nhẹ, uống vào ngọt hậu !!!</span>
                    </div>
                    <h2 className="title">Đối tượng sử dụng</h2>
                    <div className="text-description">
                      <p>Dùng cho mọi lứa tuổi(Trai ,gái,trẻ em,người già, phụ nữ sau sinh và người thiếu máu, kém ăn, mất ngủ)</p>
                      <span style={{color: 'red'}}>Phụ nữ đang có thai và trẻ dưới 1 tuổi ko nên uống!!!</span>
                    </div>
                  </div>
                </div>
                <div id="resume" className="content-resume tab-content d-none">
                  <div className="page-title">
                    <h2>Kinh nghiệm và Học vấn</h2>
                  </div>
                  <div className="content-experience">
                    <div className="resume-title"><i className="fa fa-graduation-cap" />
                      <h2>Kinh nghiệm làm việc</h2>
                    </div>
                    <div className="resume-out">
                      <div className="resume-info">
                        <h2 className="info-title">Lập trình web back-end, font-end</h2><span className="info-date">Từ 2020 đến nay</span>
                        <ul>
                          <li>- Làm việc tại vntrip</li>
                          <li>- Vừa làm font-end và bắt đầu làm việc với back-end</li>
                          <li>- Nghiên cứu và phát triển sản phầm sử dụng công nghệ  reactjs/ nestjs, reactjs/nodejs</li>
                        </ul>
                      </div>
                      <div className="resume-info">
                        <h2 className="info-title">Lập trình web font-end</h2><span className="info-date">Từ 2019 đến 2020</span>
                        <ul>
                          <li>- Làm việc tại vntrip</li>
                          <li>- Từ html/css chuyển sang code reactjs, meteor</li>
                          <li>- Nghiên cứu và phát triển sản phầm sử dụng công nghệ  reactjs, meteor</li>
                        </ul>
                      </div>
                      <div className="resume-info">
                        <h2 className="info-title">Lập trình web html/css/js</h2><span className="info-date">Từ 2018 đến 2019</span>
                        <ul>
                          <li>- Làm việc tại vntrip</li>
                          <li>- Ban đầu code html/css/jquery cơ bản sau đó sử dụng jade/scss/jquery</li>
                          <li>- Nghiên cứu và phát triển sản phầm sử dụng công nghệ jade/scss</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content-experience">
                    <div className="resume-title"><i className="fa fa-graduation-cap" />
                      <h2>Học tập</h2>
                    </div>
                    <div className="resume-out">
                      <div className="resume-info">
                        <h2 className="info-title">Học tập tại Học viện kĩ thuật mật mã</h2><span className="info-date">Từ 2018 đến nay</span>
                        <ul>
                          <li>- Học viện kĩ thuật mật mã</li>
                          <li>- Chuyên ngành an toàn thông tin</li>
                          <li>- Đang học tập tại Học viện kĩ thuật mật mã</li>
                        </ul>
                      </div>
                      <div className="resume-info">
                        <h2 className="info-title">Học tại trường trung học phổ thông Lưu Hoàng</h2><span className="info-date">Từ 2014 đến 2017</span>
                        <ul>
                          <li>- Trường trung học phổ thông Lưu Hoàng</li>
                          <li>- 3 năm học sinh giỏi - hạnh kiểm tốt</li>
                          <li>- Là nơi lưu dữ kỉ niệm đẹp nhất đời học sinh</li>
                        </ul>
                      </div>
                      <div className="resume-info">
                        <h2 className="info-title">Học tại trường trung học cơ sở Hồng Quang</h2><span className="info-date">Từ 2009 đến 2014</span>
                        <ul>
                          <li>- Trường trung học cơ sở Hồng Quang</li>
                          <li>- 4 năm học tiên tiến - hạnh kiểm tốt</li>
                        </ul>
                      </div>
                      <div className="resume-info">
                        <h2 className="info-title">Học tại trường tiểu học Hồng Quang</h2><span className="info-date">Từ 2004 đến 2009</span>
                        <ul>
                          <li>- Trường tiểu học Hồng Quang</li>
                          <li>- 4 năm học tiên tiến - hạnh kiểm tốt</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="portfolio" className="content-portfolio tab-content d-none ">
                  <div className="page-title">
                    <h2>Một vài sản phẩm của tôi</h2>
                  </div>
                  <div className="content-product">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="product-item">
                          <div className="product-content">
                            <h3>Product Work 1</h3>
                            <p><span>Developer, Web</span></p><a href="#"><i className="fa fa-link" /></a><a href="#" className="search"><i className="fa fa-search" /></a>
                          </div><img src="http://demo.spyropress.com/themeforest/picard/wp-content/uploads/2017/08/work-8-370x370.jpg" className="product-image" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="product-item">
                          <div className="product-content">
                            <h3>Product Work 1</h3>
                            <p><span>Developer, Web</span></p><a href="#"><i className="fa fa-link" /></a><a href="#" className="search"><i className="fa fa-search" /></a>
                          </div><img src="http://demo.spyropress.com/themeforest/picard/wp-content/uploads/2017/08/work-8-370x370.jpg" className="product-image" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="product-item">
                          <div className="product-content">
                            <h3>Product Work 1</h3>
                            <p><span>Developer, Web</span></p><a href="#"><i className="fa fa-link" /></a><a href="#" className="search"><i className="fa fa-search" /></a>
                          </div><img src="http://demo.spyropress.com/themeforest/picard/wp-content/uploads/2017/08/work-8-370x370.jpg" className="product-image" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="product-item">
                          <div className="product-content">
                            <h3>Product Work 1</h3>
                            <p><span>Developer, Web</span></p><a href="#"><i className="fa fa-link" /></a><a href="#" className="search"><i className="fa fa-search" /></a>
                          </div><img src="http://demo.spyropress.com/themeforest/picard/wp-content/uploads/2017/08/work-8-370x370.jpg" className="product-image" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="product-item">
                          <div className="product-content">
                            <h3>Product Work 1</h3>
                            <p><span>Developer, Web</span></p><a href="#"><i className="fa fa-link" /></a><a href="#" className="search"><i className="fa fa-search" /></a>
                          </div><img src="http://demo.spyropress.com/themeforest/picard/wp-content/uploads/2017/08/work-8-370x370.jpg" className="product-image" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="product-item">
                          <div className="product-content">
                            <h3>Product Work 1</h3>
                            <p><span>Developer, Web</span></p><a href="#"><i className="fa fa-link" /></a><a href="#" className="search"><i className="fa fa-search" /></a>
                          </div><img src="http://demo.spyropress.com/themeforest/picard/wp-content/uploads/2017/08/work-8-370x370.jpg" className="product-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-href="https://dat-bug-kma.github.io/" data-width={576} data-numposts={10} className="fb-comments" />
                </div>
                <div id="blog" className="content-blog d-none tab-content">
                  <div className="error-404">
                    <svg viewBox="0 0 541.17206 328.45184" height="328.45184" width="541.17206" version="1.1" className="error-404__svg">
                      <defs>
                        <pattern id="Strips2_1" patternUnits="userSpaceOnUse" width="1.5" height={1} patternTransform="translate(0,0) scale(10,10)">
                          <rect id="rect5419" x={0} y="-0.5" width={1} height={2} style={{fill: 'black', stroke: 'none'}} />
                        </pattern>
                      </defs>
                      <g transform="translate(170.14515,0.038164)">
                        <g id="g6219">
                          <path id="path6180" transform="matrix(1.0150687,0,0,11.193923,-1.3895945,-2685.7441)" d="m 145.0586,263.51309 c -90.20375,-0.0994 -119.20375,-0.0994 -119.20375,-0.0994" style={{display: 'inline', fill: 'rgb(0, 0, 0)', fillOpacity: 1, stroke: 'rgb(0, 0, 0)', strokeWidth: '0.1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                          <g>
                            <ellipse ry="9.161705" rx="9.3055239" cy="91.32917" cx="84.963676" style={{display: 'inline', opacity: 1, fill: 'none', fillOpacity: '0.462745', fillRule: 'nonzero', stroke: 'rgb(0, 0, 0)', strokeWidth: '1.08691', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} />
                            <path d="m 84.984382,-0.03816399 c 0.911733,-5.0186e-4 1.661858,18.47051499 1.674386,41.22988399 0.0069,12.610431 -0.214009,23.904598 -0.56753,31.469836 -0.282878,6.088471 -0.652275,9.761785 -1.058838,9.762119 -0.406564,3.33e-4 -0.78198,-3.672386 -1.074838,-9.760657 -0.36185,-7.564779 -0.595233,-18.858715 -0.602175,-31.469228 -0.01253,-22.759565 0.717262,-41.23145213 1.628995,-41.23195399 z" style={{display: 'inline', fill: 'rgb(0, 0, 0)', stroke: 'none', strokeWidth: '0.237434px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 85.115421,100.5729 c -0.0036,3.37532 -0.0071,6.75165 -0.0107,10.12897 m 0.512159,0.18258 c -1.914603,-0.23621 -3.505591,1.17801 -4.861444,2.68113 -1.355853,1.50312 -2.473764,3.09173 -3.387866,4.59538 -0.914103,1.50365 -1.620209,2.91586 -2.416229,4.41952 -0.79602,1.50365 -1.67928,3.09352 -0.808656,3.24054 0.870624,0.14702 3.490408,-1.14815 5.700074,-1.91396 2.209666,-0.76581 4.001473,-1.00079 5.922125,-0.86765 1.920652,0.13314 3.947462,0.6325 6.245357,1.6195 2.297896,0.98701 4.861161,2.46015 4.9051,0.91309 0.04394,-1.54706 -2.430929,-6.11379 -4.787811,-9.33976 -2.356882,-3.22597 -4.596047,-5.11158 -6.51065,-5.34779 z" style={{display: 'inline', fill: 'rgb(0, 0, 0)', fillOpacity: 1, stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <rect ry={5} y="314.84082" x="35.355339" height="9.8994951" width="100.76272" style={{display: 'inline', opacity: 1, fill: 'rgb(0, 0, 0)', fillOpacity: 1, fillRule: 'nonzero', stroke: 'rgb(0, 0, 0)', strokeWidth: '1.00157', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} />
                            <path d="m 74.6875,125.03748 c -8.394789,7.68654 -16.790624,15.37405 -23.988969,22.38484 -7.198345,7.0108 -13.197555,13.3433 -18.781379,20.01048 -5.583823,6.66719 -10.749655,13.66605 -13.916608,18.7496 -3.166952,5.08355 -4.333432,8.24971 -4.750315,11.08369 -0.416883,2.83399 -0.08368,5.33304 1.809372,16.25302 1.893048,10.91998 5.343489,30.24673 9.760132,48.66349 4.416642,18.41676 9.798356,35.91675 15.180267,53.41738" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 76.9375,124.66248 c -4.548745,6.50695 -9.29087,13.29053 -13.530749,18.69724 -4.239879,5.4067 -8.072459,9.57255 -11.572943,13.98975 -3.500484,4.41719 -6.66636,9.08269 -9.333429,13.99996 -2.66707,4.91727 -4.833205,10.08267 -6.333458,15.08327 -1.500252,5.0006 -2.33339,9.8328 -2.500149,14.33343 -0.166759,4.50062 0.333124,8.66631 1.249922,15.50064 0.916798,6.83434 2.249854,16.33237 3.499902,24.91604 1.250047,8.58368 2.416611,16.24967 4.583438,28.58394 2.166827,12.33427 5.333153,29.33244 8.499966,46.33323" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 96.8125,126.22498 c 6.89586,6.45836 13.7917,12.9167 19.98957,19.14581 6.19786,6.22912 11.69789,12.22914 17.11456,18.39581 5.41666,6.16667 10.74996,12.49995 14.74993,17.91655 3.99997,5.41659 6.66659,9.91653 7.16671,17.83316 0.50012,7.91664 -1.16644,19.24921 -3.3502,31.24619 -2.18376,11.99698 -4.81616,24.33632 -8.42063,38.99809 -3.60448,14.66177 -8.06212,31.17154 -12.56244,47.83939" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 91.9375,124.09998 c 5.854072,7.16655 11.70824,14.33322 16.21863,20.16651 4.51039,5.83328 7.67706,10.33329 11.92718,16.33346 4.25012,6.00017 9.58322,13.49984 12.66653,18.58299 3.08332,5.08314 3.91663,7.74974 4.68205,10.91384 0.76542,3.1641 1.40129,6.50242 1.69781,8.02406 0.29651,1.52165 0.22299,1.06579 0.14933,0.60912" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 89,123.66248 c 6.159885,11.51771 12.31996,23.03577 16.83724,31.78904 4.51728,8.75327 7.29964,14.54985 9.24424,18.32123 1.9446,3.77138 3.00519,5.42118 4.1838,9.19262 1.17861,3.77144 2.47477,9.6631 1.94443,23.80647 -0.53034,14.14338 -2.88706,36.53226 -5.4209,56.44951 -2.53383,19.91725 -5.24428,37.35836 -7.95503,54.80146" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 87.0625,123.03748 c 2.916637,10.42937 5.833458,20.8594 7.291964,26.66356 1.458505,5.80416 1.458505,6.98257 2.402021,11.11052 0.943517,4.12795 2.827535,11.19302 4.065005,16.02501 1.23748,4.832 1.82668,7.42447 2.12139,10.84263 0.29471,3.41815 0.29471,7.65958 -0.11785,20.44893 -0.41255,12.78934 -1.23731,34.11536 -2.18014,53.62015 -0.94282,19.50478 -2.003429,37.18159 -3.064154,54.86032" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 85.206367,122.98266 c 0.117841,11.74369 0.235693,23.48835 0.235693,36.55072 -10e-7,13.06238 -0.117833,27.43796 -0.05891,45.3521 0.05892,17.91413 0.29461,39.36153 0.707091,58.80738 0.412482,19.44585 1.001711,36.88701 1.590999,54.32995" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 83.12978,122.92016 c -2.601311,10.56131 -5.214983,21.17282 -7.40283,31.41665 -2.187847,10.24384 -3.955407,20.14218 -5.074975,26.03483 -1.119568,5.89264 -1.59092,7.77805 -1.885708,10.07706 -0.294789,2.29901 -0.412567,5.0079 5.1e-5,17.56339 0.412617,12.55548 1.355064,34.93859 2.474996,54.74239 1.119932,19.80379 2.415574,37.00049 3.712005,54.20767" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 79.25478,124.23266 c -5.440192,11.56251 -10.880951,23.12622 -15.899657,33.56368 -5.018706,10.43747 -9.614414,19.74672 -11.912808,26.70033 -2.298394,6.95362 -2.298394,11.54922 -1.355419,24.57415 0.942974,13.02493 2.828182,34.46917 5.066095,53.84746 2.237913,19.37829 4.833109,36.71892 7.425959,54.04387" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 42.426407,155.38825 c 3.4184,0.82513 6.836082,1.65009 10.606997,2.18034 3.770916,0.53024 7.89657,0.76599 11.608535,0.88382 3.711965,0.11782 7.012548,0.11782 10.429711,0.0589 3.417163,-0.0589 6.953769,-0.17681 10.606588,-0.23572 3.652818,-0.0589 7.425155,-0.0589 11.137027,-0.23569 3.711875,-0.17679 7.366225,-0.53043 10.724475,-0.70716 3.35826,-0.17672 6.4233,-0.17672 9.48702,-0.58922 3.06372,-0.41251 6.12885,-1.23774 9.1918,-2.06238" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 13.113199,198.16821 c 47.547038,0.40361 95.093071,0.80721 142.638101,1.2108" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1.00614px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 132.6875,263.34998 c -4.2289,18.4155 -8.45806,36.83216 -12.6875,55.25" style={{display: 'inline', fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <ellipse ry="4.6715717" rx="2.5" cy="238.08525" cx="119.12262" style={{display: 'inline', opacity: 1, fill: 'rgb(0, 0, 0)', fillOpacity: 1, fillRule: 'nonzero', stroke: 'rgb(0, 0, 0)', strokeWidth: '1.00157', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} />
                            <ellipse ry="4.3158579" rx="4.9001703" cy="4.3948641" cx="85.016434" style={{display: 'inline', opacity: 1, fill: 'rgb(0, 0, 0)', fillOpacity: 1, fillRule: 'nonzero', stroke: 'rgb(0, 0, 0)', strokeWidth: '0.821702', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} />
                            <ellipse transform="translate(-170.14515,-0.038164)" ry="3.880542" rx="3.5777507" cy="164.5713" cx="321.42224" style={{opacity: 1, fill: 'rgb(0, 0, 0)', fillOpacity: 1, fillRule: 'nonzero', stroke: 'rgb(0, 0, 0)', strokeWidth: '1.00157', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} />
                            <path transform="translate(-170.14515,-0.038164)" d="m 321.74355,168.0687 c -1e-5,3.3913 -3.42414,11.26702 -8.73834,11.26702 -5.3142,0 -18.59463,27.24606 -8.38477,3.759 1.35199,-3.11016 5.69513,-12.89881 10.50609,-15.15612 8.05545,-3.77965 6.61702,-3.26121 6.61702,0.1301 z" style={{opacity: 1, fill: 'rgb(0, 0, 0)', fillOpacity: 1, fillRule: 'nonzero', stroke: 'rgb(0, 0, 0)', strokeWidth: '1.00157', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1}} />
                            <path transform="translate(-170.14515,-0.038164)" d="m 325,163.45184 c 1.66722,0.62594 3.33388,1.25167 3.33438,1.56444 5e-4,0.31276 -1.66671,0.31276 -3.33438,0.31276" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path transform="translate(-170.14515,-0.038164)" d="m 314.72098,177.37003 c -0.21488,1.64138 -0.42965,3.28197 0.28484,3.96351 0.71449,0.68155 2.35396,0.39999 3.99418,0.1183" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path transform="translate(-170.14515,-0.038164)" d="m 316,176.45184 c -0.29612,1.41007 -0.59214,2.81967 -0.25801,3.48764 0.33413,0.66798 1.29605,0.59017 2.25801,0.51236" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path transform="translate(-170.14515,-0.038164)" d="m 318,180.45184 c 0.66667,0 1.33434,0 1.501,0.16616 0.16667,0.16617 -0.16667,0.49951 0.001,0.66667 0.16767,0.16717 0.68771,0.16717 0.89053,0.36949 0.20282,0.20233 -0.0582,0.46335 -0.39253,0.79768" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 155,199.59998 34.15106,6.52318 v 11.49049 l -1.06066,13.43503 -3.88908,19.44543 -3.00521,10.42983 -4.06586,12.19759 -17.14734,-4.94975 -14.92431,-4.65869 v 0 L 155,199.59998" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 172.53405,202.94118 -2.65165,33.23402 -3.53553,16.97056 -5.12652,15.73313" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                            <path d="m 187.2662,239.00256 c 0.76634,-0.82482 2.12163,-2.00333 3.50552,-2.26818 1.38389,-0.26485 2.79921,0.38383 3.2412,1.53192 0.442,1.14808 -0.0885,2.79852 -1.5624,3.24089 -1.4739,0.44236 -3.88809,-0.32312 -3.7995,0.001 0.0886,0.32427 2.68064,1.73812 4.00626,3.12221 1.32563,1.38408 1.38456,2.73956 0.79537,3.38822 -0.5892,0.64866 -1.82576,0.58977 -2.53349,0.11762 -0.70773,-0.47215 -0.88437,-1.35536 -1.59092,-2.65068 -0.70656,-1.29532 -1.94507,-3.00565 -2.47512,-4.09626 -0.53005,-1.09062 -0.35326,-1.56206 0.41308,-2.38689 z" style={{fill: 'rgb(0, 0, 0)', fillOpacity: 1, stroke: 'rgb(0, 0, 0)', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}} />
                          </g>
                        </g>
                      </g>
                      <g>
                        <g transform="matrix(0.97168718,0,0,1.0291378,170.14515,0.038164)" aria-label={4} style={{fill: 'url("#Strips2_1")', fillOpacity: 1, stroke: 'none', strokeWidth: '1.23489'}}>
                          <path d="M -0.46490841,256.59082 H -26.166013 v 43.5298 h -41.214384 v -43.5298 h -75.829833 l -9.95629,-15.28174 64.136994,-140.0826 h 8.914347 l 33.573515,15.8606 -48.507941,89.60655 -11.461305,19.56526 h 39.130513 l 4.399288,-43.06672 h 36.815096 v 43.06672 h 25.70110459 z" style={{fill: 'url("#Strips2_1")', fillOpacity: 1, stroke: 'rgb(0, 0, 0)', strokeWidth: '1.23489', strokeOpacity: 1}} />
                        </g>
                        <g transform="matrix(0.97168718,0,0,1.0291378,377.95605,103.2934)" aria-label={4} style={{fill: 'url("#Strips2_1")', fillOpacity: 1, stroke: 'none', strokeWidth: '1.23489'}}>
                          <path d="m 147.55592,156.33602 h -25.70111 v 43.5298 H 80.640431 v -43.5298 H 4.8105946 L -5.1456892,141.05429 58.991302,0.97168512 h 8.914347 L 101.47916,16.832277 52.971223,106.43883 41.50992,126.00409 h 39.130511 l 4.399288,-43.06672 h 36.815091 v 43.06672 h 25.70111 z" style={{fill: 'url("#Strips2_1")', fillOpacity: 1, stroke: 'rgb(0, 0, 0)', strokeWidth: '1.23489', strokeOpacity: 1}} />
                        </g>
                      </g>
                    </svg>
                    <div className="error-404__text">
                      <p>Xin lỗi quý khách!</p>
                      <p>Trang này không tồn tại</p>
                    </div>
                    <div className="error-404__btn"><a href="/home" className="btn btn_large">Go home</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
