<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;elacestrant&quot;}]"></div>

# elacestrant

- **generic name:** elacestrant
- **ATC codes:** `L02BA04`
- **DrugBank:** [DB06374](https://go.drugbank.com/drugs/DB06374) · **PubChem:** not captured
- **molar mass:** 458.646 g/mol (C30H38N2O2) — DrugBank
- **groups:** approved, investigational

## About

Elacestrant is an anti-estrogen medicine used to treat breast cancer. It is an approved drug and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27278069](https://www.wikidata.org/wiki/Q27278069) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:20 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 10,678/416 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=elacestrant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor, `SLCO2B1` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor, `SLCO2B1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ESR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beumer_2023.pdf` | Beumer JH et al., Pharmacology and pharmacokinetics of el…, Cancer chemotherapy and pha… (2023) | pgx | 7 | [10.1007/s00280-023-04550-7](https://doi.org/10.1007/s00280-023-04550-7) | [37314500](https://www.ncbi.nlm.nih.gov/pubmed/37314500) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T22:20:09.098413+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Beumer_2023 | not_relevant | 2 | 0 | The text describes general pharmacokinetics (CYP3A4 metabolism) and clinical indication (ESR1-mut) but does not report gene-based differences in PK/PD parameters or fitted effect sizes for a pharmacogenomic interaction. |
| popPK | De_2023 | irrelevant | 2 | 0 | The text is a review/short perspective summarizing general properties and PK without providing specific quantitative parameter values (e.g., CL, V, ka) for elacestrant. |
| PGx | Keup_2023 | not_relevant | 0 | 0 | The text is a review on liquid biopsy technologies (cfDNA, CTCs) for monitoring breast cancer therapy and detecting mutations like ESR1, but it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of elacestrant. |
| PGx | Lu_2024 | not_relevant | 0 | 0 | The paper discusses general CYP3A4 metabolism and scaffold optimization to improve PK properties, but does not report any specific gene variant or genotype affecting elacestrant's PK or PD parameters. |
| popPK | Shah_2018 | irrelevant | 0 | 0 | The paper is a historical overview and review of breast cancer brain metastases treatments that mentions "estrogen pathway antagonists" in general but does not provide specific quantitative pharmacokinetic parameters for elacestrant. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
