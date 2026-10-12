<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;mirvetuximab soravtansine&quot;}]"></div>

# mirvetuximab soravtansine

- **generic name:** mirvetuximab soravtansine
- **ATC codes:** `L01FX26`
- **DrugBank:** [DB12489](https://go.drugbank.com/drugs/DB12489) · **PubChem:** [CID 131704323](https://pubchem.ncbi.nlm.nih.gov/compound/131704323)
- **groups:** approved, investigational

## About

Mirvetuximab soravtansine is an antibody-drug conjugate used to treat ovarian, fallopian tube, and peritoneal cancers. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q115285803](https://www.wikidata.org/wiki/Q115285803) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:09 | 1:47 | 0/0/0 | 0/0/0 | 0/0/0 | 14,198/526 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tu_2025.pdf` | Tu YP et al., Exposure-response relationships of mirv…, British journal of clinical… (2025) | popPK | 8 | [10.1111/bcp.16250](https://doi.org/10.1111/bcp.16250) | [39307840](https://pubmed.ncbi.nlm.nih.gov/39307840) | The paper describes a population PK model and exposure-response analysis for mirvetuximab soravtansine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Tu_2024.pdf` | Tu YP et al., Population pharmacokinetics of mirvetux…, British journal of clinical… (2024) | pgx | 7 | [10.1111/bcp.15937](https://doi.org/10.1111/bcp.15937) | [37872122](https://www.ncbi.nlm.nih.gov/pubmed/37872122) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T17:09:03.594098+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Roth_2025 | not_relevant | 3 | 5 | The paper reports in vitro transporter-mediated resistance (P-gp efflux of the payload) affecting ADC efficacy, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter in humans. |
| PGx | Roth_2026 | not_relevant | 5 | 5 | The paper reports that ABCB1 (P-gp) overexpression reduces the efficacy (PD) of mirvetuximab soravtansine, but it does not report a specific gene variant or genotype associated with this effect, nor does it provide a fitted quantitative effect size for a specific pharmacogenomic interaction. |
| popPK | Tu_2024 | irrelevant | 0 | 0 | no_text gate: only 168 chars of text extracted (&lt; 400) |
| PGx | Tu_2024 | not_relevant | 0 | 0 | The paper describes population pharmacokinetics but does not report pharmacogenomic effects (gene variants) on PK parameters. |
| popPK | Tu_2025 | relevant | 8 | 0 | The paper describes a population PK model and exposure-response analysis for mirvetuximab soravtansine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
