<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Velpatasvir&quot;}]"></div>

# Velpatasvir

- **generic name:** Velpatasvir
- **ATC codes:** `J05AP55`, `J05AP56`
- **DrugBank:** [DB11613](https://go.drugbank.com/drugs/DB11613) · **PubChem:** [CID 67683363](https://pubchem.ncbi.nlm.nih.gov/compound/67683363)
- **molar mass:** 883.019 g/mol (C49H54N8O8) — DrugBank
- **groups:** approved, investigational

## About

It is given by mouth in tablet or pellet form. The drug is approved for medical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q25018296](https://www.wikidata.org/wiki/Q25018296), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ruiz_2021_luciferase_activity](drugs/drug_velpatasvir/pd_Ruiz_2021_luciferase_activity.md) | luciferase activity ← velpatasvir · direct sigmoid Emax (Hill) effect | — | Ruiz I et al., Real-world efficacy and safety of direc…, European journal of gastroe… (2021) | [10.1097/MEG.0000000000002003](https://doi.org/10.1097/MEG.0000000000002003) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:59 | 0:03 | 0/0/0 | 0/1/0 | 0/0/0 | 4,287/170 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mogalian_2018.pdf` | Mogalian E et al., Pharmacokinetics and Safety of Velpatas…, Clinical pharmacokinetics (2018) | popPK | 8 | [10.1007/s40262-018-0645-6](https://doi.org/10.1007/s40262-018-0645-6) | [29520729](https://pubmed.ncbi.nlm.nih.gov/29520729) | The paper reports a PK study on velpatasvir, but the evidence provided only contains qualitative descriptions of exposure and lacks the specific numeric parameter values (e.g., CL, V, t1/2, AUC) required for extraction. |

<sub>queue written 2026-11-24 05:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Camus_2018 | irrelevant | 0 | 0 | The paper describes in-vitro resistance characterization (EC50 values) of velpatasvir against HCV isolates, not pharmacokinetic disposition parameters. |
| PGx | Camus_2018 | not_relevant | 0 | 0 | The paper characterizes viral resistance mechanisms (NS5A mutations/RASs) and drug susceptibility (EC50), which is virologic pharmacodynamics, not a host pharmacogenomic effect (gene variant) on PK/PD. |
| popPK | Dvory-Sobol_2019 | irrelevant | 0 | 0 | The study is an in vitro resistance profiling analysis of HCV NS5A mutations and does not report any pharmacokinetic parameters (CL, V, etc.) for velpatasvir. |
| PGx | Dvory-Sobol_2019 | not_relevant | 0 | 0 | The study investigates viral resistance mutations (NS5A) in HCV, not human pharmacogenomic variants affecting drug PK or PD. |
| popPK | Indolfi_2022 | irrelevant | 2 | 0 | The study mentions a population pharmacokinetic analysis was performed, but no quantitative disposition parameters (CL, V, etc.) or specific PK values for velpatasvir are provided in the evidence. |
| PGx | Indolfi_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetics in an adolescent population without stratifying or reporting data based on specific gene variants or genotypes. |
| popPK | Jonas_2024 | relevant | 10 | 2 | The study describes a population pharmacokinetic model for velpatasvir in children, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text. |
| PGx | Jonas_2024 | not_relevant | 0 | 0 | The paper reports pediatric PK and efficacy data but does not investigate or report on pharmacogenomic effects (gene variants) on velpatasvir PK or PD. |
| popPK | Mogalian_2018 | relevant | 8 | 0 | The paper reports a PK study on velpatasvir, but the evidence provided only contains qualitative descriptions of exposure and lacks the specific numeric parameter values (e.g., CL, V, t1/2, AUC) required for extraction. |
| PGx | Mogalian_2018 | not_relevant | 0 | 0 | The study investigates the effect of hepatic impairment (a clinical condition) on pharmacokinetics, not the effect of a specific gene variant or genotype. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study measuring antiviral efficacy (EC50) of velpatasvir against HCV subtypes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Nguyen_2020 | not_relevant | 0 | 0 | The paper studies HCV viral genotype effects on drug efficacy (viral resistance) rather than human host pharmacogenomic effects on PK/PD parameters. |
| popPK | Ruiz_2021 | irrelevant | 0 | 0 | The study focuses on virological efficacy and in-vitro resistance mechanisms (EC50), reporting no pharmacokinetic parameters for velpatasvir. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | This is an in vitro SARS-CoV-2 antiviral screening study; velpatasvir is only a screened compound reported inactive, with no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvelpatasvir%5D&body=Drug%3A%20velpatasvir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_velpatasvir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
