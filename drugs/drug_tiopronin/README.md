<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;tiopronin&quot;}]"></div>

# tiopronin

- **generic name:** tiopronin
- **ATC codes:** `G04BX16`
- **DrugBank:** [DB06823](https://go.drugbank.com/drugs/DB06823) · **PubChem:** [CID 5483](https://pubchem.ncbi.nlm.nih.gov/compound/5483)
- **molar mass:** 163.19 g/mol (C5H9NO3S) — DrugBank
- **groups:** approved

## About

Tiopronin is a urological medicine used to treat cystinuria, a condition causing recurring kidney stones. It is an approved drug and is used in several countries, mainly as a second-line option when other measures are not enough.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414456](https://www.wikidata.org/wiki/Q414456) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:12 | 0:21 | 0/0/0 | 0/2/0 | 0/0/0 | 24,452/641 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ambanelli_1982_positive_response](drugs/drug_tiopronin/pd_Ambanelli_1982_positive_response.md) | positive response ← tiopronin · model not identified | — | Ambanelli U et al., Clinical efficacy and adverse effects o…, Zeitschrift fur Rheumatolog… (1982) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Jiang_2018_TEAC](drugs/drug_tiopronin/pd_Jiang_2018_TEAC.md) | antioxidant capacity ← tiopronin · stimulation effect | — | Jiang J et al., Determination of antioxidant capacity o…, Talanta (2018) | [10.1016/j.talanta.2018.02.098](https://doi.org/10.1016/j.talanta.2018.02.098) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tiopronin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MPO (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2008.pdf` | Liu FY et al., [Determination of tiopronin in rat plas…, Yao xue xue bao = Acta phar… (2008) | popPK | 5 | not captured | [18819478](https://pubmed.ncbi.nlm.nih.gov/18819478) | The study describes an HPLC method and mentions fitting data to a two-compartment model, but no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) are present in the provided text. |

<sub>queue written 2026-10-07T09:12:18.557850+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Goldsborough_2011 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions and reversal of multidrug resistance via P-gp/MRP1 downregulation in cell lines, rather than pharmacogenomic effects on tiopronin's own PK/PD. |
| popPK | Liu_2008 | irrelevant | 5 | 0 | The study describes an HPLC method and mentions fitting data to a two-compartment model, but no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) are present in the provided text. |
| popPK | Surrenti_1978 | irrelevant | 0 | 0 | The paper describes a therapeutic study on the antisteatosic effects of 2-MPG using liver biopsy and bile salt retention tests, with no quantitative pharmacokinetic parameters (CL, V, ka) reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
