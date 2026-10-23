<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;cenegermin&quot;}]"></div>

# cenegermin

- **generic name:** cenegermin
- **ATC codes:** `S01XA24`
- **DrugBank:** [DB13926](https://go.drugbank.com/drugs/DB13926) · **PubChem:** not captured
- **groups:** approved, investigational

## About

It is authorised in the European Union as an ophthalmological medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q30315101](https://www.wikidata.org/wiki/Q30315101) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mattioli_2025_reference](drugs/drug_cenegermin/Cenegermin_Mattioli2025_reference.md) | — | 1-compartment (no model) | 0 | Mattioli SL et al., Human nerve growth factor delivery to t…, PNAS nexus (2025) | [10.1093/pnasnexus/pgaf250](https://doi.org/10.1093/pnasnexus/pgaf250) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:18 | 4:35 | 0/1/0 | 0/0/0 | 0/0/0 | 183,512/5,184 | ollama / glm-5.3-flash | 4 | 0/1 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 33 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dai_2025.pdf` | Dai Y et al., Safety and pharmacokinetics of escalati…, European journal of pharmac… (2025) | popPK | 8 | [10.1016/j.ejps.2025.107314](https://doi.org/10.1016/j.ejps.2025.107314) | [41076137](https://pubmed.ncbi.nlm.nih.gov/41076137) | A human PK study of recombinant human NGF (the same active moiety as cenegermin) with tear-fluid PK values (Tmax 0.17 h, Cmax 3.63 µg/g, t1/2 4.21 h) reported directly in the abstract; no systemic CL/V reported. |

<sub>queue written 2026-10-07T17:15:39.393031+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jia_2026 | irrelevant | 0 | 0 | In-vitro expression of recombinant human NGF in tobacco cells; no PK or disposition parameters for cenegermin. |
| popPK | Shen_2023 | irrelevant | 3 | 2 | This is a different recombinant human NGF product (intramuscular, Chinese subjects) rather than cenegermin, and only Tmax and t1/2 are reported with no CL/V or population-PK parameters. |
| popPK | Wen_2011 | irrelevant | 0 | 0 | This is a review of intranasal drug delivery with no quantitative PK parameters for cenegermin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 17:15 UTC</sub>
