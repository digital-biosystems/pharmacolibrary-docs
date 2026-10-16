<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;alemtuzumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alemtuzumab_Dong2022_reference&quot;,&quot;label&quot;:&quot;Dong_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Dong_2022_ALC&quot;,&quot;label&quot;:&quot;Dong_2022 \u00b7 ALC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/pd_Dong_2022_ALC.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Mould_2007_WBC&quot;,&quot;label&quot;:&quot;Mould_2007 \u00b7 WBC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/pd_Mould_2007_WBC.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_van_2025_Tcells&quot;,&quot;label&quot;:&quot;van_2025 \u00b7 Tcells&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/pd_van_2025_Tcells.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# alemtuzumab

- **generic name:** alemtuzumab
- **ATC codes:** `L01XC04`, `L04AA34`, `L04AG06`
- **DrugBank:** [DB00087](https://go.drugbank.com/drugs/DB00087) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Alemtuzumab is a monoclonal antibody used to treat multiple sclerosis and certain leukemias, including chronic lymphocytic leukemia and T-cell prolymphocytic leukemia. It remains authorised in the European Union, though one EU product has been withdrawn, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420164](https://www.wikidata.org/wiki/Q420164) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:03 | 2:23 | 1/2/1 | 0/0/3 | 0/0/0 | 136,149/10,376 | einfracz / qwen3.8-27b | 5 | 0/5 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span> | [Dong_2022_reference](drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Dong M et al., Model-informed precision dosing for ale…, British journal of clinical… (2022) | [10.1111/bcp.14955](https://doi.org/10.1111/bcp.14955) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q56, Q66 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Achini-Gutzwiller_2023_2_reference](drugs/drug_alemtuzumab/Alemtuzumab_AchiniGutzwiller2023v2_reference.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Achini-Gutzwiller FR et al., Exposure-response analysis of alemtuzum…, Blood advances (2023) | [10.1182/bloodadvances.2022009051](https://doi.org/10.1182/bloodadvances.2022009051) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Admiraal_2019_reference](drugs/drug_alemtuzumab/Alemtuzumab_Admiraal2019_reference.md) | — | 2-compartment (no model) | 7 | Admiraal R et al., Population Pharmacokinetics of Alemtuzu…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00782-0](https://doi.org/10.1007/s40262-019-00782-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Mould_2007_reference](drugs/drug_alemtuzumab/Alemtuzumab_Mould2007_reference.md) | — | 1-compartment (no model) | 2 | Mould DR et al., Population pharmacokinetics-pharmacodyn…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02914.x](https://doi.org/10.1111/j.1365-2125.2007.02914.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Dong_2022_ALC](drugs/drug_alemtuzumab/pd_Dong_2022_ALC.md) | absolute lymphocyte count ← alemtuzumab · direct Emax (saturable) effect | ▶ model + simulator | Dong M et al., Model-informed precision dosing for ale…, British journal of clinical… (2022) | [10.1111/bcp.14955](https://doi.org/10.1111/bcp.14955) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span> | [Mould_2007_WBC](drugs/drug_alemtuzumab/pd_Mould_2007_WBC.md) | white blood cell count ← alemtuzumab · indirect response — drug stimulates the loss of white blood cell count | ▶ model + simulator | Mould DR et al., Population pharmacokinetics-pharmacodyn…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02914.x](https://doi.org/10.1111/j.1365-2125.2007.02914.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span> | [van_2025_Tcells](drugs/drug_alemtuzumab/pd_van_2025_Tcells.md) | T cells ← alemtuzumab · indirect response — drug stimulates the loss of T cells | ▶ model + simulator | van Vugt LK et al., Alemtuzumab Exposure and T Lymphocyte D…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3714](https://doi.org/10.1002/cpt.3714) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alemtuzumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD52 (antibody), FCGR1A (binder), FCGR2A (binder), FCGR2B (binder), FCGR2C (binder), FCGR3A (binder), FCGR3B (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dong_2022.pdf` | Dong M et al., Model-informed precision dosing for ale…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.14955](https://doi.org/10.1111/bcp.14955) | [34182590](https://pubmed.ncbi.nlm.nih.gov/34182590) | The study reports quantitative population PK parameters (clearance 0.080 L/h/70 kg, volume 17.4 L/70 kg) for alemtuzumab in humans directly in the text. |
| `Mould_2007.pdf` | Mould DR et al., Population pharmacokinetics-pharmacodyn…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02914.x](https://doi.org/10.1111/j.1365-2125.2007.02914.x) | [17506867](https://pubmed.ncbi.nlm.nih.gov/17506867) | The paper reports a population PK model for alemtuzumab with specific numeric values for V1, Q, V2, and elimination parameters explicitly listed in the evidence. |
| `Zwart_2023.pdf` | Zwart TC et al., Population pharmacokinetics of subcutan…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15608](https://doi.org/10.1111/bcp.15608) | [36408784](https://pubmed.ncbi.nlm.nih.gov/36408784) | The paper reports a population pharmacokinetic model for alemtuzumab with qualitative variability descriptions (39.6%), but specific numeric parameter estimates (CL, V, Q) are not present in the provided text. |

<sub>queue written 2026-10-15T04:01:07.297732+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Elter_2008 | irrelevant | 2 | 0 | The paper is a review that describes the PK model structure qualitatively but does not report any specific quantitative parameter values (CL, V, etc.) in the provided text. |
| popPK | He_2020 | irrelevant | 0 | 0 | The paper is a retrospective observational cohort study analyzing disability outcomes (EDSS scores) in multiple sclerosis patients, not a pharmacokinetic study of alemtuzumab. |
| popPK | Keogh_2021 | irrelevant | 2 | 0 | The paper is a narrative review that discusses alemtuzumab PK qualitatively and references other studies for values, but provides no original quantitative PK parameter values for alemtuzumab. |
| popPK | McCune_2015 | irrelevant | 2 | 1 | The paper is a review discussing pediatric PK for various HSCT drugs; alemtuzumab is only mentioned qualitatively (mechanism, half-life variability) without a dedicated PK model or specific quantitative disposition parameters for the drug itself in the context of a study design. |
| popPK | Pyatt_2025 | irrelevant | 0 | 0 | The paper analyzes the pharmacokinetics of belatacept, not alemtuzumab. |
| popPK | Zwart_2023 | relevant | 10 | 2 | The paper reports a population pharmacokinetic model for alemtuzumab with qualitative variability descriptions (39.6%), but specific numeric parameter estimates (CL, V, Q) are not present in the provided text. |
| popPK | van_2025 | relevant | 9 | 1 | The paper describes a population PK-PD model for alemtuzumab, but explicitly states that the PK parameter estimates are listed in Table S1 (Supplementary) and were adopted from a previous reference without modification, so no numeric PK values are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:01 UTC</sub>
