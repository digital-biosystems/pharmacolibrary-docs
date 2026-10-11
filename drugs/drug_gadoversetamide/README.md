<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoversetamide&quot;}]"></div>

# gadoversetamide

- **generic name:** gadoversetamide
- **ATC codes:** `V08CA06`
- **DrugBank:** [DB00538](https://go.drugbank.com/drugs/DB00538) · **PubChem:** [CID 444013](https://pubchem.ncbi.nlm.nih.gov/compound/444013)
- **molar mass:** 661.76 g/mol (C20H34GdN5O10) — DrugBank
- **groups:** approved

## About

Gadoversetamide is a gadolinium-based contrast agent used to enhance images in magnetic resonance imaging.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5516432](https://www.wikidata.org/wiki/Q5516432) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:45 | 1:42 | 0/0/0 | 0/0/0 | 0/0/0 | 36,635/3,840 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gadoversetamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baker_2004.pdf` | Baker JF et al., Pharmacokinetics and safety of the MRI…, Investigative radiology (2004) | popPK | 10 | [10.1097/01.rli.0000124455.11402.52](https://doi.org/10.1097/01.rli.0000124455.11402.52) | [15167099](https://pubmed.ncbi.nlm.nih.gov/15167099) | The pediatric study reports numeric elimination half-lives, although clearance and volume values are not provided. |
| `Wible_2009.pdf` | Wible JH et al., Pharmacokinetics of gadoversetamide inj…, Magnetic resonance imaging (2009) | popPK | 10 | [10.1016/j.mri.2008.08.002](https://doi.org/10.1016/j.mri.2008.08.002) | [18814985](https://pubmed.ncbi.nlm.nih.gov/18814985) | Human gadoversetamide pharmacokinetics are studied, but numeric disposition parameter values are not provided in the evidence. |
| `Swan_1999.pdf` | Swan SK et al., Pharmacokinetics, safety, and tolerabil…, Journal of magnetic resonan… (1999) | popPK | 9 | [10.1002/(sici)1522-2586(199902)9:2&lt;317::aid-jmri25&gt;3.0.co;2-b](https://doi.org/10.1002/(sici)1522-2586(199902)9:2<317::aid-jmri25>3.0.co;2-b) | [10077031](https://pubmed.ncbi.nlm.nih.gov/10077031) | Human gadoversetamide pharmacokinetics are studied, but numeric disposition parameter values are not provided in the evidence. |

<sub>queue written 2026-10-07T18:45:32.627992+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Edward_2010 | irrelevant | 0 | 0 | This is an in-vitro fibroblast proliferation study, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Endrikat_2018 | irrelevant | 0 | 0 | This pharmacovigilance analysis reports no quantitative gadoversetamide disposition parameters. |
| popPK | Magnotti_2009 | irrelevant | 0 | 0 | This is an assay-validation study and reports no gadoversetamide disposition parameters. |
| popPK | Pietsch_2009 | irrelevant | 2 | 0 | The rat study measures skin gadolinium retention, not quantitative pharmacokinetic parameters for gadoversetamide. |
| popPK | Prybylski_2017 | irrelevant | 2 | 0 | This review and simulation does not provide readable numeric disposition parameters for gadoversetamide in the evidence. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The paper reports quantitative population-PK parameters for gadoterate meglumine, not gadoversetamide. |
| popPK | Swan_1999 | relevant | 9 | 1 | Human gadoversetamide pharmacokinetics are studied, but numeric disposition parameter values are not provided in the evidence. |
| popPK | Wible_2009 | relevant | 10 | 1 | Human gadoversetamide pharmacokinetics are studied, but numeric disposition parameter values are not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
