function UniversalText(children,fontSize,fontWeight,colorText) {
  return (
  <>
<p style={{fontSize:fontSize,fontWeight:fontWeight,color:colorText,fontFamily:'Gilroy'}}>{children}</p>
  </>
  );
}

export default UniversalText;
