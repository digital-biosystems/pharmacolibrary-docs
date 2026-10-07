<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;isatuximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isatuximab_Fau2020_reference&quot;,&quot;label&quot;:&quot;Fau_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# isatuximab

- **generic name:** isatuximab
- **ATC codes:** `L01FC02`, `L01XC38`
- **DrugBank:** [DB14811](https://go.drugbank.com/drugs/DB14811) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Isatuximab is a monoclonal antibody that inhibits CD38 and is used to treat multiple myeloma. It is authorised in the European Union and is used in cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20707906](https://www.wikidata.org/wiki/Q20707906) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:10 | 8:14 | 1/2/0 | 3/0/0 | 0/0/0 | 197,411/46,283 | openai / gpt-6-luna | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fau_2020_reference](drugs/drug_isatuximab/Isatuximab_Fau2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fau JB et al., Drug-Disease Interaction and Time-Depen…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12561](https://doi.org/10.1002/psp4.12561) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Brillac_2025_final](drugs/drug_isatuximab/Isatuximab_Brillac2025_final.md) | — | 2-compartment (no model) | 3 | Brillac C et al., Selection of isatuximab dosing regimen…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04832-2](https://doi.org/10.1007/s00280-025-04832-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Brillac_2025_model_1](drugs/drug_isatuximab/Isatuximab_Brillac2025_model_1.md) | — | 2-compartment (no model) | 3 | Brillac C et al., Selection of isatuximab dosing regimen…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04832-2](https://doi.org/10.1007/s00280-025-04832-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M_protein](drugs/drug_isatuximab/pd_Koiwai_2021_M_protein.md) | serum M-protein concentrations ← isatuximab · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M_protein_2](drugs/drug_isatuximab/pd_Koiwai_2021_M_protein_2.md) | serum M-protein concentrations ← isatuximab and lenalidomide · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M_protein_3](drugs/drug_isatuximab/pd_Koiwai_2021_M_protein_3.md) | serum M-protein concentrations ← isatuximab and pomalidomide · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pitoy_2024_MPROT](drugs/drug_isatuximab/pd_Pitoy_2024_MPROT.md) | serum M-protein level ← isatuximab · direct Emax (saturable) effect | — | Pitoy A et al., Isatuximab-dexamethasone-pomalidomide c…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13206](https://doi.org/10.1002/psp4.13206) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rachedi_2022_ORR](drugs/drug_isatuximab/pd_Rachedi_2022_ORR.md) | Overall response rate ← isatuximab · direct log-linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rachedi_2022_ORR_2](drugs/drug_isatuximab/pd_Rachedi_2022_ORR_2.md) | Overall response rate ← isatuximab · direct log-linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rachedi_2022_ORR_3](drugs/drug_isatuximab/pd_Rachedi_2022_ORR_3.md) | Overall response rate ← isatuximab · direct linear effect | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Pitoy_2024_PFS](drugs/drug_isatuximab/pd_Pitoy_2024_PFS.md) | progression-free survival · time-to-event model | — | Pitoy A et al., Isatuximab-dexamethasone-pomalidomide c…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13206](https://doi.org/10.1002/psp4.13206) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rachedi_2022_PFS](drugs/drug_isatuximab/pd_Rachedi_2022_PFS.md) | Progression-free survival ← isatuximab · time-to-event model | — | Rachedi F et al., Exposure-response analyses for selectio…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12789](https://doi.org/10.1002/psp4.12789) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isatuximab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD38 (allosteric modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Koiwai_2021 | relevant | 10 | 3 | The paper reports a human population PK model, but its PK parameter table is not provided in readable form; the numeric fragments cannot be reliably mapped to parameters. |
| popPK | Korver_2019 | irrelevant | 0 | 0 | The study measures TAK-079 in monkeys; isatuximab is mentioned only as a non-crossreactive comparator. |
| popPK | Pape_2025 | irrelevant | 0 | 0 | Isatuximab is only mentioned as a CD38-targeting comparator; the reported half-life values are for BARs, not isatuximab. |
| popPK | Pitoy_2024 | irrelevant | 2 | 0 | The study uses an existing isatuximab PK model but reports no numeric isatuximab disposition parameters; referenced parameter details are not provided here. |
| popPK | Rachedi_2022 | irrelevant | 2 | 1 | This is an exposure-response analysis, not a report of readable isatuximab disposition parameters; further model details are referenced in supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:03 UTC</sub>
