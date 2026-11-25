<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lurasidone&quot;}]"></div>

# lurasidone

- **generic name:** lurasidone
- **ATC codes:** `N05AE05`
- **DrugBank:** [DB08815](https://go.drugbank.com/drugs/DB08815) · **PubChem:** [CID 213046](https://pubchem.ncbi.nlm.nih.gov/compound/213046)
- **molar mass:** 492.676 g/mol (C28H36N4O2S) — DrugBank
- **groups:** approved, investigational

## About

Lurasidone is an atypical antipsychotic used to treat schizophrenia, bipolar depression, and other mood disorders. It is administered orally in tablet form. The medication is authorised in the European Union and has generic versions available in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416992](https://www.wikidata.org/wiki/Q416992), [Wikipedia](https://en.wikipedia.org/wiki/Lurasidone?oldid=1372134771) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lurasidone | parent | 492.676 | C28H36N4O2S | DrugBank | [213046](https://pubchem.ncbi.nlm.nih.gov/compound/213046) | Dai_2026, Yang_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Dai_2026_reference](drugs/drug_lurasidone/Lurasidone_Dai2026_reference.md) | — | 1-compartment (no model) | 2 | Dai C et al., The impact of CYP3A4 rs2242480 on oral…, Journal of affective disord… (2026) | [10.1016/j.jad.2025.120588](https://doi.org/10.1016/j.jad.2025.120588) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Yang_2026_final_model](drugs/drug_lurasidone/Lurasidone_Yang2026_final_model.md) | — | 1-compartment (no model) | 3 | Yang Y et al., Impact of valproate co-medication and a…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1810528](https://doi.org/10.3389/fphar.2026.1810528) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ pop](drugs/drug_lurasidone/Lurasidone_Yang2026_pop.md) | — | 1-compartment (no model) | 3 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Zhuang_2023_Kv_current](drugs/drug_lurasidone/pd_Zhuang_2023_Kv_current.md) | Kv current ← lurasidone · direct sigmoid Emax (Hill) effect | — | Zhuang W et al., Lurasidone blocks the voltage-gated pot…, European journal of pharmac… (2023) | [10.1016/j.ejphar.2023.176005](https://doi.org/10.1016/j.ejphar.2023.176005) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:30 | 0:18 | 1/2/0 | 1/0/0 | 0/0/0 | 5,947/2,102 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hu_2017 | not_relevant | 0 | 0 | The study evaluates PK parameters in a specific ethnic group (Chinese) but does not report specific gene variants, genotypes, or phenotypes influencing these parameters. |
| popPK | Meyer_2017 | irrelevant | 0 | 0 | This is a real-world weight-change (metabolic outcomes) study with no pharmacokinetic parameters for lurasidone. |
| popPK | Sözer_2025 | irrelevant | 3 | 8 | The study reports only non-compartmental AUC and Cmax values for a bioequivalence comparison, lacking the clearance, volume, or compartmental model parameters required for population-pharmacokinetic extraction. |
| PGx | Sözer_2025 | not_relevant | 0 | 0 | The paper reports a bioequivalence study comparing two formulations in healthy subjects and does not investigate the effect of gene variants, genotypes, or phenotypes on lurasidone pharmacokinetics or pharmacodynamics. |
| popPK | Yu_2025 | irrelevant | 2 | 0 | The study is a bioequivalence trial that reports ratio metrics and qualitative trends rather than specific quantitative disposition parameters (CL, V, Ka) for lurasidone, and no numeric values are present in the evidence. |
| PGx | Yu_2025 | not_relevant | 0 | 0 | The study evaluates bioequivalence of two formulations and the effect of food, containing no genetic or pharmacogenomic data. |
| popPK | Zhuang_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lurasidone's effect on voltage-gated potassium channels in rabbit coronary arterial smooth muscle cells and reports no pharmacokinetic parameters. |
| PGx | Zhuang_2023 | not_relevant | 0 | 0 | The paper investigates the electrophysiological mechanism of lurasidone on potassium channels and does not report any pharmacogenomic interactions or changes in PK/PD parameters based on gene variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blurasidone%5D&body=Drug%3A%20lurasidone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lurasidone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:29 UTC</sub>
