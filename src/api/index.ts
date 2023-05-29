import request from "../plugins/axios";
import { parseEnName } from "../utils";

export const apiFetchHomeHeros = async () => {
    const res = await request
        .get<Project[]>("/project/heroProjects")
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        const heroImgs: HeroImg[] = res.data.map((item) => {
            return {
                src: item.hero_img,
                href: "/projects/" + parseEnName(item.en_name),
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

export const apiFetchProjectByEnName = async (enName: string) => {
    const res = await request
        .get<Project>("/project/queryByEN/" + enName)
        .catch((err) => {
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
        .get<{ student: Member[]; teacher: Member[]; postdoc: Member[], intern: Member[], graduate: Member[] }>(
            "/member/all"
        )
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return { student: [], teacher: [], postdoc:[], intern: [], graduate: [] };
    }
};

export const apiFetchMemberByEnName = async (enName: string) => {
    const res = await request
        .get<Member>("/member/queryByEN/" + enName)
        .catch((err) => {
            console.log(err);
            return null;
        });
    if (res) {
        return res.data;
    } else {
        return null;
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
            contact_hypertext: "",
        };
    }
};

export const apiIncrementProjectView = async (id: string) => {
    const res = await request
        .patch("/project/updateViewCount/" + id)
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
