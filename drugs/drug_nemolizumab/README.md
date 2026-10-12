<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;nemolizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nemolizumab_Fauchet2026_reference&quot;,&quot;label&quot;:&quot;Fauchet_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nemolizumab

- **generic name:** nemolizumab
- **ATC codes:** `D11AH12`
- **DrugBank:** [DB15252](https://go.drugbank.com/drugs/DB15252) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nemolizumab is a monoclonal antibody used to treat atopic dermatitis and prurigo. It is authorised in the European Union and is also being investigated for further uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:37 | 1:36 | 1/1/1 | 2/0/0 | 0/0/0 | 90,694/8,310 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.806). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Fauchet_2026_reference](drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+8 cov.) | Fauchet F et al., Model-informed drug development to supp…, British journal of clinical… (2026) | [10.1002/bcp.70435](https://doi.org/10.1002/bcp.70435) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q331 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Takechi_2025_reference](drugs/drug_nemolizumab/Nemolizumab_Takechi2025_reference.md) | — | 1-compartment (no model) | 5 | Takechi T et al., Quantitative Evaluation of Nemolizumab…, Dermatology and therapy (2025) | [10.1007/s13555-025-01554-4](https://doi.org/10.1007/s13555-025-01554-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sidbury_2022_reference](drugs/drug_nemolizumab/Nemolizumab_Sidbury2022_reference.md) | — | 1-compartment (no model) | 6 | Sidbury R et al., Pharmacokinetics, Safety, Efficacy, and…, Dermatology and therapy (2022) | [10.1007/s13555-021-00678-7](https://doi.org/10.1007/s13555-021-00678-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span> | [Fauchet_2026_EASI](drugs/drug_nemolizumab/pd_Fauchet_2026_EASI.md) | Eczema Area and Severity Index biomarker turnover ← nemolizumab | — | Fauchet F et al., Model-informed drug development to supp…, British journal of clinical… (2026) | [10.1002/bcp.70435](https://doi.org/10.1002/bcp.70435) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span> | [Fauchet_2026_wNRS](drugs/drug_nemolizumab/pd_Fauchet_2026_wNRS.md) | weekly average PP NRS biomarker turnover ← nemolizumab | — | Fauchet F et al., Model-informed drug development to supp…, British journal of clinical… (2026) | [10.1002/bcp.70435](https://doi.org/10.1002/bcp.70435) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Saito_2017_VAS](drugs/drug_nemolizumab/pd_Saito_2017_VAS.md) | pruritus visual analog scale ← nemolizumab · indirect response — drug inhibits the production of pruritus visual analog scale | — | Saito T et al., Dosage Optimization of Nemolizumab Usin…, Journal of clinical pharmac… (2017) | [10.1002/jcph.969](https://doi.org/10.1002/jcph.969) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> | [Fauchet_2026_IGA](drugs/drug_nemolizumab/pd_Fauchet_2026_IGA.md) | Investigator's Global Assessment of dermatitis severity biomarker turnover ← nemolizumab | — | Fauchet F et al., Model-informed drug development to supp…, British journal of clinical… (2026) | [10.1002/bcp.70435](https://doi.org/10.1002/bcp.70435) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nemolizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL31RA (antibody), IL31RA (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Saito_2017.pdf` | Saito T et al., Dosage Optimization of Nemolizumab Usin…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.969](https://doi.org/10.1002/jcph.969) | [28703903](https://pubmed.ncbi.nlm.nih.gov/28703903) | The paper reports a population pharmacokinetic model for nemolizumab, but no specific numeric parameter values (e.g., CL, V) are provided in the abstract or evidence text. |
| `Ramanathan_2025.pdf` | Ramanathan M et al., Diffusion dimensionality modeling of su…, Journal of pharmacokinetics… (2025) | popPK | 8 | [10.1007/s10928-025-09973-8](https://doi.org/10.1007/s10928-025-09973-8) | [40263185](https://pubmed.ncbi.nlm.nih.gov/40263185) | The paper applies a pharmacokinetic model to nemolizumab subcutaneous absorption data, but the specific numeric parameter values (e.g., diffusion dimensions, rate constants) are not listed in the provided evidence text. |
| `Wagner_2023.pdf` | Wagner N et al., Selection of Nemolizumab Clinical Dosag…, Journal of drugs in dermato… (2023) | popPK | 8 | [10.36849/JDD.7437R1](https://doi.org/10.36849/JDD.7437R1) | [37801534](https://pubmed.ncbi.nlm.nih.gov/37801534) | The text confirms a population PK study for nemolizumab and provides qualitative PK characteristics (absorption profile, terminal half-life range), but specific quantitative model parameters (CL, V) are not listed in the evidence. |

<sub>queue written 2026-10-07T08:36:21.791979+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ramanathan_2025 | relevant | 8 | 0 | The paper applies a pharmacokinetic model to nemolizumab subcutaneous absorption data, but the specific numeric parameter values (e.g., diffusion dimensions, rate constants) are not listed in the provided evidence text. |
| popPK | Saito_2017 | relevant | 10 | 0 | The paper reports a population pharmacokinetic model for nemolizumab, but no specific numeric parameter values (e.g., CL, V) are provided in the abstract or evidence text. |
| popPK | Wagner_2023 | relevant | 8 | 2 | The text confirms a population PK study for nemolizumab and provides qualitative PK characteristics (absorption profile, terminal half-life range), but specific quantitative model parameters (CL, V) are not listed in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:36 UTC</sub>
