export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:wght@300;400;500;600&display=swap');
      *{box-sizing:border-box;margin:0;padding:0;}
      body{background:#131313;color:#e5e2e1;font-family:'Work Sans',sans-serif;overflow-x:hidden;}
      button{cursor:pointer;border:none;background:none;font-family:'Work Sans',sans-serif;color:inherit;}
      input{font-family:'Work Sans',sans-serif;color:inherit;}
      .pat{background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 7.5L40 10l-7.5 2.5L30 20l-2.5-7.5L20 10l7.5-2.5z' fill='%23594238' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");}
      ::-webkit-scrollbar{width:4px;}
      ::-webkit-scrollbar-track{background:#131313;}
      ::-webkit-scrollbar-thumb{background:#594238;}
    `}</style>
  );
}