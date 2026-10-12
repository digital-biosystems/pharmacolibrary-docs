<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;pegfilgrastim&quot;}]"></div>

# pegfilgrastim

- **generic name:** pegfilgrastim
- **ATC codes:** `L03AA13`
- **DrugBank:** [DB00019](https://go.drugbank.com/drugs/DB00019) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pegfilgrastim is a long-acting granulocyte colony-stimulating factor used to prevent or treat neutropenia, including chemotherapy-induced febrile neutropenia, in cancer patients such as those with lymphoma. It is an approved medicine with several products authorised in the European Union, and it is widely used in oncology care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1592932](https://www.wikidata.org/wiki/Q1592932) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:07 | 1:18 | 0/0/0 | 1/1/1 | 0/0/0 | 104,579/3,752 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Brekkan_2018_ANC](drugs/drug_pegfilgrastim/pd_Brekkan_2018_ANC.md) | absolute neutrophil count ← pegfilgrastim · indirect response — drug stimulates the production of absolute neutrophil count | — | Brekkan A et al., A Population Pharmacokinetic-Pharmacody…, The AAPS journal (2018) | [10.1208/s12248-018-0249-y](https://doi.org/10.1208/s12248-018-0249-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Singh_2021_ANC](drugs/drug_pegfilgrastim/pd_Singh_2021_ANC.md) | Absolute Neutrophil Count biomarker turnover ← pegfilgrastim | — | Singh I et al., Single-Dose Pharmacokinetics, Pharmacod…, Clinical drug investigation (2021) | [10.1007/s40261-020-00987-3](https://doi.org/10.1007/s40261-020-00987-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Macaire_2020_ANC](drugs/drug_pegfilgrastim/pd_Macaire_2020_ANC.md) | absolute neutrophil count ← pegfilgrastim · indirect response — drug stimulates the production of absolute neutrophil count | — | Macaire P et al., Impact of granulocyte colony-stimulatin…, British journal of clinical… (2020) | [10.1111/bcp.14356](https://doi.org/10.1111/bcp.14356) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roskos_2006.pdf` | Roskos LK et al., Pharmacokinetic/pharmacodynamic modelin…, Journal of clinical pharmac… (2006) | popPK | 10 | [10.1177/0091270006288731](https://doi.org/10.1177/0091270006288731) | [16809800](https://pubmed.ncbi.nlm.nih.gov/16809800) | The paper reports a PK/PD model for pegfilgrastim, but no specific numeric parameter values are present in the provided evidence. |
| `Singh_2021.pdf` | Singh I et al., Single-Dose Pharmacokinetics, Pharmacod…, Clinical drug investigation (2021) | popPK | 5 | [10.1007/s40261-020-00987-3](https://doi.org/10.1007/s40261-020-00987-3) | [33236287](https://pubmed.ncbi.nlm.nih.gov/33236287) | The study reports PK/PD equivalence ratios (AUC, Cmax) for a biosimilar comparison rather than absolute quantitative compartmental parameters (CL, V, ka) or specific concentration-time data for pegfilgrastim. |

<sub>queue written 2026-10-06T23:06:30.965317+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brekkan_2019 | irrelevant | 2 | 1 | The paper reports simulation results (AUC/AUEC differences and statistical power) from a PKPD model but does not report the underlying quantitative PK parameter estimates (CL, V, ka, Q, half-life) in the provided text. |
| popPK | Gattu_2021 | irrelevant | 3 | 2 | The study reports biosimilarity ratios (GMR) and ranges for AUC/Cmax rather than absolute disposition parameters like clearance or volume, and the specific numeric values in the evidence are largely garbled or represent ratios. |
| popPK | Macaire_2020 | irrelevant | 2 | 0 | This is a PK/PD study focusing on the pharmacodynamic effect of G-CSF on neutrophil counts (ANC), not the pharmacokinetic disposition parameters (CL, V, ka) of pegfilgrastim itself. |
| popPK | Melhem_2018 | irrelevant | 2 | 0 | The study focuses on PD modeling of neutrophil counts, and while a half-life for pegfilgrastim is mentioned, no quantitative PK disposition parameters (CL, V, ka) are reported or extractable from the provided evidence. |
| popPK | Müller_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rituximab, not pegfilgrastim, despite pegfilgrastim being mentioned in the clinical trial registration context. |
| popPK | Nakov_2018 | irrelevant | 1 | 1 | This is a bioequivalence study reporting only AUC/Cmax ratios and confidence intervals, lacking quantitative compartmental parameters (CL, V, ka, t1/2) required for extraction. |
| popPK | Roskos_2006 | relevant | 10 | 0 | The paper reports a PK/PD model for pegfilgrastim, but no specific numeric parameter values are present in the provided evidence. |
| popPK | Scholz_2009 | relevant | 4 | 0 | The paper describes a PK/PD modeling study in rats that likely contains quantitative parameter estimates for pegfilgrastim, but the specific numeric values are not included in the provided text excerpt. |
| popPK | Scholz_2012 | irrelevant | 1 | 1 | The text describes a PK model structure for pegfilgrastim but does not provide the numeric parameter values (CL, V, etc.) in the evidence, referring instead to a complete set in "Additional file 1" which is not included. |
| popPK | Singh_2018 | irrelevant | 3 | 3 | The paper reports only summary bioequivalence ratios and geometric mean percentages (AUC, Cmax) without providing the actual quantitative PK parameter values (like CL, V, t1/2) or compartmental model details. |
| popPK | Singh_2021 | irrelevant | 5 | 2 | The study reports PK/PD equivalence ratios (AUC, Cmax) for a biosimilar comparison rather than absolute quantitative compartmental parameters (CL, V, ka) or specific concentration-time data for pegfilgrastim. |
| popPK | Umoru_2021 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study evaluating absolute neutrophil counts (ANC), not a pharmacokinetic study reporting quantitative disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
