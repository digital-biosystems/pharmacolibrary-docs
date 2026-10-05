<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;uridine triacetate&quot;}]"></div>

# uridine triacetate

- **generic name:** uridine triacetate
- **ATC codes:** `A16AX13`
- **DrugBank:** [DB09144](https://go.drugbank.com/drugs/DB09144) · **PubChem:** [CID 20058](https://pubchem.ncbi.nlm.nih.gov/compound/20058)
- **molar mass:** 370.314 g/mol (C15H18N2O9) — DrugBank
- **groups:** approved

## About

Uridine triacetate is an approved medicine classified among other products for the alimentary tract and metabolism. It is an approved drug, though the available facts do not specify where it is marketed or how widely it is used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075857](https://www.wikidata.org/wiki/Q22075857) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:10 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 14,763/1,219 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=uridine_triacetate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 19 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Leung_2021.pdf` | Leung M et al., Use of Uridine Triacetate to Reverse Se…, Clinical colorectal cancer (2021) | pgx | 8 | [10.1016/j.clcc.2021.03.002](https://doi.org/10.1016/j.clcc.2021.03.002) | [33965356](https://www.ncbi.nlm.nih.gov/pubmed/33965356) | metadata signals extractable PGX data (DPYD, PK/PD-context) |
| `Kats_2023.pdf` | Kats CJ et al., Two patients with fluoropyrimidine over…, Journal of oncology pharmac… (2023) | pgx | 5 | [10.1177/10781552231189818](https://doi.org/10.1177/10781552231189818) | [37499216](https://www.ncbi.nlm.nih.gov/pubmed/37499216) | metadata signals extractable PGX data (DPYD) |
| `Saif_2007.pdf` | Saif MW et al., DIHYDROPYRIMIDINE DEHYDROGENASE DEFICIE…, Pakistan journal of medical… (2007) | pgx | 5 | not captured | [18846242](https://www.ncbi.nlm.nih.gov/pubmed/18846242) | metadata signals extractable PGX data (DPYD) |
| `Saif_2016.pdf` | Saif MW et al., Benefit of uridine triacetate (Vistogar…, Cancer chemotherapy and pha… (2016) | pgx | 5 | [10.1007/s00280-016-3063-1](https://doi.org/10.1007/s00280-016-3063-1) | [27278667](https://www.ncbi.nlm.nih.gov/pubmed/27278667) | metadata signals extractable PGX data (DPYD) |

<sub>queue written 2026-10-05T12:09:32.479709+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al_2021 | not_relevant | 0 | 0 | The paper reports a clinical case of a genetic disorder treated with uridine triacetate but does not analyze how the genotype affects the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Baldeo_2018 | not_relevant | 2 | 0 | The paper is a case report describing the clinical efficacy of uridine triacetate in a patient with a specific genotype, but it does not report quantitative changes in PK or PD parameters of uridine triacetate itself. |
| popPK | Hidalgo_2000 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fluorouracil (5-FU), not uridine triacetate (PN401), and only provides qualitative descriptions of uridine concentrations without quantitative PK model parameters for the subject drug. |
| PGx | Jacob_2022 | not_relevant | 0 | 0 | The paper is a case report on the clinical use of uridine triacetate for toxicity management and does not report pharmacokinetic or pharmacodynamic parameters of uridine triacetate itself. |
| PGx | Kats_2023 | not_relevant | 0 | 0 | The paper describes clinical management of overdose without the drug and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Leung_2021 | not_relevant | 2 | 1 | The paper reports a clinical case of uridine triacetate use in a patient with a DPYD variant, but it does not report pharmacokinetic or pharmacodynamic parameters of uridine triacetate itself being altered by the genotype. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper is a case report of capecitabine toxicity that only speculates about the future utility of DPYD genotyping and does not report any pharmacogenomic effects on PK or PD parameters of uridine triacetate. |
| popPK | Ma_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study of uridine triacetate as an antidote, reporting survival and toxicity outcomes rather than pharmacokinetic parameters. |
| PD | Ma_2017 | not_relevant | 1 | 0 | Reports clinical survival and toxicity outcomes after uridine triacetate treatment but provides no exposure- or dose-response analysis and no numeric PD parameters or effect-versus-concentration relationship. |
| PGx | Matar_2026 | not_relevant | 0 | 0 | The paper is a case report of fatal 5-FU toxicity despite uridine triacetate rescue and does not report a pharmacogenomic effect on the PK or PD parameters of uridine triacetate itself. |
| popPK | Miller_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter interactions (IC50 values) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for uridine triacetate. |
| PGx | Natarajan_2023 | not_relevant | 0 | 0 | The paper is a case report of 5-FU toxicity treated with uridine triacetate and does not report pharmacogenomic effects on the PK or PD parameters of uridine triacetate itself. |
| popPK | Saif_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-fluorouracil, not uridine triacetate (PN401), which is used as a rescue agent. |
| PGx | Saif_2007 | not_relevant | 0 | 0 | The paper discusses DPD deficiency and its effect on 5-Fluorouracil and capecitabine, not uridine triacetate. |
| PGx | Saif_2016 | not_relevant | 2 | 5 | The paper reports clinical outcomes (toxicity delay) in DPYD-deficient patients treated with uridine triacetate, but does not report pharmacokinetic or pharmacodynamic parameters of uridine triacetate itself. |
| PGx | Saif_2019 | not_relevant | 0 | 0 | The paper discusses capecitabine pharmacogenetics and toxicity, but does not report any pharmacokinetic or pharmacodynamic parameters for uridine triacetate. |
| PGx | Shamaei_2025 | not_relevant | 0 | 0 | The paper is a case report on DPD deficiency and capecitabine toxicity, mentioning uridine triacetate only as a rescue treatment without reporting any pharmacokinetic or pharmacodynamic parameters for uridine triacetate itself. |
| popPK | Wan_2026 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of trifluridine (FTD) and the effect of uridine triacetate (TAU) as a co-administered enzyme inhibitor, rather than reporting quantitative disposition parameters (CL, V, etc.) for uridine triacetate itself. |
| popPK | Zurayk_2019 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the therapeutic use of uridine triacetate as an antidote for capecitabine toxicity, not a pharmacokinetic study reporting quantitative disposition parameters for uridine triacetate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
