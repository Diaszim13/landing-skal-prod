import { ArrowCircleRight, Laptop, MagnifyingGlass, Pencil, Lock, HourglassMedium, CaretRight } from "phosphor-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./style.css";

export function Roadmap() {
  return (
    <section className="roadmap">
      <div>
        <h2>Roadmap</h2>
        <Tabs className="tabs-roadmap">
          <TabList className="list-roadmap">
            <Tab>Fase 01</Tab>
            <Tab>Fase 02</Tab>
            {/* <Tab disabled>Fase 03</Tab> */}
          </TabList>

          <TabPanel>
            <div className="panel-roadmap">
              <div>
                <h3>Pesquisa</h3>
                <MagnifyingGlass size={22} weight="duotone" />
              </div>
              <p><CaretRight size={20} className="text-effect" />
                 Pesquisa de mercado;
              </p>
              <p><CaretRight size={20} className="text-effect" />
                Expansão do time;
              </p>
              <p><CaretRight size={20} className="text-effect"/>
                Branding.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-roadmap">
              <div>
                <h3>Desenvolvimento</h3>
                <Laptop size={22} weight="duotone" />
              </div>
              <p><CaretRight size={20} className="text-effect" />
                 Desenvolver carteira de tickets;
              </p>
              <p><CaretRight size={20} className="text-effect" />
                Desenvolver marketplace de tickets;
              </p>
              <p><CaretRight size={20} className="text-effect"/>
                Desenvolver feed de eventos.
              </p>
            </div>
          </TabPanel>
          {/* <TabPanel>
            <div className="panel-roadmap">
              <div>
                <h3>Título 03</h3>
                <Laptop size={22} weight="duotone" />
              </div>
              <p> <span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p> <span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p>	<span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
            </div>
          </TabPanel> */}
        </Tabs>
      </div>
    </section>
  );
}
