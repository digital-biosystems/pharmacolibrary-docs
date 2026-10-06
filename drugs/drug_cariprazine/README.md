<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;cariprazine&quot;}]"></div>

# cariprazine

- **generic name:** cariprazine
- **ATC codes:** `N05AX15`
- **DrugBank:** [DB06016](https://go.drugbank.com/drugs/DB06016) · **PubChem:** [CID 11154555](https://pubchem.ncbi.nlm.nih.gov/compound/11154555)
- **molar mass:** 427.41 g/mol (C21H32Cl2N4O) — DrugBank
- **groups:** approved, investigational

## About

Cariprazine is an antipsychotic used to treat schizophrenia and bipolar I disorder. It is authorised in the European Union for schizophrenia and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2938837](https://www.wikidata.org/wiki/Q2938837) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cariprazine | parent | 427.41 | C21H32Cl2N4O | DrugBank | [11154555](https://pubchem.ncbi.nlm.nih.gov/compound/11154555) | Periclou_2021 |
| desmethyl-cariprazine (DCAR) | metabolite | 413.387 | C20H30Cl2N4O | PubChem | [11338928](https://pubchem.ncbi.nlm.nih.gov/compound/11338928) | Periclou_2021 |
| didesmethyl-cariprazine (DDCAR) | metabolite | 399.36 | C19H28Cl2N4O | PubChem | [11200383](https://pubchem.ncbi.nlm.nih.gov/compound/11200383) | Periclou_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:28 | 5:16 | 1/0/0 | 2/0/0 | 0/0/0 | 223,565/20,827 | ollama / glm-5.3-flash | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Periclou_2021_reference](drugs/drug_cariprazine/Cariprazine_Periclou2021_reference.md) | model (no simulator) | 2-compartment general linear | 6 | Periclou A et al., Population Pharmacokinetics of Caripraz…, European journal of drug me… (2021) | [10.1007/s13318-020-00650-4](https://doi.org/10.1007/s13318-020-00650-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Girgis_2016_OCC_D2_2](drugs/drug_cariprazine/pd_Girgis_2016_OCC_D2_2.md) | D2 receptor occupancy (dose-occupancy) ← cariprazine · direct Emax (saturable) effect | — | Girgis RR et al., Preferential binding to dopamine D3 ove…, Psychopharmacology (2016) | [10.1007/s00213-016-4382-y](https://doi.org/10.1007/s00213-016-4382-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Girgis_2016_OCC_D3_2](drugs/drug_cariprazine/pd_Girgis_2016_OCC_D3_2.md) | D3 receptor occupancy (dose-occupancy) ← cariprazine · direct Emax (saturable) effect | — | Girgis RR et al., Preferential binding to dopamine D3 ove…, Psychopharmacology (2016) | [10.1007/s00213-016-4382-y](https://doi.org/10.1007/s00213-016-4382-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Periclou_2020_PANSSN](drugs/drug_cariprazine/pd_Periclou_2020_PANSSN.md) | PANSS negative subscale score ← total cariprazine (sum of cariprazine, DCAR, and DDCAR) · direct sigmoid Emax (Hill) effect | — | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Periclou_2020_PANSSP](drugs/drug_cariprazine/pd_Periclou_2020_PANSSP.md) | PANSS positive subscale score ← total cariprazine (sum of cariprazine, DCAR, and DDCAR) · direct sigmoid Emax (Hill) effect | — | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Girgis_2016_OCC_D2](drugs/drug_cariprazine/pd_Girgis_2016_OCC_D2.md) | D2 receptor occupancy ← total active cariprazine (cariprazine + DCAR + DDCAR) · direct Emax (saturable) effect | model (no simulator) | Girgis RR et al., Preferential binding to dopamine D3 ove…, Psychopharmacology (2016) | [10.1007/s00213-016-4382-y](https://doi.org/10.1007/s00213-016-4382-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Girgis_2016_OCC_D3](drugs/drug_cariprazine/pd_Girgis_2016_OCC_D3.md) | D3 receptor occupancy ← total active cariprazine (cariprazine + DCAR + DDCAR) · direct Emax (saturable) effect | model (no simulator) | Girgis RR et al., Preferential binding to dopamine D3 ove…, Psychopharmacology (2016) | [10.1007/s00213-016-4382-y](https://doi.org/10.1007/s00213-016-4382-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Periclou_2020_AKA](drugs/drug_cariprazine/pd_Periclou_2020_AKA.md) | akathisia (treatment-emergent adverse event) ← total cariprazine (TCave) · categorical (graded) response model | — | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Periclou_2020_EPS](drugs/drug_cariprazine/pd_Periclou_2020_EPS.md) | extrapyramidal symptoms without akathisia or restlessness (treatment-emergent adverse event) ← total cariprazine (TCave) · categorical (graded) response model | — | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Periclou_2020_NAV](drugs/drug_cariprazine/pd_Periclou_2020_NAV.md) | nausea and/or vomiting (treatment-emergent adverse event) ← total cariprazine (TCave) · categorical (graded) response model | — | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Periclou_2020_PANSS_total](drugs/drug_cariprazine/pd_Periclou_2020_PANSS_total.md) | Positive and Negative Syndrome Scale total score ← total cariprazine (sum of cariprazine, DCAR, and DDCAR) · direct sigmoid Emax (Hill) effect | model (no simulator) | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Periclou_2020_PKC](drugs/drug_cariprazine/pd_Periclou_2020_PKC.md) | parkinsonism cluster (treatment-emergent adverse event) ← total cariprazine (TCave) · categorical (graded) response model | — | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Periclou_2020_YMRS_total](drugs/drug_cariprazine/pd_Periclou_2020_YMRS_total.md) | Young Mania Rating Scale total score ← total cariprazine (sum of cariprazine, DCAR, and DDCAR) · direct Emax (saturable) effect | model (no simulator) | Periclou A et al., Relationship Between Plasma Concentrati…, Clinical and translational… (2020) | [10.1111/cts.12720](https://doi.org/10.1111/cts.12720) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cariprazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), DRD2 (partial agonist), DRD3 (partial agonist), HRH1 (target), HTR1A (partial agonist), HTR2A (target), HTR2B (target), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Correll_2025 | irrelevant | 0 | 0 | This is a real-world observational study of cariprazine's effects on weight, BMI, and blood pressure, with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Falkai_2023 | irrelevant | 0 | 0 | This is a post hoc efficacy/safety analysis of cariprazine in schizophrenia with no pharmacokinetic parameters reported. |
| popPK | Girgis_2016 | irrelevant | 3 | 2 | PET receptor-occupancy study with only noncompartmental exposure summaries (Cmax, AUC, troughs) and no CL/V/ka/population-PK parameters; detailed PK values are in Supplemental Table 1 and figures not provided. |
| popPK | Hovgesen_2025 | irrelevant | 0 | 0 | This is a clinical trial protocol for efficacy/tolerability of lithium vs cariprazine in bipolar depression, with no pharmacokinetic parameters or quantitative disposition data for cariprazine. |
| popPK | Kiss_2010 | irrelevant | 0 | 0 | In vitro/neurochemical receptor-binding and functional profile study with no PK parameters for cariprazine. |
| popPK | McIntyre_2025 | irrelevant | 0 | 0 | This is a clinical efficacy (anhedonia) post hoc analysis with no PK parameters for cariprazine. |
| popPK | Meszár_2024 | irrelevant | 3 | 4 | Bioequivalence study with only NCA exposure metrics (AUC, Cmax, ratios); no clearance, volume, half-life, or compartmental/population-PK parameters reported. |
| popPK | Németh_2017 | irrelevant | 0 | 0 | This is a clinical efficacy trial with no PK parameters or compartmental model reported for cariprazine. |
| popPK | Periclou_2020 | relevant | 5 | 2 | Population PK models of cariprazine (and metabolites DCAR/DDCAR) are used to derive exposures, but the PK parameter values (CL, V, etc.) are in unpublished analyses/supplementary material not provided; only PD parameters (Emax, EC50-related values) appear. |
| popPK | Sachs_2023 | irrelevant | 0 | 0 | This is an efficacy/safety clinical trial with no PK parameters or quantitative disposition values reported. |
| popPK | Vieta_2024 | irrelevant | 0 | 0 | Efficacy post hoc analysis of RCTs with no PK parameters reported. |
| popPK | Vogt_2026 | irrelevant | 1 | 1 | Medicinal chemistry/in-vitro receptor binding and microsomal stability study; no PK disposition parameters for cariprazine, only Ki and microsomal t1/2 values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:24 UTC</sub>
