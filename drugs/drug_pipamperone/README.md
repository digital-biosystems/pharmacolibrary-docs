<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;pipamperone&quot;}]"></div>

# pipamperone

- **generic name:** pipamperone
- **ATC codes:** `N05AD05`
- **DrugBank:** [DB09286](https://go.drugbank.com/drugs/DB09286) · **PubChem:** [CID 4830](https://pubchem.ncbi.nlm.nih.gov/compound/4830)
- **molar mass:** 375.488 g/mol (C21H30FN3O2) — DrugBank
- **groups:** investigational

## About

Pipamperone is a butyrophenone antipsychotic intended for schizophrenia and depression-related sleep issues. The medication is taken orally in tablet form. It is currently classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q415118](https://www.wikidata.org/wiki/Q415118), [Wikipedia](https://en.wikipedia.org/wiki/Pipamperone?oldid=1384936943) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pipamperone | parent | 375.488 | C21H30FN3O2 | DrugBank | [4830](https://pubchem.ncbi.nlm.nih.gov/compound/4830) | Kloosterboer_2020 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Kloosterboer_2020_reference](drugs/drug_pipamperone/Pipamperone_Kloosterboer2020_reference.md) | — | 1-compartment (no model) | 3 | Kloosterboer SM et al., Pipamperone Population Pharmacokinetics…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00894-y](https://doi.org/10.1007/s40262-020-00894-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:17 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 3,331/152 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bohny_2023 | irrelevant | 0 | 0 | The study is a clinical evaluation of QTc interval prolongation and side effects, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka, etc.) for pipamperone. |
| PGx | Bohny_2023 | not_relevant | 0 | 0 | The study reports dose-dependent QTc prolongation in a clinical cohort but does not investigate any gene variants or genotypes. |
| popPK | Gangapersad_2026 | irrelevant | 0 | 0 | The study is a pharmacoeconomic/dispensing analysis reporting dosage and duration metrics, not pharmacokinetic parameters. |
| PGx | Gangapersad_2026 | not_relevant | 0 | 0 | The paper analyzes dispensing patterns of sedative antipsychotics and contains no data on pharmacogenomics, gene variants, or their effects on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Krauss_2025 | irrelevant | 0 | 0 | The paper is a Delphi consensus study on sedation cut-off doses, not a pharmacokinetic study reporting disposition parameters for pipamperone. |
| PGx | Krauss_2025 | not_relevant | 0 | 0 | The study is a consensus process defining dosing cut-offs for sedation in palliative care and contains no pharmacogenomic analysis or gene-drug interactions. |
| popPK | Löffler_2008 | irrelevant | 0 | 0 | The paper is a clinical case report on vegetative disturbances (hypothermia/fever) and does not report any pharmacokinetic parameters for pipamperone. |
| PGx | Löffler_2008 | not_relevant | 0 | 0 | The paper is a case report on recurrent hypothermia during antipsychotic therapy and does not report any gene variants or pharmacogenomic effects. |
| popPK | Squelart_1977 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting behavioral improvements in schizophrenic patients, with no pharmacokinetic parameters (CL, V, ka, etc.) reported. |
| PGx | Squelart_1977 | not_relevant | 0 | 0 | The study reports clinical efficacy and safety in a general patient population but does not investigate genetic variants or their impact on pipamperone pharmacokinetics or pharmacodynamics. |
| popPK | Stegmann_2015 | irrelevant | 0 | 0 | This is an epidemiological study on the prevalence and medication usage of hyperkinetic disorders, not a pharmacokinetic study, and contains no PK parameters for pipamperone. |
| PGx | Stegmann_2015 | not_relevant | 0 | 0 | The paper discusses the prevalence and prescription of pipamperone in ADHD patients but does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Wouters_1978 | irrelevant | 0 | 0 | This is a clinical follow-up study on efficacy/switching treatments, not a pharmacokinetic study, and contains no PK parameters for pipamperone. |
| PGx | Wouters_1978 | not_relevant | 0 | 0 | The paper describes a clinical case series regarding dosage changes in psychiatric patients and contains no data on gene variants or their effects on pharmacokinetics or pharmacodynamics. |
| popPK | van_1975 | irrelevant | 0 | 0 | The paper is a clinical efficacy study in mental retardates and does not report any pharmacokinetic parameters for pipamperone. |
| PGx | van_1975 | not_relevant | 0 | 0 | The paper is a clinical trial in mental retardates reporting behavioral outcomes, with no mention of pharmacogenomics, gene variants, or PK/PD parameter changes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpipamperone%5D&body=Drug%3A%20pipamperone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pipamperone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-06 16:45 UTC</sub>
