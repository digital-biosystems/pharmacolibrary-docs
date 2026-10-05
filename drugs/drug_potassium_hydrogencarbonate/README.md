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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:18 | 1:54 | 0/0/0 | 0/0/0 | 0/0/0 | 55,952/2,628 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/5 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=potassium_hydrogencarbonate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Hydrogen ions (neutralizer), SLC12A1 (substrate), SLC12A2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
