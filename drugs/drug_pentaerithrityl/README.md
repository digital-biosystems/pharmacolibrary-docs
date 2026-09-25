<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;pentaerithrityl&quot;}]"></div>

# pentaerithrityl

- **generic name:** pentaerithrityl
- **ATC codes:** `A06AD14`
- **DrugBank:** [DB13526](https://go.drugbank.com/drugs/DB13526)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 13:36 | 9:10 | 0/0/0 | 0/0/0 | 0/0/0 | 94,934/2,738 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/0 | 5/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2023.pdf` | Xu Y et al., Novel macromolecular synthetic phenolic…, The Science of the total en… (2023) | pd | 4 | [10.1016/j.scitotenv.2023.164928](https://doi.org/10.1016/j.scitotenv.2023.164928) | [37348711](https://www.ncbi.nlm.nih.gov/pubmed/37348711) | metadata signals extractable PD data (EC50) |
| `Zhuang_2008.pdf` | Zhuang L et al., Degradation of pentaerythritol tetranit…, Environmental science & tec… (2008) | pd | 4 | [10.1021/es7029703](https://doi.org/10.1021/es7029703) | [18605582](https://www.ncbi.nlm.nih.gov/pubmed/18605582) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-11T13:34:24.678081+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals related to obesity and diabetes, and does not report pharmacokinetic parameters for pentaerithrityl. |
| PD | Auerbach_2016 | not_relevant | 0 | 0 | The paper is a high-throughput screening review using ToxCast data to prioritize environmental chemicals for obesity/diabetes research; it does not report pharmacodynamic modeling or specific exposure-response parameters for pentaerythritol. |
| popPK | Brylev_2024 | irrelevant | 0 | 0 | The paper describes the synthesis of aptamer-drug conjugates using pentaerythritol as a chemical branching scaffold, not as a subject drug, and contains no pharmacokinetic data. |
| PD | Brylev_2024 | not_relevant | 0 | 0 | The paper describes the synthesis of aptamer-drug conjugates and reports qualitative cytotoxicity results (IC50 comparisons) but does not provide numeric PD parameters or exposure-response data for pentaerythritol. |
| popPK | Caujolle_1969 | irrelevant | 0 | 0 | The paper title indicates a pharmacodynamic study of a different compound (pentaerythritol di (para methylbenzeneboronate)) rather than a PK study of pentaerithrityl, and no quantitative PK parameters are provided in the evidence. |
| PD | Caujolle_1969 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The paper focuses on the in vitro release of doxorubicin from micelles containing pentaerythritol carbonate, not the pharmacokinetics of pentaerithrityl. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro release of doxorubicin from micelles, with no pharmacokinetic data for pentaerithrityl. |
| popPK | Davidson_1971 | irrelevant | 0 | 0 | The paper concerns pentaerythritol trinitrate (a nitrate), not pentaerithrityl, and no PK parameters are provided. |
| PD | Davidson_1971 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Davidson_1971_2 | irrelevant | 0 | 0 | The paper concerns pentaerythritol tetranitrate (a nitrate), not pentaerithrityl (a polyol), and no PK parameters are provided. |
| PD | Davidson_1971_2 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Flores_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and anti-HIV activity of synthetic polyphenols, not a pharmacokinetic study of pentaerithrityl. |
| PD | Flores_2014 | not_relevant | 3 | 2 | The paper reports single-point EC50 values for anti-HIV activity but does not provide full dose-response curves, concentration-effect data, or PK/PD modeling parameters. |
| popPK | Greenberg_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation and cGMP elevation, not a pharmacokinetic study, and pentaerythritol tetranitrate is used only as a comparator agent. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper is a structural biology and cancer pharmacology study targeting RAS mutations and does not involve the drug pentaerithrityl or report any pharmacokinetic parameters. |
| PD | Hauseman_2025 | not_relevant | 0 | 0 | The paper describes the discovery of a new target (SHOC2) and a tool compound, but does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., IC50, Emax) for pentaerythritol (which is not the subject of this paper; the paper focuses on SHOC2 inhibitors). |
| PGx | Lopez_2021 | not_relevant | 0 | 0 | The paper investigates the role of the POR/CYP system in the vascular biotransformation of organic nitrates using a mouse knockout model, but it does not report human pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| popPK | Morvan_2007 | irrelevant | 0 | 0 | The paper describes the synthesis and binding affinity of pentaerythritol-based oligomers, not the pharmacokinetics of the drug pentaerithrityl. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review on mucoadhesive drug delivery systems for oral candidiasis and does not contain pharmacokinetic data for pentaerithrityl. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review on mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for pentaerythritol. |
| popPK | Parker_1975 | irrelevant | 0 | 0 | The study evaluates vasodilator potency and dose-response relationships in dogs, not pharmacokinetic disposition parameters (CL, V, ka) for pentaerithrityl. |
| popPK | Sapozhnikova_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity of perylene derivatives, not the pharmacokinetics of pentaerithrityl. |
| popPK | Shore_2022 | irrelevant | 0 | 0 | The paper studies the toxicological effects of plastic additives on sea urchins and does not involve the drug pentaerithrityl or any pharmacokinetic analysis. |
| PD | Shore_2022 | not_relevant | 0 | 0 | The paper does not mention pentaerythritol; it investigates the effects of four different plastic additives (UV-327, Irganox 1010, DEHP, and methylparaben) on sea urchin larvae. |
| popPK | Stasyuk_2026 | irrelevant | 0 | 0 | The paper describes an electrochemical biosensor for detecting pentaerythritol tetranitrate (PETN), not a pharmacokinetic study of pentaerithrityl. |
| popPK | Weïwer_2009 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of sialic acid derivatives as neuraminidase inhibitors, with no pharmacokinetic data for pentaerithrityl. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | The paper focuses on environmental distribution and ecological risk of synthetic phenolic antioxidants in sludge, not on the pharmacokinetics of pentaerithrityl. |
| PD | Xu_2023 | not_relevant | 0 | 0 | The paper focuses on the environmental distribution and ecological risk of synthetic phenolic antioxidants in sludge, not on pharmacodynamic or exposure-response relationships for pentaerythritol. |
| popPK | Zhuang_2008 | irrelevant | 0 | 0 | The paper concerns the environmental degradation of pentaerythritol tetranitrate (PETN) by granular iron, not the pharmacokinetics of pentaerithrityl. |
| PD | Zhuang_2008 | not_relevant | 0 | 0 | The paper describes the chemical degradation of pentaerythritol tetranitrate by granular iron, which is a chemical engineering/environmental chemistry study, not a pharmacodynamic or exposure-response analysis in a biological system. |
| popPK | Zou_2014 | irrelevant | 0 | 0 | The study focuses on paclitaxel-loaded micelles for cancer therapy and does not report pharmacokinetic parameters for pentaerithrityl. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
