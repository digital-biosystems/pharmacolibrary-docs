<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ritlecitinib&quot;}]"></div>

# ritlecitinib

- **generic name:** ritlecitinib
- **ATC codes:** `L04AF08`
- **DrugBank:** [DB14924](https://go.drugbank.com/drugs/DB14924) · **PubChem:** not captured
- **molar mass:** 285.351 g/mol (C15H19N5O) — DrugBank
- **groups:** approved, investigational

## About

Ritlecitinib is a JAK inhibitor medicine used to treat alopecia areata, a condition causing hair loss. It is authorised in the European Union and is an approved, relatively new treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q120487896](https://www.wikidata.org/wiki/Q120487896) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ritlecitinib | parent | 285.351 | C15H19N5O | DrugBank | — | Purohit_2023, Wojciechowski_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:15 | 2:59 | 0/2/2 | 3/0/0 | 0/0/0 | 201,358/17,007 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Purohit_2023_study_1_30_mg_qd](drugs/drug_ritlecitinib/Ritlecitinib_Purohit2023_study_1_30_mg_qd.md) | — | 1-compartment (no model) | 3 | Purohit V et al., Leveraging Prior Healthy Participant Ph…, The AAPS journal (2023) | [10.1208/s12248-023-00792-8](https://doi.org/10.1208/s12248-023-00792-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Purohit_2023_study_2_50_mg_qd](drugs/drug_ritlecitinib/Ritlecitinib_Purohit2023_study_2_50_mg_qd.md) | — | 1-compartment (no model) | 3 | Purohit V et al., Leveraging Prior Healthy Participant Ph…, The AAPS journal (2023) | [10.1208/s12248-023-00792-8](https://doi.org/10.1208/s12248-023-00792-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Purohit_2023_reference](drugs/drug_ritlecitinib/Ritlecitinib_Purohit2023_reference.md) | — | 1-compartment (no model) | 2 | Purohit V et al., Leveraging Prior Healthy Participant Ph…, The AAPS journal (2023) | [10.1208/s12248-023-00792-8](https://doi.org/10.1208/s12248-023-00792-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wojciechowski_2023_reference](drugs/drug_ritlecitinib/Ritlecitinib_Wojciechowski2023_reference.md) | — | 2-compartment (no model) | 5 (+2 cov.) | Wojciechowski J et al., Evolution of Ritlecitinib Population Ph…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01318-3](https://doi.org/10.1007/s40262-023-01318-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Huh_2024_SALT](drugs/drug_ritlecitinib/pd_Huh_2024_SALT.md) | Severity of Alopecia Tool score ← ritlecitinib · indirect response — drug stimulates the production of Severity of Alopecia Tool score | — | Huh Y et al., Moving Beyond Boundaries: Utilization o…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01347-6](https://doi.org/10.1007/s40262-024-01347-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huh_2025_lymphocyte_count](drugs/drug_ritlecitinib/pd_Huh_2025_lymphocyte_count.md) | lymphocyte count ← ritlecitinib · delayed effect through transit (transduction) compartments | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Wang_2025_EBA](drugs/drug_ritlecitinib/pd_Wang_2025_EBA.md) | eyebrow assessment ← ritlecitinib · indirect response — drug stimulates the production of eyebrow assessment | — | Wang Y et al., Population exposure-response analysis o…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13283](https://doi.org/10.1002/psp4.13283) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Wang_2025_ELA](drugs/drug_ritlecitinib/pd_Wang_2025_ELA.md) | eyelash assessment ← ritlecitinib · indirect response — drug stimulates the production of eyelash assessment | — | Wang Y et al., Population exposure-response analysis o…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13283](https://doi.org/10.1002/psp4.13283) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Huh_2025_herpes_zoster_infection](drugs/drug_ritlecitinib/pd_Huh_2025_herpes_zoster_infection.md) | herpes zoster infection ← ritlecitinib · categorical (graded) response model | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Huh_2025_infections](drugs/drug_ritlecitinib/pd_Huh_2025_infections.md) | infections ← ritlecitinib · categorical (graded) response model | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Huh_2025_rash](drugs/drug_ritlecitinib/pd_Huh_2025_rash.md) | rash ← ritlecitinib · categorical (graded) response model | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ritlecitinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` inhibitor/substrate, `GSTM1` unknown, `GSTP1` substrate | DrugBank actor |
| metabolism | lung | `GSTP1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: BMX (inhibitor), BTK (inhibitor), GSTA1 (substrate), GSTA3 (substrate), GSTM3 (substrate), GSTM5 (substrate), GSTT2 (substrate), GSTZ1 (substrate), ITK (inhibitor), JAK3 (inhibitor), MGST1 (substrate), MGST2 (substrate), MGST3 (substrate), TEC (inhibitor), TXK (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huh_2024 | irrelevant | 2 | 0 | This is an exposure-response (efficacy) modeling study using population PK data from a separate source [7], and it reports only efficacy parameters (e.g., response half-life), not ritlecitinib's PK disposition parameters. |
| popPK | Huh_2025 | irrelevant | 2 | 0 | This is a safety exposure-response (ER) and PK/PD modeling study focused on adverse events and cardiac effects; it does not report the core population pharmacokinetic disposition parameters (CL, V, Q, ka, t1/2) for ritlecitinib itself, which are referenced as existing in a separate publication [11]. |
| popPK | Wang_2025 | irrelevant | 1 | 0 | This is a population exposure-response (PD) analysis, not a PK study, and it does not report quantitative PK parameters like CL, V, or ka for ritlecitinib. |
| popPK | Winnette_2022 | irrelevant | 0 | 0 | The study focuses on patient-reported outcomes and clinician assessments of hair loss, containing no pharmacokinetic parameters or disposition data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:12 UTC</sub>
