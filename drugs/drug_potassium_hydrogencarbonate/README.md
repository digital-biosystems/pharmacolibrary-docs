<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12B&quot;,&quot;href&quot;:&quot;atc/A12B.md&quot;},{&quot;label&quot;:&quot;potassium hydrogencarbonate&quot;}]"></div>

# potassium hydrogencarbonate

- **generic name:** potassium hydrogencarbonate
- **ATC codes:** `A12BA04`
- **DrugBank:** [DB11098](https://go.drugbank.com/drugs/DB11098) · **PubChem:** [CID 516893](https://pubchem.ncbi.nlm.nih.gov/compound/516893)
- **molar mass:** 100.1151 g/mol (CHKO3) — DrugBank
- **groups:** approved, investigational

## About

Potassium hydrogencarbonate (potassium bicarbonate) is a potassium supplement used to treat low blood potassium levels (hypokalemia). It is an approved medicine, available as a mineral supplement, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410529](https://www.wikidata.org/wiki/Q410529) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=potassium_hydrogencarbonate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Hydrogen ions (neutralizer), SLC12A1 (substrate), SLC12A2 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:18 | 1:54 | 0/0/0 | 0/0/0 | 0/0/0 | 55,952/2,628 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/5 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 46 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hill_1985.pdf` | Hill DR, The influence of bicarbonate ions on th…, Neuropharmacology (1985) | pd | 4 | [10.1016/0028-3908(85)90174-1](https://doi.org/10.1016/0028-3908(85)90174-1) | [2986032](https://www.ncbi.nlm.nih.gov/pubmed/2986032) | metadata signals extractable PD data (IC50) |
| `Richter_1989.pdf` | Richter KE et al., L-beta-methylaminoalanine inhibits [3H]…, Brain research (1989) | pd | 4 | [10.1016/0006-8993(89)90925-6](https://doi.org/10.1016/0006-8993(89)90925-6) | [2568879](https://www.ncbi.nlm.nih.gov/pubmed/2568879) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T09:17:30.247384+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2015 | irrelevant | 0 | 0 | The paper is a clinical case report describing the treatment of renal tubular acidosis with potassium supplements, but it does not report any pharmacokinetic parameters for potassium hydrogencarbonate. |
| PD | Agarwal_2015 | not_relevant | 0 | 0 | The paper is a clinical case report describing the management of a patient with Sjogren syndrome and RTA; it does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for potassium hydrogencarbonate. |
| PGx | Amara_2010 | not_relevant | 0 | 0 | The paper studies the pharmacogenomic effect of the angiotensinogen gene on lisinopril response, not potassium_hydrogencarbonate. |
| popPK | Anichini_2011 | irrelevant | 0 | 0 | The study is a clinical case report on oxidative stress biomarkers in Beckwith-Wiedemann syndrome and does not report any pharmacokinetic parameters for potassium hydrogencarbonate. |
| PD | Anichini_2011 | not_relevant | 1 | 0 | The paper reports qualitative changes in oxidative stress biomarkers in three patients treated with a fixed dose of potassium ascorbate/ribose, but it does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Banerjee_2022 | irrelevant | 0 | 0 | The study is a re-analysis of a clinical trial examining the association between dietary acid load (using potassium bicarbonate as an intervention) and blood pressure, not a pharmacokinetic study reporting disposition parameters for potassium bicarbonate. |
| popPK | Banerjee_2023 | irrelevant | 0 | 0 | The study investigates the association between diet-dependent acid load and kidney function decline, not the pharmacokinetic parameters (CL, V, etc.) of potassium bicarbonate. |
| popPK | Belldina_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cysteamine bitartrate, not potassium_hydrogencarbonate. |
| PD | Belldina_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of cysteamine bitartrate, not potassium hydrogencarbonate. |
| popPK | Beyzaei_2021 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on 1,3,4-oxadiazole derivatives where potassium bicarbonate is used only as a reagent/base, not as a subject drug for pharmacokinetic analysis. |
| PD | Beyzaei_2021 | not_relevant | 0 | 0 | The paper reports the synthesis and antioxidant activity (IC50) of 1,3,4-oxadiazol-2-amines, where potassium bicarbonate is used only as a reagent/base, not as the drug of interest for a pharmacodynamic analysis. |
| popPK | Biolo_2019 | irrelevant | 0 | 0 | The study investigates the metabolic effects of potassium bicarbonate supplementation (glutathione and protein kinetics) rather than the pharmacokinetic disposition parameters (CL, V, etc.) of the drug itself. |
| popPK | Chacha_2025 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial efficacy and molecular docking study involving bedaquiline, clofazimine, and doxycycline, with no pharmacokinetic data for potassium hydrogencarbonate. |
| PD | Chacha_2025 | not_relevant | 0 | 0 | The paper investigates antimicrobial synergy and efflux inhibition in bacteria, not pharmacodynamic exposure-response relationships for potassium hydrogencarbonate. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diclofenac potassium, not potassium hydrogencarbonate (which is only mentioned as a buffering agent). |
| PD | Chen_2015 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, tmax, AUC) for diclofenac potassium and does not provide any pharmacodynamic or exposure-response data. |
| popPK | Ergani_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the management of Gitelman syndrome in pregnancy and does not contain any pharmacokinetic studies or quantitative disposition parameters for potassium hydrogencarbonate. |
| PD | Ergani_2021 | not_relevant | 0 | 0 | The paper is a clinical case report describing the management of Gitelman syndrome in pregnancy with qualitative observations on electrolyte levels and dosage adjustments, but it does not report any quantitative pharmacodynamic or exposure-response analysis. |
| popPK | Frassetto_1997 | irrelevant | 0 | 0 | The study investigates the metabolic effects of potassium bicarbonate on urinary nitrogen excretion and acid-base balance, not its pharmacokinetic disposition parameters. |
| popPK | Gaikwad_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Azelnidipine, where potassium bicarbonate is used only as a formulation excipient (gas-generating agent), not as the subject drug. |
| popPK | Galen_1989 | irrelevant | 0 | 0 | The study evaluates hemodialysis efficiency and duration in patients, not the pharmacokinetic parameters of potassium hydrogencarbonate. |
| popPK | Goodship_1993 | irrelevant | 0 | 0 | The study focuses on dialysis adequacy and nutritional status in CAPD patients, not the pharmacokinetics of potassium hydrogencarbonate. |
| popPK | Guittet_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring urine pH and in vitro dissolution profiles, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for potassium bicarbonate. |
| popPK | Hill_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA receptor binding and does not report pharmacokinetic parameters for potassium bicarbonate. |
| PD | Hill_1985 | not_relevant | 0 | 0 | The paper investigates the effect of bicarbonate ions on the potency of ethylenediamine (a GABA-mimetic), not the pharmacodynamic response to potassium hydrogencarbonate itself. |
| popPK | Hochberg_1984 | irrelevant | 0 | 0 | The study investigates the physiological response to parathyroid hormone infusion, not the pharmacokinetics of potassium hydrogencarbonate. |
| popPK | Hughey_2013 | irrelevant | 0 | 0 | The study focuses on the dissolution and disintegration of carbamazepine tablets using potassium bicarbonate as an excipient, not on the pharmacokinetics of potassium bicarbonate itself. |
| PD | Hughey_2013 | not_relevant | 0 | 0 | The paper focuses on pharmaceutical formulation and dissolution kinetics, not pharmacodynamics or exposure-response relationships. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of drug tolerance in glioblastoma cells and does not report pharmacokinetic parameters for potassium hydrogencarbonate. |
| PD | Joun_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of drug tolerance in glioblastoma (PRDM9) and does not report any pharmacodynamic or exposure-response analysis for potassium hydrogencarbonate. |
| PGx | Khairy_2016 | not_relevant | 0 | 0 | The paper studies plant physiology and heavy metal toxicity in tobacco, not human pharmacogenomics or potassium hydrogencarbonate. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The study investigates fat taste receptor agonists in mice and does not involve potassium_hydrogencarbonate or its pharmacokinetics. |
| PD | Khan_2023 | not_relevant | 0 | 0 | The paper studies fat taste receptor agonists (NKS-3 and NKS-5) and does not report any pharmacodynamic or exposure-response data for potassium hydrogencarbonate. |
| popPK | Kshirsagar_2011 | irrelevant | 0 | 0 | The study focuses on the formulation of a valsartan delivery system where potassium bicarbonate is used as a formulation excipient, not as the subject drug for pharmacokinetic analysis. |
| PD | Kshirsagar_2011 | not_relevant | 0 | 0 | The paper focuses on the formulation and optimization of a drug delivery system (valsartan beads) using potassium bicarbonate as a formulation excipient, not on the pharmacodynamic or exposure-response relationship of potassium bicarbonate itself. |
| PGx | Leeder_2008 | not_relevant | 0 | 0 | The paper evaluates a CYP2D6 phenotyping assay using dextromethorphan; potassium bicarbonate is only used as a vehicle/adjunct and is not the drug of interest for which PK/PD parameters are being analyzed. |
| popPK | Mason_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aspirin, with potassium bicarbonate serving only as a buffer component in the dosage form, not as the subject drug. |
| PD | Mason_1984 | not_relevant | 0 | 0 | The paper reports PK parameters (absorption rate, AUC) for aspirin, not a pharmacodynamic or exposure-response relationship for potassium hydrogencarbonate. |
| popPK | Moura_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and anticancer activity of carnosic acid derivatives, not the pharmacokinetics of potassium hydrogencarbonate. |
| PD | Moura_2025 | not_relevant | 0 | 0 | The paper studies carnosic acid derivatives, not potassium hydrogencarbonate, and reports IC50 values for anticancer activity rather than a pharmacodynamic model for the specified drug. |
| popPK | Patience_1987 | irrelevant | 0 | 0 | The study measures macromineral balance and digestibility in swine, not pharmacokinetic parameters (CL, V, t1/2) for potassium bicarbonate. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper describes a theranostic probe for Alzheimer's disease and does not involve potassium_hydrogencarbonate or its pharmacokinetics. |
| PD | Rai_2026 | not_relevant | 0 | 0 | The paper studies a novel NIRF probe (I-43) for Alzheimer's disease, not potassium hydrogencarbonate, and does not report a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Reece_2017 | irrelevant | 0 | 0 | The study analyzes serum electrolyte levels (including bicarbonate) in opioid-dependent patients but does not report pharmacokinetic parameters (CL, V, etc.) for potassium hydrogencarbonate. |
| popPK | Richter_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glutamate binding inhibition where potassium bicarbonate acts as a buffer/condition, not a subject drug for pharmacokinetic analysis. |
| popPK | Rodriguez-Soriano_1982 | irrelevant | 0 | 0 | The paper is a clinical study on the natural history of renal tubular acidosis and does not report pharmacokinetic parameters (CL, V, etc.) for potassium bicarbonate. |
| PD | Rodriguez-Soriano_1982 | not_relevant | 2 | 1 | The paper describes clinical management and dosage adjustments based on urinary losses but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Sakhaee_1991 | irrelevant | 0 | 0 | The study focuses on renal citrate excretion and acid-base status, not the pharmacokinetic disposition parameters (CL, V, ka) of potassium bicarbonate. |
| popPK | Santoro_2005 | irrelevant | 0 | 0 | The study evaluates hemodiafiltration clearance of various solutes (urea, creatinine, etc.) and electrolyte shifts, but does not report pharmacokinetic parameters (CL, V, ka) for potassium hydrogencarbonate as a subject drug. |
| popPK | Sebastian_1990 | irrelevant | 0 | 0 | The study investigates the metabolic effects of dietary potassium on phosphorus and calcitriol homeostasis, not the pharmacokinetic disposition parameters (CL, V, etc.) of potassium bicarbonate. |
| popPK | Sloan_2015 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic modeling of bacterial elimination in tuberculosis and does not involve potassium_hydrogencarbonate or its pharmacokinetics. |
| PD | Sloan_2015 | not_relevant | 0 | 0 | The paper models bacterial elimination rates (BER) and lipid body counts to predict clinical outcomes in tuberculosis, but does not report any pharmacodynamic or exposure-response relationship for potassium hydrogencarbonate. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The paper is a review of acyclovir synthesis and detection, not a pharmacokinetic study of potassium hydrogencarbonate. |
| PD | Wei_2021 | not_relevant | 0 | 0 | The paper is a review of acyclovir synthesis and detection methods, containing no pharmacodynamic data or exposure-response analysis for potassium hydrogencarbonate. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of an EGFR inhibitor (CDDO-Me) in lung cancer, not the pharmacokinetics of potassium_hydrogencarbonate. |
| PD | Zhou_2024 | not_relevant | 0 | 0 | The paper investigates CDDO-Me, not potassium hydrogencarbonate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
