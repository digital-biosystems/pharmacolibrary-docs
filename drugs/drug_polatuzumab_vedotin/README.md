<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;}]"></div>

# polatuzumab vedotin

- **generic name:** polatuzumab vedotin
- **ATC codes:** `L01FX14`
- **DrugBank:** [DB12240](https://go.drugbank.com/drugs/DB12240) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Polatuzumab vedotin is an antibody-based anticancer drug used to treat B-cell lymphoma. It is authorised in the European Union and remains under investigation for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19946115](https://www.wikidata.org/wiki/Q19946115) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| acMMAE | metabolite | 145001 | — | the paper | — | Lu_2020 |
| unconjugated MMAE | metabolite | 718 | — | the paper | — | Lu_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:21 | 12:04 | 0/17/3 | 0/0/0 | 0/0/0 | 268,529/25,456 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_g_chp_pola_1_4_mg_kg](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_g_chp_pola_1_4_mg_kg.md) | — | 1-compartment (no model) | 4 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_g_chp_pola_1_8_mg_kg](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_g_chp_pola_1_8_mg_kg.md) | — | 1-compartment (no model) | 4 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_r_chp_pola_1_8_mg_kg](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_r_chp_pola_1_8_mg_kg.md) | — | 1-compartment (no model) | 4 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Deng_2024_reference](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Deng2024_reference.md) | — | general linear (no model) | 0 | Deng R et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13141](https://doi.org/10.1002/psp4.13141) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_reference](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020_reference.md) | — | parent + metabolite (no model) | 14 | Lu D et al., Integrated Two-Analyte Population Pharm…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12482](https://doi.org/10.1002/psp4.12482) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_2_bendamustine_administrationb](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_bendamustine_administrationb.md) | — | general linear (no model) | 2 | Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020) | [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_2_dose_mg_kg](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_dose_mg_kg.md) | — | general linear (no model) | 0 | Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020) | [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_2_drug_product](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_drug_product.md) | — | general linear (no model) | 2 | Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020) | [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_2_hepatic_function](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_hepatic_function.md) | — | general linear (no model) | 2 | Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020) | [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_2_renal_function](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_renal_function.md) | — | general linear (no model) | 2 | Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020) | [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_2_rituximab_administrationa](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_rituximab_administrationa.md) | — | general linear (no model) | 2 | Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020) | [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lu_2020_2_sex](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_sex.md) | — | general linear (no model) | 2 | Lu D et al., Application of a Two-Analyte Integrated…, Pharmaceutical research (2020) | [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_dose_escalation_b_nhl](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_dose_escalation_b_nhl.md) | — | 1-compartment (no model) | 1 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_expansion_dlbcl](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_expansion_dlbcl.md) | — | 1-compartment (no model) | 1 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_geometric_mean_cv](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_geometric_mean_cv.md) | — | 1-compartment (no model) | 1 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_go27834_pola_r_fl](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_go27834_pola_r_fl.md) | — | 1-compartment (no model) | 0 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_go29044_pola_r_chp_dlbcl](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_go29044_pola_r_chp_dlbcl.md) | — | 1-compartment (no model) | 2 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_r_chp_pola_1_4_mg_kg](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shemesh2020_r_chp_pola_1_4_mg_kg.md) | — | 1-compartment (no model) | 0 | Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shi_2020_pk_parameter_mean_standard_deviation](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shi2020_pk_parameter_mean_standard_deviat.md) | — | parent + metabolite (no model) | 0 | Shi R et al., Asian race and origin have no clinicall…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04119-8](https://doi.org/10.1007/s00280-020-04119-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shi_2020_region_of_enrollment](drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Shi2020_region_of_enrollment.md) | — | parent + metabolite (no model) | 0 | Shi R et al., Asian race and origin have no clinicall…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04119-8](https://doi.org/10.1007/s00280-020-04119-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=polatuzumab_vedotin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CD79B (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 20  ·  extracted 0  ·  needs_review 3  ·  rejected 17  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liao_2023 | relevant | 8 | 4 | The paper reports population PK parameters (clearance, volume of distribution) and exposure metrics (AUC, Cmax) for polatuzumab vedotin, but specific numeric values for CL and V are not explicitly listed in the text, only percentages of variability and relative differences. |
| popPK | Liao_2024 | irrelevant | 2 | 0 | The paper is a review of clinical pharmacology strategies and does not report original quantitative PK parameter values in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:11 UTC</sub>
