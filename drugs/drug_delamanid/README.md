<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;delamanid&quot;}]"></div>

# delamanid

- **generic name:** delamanid
- **ATC codes:** `J04AK06`
- **DrugBank:** [DB11637](https://go.drugbank.com/drugs/DB11637) · **PubChem:** not captured
- **molar mass:** 534.492 g/mol (C25H25F3N4O6) — DrugBank
- **groups:** approved, investigational

## About

Delamanid is used to treat multidrug-resistant tuberculosis. It is authorised in the European Union and is included on the WHO essential medicines list.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15408413](https://www.wikidata.org/wiki/Q15408413) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| delamanid | parent | 534.492 | C25H25F3N4O6 | DrugBank | — | Wang_2020 |
| DM-6705 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:45 | 4:33 | 0/2/1 | 0/0/0 | 0/0/0 | 160,141/9,935 | einfracz / qwen3.8-27b | 8 | 8/0 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_reference](drugs/drug_delamanid/Delamanid_Wang2020_reference.md) | — | 2-compartment (no model) | 10 (+3 cov.) | Wang X et al., Population Pharmacokinetic Analysis of…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01202-20](https://doi.org/10.1128/AAC.01202-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sasaki_2022_reference](drugs/drug_delamanid/Delamanid_Sasaki2022_reference.md) | — | parent + metabolite (no model) | 0 | Sasaki T et al., Population Pharmacokinetic and Concentr…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01608-21](https://doi.org/10.1128/AAC.01608-21) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tanneau_2022_reference](drugs/drug_delamanid/Delamanid_Tanneau2022_reference.md) | — | 1-compartment (no model) | 0 | Tanneau L et al., Population Pharmacokinetics of Delamani…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01133-2](https://doi.org/10.1007/s40262-022-01133-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=delamanid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alghamdi_2021.pdf` | Alghamdi WA et al., Pharmacokinetics of bedaquiline, delama…, The Journal of antimicrobia… (2021) | popPK | 9 | [10.1093/jac/dkaa550](https://doi.org/10.1093/jac/dkaa550) | [33378452](https://pubmed.ncbi.nlm.nih.gov/33378452) | The study reports delamanid pharmacokinetics using non-compartmental analysis, but only provides exposure metrics (AUC, Cmin) and lacks the specific quantitative disposition parameters (CL, V, ka, half-life) required. |

<sub>queue written 2026-10-07T12:42:38.436257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alghamdi_2021 | relevant | 9 | 2 | The study reports delamanid pharmacokinetics using non-compartmental analysis, but only provides exposure metrics (AUC, Cmin) and lacks the specific quantitative disposition parameters (CL, V, ka, half-life) required. |
| popPK | Dierig_2023 | irrelevant | 2 | 0 | The paper is a study protocol for the DECODE trial where delamanid is a co-administered background therapy, not the primary subject drug (which is delpazolid), and it contains no quantitative pharmacokinetic parameters for delamanid. |
| popPK | Montepiedra_2024 | irrelevant | 2 | 1 | The paper is a simulation study for optimal design and reports relative standard errors (RSE) for parameter estimation, not the actual quantitative population pharmacokinetic parameter values (e.g., mean CL, V) for delamanid. |
| popPK | Rajoli_2018 | irrelevant | 2 | 0 | The paper is a PBPK modeling study that utilizes existing population PK data for delamanid but does not report original quantitative disposition parameter values (CL, V, etc.) within the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:43 UTC</sub>
