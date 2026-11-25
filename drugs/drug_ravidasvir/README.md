<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ravidasvir&quot;}]"></div>

# ravidasvir

- **generic name:** ravidasvir
- **ATC codes:** `J05AP13`
- **DrugBank:** [DB15652](https://go.drugbank.com/drugs/DB15652) · **PubChem:** none
- **molar mass:** 762.912 g/mol (C42H50N8O6) — DrugBank
- **groups:** investigational

## About

Ravidasvir is a direct-acting antiviral drug used to treat chronic hepatitis C. It is administered orally in tablet form. It is used in Russia and Malaysia for this condition.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q25101668](https://www.wikidata.org/wiki/Q25101668), [Wikipedia](https://en.wikipedia.org/wiki/Ravidasvir?oldid=1361086997) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ravidasvir | parent | 762.912 | C42H50N8O6 | DrugBank | — | Panjasawatwong_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Panjasawatwong_2024_reference](drugs/drug_ravidasvir/Ravidasvir_Panjasawatwong2024_reference.md) | — | 1-compartment (no model) | 1 | Panjasawatwong N et al., Population pharmacokinetics of ravidasv…, Antimicrobial agents and ch… (2024) | [10.1128/aac.00008-24](https://doi.org/10.1128/aac.00008-24) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:54 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 4,056/152 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abu_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial (SVR12) with no pharmacokinetic data or quantitative disposition parameters reported. |
| PGx | Abu_2026 | not_relevant | 0 | 0 | The study is a clinical trial evaluating regimen duration (8 vs. 12 weeks) for non-inferiority of efficacy (SVR12) and safety, with no reported pharmacokinetic (PK) or pharmacodynamic (PD) data or analysis of gene variant/genotype effects on drug levels or response. |
| PGx | Andrieux-Meyer_2021 | not_relevant | 0 | 0 | Trial reports efficacy/safety and lists PK objectives, but no gene variant/genotype effect on ravidasvir PK or PD parameters is reported. |
| popPK | Esmat_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting virologic response rates (SVR12) and safety, containing no pharmacokinetic data or quantitative disposition parameters. |
| PGx | Esmat_2017 | not_relevant | 0 | 0 | The paper evaluates clinical efficacy (SVR12) of ravidasvir in HCV patients but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Gomaa_2021 | irrelevant | 0 | 0 | The provided evidence is a clinical efficacy overview discussing treatment outcomes and safety, with no mention of pharmacokinetic parameters or models. |
| PGx | Gomaa_2021 | not_relevant | 0 | 0 | The text describes the clinical efficacy and approval status of ravidasvir but contains no information regarding pharmacogenomic effects on PK or PD parameters. |
| popPK | Hafez_2018 | irrelevant | 0 | 0 | The paper is a narrative review summarizing clinical trial outcomes and general properties of ravidasvir but does not provide quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PGx | Hafez_2018 | not_relevant | 0 | 0 | The paper is a general review of ravidasvir's pharmacology and clinical efficacy, providing no data on pharmacogenomic variants or their impact on PK/PD parameters. |
| PGx | Hefnawy_2020 | not_relevant | 0 | 0 | Paper reports an analytical method and rat PK of ravidasvir with no gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Kao_2018 | irrelevant | 0 | 0 | The study reports efficacy (SVR12) and safety endpoints but does not provide pharmacokinetic parameter estimates for ravidasvir. |
| PGx | Kao_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy (SVR12) and safety but does not analyze the impact of genetic variants on the pharmacokinetics or pharmacodynamics of ravidasvir. |
| popPK | Muhamad_2026 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing the time to viral load suppression (efficacy/virologic response) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for ravidasvir. |
| PGx | Muhamad_2026 | not_relevant | 0 | 0 | The study investigates clinical treatment duration and HCV genotype effects on viral suppression time, but does not report pharmacogenomic variations (e.g., human genetic polymorphisms affecting drug metabolism) influencing the PK or PD of ravidasvir. |
| PGx | Panjasawatwong_2024 | not_relevant | 0 | 0 | The paper reports the impact of demographic and disease covariates (e.g., sex, ART, albumin) on PK, but does not report any pharmacogenomic effects (gene variants/genotypes). |
| popPK | Xiao_2020 | irrelevant | 0 | 0 | The study focuses on safety, efficacy, and cytokine profiling rather than pharmacokinetic parameters for ravidasvir. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | The study reports safety, efficacy, and cytokine changes in a small cohort but does not analyze specific gene variants or genotypes affecting PK/PD parameters of ravidasvir. |
| PGx | Xu_2019 | not_relevant | 3 | 3 | IL28B genotype and NS5A polymorphisms are analyzed only as subgroups for SVR12 efficacy, not as modifiers of ravidasvir PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bravidasvir%5D&body=Drug%3A%20ravidasvir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ravidasvir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:53 UTC</sub>
