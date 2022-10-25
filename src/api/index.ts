import request from "../plugins/axios";

export const apiFetchHomeHeros = async (count: number) => {
    const res = await request
        .get<Project[]>("/project/random?count=" + count)
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        const heroImgs: HeroImg[] = res.data.map((item) => {
            return {
                src: item.hero_img,
                href: "/projects/" + item.id,
            };
        });
        return heroImgs;
    } else {
        return [];
    }
};

export const apiFetchHomeNews = async (count: number) => {
    const res = await request
        .get<News[]>("/news/all?count=" + count)
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return [];
    }
};

export const apiFetchNews = async (id: string) => {
    const res = await request.get<News>("/news/" + id).catch((err) => {
        console.log(err);
        return null;
    });
    if (res) {
        return res.data;
    } else {
        return null;
    }
};

export const apiFetchHomeProjects = async (count: number) => {
    const res = await request
        .get<Project[]>("/project/random?count=" + count)
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return [];
    }
};

export const apiFetchPapers = async () => {
    const res = await request.get<Publication[]>("/paper/all").catch((err) => {
        console.log(err);
        return null;
    });
    if (res) {
        return res.data;
    } else {
        return [];
    }
};

export const apiFetchProjects = async () => {
    const res = await request
        .get<ProjectListItem[]>("/project/all")
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return [];
    }
};

export const apiFetchProject = async (id: string) => {
    const res = await request.get<Project>("/project/" + id).catch((err) => {
        console.log(err);
        return null;
    });
    if (res) {
        return res.data;
    } else {
        return null;
    }
};

export const apiFetchMembers = async () => {
    const res = await request
        .get<{ student: Member[]; teacher: Member[]; intern: Member[] }>(
            "/member/all"
        )
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return { student: [], teacher: [], intern: [] };
    }
};

export const apiFetchMember = async (id: string) => {
    const res = await request.get<Member>("/member/" + id).catch((err) => {
        console.log(err);
        return null;
    });
    if (res) {
        return res.data;
    }
};

export const apiFetchAboutImgs = async () => {
    const res = await request
        .get<string[]>("/metadata/aboutImgs")
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return [];
    }
};

export const apiFetchContactHypertexts = async () => {
    const res = await request
        .get<ContactHyperTexts>("/metadata/contactHypertexts")
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return {
            collaboration_sponsor_hypertext: "",
            info_hypertext: "",
            lab_office_hypertext: "",
            recruit_hypertext: "",
        };
    }
};

export const apiIncrementProjectView = async (id: string) => {
    const res = await request
        .post("/project/updateViewCount" + id)
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return null;
    }
}
