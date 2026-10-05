<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;metreleptin&quot;}]"></div>

# metreleptin

- **generic name:** metreleptin
- **ATC codes:** `A16AA07`
- **DrugBank:** [DB09046](https://go.drugbank.com/drugs/DB09046) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Metreleptin is a protein drug used to treat lipodystrophy, including acquired and familial partial forms. It is authorised in the European Union, but carries a boxed warning, so its use is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17143468](https://www.wikidata.org/wiki/Q17143468) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:53 | 2:06 | 0/1/0 | 0/0/0 | 0/0/0 | 23,415/6,309 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wong_2004_reference](drugs/drug_metreleptin/Metreleptin_Wong2004_reference.md) | — | 1-compartment (no model) | 3 | Wong SL et al., Leptin hormonal kinetics in the fed sta…, The Journal of clinical end… (2004) | [10.1210/jc.2003-031931](https://doi.org/10.1210/jc.2003-031931) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metreleptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: LEPR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 31 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chan_2007.pdf` | Chan JL et al., Pharmacokinetics of recombinant methion…, The Journal of clinical end… (2007) | popPK | 10 | [10.1210/jc.2006-2864](https://doi.org/10.1210/jc.2006-2864) | [17405837](https://pubmed.ncbi.nlm.nih.gov/17405837) | The paper is a primary PK study for metreleptin, but the evidence provided only contains qualitative descriptions and approximate half-life values, lacking the specific numeric parameter values (CL, V, etc.) which are likely in tables or figures not included. |
| `Wong_2004.pdf` | Wong SL et al., Leptin hormonal kinetics in the fed sta…, The Journal of clinical end… (2004) | popPK | 10 | [10.1210/jc.2003-031931](https://doi.org/10.1210/jc.2003-031931) | [15181040](https://pubmed.ncbi.nlm.nih.gov/15181040) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for metreleptin (r-metHuLeptin) with specific numeric values provided in the text. |
| `Chan_2008.pdf` | Chan JL et al., Pharmacokinetics of subcutaneous recomb…, Clinical pharmacokinetics (2008) | popPK | 9 | [10.2165/00003088-200847110-00006](https://doi.org/10.2165/00003088-200847110-00006) | [18840030](https://pubmed.ncbi.nlm.nih.gov/18840030) | The study is a PK study of metreleptin (r-metHuLeptin) reporting qualitative changes in clearance and half-life, but specific numeric parameter values (CL, V, t1/2) are not present in the provided text. |

<sub>queue written 2026-09-30T02:52:04.182708+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Araújo-Vilar_2018 | not_relevant | 2 | 1 | The paper is a single-patient case report describing clinical improvement and in vitro transcript reduction, but it does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for metreleptin. |
| PD | Aronis_2011 | not_relevant | 2 | 1 | The study reports a null result (no significant change in angiogenic factors) and uses ANOVA/regression rather than fitting a pharmacodynamic model; no numeric PD parameters (Emax, EC50, etc.) are reported or derivable. |
| popPK | Babalola_2022 | irrelevant | 0 | 0 | The paper is a case report on icosapent ethyl treatment where metreleptin is only mentioned as an unavailable first-line therapy, with no pharmacokinetic data provided. |
| popPK | Baykal_2020 | irrelevant | 0 | 0 | The study focuses on metabolic effects (de novo lipogenesis, insulin sensitivity) and does not report pharmacokinetic parameters (CL, V, t1/2) for metreleptin. |
| PD | Beghini_2021 | not_relevant | 3 | 2 | The study reports clinical changes in IGF1 and growth after a fixed dose of metreleptin but does not provide drug concentration data or fit a pharmacodynamic model, so no exposure-response or dose-response parameters (Emax, EC50, etc.) can be derived. |
| PGx | Besci_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes and genotype-phenotype correlations for leptin deficiency, but does not report pharmacokinetic or pharmacodynamic parameters of metreleptin influenced by specific gene variants. |
| popPK | Chan_2007 | relevant | 10 | 2 | The paper is a primary PK study for metreleptin, but the evidence provided only contains qualitative descriptions and approximate half-life values, lacking the specific numeric parameter values (CL, V, etc.) which are likely in tables or figures not included. |
| popPK | Chan_2008 | relevant | 9 | 2 | The study is a PK study of metreleptin (r-metHuLeptin) reporting qualitative changes in clearance and half-life, but specific numeric parameter values (CL, V, t1/2) are not present in the provided text. |
| popPK | Chan_2016 | irrelevant | 0 | 0 | The paper focuses on immunogenicity (antibody development) and does not report quantitative pharmacokinetic parameters such as clearance or volume for metreleptin. |
| PD | Chan_2016 | not_relevant | 0 | 0 | The paper focuses on immunogenicity (antibody development and neutralizing activity) and does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters for metreleptin. |
| PD | Choi_2015 | not_relevant | 3 | 1 | The paper describes qualitative dose- and time-dependent activation of signaling pathways in vitro but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect curves. |
| popPK | Dos_2021 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on empagliflozin, and metreleptin is only mentioned as a previously used adjunct therapy without any pharmacokinetic data. |
| PGx | Gyani_2026 | not_relevant | 0 | 0 | The paper is a clinical case series describing the diagnosis of congenital lipodystrophy and notes that metreleptin was unavailable, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Kinzer_2019 | irrelevant | 0 | 0 | The study focuses on lipoprotein profiles and lipid metabolism, not pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study focuses on renal outcomes (proteinuria, eGFR) rather than pharmacokinetic disposition parameters for metreleptin. |
| popPK | Levenson_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of metreleptin on PCSK9 and lipids, not on pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Li_2015 | not_relevant | 1 | 0 | The paper describes qualitative electrophysiological and behavioral effects of amylin and leptin in vitro and in vivo, but does not report any numeric concentration-effect or dose-response parameters for metreleptin. |
| PGx | Melzer_2021 | not_relevant | 2 | 5 | The paper reports a clinical response to metreleptin in a patient with a PPARG variant, but it does not analyze the pharmacokinetic or pharmacodynamic parameters of the drug itself as a function of the genotype (i.e., it is a case report of efficacy, not a pharmacogenomic study of drug handling). |
| PD | Moon_2011 | not_relevant | 3 | 2 | The paper reports a qualitative saturation point (~50 ng/mL) for signaling pathways but lacks a formal dose-response curve, Emax/EC50 parameters, or PK/PD modeling for the clinical efficacy endpoints. |
| popPK | Morath_2025 | irrelevant | 1 | 0 | The study focuses on a novel PASylated leptin candidate, not metreleptin, which is only mentioned as a comparator. |
| PD | Morath_2025 | not_relevant | 1 | 0 | The paper reports PK parameters (half-life) and qualitative efficacy (phenotype reversal) but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve for metreleptin. |
| popPK | Muniyappa_2017 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects on angiopoietin-like protein 3 levels, not pharmacokinetic disposition parameters for metreleptin. |
| PGx | Semple_2023 | not_relevant | 2 | 5 | The paper reports clinical efficacy (PD outcomes like HbA1c and triglycerides) stratified by disease-causing genotypes (LMNA, PPARG, etc.), but does not report pharmacokinetic parameters or pharmacogenomic effects on drug metabolism/transport. |
| popPK | Tchang_2015 | irrelevant | 0 | 0 | The paper is a review of therapeutic perspectives and clinical efficacy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Van_2026 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on long-term metabolic outcomes, adherence, and pregnancy, and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for metreleptin. |
| PD | Wagner_2025 | not_relevant | 0 | 0 | The paper focuses on Neuregulin 4 (NRG4) in lipodystrophy and only qualitatively mentions metreleptin therapy without providing any exposure-response data, dose-response curves, or numeric PD parameters for metreleptin. |
| popPK | Younk_2011 | irrelevant | 0 | 0 | The paper is a review of pramlintide, and metreleptin is only mentioned as a co-administered agent in a brief discussion of weight loss studies, with no PK parameters reported. |
| PD | Younk_2011 | not_relevant | 1 | 0 | The paper is a review of pramlintide and only qualitatively mentions metreleptin in the context of weight loss studies without providing any numeric PD parameters or exposure-response data. |
| PD | von_2024 | not_relevant | 1 | 0 | The paper is a classification of congenital leptin deficiency variants and discusses qualitative treatment approaches (starting doses) for metreleptin, but it does not report any numeric pharmacodynamic parameters, exposure-response curves, or dose-effect data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 13:37 UTC</sub>
