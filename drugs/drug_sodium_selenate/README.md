<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;sodium selenate&quot;}]"></div>

# sodium selenate

- **generic name:** sodium selenate
- **ATC codes:** `A12CE01`
- **DrugBank:** [DB11068](https://go.drugbank.com/drugs/DB11068) · **PubChem:** [CID 1089](https://pubchem.ncbi.nlm.nih.gov/compound/1089)
- **molar mass:** 144.97 g/mol (H2O4Se) — DrugBank
- **groups:** approved

## About

**Description.** Selenic acid is an organic compound with the chemical formula H2SeO4. It may be found in over-the-counter daily dietary supplements as a source of [DB11135], an essential trace mineral for human health.

**Indication.** Indicated for use as a nutritional supplement.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 16:51 | 19:57 | 0/0/0 | 0/0/0 | 0/0/0 | 58,866/1,930 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 4/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2024.pdf` | Li C et al., Pharmacokinetics and brain uptake of so…, Pharmacology research & per… (2024) | popPK | 9 | [10.1002/prp2.1256](https://doi.org/10.1002/prp2.1256) | [39506350](https://pubmed.ncbi.nlm.nih.gov/39506350) | The study reports quantitative PK parameters (CL/F, Vd/F) for sodium selenate in rats, but the specific numeric values are not present in the provided evidence text. |
| `DeYoung_1991.pdf` | DeYoung DJ et al., Assessment of the developmental toxicit…, Drug and chemical toxicology (1991) | pd | 4 | [10.3109/01480549109017872](https://doi.org/10.3109/01480549109017872) | [1889372](https://www.ncbi.nlm.nih.gov/pubmed/1889372) | metadata signals extractable PD data (EC50) |
| `Kuperman_2018.pdf` | Kuperman RG et al., Selenium toxicity to survival and repro…, Environmental toxicology an… (2018) | pd | 4 | [10.1002/etc.4017](https://doi.org/10.1002/etc.4017) | [29078251](https://www.ncbi.nlm.nih.gov/pubmed/29078251) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-26T16:49:17.031198+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cabral_2020 | not_relevant | 0 | 0 | The paper studies the physiological response of rice plants to selenium toxicity, not the pharmacogenomics of sodium selenate in humans. |
| popPK | Cacciatore_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on MAT2A in prostate cancer and does not involve sodium selenate or pharmacokinetic parameters. |
| PD | Cacciatore_2024 | not_relevant | 0 | 0 | The paper investigates MAT2A inhibitors (PF-9366, AG-270) in prostate cancer models and does not mention sodium selenate or report any pharmacodynamic parameters for it. |
| PGx | Cipriano_2023 | not_relevant | 0 | 0 | The paper studies the agronomic effects of selenium compounds on sorghum genotypes, not the pharmacogenomics of sodium selenate in humans. |
| popPK | Dausch_1993 | irrelevant | 0 | 0 | The study measures hepatic S-adenosylmethionine levels in rats fed selenium compounds and does not report any pharmacokinetic parameters for sodium selenate. |
| PD | Dausch_1993 | not_relevant | 1 | 0 | The paper explicitly states that no dose-response relationship was found and only reports qualitative significant differences without providing numeric PD parameters or curves. |
| popPK | DeYoung_1991 | irrelevant | 0 | 0 | The study is a developmental toxicity assessment (FETAX) reporting teratogenic indices, not a pharmacokinetic study with disposition parameters. |
| PD | DeYoung_1991 | not_relevant | 3 | 0 | The paper reports a Teratogenic Index (LC50/EC50) for sodium selenate but does not provide the specific numeric values for LC50 or EC50, nor does it present a concentration-effect curve or detailed PK/PD modeling. |
| popPK | Gür_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cardiac responses in diabetic rats, not a pharmacokinetic study, and reports no disposition parameters for sodium selenate. |
| PD | Gür_2004 | not_relevant | 1 | 0 | The paper reports qualitative changes in cardiac responses to agonists (isoproterenol, adenosine, carbachol) in diabetic rats treated with sodium selenate, but it does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or exposure-response data for sodium selenate itself. |
| PGx | Hasan_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and selenium toxicity in wheat, not human pharmacogenomics or drug PK/PD. |
| PGx | Jain_2018 | not_relevant | 0 | 0 | The paper studies fungal genetics and toxicity in Aspergillus fumigatus, not human pharmacogenomics or PK/PD parameters of sodium selenate as a drug. |
| popPK | Jayachandran_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sodium selenite, not sodium selenate. |
| PD | Jayachandran_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and dose-bioavailability relationship, but it does not model or report any pharmacodynamic (PD) or exposure-response parameters (e.g., Emax, EC50) for the drug's effect. |
| popPK | Jourdain_2026 | irrelevant | 0 | 0 | The paper studies marine natural products (leucettamine B, nacryline, pinctazole) for bone healing and does not involve sodium selenate. |
| PD | Jourdain_2026 | not_relevant | 0 | 0 | The paper studies leucettamine B and nacryline derivatives, not sodium selenate, and reports only single-dose screening data without dose-response curves or PD parameters. |
| popPK | Knox_2019 | irrelevant | 1 | 1 | The study investigates sodium selenite, not sodium selenate, and only reports a half-life without a compartmental model or other quantitative disposition parameters. |
| PD | Knox_2019 | not_relevant | 1 | 0 | The paper reports PK parameters (half-life) and qualitative efficacy/toxicity observations but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Kuperman_2018 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation of selenium toxicity in soil invertebrates and does not report pharmacokinetic parameters for sodium selenate. |
| popPK | Li_2024 | relevant | 9 | 2 | The study reports quantitative PK parameters (CL/F, Vd/F) for sodium selenate in rats, but the specific numeric values are not present in the provided evidence text. |
| PGx | Moses_2022 | not_relevant | 0 | 0 | The paper investigates perivascular spaces as a biomarker for disease severity in bvFTD and does not report any pharmacogenomic effects on the PK or PD of sodium selenate. |
| popPK | Preitner_2026 | irrelevant | 0 | 0 | The paper studies the drug ACI-16664 for Alzheimer's disease and does not mention sodium_selenate or report any pharmacokinetic parameters. |
| PD | Preitner_2026 | not_relevant | 0 | 0 | The paper discusses the drug ACI-16664, not sodium selenate, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Proietti_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium homeostasis and oxidative stress, not a pharmacokinetic study reporting disposition parameters like clearance or volume for sodium selenate. |
| popPK | Tsukamoto_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell signaling and EMT, reporting no pharmacokinetic parameters for sodium selenate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
