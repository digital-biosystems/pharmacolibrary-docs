<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;valpromide&quot;}]"></div>

# valpromide

- **generic name:** valpromide
- **ATC codes:** `N03AG02`
- **DrugBank:** [DB04165](https://go.drugbank.com/drugs/DB04165) · **PubChem:** [CID 71113](https://pubchem.ncbi.nlm.nih.gov/compound/71113)
- **molar mass:** 143.2267 g/mol (C8H17NO) — DrugBank
- **groups:** investigational

## About

Valpromide is a fatty acid derivative with anticonvulsant properties, studied for the treatment of epilepsy. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q847560](https://www.wikidata.org/wiki/Q847560) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:00 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 5,019/271 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Isoherranen_2003.pdf` | Isoherranen N et al., Pharmacokinetic-pharmacodynamic relatio…, Pharmaceutical research (2003) | pd | 5 | [10.1023/a:1025069519218](https://doi.org/10.1023/a:1025069519218) | [12948028](https://www.ncbi.nlm.nih.gov/pubmed/12948028) | metadata signals extractable PD data (EC50) |
| `Rosa_2016.pdf` | Rosa M et al., Prediction of drug-drug interactions wi…, Xenobiotica; the fate of fo… (2016) | pgx | 7 | [10.3109/00498254.2016.1151088](https://doi.org/10.3109/00498254.2016.1151088) | [26936324](https://www.ncbi.nlm.nih.gov/pubmed/26936324) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T08:00:33.464589+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Isoherranen_2003 | relevant | 4 | 2 | The study is a PK/PD evaluation of valnoctamide stereoisomers in rodents where valpromide is used as a reference, and the abstract mentions qualitative PK changes (clearance, half-life) for the valnoctamide compounds but lacks specific numeric parameter values for valpromide in the provided evidence. |
| PGx | Rosa_2016 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (DDI) regarding epoxide hydrolase inhibition and does not report pharmacogenomic effects of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The text discusses carbamazepine pharmacokinetic interactions (including those with valpromide) but does not report any pharmacogenomic effects on a PK or PD parameter of valpromide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
