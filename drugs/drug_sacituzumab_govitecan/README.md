<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;}]"></div>

# sacituzumab govitecan

- **generic name:** sacituzumab govitecan
- **ATC codes:** `L01FX17`
- **DrugBank:** [DB12893](https://go.drugbank.com/drugs/DB12893) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sacituzumab govitecan is an antibody-drug conjugate used to treat breast cancer, including triple-negative breast cancer. It is approved and authorised for use in the European Union, and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q23901469](https://www.wikidata.org/wiki/Q23901469) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sacituzumab govitecan | parent | 1601.79 | C76H104N12O24S | PubChem | [91668186](https://pubchem.ncbi.nlm.nih.gov/compound/91668186) | Sathe_2024, Sathe_2025 |
| free SN-38 | metabolite | 392.411 | C22H20N2O5 | PubChem | [104842](https://pubchem.ncbi.nlm.nih.gov/compound/104842) | Sathe_2024, Sathe_2025 |
| total antibody | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:17 | 4:01 | 0/4/0 | 0/0/1 | 0/0/0 | 190,222/14,081 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sathe_2024_final_model_estimate_rse](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_final_model_estimate_rse.md) | — | general linear (no model) | 8 (+7 cov.) | Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sathe_2024_untransformed_estimate](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_untransformed_estimate.md) | — | general linear (no model) | 0 | Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sathe_2025_estimate_based_on_previously_developed_model_using_studies_immu_132_01_and_ascent_rse_a](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2025_estimate_based_on_previously.md) | — | general linear (no model) | 13 (+7 cov.) | Sathe AG et al., Sacituzumab Govitecan Population Pharma…, Clinical and translational… (2025) | [10.1111/cts.70291](https://doi.org/10.1111/cts.70291) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sathe_2025_estimate_based_on_updated_model_using_studies_immu_132_01_ascent_and_tropics_02_rse](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2025_estimate_based_on_updated_mod.md) | — | general linear (no model) | 13 (+7 cov.) | Sathe AG et al., Sacituzumab Govitecan Population Pharma…, Clinical and translational… (2025) | [10.1111/cts.70291](https://doi.org/10.1111/cts.70291) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Sathe_2025_2_CR](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_CR.md) | complete response ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Sathe_2025_2_ORR](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_ORR.md) | objective response rate ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sathe_2025_2_diarrhea](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_diarrhea.md) | diarrhea ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sathe_2025_2_nausea](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_nausea.md) | nausea ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sathe_2025_2_neutropenia](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_neutropenia.md) | neutropenia ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sathe_2025_2_time_to_first_dose_delay](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_time_to_first_dose_delay.md) | time to first dose delay ← sacituzumab govitecan · time-to-event model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sathe_2025_2_time_to_first_dose_reduction](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_time_to_first_dose_reduction.md) | time to first dose reduction ← sacituzumab govitecan · time-to-event model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sathe_2025_2_vomiting](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_vomiting.md) | vomiting ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sacituzumab_govitecan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FUBP1 (inhibitor), TACSTD2 (antibody), TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altman_2026 | irrelevant | 0 | 0 | The paper is an in vivo mechanistic and therapeutic synergy study using patient-derived xenografts in mice, containing no pharmacokinetic modeling or quantitative disposition parameters for sacituzumab govitecan. |
| popPK | Cherifi_2024 | irrelevant | 2 | 0 | This is a narrative review that provides only qualitative descriptions of PK mechanisms without reporting specific quantitative numeric values for clearance, volume, or half-life. |
| popPK | Papacharisi_2025 | irrelevant | 0 | 0 | The study investigates amanitin-based antibody-drug conjugates (ATACs) in mice, using sacituzumab govitecan (Trodelvy) only as a comparator agent, and does not report primary PK parameters for sacituzumab govitecan itself. |
| popPK | Sathe_2025_2 | relevant | 5 | 1 | The study reports exposure-response relationships for sacituzumab govitecan using population PK models, but specific disposition parameter values (CL, V, etc.) are not present in the text, likely residing in the referenced supplementary material or the prior PopPK paper (ref 18). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:13 UTC</sub>
