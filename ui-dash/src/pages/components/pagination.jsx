import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add any other logic you need here, such as making an API call to fetch data for the new page
  };
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="پجینیشن ساده">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Card>
      <Card title="پچینیشن همراه با بکگراند">
        <Pagination
          className="bg-slate-100 dark:bg-slate-500  w-fit py-2 px-3 rounded mx-auto"
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Card>
      <div className="xl:col-span-2  col-span-1">
        <Card title="پجینیشن همراه با متن">
          <Pagination
            text
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Card>
      </div>
    </div>
  );
};

export default PaginationPage;
