<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;pralatrexate&quot;}]"></div>

# pralatrexate

- **generic name:** pralatrexate
- **ATC codes:** `L01BA05`
- **DrugBank:** [DB06813](https://go.drugbank.com/drugs/DB06813)
- **groups:** approved, investigational

## About

**Description.** Pralatrexate is an antifolate for the treatment of relapsed or refractory peripheral T-cell lymphoma [L37674]. Pralatrexate was developed in response due to the inferior responses of patients using the standard therapy for their B-cells counterparts.[A246693] Compared to methotrexate, pralatrexate has better accumulation in cancer cells.[A246693] Pralatrexate is designed to have a higher affinity for the reduced folate carrier, a protein that is overexpressed in malignant cells and is upregulated by oncogenes.[A246703] As such, pralatrexate is thought to have a better therapeutic window compared to other antifolate analogs due to the novel target of RFC.[A246703]

Pralatrexate was approved by the FDA on September 24, 2009.[L37674] It is also being studied for other types of lymphoma and solid malignancy such as non-small-cell lung cancer, breast cancer, and bladder cancer.[A246678]

**Indication.** Pralatrexate is indicated for the treatment of relapsed or refractory peripheral T-cell lymphoma.[L37674]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 07:22 | 9:45 | 0/0/0 | 5/0/0 | 0/0/0 | 137,828/2,505 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 1/11 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Clark_2020](drugs/drug_pralatrexate/pd_Clark_2020_unknown.md) | Clark RA et al., Preclinical evaluation of the anti-tumo…, Oncotarget (2020) | [10.18632/oncotarget.27697](https://doi.org/10.18632/oncotarget.27697) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liang_2026](drugs/drug_pralatrexate/pd_Liang_2026_viral_RNA_level.md) | Liang X et al., Pralatrexate is a potent pan-serotype h…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01960-25](https://doi.org/10.1128/aac.01960-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liang_2026](drugs/drug_pralatrexate/pd_Liang_2026_viral_copy_number.md) | Liang X et al., Pralatrexate is a potent pan-serotype h…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01960-25](https://doi.org/10.1128/aac.01960-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liang_2026](drugs/drug_pralatrexate/pd_Liang_2026_viral_inhibition_percentage.md) | Liang X et al., Pralatrexate is a potent pan-serotype h…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01960-25](https://doi.org/10.1128/aac.01960-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Peters_2020](drugs/drug_pralatrexate/pd_Peters_2020_growth_inhibition.md) | Peters GJ et al., Schedule-Dependent Synergy Between the…, Frontiers in cell and devel… (2020) | [10.3389/fcell.2020.577215](https://doi.org/10.3389/fcell.2020.577215) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Scotto_2020](drugs/drug_pralatrexate/pd_Scotto_2020_DUSP4_expression.md) | Scotto L et al., Generation of pralatrexate resistant T-…, Genes, chromosomes & cancer (2020) | [10.1002/gcc.22884](https://doi.org/10.1002/gcc.22884) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Scotto_2020](drugs/drug_pralatrexate/pd_Scotto_2020_STAT5_phosphorylation.md) | Scotto L et al., Generation of pralatrexate resistant T-…, Genes, chromosomes & cancer (2020) | [10.1002/gcc.22884](https://doi.org/10.1002/gcc.22884) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Scotto_2020](drugs/drug_pralatrexate/pd_Scotto_2020_growth_inhibition.md) | Scotto L et al., Generation of pralatrexate resistant T-…, Genes, chromosomes & cancer (2020) | [10.1002/gcc.22884](https://doi.org/10.1002/gcc.22884) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2020](drugs/drug_pralatrexate/pd_Zhang_2020_viral_yield.md) | Zhang H et al., A novel virtual screening procedure ide…, PLoS computational biology (2020) | [10.1371/journal.pcbi.1008489](https://doi.org/10.1371/journal.pcbi.1008489) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pralatrexate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | kidney | <sub>“…fall is thought to reflect the clearance of pralatrexate by renal and non-renal mechanism…”</sub> | prose |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…ed in urine as unchanged pralatrexate and 34% (CV = 88%) in feces as unchanged pralatrexat…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor/substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DHFR (inhibitor), DHFR (substrate), FPGS (substrate), PDF (inhibitor), SLC19A1 (substrate), SLC46A1 (substrate), TYMS (inhibitor), TYMS (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mould_2009.pdf` | Mould DR et al., A population pharmacokinetic and pharma…, Clinical pharmacology and t… (2009) | popPK | 10 | [10.1038/clpt.2009.80](https://doi.org/10.1038/clpt.2009.80) | [19474785](https://pubmed.ncbi.nlm.nih.gov/19474785) | The paper describes a population PK study for pralatrexate, but the provided evidence contains only qualitative descriptions of covariates and outcomes without any specific numeric parameter values (e.g., CL, V, Q). |
| `Visentin_2014.pdf` | Visentin M et al., The impact of 5-formyltetrahydrofolate…, Cancer chemotherapy and pha… (2014) | pd | 5 | [10.1007/s00280-014-2441-9](https://doi.org/10.1007/s00280-014-2441-9) | [24682532](https://www.ncbi.nlm.nih.gov/pubmed/24682532) | metadata signals extractable PD data (IC50) |
| `Malhotra_2020.pdf` | Malhotra U et al., Pralatrexate in Combination with Oxalip…, Molecular cancer therapeuti… (2020) | pgx | 5 | [10.1158/1535-7163.MCT-19-0240](https://doi.org/10.1158/1535-7163.MCT-19-0240) | [31575653](https://www.ncbi.nlm.nih.gov/pubmed/31575653) | metadata signals extractable PGX data (SLC19A1) |

<sub>queue written 2026-09-15T07:18:55.486330+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes a machine learning platform for in vitro drug synergy screening and does not report pharmacokinetic parameters for pralatrexate. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on machine learning for drug combination synergy prediction and does not report pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for pralatrexate. |
| PD | Garmabdari_2026 | not_relevant | 0 | 0 | The paper is an in silico computational study using machine learning and molecular dynamics to predict binding affinity and IC50, but it does not report any experimental pharmacodynamic (exposure-response or dose-response) data or numeric PD parameters for pralatrexate. |
| PGx | Grem_2015 | not_relevant | 0 | 0 | The paper reports that MTHFR and TS polymorphisms did not correlate with toxicity, and does not report any pharmacokinetic or pharmacodynamic parameters. |
| PD | Jain_2015 | not_relevant | 2 | 1 | The paper describes preclinical synergy and PK/PD analyses in a mouse model but does not provide specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for pralatrexate in the provided text. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The paper describes a machine learning model for drug-target affinity prediction and does not contain pharmacokinetic data for pralatrexate. |
| PD | Kumar_2025 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting drug-target binding affinity and does not contain any pharmacodynamic or exposure-response data for pralatrexate. |
| popPK | Kumar_2025_2 | irrelevant | 0 | 0 | The paper focuses on machine learning for Alzheimer's drug repurposing (specifically dolutegravir) and does not study pralatrexate or report its pharmacokinetic parameters. |
| PD | Kumar_2025_2 | not_relevant | 0 | 0 | The paper is a computational study on drug repurposing for Alzheimer's disease targeting GSK-3β and does not mention pralatrexate or report any pharmacodynamic or exposure-response data. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study reporting EC50 and binding constants for pralatrexate, not a pharmacokinetic study with disposition parameters. |
| PGx | Malhotra_2020 | not_relevant | 2 | 5 | The paper reports associations between gene variants and clinical outcomes (PFS/OS), not pharmacokinetic or pharmacodynamic parameters. |
| popPK | Maruyama_2024 | irrelevant | 0 | 0 | The study evaluates valemetostat, not pralatrexate, and does not report pharmacokinetic parameters for the target drug. |
| PD | Maruyama_2024 | not_relevant | 0 | 0 | The paper studies valemetostat, not pralatrexate, and reports only clinical efficacy (ORR) and safety without any pharmacodynamic modeling or exposure-response analysis. |
| popPK | Mould_2009 | relevant | 10 | 0 | The paper describes a population PK study for pralatrexate, but the provided evidence contains only qualitative descriptions of covariates and outcomes without any specific numeric parameter values (e.g., CL, V, Q). |
| popPK | Patten_2022 | irrelevant | 0 | 0 | The paper is a virology screening study where pralatrexate is only a test compound for antiviral activity, not a pharmacokinetic study. |
| PD | Patten_2022 | not_relevant | 0 | 0 | The paper does not mention pralatrexate or report any pharmacodynamic data for it. |
| PGx | Shah_2020 | not_relevant | 2 | 1 | The paper reports associations between gene variants and clinical outcomes (PFS/OS) or toxicity, but does not report changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters of pralatrexate. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral and computational study that does not report pharmacokinetic disposition parameters (CL, V, etc.) for pralatrexate. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a computational drug screening study for SARS-CoV-2 RdRp inhibitors where pralatrexate is only mentioned as a known inhibitor for binding site analysis, with no pharmacokinetic parameters reported. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on virtual screening for SARS-CoV-2 RdRp inhibitors; pralatrexate is only mentioned as a reference compound for binding residue analysis, with no PD or exposure-response data reported for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
