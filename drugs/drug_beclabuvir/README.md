<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Beclabuvir&quot;}]"></div>

# Beclabuvir

- **generic name:** Beclabuvir
- **ATC codes:** `J05AP58`
- **DrugBank:** [DB12225](https://go.drugbank.com/drugs/DB12225) · **PubChem:** [CID 56934415](https://pubchem.ncbi.nlm.nih.gov/compound/56934415)
- **molar mass:** 659.838 g/mol (C36H45N5O5S) — DrugBank
- **groups:** investigational

## About

Beclabuvir is an antiviral drug investigated for the treatment of hepatitis C virus infections. It remains investigational and has not been approved for clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19596032](https://www.wikidata.org/wiki/Q19596032) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:46 | 7:40 | 0/0/0 | 0/0/1 | 0/0/0 | 48,820/1,363 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ueno_2019_SVR12](drugs/drug_beclabuvir/pd_Ueno_2019_SVR12.md) | sustained virologic response at posttreatment week 12 ← beclabuvir · categorical (graded) response model | — | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=beclabuvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Genome polyprotein (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Osawa_2019.pdf` | Osawa M et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology in dr… (2019) | popPK | 10 | [10.1002/cpdd.649](https://doi.org/10.1002/cpdd.649) | [30629858](https://pubmed.ncbi.nlm.nih.gov/30629858) | The paper is a population PK study for beclabuvir, but the extracted text lacks specific numeric parameter values (CL, V, etc.) which are likely in the full body or tables not provided. |
| `Ueno_2019.pdf` | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | pd | 5 | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) | [30667592](https://www.ncbi.nlm.nih.gov/pubmed/30667592) | metadata signals extractable PD data (Exposure-Response) |
| `Murray_2024.pdf` | Murray M, The Role of CYPs and Transporters in th…, Current drug metabolism (2024) | pgx | 8 | [10.2174/0113892002288832240213095622](https://doi.org/10.2174/0113892002288832240213095622) | [38441017](https://www.ncbi.nlm.nih.gov/pubmed/38441017) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Eley_2015.pdf` | Eley T et al., Asunaprevir: A Review of Preclinical an…, Clinical pharmacokinetics (2015) | pgx | 7 | [10.1007/s40262-015-0299-6](https://doi.org/10.1007/s40262-015-0299-6) | [26177803](https://www.ncbi.nlm.nih.gov/pubmed/26177803) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T13:45:04.190961+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Everson_2016 | not_relevant | 0 | 0 | The paper is a Phase 2b clinical trial evaluating the efficacy and safety of a drug regimen, and while it mentions IL28B subgroups, it does not report any analysis of how gene variants affect the pharmacokinetics or pharmacodynamics of beclabuvir. |
| PGx | Fabrizi_2015 | not_relevant | 0 | 0 | The paper reviews clinical efficacy and safety of DAA therapies in renal failure patients and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Garimella_2018 | not_relevant | 1 | 5 | The study assesses drug-drug interactions of beclabuvir on CYP enzymes but only uses a small subgroup of CYP2C19 poor metabolizers descriptively, without reporting a fitted pharmacogenomic effect size. |
| PGx | Gentile_2015 | not_relevant | 0 | 0 | The paper is a general review of the pharmacokinetics and efficacy of beclabuvir, with no mention of gene variants or genotypes affecting its PK/PD. |
| PGx | Gentile_2015_2 | not_relevant | 0 | 0 | The paper reviews the safety of asunaprevir, not beclabuvir, and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Kao_2017 | not_relevant | 0 | 0 | The paper reports clinical outcomes (SVR12) for a fixed-dose combination but does not report pharmacokinetic or pharmacodynamic parameters or specific pharmacogenomic effects of variants on these parameters. |
| PGx | Murray_2024 | not_relevant | 5 | 0 | The paper is a qualitative review that mentions the potential for pharmacogenomic variation to affect these drugs, but it does not report or quantify a specific gene variant's effect on a PK/PD parameter. |
| popPK | Osawa_2019 | relevant | 10 | 2 | The paper is a population PK study for beclabuvir, but the extracted text lacks specific numeric parameter values (CL, V, etc.) which are likely in the full body or tables not provided. |
| popPK | Osawa_2019_2 | irrelevant | 0 | 0 | The paper is a safety exposure-response analysis, not a pharmacokinetic study, and it does not report any quantitative disposition parameters (clearance, volume, half-life, etc.) for beclabuvir. |
| PGx | Ramirez_2016 | not_relevant | 0 | 0 | The paper investigates viral escape variants (NS5B mutations) causing resistance, not human host pharmacogenomic variants affecting PK/PD. |
| PGx | Takaguchi_2019 | not_relevant | 0 | 0 | The paper reports real-world clinical outcomes (SVR rates) in a Japanese population but does not assess gene variants or genotypes affecting beclabuvir pharmacokinetics or pharmacodynamics. |
| popPK | Ueno_2019 | irrelevant | 0 | 0 | This is an exposure-response efficacy analysis for HCV treatment, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for beclabuvir. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper is a review of daclatasvir-containing regimens and does not report any pharmacogenomic effects on beclabuvir. |
| PGx | Zappulo_2020 | not_relevant | 1 | 1 | The paper is a clinical review of DCV-TRIO efficacy and safety, mentioning IL28B only as a non-predictor of SVR, and provides no data on pharmacogenomic effects on PK or PD parameters of beclabuvir. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
