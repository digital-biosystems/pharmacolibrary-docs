<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Zidebactam&quot;}]"></div>

# Zidebactam

- **generic name:** Zidebactam
- **ATC codes:** not captured
- **DrugBank:** [DB13090](https://go.drugbank.com/drugs/DB13090) · **PubChem:** [CID 77846445](https://pubchem.ncbi.nlm.nih.gov/compound/77846445)
- **molar mass:** 391.4 g/mol (C13H21N5O7S) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:41 | 7:08 | 0/0/0 | 1/0/0 | 0/0/0 | 353,489/5,675 | einfracz / qwen3.8-27b | 12 | 0/12 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Soman_2021_MIC](drugs/drug_zidebactam/pd_Soman_2021_MIC.md) | MIC ← zidebactam · inhibition effect | — | Soman R et al., Is it time to move away from polymyxins…, European journal of clinica… (2021) | [10.1007/s10096-020-04053-w](https://doi.org/10.1007/s10096-020-04053-w) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 8  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lodise_2026.pdf` | Lodise TP et al., A Phase I, randomized, double-blind, pl…, Antimicrobial agents and ch… (2026) | popPK | 9 | [10.1128/aac.00390-26](https://doi.org/10.1128/aac.00390-26) | [42809435](https://pubmed.ncbi.nlm.nih.gov/42809435) | The paper is a primary Phase I pharmacokinetic study reporting quantitative disposition parameters for zidebactam, but the specific numeric values are not present in the provided evidence text. |
| `Giri_2020.pdf` | Giri P et al., Relevance of preclinical rodent pharmac…, Xenobiotica; the fate of fo… (2020) | popPK | 6 | [10.1080/00498254.2019.1696494](https://doi.org/10.1080/00498254.2019.1696494) | [31755347](https://pubmed.ncbi.nlm.nih.gov/31755347) | The study reports preclinical PK parameters (CL, VSS) for zidebactam, but the specific numeric values are not provided in the extracted evidence text. |
| `Lepak_2019.pdf` | Lepak AJ et al., WCK 5222 (Cefepime/Zidebactam) Pharmaco…, Antimicrobial agents and ch… (2019) | popPK | 6 | [10.1128/AAC.01648-19](https://doi.org/10.1128/AAC.01648-19) | [31591114](https://pubmed.ncbi.nlm.nih.gov/31591114) | The paper reports PK parameters for zidebactam in mice (half-life 0.3-0.5 h, penetration), but lacks full compartmental parameters (CL, V) and specific dose-response numerical breakdowns. |
| `Preston_2019.pdf` | Preston RA et al., Single-Center Evaluation of the Pharmac…, Antimicrobial agents and ch… (2019) | popPK | 5 | [10.1128/AAC.01484-18](https://doi.org/10.1128/AAC.01484-18) | [30397067](https://pubmed.ncbi.nlm.nih.gov/30397067) | The paper is a relevant human PK study for zidebactam (co-administered with cefepime) in renal impairment, but the abstract provides only qualitative trends (increased half-life/AUC, decreased clearance) and lacks any specific numeric PK parameter values. |
| `Rodvold_2018.pdf` | Rodvold KA et al., Plasma and Intrapulmonary Concentration…, Antimicrobial agents and ch… (2018) | popPK | 5 | [10.1128/AAC.00682-18](https://doi.org/10.1128/AAC.00682-18) | [29784852](https://pubmed.ncbi.nlm.nih.gov/29784852) | The study reports non-compartmental PK parameters (Cmax, AUC0-8) for zidebactam in humans, but lacks compartmental model parameters like CL or V explicitly in the text, though values are present for AUC/Cmax. |
| `Bhagwat_2019.pdf` | Bhagwat SS et al., The Novel β-Lactam Enhancer Zidebactam…, Antimicrobial agents and ch… (2019) | pd | 5 | [10.1128/AAC.02146-18](https://doi.org/10.1128/AAC.02146-18) | [30670419](https://www.ncbi.nlm.nih.gov/pubmed/30670419) | metadata signals extractable PD data (exposure-response) |
| `Horcajada_2019.pdf` | Horcajada JP et al., Epidemiology and Treatment of Multidrug…, Clinical microbiology revie… (2019) | pd | 5 | [10.1128/CMR.00031-19](https://doi.org/10.1128/CMR.00031-19) | [31462403](https://www.ncbi.nlm.nih.gov/pubmed/31462403) | metadata signals extractable PD data (PK/PD) |
| `Polati_2025.pdf` | Polati VR et al., Investigational antibiotic cefepime/zid…, European journal of clinica… (2025) | pd | 5 | [10.1007/s10096-025-05106-8](https://doi.org/10.1007/s10096-025-05106-8) | [40100511](https://www.ncbi.nlm.nih.gov/pubmed/40100511) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-09T10:39:59.612530+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alarcia-Lacalle_2025 | irrelevant | 2 | 0 | This is a systematic review that discusses zidebactam only in passing or as part of a general search strategy, and no specific quantitative PK parameters for zidebactam are provided in the evidence. |
| popPK | Almarzoky_2019 | irrelevant | 0 | 0 | The paper describes an in vivo efficacy study measuring bacterial reduction, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bakthavatchalam_2026 | irrelevant | 0 | 0 | The study reports in vitro MIC (antimicrobial activity) data, not quantitative pharmacokinetic disposition parameters (CL, V, ka) for zidebactam. |
| popPK | Bhagwat_2019 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Carcione_2026 | irrelevant | 2 | 0 | The paper is a review focusing on cefepime-based combinations; while it discusses zidebactam, the specific quantitative PK parameters provided in the evidence (Vd ~20 L, t1/2 2-2.3 h) explicitly refer to cefepime, not zidebactam. |
| popPK | Comini_2026 | irrelevant | 1 | 0 | The paper is a review focusing on the in vitro activity and mechanisms of cefepime combined with zidebactam, but it does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for zidebactam itself. |
| PGx | Comini_2026 | not_relevant | 0 | 0 | The text is a review discussing mechanisms of action, in vitro activity, and clinical evidence, containing no data on pharmacogenomic effects (gene variants altering PK/PD). |
| popPK | Gatti_2026 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and real-world use, not a pharmacokinetic study reporting quantitative PK parameters for zidebactam. |
| PGx | Gatti_2026 | not_relevant | 0 | 0 | The paper is a review of clinical efficacy and therapeutic algorithms for various beta-lactams, including cefepime-zidebactam, but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Giri_2020 | relevant | 6 | 0 | The study reports preclinical PK parameters (CL, VSS) for zidebactam, but the specific numeric values are not provided in the extracted evidence text. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The paper reports in vitro MIC (Minimum Inhibitory Concentration) data for cefepime-zidebactam, not quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) in vivo. |
| popPK | Horcajada_2019 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Isler_2021 | irrelevant | 0 | 0 | The paper is a review discussing cefepime and its combinations, mentioning zidebactam only as a β-lactamase inhibitor in in vitro and animal studies without providing any quantitative PK parameters for zidebactam itself. |
| popPK | Karlowsky_2020 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility analysis (MIC determination) of cefepime-zidebactam and does not report any pharmacokinetic disposition parameters. |
| popPK | Karvouniaris_2023 | irrelevant | 1 | 1 | The paper is a review of novel antimicrobial agents that mentions cefepime-zidebactam as being in Phase 3 trials, but it does not report any quantitative pharmacokinetic parameters or models for zidebactam. |
| popPK | Lepak_2019 | relevant | 6 | 4 | The paper reports PK parameters for zidebactam in mice (half-life 0.3-0.5 h, penetration), but lacks full compartmental parameters (CL, V) and specific dose-response numerical breakdowns. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study reports in vitro MICs for various antibiotics including zidebactam, but provides no pharmacokinetic disposition parameters. |
| popPK | Lodise_2026 | relevant | 9 | 0 | The paper is a primary Phase I pharmacokinetic study reporting quantitative disposition parameters for zidebactam, but the specific numeric values are not present in the provided evidence text. |
| popPK | Monogue_2019 | irrelevant | 1 | 0 | The study reports in vivo efficacy data (bacterial load reduction) for the cefepime-zidebactam combination, not quantitative pharmacokinetic parameters (CL, V, etc.) for zidebactam. |
| popPK | Moya_2017 | irrelevant | 0 | 0 | The study focuses on in-vitro antimicrobial mechanisms (PBP binding, MICs, time-kill) and does not report any pharmacokinetic parameters for zidebactam. |
| popPK | Pipitò_2026 | irrelevant | 0 | 0 | The paper is a review of cefepime-based combinations where zidebactam is only a component of a combination, and no quantitative pharmacokinetic parameter values for zidebactam are provided in the evidence. |
| popPK | Polati_2025 | irrelevant | 1 | 0 | The paper is a clinical case report describing a treatment outcome, not a pharmacokinetic study, and contains no quantitative PK parameters (CL, V, etc.) for zidebactam. |
| popPK | Preston_2019 | irrelevant | 5 | 0 | The paper is a relevant human PK study for zidebactam (co-administered with cefepime) in renal impairment, but the abstract provides only qualitative trends (increased half-life/AUC, decreased clearance) and lacks any specific numeric PK parameter values. |
| popPK | Raro_2026 | irrelevant | 0 | 0 | This is an in-vitro microbiology and enzymatic kinetics study characterizing a beta-lactamase (PAC-1); zidebactam is used only as an inhibitor in MIC and IC50 assays, not as a subject for pharmacokinetic profiling. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review on the pyrrolidine scaffold in antibiotic discovery and does not report pharmacokinetic parameters for the specific drug zidebactam. |
| popPK | Sastre-Femenia_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of antibiotic resistance (MICs and PBP binding affinities) and does not report any pharmacokinetic parameters (CL, V, ka, t1/2) for zidebactam. |
| popPK | Soman_2021 | irrelevant | 0 | 0 | The paper is a review discussing the clinical utility of new agents like cefepime-zidebactam but contains no original pharmacokinetic parameter values or models for zidebactam. |
| popPK | Thacker_2026 | irrelevant | 0 | 0 | This is a clinical case report focusing on the therapeutic outcome of an infection, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Yahav_2020 | irrelevant | 0 | 0 | The paper is a review of beta-lactam-beta-lactamase inhibitor combinations that mentions zidebactam only in the context of in vitro activity, without reporting quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
