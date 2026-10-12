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
| 2026-10-05 21:32 | 2:39 | 0/0/0 | 0/0/0 | 0/0/0 | 109,020/1,366 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/9 | 8/0 | 0 |

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
| `Böttcher_2018.pdf` | Böttcher M et al., First-in-man-proof of concept study wit…, British journal of clinical… (2018) | popPK | 6 | [10.1111/bcp.13584](https://doi.org/10.1111/bcp.13584) | [29575006](https://pubmed.ncbi.nlm.nih.gov/29575006) | The study reports molidustat PK in humans but only provides a range for half-life (4.64-10.40 h) without specific clearance, volume, or compartmental model parameters. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T21:31:37.866926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akizawa_2019 | irrelevant | 0 | 0 | This is a study design and rationale paper for clinical trials, reporting no quantitative pharmacokinetic parameter values. |
| PD | Akizawa_2019 | not_relevant | 0 | 0 | The paper is a protocol describing the design of three Phase III clinical trials and does not report any results, data, or numeric pharmacodynamic parameters. |
| popPK | Bi_2024 | irrelevant | 2 | 0 | Molidustat is a neutral comparator used to demonstrate lack of OATP1B transport, and no quantitative PK parameters (CL, V, etc.) are reported for it in the evidence. |
| popPK | Boegel_2024 | irrelevant | 2 | 1 | The study is primarily pharmacodynamic (erythropoiesis) in cats and only reports sparse plasma concentration ranges (Cmax/C24h) without deriving or reporting quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Böttcher_2018 | relevant | 6 | 2 | The study reports molidustat PK in humans but only provides a range for half-life (4.64-10.40 h) without specific clearance, volume, or compartmental model parameters. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of enarodustat (SAL-0951), not molidustat. |
| popPK | Imai_2024 | irrelevant | 0 | 0 | The study is a clinical comparison of drug potency and cost, reporting hemoglobin levels and doses, but it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for molidustat. |
| popPK | Jain_2025 | irrelevant | 2 | 0 | This is a review article discussing synthesis and analysis of HIF-PHIs, and the provided evidence contains no specific quantitative pharmacokinetic parameter values for molidustat. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Janssens_2021 | not_relevant | 0 | 0 | The paper describes the development of activity-based assays for HIF heterodimerization and does not report pharmacodynamic or exposure-response data for molidustat. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in mice focusing on anemia and renal function, with no pharmacokinetic parameters reported. |
| popPK | Mendoza-Reinoso_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on macrophage efferocytosis and HIF-1α signaling in mice, using Roxadustat (a different drug) as a tool, and contains no pharmacokinetic data for molidustat. |
| popPK | Nakai_2024 | irrelevant | 2 | 0 | The study focuses on gene expression and therapeutic mechanisms in mice, and while it mentions pharmacokinetics, no quantitative PK parameters (CL, V, etc.) for molidustat are provided in the evidence. |
| PD | Nakai_2024 | not_relevant | 2 | 1 | The paper describes qualitative drug-specific mechanisms and gene expression changes in mice but does not report numeric PD parameters or quantitative exposure-response curves for molidustat. |
| popPK | Sadiku_2017 | irrelevant | 0 | 0 | The study investigates the immunological effects of molidustat on neutrophil inflammation in mice and does not report any pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Shitamori_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of roxadustat in cats, with molidustat serving only as a comparator or background context. |
| popPK | Susi_2025 | irrelevant | 0 | 0 | The paper is a review of feline therapeutics (buprenorphine, gabapentin, frunevetmab, SGLT2 inhibitors) and does not mention molidustat or provide any pharmacokinetic parameters for it. |
| PD | Susi_2025 | not_relevant | 1 | 0 | The paper is a clinical review that discusses the mechanism of action and general pharmacokinetic data for molidustat in cats, but it does not report specific numeric pharmacodynamic parameters (such as Emax, EC50, or dose-response curves) or perform a PK/PD modeling analysis. |
| popPK | Takano_2022 | irrelevant | 2 | 0 | The study focuses on the mechanism of clearance and species differences in excretion routes (urinary/biliary percentages) rather than reporting quantitative population pharmacokinetic parameters like CL, V, or ka. |
| popPK | Yamamoto_2019 | irrelevant | 0 | 0 | This is a study design and rationale paper for Phase III trials, reporting no quantitative pharmacokinetic parameter values. |
| PD | Yamamoto_2019 | not_relevant | 0 | 0 | The paper is a study protocol describing the design and rationale of two Phase III trials; it does not report any results, data, or numeric pharmacodynamic parameters. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of roxadustat (FG-4592) on hematopoietic stem cell transplantation in mice, not its pharmacokinetic parameters. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (atazanavir inhibiting UGT1A1) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
