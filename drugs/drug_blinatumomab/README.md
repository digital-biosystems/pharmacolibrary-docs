<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;blinatumomab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Blinatumomab_Hijazi2018_reference&quot;,&quot;label&quot;:&quot;Hijazi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_blinatumomab/Blinatumomab_Hijazi2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Blinatumomab_Kuchimanchi2019_reference&quot;,&quot;label&quot;:&quot;Kuchimanchi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_blinatumomab/Blinatumomab_Kuchimanchi2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hijazi_2018_SPD&quot;,&quot;label&quot;:&quot;Hijazi_2018 \u00b7 SPD&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_blinatumomab/pd_Hijazi_2018_SPD.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hijazi_2018_kdep&quot;,&quot;label&quot;:&quot;Hijazi_2018 \u00b7 kdep&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_blinatumomab/pd_Hijazi_2018_kdep.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# blinatumomab

- **generic name:** blinatumomab
- **ATC codes:** `L01FX07`
- **DrugBank:** [DB09052](https://go.drugbank.com/drugs/DB09052) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Blinatumomab is a monoclonal antibody anticancer medicine used to treat a form of lymphoblastic leukaemia-lymphoma. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410189](https://www.wikidata.org/wiki/Q410189) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:27 | 4:22 | 2/0/1 | 1/0/2 | 0/0/0 | 179,443/15,027 | einfracz / qwen3.8-27b | 5 | 1/4 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Hijazi_2018_reference](drugs/drug_blinatumomab/Blinatumomab_Hijazi2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hijazi Y et al., Pharmacokinetic and Pharmacodynamic Rel…, Current clinical pharmacolo… (2018) | [10.2174/1574884713666180518102514](https://doi.org/10.2174/1574884713666180518102514) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2019_reference](drugs/drug_blinatumomab/Blinatumomab_Kuchimanchi2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.3654)</sub><br><sub>route_to: `human_review`</sub> | [Clements_2020_reference](drugs/drug_blinatumomab/Blinatumomab_Clements2020_reference.md) | — | 1-compartment (no model) | 2 | Clements JD et al., Population Pharmacokinetics of Blinatum…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00823-8](https://doi.org/10.1007/s40262-019-00823-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Zhu_2018_CR_CRh](drugs/drug_blinatumomab/pd_Zhu_2018_CR_CRh.md) | complete remission [CR] or CR with partial hematologic recovery [CRh] ← blinatumomab · model not identified | — | Zhu M et al., Blinatumomab Pharmacodynamics and Expos…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1006](https://doi.org/10.1002/jcph.1006) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span> | [Hijazi_2018_SPD](drugs/drug_blinatumomab/pd_Hijazi_2018_SPD.md) | Sum of Longest Perpendicular Dimensions (SPD) ← Blinatumomab · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Hijazi Y et al., Pharmacokinetic and Pharmacodynamic Rel…, Current clinical pharmacolo… (2018) | [10.2174/1574884713666180518102514](https://doi.org/10.2174/1574884713666180518102514) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Hijazi_2018_kdep](drugs/drug_blinatumomab/pd_Hijazi_2018_kdep.md) | B-cell-specific depletion rate ← Blinatumomab · direct Emax (saturable) effect | ▶ model + simulator | Hijazi Y et al., Pharmacokinetic and Pharmacodynamic Rel…, Current clinical pharmacolo… (2018) | [10.2174/1574884713666180518102514](https://doi.org/10.2174/1574884713666180518102514) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Kuchimanchi_2019_CR](drugs/drug_blinatumomab/pd_Kuchimanchi_2019_CR.md) | complete remission ← blinatumomab · categorical (graded) response model | — | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Kuchimanchi_2019_OS](drugs/drug_blinatumomab/pd_Kuchimanchi_2019_OS.md) | overall survival ← blinatumomab · time-to-event model | — | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Zhu_2018_NEs](drugs/drug_blinatumomab/pd_Zhu_2018_NEs.md) | time to NEs ← blinatumomab · time-to-event model | — | Zhu M et al., Blinatumomab Pharmacodynamics and Expos…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1006](https://doi.org/10.1002/jcph.1006) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=blinatumomab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD19 (activator), CD19 (antibody), CD19 (regulator), CD3D (activator), CD3D (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiang_2020.pdf` | Jiang X et al., Development of a minimal physiologicall…, European journal of pharmac… (2020) | popPK | 9 | [10.1016/j.ejps.2020.105260](https://doi.org/10.1016/j.ejps.2020.105260) | [32058058](https://pubmed.ncbi.nlm.nih.gov/32058058) | The paper describes a PBPK/PD model for blinatumomab, but the specific quantitative parameter values are not present in the provided abstract/text evidence. |

<sub>queue written 2026-10-14T18:24:30.368217+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Flowers_2023 | irrelevant | 1 | 0 | The paper presents a mechanistic mathematical model for in vitro to in vivo translation and dose prediction, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, half-life). |
| popPK | Jiang_2020 | relevant | 9 | 0 | The paper describes a PBPK/PD model for blinatumomab, but the specific quantitative parameter values are not present in the provided abstract/text evidence. |
| popPK | Roskopf_2014 | irrelevant | 0 | 0 | The study focuses on the in vitro cytolytic activity and T-cell activation kinetics of a novel triplebody (19-3-19), using blinatumomab only as a functional comparator; no quantitative pharmacokinetic disposition parameters (CL, V, half-life) for blinatumomab are reported. |
| popPK | Zhu_2016 | relevant | 10 | 4 | The text describes a detailed population PK study for blinatumomab in humans but references the numeric parameter estimates in "Table 1" which is not included in the provided evidence. |
| popPK | Zhu_2018 | irrelevant | 2 | 1 | The study is a noncompartmental exposure-response analysis reporting only steady-state concentration (Css) and lacks quantitative compartmental parameters (CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:24 UTC</sub>
