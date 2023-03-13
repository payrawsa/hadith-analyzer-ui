//id,hadith_id,source,chapter_no,hadith_no,chapter,chain_indx,text_ar,text_en


export const columnDefs = [
    { field: 'id', hide: true },
    { field: 'hadith_id' },
    { field: 'source' },
    { field: 'chapter_no' },
    { field: 'hadith_no' },
    { field: 'chapter' },
    { field: 'chain_indx' },
    { field: 'text_ar' },
    { field: 'text_en' },
]

export const defaultColDef= {
    resizable: true,
}