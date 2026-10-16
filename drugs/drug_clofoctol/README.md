<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;clofoctol&quot;}]"></div>

# clofoctol

- **generic name:** clofoctol
- **ATC codes:** `J01XX03`
- **DrugBank:** [DB13237](https://go.drugbank.com/drugs/DB13237) · **PubChem:** not captured
- **molar mass:** 365.34 g/mol (C21H26Cl2O) — DrugBank
- **groups:** experimental

## About

Clofoctol is an antibacterial drug that was used to treat upper respiratory tract infections. It is currently listed only as an experimental compound and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3680895](https://www.wikidata.org/wiki/Q3680895) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 10:58 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 26,771/466 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alessandrì_1986.pdf` | Alessandrì MG et al., The pharmacokinetic profile of clofocto…, Drugs under experimental an… (1986) | popPK | 8 | not captured | [3720520](https://pubmed.ncbi.nlm.nih.gov/3720520) | The paper reports quantitative pharmacokinetic parameters (Cmax, Tmax, T1/2) for clofoctol in rats, though full compartmental model parameters (CL, V) are not explicitly listed. |
| `Scaglione_2012.pdf` | Scaglione F et al., In vitro and in vivo pharmacokinetic/ph…, Journal of chemotherapy (Fl… (2012) | popPK | 6 | [10.1179/1973947812Y.0000000018](https://doi.org/10.1179/1973947812Y.0000000018) | [23040683](https://pubmed.ncbi.nlm.nih.gov/23040683) | The study reports PK/PD relationships and an AUC/MIC ratio but lacks specific quantitative disposition parameters (CL, V, ka) in the provided evidence, which are likely in the full text or figures not included. |
| `del_1983.pdf` | del Tacca M et al., The pharmacokinetics of clofoctol in he…, Biological research in preg… (1983) | popPK | 6 | not captured | [6652171](https://pubmed.ncbi.nlm.nih.gov/6652171) | The paper is a primary PK study of clofoctol in neonates and adults, but the evidence text contains no specific numeric values for parameters (CL, V, Ka, etc.), only qualitative comparisons and timing. |

<sub>queue written 2026-10-13T10:58:51.255817+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belouzard_2022 | irrelevant | 4 | 2 | The study is primarily an antiviral efficacy and mechanistic study; while it mentions mouse PK experiments and lung concentrations, it does not report quantitative PK parameters (CL, V, ka) or a compartmental model for clofoctol. |
| popPK | Danesi_1988 | irrelevant | 3 | 5 | The study reports only Cmax and AUC values for clofoctol in plasma and lung tissue after rectal dosing, lacking compartmental PK parameters (CL, V, ka, half-life) required for population PK modeling. |
| popPK | Scaglione_2012 | relevant | 6 | 1 | The study reports PK/PD relationships and an AUC/MIC ratio but lacks specific quantitative disposition parameters (CL, V, ka) in the provided evidence, which are likely in the full text or figures not included. |
| popPK | del_1983 | relevant | 6 | 0 | The paper is a primary PK study of clofoctol in neonates and adults, but the evidence text contains no specific numeric values for parameters (CL, V, Ka, etc.), only qualitative comparisons and timing. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
