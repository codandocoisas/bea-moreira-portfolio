import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { introductionEvent } from "./Introduction";
import { roleEvent } from "./Role";
import { problemsEvent } from "./Problems";
import { goalsEvent } from "./Goals";
import { competitorsEvent } from "./Competitors";
import { empathyEvent } from "./EmpathyMap";
import { personaEvent } from "./Persona";
import { journeyEvent } from "./UserJourneyMap";
import { userflowEvent } from "./Userflow";
import { wireframesEvent } from "./Wireframes";
import { styleEvent } from "./StyleGuide";

type Props = {};

export default function SideMenu({}: Props) {
  const [pos, setPos] = useState("introduction");

  useEffect(() => {
    self.addEventListener("lp-introduction-visible", (e) => {
      if (e) {
        setPos("introduction");
      }
    });
    self.addEventListener("lp-role-visible", (e) => {
      if (e) {
        setPos("role");
      }
    });
    self.addEventListener("lp-problems-visible", (e) => {
      if (e) {
        setPos("problems");
      }
    });
    self.addEventListener("lp-goals-visible", (e) => {
      if (e) {
        setPos("goals");
      }
    });
    self.addEventListener("lp-competitors-visible", (e) => {
      if (e) {
        setPos("competitors");
      }
    });
    self.addEventListener("lp-empathy-visible", (e) => {
      if (e) {
        setPos("empathy-map");
      }
    });
    self.addEventListener("lp-persona-visible", (e) => {
      if (e) {
        setPos("persona");
      }
    });
    self.addEventListener("lp-journey-visible", (e) => {
      if (e) {
        setPos("journey-map");
      }
    });
    self.addEventListener("lp-userflow-visible", (e) => {
      if (e) {
        setPos("userflow");
      }
    });
    self.addEventListener("lp-wireframes-visible", (e) => {
      if (e) {
        setPos("wireframes");
      }
    });
    self.addEventListener("lp-style-visible", (e) => {
      if (e) {
        setPos("style-guide");
      }
    });
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="sticky left-0 top-1/3 text-[#ADADAD] font-poppins"
    >
      <ul className="grid grid-cols-1 gap-y-2 list-none">
        <li
          id="nav-introduction"
          className={`${pos === "introduction" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(introductionEvent);
              }, 1000);
            }}
            href="#introduction"
          >
            Introduction
          </Link>
        </li>
        <li id="nav-role" className={`${pos === "role" ? "nav-active" : ""}`}>
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(roleEvent);
              }, 1000);
            }}
            href="#role"
          >
            My role
          </Link>
        </li>
        <li
          id="nav-problems"
          className={`${pos === "problems" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(problemsEvent);
              }, 1000);
            }}
            href="#problems"
          >
            Problems
          </Link>
        </li>
        <li id="nav-goals" className={`${pos === "goals" ? "nav-active" : ""}`}>
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(goalsEvent);
              }, 1000);
            }}
            href="#goals"
          >
            Goals
          </Link>
        </li>
        <li
          id="nav-competitors"
          className={`${pos === "competitors" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(competitorsEvent);
              }, 1000);
            }}
            href="#competitors"
          >
            Competitive analysis
          </Link>
        </li>
        <li
          id="nav-empathy-map"
          className={`${pos === "empathy-map" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(empathyEvent);
              }, 1000);
            }}
            href="#empathy-map"
          >
            User empathy map
          </Link>
        </li>
        <li
          id="nav-persona"
          className={`${pos === "persona" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(personaEvent);
              }, 1000);
            }}
            href="#persona"
          >
            User persona
          </Link>
        </li>
        <li
          id="nav-journey"
          className={`${pos === "journey-map" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(journeyEvent);
              }, 1000);
            }}
            href="#journey-map"
          >
            User journey map
          </Link>
        </li>
        <li
          id="nav-userflow"
          className={`${pos === "userflow" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(userflowEvent);
              }, 1000);
            }}
            href="#userflow"
          >
            User flow diagram
          </Link>
        </li>
        <li
          id="nav-wireframes"
          className={`${pos === "wireframes" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(wireframesEvent);
              }, 1000);
            }}
            href="#wireframes"
          >
            Wireframes
          </Link>
        </li>
        <li
          id="nav-style-guide"
          className={`${pos === "style-guide" ? "nav-active" : ""}`}
        >
          <Link
            onClick={() => {
              setTimeout(() => {
                self.dispatchEvent(styleEvent);
              }, 1000);
            }}
            href="#style-guide"
          >
            Style guide
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
