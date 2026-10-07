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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ritlecitinib | parent | 285.351 | C15H19N5O | DrugBank | — | Purohit_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:25 | 1:43 | 0/1/2 | 2/0/1 | 0/0/0 | 187,960/14,409 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Purohit_2023_study_1_30_mg_qd](drugs/drug_ritlecitinib/Ritlecitinib_Purohit2023_study_1_30_mg_qd.md) | — | 1-compartment (no model) | 4 | Purohit V et al., Leveraging Prior Healthy Participant Ph…, The AAPS journal (2023) | [10.1208/s12248-023-00792-8](https://doi.org/10.1208/s12248-023-00792-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Purohit_2023_study_2_50_mg_qd](drugs/drug_ritlecitinib/Ritlecitinib_Purohit2023_study_2_50_mg_qd.md) | — | 1-compartment (no model) | 4 | Purohit V et al., Leveraging Prior Healthy Participant Ph…, The AAPS journal (2023) | [10.1208/s12248-023-00792-8](https://doi.org/10.1208/s12248-023-00792-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wojciechowski_2023_reference](drugs/drug_ritlecitinib/Ritlecitinib_Wojciechowski2023_reference.md) | — | 1-compartment (no model) | 0 | Wojciechowski J et al., Evolution of Ritlecitinib Population Ph…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01318-3](https://doi.org/10.1007/s40262-023-01318-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Huh_2025_Herpes_Zoster](drugs/drug_ritlecitinib/pd_Huh_2025_Herpes_Zoster.md) | incidence of herpes zoster ← ritlecitinib · stimulation effect | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huh_2025_Infections](drugs/drug_ritlecitinib/pd_Huh_2025_Infections.md) | incidence of infections ← ritlecitinib · stimulation effect | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huh_2025_Lymphocyte](drugs/drug_ritlecitinib/pd_Huh_2025_Lymphocyte.md) | lymphocyte count ← ritlecitinib · direct Emax (saturable) effect | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Huh_2025_Rash](drugs/drug_ritlecitinib/pd_Huh_2025_Rash.md) | incidence of rash ← ritlecitinib · stimulation effect | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Wang_2025_EBA](drugs/drug_ritlecitinib/pd_Wang_2025_EBA.md) | eyebrow assessment ← ritlecitinib · indirect response — drug stimulates the production of eyebrow assessment | — | Wang Y et al., Population exposure-response analysis o…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13283](https://doi.org/10.1002/psp4.13283) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Wang_2025_ELA](drugs/drug_ritlecitinib/pd_Wang_2025_ELA.md) | eyelash assessment ← ritlecitinib · indirect response — drug stimulates the production of eyelash assessment | — | Wang Y et al., Population exposure-response analysis o…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13283](https://doi.org/10.1002/psp4.13283) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Huh_2024_SALT](drugs/drug_ritlecitinib/pd_Huh_2024_SALT.md) | SALT score ← ritlecitinib · indirect response — drug stimulates the production of SALT score | — | Huh Y et al., Moving Beyond Boundaries: Utilization o…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01347-6](https://doi.org/10.1007/s40262-024-01347-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Huh_2025_QTcF](drugs/drug_ritlecitinib/pd_Huh_2025_QTcF.md) | change from baseline heart rate– corrected QTcF (∆QTcF) ← ritlecitinib · direct linear effect | — | Huh Y et al., Comprehensive Safety Exposure-Response…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70030](https://doi.org/10.1002/psp4.70030) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ritlecitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` inhibitor/substrate, `GSTM1` unknown, `GSTP1` substrate | DrugBank actor |
| metabolism | lung | `GSTP1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BMX (inhibitor), BTK (inhibitor), GSTA1 (substrate), GSTA3 (substrate), GSTM3 (substrate), GSTM5 (substrate), GSTT2 (substrate), GSTZ1 (substrate), ITK (inhibitor), JAK3 (inhibitor), MGST1 (substrate), MGST2 (substrate), MGST3 (substrate), TEC (inhibitor), TXK (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huh_2024 | irrelevant | 1 | 1 | The paper describes a longitudinal exposure-response (efficacy) model for ritlecitinib and does not report the population pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| popPK | Huh_2025 | irrelevant | 0 | 0 | This is a safety exposure-response (ER) modeling study for ritlecitinib that does not report a new population PK model or quantitative PK parameters (CL, V, etc.) for the drug itself, but rather references a previous PK publication. |
| popPK | Wang_2025 | irrelevant | 1 | 0 | The paper is an exposure-response (efficacy) analysis using pre-existing PK data and does not report new quantitative pharmacokinetic disposition parameters (CL, V, Q) for ritlecitinib. |
| popPK | Winnette_2022 | irrelevant | 0 | 0 | The paper reports on patient-reported outcomes and efficacy scores (SALT, AASIS) for alopecia areata, containing no pharmacokinetic or pharmacodynamic parameter data for ritlecitinib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:23 UTC</sub>
