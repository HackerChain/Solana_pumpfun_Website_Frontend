import { DashboardIcon } from "../assets";
import { TokenTable } from "../components/Dashboard/TokenTable";
import { TitleBox } from "../components/TitleBox";
import { ToolBox } from "../components/Dashboard/ToolBox";
import { Pagination } from "../components/pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setError, setLoading, setTokens } from "../store/reducers/tokenSlice";
import api from "../utils/api";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tokens } = useSelector((state: RootState) => state.token);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUnit, setPageUnit] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [totalTokens, setTotalTokens] = useState(0);

  const fetchTokens = async () => {
    try {
      dispatch(setLoading(true));
      const offset = (currentPage - 1) * pageUnit;
      const response = await api.get(
        `/token/15m?limit=${pageUnit}&offset=${offset}`
      );

      // console.log("data =>", response.data);
      setTotalTokens(response.data.total);
      setTotalPages(Math.ceil(response.data.total / pageUnit));

      dispatch(setTokens(response.data.data));
    } catch (err: any) {
      dispatch(setError(err.message));
    }
  };

  useEffect(() => {
    fetchTokens();
  }, [currentPage, pageUnit]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray">
        <TitleBox title="Dashboard" icon={<DashboardIcon />} />
        <ToolBox />
        <TokenTable tokens={tokens} />
        <Pagination
          totaldata={totalTokens}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageUnit={pageUnit}
          setPageUnit={setPageUnit}
        />
      </div>
    </>
  );
};
