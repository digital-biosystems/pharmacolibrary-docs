<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;androstanolone&quot;}]"></div>

# androstanolone

- **generic name:** androstanolone
- **ATC codes:** `A14AA01`, `G03BB02`
- **DrugBank:** [DB02901](https://go.drugbank.com/drugs/DB02901) · **PubChem:** not captured
- **groups:** illicit, investigational

## About

Androstanolone is an androgenic and anabolic steroid that has been used as an anabolic agent and androgen medication. It is not an approved medicine today; it is considered investigational and is also classified as an illicit or doping substance.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q31686490](https://www.wikidata.org/wiki/Q31686490) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:04 | 3:08 | 0/0/0 | 0/0/0 | 0/0/0 | 105,858/4,363 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 5/1 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=androstanolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| — | adipose tissue | `CYP19A1` substrate | DrugBank actor |
| — | adrenal gland | `CYP17A1` substrate | DrugBank actor |
| — | ovary | `CYP19A1` substrate | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |
| — | testis | `CYP17A1` substrate, `CYP19A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1C3 (product), CYP11A1 (substrate), ESR1 (unknown), HSD17B1 (unknown), NR3C2 (unknown), SHBG (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 74 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbott_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and endocrine effects of 5 alpha-dihydrotestosterone (DHT), not androstanolone. |
| popPK | Alyamani_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of abiraterone and its metabolites, not androstanolone. |
| popPK | Arif_2017 | irrelevant | 0 | 0 | The paper is a review of dutasteride, not a pharmacokinetic study of androstanolone. |
| popPK | Basit_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and metabolism of testosterone, not androstanolone. |
| popPK | Behre_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone buciclate, not androstanolone. |
| popPK | Bird_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Bissegger_2016 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo mechanistic investigation of gene expression and DNA methylation in frogs, not a pharmacokinetic study of androstanolone. |
| popPK | Breckwoldt_1989 | irrelevant | 0 | 0 | The paper is a review of the pathogenesis of hirsutism and does not report quantitative pharmacokinetic parameters for androstanolone. |
| PD | Catuogno_2001 | not_relevant | 1 | 0 | The paper reports clinical outcomes (curvature regression) and receptor quantification but provides no concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Costa_2016 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of sex hormones on amyloid-beta-induced oxidative stress in a cell line and does not report pharmacokinetic parameters for androstanolone. |
| popPK | Dowsett_1989 | irrelevant | 0 | 0 | The study investigates 4-hydroxyandrostenedione (4-OHA), not androstanolone. |
| popPK | Du_2019 | irrelevant | 0 | 0 | The study investigates the mechanism of dihydrotestosterone (DHT) on amyloid-beta clearance in cells and rats, not the pharmacokinetics of androstanolone. |
| popPK | Efros_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Feswick_2014 | irrelevant | 0 | 0 | The study investigates the effects of 5α-dihydrotestosterone (DHT) on mummichog testes, not the pharmacokinetics of androstanolone. |
| popPK | Fooladi_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Forbes_1986 | irrelevant | 0 | 0 | The study focuses on danazol's effects on sex hormone binding globulin and testosterone levels, not the pharmacokinetics of androstanolone. |
| popPK | Foresta_2011 | irrelevant | 0 | 0 | The study investigates the effect of androgens on osteocalcin release in adipose tissue and does not report pharmacokinetic parameters for androstanolone. |
| popPK | Gambineri_2009 | irrelevant | 0 | 0 | The study focuses on cortisol metabolism and adrenal androgen responses in PCOS, not the pharmacokinetics of androstanolone. |
| popPK | Giorgi_1972 | irrelevant | 0 | 0 | The study is an in-vitro perfusion experiment on prostate tissue using androstenedione, testosterone, and DHT, not a pharmacokinetic study of androstanolone. |
| popPK | Giorgi_1973 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of androgen uptake and metabolism in prostate tissue, not a pharmacokinetic study of androstanolone disposition. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper discusses minoxidil, finasteride, and dutasteride, and does not report pharmacokinetic parameters for androstanolone. |
| popPK | Haase_2017 | irrelevant | 0 | 0 | The study investigates the effects of sex steroids on alveolar epithelial sodium transport in rat cells and does not report pharmacokinetic parameters for androstanolone. |
| popPK | Handelsman_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of human chorionic gonadotrophin (hCG), not androstanolone. |
| popPK | Hobo_2023 | irrelevant | 0 | 0 | The study focuses on finasteride, dutasteride, and DHT in hair, not androstanolone. |
| popPK | Ishimaru_1977 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, dihydrotestosterone, and 3alpha-diol, not androstanolone. |
| popPK | Ishimaru_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone and dihydrotestosterone, not androstanolone. |
| popPK | Itakura_1985 | irrelevant | 0 | 0 | The paper studies 5-hydroxytryptamine and cerebral blood flow in rats, not the pharmacokinetics of androstanolone. |
| popPK | Ito_1971 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dihydrotestosterone (DHT), testosterone, and androstenedione, not androstanolone. |
| popPK | Iwaki_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of finasteride and dutasteride, not androstanolone. |
| popPK | Iyer_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Jallinoja_2026 | irrelevant | 0 | 0 | The study focuses on the development and evaluation of a PET tracer ([18F]F-SARM3) for androgen receptor imaging, not the pharmacokinetics of androstanolone. |
| popPK | Jockenhövel_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone implants, not androstanolone. |
| popPK | Keenan_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dihydrotestosterone heptanoate (DHT-hp), not androstanolone. |
| popPK | Kim_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Kinouchi_1974 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 3a-androstanediol (3a-diol), not androstanolone. |
| popPK | Korstanje_2011 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetics for lower urinary tract drugs (e.g., oxybutynin, tamsulosin) and does not mention androstanolone. |
| popPK | Kortylewicz_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the radiopharmaceutical RISAD-P, not androstanolone. |
| popPK | Leblanc_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dehydroepiandrosterone (DHEA), not androstanolone. |
| popPK | Lee_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone and its metabolites (5alpha-dihydrotestosterone, 5alpha-androstanediol), not androstanolone. |
| popPK | Longcope_1985 | irrelevant | 0 | 0 | The study focuses on the production and metabolism of dihydrotestosterone (DHT) and its precursors (testosterone and androstenedione), not androstanolone. |
| popPK | Longcope_1996 | irrelevant | 0 | 0 | The paper discusses the metabolism of DHEA and DHEAS, not androstanolone. |
| popPK | Mahoudeau_1971 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dihydrotestosterone (DHT), testosterone, and androstenedione, not androstanolone. |
| popPK | Mazer_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Mazzei_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of leuprolide, not androstanolone. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and metabolomics, not androstanolone. |
| PD | McCune_2023 | not_relevant | 0 | 0 | The paper focuses on predicting busulfan clearance using metabolomics and does not report any pharmacodynamic or exposure-response relationship for androstanolone. |
| popPK | Miller_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Myren_1989 | irrelevant | 0 | 0 | The study measures static plasma concentrations of various androgens (including androstenedione) in pigs but does not report pharmacokinetic parameters (CL, V, t1/2) for androstanolone. |
| popPK | Noé_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levonorgestrel and ethinylestradiol, not androstanolone. |
| popPK | Olsson_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Parks_1998 | irrelevant | 0 | 0 | The study focuses on the metabolism of testosterone in fathead minnows, not the pharmacokinetics of androstanolone. |
| popPK | Pirog_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DHT metabolism in human liver and does not report pharmacokinetic parameters for androstanolone. |
| popPK | Prabhakar_2022 | irrelevant | 0 | 0 | The study is an in silico screening for 5α-reductase inhibitors and does not report pharmacokinetic parameters for androstanolone. |
| popPK | Pugeat_1989 | irrelevant | 0 | 0 | The paper is a review of androgen mechanisms and metabolism in women, focusing on testosterone and DHEA, and does not report quantitative pharmacokinetic parameters for androstanolone. |
| popPK | Robitaille_2020 | irrelevant | 0 | 0 | The paper is a review of 5α-reductase functions and inhibitors, not a pharmacokinetic study of androstanolone, and contains no PK parameters for the drug. |
| popPK | Ross_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Roth_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone undecanoate and its metabolites (testosterone, DHT), not androstanolone. |
| PD | Rybczynska_2009 | not_relevant | 4 | 3 | The paper reports a rank order of potency and a single IC50 value for progesterone, but does not provide numeric PD parameters (IC50, Ki, or dose-response curve data) for androstanolone. |
| popPK | Samojlik_1984 | irrelevant | 0 | 0 | The study focuses on testosterone, DHT, and 3 alpha-androstanediol, not androstanolone, and does not report PK parameters for the target drug. |
| popPK | Sato_2017 | irrelevant | 0 | 0 | The study investigates the effects of Dioscorea esculenta on insulin sensitivity and sex steroid hormone levels in rats, but does not report pharmacokinetic parameters for androstanolone. |
| popPK | Shanmuganathan_2026 | irrelevant | 0 | 0 | The paper is a review of testosterone and cardiovascular health, not a pharmacokinetic study of androstanolone. |
| popPK | Suzuki_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of finasteride and its effect on DHT, not androstanolone. |
| popPK | Swink_2021 | irrelevant | 0 | 0 | The study measures serum concentrations of androgens (DHEA, androstenedione, testosterone, DHT) in foals but does not report pharmacokinetic parameters (CL, V, ka) for androstanolone. |
| popPK | Tatara_2025 | irrelevant | 0 | 0 | The study investigates the effects of Dioscorea esculenta on testicular function and steroid hormone concentrations in diabetic rats, not the pharmacokinetics of androstanolone. |
| popPK | Turner_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone undecanoate, not androstanolone. |
| popPK | Vermeulen_1979 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of testosterone, androstenedione, and dihydrotestosterone, not androstanolone. |
| popPK | Vierhapper_2003 | irrelevant | 0 | 0 | The study measures production rates and metabolic clearance of testosterone and dihydrotestosterone, not androstanolone. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dihydrotestosterone (DHT), not androstanolone. |
| popPK | Wang_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Wang_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone, not androstanolone. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study focuses on a multivalent peptoid conjugate (MPC6) and ethisterone, not androstanolone, and does not report PK parameters for androstanolone. |
| popPK | Weinbauer_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone enanthate and dihydrotestosterone enanthate, not androstanolone. |
| popPK | Yin_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone undecanoate, not androstanolone. |
| popPK | Yin_2012_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of testosterone undecanoate, not androstanolone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
