<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;tildrakizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tildrakizumab_Jauslin2019_reference&quot;,&quot;label&quot;:&quot;Jauslin_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tildrakizumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tildrakizumab/Tildrakizumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tildrakizumab

- **generic name:** tildrakizumab
- **ATC codes:** `L04AC17`
- **DrugBank:** [DB14004](https://go.drugbank.com/drugs/DB14004) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tildrakizumab, a monoclonal antibody that blocks an interleukin signal, is used to treat psoriasis. It is an approved medicine and is authorised in the European Union for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708331](https://www.wikidata.org/wiki/Q15708331) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:10 | 0:38 | 2/0/0 | 1/0/0 | 0/0/0 | 27,022/3,720 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span> | [Jauslin_2019_reference](drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Jauslin P et al., Population-Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00743-7](https://doi.org/10.1007/s40262-019-00743-7) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_tildrakizumab/Tildrakizumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2020_PASI100](drugs/drug_tildrakizumab/pd_Kerbusch_2020_PASI100.md) | Psoriasis Area and Severity Index (PASI)100 response ← tildrakizumab · direct Emax (saturable) effect | — | Kerbusch T et al., Exposure-response characterisation of t…, British journal of clinical… (2020) | [10.1111/bcp.14280](https://doi.org/10.1111/bcp.14280) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2020_PASI75](drugs/drug_tildrakizumab/pd_Kerbusch_2020_PASI75.md) | Psoriasis Area and Severity Index (PASI)75 response ← tildrakizumab · direct Emax (saturable) effect | — | Kerbusch T et al., Exposure-response characterisation of t…, British journal of clinical… (2020) | [10.1111/bcp.14280](https://doi.org/10.1111/bcp.14280) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2020_PASI90](drugs/drug_tildrakizumab/pd_Kerbusch_2020_PASI90.md) | Psoriasis Area and Severity Index (PASI)90 response ← tildrakizumab · direct Emax (saturable) effect | — | Kerbusch T et al., Exposure-response characterisation of t…, British journal of clinical… (2020) | [10.1111/bcp.14280](https://doi.org/10.1111/bcp.14280) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tildrakizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CYP4A11 (inducer), IL12B (target), IL23A (modulator), IL37 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jauslin_2019.pdf` | Jauslin P et al., Population-Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-019-00743-7](https://doi.org/10.1007/s40262-019-00743-7) | [30915660](https://pubmed.ncbi.nlm.nih.gov/30915660) | The abstract provides explicit numeric values for population PK parameters (CL, Vd, half-life, ka) in human subjects. |

<sub>queue written 2026-10-14T23:09:46.645269+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kerbusch_2020 | irrelevant | 2 | 0 | This is an exposure-response (PK-PD) efficacy study focused on dose optimization, and it does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for tildrakizumab; the Cavg12 values mentioned are likely derived from a separate PK model not detailed with numeric coefficients here. |
| popPK | Rodríguez-Fernández_2022 | irrelevant | 2 | 0 | This is a review article that summarizes multiple PK studies; while it lists tildrakizumab as a target, the provided evidence does not contain specific quantitative PK parameter values (CL, V, etc.) for tildrakizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:09 UTC</sub>
