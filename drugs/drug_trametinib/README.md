<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;trametinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trametinib_Ravix2024_reference&quot;,&quot;label&quot;:&quot;Ravix_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Ravix2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trametinib_Balakirouchenane2020_final_tra_model&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_final_tra_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:32 | 6:40 | 1/3/1 | 2/0/1 | 0/0/0 | 142,954/33,426 | openai / gpt-6-luna | 13 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Ravix_2024_reference](drugs/drug_trametinib/Trametinib_Ravix2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Ravix A et al., Population Pharmacokinetics of Trametin…, Cancers (2024) | [10.3390/cancers16122193](https://doi.org/10.3390/cancers16122193) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ouellet_2016_reference](drugs/drug_trametinib/Trametinib_Ouellet2016_reference.md) | — | 1-compartment (no model) | 1 | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (primary re-run, agreement 0.091). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Balakirouchenane_2020_dlt](drugs/drug_trametinib/Trametinib_Balakirouchenane2020_dlt.md) | — | parent + metabolite (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.615). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Balakirouchenane_2020_final_tra_model](drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model.md) | ▶ model + simulator | 1-compartment, oral | 6 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (primary re-run, agreement 0.091). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Balakirouchenane_2020_no_dlt](drugs/drug_trametinib/Trametinib_Balakirouchenane2020_no_dlt.md) | — | parent + metabolite (no model) | 0 | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Goldwirt_2021_2_ARAE](drugs/drug_trametinib/pd_Goldwirt_2021_2_ARAE.md) | all grades treatment-related adverse events occurrence ← trametinib · model not identified | — | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Groenland_2023_clinically_relevant_toxicities](drugs/drug_trametinib/pd_Groenland_2023_clinically_relevant_toxicities.md) | clinically relevant toxicities ← trametinib · model not identified | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Groenland_2023_OS](drugs/drug_trametinib/pd_Groenland_2023_OS.md) | overall survival ← trametinib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Groenland_2023_PFS](drugs/drug_trametinib/pd_Groenland_2023_PFS.md) | progression-free survival ← trametinib · time-to-event model | — | Groenland SL et al., Exposure-response analyses of BRAF- and…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04517-8](https://doi.org/10.1007/s00280-023-04517-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Ouellet_2016_PFS](drugs/drug_trametinib/pd_Ouellet_2016_PFS.md) | progression-free survival (PFS) ← trametinib · time-to-event model | — | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Ouellet_2016_response_rates](drugs/drug_trametinib/pd_Ouellet_2016_response_rates.md) | response rates ← trametinib · categorical (graded) response model | — | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trametinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MAP2K1 (inhibitor), MAP2K2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ouellet_2016.pdf` | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) | [26940938](https://pubmed.ncbi.nlm.nih.gov/26940938) | The human two-compartment trametinib PopPK analysis reports a 1.26-fold sex effect on clearance and 24% between-subject variability, but not core CL, V, or Q estimates. |
| `Infante_2012.pdf` | Infante JR et al., Safety, pharmacokinetic, pharmacodynami…, The Lancet. Oncology (2012) | popPK | 8 | [10.1016/S1470-2045(12)70270-X](https://doi.org/10.1016/S1470-2045(12)70270-X) | [22805291](https://pubmed.ncbi.nlm.nih.gov/22805291) | The human PK study reports a numeric effective half-life (~4 days) and peak-to-trough ratio (1.81), though no CL or V values are shown. |
| `Goldwirt_2021_2.pdf` | Goldwirt L et al., Dabrafenib and trametinib exposure-effi…, Cancer chemotherapy and pha… (2021) | popPK | 7 | [10.1007/s00280-021-04299-x](https://doi.org/10.1007/s00280-021-04299-x) | [34057572](https://pubmed.ncbi.nlm.nih.gov/34057572) | Trametinib exposure is assessed using Bayesian-estimated AUC and trough markers, but their numeric values are not present in the evidence. |

<sub>queue written 2026-10-07T08:27:13.863625+00:00</sub>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:28 UTC</sub>
