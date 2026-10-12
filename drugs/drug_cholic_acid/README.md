<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;cholic acid&quot;}]"></div>

# cholic acid

- **generic name:** cholic acid
- **ATC codes:** `A05AA03`
- **DrugBank:** [DB02659](https://go.drugbank.com/drugs/DB02659) · **PubChem:** [CID 221493](https://pubchem.ncbi.nlm.nih.gov/compound/221493)
- **molar mass:** 408.5714 g/mol (C24H40O5) — DrugBank
- **groups:** approved, investigational

## About

Cholic acid, a naturally occurring bile acid, is used to treat certain inborn errors of metabolism, including peroxisomal disorders. It is authorised in the European Union as a bile therapy medicine, though one related product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q287415](https://www.wikidata.org/wiki/Q287415) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:21 | 0:58 | 0/1/0 | 0/0/0 | 0/0/0 | 27,845/972 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Quarfordt_1973_reference](drugs/drug_cholic_acid/CholicAcid_Quarfordt1973_reference.md) | — | general linear (no model) | 0 | Quarfordt SH et al., Estimation of cholesterol and bile acid…, The Journal of clinical inv… (1973) | [10.1172/JCI107378](https://doi.org/10.1172/JCI107378) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hofmann_1983 | relevant | 10 | 2 | The paper presents a detailed physiological compartmental model for cholic acid in humans, but the specific numeric parameter values (transfer coefficients, clearances) are largely described in the text or referenced to figures/tables not fully provided in the evidence snippet. |
| popPK | Molino_1986 | irrelevant | 2 | 0 | The study focuses on chenodeoxycholic acid (CDC) and only mentions cholic acid as a previous model or comparator, with no quantitative PK parameters for cholic acid provided in the evidence. |
| popPK | Strange_1979 | irrelevant | 2 | 0 | The study reports subcellular partition coefficients and distribution percentages in rat liver, not systemic pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Varma_2021 | irrelevant | 0 | 0 | The study is an observational epidemiological and metabolomic analysis of bile acid concentrations in relation to dementia, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The study measures fecal concentrations of cholic acid as a metabolite marker in a toxicology study, not pharmacokinetic disposition parameters (CL, V, ka) for cholic acid as a subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 14:21 UTC</sub>
