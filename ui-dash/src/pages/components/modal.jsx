import React, { useState, useRef } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Textinput from "@/components/ui/Textinput";

const ModalPage = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="مدال ساده">
        <div className=" space-xy-5">
          <Modal
            title="مدال ساده"
            label="مدال ساده"
            labelClass="btn-outline-dark"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="عمودی وسط"
            label="عمودی وسط"
            labelClass="btn-outline-dark"
            uncontrol
            centered
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="بکدراپ غیر فعال"
            label="بکدراپ غیر فعال"
            labelClass="btn-outline-dark"
            uncontrol
            disableBackdrop
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="انیمیشن غیر فعال"
            label="انیمیشن غیر فعال"
            labelClass="btn-outline-dark"
            uncontrol
            noFade
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
        </div>
      </Card>
      <Card title="نمای مدال">
        <div className=" space-xy-5">
          <Modal
            title="اصلی"
            label="اصلی"
            labelClass="btn-outline-primary"
            themeClass="bg-primary-500"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-primary "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="ثانویه"
            label="ثانویه "
            labelClass="btn-outline-secondary"
            themeClass="bg-secondary-500"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-secondary "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="موفق"
            label="موفق "
            labelClass="btn-outline-success"
            themeClass="bg-success-500"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-success "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="درباره"
            label="درباره "
            labelClass="btn-outline-info"
            themeClass="bg-info-500"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-info "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="هشدار"
            label="هشدار "
            labelClass="btn-outline-warning"
            themeClass="bg-warning-500"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-warning "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="روشن"
            label="روشن "
            labelClass="btn-outline-light"
            themeClass="bg-slate-600 text-slate-900"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="bg-slate-600 text-white"
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
        </div>
      </Card>
      <Card title="Size Modal">
        <div className=" space-xy-5">
          <Modal
            title="خیلی کوچک"
            label="خیلی کوچک"
            labelClass="btn-outline-dark"
            uncontrol
            className="max-w-xs"
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="مدال کوچک"
            label="مدال کوچک"
            labelClass="btn-outline-dark"
            className="max-w-md"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 class="font-medium text-lg mb-3 text-slate-900">متن عنوان</h4>
            <div class="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="مدال پیشفرض"
            label="مدال پیشفرض"
            labelClass="btn-outline-dark"
            uncontrol
            className="max-w-xs"
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 class="font-medium text-lg mb-3 text-slate-900">متن عنوان</h4>
            <div class="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="مدال بزرگ"
            label="مدال بزرگ"
            labelClass="btn-outline-dark"
            uncontrol
            className="max-w-5xl"
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 class="font-medium text-lg mb-3 text-slate-900">متن عنوان</h4>
            <div class="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
          <Modal
            title="مدال خیلی بزرگ"
            label="مدال خیلی بزرگ"
            labelClass="btn-outline-dark"
            uncontrol
            className="max-w-fit"
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 class="font-medium text-lg mb-3 text-slate-900">متن عنوان</h4>
            <div class="text-base text-slate-600 dark:text-slate-300">
              متن تستی
            </div>
          </Modal>
        </div>
      </Card>
      <Card title="مدال همراه با فرم با قابلیت اسکرول">
        <div className=" space-xy-5">
          <Modal
            title="مدال لاگین"
            label="لاگین"
            labelClass="btn-outline-dark"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <div className="text-base text-slate-600 dark:text-slate-300">
              <Textinput
                label="ایمیل"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
              />
              <Textinput
                label="رمز عبور"
                type="password"
                placeholder="8 کاراکتر و خداقل یک حرف بزرگ"
              />
            </div>
          </Modal>
          <Modal
            title="مدال بزرگ هماره با اسکرول"
            label="مدال بزرگ همراه با اسکرول "
            labelClass="btn-outline-dark"
            uncontrol
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
            </div>
          </Modal>
          <Modal
            title="مدال همراه با اسکرول"
            label="مدال همراه با اسکرول"
            labelClass="btn-outline-dark"
            uncontrol
            scrollContent
            footerContent={
              <Button
                text="قبول"
                className="btn-dark "
                onClick={() => {
                  alert("استفاده از کنترل مدال");
                }}
              />
            }
          >
            <h4 className="font-medium text-lg mb-3 text-slate-900">
              متن عنوان
            </h4>
            <div className="text-base text-slate-600 dark:text-slate-300">
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
              <br />
              <br />
              متن تستی
            </div>
          </Modal>
        </div>
      </Card>
    </div>
  );
};

export default ModalPage;
