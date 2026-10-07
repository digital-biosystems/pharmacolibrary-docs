<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;pramocaine&quot;}]"></div>

# pramocaine

- **generic name:** pramocaine
- **ATC codes:** `C05AD07`, `D04AB07`
- **DrugBank:** [DB09345](https://go.drugbank.com/drugs/DB09345) · **PubChem:** [CID 4886](https://pubchem.ncbi.nlm.nih.gov/compound/4886)
- **molar mass:** 293.407 g/mol (C17H27NO3) — DrugBank
- **groups:** approved

## About

Pramocaine is a topical local anesthetic used to relieve pain and itching from hemorrhoids, contact dermatitis, and other minor skin conditions. It is an approved drug, used mainly in topical preparations for hemorrhoids and skin itching.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1240076](https://www.wikidata.org/wiki/Q1240076) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:51 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 6,098/190 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pramocaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hirao_2018.pdf` | Hirao R et al., Compound action potential inhibition pr…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejphar.2017.11.047](https://doi.org/10.1016/j.ejphar.2017.11.047) | [29203420](https://www.ncbi.nlm.nih.gov/pubmed/29203420) | metadata signals extractable PD data (IC50) |
| `Magori_2019.pdf` | Magori N et al., Inhibition by general anesthetic propof…, Naunyn-Schmiedeberg's archi… (2019) | pd | 4 | [10.1007/s00210-018-01596-w](https://doi.org/10.1007/s00210-018-01596-w) | [30519707](https://www.ncbi.nlm.nih.gov/pubmed/30519707) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T22:50:56.242062+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hirao_2018 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Hirao_2018 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on nerve conduction and only mentions pramoxine (a different compound) as a comparator; it does not report any pharmacodynamic data or parameters for pramocaine. |
| popPK | Magori_2019 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Magori_2019 | not_relevant | 0 | 0 | The paper focuses on propofol and its analogs; pramocaine is not mentioned, and no PD parameters for it are reported. |
| popPK | Pinarbasli_2025 | irrelevant | 0 | 0 | The study is an in vitro formulation and release profile analysis, not a pharmacokinetic study reporting disposition parameters. |
| PD | Pinarbasli_2025 | not_relevant | 0 | 0 | The paper focuses on in vitro release and formulation stability, not pharmacodynamic or exposure-response relationships. |
| popPK | Weinberger_1980 | irrelevant | 0 | 0 | The paper describes an analytical method (HPLC) for pramoxine (a different drug) in a foam dosage form and contains no pharmacokinetic data. |
| PD | Weinberger_1980 | not_relevant | 0 | 0 | The paper describes an HPLC analytical method for pramoxine and contains no pharmacodynamic or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
