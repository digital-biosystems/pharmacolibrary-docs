<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;metadoxine&quot;}]"></div>

# metadoxine

- **generic name:** metadoxine
- **ATC codes:** `A05BA09`
- **DrugBank:** [DB16554](https://go.drugbank.com/drugs/DB16554) · **PubChem:** not captured
- **molar mass:** 298.295 g/mol (C13H18N2O6) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:00 | 1:55 | 0/0/0 | 0/0/0 | 0/0/0 | 67,255/2,226 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metadoxine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SLC6A1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 40 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Annoni_1992 | irrelevant | 0 | 0 | The study is a toxicology/pathology investigation of metadoxine's protective effects on liver fibrosis in rats, reporting no pharmacokinetic parameters. |
| popPK | Arosio_1993 | irrelevant | 0 | 0 | The study investigates the protective effect of metadoxine on liver fibrosis via gene expression analysis (Northern blot) and does not report any pharmacokinetic parameters. |
| popPK | Babinets_2017 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of metadoxine on liver stiffness and lipid profiles, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bono_1991 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of metadoxine for alcohol withdrawal and does not report any pharmacokinetic parameters. |
| popPK | Borro_2016 | irrelevant | 0 | 0 | The paper is a clinical review discussing the use of metadoxine for alcohol dependence in liver disease and contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Brancati_2024 | irrelevant | 0 | 0 | The paper is a narrative review of non-stimulant medications for ADHD and does not report any quantitative pharmacokinetic parameters for metadoxine. |
| popPK | Buoli_2016 | irrelevant | 0 | 0 | The paper is a systematic review of ADHD treatments that mentions metadoxine only as a potential alternative for comorbid alcohol misuse, without reporting any pharmacokinetic parameters. |
| popPK | Calabrese_1986 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Calabrese_1993 | irrelevant | 0 | 0 | The study investigates the biochemical effects of metadoxine on fatty acid levels and enzyme activity in rats, not its pharmacokinetic parameters. |
| popPK | Caputo_2024 | irrelevant | 0 | 0 | The paper is a clinical review of alcoholic liver disease that mentions metadoxine as a treatment option but provides no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | Metadoxine is used only as a positive control in a toxicology study, with no pharmacokinetic parameters reported. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacological effects of Chaige anti-alcoholic granules (CAG); metadoxine is used only as a positive control in a single-dose group without any PK/PD modeling or dose-response analysis for metadoxine. |
| popPK | Di_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical trials focusing on efficacy and safety, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Díaz_2002 | irrelevant | 1 | 0 | The study is a clinical efficacy trial for acute alcohol intoxication that reports changes in blood alcohol concentration, not pharmacokinetic parameters (CL, V, ka) for metadoxine. |
| popPK | Felicioli_1980 | irrelevant | 0 | 0 | no_text gate: only 359 chars of text extracted (&lt; 400) |
| popPK | Fornai_1993 | irrelevant | 0 | 0 | The study measures striatal dopamine levels (neurochemical effect) rather than pharmacokinetic disposition parameters (CL, V, etc.) for metadoxine. |
| popPK | Gessa_1990 | irrelevant | 0 | 0 | The paper is a clinical guideline review discussing the therapeutic use of metadoxine for alcoholism without reporting any quantitative pharmacokinetic parameters. |
| popPK | Giustino_2024 | irrelevant | 0 | 0 | The paper is an observational study on emergency service usage and treatment patterns for alcohol intoxication, reporting no pharmacokinetic parameters for metadoxine. |
| popPK | Goh_2017 | irrelevant | 0 | 0 | This is a review article on pharmacotherapy for alcohol dependence that mentions metadoxine as an agent under investigation but does not report any quantitative pharmacokinetic parameters. |
| PGx | Goh_2017 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapy for alcohol dependence and mentions metadoxine only as an agent under investigation, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Gratacós-Ginès_2024 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of clinical efficacy (abstinence rates) for alcohol use disorder, not a pharmacokinetic study, and it contains no PK parameters for metadoxine. |
| popPK | Islam_2026 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of clinical outcomes (mortality) for alcohol-associated hepatitis, not a pharmacokinetic study, and it contains no PK parameters for metadoxine. |
| popPK | Jin_2022 | irrelevant | 0 | 0 | Metadoxine is used only as a pharmacological inhibitor of cAMP signaling in an immunology study, with no pharmacokinetic parameters reported. |
| popPK | Kaul_2005 | irrelevant | 0 | 0 | The paper describes an analytical method (HPTLC) for quantifying metadoxine in formulations and does not report any pharmacokinetic parameters. |
| PD | Kaul_2005 | not_relevant | 0 | 0 | The paper describes a stability-indicating HPTLC analytical method for metadoxine and reports no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Lee_2010 | irrelevant | 2 | 0 | The study reports only relative percentage changes in AUC and Cmax for the component pyridoxine, not absolute quantitative PK parameters (CL, V, ka) for metadoxine itself. |
| popPK | Lheureux_2005 | irrelevant | 0 | 0 | The paper is a review of pyridoxine in toxicology and only mentions metadoxine as a controversial agent for ethanol metabolism without providing any pharmacokinetic parameters. |
| PD | Lheureux_2005 | not_relevant | 0 | 0 | The paper is a review of pyridoxine in clinical toxicology and only qualitatively mentions metadoxine regarding ethanol metabolism without providing any numeric PD parameters or exposure-response data. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper is a clinical review of alcoholic hepatitis treatment that mentions metadoxine as an adjunctive therapy but provides no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Lü_2007 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Mirijello_2023 | irrelevant | 0 | 0 | The paper is a clinical review of acute alcohol intoxication management and does not report any quantitative pharmacokinetic parameters for metadoxine. |
| popPK | Parés_1991 | irrelevant | 0 | 0 | The study is an in-vitro and mechanistic investigation of enzyme activity (alcohol and aldehyde dehydrogenase) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Rotem_2021 | irrelevant | 0 | 0 | The study analyzes placebo response in ADHD using behavioral scales (TOVA/CAARS) and does not report any pharmacokinetic parameters for metadoxine. |
| popPK | Santoni_1989 | irrelevant | 0 | 0 | The paper is a review and clinical case report focusing on therapeutic efficacy and safety, with no pharmacokinetic parameters reported. |
| popPK | Shpilenya_2002 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (half-life) for ethanol, not for metadoxine, and does not provide disposition parameters for the subject drug. |
| popPK | Testino_2018 | irrelevant | 0 | 0 | The paper is a review of alcoholic liver fibrosis that mentions metadoxine as a treatment option but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Velarde-Ruiz_2020 | irrelevant | 0 | 0 | The paper is a clinical consensus guideline for alcoholic hepatitis that mentions metadoxine only as a potential adjuvant therapy, without reporting any pharmacokinetic parameters. |
| popPK | Vonghia_2008 | irrelevant | 0 | 0 | The text is a general overview of acute alcohol intoxication and mentions metadoxine's mechanism but contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The paper is a reproductive toxicity study in rats and does not report any pharmacokinetic parameters for metadoxine. |
| PD | Wang_2003 | not_relevant | 2 | 1 | The paper reports qualitative dose-toxicity observations (NOAEL, specific effects at 400/800/1600 mg/kg) but lacks numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| popPK | Wen_2016 | irrelevant | 0 | 0 | Metadoxine is used only as a positive control comparator in an acute alcohol intoxication study, and no pharmacokinetic parameters for metadoxine are reported. |
| PD | Wen_2016 | not_relevant | 0 | 0 | The study investigates the effects of Panax ginseng and Hippophae rhamnoides extracts, not metadoxine, and does not report a pharmacodynamic model or numeric PD parameters for metadoxine. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The study is a mechanistic behavioral pharmacology study in mice where metadoxine is used as a CREB antagonist to probe the mechanism of Fructus Aurantii, not as the subject of a pharmacokinetic analysis. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study is a pharmacological investigation of siRNA nanoparticles in mice where metadoxine is used only as a positive control, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
