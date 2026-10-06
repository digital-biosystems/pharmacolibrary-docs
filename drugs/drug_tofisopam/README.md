<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;tofisopam&quot;}]"></div>

# tofisopam

- **generic name:** tofisopam
- **ATC codes:** `N05BA23`
- **DrugBank:** [DB08811](https://go.drugbank.com/drugs/DB08811) · **PubChem:** [CID 5502](https://pubchem.ncbi.nlm.nih.gov/compound/5502)
- **molar mass:** 382.4528 g/mol (C22H26N2O4) — DrugBank
- **groups:** investigational

## About

Tofisopam is a benzodiazepine-derivative anxiolytic used to treat anxiety, and has also been described as having antidepressant properties. It is not approved in the United States and is considered investigational there, though it has been used in some European countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q945537](https://www.wikidata.org/wiki/Q945537) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:13 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 10,111/458 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tofisopam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PDE10A (inhibitor), PDE2A (inhibitor), PDE3A (inhibitor), PDE4A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Drabant_2006.pdf` | Drabant S et al., Effect of tofisopam on the single-oral-…, European journal of clinica… (2006) | pgx | 7 | [10.1007/s00228-006-0160-9](https://doi.org/10.1007/s00228-006-0160-9) | [16791582](https://www.ncbi.nlm.nih.gov/pubmed/16791582) | metadata signals extractable PGX data (cyp3a4, PK/PD-context) |
| `Tóth_2008.pdf` | Tóth M et al., Tofisopam inhibits the pharmacokinetics…, European journal of clinica… (2008) | pgx | 7 | [10.1007/s00228-007-0397-y](https://doi.org/10.1007/s00228-007-0397-y) | [17989974](https://www.ncbi.nlm.nih.gov/pubmed/17989974) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T20:13:35.755394+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cameron_2007 | not_relevant | 2 | 5 | Identifies CYP enzymes metabolizing tofisopam enantiomers but reports no gene variant/genotype effect on PK/PD parameters. |
| PGx | Drabant_2006 | not_relevant | 0 | 0 | Study examines tofisopam's drug-drug interaction with alprazolam via CYP3A4 inhibition, not a gene variant/genotype effect on PK/PD parameters. |
| PGx | Niwa_2005 | not_relevant | 2 | 5 | In vitro CYP phenotyping of tofisopam metabolism; no gene variant/genotype effect on PK/PD parameters in humans. |
| popPK | Turan_2022 | irrelevant | 0 | 0 | Behavioral/pharmacology study in mice with no PK parameters for tofisopam. |
| PGx | Tóth_2005 | not_relevant | 0 | 5 | Reports tofisopam's inhibition of CYP3A4 enzyme activity (drug effect on enzyme), not a gene variant/genotype effect on tofisopam PK/PD. |
| PGx | Tóth_2008 | not_relevant | 2 | 5 | Reports tofisopam's inhibition of CYP3A4-mediated midazolam PK, a drug-drug interaction, not a gene variant/genotype effect on tofisopam's PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
