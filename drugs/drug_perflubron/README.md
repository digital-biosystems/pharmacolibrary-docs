<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;perflubron&quot;}]"></div>

# perflubron

- **generic name:** perflubron
- **ATC codes:** `V08CX01`
- **DrugBank:** [DB05791](https://go.drugbank.com/drugs/DB05791) · **PubChem:** [CID 9873](https://pubchem.ncbi.nlm.nih.gov/compound/9873)
- **molar mass:** 498.962 g/mol (C8BrF17) — DrugBank
- **groups:** investigational

## About

Perflubron is a fluorinated contrast agent investigated for use as an imaging contrast medium, and it has also been studied as a radiosensitizer and anti-obesity medication. It remains investigational and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2190150](https://www.wikidata.org/wiki/Q2190150) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:07 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 20,373/1,149 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ni_1996.pdf` | Ni Y et al., Recent developments in pharmacokinetic…, Artificial cells, blood sub… (1996) | popPK | 8 | [10.3109/10731199609118876](https://doi.org/10.3109/10731199609118876) | [8907688](https://pubmed.ncbi.nlm.nih.gov/8907688) | Perflubron disposition is modeled using animal excretion data, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T19:07:39.228480+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartusik_2010 | irrelevant | 0 | 0 | This in vitro cell study reports no quantitative pharmacokinetic disposition parameters for perflubron. |
| popPK | Gherase_2006 | irrelevant | 0 | 0 | This is an in-vitro xenon exchange study, and its droplet-size and membrane-permeability values are not perflubron pharmacokinetic parameters. |
| popPK | Ni_1996 | relevant | 8 | 0 | Perflubron disposition is modeled using animal excretion data, but no numeric parameter values are provided in the evidence. |
| popPK | Schrader_1999 | irrelevant | 1 | 0 | This is a dose-maintenance device study, not a quantitative PK study, and no disposition parameter values are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
