<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;rivoceranib&quot;}]"></div>

# rivoceranib

- **generic name:** rivoceranib
- **ATC codes:** `L01EK05`
- **DrugBank:** [DB14765](https://go.drugbank.com/drugs/DB14765) · **PubChem:** not captured
- **molar mass:** 397.482 g/mol (C24H23N5O) — DrugBank
- **groups:** investigational

## About

Rivoceranib (apatinib) is an investigational anticancer drug, a VEGFR tyrosine kinase inhibitor being studied as an antineoplastic agent. It is not authorised in the European Union and remains under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27262801](https://www.wikidata.org/wiki/Q27262801) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rivoceranib | parent | 397.482 | C24H23N5O | DrugBank | — | Yu_2017, Zuo_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:38 | 2:51 | 0/0/3 | 0/0/0 | 0/0/0 | 73,393/13,705 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q321 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yu_2017_reference](drugs/drug_rivoceranib/Rivoceranib_Yu2017_reference.md) | — | 1-compartment (no model) | 3 | Yu M et al., Population Pharmacokinetic and Covariat…, Clinical pharmacokinetics (2017) | [10.1007/s40262-016-0427-y](https://doi.org/10.1007/s40262-016-0427-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Zuo_2024_estimated_value](drugs/drug_rivoceranib/Rivoceranib_Zuo2024_estimated_value.md) | — | 1-compartment (no model) | 2 | Zuo L et al., Establishment and validation of a popul…, BMC cancer (2024) | [10.1186/s12885-024-13118-4](https://doi.org/10.1186/s12885-024-13118-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Zuo_2024_parametric](drugs/drug_rivoceranib/Rivoceranib_Zuo2024_parametric.md) | — | 1-compartment (no model) | 1 | Zuo L et al., Establishment and validation of a popul…, BMC cancer (2024) | [10.1186/s12885-024-13118-4](https://doi.org/10.1186/s12885-024-13118-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sachar_2021.pdf` | Sachar M et al., Absence of ethnic difference on single-…, Fundamental & clinical phar… (2021) | popPK | 10 | [10.1111/fcp.12619](https://doi.org/10.1111/fcp.12619) | [33098705](https://pubmed.ncbi.nlm.nih.gov/33098705) | Human rivoceranib PK study reports compartmental analysis, but no numeric parameter values are provided. |
| `Yang_2023.pdf` | Yang XM et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15665](https://doi.org/10.1111/bcp.15665) | [36662574](https://pubmed.ncbi.nlm.nih.gov/36662574) | The human population-PK study reports no numeric disposition parameter values in the provided evidence. |
| `Yu_2017.pdf` | Yu M et al., Population Pharmacokinetic and Covariat…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-016-0427-y](https://doi.org/10.1007/s40262-016-0427-y) | [27379402](https://pubmed.ncbi.nlm.nih.gov/27379402) | Apatinib (rivoceranib) popPK model reports numeric CL/F and volume estimates. |

<sub>queue written 2026-10-07T06:36:17.355082+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2022 | irrelevant | 1 | 0 | The model reports nifedipine parameters; apatinib is the interacting co-drug, and its input data are only referenced in a table not provided. |
| popPK | Qiu_2017 | irrelevant | 0 | 0 | This is an in-vitro study of MDR reversal agents, with apatinib only a comparator and no rivoceranib disposition parameters reported. |
| popPK | Sachar_2021 | relevant | 10 | 1 | Human rivoceranib PK study reports compartmental analysis, but no numeric parameter values are provided. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | This review discusses apatinib (rivoceranib) only as a co-treatment and provides no quantitative rivoceranib PK values. |
| popPK | Yang_2023 | relevant | 10 | 0 | The human population-PK study reports no numeric disposition parameter values in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:36 UTC</sub>
