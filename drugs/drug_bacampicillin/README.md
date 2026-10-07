<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;bacampicillin&quot;}]"></div>

# bacampicillin

- **generic name:** bacampicillin
- **ATC codes:** `J01CA06`
- **DrugBank:** [DB01602](https://go.drugbank.com/drugs/DB01602) · **PubChem:** [CID 441397](https://pubchem.ncbi.nlm.nih.gov/compound/441397)
- **molar mass:** 465.52 g/mol (C21H27N3O7S) — DrugBank
- **groups:** approved, withdrawn

## About

Bacampicillin is a penicillin antibiotic used to treat infections such as gonorrhea, listeriosis, urinary tract and upper respiratory tract infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2878140](https://www.wikidata.org/wiki/Q2878140) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:00 | 2:11 | 0/0/0 | 0/0/0 | 0/0/0 | 54,456/1,111 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bacampicillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ehrnebo_1979.pdf` | Ehrnebo M et al., Pharmacokinetics of ampicillin and its…, Journal of pharmacokinetics… (1979) | popPK | 10 | [10.1007/BF01062386](https://doi.org/10.1007/BF01062386) | [529016](https://pubmed.ncbi.nlm.nih.gov/529016) | The study is a PK crossover trial in humans that explicitly reports quantitative parameters for bacampicillin, including bioavailability (86 +/- 11%), absorption rate (0.89 +/- 0.39 fraction/min), and lag time (7.0 +/- 0.9 min), noting that absorption was zero-order. |
| `Ripa_1988.pdf` | Ripa S et al., Pharmacokinetics of bacampicillin using…, Chemotherapy (1988) | popPK | 9 | [10.1159/000238552](https://doi.org/10.1159/000238552) | [3391055](https://pubmed.ncbi.nlm.nih.gov/3391055) | The study reports PK parameters (Cmax, t1/2, AUC, absorption duration) for bacampicillin in humans, but specific clearance (CL) or volume (V) values are not explicitly listed in the provided text, only derived metrics. |
| `Yamane_1986.pdf` | Yamane N et al., Blood levels and distribution of talamp…, The Tokai journal of experi… (1986) | popPK | 8 | not captured | [3564081](https://pubmed.ncbi.nlm.nih.gov/3564081) | The study reports PK parameters for bacampicillin in rabbits, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-07T10:59:55.327107+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carbon_1978 | relevant | 4 | 0 | The study reports PK comparisons for bacampicillin in rabbits but the provided evidence contains no numeric parameter values (CL, V, ka, etc.). |
| popPK | Padoin_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cephalexin in rats, not bacampicillin. |
| popPK | Ripa_1988 | relevant | 9 | 4 | The study reports PK parameters (Cmax, t1/2, AUC, absorption duration) for bacampicillin in humans, but specific clearance (CL) or volume (V) values are not explicitly listed in the provided text, only derived metrics. |
| popPK | Yamane_1986 | relevant | 8 | 0 | The study reports PK parameters for bacampicillin in rabbits, but the specific numeric values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
