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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:18 | 4:59 | 0/2/3 | 1/0/2 | 0/0/0 | 107,564/29,200 | openai / gpt-6-luna | 11 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Balakirouchenane_2020_final_tra_model](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model.md) | held back | 1-compartment, oral | 6 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Isberner_2022_reference](drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference.md) | held back | 1-compartment, oral | 3 (+3 cov.) | Isberner N et al., Monitoring of Dabrafenib and Trametinib…, Cancers (2022) | [10.3390/cancers14194566](https://doi.org/10.3390/cancers14194566) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ouellet_2014_reference](drugs/drug_dabrafenib/Dabrafenib_Ouellet2014_reference.md) | — | 1-compartment (no model) | 4 | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (primary re-run, agreement 0.0). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Balakirouchenane_2020_dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_dlt.md) | — | parent + metabolite (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (primary re-run, agreement 0.0). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Balakirouchenane_2020_no_dlt](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_no_dlt.md) | — | parent + metabolite (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Karhana_2026_number_of_blood_vessels](drugs/drug_dabrafenib/pd_Karhana_2026_number_of_blood_vessels.md) | number of blood vessels ← Dabrafenib · stimulation effect | — | Karhana S et al., Chorioallantoic membrane assay demonstr…, Growth factors (Chur, Switz… (2026) | [10.1080/08977194.2026.2632046](https://doi.org/10.1080/08977194.2026.2632046) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Goldwirt_2021_2_DOR](drugs/drug_dabrafenib/pd_Goldwirt_2021_2_DOR.md) | duration of response ← dabrafenib · time-to-event model | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Goldwirt_2021_2_PFS](drugs/drug_dabrafenib/pd_Goldwirt_2021_2_PFS.md) | progression-free survival ← dabrafenib · time-to-event model | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Groenland_2023_OS](drugs/drug_dabrafenib/pd_Groenland_2023_OS.md) | overall survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Groenland_2023_PFS](drugs/drug_dabrafenib/pd_Groenland_2023_PFS.md) | progression-free survival ← dabrafenib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dabrafenib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer/inhibitor, `CYP2C19` inducer/inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` inducer/inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BRAF (inhibitor), LIMK1 (inhibitor), NEK11 (inhibitor), RAF1 (inhibitor), SIK1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:14 UTC</sub>
