<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium gluconate&quot;}]"></div>

# calcium gluconate

- **generic name:** calcium gluconate
- **ATC codes:** `A12AA03`, `B05XA19`, `D11AX03`
- **DrugBank:** [DB11126](https://go.drugbank.com/drugs/DB11126) · **PubChem:** [CID 9290](https://pubchem.ncbi.nlm.nih.gov/compound/9290)
- **molar mass:** 430.372 g/mol (C12H22CaO14) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Calcium gluconate is a calcium supplement used for conditions such as osteoporosis, tetany, and cardiac arrest. It is widely used, appears on the WHO essential medicines list, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413739](https://www.wikidata.org/wiki/Q413739) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:42 | 1:50 | 0/0/0 | 1/0/1 | 0/0/0 | 64,090/2,530 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/6 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Giuliano_2021_iCa](drugs/drug_calcium_gluconate/pd_Giuliano_2021_iCa.md) | Change in iCa level ← calcium_gluconate · direct linear effect | — | Giuliano CA et al., Dose-response of intravenous calcium in…, International journal of cl… (2021) | [10.1007/s11096-020-01145-7](https://doi.org/10.1007/s11096-020-01145-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">dog</span> | [Verine_1977_blood_total_Ca_increase_rate](drugs/drug_calcium_gluconate/pd_Verine_1977_blood_total_Ca_increase_rate.md) | blood total [Ca] increase rate ← calcium gluconate · direct linear effect | — | Verine HJ et al., Dose-time pattern of the hypercalcemic…, Biomedicine / [publiee pour… (1977) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcium_gluconate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ansari_2025.pdf` | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | popPK | 10 | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) | [39361822](https://pubmed.ncbi.nlm.nih.gov/39361822) | The study reports a population pharmacokinetic model for calcium (administered as calcium gluconate) with explicit numeric values for clearance, volume, and half-life in the text. |
| `Miyazaki_2003.pdf` | Miyazaki M et al., Estimation of bioavailability of salmon…, Drug metabolism and pharmac… (2003) | pd | 5 | [10.2133/dmpk.18.350](https://doi.org/10.2133/dmpk.18.350) | [15618755](https://www.ncbi.nlm.nih.gov/pubmed/15618755) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-05T08:40:57.508726+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Block_2012 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of denosumab, not calcium gluconate, which is only mentioned as a treatment for adverse events. |
| PD | Block_2012 | not_relevant | 0 | 0 | The paper studies denosumab, not calcium gluconate; calcium gluconate is only mentioned as a treatment for adverse events (hypocalcemia) without any pharmacodynamic or exposure-response analysis. |
| popPK | Christiansen_1979 | irrelevant | 0 | 0 | The study investigates the physiological interaction of calcium gluconate on gastric acid secretion, not its pharmacokinetic disposition parameters. |
| popPK | Christiansen_1984 | irrelevant | 0 | 0 | The study investigates the physiological interaction of calcium gluconate on gastric acid secretion, not its pharmacokinetic disposition parameters. |
| popPK | Corlett_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium's effect on vitamin D hydroxylation, not a pharmacokinetic study of calcium gluconate. |
| popPK | Easterling_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of magnesium sulfate, not calcium gluconate. |
| PD | Easterling_2018 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis of magnesium sulfate, not calcium gluconate, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Giuliano_2021 | irrelevant | 2 | 0 | The study reports a dose-response model for ionized calcium levels rather than pharmacokinetic parameters (CL, V, ka) for calcium gluconate. |
| popPK | Gojo_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dinaciclib, not calcium_gluconate. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not report quantitative pharmacokinetic parameters for calcium gluconate. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies and PK alterations in obese pediatric patients and does not report any pharmacodynamic (PD) or exposure-response analysis for calcium gluconate. |
| popPK | Hoit_1994 | irrelevant | 0 | 0 | The study assesses left atrial contractile performance using a time-varying elastance model, and calcium gluconate is used only as an inotropic agent to test the model's sensitivity, not as the subject of pharmacokinetic analysis. |
| PD | Hoit_1994 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response (change in Emax) to a fixed dose of calcium gluconate but does not provide plasma concentration data or fit a PK/PD model to derive numeric PD parameters like EC50 or Emax. |
| popPK | Imanishi_2002 | irrelevant | 1 | 0 | The study uses calcium gluconate as a tool to manipulate serum calcium levels for PTH set point analysis, rather than reporting pharmacokinetic parameters (CL, V, etc.) for the drug itself. |
| popPK | Juárez-Cedillo_2016 | irrelevant | 0 | 0 | The paper is a clinical study on drug-drug interactions in elderly patients and does not report any pharmacokinetic parameters for calcium gluconate. |
| PD | Juárez-Cedillo_2016 | not_relevant | 0 | 0 | The paper is a clinical risk assessment of drug-drug interactions and mentions calcium gluconate only in the context of a qualitative pharmacodynamic interaction with digoxin, without reporting any exposure-response data, dose-response curves, or numeric PD parameters. |
| popPK | Mandal_1992 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for oxytetracycline, with calcium gluconate serving only as a co-administered agent to induce hypercalcemia, not as the subject drug. |
| popPK | Miyazaki_2003 | irrelevant | 0 | 0 | no_text gate: only 178 chars of text extracted (&lt; 400) |
| PD | Miyazaki_2003 | not_relevant | 4 | 2 | The paper focuses on salmon calcitonin PK/PD modeling; calcium gluconate is used only as a tool to characterize the endogenous calcium regulatory system, and no specific numeric PD parameters for calcium gluconate are reported. |
| popPK | Munhall_2026 | irrelevant | 0 | 0 | The study investigates the efficacy of cilastatin sodium in a pig crush syndrome model and does not report pharmacokinetic parameters for calcium gluconate. |
| PD | Munhall_2026 | not_relevant | 0 | 0 | The paper investigates cilastatin sodium, not calcium gluconate, and reports no exposure-response or dose-response analysis for calcium gluconate. |
| popPK | Nahata_1995 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Nahata_1995 | not_relevant | 0 | 0 | The provided text is only a title/header for a symposium abstract collection and contains no specific data, analysis, or PD parameters for calcium gluconate. |
| popPK | Pearigen_1991 | irrelevant | 0 | 0 | The paper is a review of calcium antagonist poisoning where calcium gluconate is mentioned only as a therapeutic agent, with no pharmacokinetic parameters reported for it. |
| PD | Pearigen_1991 | not_relevant | 1 | 0 | The text is a general review of calcium antagonist poisoning management and mentions calcium gluconate only qualitatively as a treatment for depressed contractility, without providing any numeric PD parameters or exposure-response data. |
| popPK | Prys-Roberts_1976 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects of anesthesia and beta-blockers in dogs, using calcium gluconate only as a pharmacological challenge agent without reporting any pharmacokinetic parameters. |
| PD | Prys-Roberts_1976 | not_relevant | 1 | 0 | The paper only qualitatively states that the positive inotropic effect of calcium gluconate was reduced by beta-blockade, without providing any numeric dose-response parameters, concentration-effect curves, or quantitative PD model fits for calcium gluconate. |
| popPK | Seymour_2023 | irrelevant | 0 | 0 | The study is a dairy cattle nutrition trial evaluating milk production and metabolites, not a pharmacokinetic study, and reports no PK parameters for calcium gluconate. |
| popPK | Seymour_2026 | irrelevant | 0 | 0 | The study evaluates nutrient digestibility and milk yield in dairy cows, not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium gluconate. |
| popPK | Verine_1977 | irrelevant | 2 | 0 | The study reports dose-response slopes for blood calcium concentration changes rather than standard pharmacokinetic disposition parameters (CL, V, ka) for calcium gluconate. |
| popPK | Virtanen_1998 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of calcium infusion on left ventricular diastolic function, not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium gluconate. |
| PD | Virtanen_1998 | not_relevant | 3 | 2 | The study reports a single-dose effect (before/after comparison) on diastolic indices but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD parameters describing the relationship between calcium levels and the magnitude of the effect. |
| popPK | Watanabe_2022 | irrelevant | 0 | 0 | The study is a nutritional trial in lambs evaluating gastrointestinal morphology and fermentation, not a pharmacokinetic study reporting disposition parameters for calcium gluconate. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The study is a retrospective analysis of hypersensitivity reactions to paclitaxel, where calcium gluconate is used only as a treatment agent, not as the subject of pharmacokinetic analysis. |
| popPK | Xia_2026_2 | irrelevant | 0 | 0 | The paper is a review of magnesium sulfate pharmacology and does not report pharmacokinetic parameters for calcium gluconate. |
| PD | Xia_2026_2 | not_relevant | 2 | 1 | The paper is a narrative review of magnesium sulfate (not calcium gluconate) and provides only qualitative/schematic PK-PD descriptions without extractable numeric PD parameters. |
| popPK | Zimmerman_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexmedetomidine, not calcium_gluconate. |
| PD | Zimmerman_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of dexmedetomidine, not calcium gluconate, and does not report a pharmacodynamic model or numeric PD parameters for the target drug. |
| popPK | de_2025 | irrelevant | 0 | 0 | The paper is a case report on sotalol overdose where calcium gluconate is only a co-administered treatment, and no PK parameters for calcium gluconate are reported. |
| PD | de_2025 | not_relevant | 0 | 0 | The paper is a clinical case report of sotalol overdose management and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for calcium gluconate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
