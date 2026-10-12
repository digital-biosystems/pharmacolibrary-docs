<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;Norelgestromin&quot;}]"></div>

# Norelgestromin

- **generic name:** Norelgestromin
- **ATC codes:** `G03AA13`
- **DrugBank:** [DB06713](https://go.drugbank.com/drugs/DB06713) · **PubChem:** [CID 62930](https://pubchem.ncbi.nlm.nih.gov/compound/62930)
- **molar mass:** 327.468 g/mol (C21H29NO2) — DrugBank
- **groups:** approved, investigational

## About

Norelgestromin is a progestogen used in hormonal contraceptives, in fixed combination with an estrogen, and has also been used to treat amenorrhea. It is an approved drug, used in contraceptive products such as skin patches, though it is not listed as authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15295638](https://www.wikidata.org/wiki/Q15295638) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:31 | 2:33 | 0/0/0 | 0/0/0 | 0/0/0 | 63,149/769 | einfracz / qwen3.8-27b | 5 | 0/3 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahire_2017.pdf` | Ahire D et al., Metabolite Identification, Reaction Phe…, Drug metabolism and disposi… (2017) | pgx | 7 | [10.1124/dmd.116.073940](https://doi.org/10.1124/dmd.116.073940) | [28283499](https://www.ncbi.nlm.nih.gov/pubmed/28283499) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chiu_2014.pdf` | Chiu YY et al., Lurasidone drug-drug interaction studie…, Drug metabolism and drug in… (2014) | pgx | 7 | [10.1515/dmdi-2014-0005](https://doi.org/10.1515/dmdi-2014-0005) | [24825095](https://www.ncbi.nlm.nih.gov/pubmed/24825095) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T08:30:50.255173+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bifano_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (daclatasvir) affecting PK, not a pharmacogenomic effect. |
| PGx | Chiu_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with lurasidone and reports no significant effect on norelgestromin, and it does not report any pharmacogenomic effects. |
| popPK | Jensen_2023 | irrelevant | 0 | 0 | The paper describes a method validation for measuring multiple progestins including norelgestromin, but does not report pharmacokinetic parameters (CL, V, ka) for norelgestromin. |
| PGx | Massaro_2010 | not_relevant | 0 | 0 | The study compares the bone metabolic effects of two contraceptives but does not report any pharmacogenomic analysis involving gene variants. |
| popPK | Paris_2015 | irrelevant | 0 | 0 | The paper studies the molecular action of norgestimate (NG), not norelgestromin, and reports in vitro receptor binding/activation data rather than pharmacokinetic parameters. |
| popPK | Posada_2025 | irrelevant | 2 | 0 | The paper models norelgestromin only as a co-administered drug to predict the impact of dulaglutide-induced gastric emptying delay, and specific quantitative disposition parameters (CL, V, Q, ka) are not reported in the text. |
| popPK | Trujillo-de_2014 | irrelevant | 3 | 2 | The study is a mathematical modeling paper that simulates PK profiles using parameters cited from other sources, and it does not report primary quantitative compartmental PK parameters (such as specific clearance or volume of distribution values) for norelgestromin in the text evidence provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
