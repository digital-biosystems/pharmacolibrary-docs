<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab deruxtecan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabDeruxtecan_Yin2021_final&quot;,&quot;label&quot;:&quot;Yin_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# trastuzumab deruxtecan

- **generic name:** trastuzumab deruxtecan
- **ATC codes:** `L01FD04`
- **DrugBank:** [DB14962](https://go.drugbank.com/drugs/DB14962) · **PubChem:** none
- **groups:** approved, investigational

## About

Trastuzumab deruxtecan is an antibody-drug conjugate used to treat breast cancer. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q80109553](https://www.wikidata.org/wiki/Q80109553) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| released drug | metabolite | 493.491 | C26H24FN3O6 | PubChem | [117888634](https://pubchem.ncbi.nlm.nih.gov/compound/117888634) | Yin_2021 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub> | [Yin_2021_final_final_released_drug_model](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode.md) | held back | 1-compartment, IV | 3 (+5 cov.) | Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [↳ final](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md) | ▶ model + simulator | 1-compartment, IV | 4 (+7 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Asiimwe_2025_reference](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Asiimwe2025_reference.md) | — | 1-compartment (no model) | 0 | Asiimwe IG et al., Postmarketing Assessment of Antibody-Dr…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70013](https://doi.org/10.1002/psp4.70013) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trastuzumab_deruxtecan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCC1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLCO1B1` unknown, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CTSB (substrate), CTSL (substrate), FCGR1A (antibody), GAA (substrate), TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:41 | 7:24 | 1/2/0 | 0/0/0 | 0/0/0 | 196,363/12,166 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoshihara_2023.pdf` | Yoshihara K et al., Trastuzumab Deruxtecan Dosing in Human…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2295](https://doi.org/10.1002/jcph.2295) | [37393579](https://pubmed.ncbi.nlm.nih.gov/37393579) | The paper describes a population pharmacokinetic model for trastuzumab deruxtecan, but the specific numeric parameter values (e.g., clearance, volume) are not present in the provided abstract text. |
| `Lu_2023.pdf` | Lu Z et al., Use of Real-World Evidence in a Virtual…, Journal of clinical pharmac… (2023) | popPK | 8 | [10.1002/jcph.2297](https://doi.org/10.1002/jcph.2297) | [37377133](https://pubmed.ncbi.nlm.nih.gov/37377133) | The paper describes a population PK model for trastuzumab deruxtecan but only reports exposure ratios and clinical outcomes, lacking specific numeric PK parameter values (CL, V, etc.) in the provided text. |

<sub>queue written 2026-10-07 21:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherifi_2024 | irrelevant | 2 | 0 | The paper is a qualitative literature review describing general PK/PD profiles without reporting specific quantitative parameter values (CL, V, etc.) for trastuzumab deruxtecan. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper is a diagnostic imaging study predicting HER2-low status using ultrasound and does not report any pharmacokinetic parameters for trastuzumab deruxtecan. |
| popPK | Lu_2023 | relevant | 8 | 2 | The paper describes a population PK model for trastuzumab deruxtecan but only reports exposure ratios and clinical outcomes, lacking specific numeric PK parameter values (CL, V, etc.) in the provided text. |
| popPK | Ter_2023 | irrelevant | 2 | 0 | The paper is a modeling and simulation study for cost-saving dosing regimens that uses existing population PK models but does not report original quantitative PK parameter values (CL, V, etc.) for trastuzumab deruxtecan in the text. |
| popPK | Yin_2021_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses PK parameters from a separate population PK study (reference 12) and does not report original quantitative PK parameter values (CL, V, etc.) in the text. |
| popPK | Yoshihara_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for trastuzumab deruxtecan, but the specific numeric parameter values (e.g., clearance, volume) are not present in the provided abstract text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrastuzumab_deruxtecan%5D&body=Drug%3A%20trastuzumab_deruxtecan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trastuzumab_deruxtecan/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 21:35 UTC</sub>
