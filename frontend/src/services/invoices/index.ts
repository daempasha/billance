import { billanceApi } from "@services";
import { GetInvoicesParams, GetInvoicesResponse } from "@utils";

const invoicesApi = billanceApi.injectEndpoints({
  endpoints: (build) => ({
    getInvoices: build.query<GetInvoicesResponse, GetInvoicesParams>({
      query: () => ({
        url: "/api/invoices",
        method: "GET",
      }),
    }),
  }),
});

export const { getInvoices } = invoicesApi.endpoints;
