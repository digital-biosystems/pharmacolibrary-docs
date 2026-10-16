<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;c1-inhibitor, plasma derived&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;C1InhibitorPlasmaDerived_Pawaskar2018_reference&quot;,&quot;label&quot;:&quot;Pawaskar_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# c1-inhibitor, plasma derived

- **generic name:** c1-inhibitor, plasma derived
- **ATC codes:** `B06AC01`
- **DrugBank:** [DB06404](https://go.drugbank.com/drugs/DB06404) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Plasma-derived C1 inhibitor is used to treat hereditary angioedema. It is an approved medicine, with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075742](https://www.wikidata.org/wiki/Q22075742) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:37 | 2:51 | 1/1/1 | 0/0/0 | 0/0/0 | 119,296/7,441 | einfracz / qwen3.8-27b | 4 | 3/1 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.176). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Pawaskar_2018_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Pawaskar D et al., Population pharmacokinetics of subcutan…, Clinical and experimental a… (2018) | [10.1111/cea.13220](https://doi.org/10.1111/cea.13220) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bernstein_2010_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Bernstein2010_reference.md) | — | 1-compartment (no model) | 2 | Bernstein JA et al., Population pharmacokinetics of plasma-d…, Annals of allergy, asthma &… (2010) | [10.1016/j.anai.2010.06.005](https://doi.org/10.1016/j.anai.2010.06.005) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Farrell_2013_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Farrell2013_reference.md) | — | 1-compartment (no model) | 3 (+2 cov.) | Farrell C et al., Population pharmacokinetics of recombin…, British journal of clinical… (2013) | [10.1111/bcp.12132](https://doi.org/10.1111/bcp.12132) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=c1_inhibitor_plasma_derived).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: C1R (inhibitor), C1S (inhibitor), F11 (inhibitor), F12 (inhibitor), F2 (inhibitor), KLKB1 (inhibitor), PLAT (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bernstein_2010.pdf` | Bernstein JA et al., Population pharmacokinetics of plasma-d…, Annals of allergy, asthma &… (2010) | popPK | 10 | [10.1016/j.anai.2010.06.005](https://doi.org/10.1016/j.anai.2010.06.005) | [20674826](https://pubmed.ncbi.nlm.nih.gov/20674826) | The paper explicitly reports quantitative population pharmacokinetic parameters including mean half-life (32.7 hours) and mean clearance (0.92 mL/kg/h) for plasma-derived C1-INH. |
| `Pawaskar_2018.pdf` | Pawaskar D et al., Population pharmacokinetics of subcutan…, Clinical and experimental a… (2018) | popPK | 10 | [10.1111/cea.13220](https://doi.org/10.1111/cea.13220) | [29998524](https://pubmed.ncbi.nlm.nih.gov/29998524) | The paper reports a population pharmacokinetic model for plasma-derived C1-inhibitor (HAEGARDA) and provides explicit numeric values for clearance, volume of distribution, absorption rate, and half-life in the abstract. |
| `Martinez-Saguer_2010.pdf` | Martinez-Saguer I et al., Pharmacokinetic analysis of human plasm…, Transfusion (2010) | popPK | 9 | [10.1111/j.1537-2995.2009.02394.x](https://doi.org/10.1111/j.1537-2995.2009.02394.x) | [19788511](https://pubmed.ncbi.nlm.nih.gov/19788511) | The paper reports quantitative pharmacokinetic parameters including half-life and Tmax for c1_inhibitor_plasma_derived in humans. |

<sub>queue written 2026-10-14T21:35:27.600026+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandler_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tissue plasminogen activator (TPA), not c1_inhibitor_plasma_derived, which is only measured as a co-occurring factor (TPA/C1 inhibitor complex). |
| popPK | Engel_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of Factor XII autoactivation, using C1-inhibitor only as an inhibitor to characterize FXII activity, not as the subject of a pharmacokinetic study. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting graft failure and eGFR outcomes, not a pharmacokinetic study reporting clearance, volume, or half-life parameters. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for lanadelumab, a different drug, not c1_inhibitor_plasma_derived. |
| popPK | Zhang_2018 | irrelevant | 2 | 0 | The paper is an exposure-response study that utilizes individual PK parameters from a separate PopPK model (cited as to be published separately), but does not report the actual numeric PK values (CL, V, ka) for C1-inhibitor in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:35 UTC</sub>
