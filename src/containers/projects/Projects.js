import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  // Auto-slide effect for tiles
  useEffect(() => {
    if (
      openSource.autoSlide &&
      openSource.displayFormat === "tiles" &&
      repo.length > 0
    ) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % repo.length);
      }, openSource.slideInterval || 4000);
      return () => clearInterval(interval);
    }
  }, [repo]);

  function setrepoFunction(array) {
    setrepo(array);
  }

  const displayFormat = openSource.displayFormat || "list";
  const isTileFormat = displayFormat === "tiles";

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div
            className={
              isTileFormat
                ? "repo-cards-div-main repo-tiles-layout"
                : "repo-cards-div-main"
            }
          >
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              const isActive = isTileFormat
                ? i === currentSlide ||
                  i === (currentSlide + 1) % repo.length ||
                  i === (currentSlide + 2) % repo.length
                : true;
              return (
                <div
                  key={v.node.id}
                  className={
                    isTileFormat
                      ? isActive
                        ? "repo-tile-wrapper active-tile"
                        : "repo-tile-wrapper"
                      : ""
                  }
                  style={
                    isTileFormat && !isActive ? {display: "none"} : undefined
                  }
                >
                  <GithubRepoCard repo={v} isDark={isDark} />
                </div>
              );
            })}
          </div>
          {isTileFormat && (
            <div className="slide-indicators">
              {repo.map((_, i) => (
                <button
                  key={i}
                  className={
                    i === currentSlide
                      ? "slide-indicator active"
                      : "slide-indicator"
                  }
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
