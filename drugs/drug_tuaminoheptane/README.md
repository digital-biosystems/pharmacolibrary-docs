<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;tuaminoheptane&quot;}]"></div>

# tuaminoheptane

- **generic name:** tuaminoheptane
- **ATC codes:** `R01AA11`, `R01AB08`
- **DrugBank:** [DB13238](https://go.drugbank.com/drugs/DB13238) · **PubChem:** none
- **molar mass:** 115.22 g/mol (C7H17N) — DrugBank
- **groups:** experimental

## About

Tuaminoheptane is a sympathomimetic nasal decongestant used to relieve nasal congestion. It is given as a nasal spray. Its use is restricted, and it is listed as a prohibited substance by the World Anti-Doping Agency.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4000097](https://www.wikidata.org/wiki/Q4000097), [Wikipedia](https://en.wikipedia.org/wiki/Tuaminoheptane?oldid=1382837084) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Delicado_1990_NA_uptake](drugs/drug_tuaminoheptane/pd_Delicado_1990_NA_uptake.md) | high-affinity Na(+)-dependent noradrenaline uptake ← tuamine · inhibition effect | — | Delicado EG et al., Effect of tuamine, heptaminol and two a…, Biochemical pharmacology (1990) | [10.1016/0006-2952(90)90322-c](https://doi.org/10.1016/0006-2952(90)90322-c) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Delicado_1990_catecholamine_release](drugs/drug_tuaminoheptane/pd_Delicado_1990_catecholamine_release.md) | nicotine-induced release of catecholamines ← tuamine · inhibition effect | — | Delicado EG et al., Effect of tuamine, heptaminol and two a…, Biochemical pharmacology (1990) | [10.1016/0006-2952(90)90322-c](https://doi.org/10.1016/0006-2952(90)90322-c) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:48 | 0:03 | 0/0/0 | 0/2/0 | 0/0/0 | 3,254/159 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delicado_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of catecholamine uptake and release, not a pharmacokinetic study reporting disposition parameters for tuaminoheptane. |
| PGx | Delicado_1990 | not_relevant | 0 | 0 | The paper investigates the in vitro pharmacological effects of tuamine and heptaminol on catecholamine uptake/release in cell cultures and does not report any pharmacogenomic effects (gene variant/genotype) on the pharmacokinetics or pharmacodynamics of tuaminoheptane. |
| popPK | Durden_2000 | irrelevant | 0 | 0 | The paper studies R-2HMP, a different drug, not tuaminoheptane. |
| PGx | Durden_2000 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics of R-2HMP in rats but does not mention tuaminoheptane or any pharmacogenomic effects (gene variants altering PK/PD). |
| popPK | Gurov_2022 | irrelevant | 0 | 0 | The paper is a clinical review on topical nasal therapy that mentions tuaminoheptane as an ingredient in a combination product but provides no pharmacokinetic data or quantitative disposition parameters. |
| PGx | Gurov_2022 | not_relevant | 0 | 0 | The paper discusses the clinical use of a topical combination drug containing tuaminoheptane but does not report any pharmacogenomic analysis, genetic variants, or genotype-specific PK/PD parameters. |
| popPK | Gurov_2023 | irrelevant | 0 | 0 | The paper is a review of pathogenesis and treatment for rhinosinusitis, containing no pharmacokinetic data for tuaminoheptane. |
| PGx | Gurov_2023 | not_relevant | 0 | 0 | The paper discusses the clinical use and pathogenesis of tuaminoheptane in sinusitis but does not report any pharmacogenomic effects or genotype-dependent changes in its pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btuaminoheptane%5D&body=Drug%3A%20tuaminoheptane%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tuaminoheptane/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
