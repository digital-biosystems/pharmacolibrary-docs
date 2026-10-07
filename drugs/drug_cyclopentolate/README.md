<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01F&quot;,&quot;href&quot;:&quot;atc/S01F.md&quot;},{&quot;label&quot;:&quot;cyclopentolate&quot;}]"></div>

# cyclopentolate

- **generic name:** cyclopentolate
- **ATC codes:** `S01FA04`
- **DrugBank:** [DB00979](https://go.drugbank.com/drugs/DB00979) · **PubChem:** [CID 2905](https://pubchem.ncbi.nlm.nih.gov/compound/2905)
- **molar mass:** 291.3853 g/mol (C17H25NO3) — DrugBank
- **groups:** approved

## About

Cyclopentolate is an anticholinergic eye drop used as a mydriatic and cycloplegic, for example to dilate the pupil before eye examinations. It is an approved medicine and is widely used in ophthalmic practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q867332](https://www.wikidata.org/wiki/Q867332) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:10 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 17,040/557 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cyclopentolate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huupponen_1992.pdf` | Huupponen R et al., The effect of some macromolecular ionic…, Journal of ocular pharmacol… (1992) | popPK | 9 | [10.1089/jop.1992.8.59](https://doi.org/10.1089/jop.1992.8.59) | [1402295](https://pubmed.ncbi.nlm.nih.gov/1402295) | The study reports PK/PD of cyclopentolate in rabbits, but the provided text only contains qualitative findings (increased mydriatic effect, 3-fold increase in ocular penetration) without specific numeric PK parameters (CL, V, t1/2, etc.). |
| `Ishikawa_1998.pdf` | Ishikawa H et al., Selectivity of muscarinic agonists incl…, Journal of ocular pharmacol… (1998) | pd | 4 | [10.1089/jop.1998.14.363](https://doi.org/10.1089/jop.1998.14.363) | [9715440](https://www.ncbi.nlm.nih.gov/pubmed/9715440) | metadata signals extractable PD data (EC50) |
| `Qi_2005.pdf` | Qi L et al., Quantitative determination of pharmaceu…, Journal of pharmaceutical a… (2005) | pd | 4 | [10.1016/j.jpba.2004.09.023](https://doi.org/10.1016/j.jpba.2004.09.023) | [15708661](https://www.ncbi.nlm.nih.gov/pubmed/15708661) | metadata signals extractable PD data (concentrationeffect) |

<sub>queue written 2026-10-07T19:10:12.958584+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bryant_2009 | irrelevant | 0 | 0 | This is a toxicity/pharmacodynamic study assessing survivability in rats, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Huupponen_1992 | relevant | 9 | 0 | The study reports PK/PD of cyclopentolate in rabbits, but the provided text only contains qualitative findings (increased mydriatic effect, 3-fold increase in ocular penetration) without specific numeric PK parameters (CL, V, t1/2, etc.). |
| popPK | Ishikawa_1998 | irrelevant | 0 | 0 | The study reports pKB values for muscarinic receptors in human intraocular tissues, which is a pharmacodynamic/receptor binding study, not a pharmacokinetic study of cyclopentolate. |
| popPK | Lovasik_1986 | irrelevant | 1 | 0 | The study measures the pharmacodynamic effect (accommodative loss/cycloplegia) rather than quantifying pharmacokinetic parameters like clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
