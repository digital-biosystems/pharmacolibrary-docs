<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;oxantel&quot;}]"></div>

# oxantel

- **generic name:** oxantel
- **ATC codes:** `P02CC02`
- **DrugBank:** [DB13670](https://go.drugbank.com/drugs/DB13670) · **PubChem:** none
- **molar mass:** 216.284 g/mol (C13H16N2O) — DrugBank
- **groups:** investigational

## About

Oxantel is an antinematodal anthelmintic used to treat trichuriasis. It is given orally in forms such as suspensions and tablets. It is widely used in animal medicine for domestic animals and livestock, and its status as an investigational drug suggests limited or specific human use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1227207](https://www.wikidata.org/wiki/Q1227207), [Wikipedia](https://en.wikipedia.org/wiki/Oxantel?oldid=1360822884) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bartos_2009_Peak_current](drugs/drug_oxantel/pd_Bartos_2009_Peak_current.md) | Macroscopic peak current of α7-5HT3A receptors ← oxantel · direct sigmoid Emax (Hill) effect | — | Bartos M et al., Glutamine 57 at the complementary bindi…, The Journal of biological c… (2009) | [10.1074/jbc.M109.013797](https://doi.org/10.1074/jbc.M109.013797) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schärer_2023_hatching_percentage](drugs/drug_oxantel/pd_Sch_rer_2023_hatching_percentage.md) | egg-hatching ← oxantel pamoate · direct sigmoid Emax (Hill) effect | — | Schärer A et al., Trichuris muris egg-hatching assay for…, International journal for p… (2023) | [10.1016/j.ijpddr.2023.10.001](https://doi.org/10.1016/j.ijpddr.2023.10.001) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:58 | 0:03 | 0/0/0 | 2/0/0 | 0/0/0 | 3,949/207 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartos_2009 | irrelevant | 0 | 0 | This is an in vitro electrophysiology/receptor pharmacology study of oxantel on nicotinic receptors, with no pharmacokinetic disposition parameters (CL, V, ka, half-life, PK model). |
| popPK | Bavo_2025 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) and electrophysiological study of oxantel as a nicotinic acetylcholine receptor modulator in oocytes, containing no pharmacokinetic parameters. |
| PGx | Bavo_2025 | not_relevant | 0 | 0 | The paper investigates the structural determinants of oxantel analogs and their pharmacological activity on nicotinic acetylcholine receptor subtypes, but does not report any gene variants, genotypes, or pharmacogenomic effects on oxantel's PK or PD parameters. |
| popPK | Brussee_2021 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of tribendimidine metabolites (dADT/adADT), not oxantel; oxantel is only a co-administered drug used to check for drug-drug interactions, and no PK parameters for oxantel itself are reported. |
| PGx | Brussee_2021 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and efficacy of tribendimidine (and its metabolites) and investigates drug-drug interactions with oxantel, but does not report any gene variants or genotypes affecting PK/PD parameters for oxantel. |
| popPK | Easland_2023 | irrelevant | 0 | 0 | In vitro egg-hatching assay only; oxantel is a test compound with EC50 &gt;100 µM, no PK parameters. |
| popPK | Kaji_2020 | irrelevant | 0 | 0 | This is an electrophysiology/pharmacodynamics study of hookworm nicotinic acetylcholine receptors in Xenopus oocytes; oxantel is only a test ligand, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Schärer_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring egg hatching inhibition (EC50) and does not report any pharmacokinetic parameters (CL, V, etc.) for oxantel. |
| PGx | Schärer_2023 | not_relevant | 0 | 0 | The paper reports in vitro efficacy (EC50) of oxantel on parasite eggs and does not investigate any gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxantel%5D&body=Drug%3A%20oxantel%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oxantel/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
