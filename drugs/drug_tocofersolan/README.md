<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;tocofersolan&quot;}]"></div>

# tocofersolan

- **generic name:** tocofersolan
- **ATC codes:** `A11HA08`
- **DrugBank:** [DB11635](https://go.drugbank.com/drugs/DB11635) · **PubChem:** none
- **groups:** approved

## About

Tocofersolan is a water-soluble form of vitamin E used to treat vitamin E deficiency, including deficiency linked to cholestasis. It is an approved vitamin preparation with an authorised product in the European Union, but it remains a niche treatment rather than a widely used medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q172409](https://www.wikidata.org/wiki/Q172409) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tocofersolan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` target | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` target | DrugBank actor |
| distribution | placenta | `ABCB1` target | DrugBank actor |
| distribution | testis | `ABCB1` target | DrugBank actor |
| metabolism | kidney | `CYP4F2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP4F2` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` target | DrugBank actor |
| excretion | liver | `ABCB1` target | DrugBank actor |

<sub>Actors without a tissue in the table: ABCA1 (substrate), ABCG5 (substrate), ABCG8 (substrate), APOBR (substrate), NPC1L1 (substrate), SCARB1 (substrate), SEC14L2 (substrate), SEC14L3 (substrate), SEC14L4 (substrate), TTPA (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:39 | 3:33 | 0/0/0 | 0/0/0 | 0/0/0 | 150,463/2,806 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/12 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 48 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cuerq_2018.pdf` | Cuerq C et al., Efficacy of two vitamin E formulations…, Journal of lipid research (2018) | popPK | 8 | [10.1194/jlr.m085043](https://doi.org/10.1194/jlr.m085043) | [30021760](https://pubmed.ncbi.nlm.nih.gov/30021760) | The study reports bioavailability percentages for tocofersolan in humans, which are quantitative PK parameters, but specific clearance, volume, or rate constants are not explicitly listed in the provided text. |

<sub>queue written 2026-10-05 08:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arasu_2024 | irrelevant | 0 | 0 | The study focuses on azithromycin-loaded liposomes for Chlamydia treatment and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Aziz_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and release of atropine base from contact lenses, not the pharmacokinetics of tocofersolan. |
| popPK | Binkhathlan_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel (PTX) in rats, not tocofersolan. |
| popPK | Binkhathlan_2024_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel (PTX), not tocofersolan. |
| popPK | Bor_2022 | irrelevant | 0 | 0 | The study focuses on the physicochemical characterization and biodistribution of DHA-incorporated hexosomes/vesicles in mice, not the pharmacokinetics of tocofersolan. |
| popPK | Chang_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine, not tocofersolan. |
| popPK | Chauhan_2018 | irrelevant | 0 | 0 | The paper studies a nanomaterial (Toco-Photoxil) for photothermal therapy and does not report pharmacokinetic parameters for the drug tocofersolan. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, not tocofersolan. |
| popPK | Chou_2022 | irrelevant | 0 | 0 | The study focuses on zoledronic acid nanoparticles and does not investigate tocofersolan pharmacokinetics. |
| popPK | Coleman_2023 | irrelevant | 0 | 0 | The paper investigates the antibacterial and antibiofilm properties of compounds like PHMB and TPGS in vitro, and does not contain any pharmacokinetic data for tocofersolan. |
| popPK | Cuerq_2018 | relevant | 8 | 2 | The study reports bioavailability percentages for tocofersolan in humans, which are quantitative PK parameters, but specific clearance, volume, or rate constants are not explicitly listed in the provided text. |
| PD | Cuerq_2018 | not_relevant | 2 | 1 | The study reports PK parameters (bioavailability) and a qualitative comparison of efficacy (plasma levels at 4 months) but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Dahe_2011 | irrelevant | 0 | 0 | The paper describes the biocompatibility and separation performance of hemodialysis membranes containing Vitamin E TPGS, not the pharmacokinetics of tocofersolan. |
| popPK | Gazdikova_2000 | irrelevant | 0 | 0 | The study measures plasma levels of antioxidants (including alpha-tocopherol) in kidney disease patients and does not involve tocofersolan or pharmacokinetic modeling. |
| popPK | Ghosh_2020 | irrelevant | 0 | 0 | The study investigates the genotoxicity and biodistribution of superparamagnetic iron oxide nanoparticles (SPION), not the pharmacokinetics of tocofersolan. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The paper focuses on the formulation and efficacy of a gemcitabine-tocopherol succinate prodrug, not the pharmacokinetics of tocofersolan. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artesunate liposomes, not tocofersolan. |
| popPK | Jadhav_2025 | irrelevant | 0 | 0 | The paper is a review of surfactant-based drug delivery systems in breast cancer and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Kumbhar_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aripiprazole, not tocofersolan. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of S-HM-3 and paclitaxel, not tocofersolan. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of isoliquiritigenin, not tocofersolan. |
| popPK | Maji_2026 | irrelevant | 0 | 0 | The study focuses on tocofersolan (TPGS) as a targeting ligand for Ibrutinib delivery, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Maji_2026 | not_relevant | 3 | 2 | The paper reports IC50 values for the drug formulation, which are potency metrics, but does not provide a concentration-effect curve, Emax, or a PK/PD model linking exposure to response. |
| popPK | Modi_2020 | irrelevant | 0 | 0 | The paper focuses on membrane materials for bioartificial kidneys and does not study the pharmacokinetics of tocofersolan. |
| popPK | Mugundhan_2025 | irrelevant | 0 | 0 | The study focuses on Axitinib nanomicelles for breast cancer and does not involve tocofersolan or its pharmacokinetics. |
| popPK | Mustafa_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of kanamycin sulphate, not tocofersolan. |
| popPK | Mustafa_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Kanamycin Sulphate (KS) loaded in nanoparticles, not tocofersolan. |
| popPK | Pereira-Silva_2025 | irrelevant | 0 | 0 | The paper describes the formulation and in vitro characterization of gemcitabine-loaded micelles, not the pharmacokinetics of tocofersolan. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of (S)-zaltoprofen, not tocofersolan. |
| popPK | Prashant_2010 | irrelevant | 0 | 0 | The study focuses on SPIO-loaded nanoparticles for MRI imaging and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Sathe_2024 | irrelevant | 0 | 0 | The study focuses on natamycin nanomicelles for fungal keratitis and does not involve tocofersolan. |
| popPK | Shen_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of genistein, not tocofersolan. |
| popPK | Singh_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of docetaxel, not tocofersolan. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of piperine, not tocofersolan. |
| popPK | Sipos_2024 | irrelevant | 0 | 0 | The study is an in-vitro formulation and release study where tocofersolan (TPGS) is used as an excipient/solubilizer, not as the subject drug for pharmacokinetic analysis. |
| popPK | Stevens_2023 | irrelevant | 0 | 0 | The paper is a systematic review on nanoparticle delivery of flavonoids and does not report pharmacokinetic parameters for tocofersolan. |
| PD | Stevens_2023 | not_relevant | 0 | 0 | The paper is a systematic review of nanoparticle delivery of flavonoids and does not report specific pharmacodynamic or exposure-response data for tocofersolan. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | The study focuses on docetaxel-loaded micelles and TPGS, not tocofersolan pharmacokinetics. |
| popPK | Tong_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of baicalein, not tocofersolan. |
| popPK | Tsend-Ayush_2017 | irrelevant | 0 | 0 | The study focuses on etoposide delivery using TPGS nanoparticles and does not investigate the pharmacokinetics of tocofersolan. |
| popPK | Verma_2018 | irrelevant | 0 | 0 | The paper is an in-vitro study on hemodialysis membrane performance and does not report pharmacokinetic parameters for tocofersolan. |
| popPK | Viswanadh_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of docetaxel-loaded nanoparticles, not tocofersolan. |
| popPK | Warsi_2014 | irrelevant | 0 | 0 | The study investigates dorzolamide-loaded nanoparticles, not tocofersolan. |
| popPK | Westergren_2010 | irrelevant | 1 | 0 | The paper is a review of dosage and formulation issues that explicitly states there are few pharmacokinetic studies and no PK studies for tocofersolan in neonates, providing no quantitative PK parameters. |
| PD | Westergren_2010 | not_relevant | 1 | 0 | The paper is a narrative review of dosage recommendations and bioavailability comparisons, containing no quantitative pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters for tocofersolan. |
| popPK | Yadav_2023 | irrelevant | 0 | 0 | The study focuses on Paclitaxel and Baicalein, not tocofersolan. |
| popPK | Yadav_2023_2 | irrelevant | 0 | 0 | The study focuses on paclitaxel pharmacokinetics in mice, not tocofersolan. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of apremilast, not tocofersolan. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chlorogenic acid (CGA) in rats, not tocofersolan. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry database resource for drug screening and does not report pharmacokinetic parameters for tocofersolan. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics database for drug detection and does not report any pharmacodynamic or exposure-response analysis for tocofersolan. |
| popPK | Zhen_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 6-Gingerol, not tocofersolan. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btocofersolan%5D&body=Drug%3A%20tocofersolan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tocofersolan/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
