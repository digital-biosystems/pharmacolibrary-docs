<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;triheptanoin&quot;}]"></div>

# triheptanoin

- **generic name:** triheptanoin
- **ATC codes:** `A16AX17`
- **DrugBank:** [DB11677](https://go.drugbank.com/drugs/DB11677) · **PubChem:** [CID 69286](https://pubchem.ncbi.nlm.nih.gov/compound/69286)
- **molar mass:** 428.61 g/mol (C24H44O6) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Triheptanoin is a source of heptanoate fatty acids, which can be metabolized without the enzymes of long chain fatty acid oxidation.[L14612] In clinical trials, patients with long chain fatty acid oxidation disorders (lc-FAODs) treated with triheptanoin are less likely to develop hypoglycemia, cardiomyopathy, rhabdomyolysis, and hepatomegaly.[A214812,A214817] Complications in lc-FAOD patients are reduced from approximately 60% to approximately 10% with the addition of triheptanoin.[A214817]

Triheptanoin was granted FDA approval on 30 June 2020.[L14612]

**Indication.** Triheptanoin is a medium chain triglyceride indicated to provide calories and fatty acids to treat long chain fatty acid oxidation disorders (lc-FAODs).[L14612]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:13 | 1:21 | 0/0/0 | 0/0/0 | 0/0/0 | 3,201/375 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 0/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triheptanoin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>“…minimally eliminated in the urine…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2021.pdf` | Lee SK et al., The Pharmacokinetics of Triheptanoin an…, Clinical pharmacology in dr… (2021) | popPK | 7 | [10.1002/cpdd.944](https://doi.org/10.1002/cpdd.944) | [33789001](https://pubmed.ncbi.nlm.nih.gov/33789001) | This is an original human triheptanoin pharmacokinetic study, but no numeric disposition parameter values are present in the provided evidence. |

<sub>queue written 2026-09-30T03:13:09.969909+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrose_2026 | not_relevant | 0 | 0 | The ALDH7A1 variants define the underlying disease, but the paper does not report their effect on any triheptanoin pharmacokinetic or pharmacodynamic parameter. |
| popPK | Lee_2021 | relevant | 7 | 0 | This is an original human triheptanoin pharmacokinetic study, but no numeric disposition parameter values are present in the provided evidence. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The model quantifies heptanoate, a triheptanoin metabolite, and provides no numeric disposition parameters for triheptanoin itself. |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | The paper discusses triheptanoin efficacy in fatty acid oxidation disorders but does not report genotype- or phenotype-dependent effects on triheptanoin pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yoon_2026 | irrelevant | 0 | 0 | This is a clinical safety and efficacy study with no quantitative pharmacokinetic disposition parameters for triheptanoin. |
| PGx | Zimmern_2022 | not_relevant | 0 | 0 | The review only states that triheptanoin efficacy in GLUT1 deficiency is unclear and reports no genotype-related pharmacokinetic or pharmacodynamic parameter effect. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
