<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;trametinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trametinib_Ravix2024_reference&quot;,&quot;label&quot;:&quot;Ravix_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Ravix2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trametinib_Balakirouchenane2020_final_tra_model&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_final_tra_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# trametinib

- **generic name:** trametinib
- **ATC codes:** `L01EE01`
- **DrugBank:** [DB08911](https://go.drugbank.com/drugs/DB08911) · **PubChem:** [CID 11707110](https://pubchem.ncbi.nlm.nih.gov/compound/11707110)
- **molar mass:** 615.3948 g/mol (C26H23FIN5O4) — DrugBank
- **groups:** approved, investigational

## About

Trametinib is a MEK inhibitor anticancer drug used to treat melanoma, including metastatic melanoma, and also studied for other cancers such as non-small-cell lung carcinoma and low-grade serous carcinoma. It is authorised in the European Union, where it is used for melanoma and glioma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7833138](https://www.wikidata.org/wiki/Q7833138) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trametinib | parent | 615.395 | C26H23FIN5O4 | DrugBank | [11707110](https://pubchem.ncbi.nlm.nih.gov/compound/11707110) | Balakirouchenane_2020, Ouellet_2016, Ravix_2024 |
| dabrafenib | metabolite | 519.56 | C23H20F3N5O2S2 | PubChem | [44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760) | Balakirouchenane_2020 |
| hydroxy-dabrafenib | metabolite | 535.559 | C23H20F3N5O3S2 | PubChem | [57989740](https://pubchem.ncbi.nlm.nih.gov/compound/57989740) | Balakirouchenane_2020 |

## Start here

> **Ravix_2024_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> adult oncology patients with solid tumours, n = 33. [Run it in the simulator](drugs/drug_trametinib/Trametinib_Ravix2024_reference.md?tab=Simulation) · [record](drugs/drug_trametinib/Trametinib_Ravix2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 4.2 | L/h | 4.2 L/h | adult oncology patients with solid tumours | 33 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ravix_2024_reference](drugs/drug_trametinib/Trametinib_Ravix2024_reference.md) |
| CL | CL/F | 1.26 | L/h | 1.26 L/h | patients with BRAF V600 mutation-positive metastatic melanoma | 493 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ouellet_2016_reference](drugs/drug_trametinib/Trametinib_Ouellet2016_reference.md) |
| V | V1 | 102 | L | 102 L | adult oncology patients with solid tumours | 33 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ravix_2024_reference](drugs/drug_trametinib/Trametinib_Ravix2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Ravix_2024 · CL</text><circle cx="408.1" cy="30.0" r="4" fill="#2e7d32"><title>Ravix_2024 · CL: 4.2 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ouellet_2016 · CL/F</text><circle cx="225.1" cy="46.0" r="4" fill="#ef6c00"><title>Ouellet_2016 · CL/F: 1.26 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ravix_2024_reference](drugs/drug_trametinib/Trametinib_Ravix2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Ravix A et al., Population Pharmacokinetics of Trametin…, Cancers (2024) | [10.3390/cancers16122193](https://doi.org/10.3390/cancers16122193) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ouellet_2016_reference](drugs/drug_trametinib/Trametinib_Ouellet2016_reference.md) | — | 1-compartment (no model) | 1 | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Balakirouchenane_2020_dlt](drugs/drug_trametinib/Trametinib_Balakirouchenane2020_dlt.md) | — | parent + metabolite (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub> | [↳ final_tra_model](drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model.md) | ▶ model + simulator | 1-compartment, oral | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ no_dlt](drugs/drug_trametinib/Trametinib_Balakirouchenane2020_no_dlt.md) | — | parent + metabolite (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Goldwirt_2021_2_ARAE](drugs/drug_trametinib/pd_Goldwirt_2021_2_ARAE.md) | all grades treatment-related adverse events occurrence ← trametinib · model not identified | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Groenland_2023_clinically_relevant_toxicities](drugs/drug_trametinib/pd_Groenland_2023_clinically_relevant_toxicities.md) | clinically relevant toxicities ← trametinib · model not identified | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Groenland_2023_OS](drugs/drug_trametinib/pd_Groenland_2023_OS.md) | overall survival ← trametinib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Groenland_2023_PFS](drugs/drug_trametinib/pd_Groenland_2023_PFS.md) | progression-free survival ← trametinib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ouellet_2016_PFS](drugs/drug_trametinib/pd_Ouellet_2016_PFS.md) | progression-free survival (PFS) ← trametinib · time-to-event model | — | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ouellet_2016_response_rates](drugs/drug_trametinib/pd_Ouellet_2016_response_rates.md) | response rates ← trametinib · categorical (graded) response model | — | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trametinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: MAP2K1 (inhibitor), MAP2K2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:32 | 6:40 | 2/3/0 | 3/0/0 | 0/0/0 | 142,954/33,426 | openai / gpt-6-luna | 13 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ouellet_2016.pdf` | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) | [26940938](https://pubmed.ncbi.nlm.nih.gov/26940938) | The human two-compartment trametinib PopPK analysis reports a 1.26-fold sex effect on clearance and 24% between-subject variability, but not core CL, V, or Q estimates. |
| `Infante_2012.pdf` | Infante JR et al., Safety, pharmacokinetic, pharmacodynami…, The Lancet. Oncology (2012) | popPK | 8 | [10.1016/S1470-2045(12)70270-X](https://doi.org/10.1016/S1470-2045(12)70270-X) | [22805291](https://pubmed.ncbi.nlm.nih.gov/22805291) | The human PK study reports a numeric effective half-life (~4 days) and peak-to-trough ratio (1.81), though no CL or V values are shown. |
| `Goldwirt_2021_2.pdf` | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | popPK | 7 | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) | [34057572](https://pubmed.ncbi.nlm.nih.gov/34057572) | Trametinib exposure is assessed using Bayesian-estimated AUC and trough markers, but their numeric values are not present in the evidence. |

<sub>queue written 2026-10-07 08:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goldwirt_2021_2 | relevant | 7 | 0 | Trametinib exposure is assessed using Bayesian-estimated AUC and trough markers, but their numeric values are not present in the evidence. |
| popPK | Groenland_2023 | irrelevant | 1 | 0 | The study reports trametinib trough concentrations and exposure-response results, but no quantitative disposition parameters. |
| popPK | Hartman_2023 | irrelevant | 0 | 0 | This in-vitro melanoma study reports drug-response EC50 values, not trametinib disposition parameters. |
| popPK | Isberner_2022 | relevant | 8 | 2 | Human trametinib PK is modeled, but readable CL/F and V/F estimates are not provided here; the extracted numeric AUC is not a disposition parameter. |
| popPK | Kim_2019_2 | irrelevant | 0 | 0 | This review reports no original quantitative trametinib disposition parameters. |
| popPK | Pfeifer_2023 | irrelevant | 0 | 0 | This in-vitro cell-sensitivity study reports trametinib EC50 effects, not pharmacokinetic disposition parameters. |
| popPK | Takada_2024 | irrelevant | 2 | 1 | Canine PK is assessed, but no quantitative disposition parameters are reported; only dose and steady-state concentration values appear. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrametinib%5D&body=Drug%3A%20trametinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trametinib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 08:28 UTC</sub>
