<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor IX&quot;}]"></div>

# coagulation factor IX

- **generic name:** coagulation factor IX
- **ATC codes:** `B02BD04`
- **DrugBank:** [DB13152](https://go.drugbank.com/drugs/DB13152) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Coagulation factor IX is a blood-clotting protein medicine used to treat or prevent bleeding in people with hemophilia B (factor IX deficiency). It is an approved treatment, given by infusion, and is used widely for hemophilia B care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801778](https://www.wikidata.org/wiki/Q20801778) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:25 | 4:27 | 0/2/1 | 0/0/0 | 0/0/0 | 76,192/52,970 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.188), gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Preijers_2018_reference](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2018_reference.md) | — | 2-compartment (no model) | 6 | Preijers T et al., Population pharmacokinetics of factor I…, Journal of thrombosis and h… (2018) | [10.1111/jth.14292](https://doi.org/10.1111/jth.14292) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Goldsmith_1992_reference](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Goldsmith1992_reference.md) | — | 1-compartment (no model) | 2 | Goldsmith JC et al., Coagulation factor IX: successful surgi…, American journal of hematol… (1992) | [10.1002/ajh.2830400310](https://doi.org/10.1002/ajh.2830400310) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846), gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Preijers_2022_reference](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2022_reference.md) | — | 2-compartment (no model) | 4 (+4 cov.) | Preijers T et al., In silico evaluation of limited samplin…, European journal of clinica… (2022) | [10.1007/s00228-021-03173-2](https://doi.org/10.1007/s00228-021-03173-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=coagulation_factor_ix).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F10 (activator), F11 (target), F7 (target), F8 (cofactor), GGCX (substrate), LRP1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brekkan_2016.pdf` | Brekkan A et al., Population pharmacokinetics of plasma-d…, Journal of thrombosis and h… (2016) | popPK | 10 | [10.1111/jth.13271](https://doi.org/10.1111/jth.13271) | [26806557](https://pubmed.ncbi.nlm.nih.gov/26806557) | The paper describes a population PK model for Factor IX but the evidence provided contains no numeric parameter values (CL, V, t1/2, etc.). |
| `Preijers_2018.pdf` | Preijers T et al., Population pharmacokinetics of factor I…, Journal of thrombosis and h… (2018) | popPK | 10 | [10.1111/jth.14292](https://doi.org/10.1111/jth.14292) | [30394056](https://pubmed.ncbi.nlm.nih.gov/30394056) | The paper reports quantitative population pharmacokinetic parameters (CL, V1, Q2, Q3, V2, V3) for factor IX in humans, with values explicitly listed in the text. |
| `Zhang_2016.pdf` | Zhang Y et al., Population pharmacokinetics of a new lo…, Journal of thrombosis and h… (2016) | popPK | 10 | [10.1111/jth.13444](https://doi.org/10.1111/jth.13444) | [27513989](https://pubmed.ncbi.nlm.nih.gov/27513989) | The study is a population PK analysis of coagulation factor IX, but the evidence text contains only qualitative descriptions and dosing scenarios, lacking specific numeric parameter estimates for clearance, volume, or half-life. |
| `Goldsmith_1992.pdf` | Goldsmith JC et al., Coagulation factor IX: successful surgi…, American journal of hematol… (1992) | popPK | 8 | [10.1002/ajh.2830400310](https://doi.org/10.1002/ajh.2830400310) | [1609775](https://pubmed.ncbi.nlm.nih.gov/1609775) | The study reports quantitative two-compartment pharmacokinetic parameters (half-lives) and in vivo recovery for factor IX in humans. |
| `Tegenge_2020.pdf` | Tegenge MA et al., Model-Based Evaluation of Linear Limite…, Journal of clinical pharmac… (2020) | popPK | 7 | [10.1002/jcph.1651](https://doi.org/10.1002/jcph.1651) | [32501555](https://pubmed.ncbi.nlm.nih.gov/32501555) | The study describes a population PK model for Factor IX, but the specific clearance or volume parameters are not explicitly listed in the text, and the model appears to be based on activity concentrations rather than standard concentration units. |

<sub>queue written 2026-10-14T21:21:31.198400+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atoda_2006 | irrelevant | 0 | 0 | The paper is a mechanistic/structural study characterizing a monoclonal antibody and phosphorylation state of Factor IX, reporting no pharmacokinetic parameters. |
| popPK | Brekkan_2016 | relevant | 10 | 0 | The paper describes a population PK model for Factor IX but the evidence provided contains no numeric parameter values (CL, V, t1/2, etc.). |
| popPK | Jonsson_2021 | irrelevant | 0 | 0 | The study models the pharmacokinetics and exposure-response relationship of emicizumab, not the subject drug coagulation_factor_ix. |
| popPK | Tegenge_2020 | relevant | 7 | 2 | The study describes a population PK model for Factor IX, but the specific clearance or volume parameters are not explicitly listed in the text, and the model appears to be based on activity concentrations rather than standard concentration units. |
| popPK | Zhang_2016 | relevant | 10 | 3 | The study is a population PK analysis of coagulation factor IX, but the evidence text contains only qualitative descriptions and dosing scenarios, lacking specific numeric parameter estimates for clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:21 UTC</sub>
