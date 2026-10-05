<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;fexuprazan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexuprazan_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kim_2022_pH_4&quot;,&quot;label&quot;:&quot;Kim_2022 \u00b7 pH&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fexuprazan/pd_Kim_2022_pH_4.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# fexuprazan

- **generic name:** fexuprazan
- **ATC codes:** `A02BC10`
- **DrugBank:** [DB16078](https://go.drugbank.com/drugs/DB16078) · **PubChem:** not captured
- **molar mass:** 410.41 g/mol (C19H17F3N2O3S) — DrugBank
- **groups:** investigational

## About

Fexuprazan is an investigational proton pump inhibitor being studied for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is not yet approved; it remains in clinical development and has no marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123583148](https://www.wikidata.org/wiki/Q123583148) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 09:28 | 13:10 | 1/1/0 | 2/0/0 | 0/0/0 | 269,017/39,261 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/8 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Kim_2022_reference](drugs/drug_fexuprazan/Fexuprazan_Kim2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jung_2026_reference](drugs/drug_fexuprazan/Fexuprazan_Jung2026_reference.md) | — | 1-compartment (no model) | 0 | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jung_2026_pH](drugs/drug_fexuprazan/pd_Jung_2026_pH.md) | intragastric pH ← fexuprazan · indirect response — drug stimulates the production of intragastric pH | — | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | [Kim_2022_pH](drugs/drug_fexuprazan/pd_Kim_2022_pH.md) | gastric pH ← fexuprazan · indirect response — drug inhibits the production of gastric pH | model (no simulator) | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Kim_2022_pH_2](drugs/drug_fexuprazan/pd_Kim_2022_pH_2.md) | gastric pH ← fexuprazan · indirect response — drug inhibits the production of gastric pH | model (no simulator) | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kim_2022_pH_3](drugs/drug_fexuprazan/pd_Kim_2022_pH_3.md) | gastric pH ← fexuprazan · indirect response — drug inhibits the production of gastric pH | model (no simulator) | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kim_2022_pH_4](drugs/drug_fexuprazan/pd_Kim_2022_pH_4.md) | gastric pH ← fexuprazan · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Kim MS et al., Model-Based Prediction of Acid Suppress…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15060709](https://doi.org/10.3390/ph15060709) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 6  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ranbhise_2026.pdf` | Ranbhise JS et al., Potassium-Competitive Acid Blockers as…, Pharmaceuticals (Basel, Swi… (2026) | pgx | 8 | [10.3390/ph19081168](https://doi.org/10.3390/ph19081168) | [42653667](https://www.ncbi.nlm.nih.gov/pubmed/42653667) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-10-04T09:15:38.769149+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2023 | irrelevant | 0 | 0 | The paper is a review of H. pylori eradication therapies and does not report any quantitative pharmacokinetic parameters for fexuprazan. |
| PD | Ahn_2023 | not_relevant | 1 | 0 | The text is a clinical review of PCAB-based H. pylori eradication therapies that reports clinical outcomes (eradication rates) but contains no pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for fexuprazan. |
| PGx | Ahn_2023 | not_relevant | 0 | 0 | The paper is a review of PCAB efficacy for H. pylori eradication and does not report specific pharmacogenomic effects on fexuprazan PK/PD parameters. |
| popPK | Hwang_2020 | relevant | 10 | 0 | The title confirms a PK study of fexuprazan, but the provided evidence contains no numeric parameter values. |
| PGx | Kang_2026 | not_relevant | 0 | 0 | The study reports no significant difference in clinical efficacy (H. pylori eradication rate) based on CYP2C19 genotype and does not report pharmacokinetic parameters. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study regarding dosing timing, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, ka, etc.) for fexuprazan. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper is a clinical efficacy study comparing dosing timing (before vs. after meal) and reports healing rates, but it does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug and food-drug interactions for P-CABs and does not report pharmacogenomic effects (gene variants) on fexuprazan PK/PD. |
| PD | Oh_2023 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative PD outcomes (platelet aggregation) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for fexuprazan. |
| popPK | Ramani_2023 | irrelevant | 1 | 0 | The paper is a review of clinical development and efficacy without reporting original quantitative pharmacokinetic parameter values. |
| PD | Ramani_2023 | not_relevant | 2 | 0 | The text is a narrative review summarizing clinical development and general pharmacological properties without providing specific numeric PD parameters or exposure-response data. |
| PGx | Ramani_2023 | not_relevant | 0 | 0 | The paper is a general review of fexuprazan's clinical development and pharmacology, noting the lack of CYP2C19 metabolism, but it does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Ranbhise_2026 | not_relevant | 0 | 0 | The paper is a review of P-CABs and explicitly states fexuprazan has genotype-independent inhibition, without reporting specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Remes-Troche_2024 | not_relevant | 0 | 0 | The paper is a general review of P-CABs and does not report any pharmacogenomic effects or gene variant associations for fexuprazan. |
| PGx | Seong_2025 | not_relevant | 2 | 5 | The paper reports a case of idiosyncratic liver injury where a CYP2C19 poor metabolizer genotype was found, but the authors explicitly state its clinical relevance was limited and attribute the observed prolonged half-life to hepatic dysfunction rather than the genetic variant. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on CYP1B1 inhibitors (specifically compound C27) for paclitaxel resistance, and fexuprazan is only mentioned as the source of a lead intermediate (W-1) without any PK parameters reported for fexuprazan itself. |
| PD | Wang_2026 | not_relevant | 3 | 2 | The paper reports an IC50 for a CYP1B1 inhibitor (C27, a fexuprazan intermediate) and qualitative PK data, but does not provide a pharmacodynamic exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for fexuprazan itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 09:15 UTC</sub>
