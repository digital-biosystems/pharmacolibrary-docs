<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor VIII&quot;}]"></div>

# coagulation factor VIII

- **generic name:** coagulation factor VIII
- **ATC codes:** `B02BD02`
- **DrugBank:** [DB00025](https://go.drugbank.com/drugs/DB00025) · **PubChem:** none
- **groups:** approved, investigational

## About

Coagulation factor VIII (antihemophilic factor) is a clotting protein used to treat bleeding disorders such as hemophilia A, von Willebrand's disease, and factor VII deficiency. It is an approved medicine, given as replacement therapy to prevent or control bleeding in patients lacking this factor.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801759](https://www.wikidata.org/wiki/Q20801759) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Blanchette_2021_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Blanchette2021_reference.md) | — | 1-compartment (no model) | 0 | Blanchette VS et al., A Practical, One-Clinic Visit Protocol…, Thrombosis and haemostasis (2021) | [10.1055/a-1376-0970](https://doi.org/10.1055/a-1376-0970) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hua_2019_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Hua2019_reference.md) | — | 1-compartment (no model) | 0 | Hua BL et al., [Population pharmacokinetics of two rec…, Zhonghua xue ye xue za zhi… (2019) | [10.3760/cma.j.issn.0253-2727.2019.08.009](https://doi.org/10.3760/cma.j.issn.0253-2727.2019.08.009) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Preijers_2018_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Preijers2018_reference.md) | — | 1-compartment (no model) | 1 | Preijers T et al., Cross-evaluation of Pharmacokinetic-Gui…, Thrombosis and haemostasis (2018) | [10.1055/s-0038-1623531](https://doi.org/10.1055/s-0038-1623531) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=coagulation_factor_viii).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ASGR2 (binder), CALR (chaperone), CANX (chaperone), F10 (activator), F2 (activator), F9 (cofactor), HSPA5 (chaperone), LMAN1 (binder), LMAN1 (transporter), LRP1 (modulator), MCFD2 (modulator), PHYH (target), PROC (substrate), VWF (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:47 | 6:16 | 0/3/0 | 0/0/0 | 0/0/0 | 64,939/22,740 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiménez-Yuste_2015.pdf` | Jiménez-Yuste V et al., The pharmacokinetics of a B-domain trun…, Journal of thrombosis and h… (2015) | popPK | 10 | [10.1111/jth.12816](https://doi.org/10.1111/jth.12816) | [25495795](https://pubmed.ncbi.nlm.nih.gov/25495795) | The paper reports population PK parameters for coagulation factor VIII (turoctocog alfa) in humans, but the specific numeric values are not present in the provided evidence text. |
| `Zhang_2017.pdf` | Zhang Y et al., Population pharmacokinetics of recombin…, Journal of thrombosis and h… (2017) | popPK | 10 | [10.1111/jth.13662](https://doi.org/10.1111/jth.13662) | [28244200](https://pubmed.ncbi.nlm.nih.gov/28244200) | The paper describes a population PK model for coagulation factor VIII, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Di_2007.pdf` | Di Paola J et al., ReFacto and Advate: a single-dose, rand…, Haemophilia : the official… (2007) | popPK | 9 | [10.1111/j.1365-2516.2006.01420.x](https://doi.org/10.1111/j.1365-2516.2006.01420.x) | [17286764](https://pubmed.ncbi.nlm.nih.gov/17286764) | The paper describes a pharmacokinetic study of Factor VIII (ReFacto and Advate) in humans, but the specific numeric parameter values (CL, V, AUC, etc.) are not present in the provided evidence text. |
| `Preijers_2018.pdf` | Preijers T et al., Cross-evaluation of Pharmacokinetic-Gui…, Thrombosis and haemostasis (2018) | popPK | 9 | [10.1055/s-0038-1623531](https://doi.org/10.1055/s-0038-1623531) | [29534249](https://pubmed.ncbi.nlm.nih.gov/29534249) | The study reports quantitative PK parameters (half-life, time to trough) for Factor VIII in humans, with specific numeric values provided in the abstract. |
| `Hua_2019.pdf` | Hua BL et al., [Population pharmacokinetics of two rec…, Zhonghua xue ye xue za zhi… (2019) | popPK | 8 | [10.3760/cma.j.issn.0253-2727.2019.08.009](https://doi.org/10.3760/cma.j.issn.0253-2727.2019.08.009) | [31495135](https://pubmed.ncbi.nlm.nih.gov/31495135) | The study reports quantitative pharmacokinetic parameters (half-life and time to activity threshold) for coagulation factor VIII in human patients, with values explicitly listed in the text. |
| `Kim_2024.pdf` | Kim MS et al., Kinetic Modeling for BT200 to Predict t…, The AAPS journal (2024) | popPK | 8 | [10.1208/s12248-024-00952-4](https://doi.org/10.1208/s12248-024-00952-4) | [38992298](https://pubmed.ncbi.nlm.nih.gov/38992298) | The paper describes a population PK/PD model for FVIII, but the specific numeric parameter values are not present in the provided evidence text. |
| `Lissitchkov_2017.pdf` | Lissitchkov T et al., PK-guided personalized prophylaxis with…, Haemophilia : the official… (2017) | popPK | 8 | [10.1111/hae.13251](https://doi.org/10.1111/hae.13251) | [28452151](https://pubmed.ncbi.nlm.nih.gov/28452151) | The study describes a PK-guided regimen for FVIII (Nuwiq) in humans, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, only dosing intervals and bleeding rates. |

<sub>queue written 2026-10-05 18:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bauer_2023 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of von Willebrand factor (VWF) and its effect on Factor VIII activity, rather than reporting quantitative disposition parameters (CL, V, etc.) for Factor VIII as the primary subject drug. |
| popPK | Di_2007 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of Factor VIII (ReFacto and Advate) in humans, but the specific numeric parameter values (CL, V, AUC, etc.) are not present in the provided evidence text. |
| popPK | Jiménez-Yuste_2015 | relevant | 10 | 2 | The paper reports population PK parameters for coagulation factor VIII (turoctocog alfa) in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Kim_2024 | relevant | 8 | 0 | The paper describes a population PK/PD model for FVIII, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Lissitchkov_2017 | relevant | 8 | 2 | The study describes a PK-guided regimen for FVIII (Nuwiq) in humans, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, only dosing intervals and bleeding rates. |
| popPK | Zhang_2017 | relevant | 10 | 0 | The paper describes a population PK model for coagulation factor VIII, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcoagulation_factor_viii%5D&body=Drug%3A%20coagulation_factor_viii%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_coagulation_factor_viii/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 18:42 UTC</sub>
