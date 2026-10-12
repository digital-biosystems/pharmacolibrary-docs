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

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fenoprofen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PPARA (activator), PPARG (activator), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
