import CategoryTitle from "./category_title";
import CategoryWrraper from "./category_wrraper"
import {Section} from "../../constants";
const Category = ()=>{
    return(
        <div className="categories-cintainer">
         <div className="categories-wrraper">
                {Section.map((itemSect)=>{
                    return (
                    <div key={itemSect.id} className="category">
                        <CategoryTitle itemSect={itemSect}/>
                        <CategoryWrraper itemSect={itemSect}/>
                    </div>
                )})}
            </div>
        </div>
     )
}
export default Category;