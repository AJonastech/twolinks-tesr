/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Nav from "../Components/Nav";
import { useEffect, useState} from "react";
import axios from "axios";
import { useContext } from "react";
import { themeData } from "../App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { countryData } from "../utils";
function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const theme = useContext(themeData);
  const API_KEY = "cd185694-d7bf-4e3a-8493-7449aff79ae3";
  function handleQuery() {
    setLoading(true);
    const params = { keywords: keyword, location: "USA" };

    axios
      .post("https://jooble.org/api/" + API_KEY, params, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setJobs(response.data.jobs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const params = { page: "1", location: "USA" };

    axios
      .post("https://jooble.org/api/" + API_KEY, params, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setJobs(response.data.jobs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
   
 
  }, []);
  console.log(countryData[196]);
  console.log(jobs);
  return (
    <section>
      <Nav showJob={true} />
      <main
        style={{ backgroundColor: theme.containerColor, color: theme.color }}
        className=" z-0 px-5 w-full min-h-[100vh] py-2"
      >
        <div className="flex mt-[70px]  w-full h-full">
          <div
            style={{
              backgroundColor: theme.bgColor,
              borderColor: theme.borderColor,
              borderWidth: "1px",
            }}
            className="rounded-lg basis-1/3 md:block hidden xl:basis-1/4  min-h-[100px] "
          >
            <div
              style={{
                borderBottomColor: theme.borderColor,
                borderBottomWidth: "1px",
              }}
              className="px-3 py-5 text-[15px]"
            >
              Filters
            </div>
            <div className="px-5 py-5 ">
         
            </div>
          </div>
          <div className="xl:basis-1/2 md:basis-2/3 basis-full min-h-100vh overflow-x-scroll  mx-4">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleQuery();
                }}
              >
                <input
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  type="text"
                  style={{
                    backgroundColor: theme.bgColor,
                    borderColor: theme.borderColor,
                    borderWidth: "1px",
                  }}
                  className="opacity-50 w-full outline-none px-2 py-3  rounded-md mb-5 "
                  placeholder="Search Jobs..."
                />
              </form>
            </div>
            {loading ? (
              <Skeleton
                className="mb-3"
                baseColor="#6f99cd"
                highlightColor="#e2ebf7"
                count={7}
                height={100}
              />
            ) : (
              jobs.map((job, id) => (
                <div
                  key={id}
                  style={{
                    backgroundColor: theme.bgColor,
                    borderColor: theme.borderColor,
                    borderWidth: "1px",
                  }}
                  className="flex mb-3 rounded-md items-center px-3 py-6 justify-between "
                >
                  <div className="flex items-start">
                    <img
                      className="w-[50px] h-[50px] mr-2 rounded-md"
                      src="https://plus.unsplash.com/premium_photo-1663012956676-2cf7304c27b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Company's Photo"
                    />
                    <div className=" mt-[-7px]">
                      <h3 className="text-[15px]">{job.title}</h3>
                      <p className="text-[14px]">{job.company}</p>
                      <p className="text-[11px]">{job.location}</p>
                      <p className="text-[10px] mt-2">Remote</p>
                    </div>
                  </div>
                  <div>
                    <button
                      style={{ backgroundColor: theme.buttonColor }}
                      className="px-3 text-sm rounded-md text-white py-2"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div
            style={{
              backgroundColor: theme.bgColor,
              borderColor: theme.borderColor,
              borderWidth: "1px",
            }}
            className="hidden xl:block xl:basis-1/4 min-h-[100px] "
          ></div>
        </div>
      </main>
    </section>
  );
}

export default Jobs;
