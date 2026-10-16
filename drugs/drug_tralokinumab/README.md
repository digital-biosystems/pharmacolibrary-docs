<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tralokinumab&quot;}]"></div>

# tralokinumab

- **generic name:** tralokinumab
- **ATC codes:** `D11AH07`
- **DrugBank:** [DB12169](https://go.drugbank.com/drugs/DB12169) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tralokinumab is a monoclonal antibody used to treat dermatitis (atopic skin inflammation). It is an approved medicine, though its use appears limited to dermatological care rather than broad application.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7833105](https://www.wikidata.org/wiki/Q7833105) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:31 | 0:40 | 0/2/0 | 0/0/0 | 0/0/0 | 37,140/2,883 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.25). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Baverel_2015_reference](drugs/drug_tralokinumab/Tralokinumab_Baverel2015_reference.md) | — | 1-compartment (no model) | 0 | Baverel PG et al., Pharmacokinetics of tralokinumab in ado…, British journal of clinical… (2015) | [10.1111/bcp.12725](https://doi.org/10.1111/bcp.12725) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.895). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Soehoel_2022_reference](drugs/drug_tralokinumab/Tralokinumab_Soehoel2022_reference.md) | — | 1-compartment (no model) | 7 | Soehoel A et al., Population Pharmacokinetics of Tralokin…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1113](https://doi.org/10.1002/cpdd.1113) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tralokinumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL13 (antibody), IL13 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baverel_2015.pdf` | Baverel PG et al., Pharmacokinetics of tralokinumab in ado…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12725](https://doi.org/10.1111/bcp.12725) | [26182954](https://pubmed.ncbi.nlm.nih.gov/26182954) | The study reports quantitative population PK parameters, specifically clearance values for adolescents and adults, directly in the results text. |
| `Baverel_2018.pdf` | Baverel PG et al., Dose-Exposure-Response Relationship of…, Clinical pharmacology and t… (2018) | popPK | 7 | [10.1002/cpt.803](https://doi.org/10.1002/cpt.803) | [28758192](https://pubmed.ncbi.nlm.nih.gov/28758192) | The paper describes a population PK/PD model for tralokinumab, but specific quantitative PK parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Baverel_2018_2.pdf` | Baverel P et al., A randomized, placebo-controlled, singl…, Drug metabolism and pharmac… (2018) | popPK | 5 | [10.1016/j.dmpk.2017.12.001](https://doi.org/10.1016/j.dmpk.2017.12.001) | [29622380](https://pubmed.ncbi.nlm.nih.gov/29622380) | The study reports pharmacokinetics for tralokinumab but the extracted evidence contains only summary descriptive statistics (Cmax, AUC trends, t1/2 range) and qualitative statements about a population model, lacking specific quantitative parameter values (CL, V, Q) readable in the text provided. |

<sub>queue written 2026-10-14T23:30:51.885465+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baverel_2018 | relevant | 7 | 2 | The paper describes a population PK/PD model for tralokinumab, but specific quantitative PK parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Baverel_2018_2 | irrelevant | 5 | 1 | The study reports pharmacokinetics for tralokinumab but the extracted evidence contains only summary descriptive statistics (Cmax, AUC trends, t1/2 range) and qualitative statements about a population model, lacking specific quantitative parameter values (CL, V, Q) readable in the text provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:30 UTC</sub>
