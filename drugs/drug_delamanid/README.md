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

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 17 | L/h | 17 L/h | patients with pulmonary multidrug-resistant tuberculosis | 744 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2020_reference](drugs/drug_delamanid/Delamanid_Wang2020_reference.md) |
| CL | CL/F | 1 | L/h | 1 liters/h | patients with pulmonary multidrug-resistant tuberculosis | 744 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2020_reference](drugs/drug_delamanid/Delamanid_Wang2020_reference.md) |
| V | V | 13 | L | 13 L | patients with pulmonary multidrug-resistant tuberculosis | 744 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2020_reference](drugs/drug_delamanid/Delamanid_Wang2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="306.7" y1="18" x2="306.7" y2="58" stroke="#ddd"/><text x="306.7" y="72" font-size="10" text-anchor="middle">1</text><line x1="423.3" y1="18" x2="423.3" y2="58" stroke="#ddd"/><text x="423.3" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wang_2020 · CL</text><circle cx="450.2" cy="30.0" r="4" fill="#ef6c00"><title>Wang_2020 · CL: 17 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2020 · CL/F</text><circle cx="306.7" cy="46.0" r="4" fill="#ef6c00"><title>Wang_2020 · CL/F: 1 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub> | [Wang_2020_reference](drugs/drug_delamanid/Delamanid_Wang2020_reference.md) | — | 2-compartment (no model) | 10 (+3 cov.) | Wang X et al., Population Pharmacokinetic Analysis of…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01202-20](https://doi.org/10.1128/AAC.01202-20) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sasaki_2022_reference](drugs/drug_delamanid/Delamanid_Sasaki2022_reference.md) | — | parent + metabolite (no model) | 0 | Sasaki T et al., Population Pharmacokinetic and Concentr…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01608-21](https://doi.org/10.1128/AAC.01608-21) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Tanneau_2022_reference](drugs/drug_delamanid/Delamanid_Tanneau2022_reference.md) | — | 1-compartment (no model) | 0 | Tanneau L et al., Population Pharmacokinetics of Delamani…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01133-2](https://doi.org/10.1007/s40262-022-01133-2) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:45 | 4:33 | 1/2/0 | 0/0/0 | 0/0/0 | 160,141/9,935 | einfracz / qwen3.8-27b | 8 | 8/0 | 8/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:43 UTC</sub>
