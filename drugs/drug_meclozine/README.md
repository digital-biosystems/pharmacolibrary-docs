<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;meclozine&quot;}]"></div>

# meclozine

- **generic name:** meclozine
- **ATC codes:** `R06AE05`
- **DrugBank:** [DB00737](https://go.drugbank.com/drugs/DB00737) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Meclozine is an antihistamine used to treat motion sickness and vertigo of central origin. It is an approved medication, widely available as an over-the-counter antiemetic, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q386441](https://www.wikidata.org/wiki/Q386441) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:29 | 8:10 | 0/0/0 | 0/0/0 | 0/0/0 | 86,707/1,767 | einfracz / qwen3.8-27b | 9 | 0/2 | 9/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 34 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Squires_2000.pdf` | Squires RF et al., Additivities of compounds that increase…, Neurochemical research (2000) | pd | 4 | [10.1023/a:1026666419725](https://doi.org/10.1023/a:1026666419725) | [11152388](https://www.ncbi.nlm.nih.gov/pubmed/11152388) | metadata signals extractable PD data (IC50) |
| `Wang_2012.pdf` | Wang Z et al., Meclizine metabolism and pharmacokineti…, Journal of clinical pharmac… (2012) | pgx | 8 | [10.1177/0091270011414575](https://doi.org/10.1177/0091270011414575) | [21903894](https://www.ncbi.nlm.nih.gov/pubmed/21903894) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T21:29:01.338930+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cornely_2021 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| PGx | Foo_2015 | not_relevant | 0 | 0 | The paper studies the in vitro enzyme inhibition and inactivation of CYP3A by meclizine but does not report any pharmacogenomic analysis (gene variants) affecting PK/PD parameters. |
| PGx | Ho_2023 | not_relevant | 0 | 0 | The paper studies transporter regulation by nuclear receptor ligands in porcine BBB cells and does not report pharmacogenomic effects of genetic variants on the PK/PD of meclozine. |
| PGx | Huang_2004 | not_relevant | 0 | 0 | The paper reports on species differences (mouse vs. human) in CAR receptor pharmacology, not a human pharmacogenomic effect of a specific gene variant on meclizine's PK/PD. |
| PGx | Lau_2011 | not_relevant | 0 | 0 | The paper investigates the mechanism of meclizine on nuclear receptors (hPXR/hCAR) but does not report pharmacogenomic effects of genetic variants on meclizine PK/PD. |
| popPK | OBrien_2010 | irrelevant | 0 | 0 | The study focuses on valspodar, mitoxantrone, and etoposide pharmacokinetics; meclozine is not mentioned. |
| popPK | Venail_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SENS-111, a different drug, not meclozine. |
| PGx | Wang_2012 | not_relevant | 5 | 0 | The paper mentions that CYP2D6 polymorphism contributes to interindividual variability, but it does not report specific quantitative pharmacokinetic or pharmacodynamic data stratified by genotype for meclizine. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic efficacy and safety (PONV prevention) and contains no pharmacokinetic parameters or compartmental models for meclozine. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
