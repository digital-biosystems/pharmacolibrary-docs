<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;iptacopan&quot;}]"></div>

# iptacopan

- **generic name:** iptacopan
- **ATC codes:** `L04AJ08`
- **DrugBank:** [DB16200](https://go.drugbank.com/drugs/DB16200) · **PubChem:** not captured
- **molar mass:** 422.525 g/mol (C25H30N2O4) — DrugBank
- **groups:** approved, investigational

## About

Iptacopan is a complement inhibitor used to treat paroxysmal nocturnal hemoglobinuria. It is an approved medicine authorised in the European Union, with further uses still under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76803684](https://www.wikidata.org/wiki/Q76803684) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:04 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 6,144/307 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iptacopan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `UGT1A1` substrate, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CFB (inhibitor), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baltcheva_2026.pdf` | Baltcheva I et al., Randomised, phase 1 evaluation of the s…, British journal of pharmaco… (2026) | popPK | 8 | [10.1111/bph.70339](https://doi.org/10.1111/bph.70339) | [41701988](https://pubmed.ncbi.nlm.nih.gov/41701988) | The paper describes a population PK/PD modeling study for iptacopan in humans, but specific quantitative parameters (CL, V, etc.) are not listed in the provided evidence, only the half-life range and a reference to semi-mechanistic models. |

<sub>queue written 2026-10-15T04:04:01.679787+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baltcheva_2026 | relevant | 8 | 2 | The paper describes a population PK/PD modeling study for iptacopan in humans, but specific quantitative parameters (CL, V, etc.) are not listed in the provided evidence, only the half-life range and a reference to semi-mechanistic models. |
| PGx | James_2023 | not_relevant | 0 | 0 | The paper describes the ADME of iptacopan in healthy volunteers but does not report any association between gene variants/genotypes and pharmacokinetic or pharmacodynamic parameters. |
| PGx | Niazi_2026 | not_relevant | 0 | 0 | The paper is a review of therapeutic alternatives to biologics and mentions iptacopan's clinical efficacy (transfusion independence) but does not report pharmacogenomic effects on its PK or PD parameters. |
| PGx | Versino_2025 | not_relevant | 0 | 0 | The paper is a clinical review on patient profiling for PNH treatment and does not report any pharmacogenomic effects on the PK or PD of iptacopan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
