<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;sodium fluoride (18F)&quot;}]"></div>

# sodium fluoride (18F)

- **generic name:** sodium fluoride (18F)
- **ATC codes:** `V09IX06`
- **DrugBank:** [DB09398](https://go.drugbank.com/drugs/DB09398) · **PubChem:** [CID 23690531](https://pubchem.ncbi.nlm.nih.gov/compound/23690531)
- **molar mass:** 18.0015 g/mol (F) — DrugBank
- **groups:** approved, investigational

## About

Sodium fluoride labelled with fluorine-18 is a diagnostic radiopharmaceutical used to detect tumours through PET imaging of bone and tumour uptake. It is an approved imaging agent, used in nuclear medicine centres for tumour detection.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27260079](https://www.wikidata.org/wiki/Q27260079) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sodium_fluoride_18f | metabolite | 18.0015 | F | DrugBank | [23690531](https://pubchem.ncbi.nlm.nih.gov/compound/23690531) | Cook_2002 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 204 | L/h | 204.0 L/h | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2023_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Yin2023_reference.md) |
| CL | CL | — | L/h | 1.03 ml/min per milliliter | patients with vertebral Paget's disease | &gt;=7 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Cook_2002_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Cook2002_reference.md) |
| V | V | 4.326 ‡ | L | 61.8 mL kg−1 | patients with vertebral Paget's disease | &gt;=7 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Cook_2002_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Cook2002_reference.md) |
| V | V1/F | 65.5 | L | 65.5 L | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2023_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Yin2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Cook_2002 · V ·/kg</text><circle cx="301.3" cy="30.0" r="4" fill="#ef6c00"><title>Cook_2002 · V ·/kg: 4.326 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Yin_2023 · V1/F</text><circle cx="507.8" cy="46.0" r="4" fill="#ef6c00"><title>Yin_2023 · V1/F: 65.5 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Cook_2002_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Cook2002_reference.md) | — | 1-compartment (no model) | 2 | Cook GJ et al., Quantification of skeletal kinetic indi…, Journal of bone and mineral… (2002) | [10.1359/jbmr.2002.17.5.854](https://doi.org/10.1359/jbmr.2002.17.5.854) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Yin_2023_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Yin2023_reference.md) | — | 1-compartment (no model) | 2 | Yin W et al., Population pharmacokinetics, enzyme occ…, Clinical and translational… (2023) | [10.1111/cts.13517](https://doi.org/10.1111/cts.13517) |
| <span class="pk-rf" hidden data-species="pig" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ahmed_1998_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Ahmed1998_reference.md) | — | 1-compartment (no model) | 0 | Ahmed K et al., Comparative study of positron emission…, Radiation medicine (1998) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Cook_2000_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Cook2000_reference.md) | — | 1-compartment (no model) | 0 | Cook GJ et al., Differences in skeletal kinetics betwee…, Journal of bone and mineral… (2000) | [10.1359/jbmr.2000.15.4.763](https://doi.org/10.1359/jbmr.2000.15.4.763) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hawkins_1992_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Hawkins1992_reference.md) | — | 1-compartment (no model) | 0 | Hawkins RA et al., Evaluation of the skeletal kinetics of…, Journal of nuclear medicine… (1992) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Puri_2012_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Puri2012_reference.md) | — | 1-compartment (no model) | 0 | Puri T et al., Comparison of six quantitative methods…, Nuclear medicine communicat… (2012) | [10.1097/MNM.0b013e3283512adb](https://doi.org/10.1097/MNM.0b013e3283512adb) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Raijmakers_2014_reference](drugs/drug_sodium_fluoride_18f/SodiumFluoride18f_Raijmakers2014_reference.md) | — | 1-compartment (no model) | 0 | Raijmakers P et al., Quantification of 18F-Fluoride Kinetics…, Journal of nuclear medicine… (2014) | [10.2967/jnumed.113.135269](https://doi.org/10.2967/jnumed.113.135269) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_fluoride_18f).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:59 | 38:12 | 2/5/0 | 0/0/0 | 0/0/0 | 929,930/57,863 | ollama / qwen3.8:27b-mtp-q8_0 | 30 | 0/29 | 29/1 | 0 |

## Coverage

- **PubMed hits:** 159 matched, 57 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 0  ·  needs_review 2  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Charkes_1978.pdf` | Charkes ND et al., Studies of skeletal tracer kinetics. I.…, Journal of nuclear medicine… (1978) | popPK | 9 | not captured | [731317](https://pubmed.ncbi.nlm.nih.gov/731317) | The paper describes a quantitative 5-compartment PK model for [18F] fluoride in humans, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided abstract text. |
| `Charkes_1979.pdf` | Charkes ND et al., Studies of skeletal tracer kinetics: II…, Journal of nuclear medicine… (1979) | popPK | 9 | not captured | [536775](https://pubmed.ncbi.nlm.nih.gov/536775) | The paper describes a quantitative five-compartment PK model for [18F]fluoride in rats, but the specific numeric parameter values are not present in the provided abstract text. |
| `Cook_2000.pdf` | Cook GJ et al., Differences in skeletal kinetics betwee…, Journal of bone and mineral… (2000) | popPK | 9 | [10.1359/jbmr.2000.15.4.763](https://doi.org/10.1359/jbmr.2000.15.4.763) | [10780868](https://pubmed.ncbi.nlm.nih.gov/10780868) | The study reports quantitative compartmental PK parameters (Ki, K1, k2-k4) for 18F-fluoride in humans with specific numeric values provided in the text. |
| `Cook_2002.pdf` | Cook GJ et al., Quantification of skeletal kinetic indi…, Journal of bone and mineral… (2002) | popPK | 9 | [10.1359/jbmr.2002.17.5.854](https://doi.org/10.1359/jbmr.2002.17.5.854) | [12009016](https://pubmed.ncbi.nlm.nih.gov/12009016) | The study reports quantitative kinetic parameters (Ki, K1, k4, K1/k2) for 18F-fluoride in a compartmental model, with specific numeric values provided in the abstract. |
| `Hawkins_1992.pdf` | Hawkins RA et al., Evaluation of the skeletal kinetics of…, Journal of nuclear medicine… (1992) | popPK | 9 | not captured | [1569473](https://pubmed.ncbi.nlm.nih.gov/1569473) | The study reports quantitative kinetic parameters (K1, KNLR, KPAT) for a compartmental model of [18F]fluoride in humans. |
| `Raijmakers_2014.pdf` | Raijmakers P et al., Quantification of 18F-Fluoride Kinetics…, Journal of nuclear medicine… (2014) | popPK | 9 | [10.2967/jnumed.113.135269](https://doi.org/10.2967/jnumed.113.135269) | [24868107](https://pubmed.ncbi.nlm.nih.gov/24868107) | The study reports quantitative kinetic parameters (Ki, K1) for 18F-fluoride in humans using compartmental and simplified models. |
| `Ahmed_1998.pdf` | Ahmed K et al., Comparative study of positron emission…, Radiation medicine (1998) | popPK | 8 | not captured | [9814417](https://pubmed.ncbi.nlm.nih.gov/9814417) | The study reports quantitative kinetic parameters (K-constants) from a three-compartment model for 18F-fluoride in guinea pigs. |
| `Blake_2012.pdf` | Blake GM et al., A semipopulation input function for qua…, Nuclear medicine communicat… (2012) | popPK | 8 | [10.1097/MNM.0b013e3283550275](https://doi.org/10.1097/MNM.0b013e3283550275) | [22617486](https://pubmed.ncbi.nlm.nih.gov/22617486) | The study reports quantitative bone plasma clearance parameters for 18F-fluoride using the Hawkins compartmental model, but specific mean parameter values (CL, V, etc.) are not explicitly listed in the provided text, only precision errors and AUC percentages. |
| `Cheng_2013.pdf` | Cheng C et al., Evaluation of bone remodeling with (18)…, American journal of nuclear… (2013) | popPK | 8 | not captured | [23526138](https://pubmed.ncbi.nlm.nih.gov/23526138) | The study reports a compartmental PK model (K1-k4, Ki) for 18F-fluoride in rats, but specific numeric parameter values are not present in the provided text. |
| `Frost_2004.pdf` | Frost ML et al., Dissociation between global markers of…, Journal of bone and mineral… (2004) | popPK | 8 | [10.1359/JBMR.040818](https://doi.org/10.1359/JBMR.040818) | [15476579](https://pubmed.ncbi.nlm.nih.gov/15476579) | The study reports quantitative compartmental PK parameters (K1, Ki, k2, k3, k4) for 18F-fluoride in humans, but specific mean values for the rate constants are not explicitly listed in the provided text, only relative differences and correlations. |
| `Puri_2012.pdf` | Puri T et al., Comparison of six quantitative methods…, Nuclear medicine communicat… (2012) | popPK | 8 | [10.1097/MNM.0b013e3283512adb](https://doi.org/10.1097/MNM.0b013e3283512adb) | [22441132](https://pubmed.ncbi.nlm.nih.gov/22441132) | The study reports quantitative bone plasma clearance (Ki) values for 18F-fluoride using compartmental models in humans, providing specific numeric biases and limits of agreement. |
| `Schiepers_1997.pdf` | Schiepers C et al., Fluoride kinetics of the axial skeleton…, Journal of nuclear medicine… (1997) | popPK | 8 | not captured | [9430479](https://pubmed.ncbi.nlm.nih.gov/9430479) | The study reports a three-compartment model for [18F]fluoride kinetics in humans, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-07T16:32:22.079202+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achilli_2026 | irrelevant | 0 | 0 | The paper is a computational study on spiking neural networks and disorders of consciousness, containing no pharmacokinetic data for sodium fluoride 18F. |
| popPK | Al-Beyatti_2012 | irrelevant | 2 | 2 | The study reports precision errors (%CV) for diagnostic PET metrics (SUV, Ki) rather than quantitative population pharmacokinetic parameters (CL, V, Q) for the drug. |
| popPK | Ammann_2026 | irrelevant | 0 | 0 | The paper is a clinical biomarker study for sarcoidosis and does not involve sodium fluoride 18F or pharmacokinetic modeling. |
| popPK | Ayodeji_2025 | irrelevant | 0 | 0 | The paper studies fluorescent androgen receptor inhibitors (ARi-FL) in mice and cell lines, not the pharmacokinetics of sodium fluoride 18F. |
| popPK | Berding_1995 | irrelevant | 2 | 5 | The study reports PET kinetic parameters (K1, Kmlf, Kpat) for bone blood flow and influx in a clinical surgical context, rather than standard systemic population pharmacokinetic parameters (CL, V, t1/2) for the drug itself. |
| popPK | Blake_2012 | relevant | 8 | 2 | The study reports quantitative bone plasma clearance parameters for 18F-fluoride using the Hawkins compartmental model, but specific mean parameter values (CL, V, etc.) are not explicitly listed in the provided text, only precision errors and AUC percentages. |
| popPK | Boehm-Sturm_2025 | irrelevant | 0 | 0 | The study investigates 2-deoxy-D-glucose (2DG) using MRI in rats, not sodium fluoride 18F. |
| popPK | Brighi_2023 | irrelevant | 0 | 0 | The study evaluates [68Ga]Ga-PSMA-617 and [18F]FET as imaging biomarkers for glioblastoma and does not report pharmacokinetic parameters for sodium fluoride 18F. |
| popPK | Burton_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levetiracetam (LEV) in mice, not sodium fluoride 18F. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The paper describes a QSP model for Alzheimer's disease and lecanemab, not the pharmacokinetics of sodium fluoride 18F. |
| popPK | Charkes_1978 | relevant | 9 | 2 | The paper describes a quantitative 5-compartment PK model for [18F] fluoride in humans, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided abstract text. |
| popPK | Charkes_1979 | relevant | 9 | 2 | The paper describes a quantitative five-compartment PK model for [18F]fluoride in rats, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Cheng_2013 | relevant | 8 | 2 | The study reports a compartmental PK model (K1-k4, Ki) for 18F-fluoride in rats, but specific numeric parameter values are not present in the provided text. |
| popPK | Dullea_2023 | irrelevant | 0 | 0 | The paper is a protocol for a diagnostic accuracy review of 18F-PSMA PET-CT in prostate cancer, not a pharmacokinetic study of sodium fluoride 18F. |
| popPK | Frost_2003 | irrelevant | 2 | 8 | The study uses 18F-fluoride as a diagnostic imaging agent to assess the effect of risedronate on bone metabolism, rather than characterizing the systemic pharmacokinetics of sodium fluoride itself. |
| popPK | Frost_2004 | relevant | 8 | 4 | The study reports quantitative compartmental PK parameters (K1, Ki, k2, k3, k4) for 18F-fluoride in humans, but specific mean values for the rate constants are not explicitly listed in the provided text, only relative differences and correlations. |
| popPK | Frost_2008 | irrelevant | 2 | 0 | The study reports precision metrics (CV) for the PET parameter Ki, not standard population pharmacokinetic parameters (CL, V, Q, ka) for the drug itself. |
| popPK | Gomez_2025 | irrelevant | 0 | 0 | The paper describes cocaine chemogenetics and ion channel engineering, not the pharmacokinetics of sodium fluoride 18F. |
| popPK | Gordji-Nejad_2026 | irrelevant | 0 | 0 | The paper studies the cognitive effects of creatine supplementation in humans and does not involve sodium fluoride 18F or any pharmacokinetic parameters. |
| popPK | Grohar_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trabectedin and irinotecan, not sodium fluoride 18F. |
| popPK | Haitsma_2026 | irrelevant | 0 | 0 | The study focuses on [18F]FDG PET/CT diagnostic yield in ICU patients, not the pharmacokinetics of sodium fluoride 18F. |
| popPK | Kandadi_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for aducanumab, not sodium fluoride 18F. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for L-4-boronophenylalanine (BPA), not sodium fluoride 18F. |
| popPK | Kinzi_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atorvastatin in rats, not sodium fluoride 18F. |
| popPK | Kołodziejczyk_2026 | irrelevant | 0 | 0 | The paper is a review of dendrimers and boron clusters for BNCT and does not report pharmacokinetic parameters for sodium fluoride 18F. |
| popPK | Kucukbagriacik_2026 | irrelevant | 0 | 0 | The study investigates the effects of coffee-derived nanoparticles on Alzheimer's disease in rats using FDG-PET imaging, and does not report pharmacokinetic parameters for sodium fluoride 18F. |
| popPK | Larcher_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and imaging of [89Zr]Zr-girentuximab, not sodium fluoride 18F. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 18F-fluorodeoxyglucose (FDG), not sodium fluoride 18F. |
| popPK | Magini_2026 | irrelevant | 0 | 0 | The paper is a review of curcumin pharmacology and does not contain any data or parameters for sodium fluoride 18F. |
| popPK | Mansur_2025 | irrelevant | 0 | 0 | The study focuses on multiparametric PET/MRI imaging of trastuzumab-treated tumors in mice using [18F]FDG and [18F]FLT, and does not report pharmacokinetic parameters for sodium fluoride 18F. |
| popPK | Mehta_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bedaquiline, pretomanid, and pyrazinamide, not sodium fluoride 18F. |
| popPK | Messa_1993 | irrelevant | 2 | 0 | The study uses [18F]fluoride as a diagnostic imaging agent to measure bone metabolic activity (rate constant K) rather than reporting standard pharmacokinetic disposition parameters (CL, V, t1/2) for the drug itself. |
| popPK | Miccoli_2026 | irrelevant | 0 | 0 | The paper is an in silico study of off-target binding of amyloid PET tracers (PiB, flutemetamol, flutafuranol) to sulfotransferases and does not report pharmacokinetic parameters for sodium fluoride 18F. |
| popPK | Piert_1999 | irrelevant | 2 | 2 | The study uses [18F]fluoride as a diagnostic imaging agent to assess bone metabolism and reports influx constants (K1, Ki) rather than standard systemic pharmacokinetic parameters (CL, V, t1/2) for the drug itself. |
| popPK | Port_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of an anti-CD8 PET tracer (2C8v144), not sodium fluoride 18F. |
| popPK | Preijers_2021 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for clotting factors (FVIII, FIX) and desmopressin in hemophilia, and does not study sodium fluoride 18F. |
| popPK | Rogers_1994 | irrelevant | 0 | 0 | The study investigates 18F-labelled vesamicol derivatives (FMV, FAA, NEFA) as PET tracers, not sodium fluoride 18F itself. |
| popPK | Schiepers_1997 | relevant | 8 | 2 | The study reports a three-compartment model for [18F]fluoride kinetics in humans, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided abstract text. |
| popPK | Schuderer_2026 | irrelevant | 0 | 0 | The study investigates chimeric peptide radiopharmaceuticals labeled with Ga-67 and Lu-177, not sodium fluoride 18F. |
| popPK | Sebo_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of metformin in mice and does not report pharmacokinetic parameters for sodium fluoride 18F. |
| popPK | Spangemacher_2025 | irrelevant | 0 | 0 | The paper is a pharmacodynamic modeling study of antipsychotic receptor occupancy and does not report pharmacokinetic parameters for sodium fluoride 18F. |
| popPK | Winning_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for certepetide, not sodium fluoride 18F. |
| popPK | Yin_2023 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for soticlestat, not sodium fluoride 18F. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:32 UTC</sub>
