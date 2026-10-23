<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;c1-inhibitor, plasma derived&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;C1InhibitorPlasmaDerived_Pawaskar2018_reference&quot;,&quot;label&quot;:&quot;Pawaskar_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# c1-inhibitor, plasma derived

- **generic name:** c1-inhibitor, plasma derived
- **ATC codes:** `B06AC01`
- **DrugBank:** [DB06404](https://go.drugbank.com/drugs/DB06404) · **PubChem:** none
- **groups:** approved, investigational

## About

Plasma-derived C1 inhibitor is used to treat hereditary angioedema. It is an approved medicine, with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075742](https://www.wikidata.org/wiki/Q22075742) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Pawaskar_2018_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy volunteers and HAE patients. [Run it in the simulator](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md?tab=Simulation) · [record](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>stale — current check: Not simulated</sub> | [Pawaskar_2018_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Pawaskar D et al., Population pharmacokinetics of subcutan…, Clinical and experimental a… (2018) | [10.1111/cea.13220](https://doi.org/10.1111/cea.13220) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Bernstein_2010_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Bernstein2010_reference.md) | — | 1-compartment (no model) | 2 | Bernstein JA et al., Population pharmacokinetics of plasma-d…, Annals of allergy, asthma &… (2010) | [10.1016/j.anai.2010.06.005](https://doi.org/10.1016/j.anai.2010.06.005) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Diris_2002_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Diris2002_reference.md) | — | 2-compartment (no model) | 2 | Diris JH et al., Pharmacokinetics of C1-inhibitor protei…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.129320](https://doi.org/10.1067/mcp.2002.129320) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=c1_inhibitor_plasma_derived).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: C1R (inhibitor), C1S (inhibitor), F11 (inhibitor), F12 (inhibitor), F2 (inhibitor), KLKB1 (inhibitor), PLAT (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:09 | 11:33 | 3/0/0 | 0/0/0 | 0/0/0 | 188,919/31,532 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs review 2  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bernstein_2010.pdf` | Bernstein JA et al., Population pharmacokinetics of plasma-d…, Annals of allergy, asthma &… (2010) | popPK | 10 | [10.1016/j.anai.2010.06.005](https://doi.org/10.1016/j.anai.2010.06.005) | [20674826](https://pubmed.ncbi.nlm.nih.gov/20674826) | The paper reports a population pharmacokinetic model for plasma-derived C1 inhibitor with explicit numeric values for clearance and half-life in the abstract. |
| `Martinez-Saguer_2010.pdf` | Martinez-Saguer I et al., Pharmacokinetic analysis of human plasm…, Transfusion (2010) | popPK | 10 | [10.1111/j.1537-2995.2009.02394.x](https://doi.org/10.1111/j.1537-2995.2009.02394.x) | [19788511](https://pubmed.ncbi.nlm.nih.gov/19788511) | The study reports quantitative pharmacokinetic parameters (half-life, Tmax) for C1-inhibitor plasma-derived in humans, with values explicitly stated in the abstract. |
| `Pawaskar_2018.pdf` | Pawaskar D et al., Population pharmacokinetics of subcutan…, Clinical and experimental a… (2018) | popPK | 10 | [10.1111/cea.13220](https://doi.org/10.1111/cea.13220) | [29998524](https://pubmed.ncbi.nlm.nih.gov/29998524) | The paper reports a population pharmacokinetic model for plasma-derived C1-inhibitor with explicit numeric values for clearance, volume of distribution, absorption rate, and half-life in the abstract. |

<sub>queue written 2026-10-06 00:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandler_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tissue plasminogen activator (TPA) and its complexes, not c1_inhibitor_plasma_derived. |
| popPK | Farrell_2013 | irrelevant | 1 | 1 | The study reports population PK parameters for recombinant human C1 inhibitor (rhC1INH), not the plasma-derived C1 inhibitor (pdC1INH) specified as the subject drug. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (graft failure, eGFR) for C1 esterase inhibitor but does not report pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lanadelumab, not c1_inhibitor_plasma_derived. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bc1_inhibitor_plasma_derived%5D&body=Drug%3A%20c1_inhibitor_plasma_derived%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_c1_inhibitor_plasma_derived/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 00:58 UTC</sub>
