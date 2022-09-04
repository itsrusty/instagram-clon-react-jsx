import { useState } from "react";
import "../styles/App.css";
import { AiFillHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import { BsSave } from "react-icons/bs";

function App() {
  // state for likes post
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState("");

  // likes post
  function counterLikes(e) {
    setLike(like + 1);
  }

  function counterDoubleClick() {
    setLike(like + 1);
  }

  // showComments
  function addComment() {
  }

  return (
    <>
      <nav className="navigator">
        <p className="title">Instagram</p>
        <input type="text" className="search" placeholder="Buscar" />
        <ul className="navigator-tools">
          <li className="home">
            <AiFillHome />
          </li>
          <li className="message">
            <RiMessengerLine />
          </li>
          <li className="notify">
            <AiOutlineHeart />
          </li>
          <div className="profile-box">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/184654145_735145687529667_6682472991948525312_n.jpg?ccb=11-4&oh=01_AVwR1OohNJ-S0N6NUTHGUum_8re0Yu-SRhOLbDDPhuNG_w&oe=632275E2"
              alt=""
            />
          </div>
        </ul>
      </nav>
      <div className="content">
        <div className="content-history-friends">
          <div className="friend-history">
            <img
              src="https://images.chicmagazine.com.mx/yFVh6VGqgnFSSonWO1W3N9uj__o=/958x596/uploads/media/2021/11/30/los-influencers-mexicanos-mas-ricos.jpg"
              alt=""
            />
            <span>Michelle_gr</span>
          </div>
          <div className="friend-history">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLTuJmZH-bbCNzaeTm5J5wuBnyODiMpiklQ&usqp=CAU"
              alt=""
            />
            <span>Sofiagrx</span>
          </div>
          <div className="friend-history">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaRS7QJM6sKsrmp1pyIXGI3YbBSenJtcxjQ&usqp=CAU"
              alt=""
            />
            <span>Mariogal_</span>
          </div>
          <div className="friend-history">
            <img
              src="https://i.pinimg.com/736x/80/5c/45/805c4591aeeda14a97cbde5bbfb41a70.jpg"
              alt=""
            />
            <span>AngelCrz</span>
          </div>
          <div className="friend-history">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnuyUCpME022nViL6oQW76kqQC1hEWbc_kA&usqp=CAU"
              alt=""
            />
            <span>_Julia</span>
          </div>
          <div className="friend-history">
            <img
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/shutterstock_1145953094-1520x800.png"
              alt=""
              q
            />
            <span>Marina_</span>
          </div>
          <div className="friend-history">
            <img src="https://pbs.twimg.com/media/C6lORmoWkAAeRzr.jpg" alt="" />
            <span>Yewdielrzx</span>
          </div>
        </div>

        {/* cards here */}
        <div className="profile-content-bar">
          <div className="profile-box-2">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/184654145_735145687529667_6682472991948525312_n.jpg?ccb=11-4&oh=01_AVwR1OohNJ-S0N6NUTHGUum_8re0Yu-SRhOLbDDPhuNG_w&oe=632275E2"
              alt=""
            />
            <span className="profile-name-bar">hiram.dev</span>
            <span className="profile-name-bar-2">Hiram</span>
          </div>
          <section className="people-sugered">
            <p className="sugered-p">Sugerencias para ti</p>
            <ul className="people-content">
              <li>
                <AiOutlineUser />
                priv.angela_ <span className="follow">Seguir</span>
              </li>
              <li>
                taffy_gtz <span className="follow">Seguir</span>
              </li>
              <li>
                zavela_tony <span className="follow">Seguir</span>
              </li>
              <li>
                zavela_tony <span className="follow">Seguir</span>
              </li>
              <li>
                sam_trrs <span className="follow">Seguir</span>
              </li>
            </ul>
          </section>
        </div>
        <div className="cards">
          <div className="card-container">
            <div className="post-box">
              <p>
                <FaUserGraduate /> hiram.dev
              </p>
              <div className="post-image">
                <img
                  src="https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  onDoubleClick={counterDoubleClick}
                />
              </div>
              <div className="addComment">
                <span className="likeButton" onClick={counterLikes}>
                  <BsHeart />
                </span>
                <span className="likeds">{like} likes</span>
                <span className="commentButton">
                  <FaRegComment />
                </span>
                <span className="shareButton">
                  <MdIosShare />
                </span>
                <span className="saveButton">
                  <BsSave />
                </span>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="post-box">
              <p>
                <FaUserGraduate /> websitebrainy
              </p>
              <div className="post-image">
                <img
                  src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="post-box">
              <p>
                <FaUserGraduate /> websitebrainy
              </p>
              <div className="post-image">
                <img
                  src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="post-box">
              <p>
                <FaUserGraduate /> websitebrainy
              </p>
              <div className="post-image">
                <img
                  src="https://images.pexels.com/photos/6964166/pexels-photo-6964166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="post-box">
              <p>
                <FaUserGraduate /> websitebrainy
              </p>
              <div className="post-image">
                <img
                  src="https://images.pexels.com/photos/6963939/pexels-photo-6963939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
