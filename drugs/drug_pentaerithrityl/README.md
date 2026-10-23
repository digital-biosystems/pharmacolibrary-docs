<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;pentaerithrityl&quot;}]"></div>

# pentaerithrityl

- **generic name:** pentaerithrityl
- **ATC codes:** `A06AD14`
- **DrugBank:** [DB13526](https://go.drugbank.com/drugs/DB13526) · **PubChem:** not captured
- **molar mass:** 136.147 g/mol (C5H12O4) — DrugBank
- **groups:** investigational

## About

Pentaerithrityl (pentaerythritol) is a polyol chemical compound classified as an osmotically acting laxative for constipation. It is not an established marketed medicine; databases list it as investigational, and no EU authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421828](https://www.wikidata.org/wiki/Q421828) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:39 | 0:50 | 0/0/0 | 0/0/0 | 0/0/0 | 30,049/865 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2023.pdf` | Xu Y et al., Novel macromolecular synthetic phenolic…, The Science of the total en… (2023) | pd | 4 | [10.1016/j.scitotenv.2023.164928](https://doi.org/10.1016/j.scitotenv.2023.164928) | [37348711](https://www.ncbi.nlm.nih.gov/pubmed/37348711) | metadata signals extractable PD data (EC50) |
| `Zhuang_2008.pdf` | Zhuang L et al., Degradation of pentaerythritol tetranit…, Environmental science & tec… (2008) | pd | 4 | [10.1021/es7029703](https://doi.org/10.1021/es7029703) | [18605582](https://www.ncbi.nlm.nih.gov/pubmed/18605582) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T17:39:01.246114+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals related to obesity and diabetes, and does not contain pharmacokinetic data for pentaerithrityl. |
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
| popPK | Flores_2014 | irrelevant | 0 | 0 | The paper describes the synthesis and anti-HIV activity of synthetic polyphenols derived from pentaerythritol, not the pharmacokinetics of the drug pentaerithrityl. |
| PD | Flores_2014 | not_relevant | 3 | 2 | The paper reports single-point EC50 values for anti-HIV activity but does not provide full dose-response curves, concentration-effect data, or PK/PD modeling parameters. |
| popPK | Greenberg_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular relaxation and cGMP elevation, not a pharmacokinetic study, and pentaerythritol tetranitrate is used only as a comparator agent. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper describes a structural biology and mechanistic study of RAS-mutant cancers and does not involve the drug pentaerithrityl or any pharmacokinetic analysis. |
| PD | Hauseman_2025 | not_relevant | 0 | 0 | The paper describes the discovery of a new target (SHOC2) and a tool compound, but does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., IC50, Emax) for pentaerythritol (which is not the subject of this paper; the paper focuses on SHOC2 inhibitors). |
| PGx | Lopez_2021 | not_relevant | 0 | 0 | The paper investigates the role of the POR/CYP system in the biotransformation of organic nitrates (NTG/PETN) using a mouse knockout model, but it does not report pharmacogenomic effects of specific human gene variants on PK or PD parameters. |
| popPK | Morvan_2007 | irrelevant | 0 | 0 | The paper describes the synthesis and binding affinity of pentaerythritol-based oligomers, not the pharmacokinetics of the drug pentaerithrityl. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not contain pharmacokinetic data for pentaerithrityl. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review on mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for pentaerythritol. |
| popPK | Parker_1975 | irrelevant | 0 | 0 | The study evaluates vasodilator potency and dose-response relationships in dogs, not pharmacokinetic disposition parameters (CL, V, ka) for pentaerithrityl. |
| popPK | Sapozhnikova_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity of perylene derivatives, not the pharmacokinetics of pentaerithrityl. |
| popPK | Shore_2022 | irrelevant | 0 | 0 | The paper studies the toxicological effects of plastic additives on sea urchins and does not involve the drug pentaerithrityl or any pharmacokinetic analysis. |
| PD | Shore_2022 | not_relevant | 0 | 0 | The paper does not mention pentaerythritol; it investigates the effects of four different plastic additives (UV-327, Irganox 1010, DEHP, and methylparaben) on sea urchin larvae. |
| popPK | Stasyuk_2026 | irrelevant | 0 | 0 | The paper describes an electrochemical biosensor for detecting pentaerythritol tetranitrate (PETN), which is a different chemical compound from the drug pentaerithrityl, and contains no pharmacokinetic data. |
| popPK | Weïwer_2009 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of sialic acid derivatives as neuraminidase inhibitors, with no pharmacokinetic data for pentaerithrityl. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Xu_2023 | not_relevant | 0 | 0 | The paper focuses on the environmental distribution and ecological risk of synthetic phenolic antioxidants in sludge, not on pharmacodynamic or exposure-response relationships for pentaerythritol. |
| popPK | Zhuang_2008 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| PD | Zhuang_2008 | not_relevant | 0 | 0 | The paper describes the chemical degradation of pentaerythritol tetranitrate by granular iron, which is a chemical engineering/environmental chemistry study, not a pharmacodynamic or exposure-response analysis in a biological system. |
| popPK | Zou_2014 | irrelevant | 0 | 0 | The study focuses on paclitaxel-loaded micelles for cancer therapy and does not report pharmacokinetic parameters for pentaerithrityl. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
