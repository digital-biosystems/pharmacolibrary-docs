<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;colestyramine&quot;}]"></div>

# colestyramine

- **generic name:** colestyramine
- **ATC codes:** `C10AC01`
- **DrugBank:** [DB01432](https://go.drugbank.com/drugs/DB01432) · **PubChem:** none
- **groups:** approved, investigational

## About

Colestyramine is a bile acid sequestrant used to lower cholesterol in lipid disorders such as hyperlipidemia and hypertriglyceridemia, and it has also been used for conditions like pseudomembranous colitis. It is an approved medicine that remains in use, mainly for managing high blood lipid levels.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418006](https://www.wikidata.org/wiki/Q418006) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=colestyramine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Bile acids (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:02 | 2:53 | 0/0/0 | 0/0/0 | 0/0/0 | 25,766/1,270 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scripture_2001.pdf` | Scripture CD et al., Clinical pharmacokinetics of fluvastatin, Clinical pharmacokinetics (2001) | pgx | 7 | [10.2165/00003088-200140040-00003](https://doi.org/10.2165/00003088-200140040-00003) | [11368292](https://www.ncbi.nlm.nih.gov/pubmed/11368292) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Liu_2017.pdf` | Liu X et al., Hepatic deletion of X-box binding prote…, Journal of lipid research (2017) | pgx | 5 | [10.1194/jlr.M071266](https://doi.org/10.1194/jlr.M071266) | [28039331](https://www.ncbi.nlm.nih.gov/pubmed/28039331) | metadata signals extractable PGX data (CYP7A1) |

<sub>queue written 2026-10-07 10:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bernstein_2013 | not_relevant | 0 | 0 | The paper is a clinical review of Cholesteryl Ester Storage Disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of colestyramine. |
| PGx | Brassil_1998 | not_relevant | 0 | 0 | The paper studies the effect of colestyramine on hepatic enzyme expression in rats, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of colestyramine. |
| popPK | Delaere_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (half-life) for PFOS and PFHxS, not for colestyramine, which is only used as a treatment agent. |
| PGx | Hagberg_2000 | not_relevant | 2 | 0 | The text is a general review of APOE genotype effects on lipid levels and mentions cholestyramine only in passing without providing specific pharmacokinetic or pharmacodynamic data for the drug. |
| popPK | Horii_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flunixin in cats, using colestyramine only as a co-administered agent to block enterohepatic circulation, not as the subject drug. |
| PGx | Jolley_2000 | not_relevant | 0 | 0 | The study investigates the effect of an apolipoprotein AI gene knockout on bile acid synthesis and cholesterol metabolism, but does not report pharmacokinetic or pharmacodynamic parameters of colestyramine itself. |
| popPK | Lehr_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tesofensine and meloxicam, using cholestyramine only as a co-administered agent to interrupt enterohepatic circulation, not as the subject drug. |
| PGx | Liu_2017 | not_relevant | 0 | 0 | The paper studies bile acid metabolism in mice and does not mention colestyramine or its pharmacokinetics/pharmacodynamics. |
| PGx | Newman_2024 | not_relevant | 0 | 0 | The paper investigates the effect of cholestyramine on the gut microbiota and host metabolism in mice, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Quarfordt_1973 | irrelevant | 0 | 0 | The study focuses on cholesterol and bile acid turnover kinetics, using colestyramine only as a therapeutic intervention to alter flux, rather than measuring the pharmacokinetic parameters of colestyramine itself. |
| popPK | Roitelman_1986 | irrelevant | 0 | 0 | The study investigates the kinetic properties of the enzyme HMG-CoA reductase in rat liver microsomes, not the pharmacokinetic disposition parameters of colestyramine. |
| PGx | Rozman_2002 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics of leflunomide and mentions cholestyramine only as a method to accelerate elimination, without reporting any pharmacogenomic effects on colestyramine. |
| PGx | Scripture_2001 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of fluvastatin and its interaction with colestyramine, but does not report pharmacogenomic effects on colestyramine. |
| PGx | Stine_2016 | not_relevant | 0 | 0 | The paper is a systematic review on drug-induced liver injury treatments and mentions cholestyramine only as a bile acid washout agent, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Vlachova_2016 | not_relevant | 0 | 0 | The study investigates the effect of a CYP7A1 polymorphism on diurnal variation in enzyme activity (C4 levels), not on the pharmacokinetic or pharmacodynamic parameters of cholestyramine itself. |
| PGx | Watts_1995 | not_relevant | 0 | 0 | The paper reports genetic determinants of coronary heart disease progression, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of colestyramine. |
| PGx | Wong_2019 | not_relevant | 0 | 0 | The paper is a survey of surgical practices and adjuvant therapies for biliary atresia and does not report any pharmacogenomic effects on colestyramine PK or PD. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper is a case report on PSC with gene mutations (PKLR, UGT1A1) and does not report pharmacogenomic effects on the PK or PD of colestyramine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcolestyramine%5D&body=Drug%3A%20colestyramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_colestyramine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
