import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Sidemenu.css";
import dp from "../assets/dp.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { TbReport } from "react-icons/tb";
import jira from "../assets/jira.png";
import git from "../assets/git.png";
import slack from "../assets/slack.png";
import azure from "../assets/azure.png";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa6";

const Sidemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const collapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <motion.div
        className="sidemenu-container"
        initial={{ width: isOpen ? "66px" : "260px" }}
        animate={{ width: isOpen ? "66px" : "260px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="profile-section">
          <div className="profile">
            <button className="collapse" onClick={collapse}>
              {isOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </button>
            <div className="dp-profile">
              <img src={dp} alt="" />
            </div>

            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="right-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>Good Day 👍</div>
                  <div>ProTechScript</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="button-section">
          <button
            className={active === 0 ? "menu-btn btn-active" : " menu-btn"}
            onClick={() => {
              setActive(0);
            }}
          >
            <div className="btn-icon-container">
              <div className="btn-icon">
                <MdSpaceDashboard />
              </div>
            </div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="btn-name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Dashboard
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            className={active === 1 ? "menu-btn btn-active" : " menu-btn"}
            onClick={() => {
              setActive(1);
            }}
          >
            <div className="btn-icon-container">
              <div className="btn-icon">
                <FaTools />
              </div>
            </div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="btn-name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Tools
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            className={active === 2 ? "menu-btn btn-active" : " menu-btn"}
            onClick={() => {
              setActive(2);
            }}
          >
            <div className="btn-icon-container">
              <div className="btn-icon">
                <ImStatsBars2 />
              </div>
            </div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="btn-name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Analysis
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            className={active === 3 ? "menu-btn btn-active" : " menu-btn"}
            onClick={() => {
              setActive(3);
            }}
          >
            <div className="btn-icon-container">
              <div className="btn-icon">
                <TbReport />
              </div>
            </div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="btn-name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Report
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            className={active === 4 ? "menu-btn btn-active" : " menu-btn"}
            onClick={() => {
              setActive(4);
            }}
          >
            <div className="btn-icon-container">
              <div className="btn-icon">
                <FaFileCode />
              </div>
            </div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="btn-name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Algorithm
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            className={active === 5 ? "menu-btn btn-active" : " menu-btn"}
            onClick={() => {
              setActive(5);
            }}
          >
            <div className="btn-icon-container">
              <div className="btn-icon">
                <IoStatsChartSharp />
              </div>
            </div>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="btn-name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Statistics
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <div className="tools-section">
          <div className="tools">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <div className="tool-icon">
                <img src={jira} alt="" />
              </div>
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    className="tools-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Jira Software
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <div className="tool-icon">
                <img src={git} alt="" />
              </div>
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    className="tools-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    GitHub
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <div className="tool-icon">
                <img src={slack} alt="" />
              </div>
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    className="tools-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Slack
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <div className="tool-icon">
                <img src={azure} alt="" />
              </div>
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    className="tools-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Azure
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidemenu;
