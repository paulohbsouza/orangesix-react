import { TableProps } from "../types";
import { DataTableBaseProps } from "primereact/datatable";

/**
 * Componente - `Table`
 *
 * Define as configurações do modo principal da tabela.
 */
export function tableCore(
    props: TableProps<any>
): Partial<DataTableBaseProps<any>> {
    return {
        value: props.data as any,
        dataKey: "id",
        lazy: props.lazy !== undefined,
        resizableColumns: props.styleResizable ?? false,
        columnResizeMode: "expand",
        emptyMessage: props.emptyMessage ?? "Não há informações disponíveis no momento.",
        header: props.templeteHeader,
        footer: props.templateFooter,
        stripedRows: props.styleStriped,
        size: props.styleSize,
        showGridlines: props.styleType === "bordered"
    };
}