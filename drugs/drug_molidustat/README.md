<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;molidustat&quot;}]"></div>

# molidustat

- **generic name:** molidustat
- **ATC codes:** `B03XA09`
- **DrugBank:** [DB15642](https://go.drugbank.com/drugs/DB15642) · **PubChem:** not captured
- **molar mass:** 314.309 g/mol (C13H14N8O2) — DrugBank
- **groups:** investigational

## About

Molidustat is an antianemic drug candidate investigated for the treatment of anemia. It remains investigational and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27087553](https://www.wikidata.org/wiki/Q27087553) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:37 | 1:02 | 0/0/0 | 0/0/0 | 0/0/0 | 109,020/1,396 | einfracz / qwen3.8-27b | 8 | 2/9 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=molidustat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: EGLN2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 28 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Böttcher_2018.pdf` | Böttcher M et al., First-in-man-proof of concept study wit…, British journal of clinical… (2018) | popPK | 5 | [10.1111/bcp.13584](https://doi.org/10.1111/bcp.13584) | [29575006](https://pubmed.ncbi.nlm.nih.gov/29575006) | The paper reports PK endpoints (t1/2, Cmax, AUC) for molidustat in humans, but the specific numeric values for clearance (CL) and volume (V) are not provided in the text, only half-life is given. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T20:37:40.402962+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akizawa_2019 | irrelevant | 0 | 0 | The paper is a protocol for phase III efficacy trials and does not report quantitative pharmacokinetic parameters or models. |
| PD | Akizawa_2019 | not_relevant | 0 | 0 | The paper is a protocol describing the design of three Phase III clinical trials and does not report any results, data, or numeric pharmacodynamic parameters. |
| popPK | Bi_2024 | irrelevant | 1 | 0 | Molidustat is a neutral compound used as a negative control/comparator to show it is not an OATP1B substrate, and no quantitative PK parameters for molidustat are reported. |
| popPK | Boegel_2024 | irrelevant | 2 | 1 | The study is primarily pharmacodynamic (erythropoiesis) in cats and only reports sparse plasma concentration ranges (Cmax/C24h) without deriving or reporting quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Böttcher_2018 | irrelevant | 5 | 2 | The paper reports PK endpoints (t1/2, Cmax, AUC) for molidustat in humans, but the specific numeric values for clearance (CL) and volume (V) are not provided in the text, only half-life is given. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The study evaluates enarodustat, not molidustat, as the subject drug. |
| popPK | Imai_2024 | irrelevant | 1 | 0 | The study focuses on drug potency, dose escalation, and cost, reporting only hemoglobin levels and HPI values without quantitative PK parameters like clearance or volume. |
| popPK | Jain_2025 | irrelevant | 2 | 1 | The paper is a review article covering synthesis and analysis of HIF-PHIs, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, half-life) for molidustat. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Janssens_2021 | not_relevant | 0 | 0 | The paper describes the development of activity-based assays for HIF heterodimerization and does not report pharmacodynamic or exposure-response data for molidustat. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy assessment of molidustat in mice regarding anemia and renal function, with no pharmacokinetic parameters or values reported. |
| popPK | Mendoza-Reinoso_2022 | irrelevant | 0 | 0 | The paper is a preclinical immunology study on macrophages and prostate cancer in mice using Roxadustat (not molidustat) as a tool compound, and contains no pharmacokinetic data for molidustat. |
| popPK | Nakai_2024 | irrelevant | 2 | 0 | The study focuses on therapeutic mechanisms and gene expression in mice rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for molidustat, and no numeric values are present in the evidence. |
| PD | Nakai_2024 | not_relevant | 2 | 1 | The paper describes qualitative drug-specific mechanisms and gene expression changes in mice but does not report numeric PD parameters or quantitative exposure-response curves for molidustat. |
| popPK | Sadiku_2017 | irrelevant | 1 | 0 | The study uses molidustat as a pharmacological tool to inhibit PHD2 in mice to study inflammation, but it does not report any pharmacokinetic parameters (CL, V, t1/2) for molidustat. |
| popPK | Shitamori_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of roxadustat (ROX) in cats, while molidustat (MOL) is mentioned only as a comparator or approved reference drug, not the subject of the PK analysis. |
| popPK | Susi_2025 | irrelevant | 0 | 0 | The paper is a review of feline therapeutics (buprenorphine, gabapentin, frunevetmab, SGLT2 inhibitors) and does not mention molidustat or provide any pharmacokinetic parameters for it. |
| PD | Susi_2025 | not_relevant | 1 | 0 | The paper is a clinical review that discusses the mechanism of action and general pharmacokinetic data for molidustat in cats, but it does not report specific numeric pharmacodynamic parameters (such as Emax, EC50, or dose-response curves) or perform a PK/PD modeling analysis. |
| popPK | Takano_2022 | relevant | 3 | 0 | The paper discusses the clearance mechanisms of molidustat (TP0463518) in humans and animals but reports qualitative excretion routes and relative uptake differences rather than quantitative population PK parameters (CL, V, Q, ka). |
| popPK | Yamamoto_2019 | irrelevant | 0 | 0 | This is a study protocol/design paper for phase III trials which does not report any quantitative pharmacokinetic parameters or values. |
| PD | Yamamoto_2019 | not_relevant | 0 | 0 | The paper is a study protocol describing the design and rationale of two Phase III trials; it does not report any results, data, or numeric pharmacodynamic parameters. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study focuses on the effects of roxadustat on myeloablation and engraftment in mice, not the pharmacokinetic parameters of molidustat. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (DDI) involving a chemical inhibitor (atazanavir), not a genetic variant or pharmacogenomic effect. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
