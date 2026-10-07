<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;carboprost&quot;}]"></div>

# carboprost

- **generic name:** carboprost
- **ATC codes:** `G02AD04`
- **DrugBank:** [DB19356](https://go.drugbank.com/drugs/DB19356) · **PubChem:** not captured
- **molar mass:** 368.514 g/mol (C21H36O5) — DrugBank
- **groups:** approved

## About

Carboprost is a prostaglandin used as a uterotonic and abortifacient, for example to induce abortion or control bleeding after childbirth. It is an approved drug, though it does not appear to have central European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5038067](https://www.wikidata.org/wiki/Q5038067) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:07 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 13,785/503 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morrison_2016.pdf` | Morrison JJ et al., In vitro contractile effects of agents…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejphar.2016.07.025](https://doi.org/10.1016/j.ejphar.2016.07.025) | [27423315](https://www.ncbi.nlm.nih.gov/pubmed/27423315) | metadata signals extractable PD data (EC50) |
| `Gong_1994.pdf` | Gong QY et al., Effects of endothelin-1 on isolated ute…, Zhongguo yao li xue bao = A… (1994) | pd | 4 | not captured | [8010105](https://www.ncbi.nlm.nih.gov/pubmed/8010105) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T08:07:47.769056+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balki_2015 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on myometrial contractility that reports no pharmacokinetic parameters (clearance, volume, half-life, etc.) for carboprost. |
| popPK | Crankshaw_2017 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic experiment investigating myometrial contractions, and carboprost is used only as a co-administered agonist, with no pharmacokinetic parameters reported. |
| popPK | Dagraca_2013 | irrelevant | 0 | 0 | The study evaluates the rate of postpartum hemorrhage as a clinical outcome and does not measure or report any pharmacokinetic parameters for carboprost. |
| popPK | Gong_1989 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of endothelin on porcine coronary arteries and does not investigate the pharmacokinetics of carboprost. |
| popPK | Gong_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of uterine contractility using carboprost as a comparator, containing no pharmacokinetic parameters. |
| popPK | Morrison_2016 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of contractile effects, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for carboprost. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
