<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mirikizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirikizumab_Otani2025_reference&quot;,&quot;label&quot;:&quot;Otani_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/Mirikizumab_Otani2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mirikizumab

- **generic name:** mirikizumab
- **ATC codes:** `L04AC24`
- **DrugBank:** [DB14910](https://go.drugbank.com/drugs/DB14910) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Mirikizumab, a monoclonal antibody that blocks interleukin signalling, is used to treat ulcerative colitis. It is approved and authorised in the European Union, and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q55641096](https://www.wikidata.org/wiki/Q55641096) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:20 | 2:59 | 1/1/2 | 1/0/0 | 0/0/0 | 165,446/18,116 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span> | [Otani_2025_reference](drugs/drug_mirikizumab/Mirikizumab_Otani2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Otani Y et al., Mirikizumab pharmacokinetics and exposu…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13286](https://doi.org/10.1002/psp4.13286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Chua_2023_reference](drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md) | — | 1-compartment (no model) | 2 | Chua L et al., Mirikizumab Pharmacokinetics in Patient…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01281-z](https://doi.org/10.1007/s40262-023-01281-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Chua_2025_vivid_1](drugs/drug_mirikizumab/Mirikizumab_Chua2025_vivid_1.md) | — | 1-compartment (no model) | 2 (+7 cov.) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chua_2025_serenity](drugs/drug_mirikizumab/Mirikizumab_Chua2025_serenity.md) | — | 1-compartment (no model) | 0 (+7 cov.) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chua_2025_SES_CD_50_reduction](drugs/drug_mirikizumab/pd_Chua_2025_SES_CD_50_reduction.md) | endoscopic response ← mirikizumab · direct Emax (saturable) effect | — | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chua_2025_CDAI_150_at_Week_52](drugs/drug_mirikizumab/pd_Chua_2025_CDAI_150_at_Week_52.md) | CDAI clinical remission-composite ← mirikizumab · direct linear effect | model (no simulator) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chua_2025_PRO_30_decrease_SF_AP](drugs/drug_mirikizumab/pd_Chua_2025_PRO_30_decrease_SF_AP.md) | clinical response by PRO ← mirikizumab · direct linear effect | model (no simulator) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chua_2025_Week_52_endoscopic_response_composite](drugs/drug_mirikizumab/pd_Chua_2025_Week_52_endoscopic_response_composite.md) | endoscopic response-composite ← mirikizumab · direct linear effect | model (no simulator) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mirikizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL12A (inhibitor), IL23A (antibody), IL23A (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dubinsky_2023 | irrelevant | 0 | 0 | The paper focuses on health-related quality of life (HRQoL) outcomes and clinical efficacy in ulcerative colitis patients, reporting no quantitative pharmacokinetic parameters (CL, V, etc.) for mirikizumab. |
| popPK | Friedrich_2024 | relevant | 4 | 0 | The paper describes PK-model-predicted exposures and exposure-response relationships for mirikizumab, but no specific quantitative PK parameter values (CL, V, half-life) are present in the provided abstract. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:17 UTC</sub>
