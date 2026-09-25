<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;indobufen&quot;}]"></div>

# indobufen

- **generic name:** indobufen
- **ATC codes:** `B01AC10`
- **DrugBank:** [DB12545](https://go.drugbank.com/drugs/DB12545)
- **groups:** investigational

## About

**Description.** Indobufen has been used in trials studying the supportive care and prevention of Atrial Fibrillation.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 23:42 | 10:02 | 0/0/0 | 0/1/0 | 0/0/0 | 83,079/13,334 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.781). The first reading is what the record holds.">cross-check: disputed</span> | [Noh_2018](drugs/drug_indobufen/pd_Noh_2018_MPA.md) | Noh YH et al., Prediction of the human &lt;i&gt;in vivo&lt;/i&gt;…, Translational and clinical… (2018) | [10.12793/tcp.2018.26.4.160](https://doi.org/10.12793/tcp.2018.26.4.160) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fuccella_1979.pdf` | Fuccella LM et al., Pharmacokinetic, bioavailability and ph…, European journal of clinica… (1979) | popPK | 8 | [10.1007/BF00558435](https://doi.org/10.1007/BF00558435) | [456403](https://pubmed.ncbi.nlm.nih.gov/456403) | The study reports PK parameters for indobufen, but only the half-life (7-8 h) is explicitly provided in the text, while other quantitative values like clearance and volume are not listed. |
| `Tamassia_1979.pdf` | Tamassia V et al., Indobufen (K 3920), a new inhibitor of…, European journal of clinica… (1979) | popPK | 8 | [10.1007/BF00558436](https://doi.org/10.1007/BF00558436) | [456404](https://pubmed.ncbi.nlm.nih.gov/456404) | The paper is a pharmacokinetic study of indobufen in humans, but the provided evidence contains only qualitative descriptions of the results without any specific numeric parameter values (e.g., CL, V, t1/2). |
| `Główka_2007.pdf` | Główka F et al., Enantioselective CE method for pharmaco…, Electrophoresis (2007) | pgx | 8 | [10.1002/elps.200600736](https://doi.org/10.1002/elps.200600736) | [17657761](https://www.ncbi.nlm.nih.gov/pubmed/17657761) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-05T23:41:10.787057+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fuccella_1979 | relevant | 8 | 3 | The study reports PK parameters for indobufen, but only the half-life (7-8 h) is explicitly provided in the text, while other quantitative values like clearance and volume are not listed. |
| PGx | Główka_2007 | not_relevant | 0 | 0 | The paper focuses on ibuprofen pharmacokinetics and CYP2C polymorphisms; indobufen is only used as an internal standard. |
| popPK | Hou_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanisms of indobufen in myocardial injury (apoptosis, oxidative stress) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The study investigates the anticoagulant pharmacodynamics (coagulation factors, APTT, PT) of indobufen, not its pharmacokinetic disposition parameters. |
| PD | Liu_2018 | not_relevant | 3 | 2 | The study reports dose-dependent effects (e.g., thrombus inhibition at 20, 40, 80 mg/kg) but lacks plasma concentration data and does not fit or report numeric PD parameters (Emax, EC50, etc.). |
| popPK | Lu_2026 | irrelevant | 2 | 0 | The study reports only non-compartmental bioequivalence metrics (Cmax, AUC) without specific numeric values or compartmental PK parameters (CL, V, ka) for indobufen. |
| popPK | Mamiya_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on platelet function and protein phosphorylation, reporting no pharmacokinetic parameters. |
| popPK | Marzo_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic/endoscopic evaluation of gastrointestinal tolerability and does not report any pharmacokinetic parameters for indobufen. |
| PD | Marzo_2004 | not_relevant | 1 | 0 | The paper reports qualitative clinical outcomes (endoscopic erosion scores) comparing indobufen and aspirin but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Noh_2018 | irrelevant | 2 | 0 | The study is a pharmacodynamic (PD) modeling analysis using in vitro data and literature PK values, not a primary PK study reporting original quantitative disposition parameters for indobufen. |
| popPK | Patrignani_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (IC50 values) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Patrignani_1994 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo biochemical characterization of cyclooxygenase inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for indobufen. |
| popPK | Pepe_2025 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy and safety in coronary artery disease, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Pepe_2025 | not_relevant | 2 | 0 | The paper is a systematic review that qualitatively mentions promising pharmacodynamic data on platelet inhibition but does not report or provide access to specific numeric PD parameters or concentration-effect curves for indobufen. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The study is a metabolomics analysis of pharmacodynamic effects and biomarkers, not a pharmacokinetic study, and reports no PK parameters for indobufen. |
| PD | Sun_2024 | not_relevant | 1 | 0 | The study is a metabolomics analysis comparing fixed-dose groups (n=5 per group) and reports qualitative metabolic pathway changes and biomarker identification, but it does not provide drug concentration data or fit any exposure-response or dose-response models to derive numeric PD parameters. |
| popPK | Tamassia_1979 | relevant | 8 | 0 | The paper is a pharmacokinetic study of indobufen in humans, but the provided evidence contains only qualitative descriptions of the results without any specific numeric parameter values (e.g., CL, V, t1/2). |
| popPK | Wiseman_1992 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties without original quantitative disposition parameters (CL, V, etc.) present in the evidence. |
| PD | Wiseman_1992 | not_relevant | 2 | 0 | The text is a qualitative review summary that describes pharmacodynamic properties and therapeutic efficacy but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Yang_2021 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic effects (platelet aggregation, TXB2 levels) rather than pharmacokinetic parameters, and no quantitative PK values are reported. |
| PD | Yang_2021 | not_relevant | 3 | 2 | The study reports qualitative comparisons of pharmacodynamic effects (platelet aggregation, TXB2) across different dosing regimens but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect/dose-response model. |
| popPK | Zhang_2026 | irrelevant | 2 | 0 | The study focuses on a clopidogrel-indobufen conjugate prodrug rather than indobufen itself, and no quantitative PK parameter values (CL, V, etc.) are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
