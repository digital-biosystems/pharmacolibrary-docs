<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;fabomotizole&quot;}]"></div>

# fabomotizole

- **generic name:** fabomotizole
- **ATC codes:** `N05BX04`
- **DrugBank:** [DB13623](https://go.drugbank.com/drugs/DB13623) · **PubChem:** not captured
- **molar mass:** 307.41 g/mol (C15H21N3O2S) — DrugBank
- **groups:** investigational

## About

Fabomotizole is an anxiolytic drug investigated for the treatment of anxiety disorders. It remains investigational and is not an approved medicine in the European Union or other major markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2090655](https://www.wikidata.org/wiki/Q2090655) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:45 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 13,580/1,113 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bastrygin_2011.pdf` | Bastrygin DV et al., [Pharmacokinetics of afobazole metaboli…, Eksperimental'naia i klinic… (2011) | popPK | 7 | not captured | [21894764](https://pubmed.ncbi.nlm.nih.gov/21894764) | PK study of afobazole's main metabolite M-11 in rats with some numeric values (bioavailability 68.3%, ~70% first-pass), but no CL/V/ka parameters reported. |
| `Seredenin_2007.pdf` | Seredenin SB et al., [Pharmacokinetics of afobazole in rats], Eksperimental'naia i klinic… (2007) | popPK | 7 | not captured | [17523455](https://pubmed.ncbi.nlm.nih.gov/17523455) | Rat PK study of afobazole (fabomotizole) with quantitative values (bioavailability 43.6%, tissue availability 0.584/0.793, excretion percentages), though no CL/V/compartmental parameters are given. |

<sub>queue written 2026-10-06T18:45:29.084474+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bochkov_2013 | irrelevant | 0 | 0 | no_text gate: only 304 chars of text extracted (&lt; 400) |
| popPK | Gribakina_2015 | irrelevant | 2 | 2 | Fabomotizole is only the interacting/inducing agent; PK parameters reported are for losartan (probe drug), and no numeric values appear in the evidence. |
| popPK | Shabelnyk_2026 | irrelevant | 0 | 0 | Fabomotizole is only a behavioral control comparator; no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
