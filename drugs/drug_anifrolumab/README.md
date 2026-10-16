<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anifrolumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Anifrolumab_Almquist2022_reference&quot;,&quot;label&quot;:&quot;Almquist_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# anifrolumab

- **generic name:** anifrolumab
- **ATC codes:** `L04AG11`
- **DrugBank:** [DB11976](https://go.drugbank.com/drugs/DB11976) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Anifrolumab is a monoclonal antibody used to treat systemic lupus erythematosus. It is approved and authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:31 | 2:20 | 1/2/0 | 0/0/1 | 0/0/0 | 169,216/6,006 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.692). Primary extraction retained.">cross-check: partial</span> | [Almquist_2022_reference](drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 6 | Almquist J et al., Nonlinear Population Pharmacokinetics o…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2055](https://doi.org/10.1002/jcph.2055) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tang_2023_dose_s_of_anifrolumab](drugs/drug_anifrolumab/Anifrolumab_Tang2023_dose_s_of_anifrolumab.md) | — | 1-compartment (no model) | 0 | Tang W et al., Clinical Pharmacokinetics, Pharmacodyna…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01238-2](https://doi.org/10.1007/s40262-023-01238-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tang_2023_study_population](drugs/drug_anifrolumab/Anifrolumab_Tang2023_study_population.md) | — | 1-compartment (no model) | 0 | Tang W et al., Clinical Pharmacokinetics, Pharmacodyna…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01238-2](https://doi.org/10.1007/s40262-023-01238-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chia_2021_SRI_4](drugs/drug_anifrolumab/pd_Chia_2021_SRI_4.md) | SLE Responder Index ← anifrolumab · categorical (graded) response model | — | Chia YL et al., Exposure-response analysis for selectio…, Rheumatology (Oxford, Engla… (2021) | [10.1093/rheumatology/keab176](https://doi.org/10.1093/rheumatology/keab176) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anifrolumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IFNAR1 (inhibitor), IFNAR2 (target), IFNGR2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chia_2021.pdf` | Chia YL et al., Exposure-response analysis for selectio…, Rheumatology (Oxford, Engla… (2021) | popPK | 9 | [10.1093/rheumatology/keab176](https://doi.org/10.1093/rheumatology/keab176) | [33629110](https://pubmed.ncbi.nlm.nih.gov/33629110) | The study describes a population PK model for anifrolumab and identifies covariates for clearance, but no specific numeric parameter values (e.g., CL, V, Q) are provided in the evidence text. |

<sub>queue written 2026-10-15T00:29:03.554439+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chia_2021 | relevant | 9 | 0 | The study describes a population PK model for anifrolumab and identifies covariates for clearance, but no specific numeric parameter values (e.g., CL, V, Q) are provided in the evidence text. |
| popPK | Chia_2022 | irrelevant | 3 | 0 | The study reports an exposure-response analysis using pre-existing model-predicted concentrations (Cave) rather than deriving new quantitative PK parameters (CL, V, etc.), and specific numeric PK values are not present in the text. |
| popPK | Chia_2022_2 | relevant | 6 | 0 | The paper reports PK/PD relationships for anifrolumab using a population PK model, but the specific numeric disposition parameters (CL, V, Q, etc.) are in Table 2 or supplementary materials which are not included in the provided evidence. |
| popPK | Rademacher_2026 | irrelevant | 0 | 0 | The paper is a clinical analysis of serological markers (complement and autoantibodies) and disease activity scores in SLE patients, not a pharmacokinetic study; it contains no PK parameters (CL, V, ka) for anifrolumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:29 UTC</sub>
