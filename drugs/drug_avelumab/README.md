<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Avelumab_Vugmeyster2022_adult_model&quot;,&quot;label&quot;:&quot;Vugmeyster_2022_adult_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Vugmeyster2022_adult_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_van2025_reference&quot;,&quot;label&quot;:&quot;van_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_van2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Avelumab_Wilkins2019_reference&quot;,&quot;label&quot;:&quot;Wilkins_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/Avelumab_Wilkins2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# avelumab

- **generic name:** avelumab
- **ATC codes:** `L01FF04`
- **DrugBank:** [DB11945](https://go.drugbank.com/drugs/DB11945) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Avelumab is a fully human anti-PD-L1 monoclonal antibody used as cancer immunotherapy, studied for tumours including Merkel cell carcinoma, bladder, ovarian, stomach, kidney, head and neck, and lung cancers, and mesothelioma. It is an approved anticancer medicine, with additional uses still under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21083261](https://www.wikidata.org/wiki/Q21083261) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:12 | 6:30 | 2/1/3 | 1/0/0 | 0/0/0 | 293,676/20,591 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.438). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Vugmeyster_2022_adult_model](drugs/drug_avelumab/Avelumab_Vugmeyster2022_adult_model.md) | ▶ model + simulator | 2-compartment, IV | 5 (+2 cov.) | Vugmeyster Y et al., Avelumab Dose Selection for Clinical St…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01111-8](https://doi.org/10.1007/s40262-022-01111-8) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [van_2025_reference](drugs/drug_avelumab/Avelumab_van2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+6 cov.) | van der Walt JS et al., Interplay between pharmacokinetics and…, Journal of pharmacokinetics… (2025) | [10.1007/s10928-025-09971-w](https://doi.org/10.1007/s10928-025-09971-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q89 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Masters_2022_reference](drugs/drug_avelumab/Avelumab_Masters2022_reference.md) | — | 2-compartment (no model) | 6 | Masters JC et al., Model-informed drug development support…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12771](https://doi.org/10.1002/psp4.12771) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.438). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Vugmeyster_2022_final_pediatric_model](drugs/drug_avelumab/Avelumab_Vugmeyster2022_final_pediatric_model.md) | — | 1-compartment (no model) | 3 (+2 cov.) | Vugmeyster Y et al., Avelumab Dose Selection for Clinical St…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01111-8](https://doi.org/10.1007/s40262-022-01111-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.568). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Wilkins_2019_reference](drugs/drug_avelumab/Avelumab_Wilkins2019_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+12 cov.) | Wilkins JJ et al., Time-Varying Clearance and Impact of Di…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12406](https://doi.org/10.1002/psp4.12406) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.688). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Grisic_2022_reference](drugs/drug_avelumab/Avelumab_Grisic2022_reference.md) | — | 2-compartment (no model) | 6 (+3 cov.) | Grisic AM et al., Model-Based Characterization of the Bid…, Clinical cancer research :… (2022) | [10.1158/1078-0432.CCR-21-2662](https://doi.org/10.1158/1078-0432.CCR-21-2662) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_binding](drugs/drug_avelumab/pd_De_2019_binding.md) | binding ← avelumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_eGFP](drugs/drug_avelumab/pd_De_2019_eGFP.md) | normalized reporter gene expression ← avelumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=avelumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 6  ·  extracted 2  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2019 | irrelevant | 0 | 0 | The paper is an in-vitro functional assay comparing PD-1/PD-L1 blocking efficacy (EC50 values) and does not report pharmacokinetic disposition parameters (CL, V, half-life) for avelumab in any species. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | This is a pharmacodynamic (PD) study measuring target engagement (PD-L1 levels via PET) rather than a pharmacokinetic (PK) study reporting quantitative disposition parameters (CL, V, etc.) for avelumab. |
| popPK | Mjaess_2026 | irrelevant | 0 | 0 | The paper is a clinical surgical outcomes analysis of a phase II trial, not a pharmacokinetic study, and contains no disposition parameters for avelumab. |
| popPK | Vugmeyster_2019 | irrelevant | 0 | 0 | This paper describes a Thorough QT analysis assessing cardiac safety and does not report pharmacokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Warmuth_2021 | irrelevant | 1 | 0 | The paper focuses on a different drug candidate (NM21-1480), and avelumab is used only as a control/referent for potency without reported PK parameters. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The paper describes the development and in vitro/in vivo efficacy of an Atezolizumab-based ADC, using Avelumab only as a comparator for endocytosis efficiency, and does not report any pharmacokinetic parameters for avelumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:06 UTC</sub>
