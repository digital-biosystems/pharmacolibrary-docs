<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;landiolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Landiolol_Honda2008_reference&quot;,&quot;label&quot;:&quot;Honda_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_landiolol/Landiolol_Honda2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Landiolol_Kunisawa2015_reference&quot;,&quot;label&quot;:&quot;Kunisawa_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_landiolol/Landiolol_Kunisawa2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Landiolol_Kunisawa2015v2_reference&quot;,&quot;label&quot;:&quot;Kunisawa_2015_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_landiolol/Landiolol_Kunisawa2015v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# landiolol

- **generic name:** landiolol
- **ATC codes:** `C07AB14`
- **DrugBank:** [DB12212](https://go.drugbank.com/drugs/DB12212) · **PubChem:** [CID 114905](https://pubchem.ncbi.nlm.nih.gov/compound/114905)
- **molar mass:** 509.6 g/mol (C25H39N3O8) — DrugBank
- **groups:** approved, investigational

## About

Landiolol is a selective beta blocker with antiarrhythmic activity, used to control fast heart rhythms. It is an approved medicine, given by infusion in hospital settings, and is used mainly in Japan and some Asian countries rather than in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6484656](https://www.wikidata.org/wiki/Q6484656) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| landiolol | parent | 509.6 | C25H39N3O8 | DrugBank | [114905](https://pubchem.ncbi.nlm.nih.gov/compound/114905) | Honda_2008, Kunisawa_2015, Kunisawa_2015_2 |
| landiolol hydrochloride | metabolite | 546.058 | C25H40ClN3O8 | PubChem | [164457](https://pubchem.ncbi.nlm.nih.gov/compound/164457) | Honda_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 04:11 | 13:01 | 0/0/3 | 0/0/0 | 0/0/0 | 130,160/17,753 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 5/2 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Honda_2008_reference](drugs/drug_landiolol/Landiolol_Honda2008_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Honda N et al., Population pharmacokinetics of landiolo…, Drug metabolism and pharmac… (2008) | [10.2133/dmpk.23.447](https://doi.org/10.2133/dmpk.23.447) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Kunisawa_2015_reference](drugs/drug_landiolol/Landiolol_Kunisawa2015_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Kunisawa T et al., Target-controlled infusion and populati…, Journal of anesthesia (2015) | [10.1007/s00540-014-1908-5](https://doi.org/10.1007/s00540-014-1908-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Kunisawa_2015_2_reference](drugs/drug_landiolol/Landiolol_Kunisawa2015v2_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Kunisawa T et al., Target-controlled infusion and populati…, Therapeutics and clinical r… (2015) | [10.2147/TCRM.S74867](https://doi.org/10.2147/TCRM.S74867) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=landiolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate, `CES2` substrate, `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Honda_2008.pdf` | Honda N et al., Population pharmacokinetics of landiolo…, Drug metabolism and pharmac… (2008) | popPK | 10 | [10.2133/dmpk.23.447](https://doi.org/10.2133/dmpk.23.447) | [19122339](https://pubmed.ncbi.nlm.nih.gov/19122339) | The paper is a population PK study of landiolol and explicitly reports numeric values for CL, V1, Q, V2, and lag time in the text. |
| `Kunisawa_2015.pdf` | Kunisawa T et al., Target-controlled infusion and populati…, Journal of anesthesia (2015) | popPK | 10 | [10.1007/s00540-014-1908-5](https://doi.org/10.1007/s00540-014-1908-5) | [25186494](https://pubmed.ncbi.nlm.nih.gov/25186494) | The paper reports a population PK study for landiolol with explicit numeric values for CL, V1, Q, V2, and ALAG in the text. |
| `Atarashi_2000.pdf` | Atarashi H et al., Pharmacokinetics of landiolol hydrochlo…, Clinical pharmacology and t… (2000) | popPK | 9 | [10.1067/mcp.2000.108733](https://doi.org/10.1067/mcp.2000.108733) | [10976545](https://pubmed.ncbi.nlm.nih.gov/10976545) | The study reports quantitative PK parameters (half-life range 2.3-4.0 min) for landiolol, but specific values for clearance and volume are not explicitly listed in the provided text. |

<sub>queue written 2026-09-29T04:04:16.050861+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Arun_2025 | not_relevant | 1 | 0 | The text is a narrative review discussing clinical outcomes (heart rate, mortality) without providing any specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters for landiolol. |
| popPK | Atarashi_2000 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-life range 2.3-4.0 min) for landiolol, but specific values for clearance and volume are not explicitly listed in the provided text. |
| PD | Ayabe_2024 | not_relevant | 2 | 1 | The paper reports qualitative clinical efficacy differences between atrial fibrillation and atrial tachycardia but does not provide numeric concentration-effect or dose-response parameters (e.g., EC50, Emax) or a formal PK/PD model. |
| PD | Balik_2018 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical outcomes and dosage ranges without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| PD | Eibensteiner_2025 | not_relevant | 2 | 1 | The paper is a retrospective observational study reporting clinical outcomes (heart rate reduction, safety) without any pharmacokinetic data, concentration measurements, or formal dose-response modeling to derive PD parameters. |
| popPK | Fujimoto_2025 | irrelevant | 0 | 0 | The study is a retrospective observational analysis of hemodynamic outcomes (heart rate, blood pressure) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for landiolol. |
| PD | Oka_2019 | not_relevant | 2 | 1 | The study reports clinical efficacy (heart rate reduction) and dose titration data but does not provide plasma concentration data or fit a pharmacodynamic model (e.g., Emax, EC50) to derive numeric PD parameters. |
| PD | Onoda_2022 | not_relevant | 0 | 0 | The paper evaluates the chemical stability of landiolol in drug mixtures using HPLC, not pharmacodynamic or exposure-response relationships. |
| popPK | Shimohara_2026 | irrelevant | 0 | 0 | The study investigates the effects of orexin receptor antagonists on electroconvulsive therapy seizure quality, and landiolol is only mentioned as a covariate in sensitivity analyses without any pharmacokinetic parameters reported. |
| PD | Syed_2018 | not_relevant | 1 | 0 | The text is a qualitative review of clinical efficacy and pharmacological properties, containing no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| PD | Thomas_2025 | not_relevant | 0 | 0 | The study compares treatment arms (landiolol vs. standard care) using statistical tests (t-tests, mixed models) but does not model the relationship between drug exposure (concentration/dose) and effect, nor does it report PD parameters like Emax or EC50. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess a pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 04:04 UTC</sub>
