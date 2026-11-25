<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;}]"></div>

# dabrafenib

- **generic name:** dabrafenib
- **ATC codes:** `L01EC02`
- **DrugBank:** [DB08912](https://go.drugbank.com/drugs/DB08912) · **PubChem:** [CID 44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760)
- **molar mass:** 519.562 g/mol (C23H20F3N5O2S2) — DrugBank
- **groups:** approved, investigational

## About

Dabrafenib is a B-Raf inhibitor used to treat melanoma, skin cancer, and non-small-cell lung carcinoma. It is given orally in capsule or tablet form. The medication is authorised in the European Union for the treatment of melanoma and glioma.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3011604](https://www.wikidata.org/wiki/Q3011604), [Wikipedia](https://en.wikipedia.org/wiki/Dabrafenib?oldid=1370059011) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dabrafenib | parent | 519.562 | C23H20F3N5O2S2 | DrugBank | [44462760](https://pubchem.ncbi.nlm.nih.gov/compound/44462760) | Balakirouchenane_2020, Isberner_2022, Ouellet_2014 |
| carboxy-dabrafenib | metabolite | — (mass units only) | — | — | — | — |
| desmethyl-dabrafenib | metabolite | 505.533 | C22H18F3N5O2S2 | PubChem | [58345847](https://pubchem.ncbi.nlm.nih.gov/compound/58345847) | Ouellet_2014 |
| hydroxy-dabrafenib (dabrafenib, hydroxy-dabrafenib, and trametinib) | metabolite | 535.559 | C23H20F3N5O3S2 | PubChem | [57989740](https://pubchem.ncbi.nlm.nih.gov/compound/57989740) | Balakirouchenane_2020, Isberner_2022, Ouellet_2014 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub> | [Balakirouchenane_2020_final_tra_model](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model.md) | held back | 1-compartment, oral | 6 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_dlt.md) | — | parent + metabolite (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ no_dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_no_dlt.md) | — | parent + metabolite (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Isberner_2022_reference](drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference.md) | held back | 1-compartment, oral | 3 (+3 cov.) | Isberner N et al., Monitoring of Dabrafenib and Trametinib…, Cancers (2022) | [10.3390/cancers14194566](https://doi.org/10.3390/cancers14194566) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Ouellet_2014_reference](drugs/drug_dabrafenib/Dabrafenib_Ouellet2014_reference.md) | — | general linear (no model) | 7 | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Groenland_2023_OS](drugs/drug_dabrafenib/pd_Groenland_2023_OS.md) | overall survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Groenland_2023_PFS](drugs/drug_dabrafenib/pd_Groenland_2023_PFS.md) | progression-free survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:18 | 1:30 | 2/3/0 | 2/0/0 | 0/0/0 | 35,486/7,909 | einfracz / qwen3.8-27b | 11 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ouellet_2014.pdf` | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) | [24408395](https://pubmed.ncbi.nlm.nih.gov/24408395) | The paper reports population PK parameters including clearance (CL/F), steady-state concentrations, and model details for dabrafenib in humans. |

<sub>queue written 2026-11-23 21:16 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goldwirt_2021_2 | irrelevant | 2 | 1 | The study reports Bayesian-estimated exposure metrics (AUC, Ctrough) for PK-PD analysis but does not report standard compartmental disposition parameters (CL, V, Q, ka) or a population PK model. |
| PGx | Goldwirt_2021_2 | not_relevant | 0 | 0 | The study analyzes the association between pharmacokinetic exposure and clinical outcomes in a population defined by a specific mutation, but it does not investigate how a genetic variant changes the PK or PD parameters themselves. |
| popPK | Groenland_2023 | irrelevant | 1 | 0 | This human exposure-response study reports no quantitative dabrafenib disposition parameters or numeric dabrafenib exposure values. |
| popPK | Janssen_2020 | irrelevant | 2 | 0 | Dabrafenib is simulated using existing population-PK models, but no dabrafenib disposition parameter values are provided. |
| popPK | Karhana_2026 | irrelevant | 0 | 0 | The study is an in-vitro/embryo mechanistic assay for angiogenesis and does not report pharmacokinetic parameters. |
| PGx | Karhana_2026 | not_relevant | 0 | 0 | The study investigates the pro-angiogenic mechanism and safety of dabrafenib in a CAM assay and cell lines, but contains no pharmacogenomic data (gene variants) affecting PK or PD parameters. |
| popPK | Kim_2019_2 | irrelevant | 1 | 0 | This is a review article summarizing clinical PK/PD, but it does not report specific quantitative disposition parameter values (CL, V, etc.) for dabrafenib in the provided text. |
| PGx | Kim_2019_2 | not_relevant | 1 | 0 | The text is a general review abstract on melanoma treatment PK/PD and does not report specific gene variant effects on dabrafenib PK or PD. |
| PGx | Ouellet_2014 | not_relevant | 0 | 0 | The study reports non-genetic covariates (dose, time, capsule shell, weight, sex) affecting PK, but does not report any pharmacogenomic effects or gene variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdabrafenib%5D&body=Drug%3A%20dabrafenib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dabrafenib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:16 UTC</sub>
