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
import { FETCH_CYCLE } from "../config";
import { TableLoading } from "../components/Loading/TableLoading";
import { useSearch } from "../hooks/useDebounce";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tokens } = useSelector((state: RootState) => state.token);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUnit, setPageUnit] = useState(10); // 10, 20, 50
  const [totalPages, setTotalPages] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [during, setDuring] = useState("15m"); // 15m, 3h, 3h
  const { searchTerm, setSearchTerm } = useSearch("");

  const fetchTokens = async () => {
    try {
      dispatch(setLoading(true));
      const offset = (currentPage - 1) * pageUnit;

      let url = `/token/${during}?limit=${pageUnit}&offset=${offset}`;

      if (searchTerm.trim()) url += `&search=${searchTerm}`;
      console.log("url => ", url);

      const response = await api.get(url);
      setTotalCount(response.data.total);
      setTotalPages(Math.ceil(response.data.total / pageUnit));
      console.log("token data => ", response.data.data);
      // Dispatch the new tokens data to Redux store
      dispatch(setTokens(response.data.data));
      dispatch(setLoading(false));
    } catch (err: any) {
      dispatch(setError(err.message));
    }
  };

  useEffect(() => {
    fetchTokens();

    // Set up interval for subsequent fetches
    const interval = setInterval(() => {
      fetchTokens();
    }, FETCH_CYCLE);
    return () => clearInterval(interval);
  }, [currentPage, pageUnit, during, searchTerm]);
  const { loading } = useSelector((state: RootState) => state.token);
  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-auto h-full bg-bg_gray w-full relative">
        <TitleBox
          title="Dashboard"
          icon={<DashboardIcon />}
          keyword={searchTerm}
          setKeyword={setSearchTerm}
        />
        <ToolBox during={during} setDuring={setDuring} />
        <TokenTable tokens={tokens} />
        <Pagination
          totaldata={totalCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          pageUnit={pageUnit}
          setPageUnit={setPageUnit}
        />
        {loading && <TableLoading />}
      </div>
    </>
  );
};
