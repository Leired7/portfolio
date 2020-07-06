import React from 'react';

import './styles.scss';

import Card from 'components/Card/index';

import { projectList } from 'services/projectList';

function ProjectList() {
  const orderList = projectList
    .sort(function (firstProjectItem, secondProjectItem) {
      if (firstProjectItem.id < secondProjectItem.id) return -1;
      if (firstProjectItem.id > secondProjectItem.id) return 1;
      return 0;
    })
    .reverse();

  return (
    <section className="portfolio">
      <h2 className="section__portfolio-title">Proyectos</h2>
      <div className="projecst__container">
        <ul className="projects__container-list">
          {orderList.map((project) => {
            return (
              <li className="projects__container-item">
                <Card
                  key={project.id}
                  backgroundColor={project.backgroundColor}
                  codeArialLabel={project.codeArialLabel}
                  codeUrl={project.codeUrl}
                  description={project.description}
                  id={project.id}
                  image={project.image}
                  name={project.name}
                  technology={project.technology}
                  webArialLabel={project.webArialLabel}
                  webUrl={project.webUrl}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ProjectList;
