<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lorlatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lorlatinib_Hibma2022_reference&quot;,&quot;label&quot;:&quot;Hibma_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lorlatinib

- **generic name:** lorlatinib
- **ATC codes:** `L01ED05`
- **DrugBank:** [DB12130](https://go.drugbank.com/drugs/DB12130) · **PubChem:** [CID 71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823)
- **molar mass:** 406.421 g/mol (C21H19FN6O2) — DrugBank
- **groups:** approved, investigational

## About

Lorlatinib is an ALK inhibitor used to treat non-small-cell lung carcinoma. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27285820](https://www.wikidata.org/wiki/Q27285820) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lorlatinib | parent | 406.421 | C21H19FN6O2 | DrugBank | [71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823) | Chen_2021, Damoiseaux_2022_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:51 | 4:50 | 0/1/2 | 0/0/1 | 0/0/0 | 112,164/24,126 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.632). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: F, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Chen_2021_reference](drugs/drug_lorlatinib/Lorlatinib_Chen2021_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Chen J et al., Population pharmacokinetic model with t…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12585](https://doi.org/10.1002/psp4.12585) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Hibma_2022_reference](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hibma JE et al., Evaluation of the absolute oral bioavai…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04368-1](https://doi.org/10.1007/s00280-021-04368-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Damoiseaux_2022_2_reference](drugs/drug_lorlatinib/Lorlatinib_Damoiseaux2022v2_reference.md) | — | 1-compartment (no model) | 1 | Damoiseaux D et al., Predictiveness of the Human-CYP3A4-Tran…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15070860](https://doi.org/10.3390/ph15070860) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Chen_2021_2_Hypercholesterolemia_grade_3](drugs/drug_lorlatinib/pd_Chen_2021_2_Hypercholesterolemia_grade_3.md) | Hypercholesterolemia grade ≥ 3 ← lorlatinib · categorical (graded) response model | — | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Chen_2021_2_TEAE](drugs/drug_lorlatinib/pd_Chen_2021_2_TEAE.md) | TEAE grade ≥ 3 ← lorlatinib · categorical (graded) response model | — | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Damoiseaux_2022.pdf` | Damoiseaux D et al., Population Pharmacokinetic Modelling to…, Journal of pharmaceutical s… (2022) | popPK | 9 | [10.1016/j.xphs.2021.09.029](https://doi.org/10.1016/j.xphs.2021.09.029) | [34563535](https://pubmed.ncbi.nlm.nih.gov/34563535) | The mouse population-PK model is relevant, but no numeric parameter values are present in the provided evidence. |

<sub>queue written 2026-10-07T02:46:58.527003+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2021_2 | irrelevant | 2 | 1 | This is a human exposure-response analysis that cites a prior population-PK model but provides no numeric lorlatinib disposition parameters. |
| popPK | Damoiseaux_2022 | relevant | 9 | 0 | The mouse population-PK model is relevant, but no numeric parameter values are present in the provided evidence. |
| popPK | Sun_2022 | relevant | 6 | 1 | Human lorlatinib concentrations and a population-PK-derived average are reported, but numeric disposition parameters are not provided. |
| popPK | Takahashi_2026 | irrelevant | 0 | 0 | The evidence does not identify lorlatinib or provide numeric lorlatinib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:47 UTC</sub>
