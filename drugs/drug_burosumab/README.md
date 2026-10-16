<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;burosumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Burosumab_Lee2022_reference&quot;,&quot;label&quot;:&quot;Lee_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_burosumab/Burosumab_Lee2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Burosumab_Mehta2025_reference&quot;,&quot;label&quot;:&quot;Mehta_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_burosumab/Burosumab_Mehta2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# burosumab

- **generic name:** burosumab
- **ATC codes:** `M05BX05`
- **DrugBank:** [DB14012](https://go.drugbank.com/drugs/DB14012) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Burosumab, a monoclonal antibody, is used to treat bone-mineralisation disorders such as familial hypophosphataemia, X-linked hypophosphataemic rickets and osteomalacia. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28209068](https://www.wikidata.org/wiki/Q28209068) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:14 | 0:38 | 0/0/2 | 1/0/1 | 0/0/0 | 66,685/5,489 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769). Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Lee_2022_reference](drugs/drug_burosumab/Burosumab_Lee2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 (+2 cov.) | Lee SK et al., Population Pharmacokinetics and Pharmac…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1950](https://doi.org/10.1002/jcph.1950) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Mehta_2025_reference](drugs/drug_burosumab/Burosumab_Mehta2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mehta K et al., Pharmacodynamic Exposure-Response Analy…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6140](https://doi.org/10.1002/jcph.6140) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Mehta_2025_S1](drugs/drug_burosumab/pd_Mehta_2025_S1.md) | Serum Phosphate Concentration ← burosumab · direct Emax (saturable) effect | model (no simulator) | Mehta K et al., Pharmacodynamic Exposure-Response Analy…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6140](https://doi.org/10.1002/jcph.6140) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hruska_2024_FSP](drugs/drug_burosumab/pd_Hruska_2024_FSP.md) | fasting serum phosphate biomarker turnover ← burosumab | — | Hruska MW et al., Model-Informed Approach to Recommend Bu…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3468](https://doi.org/10.1002/cpt.3468) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=burosumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FGF23 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hruska_2024.pdf` | Hruska MW et al., Model-Informed Approach to Recommend Bu…, Clinical pharmacology and t… (2024) | popPK | 7 | [10.1002/cpt.3468](https://doi.org/10.1002/cpt.3468) | [39446135](https://pubmed.ncbi.nlm.nih.gov/39446135) | The paper describes a population PK model for burosumab in humans but the abstract lacks specific numeric parameter values (CL, V, T1/2) which are likely in the full text or supplementary material not fully provided in the evidence snippet. |

<sub>queue written 2026-10-07T03:14:29.667383+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hruska_2024 | relevant | 7 | 2 | The paper describes a population PK model for burosumab in humans but the abstract lacks specific numeric parameter values (CL, V, T1/2) which are likely in the full text or supplementary material not fully provided in the evidence snippet. |
| popPK | Mehta_2024 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling of patient-reported outcomes (PROs) and does not report original quantitative pharmacokinetic parameter values (e.g., clearance, volume) for burosumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:14 UTC</sub>
