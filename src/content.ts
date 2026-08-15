export type Flavor =
  | "lemonLime"
  | "grape"
  | "blackCherry"
  | "strawberryLemonade"
  | "watermelon";

export type RichTextBlock = {
  type: "heading1" | "heading2" | "paragraph";
  text: string;
};

export type HeroSlice = {
  slice_type: "hero";
  slice_label: null;
  primary: {
    heading: RichTextBlock[];
    subheading: RichTextBlock[];
    body: RichTextBlock[];
    button_text: string | null;
    button_link: string;
    cans_image: { src: string; alt: string | null };
    second_heading: RichTextBlock[];
    second_body: RichTextBlock[];
  };
};

export type SkyDiveSlice = {
  slice_type: "sky_dive";
  slice_label: null;
  primary: {
    sentence: string | null;
    flavor: Flavor;
  };
};

export type CarouselSlice = {
  slice_type: "carousel";
  slice_label: null;
  primary: {
    heading: RichTextBlock[];
    price_copy: RichTextBlock[];
  };
};

export type AlternatingTextSlice = {
  slice_type: "alternating_text";
  slice_label: null;
  primary: {
    text_group: {
      heading: RichTextBlock[];
      body: RichTextBlock[];
    }[];
  };
};

export type BigTextSlice = {
  slice_type: "big_text";
  slice_label: null;
  primary: Record<string, never>;
};

export type Slice =
  | HeroSlice
  | SkyDiveSlice
  | CarouselSlice
  | AlternatingTextSlice
  | BigTextSlice;

export type HomePage = {
  title: string;
  meta_title: string;
  meta_description: string;
  slices: Slice[];
};

export const homePage: HomePage = {
  title: "Fizzi - Soda for Gutsy People",
  meta_title: "Fizzi - Soda for Gutsy People",
  meta_description:
    "Discover the refreshing taste of Fizzi, focused on gut health, featuring low-calorie, big-flavor drinks made with natural ingredients.",
  slices: [
    {
      slice_type: "hero",
      slice_label: null,
      primary: {
        heading: [{ type: "heading1", text: "Live Gutsy" }],
        subheading: [{ type: "paragraph", text: "Soda Perfected" }],
        body: [
          {
            type: "paragraph",
            text: "3-5g sugar. 9g fiber. 5 delicious flavors.",
          },
        ],
        button_text: "Shop Now",
        button_link: "https://prismic.io",
        cans_image: {
          src: "/cans/all-cans-bunched.png",
          alt: "All of the Fizzi Flavors",
        },
        second_heading: [{ type: "heading2", text: "Try all five flavors" }],
        second_body: [
          {
            type: "paragraph",
            text: "Our soda is made with real fruit juice and a touch of cane sugar. We never use artificial sweeteners or high fructose corn syrup. Try all five flavors and find your favorite!",
          },
        ],
      },
    },
    {
      slice_type: "sky_dive",
      slice_label: null,
      primary: {
        sentence: "Dive into better health",
        flavor: "lemonLime",
      },
    },
    {
      slice_type: "carousel",
      slice_label: null,
      primary: {
        heading: [{ type: "heading2", text: "Choose Your Flavor" }],
        price_copy: [{ type: "paragraph", text: "12 cans - $35.99" }],
      },
    },
    {
      slice_type: "alternating_text",
      slice_label: null,
      primary: {
        text_group: [
          {
            heading: [
              { type: "heading2", text: "Gut-Friendly Goodness" },
            ],
            body: [
              {
                type: "paragraph",
                text: "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
              },
            ],
          },
          {
            heading: [
              { type: "heading2", text: "Light Calories, Big Flavor" },
            ],
            body: [
              {
                type: "paragraph",
                text: "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
              },
            ],
          },
          {
            heading: [
              { type: "heading2", text: "Naturally Refreshing" },
            ],
            body: [
              {
                type: "paragraph",
                text: "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
              },
            ],
          },
        ],
      },
    },
    {
      slice_type: "big_text",
      slice_label: null,
      primary: {},
    },
  ],
};
