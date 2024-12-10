import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";
import ProductSkeleton from "./components/productSkeleton";

const ProductLoading = () => {
    const products = [
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },
        {
            imageUrl: " ",
            name: "",
            paragraph: "",
            href: ""
        },

    ]
    return (
        <div
            className="
            flex 
            flex-col 
            space-y-5">
            <div
                className="
                px-1 
                sm:px-2 
                md:px-4 
                lg:px-10">
                <Heading
                    title="Products"
                    subtitle="Following are the products we offer at Sujata Technical Services Pvt. Ltd"
                />
            </div>
            <Separator />
            <div className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                space-y-10
                px-2
                sm:px-4
                md:container
                ">
                <div
                    className="
                    w-full
                    flex
                    flex-wrap
                    gap-10
                    "
                >
                    {products.map((product, index) => (
                        <ProductSkeleton
                            key={index}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            paragraph={product.paragraph}
                            href={product.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductLoading;