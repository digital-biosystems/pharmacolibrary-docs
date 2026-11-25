<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;fedratinib&quot;}]"></div>

# fedratinib

- **generic name:** fedratinib
- **ATC codes:** `L01EJ02`
- **DrugBank:** [DB12500](https://go.drugbank.com/drugs/DB12500) · **PubChem:** [CID 16722836](https://pubchem.ncbi.nlm.nih.gov/compound/16722836)
- **molar mass:** 524.678 g/mol (C27H36N6O3S) — DrugBank
- **groups:** approved, investigational

## About

Fedratinib is a Janus kinase inhibitor used to treat myeloproliferative diseases, including myelofibrosis. It is administered orally in capsule form. The medication is authorized in the European Union for the treatment of myelofibrosis.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7670147](https://www.wikidata.org/wiki/Q7670147), [Wikipedia](https://en.wikipedia.org/wiki/Fedratinib?oldid=1348510868) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fedratinib | parent | 524.678 | C27H36N6O3S | DrugBank | [16722836](https://pubchem.ncbi.nlm.nih.gov/compound/16722836) | Ogasawara_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub> | [Ogasawara_2019_reference](drugs/drug_fedratinib/Fedratinib_Ogasawara2019_reference.md) | held back | 1-compartment, oral | 6 (+1 cov.) | Ogasawara K et al., Population pharmacokinetics of fedratin…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03929-9](https://doi.org/10.1007/s00280-019-03929-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhang_2014_STAT3_phosphorylation](drugs/drug_fedratinib/pd_Zhang_2014_STAT3_phosphorylation.md) | suppression of signal transducer and activator of transcription 3 (STAT3) phosphorylation ← fedratinib · direct sigmoid Emax (Hill) effect | — | Zhang M et al., A randomized, placebo-controlled study…, Journal of clinical pharmac… (2014) | [10.1002/jcph.218](https://doi.org/10.1002/jcph.218) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2025_SVR35](drugs/drug_fedratinib/pd_Chen_2025_SVR35.md) | spleen volume reduction ≥35% ← fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2025_TSS_response](drugs/drug_fedratinib/pd_Chen_2025_TSS_response.md) | total symptom score reduction ≥50% ← fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2025_diarrhoea](drugs/drug_fedratinib/pd_Chen_2025_diarrhoea.md) | diarrhoea ← fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2025_grade_3_anaemia](drugs/drug_fedratinib/pd_Chen_2025_grade_3_anaemia.md) | grade ≥3 anaemia ← fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2025_grade_3_thrombocytopenia](drugs/drug_fedratinib/pd_Chen_2025_grade_3_thrombocytopenia.md) | grade ≥3 thrombocytopenia ← fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2025_nausea_vomiting](drugs/drug_fedratinib/pd_Chen_2025_nausea_vomiting.md) | nausea/vomiting ← fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:06 | 0:14 | 1/0/0 | 7/0/0 | 0/0/0 | 5,780/1,227 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2014.pdf` | Zhang M et al., A randomized, placebo-controlled study…, Journal of clinical pharmac… (2014) | popPK | 6 | [10.1002/jcph.218](https://doi.org/10.1002/jcph.218) | [24165976](https://pubmed.ncbi.nlm.nih.gov/24165976) | The abstract reports pharmacokinetic parameters (half-life, Tmax) for fedratinib, but specific compartmental values like clearance or volume are not explicitly provided in the text. |

<sub>queue written 2026-11-23 21:06 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 1 | 0 | The study focuses on exposure-response relationships (efficacy/safety) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper analyzes exposure-response relationships for efficacy and safety but does not investigate gene variants or genotypes affecting fedratinib PK/PD. |
| popPK | Hao_2014 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic efficacy and tumor growth inhibition in vitro and in mouse xenografts, without reporting quantitative population pharmacokinetic parameters for fedratinib. |
| PGx | Hao_2014 | not_relevant | 2 | 8 | The paper reports correlation between JAK2 copy number and drug potency (EC50) in preclinical models, but not a change in a specific pharmacokinetic or pharmacodynamic parameter attributable to a genetic variant in a pharmacogenomic context. |
| popPK | Tachet_2025 | irrelevant | 2 | 0 | This is a human study protocol with no reported fedratinib disposition parameter values; the cited prior models provide no values here. |
| popPK | Zhang_2014 | relevant | 6 | 4 | The abstract reports pharmacokinetic parameters (half-life, Tmax) for fedratinib, but specific compartmental values like clearance or volume are not explicitly provided in the text. |
| PGx | Zhang_2014 | not_relevant | 0 | 0 | The study is a Phase 1 trial in healthy volunteers assessing PK/PD and tolerability without reporting any genetic variants or pharmacogenomic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfedratinib%5D&body=Drug%3A%20fedratinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fedratinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 00:40 UTC</sub>
