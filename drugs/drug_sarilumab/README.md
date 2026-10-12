<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sarilumab&quot;}]"></div>

# sarilumab

- **generic name:** sarilumab
- **ATC codes:** `L04AC14`
- **DrugBank:** [DB11767](https://go.drugbank.com/drugs/DB11767) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sarilumab is a monoclonal antibody used to treat rheumatoid arthritis. It is an approved interleukin inhibitor, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7424081](https://www.wikidata.org/wiki/Q7424081) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:29 | 3:58 | 0/2/2 | 1/0/0 | 0/0/0 | 179,471/40,231 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Xu_2019_sarilumab150_mg_q2w](drugs/drug_sarilumab/Sarilumab_Xu2019_sarilumab150_mg_q2w.md) | — | 2-compartment (no model) | 7 | Xu C et al., Population Pharmacokinetics of Sariluma…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00765-1](https://doi.org/10.1007/s40262-019-00765-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Xu_2019_sarilumab200_mg_q2w](drugs/drug_sarilumab/Sarilumab_Xu2019_sarilumab200_mg_q2w.md) | — | 2-compartment (no model) | 7 | Xu C et al., Population Pharmacokinetics of Sariluma…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00765-1](https://doi.org/10.1007/s40262-019-00765-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Xu_2019_estimate](drugs/drug_sarilumab/Sarilumab_Xu2019_estimate.md) | — | 2-compartment (no model) | 8 (+5 cov.) | Xu C et al., Population Pharmacokinetics of Sariluma…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00765-1](https://doi.org/10.1007/s40262-019-00765-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.741). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Xu_2026_reference](drugs/drug_sarilumab/Sarilumab_Xu2026_reference.md) | — | 2-compartment (no model) | 6 (+2 cov.) | Xu C et al., Modeling, Simulation, and Extrapolation…, Journal of pharmacokinetics… (2026) | [10.1007/s10928-026-10024-z](https://doi.org/10.1007/s10928-026-10024-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Ma_2020_ANC](drugs/drug_sarilumab/pd_Ma_2020_ANC.md) | Absolute Neutrophil Count ← sarilumab · indirect response — drug stimulates the loss of Absolute Neutrophil Count | — | Ma L et al., Population Pharmacokinetic-Pharmacodyna…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00899-7](https://doi.org/10.1007/s40262-020-00899-7) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Ma_2020_DAS28_CRP](drugs/drug_sarilumab/pd_Ma_2020_DAS28_CRP.md) | 28-joint disease activity score by C-reactive protein ← sarilumab · indirect response — drug inhibits the production of 28-joint disease activity score by C-reactive protein | — | Ma L et al., Population Pharmacokinetic-Pharmacodyna…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00899-7](https://doi.org/10.1007/s40262-020-00899-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sarilumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inducer/inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FCGR1A (unknown), FCGR2A (unknown), FCGR2B (unknown), FCGR3A (unknown), FCGR3B (unknown), IL6R (antibody), IL6R (target), IL6ST (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2025.pdf` | Xu C et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2025) | popPK | 10 | [10.1002/jcph.70019](https://doi.org/10.1002/jcph.70019) | [40105153](https://pubmed.ncbi.nlm.nih.gov/40105153) | The paper describes a population PK analysis of sarilumab in humans, but the abstract only provides qualitative descriptions of factors and relative comparisons without specific numeric parameter values (CL, V, etc.). |

<sub>queue written 2026-10-07T00:26:22.091841+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kovalenko_2020 | irrelevant | 1 | 0 | The paper reports a population pharmacodynamic (PD) model for neutrophil counts, not sarilumab pharmacokinetic (PK) parameters, and the PK values are in a cited reference. |
| popPK | Ma_2020 | relevant | 8 | 2 | The study develops a PopPK/PD model for sarilumab, but the specific PK disposition parameters (CL, V, etc.) are from a previous study [14], and only one fragmentary covariate estimate is present in the text. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy analysis of haemoglobin levels and disease activity, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Xu_2025 | relevant | 10 | 2 | The paper describes a population PK analysis of sarilumab in humans, but the abstract only provides qualitative descriptions of factors and relative comparisons without specific numeric parameter values (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:27 UTC</sub>
