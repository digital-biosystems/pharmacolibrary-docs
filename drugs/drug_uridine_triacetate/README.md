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
| 2026-09-30 03:16 | 3:15 | 0/0/0 | 0/0/0 | 0/0/0 | 6,099/823 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

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

<sub>queue written 2026-09-30T03:16:25.628084+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al_2021 | not_relevant | 1 | 2 | Reports clinical and biochemical improvement with uridine triacetate in a patient with a UMPS mutation, but does not quantify a genotype-dependent pharmacokinetic or pharmacodynamic parameter. |
| PGx | Baldeo_2018 | not_relevant | 0 | 0 | The case describes thymidylate synthase variation and response to uridine triacetate but does not report its effect on any uridine triacetate pharmacokinetic or pharmacodynamic parameter. |
| popPK | Hidalgo_2000 | irrelevant | 2 | 1 | PN401 (uridine triacetate) was administered, but only 5-FU PK parameters are reported and uridine exposure is described qualitatively without disposition values. |
| PGx | Jacob_2022 | not_relevant | 1 | 2 | The paper reports DPYD deficiency associated with severe 5-FU toxicity, but does not report a pharmacogenomic effect on any uridine triacetate PK or PD parameter. |
| PGx | Kats_2023 | not_relevant | 0 | 0 | The paper only notes normal DPYD genotypes in two fluorouracil overdose patients and reports no pharmacokinetic or pharmacodynamic effect on uridine triacetate. |
| PGx | Leung_2021 | not_relevant | 0 | 0 | The case describes DPYD-associated 5-fluorouracil toxicity and response to uridine triacetate, but reports no genotype-related PK or PD parameter for uridine triacetate. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper only mentions DPYD genotyping as a future consideration for capecitabine/5-FU toxicity and reports no genotype-related PK or PD effect for uridine triacetate. |
| popPK | Ma_2017 | irrelevant | 1 | 0 | This clinical antidote study reports outcomes and safety but no quantitative pharmacokinetic disposition parameters for uridine triacetate. |
| PD | Ma_2017 | not_relevant | 1 | 0 | Reports clinical survival and toxicity outcomes after uridine triacetate treatment but provides no exposure- or dose-response analysis and no numeric PD parameters or effect-versus-concentration relationship. |
| PGx | Matar_2026 | not_relevant | 0 | 0 | The case reports DPYD genotype and severe 5-FU toxicity, but does not evaluate a pharmacokinetic or pharmacodynamic parameter of uridine triacetate. |
| popPK | Miller_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter interactions (IC50 values) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for uridine triacetate. |
| PGx | Natarajan_2023 | not_relevant | 0 | 0 | The case reports normal DPD polymorphism/activity and 5-FU neurotoxicity treated with uridine triacetate, but does not evaluate a genomic effect on any uridine triacetate PK or PD parameter. |
| popPK | Saif_2006 | irrelevant | 0 | 0 | The study reports 5-FU pharmacokinetics, but no quantitative disposition parameters or numeric PK values for PN401 (uridine triacetate). |
| PGx | Saif_2007 | not_relevant | 0 | 0 | Reports DPD deficiency/genotype associated with 5-FU-related toxicity, but does not report a pharmacokinetic or pharmacodynamic parameter of uridine triacetate. |
| PGx | Saif_2016 | not_relevant | 0 | 0 | Reports DPYD deficiency associated with 5-FU toxicity and response to uridine triacetate, but does not report a pharmacokinetic or pharmacodynamic parameter of uridine triacetate affected by genotype or phenotype. |
| PGx | Saif_2019 | not_relevant | 0 | 0 | The paper discusses TYMS genotypes and capecitabine neurotoxicity, but reports no pharmacokinetic or pharmacodynamic parameter for uridine triacetate. |
| PGx | Shamaei_2025 | not_relevant | 0 | 0 | The paper describes a DPYD*2A-associated toxicity case involving capecitabine/fluorouracil and uridine triacetate treatment, but reports no pharmacokinetic or pharmacodynamic parameter of uridine triacetate. |
| popPK | Wan_2026 | irrelevant | 1 | 0 | TAU is a coadministered enhancer of trifluridine exposure, with no quantitative uridine-triacetate disposition parameters reported in the provided evidence. |
| popPK | Zurayk_2019 | irrelevant | 0 | 0 | This case report and review describes clinical use of uridine triacetate but provides no quantitative pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
