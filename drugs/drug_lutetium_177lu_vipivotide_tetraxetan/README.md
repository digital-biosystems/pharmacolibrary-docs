<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;lutetium (177Lu) vipivotide tetraxetan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lutetium177luVipivotideTetraxetan_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lutetium177luVipivotideTetraxetan_Siebinga2023_reference&quot;,&quot;label&quot;:&quot;Siebinga_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lutetium (177Lu) vipivotide tetraxetan

- **generic name:** lutetium (177Lu) vipivotide tetraxetan
- **ATC codes:** `V10XX05`
- **DrugBank:** [DB16778](https://go.drugbank.com/drugs/DB16778) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lutetium vipivotide tetraxetan is a therapeutic radiopharmaceutical used to treat prostate cancer, including castration-resistant disease. It is authorised in the European Union and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q111353661](https://www.wikidata.org/wiki/Q111353661) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lutetium_177lu_vipivotide_tetraxetan | metabolite | 1214.1 | C49H68LuN9O16 | PubChem | [122706785](https://pubchem.ncbi.nlm.nih.gov/compound/122706785) | Siebinga_2023, Siebinga_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:01 | 5:20 | 1/0/2 | 0/1/0 | 0/0/0 | 222,724/12,148 | einfracz / qwen3.8-27b | 11 | 1/11 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 0/2</span> | [Shi_2026_reference](drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Shi2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Shi H et al., A phase II study evaluating pharmacokin…, EJNMMI research (2026) | [10.1186/s13550-026-01401-3](https://doi.org/10.1186/s13550-026-01401-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.88), gpt-oss:120b (not confirmed, agreement 0.87). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Siebinga_2023_reference](drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 10 | Siebinga H et al., Population pharmacokinetic dosimetry mo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12914](https://doi.org/10.1002/psp4.12914) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Siebinga_2024_reference](drugs/drug_lutetium_177lu_vipivotide_tetraxetan/Lutetium177luVipivotideTetraxetan_Siebinga2024_reference.md) | — | 1-compartment (no model) | 2 | Siebinga H et al., Quantification of biochemical PSA dynam…, EJNMMI physics (2024) | [10.1186/s40658-024-00642-2](https://doi.org/10.1186/s40658-024-00642-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span> | [Siebinga_2024_PSA](drugs/drug_lutetium_177lu_vipivotide_tetraxetan/pd_Siebinga_2024_PSA.md) | prostate-specific antigen (PSA) ← [177Lu]Lu-PSMA-I&T · direct linear effect | model (no simulator) | Siebinga H et al., Quantification of biochemical PSA dynam…, EJNMMI physics (2024) | [10.1186/s40658-024-00642-2](https://doi.org/10.1186/s40658-024-00642-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lutetium_177lu_vipivotide_tetraxetan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FOLH1 (other/unknown), KLK3 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 35 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schütze_2026.pdf` | Schütze C et al., 177Lu-based radioligand therapy: A retr…, Nuklearmedizin. Nuclear med… (2026) | popPK | 5 | [10.1055/a-2784-7468](https://doi.org/10.1055/a-2784-7468) | [41610875](https://pubmed.ncbi.nlm.nih.gov/41610875) | The paper reports effective half-life values for Lutathera (lutetium_177lu_vipivotide_tetraxetan) and mentions Pluvicto, providing quantitative disposition parameters for radiation protection calculations in humans. |
| `Zha_2022.pdf` | Zha Z et al., New PSMA-Targeting Ligands: Transformat…, Journal of medicinal chemis… (2022) | pd | 5 | [10.1021/acs.jmedchem.2c00852](https://doi.org/10.1021/acs.jmedchem.2c00852) | [36103652](https://www.ncbi.nlm.nih.gov/pubmed/36103652) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T19:57:47.083577+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brighi_2023 | irrelevant | 0 | 0 | The study evaluates PET imaging biomarkers (Ga-68-PSMA-617 and F-18-FET) in glioblastoma and does not involve lutetium_177lu_vipivotide_tetraxetan or report any pharmacokinetic parameters for it. |
| PD | Brighi_2023 | not_relevant | 0 | 0 | The paper evaluates [68Ga]Ga-PSMA-617 as an imaging biomarker in glioblastoma and does not involve lutetium (177Lu) vipivotide tetraxetan or report any pharmacodynamic or exposure-response parameters. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on a new bifunctional chelator (2E-C-NETA) and its conjugation with Herceptin, not on the pharmacokinetics of lutetium_177lu_vipivotide_tetraxetan. |
| popPK | Civelek_2026 | irrelevant | 2 | 0 | The paper is a narrative review of PSMA-based radiopharmaceuticals and does not provide original quantitative population pharmacokinetic parameter values for lutetium_177lu_vipivotide_tetraxetan. |
| popPK | Di_2025 | irrelevant | 0 | 0 | The paper is a review of alpha-particle therapy and does not contain population pharmacokinetic parameters for lutetium-177Lu vipivotide tetraxetan (a beta emitter). |
| PD | Di_2025 | not_relevant | 0 | 0 | The paper is a review of alpha-particle therapy radionuclides (e.g., Ac-225, Ra-223) and does not contain any pharmacodynamic or exposure-response data for lutetium (177Lu) vipivotide tetraxetan. |
| popPK | Duong_2025 | irrelevant | 2 | 2 | The study reports dosimetry parameters (LDV, TIA, Absorbed Dose) for 177Lu-PSMA-617 and 18F-DCFPyL, not the target drug lutetium_177lu_vipivotide_tetraxetan (177Lu-PSMA-I&T). |
| popPK | Geis_2026 | irrelevant | 1 | 0 | This is a preclinical study of novel PSMA-617 analogues in mice using PET imaging (SUV), which does not report compartmental pharmacokinetic parameters (CL, V, Q, ka) for lutetium_177lu_vipivotide_tetraxetan itself. |
| PD | Geis_2026 | not_relevant | 2 | 2 | The paper reports in vitro binding affinities (IC50) and in vivo PET imaging data for analogs, but does not provide a pharmacodynamic exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for the therapeutic agent. |
| PGx | Geis_2026 | not_relevant | 0 | 0 | The study investigates structure-activity relationships of chemical linker modifications on PSMA-617 in vitro and in animal models, reporting no human genetic variants or pharmacogenomic effects. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for lutetium (177Lu) vipivotide tetraxetan. |
| popPK | Hakim_2026 | irrelevant | 0 | 0 | The study concerns [177Lu]Lu-PSMA-617, which is a different drug from the target lutetium-177-lutetium_vipivotide_tetraxetan. |
| PD | Hakim_2026 | not_relevant | 0 | 0 | The paper focuses on the accuracy and precision of renal dosimetry (time-integrated activity) using nonlinear mixed-effects modeling, not on pharmacodynamic or exposure-response relationships. |
| popPK | Hardiansyah_2025 | irrelevant | 1 | 0 | The paper is a review of PopPK methodologies in radiopharmaceutical therapy and does not provide specific quantitative PK parameter values for lutetium-177lu-vipivotide tetraxetan. |
| PD | Hardiansyah_2025 | not_relevant | 1 | 0 | The paper is a review of population PK modeling in radiopharmaceutical therapy and does not report specific numeric PD parameters or exposure-response curves for lutetium (177Lu) vipivotide tetraxetan. |
| popPK | Jackson_2020 | irrelevant | 2 | 0 | The study reports radiation dosimetry factors (Gy/MBq/mL) for a different radiopharmaceutical (Lu-177-PSMA-617), not quantitative PK parameters (CL, V, t1/2) for lutetium-177 vipivotide tetraxetan (Lu-177-DOTATATE). |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The paper is a review of iodine-124 production and immunoPET imaging, and does not report any pharmacokinetic parameters for lutetium-177 vipivotide tetraxetan. |
| PD | Kumar_2021 | not_relevant | 0 | 0 | The paper is a review of Iodine-124 radiochemistry and immunoPET imaging, containing no data or analysis for Lutetium-177 vipivotide tetraxetan or any pharmacodynamic modeling. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a narrative review on nanotechnology in prostate cancer and does not report pharmacokinetic parameters for lutetium_177lu_vipivotide_tetraxetan. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper is a narrative review on nanotechnology in prostate cancer and does not report any specific pharmacodynamic or exposure-response data for lutetium (177Lu) vipivotide tetraxetan. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The paper is a perspective review focusing on different PSMA ligands (P16-093, P17-087, P17-088) and does not report quantitative pharmacokinetic parameters for lutetium_177lu_vipivotide_tetraxetan (PSMA-617/Pluvicto). |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The evidence is an excerpt from a review article describing the FDA approval and general mechanism, containing no quantitative pharmacokinetic parameters (CL, V, Q, etc.). |
| popPK | Mahajan_2022 | irrelevant | 0 | 0 | The paper is a review focusing on salivary gland toxicity and imaging after 177Lu-PSMA-617 therapy, not a study reporting population pharmacokinetic parameters for lutetium_177lu_vipivotide_tetraxetan (Pluvicto), and no numeric PK values are provided. |
| popPK | Ordas_2026 | irrelevant | 1 | 0 | The paper is a general review of radiopharmaceutical therapy and does not report specific quantitative population-pharmacokinetic parameters for lutetium_177lu_vipivotide_tetraxetan. |
| popPK | Peng_2025 | irrelevant | 1 | 1 | The study investigates 177Lu-PSMA-617, not the specified drug lutetium_177lu_vipivotide_tetraxetan (177Lu-PSMA I&T), making it a different drug. |
| popPK | Peter_2024 | irrelevant | 0 | 0 | The paper studies a different radiopharmaceutical ([225Ac]Ac-Macropa-PEG4-YS5) in mice, not lutetium_177lu_vipivotide_tetraxetan. |
| PD | Peter_2024 | not_relevant | 0 | 0 | The paper focuses on 3D dosimetry and tumor control probability (TCP) for a 225Ac radiopharmaceutical, not on the pharmacodynamic exposure-response relationship of lutetium (177Lu) vipivotide tetraxetan. |
| popPK | Russell_2025 | irrelevant | 2 | 3 | The study reports effective half-lives for Lutetium-177lu-vipivotide tetraxetan in specific tissues (lesions vs. normal organs), which are tissue-specific clearance rates rather than standard systemic population pharmacokinetic parameters (CL, Vd, Q) for the drug as a whole. |
| popPK | Schuderer_2026 | irrelevant | 0 | 0 | The paper investigates novel chimeric peptides (Comb-1/Comb-2) in mice, not lutetium_177lu_vipivotide_tetraxetan. |
| PD | Schuderer_2026 | not_relevant | 0 | 0 | The paper describes the synthesis, in vitro properties, and biodistribution of new radiopharmaceuticals, but does not report any pharmacodynamic or exposure-response analysis for lutetium-177 vipivotide tetraxetan. |
| popPK | Straub_2023 | irrelevant | 2 | 0 | The study analyzes tumor uptake kinetics and prognostic survival outcomes rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Szponar_2023 | irrelevant | 0 | 0 | The paper is a narrative review of clinical outcomes and side effects for PSMA-targeted radionuclides, lacking any original quantitative pharmacokinetic parameter values (CL, V, Q, ka) or compartmental models for lutetium_177lu_vipivotide_tetraxetan. |
| popPK | Tran_2025 | irrelevant | 0 | 0 | The paper is a general review of the radiotheranostic landscape and does not report specific quantitative pharmacokinetic parameters for lutetium-177lu-vipivotide tetraxetan. |
| popPK | Usmani_2026 | irrelevant | 0 | 0 | The paper is a clinical case series reporting on safety and efficacy (PSA response) in patients with renal conditions, but it does not provide quantitative population pharmacokinetic parameters (such as clearance or volume of distribution) for the drug. |
| popPK | Violet_2019 | irrelevant | 0 | 0 | The study evaluates radiation dosimetry for 177Lu-PSMA-617, whereas the subject drug is lutetium_177lu_vipivotide_tetraxetan (PSMA I&T), a different radiopharmaceutical. |
| popPK | Zha_2022 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Zha_2022 | not_relevant | 0 | 0 | The paper is a review discussing the development and clinical application of PSMA-targeting ligands, but it does not report specific pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for lutetium (177Lu) vipivotide tetraxetan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:57 UTC</sub>
