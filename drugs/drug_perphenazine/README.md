<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;perphenazine&quot;}]"></div>

# perphenazine

- **generic name:** perphenazine
- **ATC codes:** `N05AB03`
- **DrugBank:** [DB00850](https://go.drugbank.com/drugs/DB00850) · **PubChem:** [CID 4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748)
- **molar mass:** 403.969 g/mol (C21H26ClN3OS) — DrugBank
- **groups:** approved, investigational

## About

Perphenazine is a typical antipsychotic drug used to treat schizophrenia and other conditions. It is given orally or via parenteral routes. It is in clinical use for decades.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423520](https://www.wikidata.org/wiki/Q423520), [Wikipedia](https://en.wikipedia.org/wiki/Perphenazine?oldid=1384530799) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perphenazine | parent | 403.969 | C21H26ClN3OS | DrugBank | [4748](https://pubchem.ncbi.nlm.nih.gov/compound/4748) | Jin_2010 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Jin_2010_reference](drugs/drug_perphenazine/Perphenazine_Jin2010_reference.md) | — | 1-compartment (no model) | 2 | Jin Y et al., Population pharmacokinetics of perphena…, Journal of clinical pharmac… (2010) | [10.1177/0091270009343694](https://doi.org/10.1177/0091270009343694) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Otręba_2018_U87_MG_cell_viability](drugs/drug_perphenazine/pd_Otr_ba_2018_U87_MG_cell_viability.md) | U87-MG cell viability ← perphenazine · direct sigmoid Emax (Hill) effect | — | Otręba M et al., Perphenazine and prochlorperazine induc…, Die Pharmazie (2018) | [10.1691/ph.2018.7806](https://doi.org/10.1691/ph.2018.7806) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:48 | 0:04 | 1/0/0 | 1/0/0 | 0/0/0 | 4,291/170 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bustamante_2019 | irrelevant | 0 | 0 | The study focuses on in vitro anti-leishmanial activity (EC50) of perphenazine, not the pharmacokinetic disposition parameters (CL, V, ka, etc.) of the drug itself. |
| PGx | Bustamante_2019 | not_relevant | 0 | 0 | The paper discusses drug repurposing for leishmaniasis and reports in vitro activity and PK simulations for perphenazine, but does not investigate any genetic variants or pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Hensler_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of dopamine receptors in rabbit retina, not a pharmacokinetic study of perphenazine. |
| PGx | Hensler_1987 | not_relevant | 0 | 0 | The paper investigates the pharmacological characterization of D-1 dopamine receptors in rabbit retina and does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of perphenazine. |
| popPK | Hermes_2011 | irrelevant | 0 | 0 | The study analyzes the association between weight change and symptom reduction (PANSS scores) in a clinical trial, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for perphenazine. |
| PGx | Hermes_2011 | not_relevant | 0 | 0 | The paper investigates the correlation between weight change and symptom reduction in the CATIE trial without reporting any pharmacogenomic data or genotype-specific effects on PK/PD parameters. |
| PGx | Jin_2010 | not_relevant | 1 | 2 | The study analyzes demographic covariates (race and smoking) on perphenazine PK but does not report effects of specific gene variants or genotypes (pharmacogenomics). |
| popPK | Otreba_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of melanogenesis and antioxidant enzymes, not a pharmacokinetic study of perphenazine. |
| PGx | Otreba_2016 | not_relevant | 0 | 0 | The study investigates the ex vivo toxicological effects of perphenazine on melanocytes and does not report any pharmacogenomic interactions or genetic variants affecting PK/PD parameters. |
| popPK | Otręba_2018 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay (measuring cell viability and EC50), not a pharmacokinetic study reporting clearance, volume, or half-life parameters. |
| PGx | Otręba_2018 | not_relevant | 0 | 0 | The paper investigates cytotoxicity in glioblastoma cells and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Overo_1977 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of nortriptyline, not perphenazine, which is used only as a co-administered drug to test for interaction. |
| PGx | Overo_1977 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (perphenazine affecting nortriptyline kinetics), not a pharmacogenomic effect on perphenazine's own PK/PD. |
| popPK | Perera_2014 | relevant | 7 | 1 | The study is a pharmacometric model for perphenazine but does not list the specific quantitative parameter values (CL, V, etc.) for perphenazine, only CV% and sampling windows. |
| PGx | Perera_2014 | not_relevant | 0 | 0 | The paper describes optimal sampling strategies for PK parameter estimation and does not report the effect of any gene variant or genotype on the pharmacokinetics or pharmacodynamics of perphenazine. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study reports population PK parameters for haloperidol, while perphenazine is only mentioned as a co-administered CYP2D6 substrate whose inclusion did not improve the model. |
| PGx | Yukawa_2002 | not_relevant | 0 | 0 | The paper analyzes the population pharmacokinetics of haloperidol and does not report pharmacogenomic effects or PK/PD parameters for perphenazine. |
| popPK | Zang_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for olanzapine, while perphenazine is only mentioned as a comedication affecting olanzapine clearance, not as the subject drug. |
| PGx | Zang_2021 | not_relevant | 0 | 0 | The study focuses on non-genetic covariates (smoking, sex, comedication, infection) on olanzapine PK and does not investigate genetic variants or pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperphenazine%5D&body=Drug%3A%20perphenazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_perphenazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:47 UTC</sub>
