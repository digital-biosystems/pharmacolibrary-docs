<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;datopotamab deruxtecan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;DatopotamabDeruxtecan_Tang2026_reference&quot;,&quot;label&quot;:&quot;Tang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_datopotamab_deruxtecan/DatopotamabDeruxtecan_Tang2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# datopotamab deruxtecan

- **generic name:** datopotamab deruxtecan
- **ATC codes:** `L01FX35`
- **DrugBank:** [DB16410](https://go.drugbank.com/drugs/DB16410) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Datopotamab deruxtecan is an antibody-drug conjugate used to treat breast cancer and non-small-cell lung cancer. It is authorised in the European Union and remains under investigation for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| DXd | metabolite | 493.5 | — | the paper | — | Hong_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:06 | 2:10 | 1/1/0 | 0/0/1 | 0/0/0 | 110,132/8,479 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Tang_2026_reference](drugs/drug_datopotamab_deruxtecan/DatopotamabDeruxtecan_Tang2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.26). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hong_2025_reference](drugs/drug_datopotamab_deruxtecan/DatopotamabDeruxtecan_Hong2025_reference.md) | — | parent + metabolite (no model) | 9 (+14 cov.) | Hong Y et al., Population Pharmacokinetic Analysis of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70118](https://doi.org/10.1002/psp4.70118) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Tang_2026_OS](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_OS.md) | Overall Survival ← Dato‐DXd · time-to-event model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tang_2026_OSE](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_OSE.md) | Ocular surface event any grade ← Dato‐DXd · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tang_2026_OSE_2](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_OSE_2.md) | Ocular surface event ≥ Grade 2 ← Dato‐DXd · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tang_2026_Oral_mucositis_stomatitis_Grade_2](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_Oral_mucositis_stomatitis_Grade_2.md) | Oral mucositis/stomatitis ≥ Grade 2 ← Dato‐DXd · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tang_2026_Oral_mucositis_stomatitis_any_grade](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_Oral_mucositis_stomatitis_any_grade.md) | Oral mucositis/stomatitis any grade ← Dato‐DXd · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tang_2026_TEAE_leading_to_dose_interruption](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_TEAE_leading_to_dose_interruption.md) | TEAE leading to dose interruption ← Dato‐DXd · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tang_2026_TEAE_leading_to_dose_reduction](drugs/drug_datopotamab_deruxtecan/pd_Tang_2026_TEAE_leading_to_dose_reduction.md) | TEAE leading to dose reduction ← Dato‐DXd · categorical (graded) response model | — | Tang Z et al., Exposure-Response Analyses of Datopotam…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70188](https://doi.org/10.1002/jcph.70188) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=datopotamab_deruxtecan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | `SLC47A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TACSTD2 (antibody), TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lu_2024 | relevant | 8 | 1 | The paper describes a population PK model for datopotamab deruxtecan, but the specific numeric parameter estimates are explicitly stated to be in Tables S6 and S7 (supplementary material) which are not included in the provided evidence. |
| popPK | Shia_2025 | irrelevant | 2 | 1 | The study is a preclinical investigation of the novel ADC OBI-992, with datopotamab deruxtecan (Dato-DXd) used only as a comparator benchmark; furthermore, specific PK parameters for Dato-DXd are referenced as being in Supplementary Table S1 or Figures which are not included in the provided evidence. |
| popPK | Tang_2026 | relevant | 3 | 5 | The paper is an exposure-response analysis, not a primary PK study, but it explicitly reports specific quantitative disposition parameters (clearance 0.386 L/day, Vd 5.94 L, t1/2 4.8 days, DXd CL 2.66 L/h) in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:04 UTC</sub>
