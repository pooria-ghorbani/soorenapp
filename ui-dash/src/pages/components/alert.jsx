import React from "react";
import Card from "@/components/ui/Card";
import Alert from "@/components/ui/Alert";
import { Link } from "react-router-dom";

const alert = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="نمای رنگی هشدار ها">
        <div className=" space-y-4">
          <Alert label="این یک پیغام است!" className="alert-primary" />
          <Alert label="این یک پیغام است!" className="alert-secondary" />
          <Alert label="این یک پیغام است!" className="alert-success" />
          <Alert label="این یک پیغام است!" className="alert-danger" />
          <Alert label="این یک پیغام است!" className="alert-warning" />
          <Alert label="این یک پیغام است!" className="alert-info" />
          <Alert label="این یک پیغام است!" className="alert-light" />
          <Alert label="این یک پیغام است!" className="alert-dark" />
        </div>
      </Card>
      <Card title="پیغام رنگ روشن">
        <div className=" space-y-4">
          <Alert
            label="این یک پیغام است!"
            className="alert-primary light-mode"
          />
          <Alert
            label="این یک پیغام است!"
            className="alert-secondary light-mode"
          />
          <Alert
            label="این یک پیغام است!"
            className="alert-success light-mode"
          />
          <Alert
            label="این یک پیغام است!"
            className="alert-danger light-mode"
          />
          <Alert
            label="این یک پیغام است!"
            className="alert-warning light-mode"
          />
          <Alert label="این یک پیغام است!" className="alert-info light-mode" />
          <Alert label="این یک پیغام است!" className="alert-light light-mode" />
          <Alert label="این یک پیغام است!" className="alert-dark light-mode" />
        </div>
      </Card>
      <div className="xl:col-span-2 col-span-1">
        <Card title="رنگ های لینک">
          <div className="space-y-5">
            <Alert className="bg-slate-800 bg-opacity-[14%] text-slate-800 dark:bg-slate-500 dark:bg-opacity-[14%]  dark:text-slate-300">
              این پیغام همراه با
              <Link
                to="#"
                className="underline text-slate-900 dark:text-slate-300 text-sm font-medium"
              >
                لینک نمونه
              </Link>
              بررسی شده
            </Alert>
            <Alert className="bg-primary-500 bg-opacity-[14%] text-primary-500 dark:bg-primary-500 dark:bg-opacity-[14%]">
              این پیغام همراه با
              <Link
                to="#"
                className="underline text-primary-500 text-sm font-medium"
              >
                لینک نمونه
              </Link>
              .کلیک شده!
            </Alert>
            <Alert className="bg-secondary-500 bg-opacity-[14%] text-slate-600 dark:bg-secondary-500 dark:bg-opacity-[14%]">
              این پیغام همراه با
              <Link
                to="#"
                className="underline text-slate-600 text-sm font-medium"
              >
                لینک نمونه
              </Link>
              .کلیک شده!
            </Alert>
            <Alert className="bg-success-500 bg-opacity-[14%] text-success-500 dark:bg-success-500 dark:bg-opacity-[14%]">
              این پیغام همراه با
              <Link
                to="#"
                className="underline text-success-500 text-sm font-medium"
              >
                لینک نمونه
              </Link>
              .کلیک شده!
            </Alert>
            <Alert className="bg-info-500 bg-opacity-[14%] text-info-500 dark:bg-info-500 dark:bg-opacity-[14%]">
              این پیغام همراه با
              <Link
                to="#"
                className="underline text-info-500 text-sm font-medium"
              >
                لینک نمونه
              </Link>
              .کلیک شده!
            </Alert>
            <Alert className="bg-warning-500 bg-opacity-[14%] text-warning-500 dark:bg-warning-500 dark:bg-opacity-[14%]">
              این پیغام همراه با
              <Link
                to="#"
                className="underline text-warning-500 text-sm font-medium"
              >
                لینک نمونه
              </Link>
              .کلیک شده!
            </Alert>
            <Alert className="bg-danger-500 bg-opacity-[14%] text-danger-500 dark:bg-danger-500 dark:bg-opacity-[14%]">
              این پیغام همراه با
              <Link
                to="#"
                className="underline text-danger-500 text-sm font-medium"
              >
                لینک نمونه
              </Link>
              .کلیک شده!
            </Alert>
          </div>
        </Card>
      </div>
      <Card title="رد کردن نمای رنگی هشدار ها همراه با آیکون ">
        <div className="space-y-4">
          <Alert dismissible icon="fluent:target-20-regular">
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="fluent:target-20-regular"
            className="alert-primary"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:support"
            className="alert-secondary"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="akar-icons:double-check"
            className="alert-success"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:exclamation"
            className="alert-danger"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:ban"
            className="alert-warning"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:information-circle"
            className="alert-info"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:exclamation"
            className="alert-light"
          >
            این یک پیغام است!
          </Alert>
        </div>
      </Card>
      <Card title="رد کردن پیغام رنگ روشن همراه با آیکون ">
        <div className=" light-mode space-y-4">
          <Alert
            dismissible
            icon="fluent:target-20-regular"
            className=" alert-dark light-mode"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="fluent:target-20-regular"
            className=" light-mode alert-primary"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:support"
            className=" light-mode alert-secondary"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="akar-icons:double-check"
            className=" light-mode alert-success"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:exclamation"
            className=" light-mode alert-danger"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:ban"
            className=" light-mode alert-warning"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:information-circle"
            className=" light-mode alert-info"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:exclamation"
            className=" light-mode alert-light"
          >
            این یک پیغام است!
          </Alert>
        </div>
      </Card>
      <Card title="Outline نمای رنگی هشدار ها">
        <div className=" space-y-4">
          <Alert label="این یک پیغام است!" className="alert-outline-primary" />
          <Alert
            label="این یک پیغام است!"
            className="alert-outline-secondary"
          />
          <Alert label="این یک پیغام است!" className="alert-outline-success" />
          <Alert label="این یک پیغام است!" className="alert-outline-danger" />
          <Alert label="این یک پیغام است!" className="alert-outline-warning" />
          <Alert label="این یک پیغام است!" className="alert-outline-info" />
          <Alert label="این یک پیغام است!" className="alert-outline-light" />
          <Alert label="این یک پیغام است!" className="alert-outline-dark" />
        </div>
      </Card>
      <Card title="Outline پیغام رنگ روشن همراه با آیکون ">
        <div className="space-y-4">
          <Alert
            dismissible
            icon="fluent:target-20-regular"
            className="alert-outline-dark"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="fluent:target-20-regular"
            className="alert-outline-primary"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:support"
            className="alert-outline-secondary"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="akar-icons:double-check"
            className="alert-outline-success"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:exclamation"
            className="alert-outline-danger"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:ban"
            className="alert-outline-warning"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:information-circle"
            className="alert-outline-info"
          >
            این یک پیغام است!
          </Alert>
          <Alert
            dismissible
            icon="heroicons-outline:exclamation"
            className="alert-outline-light"
          >
            این یک پیغام است!
          </Alert>
        </div>
      </Card>
      ;
    </div>
  );
};

export default alert;
