<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin (beef)&quot;}]"></div>

# insulin (beef)

- **generic name:** insulin (beef)
- **ATC codes:** `A10AB02`, `A10AC02`, `A10AD02`, `A10AE02`
- **DrugBank:** [DB09456](https://go.drugbank.com/drugs/DB09456) · **PubChem:** none
- **groups:** approved

## About

Beef (bovine) insulin is an insulin product used to treat diabetes mellitus. It is an approved insulin, though largely replaced by human and analogue insulins in modern practice.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=insulin_beef).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (activator), INSR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:53 | 3:00 | 0/0/0 | 0/0/0 | 0/0/0 | 85,801/2,870 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/7 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 45 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ince_1983.pdf` | Ince BW, Effects of temperature and dose level o…, General and comparative end… (1983) | popPK | 9 | [10.1016/0016-6480(83)90141-7](https://doi.org/10.1016/0016-6480(83)90141-7) | [6341164](https://pubmed.ncbi.nlm.nih.gov/6341164) | The study reports quantitative PK parameters (MCR, Vdist) for bovine insulin in eels, but the specific numeric values are not present in the provided abstract text. |
| `Gray_1984.pdf` | Gray RS et al., A comparison of the biological actions…, Diabete & metabolisme (1984) | popPK | 8 |  | [6386558](https://pubmed.ncbi.nlm.nih.gov/6386558) | The study reports pharmacokinetic parameters (metabolic clearance rates) for beef insulin in humans, but the specific numeric values are not present in the provided text. |
| `Gray_1985.pdf` | Gray RS et al., Influence of insulin antibodies on phar…, British medical journal (Cl… (1985) | popPK | 8 | [10.1136/bmj.290.6483.1687](https://doi.org/10.1136/bmj.290.6483.1687) | [3924216](https://pubmed.ncbi.nlm.nih.gov/3924216) | The study reports pharmacokinetic parameters (clearance, distribution space, half-life) for beef insulin in humans, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-04 21:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alassaf_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on glial insulin resistance and phagocytic clearance in Drosophila, not a pharmacokinetic study of insulin_beef. |
| popPK | Bergman_2022 | irrelevant | 2 | 1 | The paper is a review of insulin clearance physiology and diabetes risk, not a PK study of the specific drug formulation insulin_beef, and lacks specific compartmental PK parameters (CL, V, ka) for that drug. |
| popPK | Binder_1984 | irrelevant | 0 | 0 | The paper is a general review of insulin pharmacokinetics without specific quantitative parameters for insulin_beef. |
| popPK | Bosello_1990 | irrelevant | 0 | 0 | The study measures hepatic insulin clearance in humans using endogenous insulin (via C-peptide ratio) in the context of diet, not the pharmacokinetics of the specific drug formulation insulin_beef. |
| popPK | Chung_2014 | irrelevant | 0 | 0 | The study focuses on an insulin-like molecule in blue crabs and uses bovine insulin only as a physiological probe, not as the subject of a pharmacokinetic analysis. |
| popPK | Cockram_1985 | irrelevant | 2 | 2 | The study focuses on chemically modified analogs (pheA14 and pheA19) rather than native insulin_beef, and the reported clearance/half-life data are for these analogs, not the subject drug. |
| popPK | Cockram_1987 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters (MCR, half-life, distribution space) for insulin analogues (despentapeptide and deshexapeptide) in dogs, with native beef insulin serving only as a comparator/reference standard rather than the primary subject of a new PK model. |
| popPK | Deck_2017 | irrelevant | 0 | 0 | The study investigates glucose transporter expression and glucose homeostasis in fish, not the pharmacokinetic parameters (CL, V, etc.) of insulin_beef. |
| popPK | Dyer_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinine, not insulin_beef. |
| popPK | Grasso_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of proteolytic fragments using mass spectrometry and does not report pharmacokinetic parameters. |
| popPK | Gray_1984 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (metabolic clearance rates) for beef insulin in humans, but the specific numeric values are not present in the provided text. |
| popPK | Gray_1985 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, distribution space, half-life) for beef insulin in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Home_1983 | irrelevant | 2 | 0 | The study compares human, porcine, and bovine insulin, but does not report specific quantitative PK parameters (CL, V, ka) for beef insulin, only stating it was similar to other preparations. |
| popPK | Huber_2020 | irrelevant | 1 | 1 | The study measures whole-body insulin clearance in humans using endogenous insulin, not the pharmacokinetics of the specific drug formulation insulin_beef. |
| popPK | Ince_1982 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Ince_1983 | relevant | 9 | 2 | The study reports quantitative PK parameters (MCR, Vdist) for bovine insulin in eels, but the specific numeric values are not present in the provided abstract text. |
| popPK | Kaplan_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for veligrotug (an anti-IGF-1R antibody), not insulin_beef. |
| popPK | Kulesh_2022 | irrelevant | 0 | 0 | The study focuses on insulin aspart, not insulin_beef. |
| popPK | Lahtela_1986 | irrelevant | 0 | 0 | The study investigates insulin-mediated glucose metabolism (M) and clearance of glucose/antipyrine, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug insulin itself. |
| popPK | Larkins_1983 | irrelevant | 0 | 0 | The paper is a review discussing the synthesis and immunogenicity of human insulin compared to animal insulins, without reporting any quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel oral cyclic peptide (COX52-69), not insulin_beef. |
| popPK | Mansell_2017 | irrelevant | 0 | 0 | The study evaluates pharmacokinetic models for insulin aspart, not insulin_beef. |
| popPK | Marmentini_2021 | irrelevant | 2 | 0 | The study measures insulin clearance in mice using the c-peptide:insulin ratio as a proxy for hepatic clearance, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for the specific drug insulin_beef. |
| popPK | McCall_2007 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of creatine, not insulin_beef. |
| popPK | McCarthy_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fructose and glucose, not insulin_beef. |
| popPK | McHugh_2022 | irrelevant | 2 | 2 | The study focuses on the identifiability of hepatic clearance parameters in a model-based metabolic test rather than reporting standard population PK parameters (CL, V, t1/2) for insulin_beef as a therapeutic drug, and the specific drug formulation (beef) is not specified. |
| popPK | McNeff_1999 | irrelevant | 0 | 0 | The paper describes a chromatographic purification method for removing endotoxins from insulin, not a pharmacokinetic study of insulin disposition. |
| popPK | Meijer_2021 | irrelevant | 2 | 8 | The study measures insulin clearance in rats, but the drug is generic insulin (likely porcine or recombinant), not specifically insulin_beef, and it reports tissue-specific clearance rates rather than a population PK model for the specific drug entity. |
| popPK | Najjar_2019 | irrelevant | 0 | 0 | The paper is a review of the mechanisms of hepatic insulin clearance and does not report quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Nishimura_2021 | irrelevant | 0 | 0 | The study investigates insulin icodec, not insulin_beef. |
| popPK | Petrov_2022 | irrelevant | 0 | 0 | The study focuses on biphasic insulin aspart 30, not insulin_beef. |
| popPK | Piccinini_2020 | irrelevant | 1 | 0 | The paper is a review of methods for measuring insulin clearance and does not report original quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Pontiroli_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glucagon, not insulin_beef. |
| popPK | Ramakrishnan_2016 | irrelevant | 0 | 0 | The study investigates the mechanism of insulin clearance regulation by fenofibrate in mice and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for insulin_beef. |
| popPK | Ramezani_2021 | irrelevant | 0 | 0 | The study investigates the inhibition of amyloid fibrillation of bovine insulin by propolis nanosheets in vitro, not the pharmacokinetic disposition of insulin. |
| popPK | Renauld_2003 | irrelevant | 2 | 0 | The study measures insulin pharmacokinetic parameters (clearance, distribution space) in dogs, but the subject drug is insulin_beef, whereas the paper uses bovine insulin (which is distinct from beef insulin in specific PK contexts, though often grouped, the primary focus is on the effect of FSH/LH on insulin response rather than characterizing beef insulin PK specifically, and no numeric values are provided in the text). |
| popPK | Reske-Kunz_1984 | irrelevant | 0 | 0 | The paper studies immunology (IL-2 receptor dynamics on T cells) and does not report pharmacokinetic parameters for insulin_beef. |
| popPK | Sambol_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, not insulin_beef. |
| popPK | Scheidegger_1990 | irrelevant | 0 | 0 | The text is a general discussion/review of factors influencing insulin pharmacokinetics without reporting specific quantitative parameters for insulin_beef. |
| popPK | Siddik_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carboplatin and cisplatin, with insulin mentioned only as a comparator for clearance values. |
| popPK | Sodoyez_1984 | irrelevant | 2 | 0 | The study is a nuclear medicine imaging investigation of insulin biodistribution in immunized patients, reporting qualitative organ activity profiles rather than quantitative compartmental pharmacokinetic parameters (CL, V, ka). |
| popPK | Su_2022 | irrelevant | 0 | 0 | The study investigates insulin-like peptides in shrimp and uses bovine insulin only as a functional probe for glucose homeostasis, without reporting pharmacokinetic parameters for insulin_beef. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The study focuses on a computational model for a novel glucose-responsive insulin (MK-2640) and regular human insulin, not insulin_beef. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a narrative review of real-world evidence regarding adherence and cost-effectiveness, containing no pharmacokinetic parameters or quantitative disposition data for insulin_beef. |
| PD | Yang_2025 | not_relevant | 1 | 0 | The paper is a narrative review on real-world evidence, adherence, and cost-effectiveness of insulin and biosimilars; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binsulin_beef%5D&body=Drug%3A%20insulin_beef%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_insulin_beef/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
