<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;procarbazine&quot;}]"></div>

# procarbazine

- **generic name:** procarbazine
- **ATC codes:** `L01XB01`
- **DrugBank:** [DB01168](https://go.drugbank.com/drugs/DB01168) · **PubChem:** [CID 4915](https://pubchem.ncbi.nlm.nih.gov/compound/4915)
- **molar mass:** 221.2988 g/mol (C12H19N3O) — DrugBank
- **groups:** approved, investigational

## About

Procarbazine is an anticancer drug used to treat cancers such as Hodgkin's lymphoma, non-Hodgkin lymphoma, brain cancer, melanoma, and multiple myeloma. It is an approved medicine and is included on the WHO list of essential medicines, so it remains in clinical use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418656](https://www.wikidata.org/wiki/Q418656) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:34 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 8,844/705 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=procarbazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `MAOA` inhibitor, `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor, `XDH` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilde_2007.pdf` | Wilde S et al., Population pharmacokinetics of the BEAC…, Clinical pharmacokinetics (2007) | popPK | 8 | [10.2165/00003088-200746040-00005](https://doi.org/10.2165/00003088-200746040-00005) | [17375983](https://pubmed.ncbi.nlm.nih.gov/17375983) | The study performs population pharmacokinetic modeling for procarbazine as part of the BEACOPP regimen in humans, but the specific quantitative parameter values are not provided in the extracted evidence text. |
| `Ezzat_2012.pdf` | Ezzat HM et al., Incidence, predictors and significance…, Leukemia & lymphoma (2012) | pgx | 7 | [10.3109/10428194.2012.697560](https://doi.org/10.3109/10428194.2012.697560) | [22642935](https://www.ncbi.nlm.nih.gov/pubmed/22642935) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Villikka_1999.pdf` | Villikka K et al., Cytochrome P450-inducing antiepileptics…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1053/cp.1999.v66.103403001](https://doi.org/10.1053/cp.1999.v66.103403001) | [10613614](https://www.ncbi.nlm.nih.gov/pubmed/10613614) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T21:34:25.838957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delitheos_1995 | irrelevant | 0 | 0 | The study is an in-vitro investigation of antineoplastic agents on yeast (Saccharomyces cerevisiae) and reports no pharmacokinetic parameters for procarbazine. |
| PGx | Ewesuedo_2000 | not_relevant | 0 | 0 | The paper studies O6-benzylguanine (BG) in rats and investigates a drug-drug interaction (ketoconazole), not the pharmacogenetics of procarbazine. |
| PGx | Ezzat_2012 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions between vinblastine and protease inhibitors, and does not report pharmacogenomic effects on procarbazine. |
| PGx | Nakamura_2009 | not_relevant | 2 | 0 | The text discusses genetic markers (1p/19q LOH) for predicting general chemotherapy sensitivity and survival in gliomas, but does not report specific changes in pharmacokinetic or pharmacodynamic parameters of procarbazine. |
| PGx | Pretsch_1993 | not_relevant | 0 | 0 | Procarbazine was used only as a mutagen to create a mouse model of LDH deficiency; the paper does not study procarbazine's own pharmacokinetics or pharmacodynamics. |
| PGx | Shiba_1982 | not_relevant | 0 | 0 | The paper describes analytical methods for procarbazine and metabolites and presents pharmacokinetic data in rats and a single patient, but it does not report any association between genetic variants/genotypes and these PK or PD parameters. |
| PGx | Villikka_1999 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of vincristine, not procarbazine, and focuses on drug-drug interactions rather than pharmacogenomics. |
| PGx | Wahlang_2015 | not_relevant | 2 | 0 | The text is an introduction to a review chapter discussing the role of CYPs and genetic polymorphisms in drug metabolism but does not report specific data or fitted effect sizes for procarbazine PK/PD parameters. |
| popPK | Wilde_2007 | relevant | 8 | 0 | The study performs population pharmacokinetic modeling for procarbazine as part of the BEACOPP regimen in humans, but the specific quantitative parameter values are not provided in the extracted evidence text. |
| PGx | Wilde_2007 | not_relevant | 0 | 0 | The study reports population pharmacokinetics and covariates like CYP3A4 phenotyping effects, but does not report specific gene variant/genotype data or fitted pharmacogenomic parameters for procarbazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
