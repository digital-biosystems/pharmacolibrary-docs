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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cariprazine | parent | 427.41 | C21H32Cl2N4O | DrugBank | [11154555](https://pubchem.ncbi.nlm.nih.gov/compound/11154555) | Periclou_2021 |
| desmethyl-cariprazine (DCAR) | metabolite | 413.387 | C20H30Cl2N4O | PubChem | [11338928](https://pubchem.ncbi.nlm.nih.gov/compound/11338928) | Periclou_2021 |
| didesmethyl-cariprazine (DDCAR) | metabolite | 399.36 | C19H28Cl2N4O | PubChem | [11200383](https://pubchem.ncbi.nlm.nih.gov/compound/11200383) | Periclou_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:28 | 5:16 | 0/0/1 | 2/0/0 | 0/0/0 | 223,565/20,827 | ollama / glm-5.3-flash | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> | [Periclou_2021_reference](drugs/drug_cariprazine/Cariprazine_Periclou2021_reference.md) | model (no simulator) | 2-compartment general linear | 6 | Periclou A et al., Population Pharmacokinetics of Caripraz…, European journal of drug me… (2021) | [10.1007/s13318-020-00650-4](https://doi.org/10.1007/s13318-020-00650-4) |

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

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cariprazine).

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
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
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
