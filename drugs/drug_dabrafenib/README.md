<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;}]"></div>

# dabrafenib

- **generic name:** dabrafenib
- **ATC codes:** `L01EC02`
- **DrugBank:** [DB08912](https://go.drugbank.com/drugs/DB08912) · **PubChem:** [CID 44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760)
- **molar mass:** 519.562 g/mol (C23H20F3N5O2S2) — DrugBank
- **groups:** approved, investigational

## About

Dabrafenib is a BRAF protein kinase inhibitor used to treat melanoma, including metastatic melanoma, and other cancers such as non-small-cell lung carcinoma and glioma. It is an approved cancer medicine, authorised in the European Union, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3011604](https://www.wikidata.org/wiki/Q3011604) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dabrafenib | parent | 519.562 | C23H20F3N5O2S2 | DrugBank | [44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760) | Balakirouchenane_2020, Isberner_2022, Ouellet_2014 |
| hydroxy-dabrafenib (dabrafenib, hydroxy-dabrafenib, and trametinib) | metabolite | 535.559 | C23H20F3N5O3S2 | PubChem | [57989740](https://pubchem.ncbi.nlm.nih.gov/compound/57989740) | Balakirouchenane_2020, Isberner_2022 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 13.5 | L/h | 13.5 L/h | patients with BRAFV600-mutant melanoma | 27 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Isberner_2022_reference](drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference.md) |
| CL | CL/F | 34.3 | L/h | 34.3 L/h | patients with BRAF V600E mutation-positive melanoma |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ouellet_2014_reference](drugs/drug_dabrafenib/Dabrafenib_Ouellet2014_reference.md) |
| V | V1/F | 30.8 | L | 30.8 L | patients with BRAFV600-mutant melanoma | 27 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Isberner_2022_reference](drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference.md) |
| t½ | t1/2z | 67 | h | 67 hours | patients with BRAF V600E mutation-positive melanoma |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ouellet_2014_reference](drugs/drug_dabrafenib/Dabrafenib_Ouellet2014_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Isberner_2022 · CL/F</text><circle cx="235.6" cy="30.0" r="4" fill="#ef6c00"><title>Isberner_2022 · CL/F: 13.5 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ouellet_2014 · CL/F</text><circle cx="377.4" cy="46.0" r="4" fill="#ef6c00"><title>Ouellet_2014 · CL/F: 34.3 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub> | [Balakirouchenane_2020_final_tra_model](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model.md) | held back | 1-compartment, oral | 6 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_dlt.md) | — | parent + metabolite (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ no_dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_no_dlt.md) | — | parent + metabolite (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Isberner_2022_reference](drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference.md) | held back | 1-compartment, oral | 3 (+3 cov.) | Isberner N et al., Monitoring of Dabrafenib and Trametinib…, Cancers (2022) | [10.3390/cancers14194566](https://doi.org/10.3390/cancers14194566) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ouellet_2014_reference](drugs/drug_dabrafenib/Dabrafenib_Ouellet2014_reference.md) | — | 1-compartment (no model) | 4 | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Karhana_2026_number_of_blood_vessels](drugs/drug_dabrafenib/pd_Karhana_2026_number_of_blood_vessels.md) | number of blood vessels ← Dabrafenib · stimulation effect | — | Karhana S et al., Chorioallantoic membrane assay demonstr…, Growth factors (Chur, Switz… (2026) | [10.1080/08977194.2026.2632046](https://doi.org/10.1080/08977194.2026.2632046) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Goldwirt_2021_2_DOR](drugs/drug_dabrafenib/pd_Goldwirt_2021_2_DOR.md) | duration of response ← dabrafenib · time-to-event model | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Goldwirt_2021_2_PFS](drugs/drug_dabrafenib/pd_Goldwirt_2021_2_PFS.md) | progression-free survival ← dabrafenib · time-to-event model | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Groenland_2023_OS](drugs/drug_dabrafenib/pd_Groenland_2023_OS.md) | overall survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Groenland_2023_PFS](drugs/drug_dabrafenib/pd_Groenland_2023_PFS.md) | progression-free survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dabrafenib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer/inhibitor, `CYP2C19` inducer/inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` inducer/inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate, `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: BRAF (inhibitor), LIMK1 (inhibitor), NEK11 (inhibitor), RAF1 (inhibitor), SIK1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:18 | 4:59 | 3/2/0 | 3/0/0 | 0/0/0 | 107,564/29,200 | openai / gpt-6-luna | 11 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ouellet_2014.pdf` | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) | [24408395](https://pubmed.ncbi.nlm.nih.gov/24408395) | Human population-PK model reports numeric dabrafenib clearance and other exposure parameters in the evidence. |

<sub>queue written 2026-10-06T23:13:44.257560+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goldwirt_2021_2 | irrelevant | 3 | 0 | The study evaluates dabrafenib exposure using AUC and trough levels but reports no numeric disposition parameters in the evidence. |
| popPK | Groenland_2023 | irrelevant | 1 | 0 | This human exposure-response study reports no quantitative dabrafenib disposition parameters or numeric dabrafenib exposure values. |
| popPK | Janssen_2020 | irrelevant | 2 | 0 | Dabrafenib is simulated using existing population-PK models, but no dabrafenib disposition parameter values are provided. |
| popPK | Karhana_2026 | irrelevant | 0 | 0 | This is an angiogenesis and cell-line study, not a pharmacokinetic study of dabrafenib. |
| popPK | Kim_2019_2 | irrelevant | 1 | 0 | This is a review and provides no numeric dabrafenib disposition parameters in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:14 UTC</sub>
