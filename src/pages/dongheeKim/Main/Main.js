import React, { Component } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import '../../../components/Nav/Nav.scss';

class MainDonghee extends Component {
  render() {
    return (
      <div class="MainDonghee">
        <Nav />
        {/* <nav>
          <div class="nav-logo">
            <div class="nav-logo_image"></div>

            <div class="nav-logo_text">Westagram</div>
          </div>

          <div class="nav-search">
            <input type="text" placeholder="검색" />

            <i class="fas fa-search"></i>
          </div>

          <div class="nav-icons">
            <a href="#">
              <div class="nav-icons_safari"></div>
            </a>

            <a href="#">
              <div class="nav-icons_heart"></div>
            </a>

            <a href="#">
              <div class="nav-icons_person"></div>
            </a>
          </div>
        </nav> */}

        {
          <main>
            <div class="feeds">
              <article>
                <div class="feeds-profile">
                  <div class="feeds-profile_account">
                    <div class="feeds-profile_account_pic profile_pic"></div>

                    <div class="feeds-profile_account_name">
                      <span class="bold">hayeonsoo_</span>
                    </div>
                  </div>

                  <div class="feeds-profile_dot">
                    <svg
                      aria-label="옵션"
                      class="_8-yf5 "
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <circle
                        clip-rule="evenodd"
                        cx="8"
                        cy="24"
                        fill-rule="evenodd"
                        r="4.5"
                      ></circle>

                      <circle
                        clip-rule="evenodd"
                        cx="24"
                        cy="24"
                        fill-rule="evenodd"
                        r="4.5"
                      ></circle>

                      <circle
                        clip-rule="evenodd"
                        cx="40"
                        cy="24"
                        fill-rule="evenodd"
                        r="4.5"
                      ></circle>
                    </svg>
                  </div>
                </div>

                <div class="feeds-pic"></div>

                <div class="feeds-status">
                  <div class="feeds-status-icons">
                    <a href="#">
                      <div class="feeds-status-icon_heart miniIcon">
                        <svg
                          aria-label="좋아요"
                          class="_8-yf5 "
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </div>
                    </a>

                    <a href="#">
                      <div class="feeds-status-icon_chat miniIcon">
                        <svg
                          aria-label="댓글 달기"
                          class="_8-yf5 "
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </a>

                    <a href="#">
                      <div class="feeds-status-icon_send miniIcon">
                        <svg
                          aria-label="게시물 공유"
                          class="_8-yf5 "
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>

                  <a href="#">
                    <div class="feeds-status-icon_bookmark">
                      <svg
                        aria-label="저장"
                        class="_8-yf5 "
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                      </svg>
                    </div>
                  </a>
                </div>

                <div class="feeds-text">
                  <div class="feeds-text_like">
                    <span class="bold">wecode_bootcamp님 외 100명</span>이
                    좋아합니다
                  </div>

                  <div>
                    <span class="accountName">hayeonsoo_</span>고양이🐱
                  </div>
                </div>

                <div class="font-graysmall feeds-text_minutes">
                  <span>7분 전</span>
                </div>

                <div class="feeds-comment">
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    class="feeds-comment_box"
                  />

                  <button class="feeds-comment_btn">게시</button>
                </div>
              </article>
            </div>

            <div class="profile">
              <div class="myProfile">
                <div class="myProfile-pic"></div>

                <div class="profilename">
                  <span class="bold">dlwlrma</span>

                  <span class="font-gray">이지금 IU</span>
                </div>
              </div>

              <div class="story">
                <div class="profile_header">
                  <span class="font-graybold">스토리</span>

                  <span class="bold">모두보기</span>
                </div>

                <div class="story-account">
                  <div class="story_pic1 profile_pic"></div>

                  <div class="profilename">
                    <span class="bold">wecode_bootcamp</span>

                    <span class="font-gray">5분 전</span>
                  </div>
                </div>

                <div class="story-account">
                  <div class="story_pic2 profile_pic"></div>

                  <div class="profilename">
                    <span class="bold">kimyk10</span>

                    <span class="font-gray">10분 전</span>
                  </div>
                </div>

                <div class="story-account">
                  <div class="story_pic3 profile_pic"></div>

                  <div class="profilename">
                    <span class="bold">songkang_b</span>

                    <span class="font-gray">30분 전</span>
                  </div>
                </div>
              </div>

              <div class="recommend">
                <div class="profile_header">
                  <span class="font-graybold">회원님을 위한 추천</span>

                  <span class="bold">모두보기</span>
                </div>

                <div class="recommend-wrap">
                  <div class="recommend-account">
                    <div class="recommend-pic1 profile_pic"></div>

                    <div class="profilename">
                      <span class="bold">byemypie</span>

                      <span class="font-gray">songkang_b님 외 10분이...</span>
                    </div>
                  </div>

                  <span class="font-blue">팔로우</span>
                </div>

                <div class="recommend-wrap">
                  <div class="recommend-account">
                    <div class="recommend-pic2 profile_pic"></div>

                    <div class="profilename">
                      <span class="bold">verte.official</span>

                      <span class="font-gray">hayeonsoo_님 외 30분이...</span>
                    </div>
                  </div>

                  <span class="font-blue">팔로우</span>
                </div>

                <div class="recommend-wrap">
                  <div class="recommend-account">
                    <div class="recommend-pic3 profile_pic"></div>

                    <div class="profilename">
                      <span class="bold">woo_238</span>

                      <span class="font-gray">kimyk10님 외 20분이...</span>
                    </div>
                  </div>

                  <span class="font-blue">팔로우</span>
                </div>
              </div>

              <div class="info">
                <p class="font-graysmall">
                  소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·
                  <br />
                  개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어{' '}
                  <br />
                  <br />© 2021 INSTAGRAM FROM FACEBOOK
                </p>
              </div>
            </div>
          </main>
        }
      </div>
    );
  }
}

export default MainDonghee;
