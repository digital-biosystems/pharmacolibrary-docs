<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;ubrogepant&quot;}]"></div>

# ubrogepant

- **generic name:** ubrogepant
- **ATC codes:** `N02CD04`
- **DrugBank:** [DB15328](https://go.drugbank.com/drugs/DB15328) · **PubChem:** not captured
- **molar mass:** 549.554 g/mol (C29H26F3N5O3) — DrugBank
- **groups:** approved, investigational

## About

Ubrogepant is a CGRP receptor antagonist used for the acute treatment of migraine headache. It is an approved medicine, mainly used in the United States; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27273878](https://www.wikidata.org/wiki/Q27273878) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:49 | 0:55 | 0/0/0 | 0/0/1 | 0/0/0 | 47,231/2,065 | einfracz / qwen3.8-27b | 6 | 0/7 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span> | [Li_2020_PF](drugs/drug_ubrogepant/pd_Li_2020_PF.md) | 2-hour pain freedom ← ubrogepant · direct Emax (saturable) effect | — | Li CC et al., Making Better Dose Decisions: Using Exp…, Clinical and translational… (2020) | [10.1111/cts.12730](https://doi.org/10.1111/cts.12730) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span> | [Li_2020_PR](drugs/drug_ubrogepant/pd_Li_2020_PR.md) | 2-hour pain relief ← ubrogepant · direct Emax (saturable) effect | — | Li CC et al., Making Better Dose Decisions: Using Exp…, Clinical and translational… (2020) | [10.1111/cts.12730](https://doi.org/10.1111/cts.12730) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ubrogepant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` substrate, `MAOA` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 28 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2018.pdf` | Li CC et al., Population PK Analyses of Ubrogepant (M…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1021](https://doi.org/10.1002/jcph.1021) | [29136283](https://pubmed.ncbi.nlm.nih.gov/29136283) | The paper describes a population PK analysis for ubrogepant but the specific numeric parameter values are not present in the provided evidence text. |
| `Stodtmann_2026.pdf` | Stodtmann S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2026) | popPK | 10 | [10.1002/jcph.70175](https://doi.org/10.1002/jcph.70175) | [42212509](https://pubmed.ncbi.nlm.nih.gov/42212509) | The paper reports a population pharmacokinetic model for ubrogepant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T15:49:08.077719+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Boinpally_2024 | not_relevant | 2 | 1 | The paper is a review summarizing mechanism and clinical outcomes but does not present a specific exposure-response or dose-response analysis with numeric PD parameters (e.g., EC50, Emax) for ubrogepant. |
| popPK | Boinpally_2026 | relevant | 7 | 4 | The study reports PK concentration data and non-compartmental analysis for ubrogepant in humans, but standard disposition parameters (CL, V, t1/2) are not explicitly listed in the text, only concentrations and CSF/plasma ratios. |
| PD | Boinpally_2026 | not_relevant | 0 | 0 | The paper focuses on PK characterization (plasma and CSF exposures) and does not report a pharmacodynamic model or numeric exposure-response/dose-response parameters. |
| PGx | Boinpally_2026_2 | not_relevant | 0 | 0 | The paper describes the mass balance and metabolism of ubrogepant in healthy adults but does not report any pharmacogenomic effects or specific gene variants. |
| popPK | Boucherie_2024 | irrelevant | 2 | 1 | The paper is a pharmacodynamic study comparing gepants at therapeutic concentrations, using ubrogepant only as a comparator with cited Cmax values rather than reporting original quantitative disposition parameters (CL, V, ka) or a PK model for ubrogepant. |
| popPK | Comisar_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for zavegepant, not the target drug ubrogepant. |
| PD | Comisar_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for zavegepant, not ubrogepant, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Curto_2020 | irrelevant | 2 | 0 | The paper is a narrative review discussing ubrogepant's clinical profile and does not report original quantitative pharmacokinetic parameter values. |
| PD | Curto_2020 | not_relevant | 2 | 0 | The text is a qualitative review/expert opinion summarizing clinical efficacy and safety without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| PGx | Dighriri_2023 | not_relevant | 0 | 0 | The paper is a general review of ubrogepant's efficacy and safety and does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | González-Hernández_2025 | irrelevant | 1 | 0 | The paper is a narrative review without original quantitative PK parameter values for ubrogepant. |
| PD | González-Hernández_2025 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses PK/PD characteristics of anti-CGRP therapies but does not report specific numeric PD parameters or extractable exposure-response curves for ubrogepant. |
| popPK | Leung_2021 | irrelevant | 0 | 0 | The paper is a molecular dynamics simulation study focusing on binding interactions and does not report any pharmacokinetic parameters for ubrogepant. |
| PD | Leung_2021 | not_relevant | 0 | 0 | The paper is a molecular dynamics simulation study focusing on binding interactions and binding energies, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Li_2018 | relevant | 10 | 1 | The paper describes a population PK analysis for ubrogepant but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Li_2018 | not_relevant | 0 | 0 | The paper focuses exclusively on population PK modeling and the implementation of dried blood spot sampling; it does not report any pharmacodynamic or exposure-response analysis or numeric PD parameters. |
| popPK | Li_2020 | relevant | 4 | 0 | The paper describes the use of a population PK model for ubrogepant but refers to a separate publication for the detailed model and parameter estimates, providing no numeric PK parameter values (CL, V, ka) in the text. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | This is a narrative review on the clinical utility of gepants compared to triptans, and it does not report pharmacogenomic data or genotype-specific PK/PD parameters for ubrogepant. |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition by azoles) in a case series, not a pharmacogenomic effect (genetic variant impact) on PK or PD parameters. |
| popPK | Moore_2020 | irrelevant | 2 | 0 | The paper focuses on receptor binding affinity and pharmacodynamic activity (CIDV) rather than quantitative pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Stodtmann_2026 | relevant | 10 | 2 | The paper reports a population pharmacokinetic model for ubrogepant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| popPK | Szkutnik-Fiedler_2020 | irrelevant | 2 | 1 | The paper is a review that reports only qualitative PK descriptors (half-life, protein binding) and DDI fold-changes for ubrogepant, lacking the quantitative compartmental parameters (CL, V, Q, ka) required for extraction. |
| PD | Szkutnik-Fiedler_2020 | not_relevant | 1 | 0 | The paper is a review focusing on drug-drug interactions and safety, lacking specific numeric pharmacodynamic parameters or exposure-response models for ubrogepant. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and pharmacokinetics of anti-migraine drugs but does not report pharmacogenomic effects or specific data for ubrogepant. |
| popPK | Voss_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for migraine treatment and does not report pharmacokinetic parameters or disposition data for ubrogepant. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
