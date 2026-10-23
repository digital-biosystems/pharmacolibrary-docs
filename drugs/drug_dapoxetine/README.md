<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;dapoxetine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapoxetine_Pu2026_reference&quot;,&quot;label&quot;:&quot;Pu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapoxetine/Dapoxetine_Pu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dapoxetine

- **generic name:** dapoxetine
- **ATC codes:** `G04BX14`
- **DrugBank:** [DB04884](https://go.drugbank.com/drugs/DB04884) · **PubChem:** [CID 71353](https://pubchem.ncbi.nlm.nih.gov/compound/71353)
- **molar mass:** 305.4134 g/mol (C21H23NO) — DrugBank
- **groups:** investigational

## About

Dapoxetine is a urological drug developed for the treatment of premature ejaculation. It is considered investigational in the sources provided and has not been authorised in the European Union, though it has been marketed in some other countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424965](https://www.wikidata.org/wiki/Q424965) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dapoxetine | parent | 305.413 | C21H23NO | DrugBank | [71353](https://pubchem.ncbi.nlm.nih.gov/compound/71353) | Pu_2026 |

## Start here

> **Pu_2026_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy Chinese male subjects, n = 39. [Run it in the simulator](drugs/drug_dapoxetine/Dapoxetine_Pu2026_reference.md?tab=Simulation) · [record](drugs/drug_dapoxetine/Dapoxetine_Pu2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 37.8 | L/h | 37.8 L/h | healthy Chinese male subjects | 39 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Pu_2026_reference](drugs/drug_dapoxetine/Dapoxetine_Pu2026_reference.md) |
| V | V1/F | 65.6 | L | 65.6 L | healthy Chinese male subjects | 39 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Pu_2026_reference](drugs/drug_dapoxetine/Dapoxetine_Pu2026_reference.md) |
| ka | kabs | 1.29 | 1/h | 1.29 /h | healthy Chinese male subjects | 39 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Pu_2026_reference](drugs/drug_dapoxetine/Dapoxetine_Pu2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Pu_2026_reference](drugs/drug_dapoxetine/Dapoxetine_Pu2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Pu L et al., Population Pharmacokinetics of Dapoxeti…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70117](https://doi.org/10.1002/jcph.70117) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Kim_2017_Kv](drugs/drug_dapoxetine/pd_Kim_2017_Kv.md) | voltage-dependent K+ (Kv) channel currents ← dapoxetine · direct sigmoid Emax (Hill) effect | — | Kim HS et al., The selective serotonin reuptake inhibi…, Clinical and experimental p… (2017) | [10.1111/1440-1681.12723](https://doi.org/10.1111/1440-1681.12723) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:15 | 1:35 | 1/0/0 | 1/0/0 | 0/0/0 | 49,379/4,916 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pu_2026.pdf` | Pu L et al., Population Pharmacokinetics of Dapoxeti…, Journal of clinical pharmac… (2026) | popPK | 10 | [10.1002/jcph.70117](https://doi.org/10.1002/jcph.70117) | [41031519](https://pubmed.ncbi.nlm.nih.gov/41031519) | The paper reports a population pharmacokinetic model for dapoxetine in humans with all quantitative parameters (CL/F, Q/F, Vc/F, Vp/F, Tlag, ka) explicitly listed in the text. |
| `Modi_2009.pdf` | Modi NB et al., Pharmacokinetic, pharmacodynamic, and e…, Journal of clinical pharmac… (2009) | popPK | 8 | [10.1177/0091270009333486](https://doi.org/10.1177/0091270009333486) | [19389877](https://pubmed.ncbi.nlm.nih.gov/19389877) | The study is a PK/PD trial for dapoxetine, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, which only summarizes ECG effects and notes PKs are similar to previous reports. |

<sub>queue written 2026-10-07T09:14:17.218450+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of dapoxetine's effect on potassium channels and contains no pharmacokinetic disposition parameters. |
| popPK | Modi_2009 | relevant | 8 | 0 | The study is a PK/PD trial for dapoxetine, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, which only summarizes ECG effects and notes PKs are similar to previous reports. |
| popPK | Ratajczak_2019 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment assessing antidepressant and anxiolytic efficacy in rats, with no pharmacokinetic parameters reported. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The paper studies the electrophysiological effects of hesperetin on potassium channels and does not involve dapoxetine pharmacokinetics. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dapoxetine's antiviral activity against Zika Virus (binding affinity, EC50), not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for dapoxetine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:14 UTC</sub>
