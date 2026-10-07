<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;fenoprofen&quot;}]"></div>

# fenoprofen

- **generic name:** fenoprofen
- **ATC codes:** `M01AE04`
- **DrugBank:** [DB00573](https://go.drugbank.com/drugs/DB00573) · **PubChem:** [CID 3342](https://pubchem.ncbi.nlm.nih.gov/compound/3342)
- **molar mass:** 242.2699 g/mol (C15H14O3) — DrugBank
- **groups:** approved

## About

Fenoprofen is a non-steroidal anti-inflammatory drug used to treat pain, osteoarthritis, and rheumatoid arthritis. It is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2555245](https://www.wikidata.org/wiki/Q2555245) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:49 | 0:18 | 0/0/0 | 0/1/0 | 0/0/0 | 25,330/1,419 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Poggi_2006_PGE2](drugs/drug_fenoprofen/pd_Poggi_2006_PGE2.md) | prostaglandin E2 ← fenoprofen · direct sigmoid Emax (Hill) effect | — | Poggi JC et al., Pharmacodynamics, chiral pharmacokineti…, Journal of clinical pharmac… (2006) | [10.1177/0091270006293072](https://doi.org/10.1177/0091270006293072) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Poggi_2006_TXB2](drugs/drug_fenoprofen/pd_Poggi_2006_TXB2.md) | thromboxane B2 ← fenoprofen · direct sigmoid Emax (Hill) effect | — | Poggi JC et al., Pharmacodynamics, chiral pharmacokineti…, Journal of clinical pharmac… (2006) | [10.1177/0091270006293072](https://doi.org/10.1177/0091270006293072) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fenoprofen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PPARA (activator), PPARG (activator), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Poggi_2006.pdf` | Poggi JC et al., Pharmacodynamics, chiral pharmacokineti…, Journal of clinical pharmac… (2006) | popPK | 10 | [10.1177/0091270006293072](https://doi.org/10.1177/0091270006293072) | [17050798](https://pubmed.ncbi.nlm.nih.gov/17050798) | The study reports specific quantitative pharmacokinetic parameters (oral clearance and AUC) for fenoprofen in human subjects within the abstract. |
| `Nielsen-Kudsk_1980.pdf` | Nielsen-Kudsk F, HPLC-determination of some antiinflamma…, Acta pharmacologica et toxi… (1980) | popPK | 5 | [10.1111/j.1600-0773.1980.tb03653.x](https://doi.org/10.1111/j.1600-0773.1980.tb03653.x) | [6970498](https://pubmed.ncbi.nlm.nih.gov/6970498) | The paper describes an HPLC method applicable to fenoprofen and provides PK parameters, but the explicit quantitative values provided in the evidence are for naproxen, not fenoprofen. |

<sub>queue written 2026-10-07T00:49:01.011518+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Koncic_2009 | irrelevant | 0 | 0 | The paper investigates the in-vitro antioxidant, radical scavenging, and metal chelating properties of hydroxamic acid derivatives of fenoprofen, not the pharmacokinetic parameters (CL, V, etc.) of fenoprofen itself. |
| popPK | Láng_2012 | irrelevant | 0 | 0 | The study is an ecotoxicology experiment on the ciliate Tetrahymena pyriformis measuring proliferation and migration, not a pharmacokinetic study of fenoprofen disposition parameters. |
| popPK | Nielsen-Kudsk_1980 | irrelevant | 5 | 0 | The paper describes an HPLC method applicable to fenoprofen and provides PK parameters, but the explicit quantitative values provided in the evidence are for naproxen, not fenoprofen. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro receptor binding experiment examining the potentiation of GABA-antagonistic effects by fenoprofen, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
