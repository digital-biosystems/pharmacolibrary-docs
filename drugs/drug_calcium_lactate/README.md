<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium lactate&quot;}]"></div>

# calcium lactate

- **generic name:** calcium lactate
- **ATC codes:** `A12AA05`
- **DrugBank:** [DB13231](https://go.drugbank.com/drugs/DB13231) · **PubChem:** [CID 13144](https://pubchem.ncbi.nlm.nih.gov/compound/13144)
- **molar mass:** 218.218 g/mol (C6H10CaO6) — DrugBank
- **groups:** approved, vet_approved

## About

Calcium lactate is a calcium salt used as a mineral supplement to treat or prevent calcium deficiency. It is an approved medicine and also approved for veterinary use, and is additionally used as a food additive.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419693](https://www.wikidata.org/wiki/Q419693) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:42 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 16,063/317 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 2/2 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcium_lactate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almurisi_2020 | irrelevant | 0 | 0 | The paper is a formulation study on paracetamol jelly where calcium lactate gluconate is used only as an excipient, and no pharmacokinetic parameters are reported. |
| PD | Almurisi_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation development and palatability of a paracetamol jelly, with no pharmacodynamic or exposure-response analysis for calcium lactate or any other drug. |
| popPK | Baez-Polan_2025 | irrelevant | 0 | 0 | The study investigates intraoral fluoride retention and bioavailability using calcium lactate as a prerinse, not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium lactate itself. |
| popPK | Farr_1987 | irrelevant | 0 | 0 | The paper is a taste-matching study for zinc gluconate where calcium lactate is used only as a placebo comparator, with no pharmacokinetic parameters reported. |
| PD | Farr_1987 | not_relevant | 0 | 0 | The paper discusses taste matching and blinding efficacy for zinc gluconate and calcium lactate, containing no pharmacodynamic or exposure-response analysis. |
| PGx | Heikkinen_2004 | not_relevant | 0 | 0 | The paper investigates the effect of an NPY gene polymorphism on bone mineral density, not on the pharmacokinetics or pharmacodynamics of calcium lactate. |
| popPK | Heller_1985 | irrelevant | 0 | 0 | no_text gate: only 47 chars of text extracted (&lt; 400) |
| PD | Heller_1985 | not_relevant | 0 | 0 | The paper focuses on the synthesis and characterization of poly(ortho ester) biodegradable polymers and does not contain any pharmacodynamic or exposure-response data for calcium lactate. |
| popPK | Hwang_2026 | irrelevant | 0 | 0 | The paper is a review of intravaginal formulations for vaginal disorders and does not report pharmacokinetic parameters for calcium lactate. |
| PD | Hwang_2026 | not_relevant | 0 | 0 | The paper is a narrative review of intravaginal formulations for vaginal disorders and does not report any pharmacodynamic or exposure-response data for calcium lactate. |
| popPK | Kim_2013 | irrelevant | 0 | 0 | The study is an acute toxicity test in rats and does not report any pharmacokinetic parameters for calcium lactate. |
| PD | Kim_2013 | not_relevant | 0 | 0 | The paper reports an acute toxicity study (LD50 &gt; 2000 mg/kg) with no observed adverse effects, providing no concentration-effect or dose-response PD parameters. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on bovine embryo development and fertilization rates, not a pharmacokinetic study, and reports no disposition parameters for calcium lactate. |
| popPK | Mossad_1996 | irrelevant | 0 | 0 | The study is a clinical trial for zinc gluconate where calcium lactate is used only as a placebo excipient, and no pharmacokinetic parameters are reported. |
| PD | Mossad_1996 | not_relevant | 0 | 0 | The paper is a clinical trial of zinc gluconate where calcium lactate serves only as a placebo ingredient; it reports no pharmacodynamic or exposure-response data for calcium lactate. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional survey on medicine use during breastfeeding and does not report any pharmacokinetic parameters for calcium lactate. |
| PD | Nakijoba_2025 | not_relevant | 0 | 0 | The paper is a cross-sectional epidemiological study on medication use prevalence and safety categories during breastfeeding; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for calcium lactate or any other drug. |
| popPK | Nishibe_1996 | irrelevant | 0 | 0 | The study is a clinical trial on bone mineral density in osteoporosis patients, not a pharmacokinetic study, and reports no PK parameters for calcium lactate. |
| PD | Nishibe_1996 | not_relevant | 0 | 0 | The paper reports clinical outcomes (BMD, serum Ca) for a combination therapy (E3 + Calcium Lactate) vs Calcium Lactate alone, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for calcium lactate. |
| popPK | Shiraki_2003 | irrelevant | 0 | 0 | The study focuses on the efficacy of risedronate, and calcium lactate is only mentioned as a co-administered supplement without any pharmacokinetic parameters reported. |
| popPK | Souza_2016 | irrelevant | 0 | 0 | The study is an in situ caries model investigating enamel demineralization and does not report pharmacokinetic parameters for calcium lactate. |
| PD | Souza_2016 | not_relevant | 3 | 2 | The study reports a qualitative dose-response comparison of enamel hardness loss across different rinse concentrations but does not provide a concentration-effect curve, Emax/EC50 parameters, or a PK/PD model for calcium lactate. |
| popPK | Yurttas_2014 | irrelevant | 0 | 0 | The study is a food science investigation into mushroom preservation using calcium lactate as an additive, not a pharmacokinetic study. |
| PD | Yurttas_2014 | not_relevant | 0 | 0 | The paper describes a food preservation study using calcium lactate as a processing agent, not a pharmacodynamic or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
